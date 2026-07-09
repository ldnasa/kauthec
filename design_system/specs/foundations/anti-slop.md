---
spec: anti-slop
layer: 1
status: v1
---

# O que este sistema proíbe

Leia antes de "melhorar" qualquer coisa. Cada proibição tem origem: ou veio da análise
das três referências industriais, ou veio de uma restrição verificável (contraste, público).

---

## Visual

| Proibido | Por quê |
|---|---|
| `border-radius` diferente de 0 | Correia, chapa e lâmina não têm canto redondo. A referência principal declara radius sete vezes e todas são zero |
| Pílula (`border-radius: 999px`) | Lê como DTC, produto de consumo. A Kauthec vende para revendedor industrial |
| Ouro como texto sobre fundo claro | 1.90:1 sobre `#f6f6f6`. Reprova. Não é gosto, é medida |
| Ouro como fundo de seção | O acento é evento. Se cobre uma seção, deixa de ser evento |
| Segunda cor de acento | Um acento e mais nada. As três referências têm exatamente um |
| Gradiente de marca | Nenhuma das três usa. Superfície é chapada |
| Glow radial | `tilanium` usa 18 e é o outlier. `machin`, a principal, tem zero |
| Cinza azulado (`#636573`, `#9799a6`) | Puxa a marca para SaaS. A escada de cinza tem matiz único |
| Cinza sólido como texto sobre escuro | Morre. Use branco rebaixado: 100% / 72% / 44% / 26% |
| Sombra padrão do Tailwind | `shadow-md` é o carimbo de template |
| `inset` branco em sombra | Isso é vidro. O sistema é metal |
| Segunda família de fonte display | Uma família. Peso faz o trabalho |
| Corpo abaixo de 16px | Público de 40+ lendo spec no celular, no pátio da revenda |
| Tracking positivo em título | Nenhuma das três referências faz isso |
| Hero centralizado | Nenhuma das três centraliza. Hero é partido |
| H1 monocromático | As três colorem uma palavra do H1 |
| Mosaico de card com gap | As células se tocam. A borda compartilhada vira a malha |
| Emoji como ícone | |
| Ícone colorido | Stroke `currentColor`, sempre |
| Duas famílias de ícone | |
| Stock de reunião, rosto sorrindo para a câmera | Mãos e EPI, ou nada |

---

## Movimento

| Proibido | Por quê |
|---|---|
| `transition: all` | Anima o que você não pediu. Custa frame |
| Animar `width` ou `height` | Layout thrash. Use `transform` |
| Botão que levita no hover (`translateY`) | Massa industrial não flutua. O feedback é a cor |
| Parallax pesado | |
| Loop infinito sem pausa | |
| WebGL | Nenhuma das três referências usa shader |
| Contador que sobe toda vez que entra em viewport | Sobe uma vez. `unobserve` depois |
| Reveal por elemento | Reveal é por bloco. Stagger de 90ms entre irmãos |
| Qualquer movimento fora de `prefers-reduced-motion` | |

---

## Copy

Palavra proibida quebra o build. Vale para copy, `alt`, mensagem de erro, tooltip,
`aria-label`, placeholder:

> inovador · disruptivo · soluções · empoderador · bem-vindo ·
> "claro" e "perfeito" como muleta

Também:

- **Zero em-dash (—).** Hífen ou reescreve.
- **Zero menção a Mercosul.** Foco Brasil, decisão do cliente.
- **Zero CTA genérico.** "Saiba mais" solto é proibido. O CTA primário é
  "Quero ser parceiro", o de apoio é "Falar no WhatsApp".
- **Zero número inventado.** Onde a copy tem `[CONFIRMAR: ...]`, mantenha o marcador.
  Não preencha com estimativa.

---

## Arquitetura

| Proibido | Por quê |
|---|---|
| Framework, CSS-in-JS, jQuery, Bootstrap | Stack fixa da agência: HTML5 + Tailwind + vanilla JS |
| Biblioteca de animação | `IntersectionObserver` resolve |
| Hex, px de espaçamento, radius, sombra, z-index ou duração chumbados | `token-audit.js` sai com código 1 |
| Referenciar Layer 1 (`--kt-*`) dentro de componente | Componente usa alias semântico |
| Editar `DESIGN.md` como fonte separada | `showcase.html` é a fonte. Muda lá, regenera |
| Tailwind CDN em produção | Só em dev. Build gera CSS enxuto |
| Mais de um `<h1>` por página | |

---

## O teste

Antes de considerar um trecho pronto, pergunte:

1. Esse valor sai de um token da Layer 2?
2. Se eu removesse esse movimento, alguém perderia informação?
3. Esse ouro está preenchendo ou está escrevendo? Se escrevendo sobre claro, está errado.
4. Esse card tem canto redondo? Então está errado.
5. Essa palavra está na lista de proibidas?

`node scripts/token-audit.js` responde a 1 e 4.
