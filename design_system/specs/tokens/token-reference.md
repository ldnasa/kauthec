---
spec: token-reference
layer: 2
source: ../../tokens.css
status: v1
---

# Referência de tokens

Todo token público do Industrial Kauthec v1, o que significa e quando usar.

**Regra:** componente referencia apenas Layer 2 (aliases). Se você escreveu `--kt-gold-500`
dentro de um componente, está errado: use `--color-accent`.

---

## Cor

### Superfície

| Token | Escuro | Claro | Quando usar |
|---|---|---|---|
| `--color-bg` | `#101011` | `#f6f6f6` | Fundo da página. Nunca outra coisa. |
| `--color-surface` | `#1b1b1b` | `#ffffff` | Card, painel, input, faixa que precisa se destacar do fundo |
| `--color-surface-raised` | `#232323` | `#ffffff` | Só onde há empilhamento real (dropdown, tooltip) |

### Texto

Sobre escuro a hierarquia é **branco rebaixado**, nunca cinza sólido. Cinza sólido sobre
preto perde a cor e vira sujeira.

| Token | Valor (escuro) | Quando usar |
|---|---|---|
| `--color-text` | `#ffffff` | Título, número, label de destaque |
| `--color-text-secondary` | `rgba(255,255,255,.72)` | Corpo. O default de parágrafo |
| `--color-text-tertiary` | `rgba(255,255,255,.44)` | Metadado, kicker em mono, legenda |
| `--color-text-muted` | `rgba(255,255,255,.26)` | Placeholder, desabilitado |

### Borda e a malha

| Token | Quando usar |
|---|---|
| `--color-border-subtle` | Divisor interno, gap de grade (grades sem gap), borda de card discreto |
| `--color-border` | Borda de input, botão secundário, painel |
| `--color-border-strong` | Hover de borda |
| `--color-hairline` | **Só a malha técnica.** O fio de 1px que desenha o grid no hero. Não usar como borda comum |

### Acento

| Token | Escuro | Claro | Quando usar |
|---|---|---|---|
| `--color-accent` | `#faa21b` | `#faa21b` | Preenchimento: CTA primário, filete, selo, ícone de destaque |
| `--color-accent-hover` | `#ffc861` | `#e08f12` | Hover do CTA primário |
| `--color-accent-text` | `#faa21b` | `#8a5a00` | **Texto** em ouro: kicker, palavra do H1, link. O alias troca de valor no tema claro porque o ouro puro reprova sobre fundo claro |
| `--color-on-accent` | `#070707` | `#070707` | Texto sobre preenchimento de ouro. Sempre |
| `--color-accent-wash` | 10% | 14% | Fundo de hover, faixa de destaque muito leve |
| `--color-accent-veil` | 20% | 28% | Fundo de badge, estado ativo |

**A restrição:** `#faa21b` sobre `#ffffff` dá 2.05:1 e sobre `#f6f6f6` dá 1.90:1. Reprova
até o mínimo de 3:1 para texto grande. Por isso `--color-accent-text` existe separado de
`--color-accent`, e por isso o sistema é dark-first.

### Funcionais

| Token | Quando usar |
|---|---|
| `--color-danger` | Só erro de formulário. Borda do input, texto do `<small>` |
| `--color-success` | Só confirmação de envio |

Nunca decorativos. Não existe terceira cor.

---

## Tipografia

| Token | Valor | Papel |
|---|---|---|
| `--font-display` | DM Sans | Título e display |
| `--font-ui` | DM Sans | Corpo, label, botão |
| `--font-mono` | IBM Plex Mono | Tabela KT, metadado, kicker, microtexto do hero |

Mono nunca é prosa. Se você está escrevendo uma frase em mono, você está errado.

| Token | Valor | Papel |
|---|---|---|
| `--text-2xs` | 12px | Metadado mono, caixa alta, tracking 0.12em |
| `--text-xs` | 14px | Label, legenda de card |
| `--text-sm` | **16px** | **Corpo. Piso absoluto.** |
| `--text-base` | 18px | Lead curto |
| `--text-md` | 20px | H3 |
| `--text-lg` | 24px | |
| `--text-xl` | 30px | |
| `--text-2xl` | 36px | |
| `--text-3xl` | 44px | Número grande |
| `--text-4xl` | 72px | |
| `--text-display` | `clamp(44px, 7vw, 96px)` | H1 |
| `--text-h2` | `clamp(34px, 4.4vw, 62px)` | H2 |

Por que 16px e não 14px: o parceiro tem 40+ e lê spec técnica no celular, no pátio da
revenda. A referência `manufact` usa 14px de corpo. Aqui divergimos de propósito.

| Token | Valor | Papel |
|---|---|---|
| `--weight-regular` | 400 | Raro |
| `--weight-medium` | 500 | **Corpo.** As duas refs industriais usam 500 dominante |
| `--weight-semibold` | 600 | H3, botão secundário |
| `--weight-bold` | 700 | H1, H2, botão primário |
| `--weight-black` | 900 | Só número grande |

| Token | Valor | Papel |
|---|---|---|
| `--tracking-display` | -0.02em | Todo título. **Sempre negativo** |
| `--tracking-body` | 0 | Corpo |
| `--tracking-meta` | 0.12em | Mono em caixa alta |

---

## Espaço

Escada `4 · 8 · 16 · 24 · 40 · 64 · 96`. O passo `--space-5` (40px) é o dominante,
herdado do machin.

| Token | Valor | Uso típico |
|---|---|---|
| `--space-1` | 4px | Gap de label para valor |
| `--space-2` | 8px | Gap de ícone para texto, gap de botões |
| `--space-3` | 16px | Padding interno pequeno, gap de lista |
| `--space-4` | 24px | Padding de card |
| `--space-5` | 40px | Gap entre blocos. O default |
| `--space-6` | 64px | Separação de sub-seção |
| `--space-7` | 96px | Raro |

| Token | Valor | |
|---|---|---|
| `--section-y` | `clamp(80px, 9vw, 160px)` | Respiro vertical entre seções. **Não negociável** |
| `--section-x` | `clamp(24px, 5vw, 80px)` | Respiro horizontal |
| `--content-max` | 1440px | Container |

---

## Forma

| Token | Valor |
|---|---|
| `--radius-none` `sm` `md` `lg` `xl` `full` | **todos 0** |
| `--border-width` | 1px |
| `--border-width-strong` | 2px |

Os seis aliases de radius existem apesar de valerem o mesmo. Motivo: quando alguém
escreve `border-radius: 8px`, o `token-audit.js` consegue apontar qual alias substituir.
Se houvesse um só, a mensagem de erro seria pior.

---

## Movimento

| Token | Valor | Quando |
|---|---|---|
| `--ease-standard` | `cubic-bezier(.44, 0, .56, 1)` | Reveal, transição de layout. Curva simétrica: sensação de massa |
| `--ease-exit` | `cubic-bezier(.12, .23, .5, 1)` | Hover, foco, micro-interação |
| `--dur-micro` | 200ms | Hover, foco |
| `--dur-base` | 450ms | Reveal, transição de seção |
| `--dur-slow` | 700ms | Animação de palavra no H1 |
| `--stagger` | 90ms | Atraso entre irmãos no reveal |

---

## Elevação

| Token | Quando |
|---|---|
| `--shadow-none` | O default. Este sistema é chapado |
| `--shadow-card` | Só onde há sobreposição real |
| `--shadow-lift` | Modal, dropdown |

Sem sombra padrão do Tailwind. Sem `inset` branco (isso é vidro, não metal).

---

## Camada

`--z-base` 0 · `--z-hairline` 1 · `--z-sticky` 10 · `--z-header` 20 ·
`--z-float` 30 (botão flutuante de WhatsApp) · `--z-modal` 40

Nenhum `z-index` fora desta lista.

---

## Allowlist do audit

Valores literais permitidos, e só estes:

- `border-radius: 0` (equivale a `--radius-none`)
- `1px` e `2px` em espaçamento (é largura de borda)
- `18px`, `24px`, `32px` em espaçamento (tamanho de ícone)
- `48px` (altura de controle, alvo de toque)
- `0.001ms`, `0s`, `0ms` em duração (bloco `prefers-reduced-motion`)
- `0`, `auto`, `inherit`, `none`, `normal`, `bold`
- Hex dentro de `data-copy` no showcase (é o dado, não o estilo)

**`clamp()`, `min()` e `max()` são proibidos em componente.** Espaço e tipo fluidos moram
em `tokens.css`, como `--section-y`, `--section-x`, `--text-display` e `--text-h2`.
Se você precisa de um valor fluido novo, ele vira token. Não vira `clamp()` solto.

## O que o audit lê

| Arquivo | O que é auditado |
|---|---|
| `.css` | Tudo, menos comentários |
| `.html` | **Só** o conteúdo de `<style>` e dos atributos `style="..."`. Texto corrido de HTML não é CSS: uma página que explica a regra não pode falhar por citar a regra |
| `.js` | Vazamento de Layer 1 e `transition: all` em string |

Regras de prosa (em-dash, palavra proibida) rodam **só nos arquivos do site**, nunca
dentro de `design_system/`. A documentação precisa poder nomear o que proíbe.

`wireframe.html` é ignorado: é referência de arquitetura de informação, não build.
