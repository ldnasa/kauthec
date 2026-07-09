#!/usr/bin/env node
/**
 * token-audit.js - Kauthec do Brasil, Industrial Kauthec v1
 *
 * Varre o projeto atras de valor visual chumbado e sugere o token da Layer 2
 * que deveria estar no lugar.
 *
 *   node design_system/scripts/token-audit.js
 *   node design_system/scripts/token-audit.js --json
 *
 * Sai com codigo 1 se achar qualquer violacao.
 * Sem dependencia. Node 18+.
 *
 * ----------------------------------------------------------------------------
 * Como ele decide o que auditar:
 *
 *   .css / .js  -> arquivo inteiro, menos comentarios
 *   .html       -> SOMENTE o conteudo de <style>...</style> e dos atributos
 *                  style="...". Texto corrido de HTML nao e CSS, e uma pagina
 *                  que EXPLICA a regra ("nunca use transition: all") nao pode
 *                  falhar por citar a regra.
 *
 * Regras de prosa (em-dash, palavra proibida) rodam so nos arquivos do SITE,
 * nunca dentro de design_system/, pelo mesmo motivo: a documentacao precisa
 * poder nomear o que proibe.
 * ----------------------------------------------------------------------------
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");
const DS = path.join(ROOT, "design_system");

/* Arquivos que DEFINEM os tokens. Nao se auditam. */
const TOKEN_SOURCES = new Set([path.join(DS, "tokens.css")]);

/* wireframe.html e referencia de arquitetura de informacao, nao build. */
const SKIP_FILES = new Set([path.join(ROOT, "wireframe.html")]);

const SKIP_DIRS = new Set([
  "node_modules", ".git", "_archive", "screenshots", "refs", "_source", "scripts",
]);
const EXTS = new Set([".html", ".css", ".js"]);

/* ------------------------------------------------------------------
   Allowlist. Documentada em specs/tokens/token-reference.md.
   ------------------------------------------------------------------ */
const ALLOWED_PX = new Set(["0px", "1px", "2px", "18px", "24px", "32px", "48px"]);
const ALLOWED_DURATION = new Set(["0.001ms", "0s", "0ms"]);

/* ------------------------------------------------------------------
   Helpers de valor
   ------------------------------------------------------------------ */
const usesToken = (v) => /var\(--/.test(v);

const HEX_MAP = {
  "#faa21b": "--color-accent (ou --color-accent-text se for texto)",
  "#ffc861": "--color-accent-hover",
  "#e08f12": "--color-accent-hover (tema claro)",
  "#8a5a00": "--color-accent-text (tema claro)",
  "#070707": "--color-on-accent",
  "#101011": "--color-bg",
  "#1b1b1b": "--color-surface",
  "#232323": "--color-surface-raised",
  "#ffffff": "--color-text",
  "#fff": "--color-text",
  "#f6f6f6": "--color-bg (tema claro)",
  "#e5484d": "--color-danger",
  "#46a758": "--color-success",
};

/* ------------------------------------------------------------------
   Regras de CSS. `prop` casa declaracoes; `check` recebe o VALOR ja
   isolado, o que elimina o backtracking do lookahead (?!var\().
   ------------------------------------------------------------------ */
const CSS_RULES = [
  {
    id: "hardcoded-radius",
    label: "border-radius chumbado",
    prop: /border-radius/,
    check: (v) => (usesToken(v) || /^0$/.test(v.trim()) ? null : "--radius-none. Este sistema tem radius 0, sem excecao"),
  },
  {
    id: "hardcoded-shadow",
    label: "box-shadow chumbado",
    prop: /box-shadow/,
    check: (v) => (usesToken(v) || /^none$/i.test(v.trim()) ? null : "--shadow-card ou --shadow-lift. O default e --shadow-none"),
  },
  {
    id: "hardcoded-zindex",
    label: "z-index chumbado",
    prop: /z-index/,
    check: (v) => (usesToken(v) || /^(auto|0)$/i.test(v.trim()) ? null : "--z-behind, --z-hairline, --z-sticky, --z-header, --z-float ou --z-modal"),
  },
  {
    id: "hardcoded-fontweight",
    label: "font-weight chumbado",
    prop: /font-weight/,
    check: (v) => (usesToken(v) || /^(inherit|normal|bold)$/i.test(v.trim()) ? null : "--weight-regular|medium|semibold|bold|black"),
  },
  {
    id: "hardcoded-fontsize",
    label: "font-size chumbado",
    prop: /font-size/,
    check: (v) => (usesToken(v) || /^inherit$/i.test(v.trim()) ? null : "--text-2xs..4xl, --text-display ou --text-h2"),
  },
  {
    id: "transition-all",
    label: "transition: all",
    prop: /^transition$/,
    check: (v) => (/^all\b/.test(v.trim()) ? "listar as propriedades. transition: all anima o que voce nao pediu" : null),
  },
  {
    id: "hardcoded-duration",
    label: "duracao chumbada",
    prop: /^(transition|animation)(-duration)?$/,
    check: (v) => {
      if (usesToken(v)) return null;
      const times = v.match(/\b\d+(?:\.\d+)?m?s\b/g) || [];
      const bad = times.filter((t) => !ALLOWED_DURATION.has(t));
      return bad.length ? `${bad.join(", ")} -> --dur-micro (200ms), --dur-base (450ms), --dur-slow (700ms) ou --dur-shimmer` : null;
    },
  },
  {
    id: "hardcoded-easing",
    label: "easing chumbado",
    prop: /^(transition|animation)(-timing-function)?$/,
    check: (v) => (!usesToken(v) && /cubic-bezier\(/.test(v) ? "--ease-standard ou --ease-exit" : null),
  },
  {
    id: "hardcoded-spacing",
    label: "espacamento chumbado",
    prop: /^(margin|padding|gap|row-gap|column-gap)(-(top|right|bottom|left|inline|block))?$/,
    check: (v) => {
      // clamp() com literais e escapatoria: espaco fluido mora no tokens.css.
      if (usesToken(v) || /^(0|auto|inherit)$/.test(v.trim())) return null;
      if (/clamp\(|min\(|max\(/.test(v)) return "espaco fluido pertence ao tokens.css. Use --section-y, --section-x ou --space-1..7";
      const pxs = v.match(/\b\d+px\b/g) || [];
      const bad = pxs.filter((p) => !ALLOWED_PX.has(p));
      return bad.length ? `${bad.join(", ")} -> --space-1..7 (4 8 16 24 40 64 96)` : null;
    },
  },
  {
    id: "hardcoded-hex",
    label: "cor hex chumbada",
    prop: /.*/,
    check: (v, prop) => {
      if (/^--/.test(prop)) return null; // definicao de token
      // hex dentro de var(--x, #fallback) ou url() nao conta
      const stripped = v.replace(/var\([^)]*\)/g, "").replace(/url\([^)]*\)/g, "");
      const hex = stripped.match(/#[0-9a-fA-F]{3,8}\b/);
      if (!hex) return null;
      return HEX_MAP[hex[0].toLowerCase()] || "um alias de --color-*";
    },
  },
];

/* Rodam sobre o CSS inteiro, nao por declaracao. */
const CSS_BLOCK_RULES = [
  {
    id: "button-levitates",
    label: "botao que levita no hover",
    re: /:hover[^{}]*\{[^{}]*transform\s*:\s*translateY\(\s*-/g,
    suggest: () => "massa industrial nao flutua. O feedback de hover e a cor",
  },
  {
    id: "layer-1-leak",
    label: "primitivo da Layer 1 fora do tokens.css",
    re: /var\(\s*(--kt-[a-z0-9-]+)/g,
    suggest: (m) => `${m} e Layer 1. Componente usa alias semantico da Layer 2`,
  },
];

/* Rodam sobre texto do SITE. Nunca dentro de design_system/. */
const PROSE_RULES = [
  {
    id: "em-dash",
    label: "em-dash",
    re: /—/g,
    suggest: () => "proibido em qualquer saida ao cliente. Use hifen ou reescreva",
  },
  {
    id: "forbidden-word",
    label: "palavra proibida",
    re: /\b(inovador(?:a|es|as)?|disruptiv[oa]s?|solu[cç][oõ]es|empoderador(?:a|es|as)?|bem-vind[oa]s?)\b/gi,
    suggest: (m) => `"${m}" e proibida no projeto (CLAUDE.md)`,
  },
];

/* ------------------------------------------------------------------
   Extracao
   ------------------------------------------------------------------ */
function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      walk(full, out);
    } else if (
      EXTS.has(path.extname(entry.name)) &&
      !TOKEN_SOURCES.has(full) &&
      !SKIP_FILES.has(full)
    ) {
      out.push(full);
    }
  }
  return out;
}

const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, "");

/** Devolve [{ css, lineOffset }] com todo CSS real de um arquivo. */
function extractCss(source, ext) {
  if (ext === ".css") return [{ css: source, offset: 0 }];

  const chunks = [];
  if (ext !== ".html") return chunks;

  // <style>...</style>
  const styleRe = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = styleRe.exec(source)) !== null) {
    const offset = source.slice(0, m.index).split("\n").length - 1;
    chunks.push({ css: m[1], offset });
  }

  // style="..." (uma linha cada)
  source.split(/\r?\n/).forEach((line, i) => {
    // Linha de swatch: o hex e o dado, nao o estilo.
    if (/data-copy\s*=/.test(line)) return;
    const attrRe = /style\s*=\s*"([^"]*)"/g;
    let a;
    while ((a = attrRe.exec(line)) !== null) {
      chunks.push({ css: a[1], offset: i, inline: true });
    }
  });

  return chunks;
}

/** Quebra CSS em declaracoes prop:value com numero de linha relativo. */
function declarations(css) {
  const out = [];
  css.split(/\r?\n/).forEach((line, i) => {
    const clean = stripComments(line);
    const declRe = /(^|[;{])\s*([-a-zA-Z]+)\s*:\s*([^;{}]+)/g;
    let m;
    while ((m = declRe.exec(clean)) !== null) {
      out.push({ prop: m[2].trim(), value: m[3].trim(), line: i });
    }
  });
  return out;
}

function auditFile(file) {
  const rel = path.relative(ROOT, file);
  const ext = path.extname(file);
  const source = fs.readFileSync(file, "utf8");
  const inDesignSystem = file.startsWith(DS + path.sep);
  const findings = [];

  const push = (line, rule, found, suggest) =>
    findings.push({ file: rel, line: line + 1, rule: rule.id, label: rule.label, found: String(found).slice(0, 70).trim(), suggest });

  // --- CSS por declaracao
  for (const chunk of extractCss(source, ext)) {
    for (const d of declarations(chunk.css)) {
      for (const rule of CSS_RULES) {
        if (!rule.prop.test(d.prop)) continue;
        const verdict = rule.check(d.value, d.prop);
        if (verdict) push(chunk.offset + d.line, rule, `${d.prop}: ${d.value}`, verdict);
      }
    }
  }

  // --- CSS por bloco
  if (ext === ".css" || ext === ".html") {
    const allCss = extractCss(source, ext).map((c) => c.css).join("\n");
    const clean = stripComments(allCss);
    for (const rule of CSS_BLOCK_RULES) {
      rule.re.lastIndex = 0;
      let m;
      while ((m = rule.re.exec(clean)) !== null) {
        const line = clean.slice(0, m.index).split("\n").length - 1;
        push(line, rule, m[1] || m[0], rule.suggest(m[1] || m[0]));
      }
    }
  }

  // --- JS: so vazamento de Layer 1 e transition: all em string
  if (ext === ".js") {
    const clean = source.replace(/^\s*\/\/.*$/gm, "");
    for (const rule of CSS_BLOCK_RULES) {
      rule.re.lastIndex = 0;
      let m;
      while ((m = rule.re.exec(clean)) !== null) {
        const line = clean.slice(0, m.index).split("\n").length - 1;
        push(line, rule, m[1] || m[0], rule.suggest(m[1] || m[0]));
      }
    }
  }

  // --- Prosa: so no site, nunca na documentacao do DS
  if (!inDesignSystem) {
    source.split(/\r?\n/).forEach((line, i) => {
      for (const rule of PROSE_RULES) {
        rule.re.lastIndex = 0;
        let m;
        while ((m = rule.re.exec(line)) !== null) {
          push(i, rule, m[0], rule.suggest(m[0]));
        }
      }
    });
  }

  return findings;
}

/* ------------------------------------------------------------------ */
const asJson = process.argv.includes("--json");
const files = walk(ROOT);
const findings = files.flatMap(auditFile);

if (asJson) {
  console.log(JSON.stringify({ scanned: files.length, findings }, null, 2));
  process.exit(findings.length ? 1 : 0);
}

const RESET = "\x1b[0m", DIM = "\x1b[2m", BOLD = "\x1b[1m";
const GOLD = "\x1b[33m", RED = "\x1b[31m", GREEN = "\x1b[32m";

console.log(`${BOLD}Kauthec DS - token audit${RESET}`);
console.log(`${DIM}${files.length} arquivo(s) varrido(s)${RESET}\n`);

if (!findings.length) {
  console.log(`${GREEN}Nenhum valor visual chumbado. Camada de token intacta.${RESET}`);
  process.exit(0);
}

const byFile = findings.reduce((acc, f) => ((acc[f.file] ||= []).push(f), acc), {});
for (const [file, list] of Object.entries(byFile)) {
  console.log(`${BOLD}${file}${RESET}`);
  for (const f of list) {
    console.log(`  ${RED}${String(f.line).padStart(4)}${RESET}  ${GOLD}${f.label}${RESET}  ${f.found}`);
    console.log(`  ${DIM}        -> ${f.suggest}${RESET}`);
  }
  console.log("");
}

const byRule = findings.reduce((acc, f) => ((acc[f.rule] = (acc[f.rule] || 0) + 1), acc), {});
console.log(`${BOLD}${findings.length} violacao(oes)${RESET}`);
for (const [rule, n] of Object.entries(byRule).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${DIM}${String(n).padStart(3)}  ${rule}${RESET}`);
}
console.log(`\n${DIM}Regras e allowlist: design_system/specs/tokens/token-reference.md${RESET}`);

process.exit(1);
