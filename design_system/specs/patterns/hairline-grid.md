---
spec: hairline-grid
layer: 3
tokens: [--color-hairline, --color-border-subtle, --border-width, --z-hairline]
status: v1
---

# A malha de fios

O gesto central do sistema. Se você remover tudo e deixar só isto, o site ainda lê como
Kauthec. Se você remover isto e deixar tudo, o site lê como template.

## De onde veio

As três referências industriais desenham a régua do grid na tela, cada uma de um jeito:

| Ref | Como |
|---|---|
| `machin` | Fios brancos de 1px sobre o vídeo do hero, dividindo em células |
| `tilanium` | Grade de pontos no fundo claro |
| `manufact` | Filetes verticais de coluna, quase invisíveis |

É o gesto de desenho técnico. É o que separa "industrial" de "corporativo genérico".
Custa zero em performance.

## Três escalas de uso

### 1. Sobre o hero (a mais forte)

Fios de 1px dividindo o hero em células. Dentro das células, os rótulos de spec.

```css
.hero { position: relative; overflow: hidden; }

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: var(--z-hairline);
  pointer-events: none;
  border-top: var(--border-width) solid var(--color-hairline);
  border-bottom: var(--border-width) solid var(--color-hairline);
  background-image:
    linear-gradient(90deg, var(--color-hairline) var(--border-width), transparent var(--border-width)),
    linear-gradient(180deg, var(--color-hairline) var(--border-width), transparent var(--border-width));
  background-size: 33.333% 100%, 100% 50%;
  opacity: 0.55;
}

.hero > * { position: relative; z-index: calc(var(--z-hairline) + 1); }
```

Três colunas, duas linhas. Sobre foto: aplicar depois do overlay `#101011` a 55%.

### 2. Como gap de grade (a mais útil)

Grades **sem gap**. As células se tocam, a borda compartilhada vira a malha. Um `1px` de
gap sobre um fundo de borda produz linhas perfeitas, sem borda dupla.

```css
.grid-hairline {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--border-width);
  background: var(--color-border-subtle);
  border: var(--border-width) solid var(--color-border-subtle);
}
.grid-hairline > * {
  background: var(--color-bg);
  border: 0;
}
```

Usado em: cards de produto, pilares de diferencial, grade de estados, tabela de
indústrias, biblioteca de ícones.

Em Tailwind: `grid gap-px bg-[var(--color-border-subtle)]` com filhos `bg-[var(--color-bg)]`.

### 3. Como substrato de página (a mais discreta)

Colunas verticais a cada 25vw, no `body`. Quase invisível. Dá coesão sem ruído.

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    linear-gradient(90deg, var(--color-border-subtle) var(--border-width), transparent var(--border-width));
  background-size: 25vw 100%;
}
```

## Regras

- Usa `--color-hairline` **apenas** na escala 1 (hero). Escalas 2 e 3 usam
  `--color-border-subtle`. Se tudo usar `--color-hairline`, a malha do hero deixa de ter peso.
- `pointer-events: none` sempre. A malha nunca intercepta clique.
- `aria-hidden` não é necessário: pseudo-elemento não entra na árvore de acessibilidade.
- **Some abaixo de 680px.** Em tela de celular a malha vira sujeira.

```css
@media (max-width: 680px) { .hero::after { display: none; } }
```

- Nunca animar a malha. Ela é a régua, não o desenho.
- Nunca mais de duas escalas visíveis ao mesmo tempo no mesmo viewport.

## Proibido

- Malha sobre texto corrido.
- Malha com opacidade acima de 0.6 no hero.
- Malha em cor de acento. Ouro é evento, malha é estrutura.
- `background-size` em px. Sempre `%` ou `vw`, para a malha acompanhar o container.

## Ver também

- [hero.md](hero.md)
- [../components/spec-card.md](../components/spec-card.md)
