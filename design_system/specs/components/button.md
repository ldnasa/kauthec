---
spec: button
layer: 3
tokens: [--color-accent, --color-accent-hover, --color-on-accent, --color-surface, --color-border, --color-border-strong, --color-text-secondary, --space-2, --space-4, --weight-bold, --weight-semibold, --dur-micro, --ease-exit, --radius-none]
status: v1
---

# Botão

## Visão geral

Três variantes. Uma por nível de intenção. Hick's Law: **um `primary` por seção**.

- `primary` - "Quero ser parceiro". A conversão do site.
- `secondary` - "Falar no WhatsApp". Apoio. Nunca compete com o primary.
- `tertiary` - "Ver especificações". Navegação lateral.

## Anatomia

```
┌──────────────────────────────┐
│  [label]           [ícone?]  │   altura 48px, radius 0
└──────────────────────────────┘
   padding-x: var(--space-4)
   gap: var(--space-2)
```

Ícone é opcional, sempre à direita, 18px, `currentColor`.

## Altura: 48px, não 44px

O mínimo WCAG é 44px. Aqui é 48px porque o usuário é revendedor no pátio: luva de
trabalho, dedo grosso, tela suja, sol na tela.

## Tokens

| Propriedade | Token |
|---|---|
| `height` | `48px` |
| `border-radius` | `var(--radius-none)` |
| `padding-inline` | `var(--space-4)` |
| `gap` | `var(--space-2)` |
| `border-width` | `var(--border-width)` |
| `transition` | `var(--dur-micro) var(--ease-exit)` |

## Variantes

### primary

```css
background: var(--color-accent);
border-color: var(--color-accent);
color: var(--color-on-accent);
font-weight: var(--weight-bold);
```

Contraste `#070707` sobre `#faa21b` = 9.83:1, AAA.

### secondary

```css
background: var(--color-surface);
border-color: var(--color-border);
color: var(--color-text);
font-weight: var(--weight-semibold);
```

### tertiary

```css
background: transparent;
border-color: transparent;
color: var(--color-text-secondary);
```

## Estados

| Estado | Comportamento |
|---|---|
| `:hover` (primary) | `background: var(--color-accent-hover)` |
| `:hover` (secondary/tertiary) | `border-color: var(--color-border-strong)`, `background: var(--color-accent-wash)` |
| `:active` | `transform: scale(0.99)` |
| `:focus-visible` | `outline: var(--border-width-strong) solid var(--color-accent); outline-offset: 2px` |
| `:disabled` | `opacity: .4; cursor: not-allowed; transform: none` |
| Carregando | Texto vira "Enviando", `disabled`, sem spinner |

## Proibido

- **`transform: translateY` no hover.** Massa industrial não flutua. O feedback é a cor.
  Esta é a regra mais violada: quase todo template levita o botão.
- `transition: all`.
- Radius diferente de 0.
- Mais de um `primary` visível na mesma seção.
- Label genérico. "Saiba mais" solto é proibido.

## Exemplo

```html
<button class="btn primary" type="button">
  Quero ser parceiro
  <svg aria-hidden="true"><use href="#i-arrow-right"/></svg>
</button>
```

Em Tailwind, com os tokens expostos como utilities customizadas:

```html
<button class="h-12 px-6 gap-2 inline-flex items-center justify-center rounded-none
               bg-[var(--color-accent)] text-[var(--color-on-accent)] font-bold
               transition-colors duration-200 ease-[var(--ease-exit)]
               hover:bg-[var(--color-accent-hover)]
               focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2
               active:scale-[.99] disabled:opacity-40">
```

## Ver também

- [spec-card.md](spec-card.md) - o card carro-chefe embute um `primary`
- [../foundations/anti-slop.md](../foundations/anti-slop.md)
