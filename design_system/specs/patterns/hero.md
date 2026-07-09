---
spec: hero
layer: 3
tokens: [--text-display, --tracking-display, --leading-display, --color-accent-text, --color-hairline, --font-mono, --text-2xs, --tracking-meta, --space-5, --space-6]
status: v1
---

# Hero

Um dos dois momentos de pico do site (Peak-End). O outro é o CTA final. Os dois recebem
o H1 grande e a animação de palavra. O resto da página é sóbrio.

Regra do briefing: **comunicar parceria + prazo em 4 segundos.**

## Composição

Hero partido. Nunca centralizado: nenhuma das três referências centraliza.

```
┌────────────────────────────────┬──────────────────┐
│                                │                  │
│  KICKER EM MONO, CAIXA ALTA    │  NORMAS          │
│                                │  NBR · DIN ·     │
│  H1 gigante, duas linhas,      │  ISO · ASTM ·    │
│  com uma palavra em ouro       │  RMA             │
│                                │  ──────────────  │
│  Lead de uma ou duas linhas    │  ESTOQUE         │
│                                │  +10.000 m/mês   │
│  [Quero ser parceiro] [WhatsApp] │  ──────────────  │
│                                │  ENTREGA         │
│  ─────────────────────────     │  ⚑ [prazo]       │
│  IBIPORÃ, PR · VÁRZEA GRANDE,  │                  │
│  MT · DESDE 2007 · ROLE        │                  │
└────────────────────────────────┴──────────────────┘
        malha de fios por cima de tudo
```

## Os cinco elementos

### 1. Kicker

Mono, 12px, caixa alta, `tracking: var(--tracking-meta)`, cor `--color-accent-text`.

```html
<span class="eyebrow">Importadora de correias desde 2007</span>
```

### 2. H1 com palavra em ouro

O H1 **nunca é monocromático**. As três referências colorem uma palavra.

```html
<h1>
  Seja parceiro de uma importadora que entrega no
  <span class="hl">prazo</span> que você prometeu.
</h1>
```

```css
h1 {
  font-family: var(--font-display);
  font-size: var(--text-display);   /* clamp(44px, 7vw, 96px) */
  font-weight: var(--weight-bold);
  letter-spacing: var(--tracking-display);
  line-height: var(--leading-display);
  max-width: 15ch;
}
.hl { color: var(--color-accent-text); }
```

A palavra em ouro é **`prazo`**. Não é decoração: é o diferencial nº1 confirmado pelo
cliente, e o eixo do site inteiro.

O H1 aprovado é a opção A de [`../../../03-copy-final.md`](../../../03-copy-final.md).

### 3. Dois CTAs

`primary` "Quero ser parceiro" + `secondary` "Falar no WhatsApp". O secundário nunca
compete: fundo `--color-surface`, não ouro.

### 4. Trilho de spec (o elemento que carrega o argumento)

Três células, à direita, separadas por filete. Herdadas direto do `machin`
(`COMPLIANCE` / `LOAD CAPACITY` / `OPERATIONAL CYCLES`).

| Rótulo | Valor | Pendência |
|---|---|---|
| `NORMAS` | NBR · DIN · ISO · ASTM · RMA | ⚑8 - são normas ou certificações? |
| `ESTOQUE` | +10.000 m por mês | ⚑3 - o número confere? |
| `ENTREGA` | `[prazo em dias úteis]` | **⚑6 - o buraco do hero** |

```html
<div class="hero-spec">
  <span>Normas</span>
  <strong>NBR · DIN · ISO · ASTM · RMA</strong>
</div>
```

Rótulo em mono, caixa alta, `--color-text-tertiary`. Valor em 20px, peso 600.

**⚑6 é o item mais caro do projeto.** O layout tem uma célula reservada esperando o número
do prazo. Sem ele, a célula fica com texto genérico ("Estoque próprio, expedição PR e MT")
e o hero perde justamente o argumento que o cliente disse ser o diferencial nº1.

Enquanto não chegar, marcar no HTML:

```html
<!-- ⚑6 trocar por "Entrega em X dias úteis" quando o Bruno confirmar -->
```

### 5. Microtexto de metadado

No rodapé do hero, acima da borda. Mono, 12px, `--color-text-tertiary`.

```
IBIPORÃ, PR · VÁRZEA GRANDE, MT · DESDE 2007 · ROLE PARA VER
```

Dado técnico como ornamento. Herdado do `manufact`
(`Based in: Los Angeles` · `SCROLL DOWN` · coordenadas).

## Fundo

Foto ou vídeo industrial full-bleed, dessaturado, uma fonte de luz quente.
Overlay `#101011` a 55%. Malha de fios por cima do overlay.

**A Kauthec não tem essa foto.** Ver `07 Assets` no showcase. Enquanto não houver,
o hero usa `--color-bg` chapado + malha, que funciona mas perde peso.

Direção de prompt em `09 AI Gen` do showcase.

## Motion

Animação de palavra no H1, uma vez, ao carregar. Depois nunca mais.

```
opacity 0 → 1, translateY(10px → 0)
stagger 90ms entre palavras
duração 700ms, ease-standard
```

Atrás de `prefers-reduced-motion: reduce`.

Nada mais se move no hero. Sem parallax, sem contador, sem carrossel.

## Responsivo

| Breakpoint | O que acontece |
|---|---|
| < 980px | Trilho de spec desce para baixo do CTA, vira linha horizontal de 3 colunas |
| < 680px | Malha some. Trilho vira lista vertical. H1 em `clamp(44px, 11vw, 56px)` |

## Proibido

- Hero centralizado.
- H1 monocromático.
- Mais de dois CTAs.
- Carrossel, slider, vídeo com autoplay e som.
- Contador animado no hero (fica na seção Números).
- Preencher a célula `ENTREGA` com número inventado.

## Ver também

- [hairline-grid.md](hairline-grid.md)
- [../components/button.md](../components/button.md)
- [`../../../03-copy-final.md`](../../../03-copy-final.md) - a copy aprovada
