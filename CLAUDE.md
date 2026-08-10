# CLAUDE.md - Kauthec do Brasil

## DO THIS FIRST

When opening this project folder in Claude Code, invoke the
`web-build` skill (type `/web-build` or "iniciar build").

It will:
1. Validate this handoff manifest is complete
2. Polish the copy in `03-copy.md` using `Ralph`
3. Build the design system using `ds-builder`
4. Generate `DESIGN.md` (motion, a11y, microcopy, states, perf, SEO)
5. Implement the site (creative freedom - wireframe is structural only)
6. Cleanup (image compression, dead code, project README)

Never start coding without invoking `web-build` first.

---

## Project Overview

Institutional B2B site for Kauthec do Brasil.
Importer and distributor of industrial and agricultural belts, in market since 2007.
Target audience: resellers of rubber and industrial materials, belt resellers,
cooperatives and agribusiness groups, treated as partners.
Primary goal: recruit new partners and generate commercial contact (WhatsApp + form).
Key differentiator: delivery time, backed by in-house stock and technical certification.
Brand tone: industrial and trustworthy, serious and technical like a large manufacturer
but close and agile. Reference: Correias Mercurio.

---

## Tech Stack

- HTML5 semantic markup
- Tailwind CSS (via CDN in dev, optionally built CSS for production)
- Vanilla JavaScript
- Google Fonts

This is the agency's house stack. Do not introduce frameworks,
CSS-in-JS, jQuery, Bootstrap, or any other dependency without
explicit approval from Caio.

---

## Handoff Manifest

- `01-debriefing.md` - Project context, audience, market, pains
- `02-estrutura.md` - Approved page/section structure
- `03-copy.md` - Approved rough copy (will be polished by scribe)
- `wireframe.html` - Low-fi structural wireframe (IA reference only)
- `CLAUDE.md` - This file
- `my_brand_assets/` - Logo (gold/black), brand color #faa21b
- `refs/` - Visual references (Stitch/MJ/Flux outputs + screenshots),
  to be collected by Caio before build

---

## Wireframe Notice

The wireframe is **information architecture only**:
- Use it to confirm sections exist and copy is placed correctly
- Do NOT copy its layout, composition, or visual rhythm
- Build a unique, professional layout based on the design system
  (Passo B of `web-build`) and DESIGN.md (Passo C)
- Brand palette is gold/amber (#faa21b) + black. The wireframe is
  intentionally gray and does NOT reflect the final look.

---

## UX Principles (non-negotiable)

- **Two-Step Conversion**: Hero communicates partnership + delivery-time
  advantage in 4 seconds. Rest of page removes specific doubts.
- **Hick's Law**: One primary CTA per section ("Quero ser parceiro")
- **Miller's Law**: Max 5-7 items in lists
- **Von Restorff**: Delivery-time differential and Correia em V (flagship)
  are visually distinct
- **Peak-End**: Hero + final CTA are peak moments - extra polish

---

## Copy Rules

**Forbidden words** (already filtered in `03-copy.md`, applies to any
new copy: alt text, error messages, microcopy):
- inovador, disruptivo, empoderador
- bem-vindo, estou pronto, claro, perfeito (as filler)

**Exception (2026-08):** "soluções" is released for this client. It appears in
the copy Bruno approved in "Ajustes SITE.docx" (Produtos H1, Sobre block,
differentials band) and is used literally. Removed from the `token-audit.js`
rule as well.

**Forbidden punctuation:**
- Em-dash in any client-facing output. Use hyphen or rewrite.

---

## Coding Conventions

- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`)
- Mobile-first responsive (375px base)
- One H1 per page
- All custom CSS references design tokens via `var(--...)`
- No magic numbers in component styles
- `loading="lazy"` on below-fold images
- `rel="noopener noreferrer"` on external links
- Comments only when intent is non-obvious

---

## Observações Especiais

- **Prazo de entrega** é o diferencial central. Deve aparecer forte no hero
  e nos diferenciais. Confirmar prazo médio real com o cliente para virar número.
- **Correia em V** é o carro-chefe. Destacar na linha de produtos.
- **Calculadora de correia PVC e PU**: feature interativa em vanilla JS.
  Campos e formula de calculo a definir com o cliente.
- **Formulário Seja Parceiro** exige CNPJ e upload de cópia do contrato social.
- **Vídeo institucional** já existe no YouTube (youtu.be/eehBfJf0BmQ).
  Confirmar se ainda representa a empresa antes de embedar.
- **Fase 2 (não construir agora)**: Área do Revendedor com login,
  Central de Marketing, integração com ERP Sênior. Deixar ganchos, sem telas.
- **Sem Mercosul**: foco Brasil. Não mencionar Mercosul na copy.
- Dois WhatsApp (matriz PR e filial MT). Avaliar botão flutuante fixo.

---

## Credits

Strategic phase: Claude Web (system prompt: web-design agent).
Build phase: Claude Code + `web-build` skill.
Designer: Caio Augusto Liutti - Londrina S/A.
