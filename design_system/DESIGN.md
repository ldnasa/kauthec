# DESIGN.md - Kauthec do Brasil

Briefing de runtime. Leitura obrigatória antes de escrever qualquer UI.
Exportado de `design_system/showcase.html`, que é a fonte visual da verdade.

Se você é um agente: comece por [`llms.txt`](llms.txt), não por este arquivo.
Se você é humano: abra `showcase.html` no browser.

**Sistema:** Industrial Kauthec v1
**Stack:** HTML5 semântico + Tailwind CSS + vanilla JS. Sem framework.
**Tema:** escuro por padrão. Claro é o alvo do toggle, reconstruído, não invertido.

---

## O argumento em uma frase

A Kauthec vende através de canal. O revendedor é o cliente, e o prazo de entrega é o
motivo de escolher a Kauthec e não a Multibelt. O site inteiro aponta para dois momentos:
o hero e o CTA final. Tudo entre os dois existe para remover objeção.

---

## Cor

Um acento e mais nada. Sem paleta secundária.

```css
--color-bg              #101011   /* tinta 950 */
--color-surface         #1b1b1b
--color-accent          #faa21b   /* ouro da marca, direto do logo */
--color-on-accent       #070707   /* texto sobre o ouro */
--color-hairline        rgba(255,255,255,.15)
```

### A restrição que define o tema

Contraste WCAG calculado, não estimado:

| Frente | Fundo | Ratio | |
|---|---|---|---|
| `#faa21b` | `#101011` | **9.29:1** | AAA |
| `#faa21b` | `#1b1b1b` | **8.40:1** | AAA |
| `#070707` | `#faa21b` | **9.83:1** | AAA |
| `#ffffff` | `#101011` | **19.03:1** | AAA |
| `#8a5a00` | `#f6f6f6` | **5.49:1** | AA |
| `#faa21b` | `#f6f6f6` | **1.90:1** | **reprova** |
| `#faa21b` | `#ffffff` | **2.05:1** | **reprova** |

**Regra dura:** ouro nunca é cor de texto sobre fundo claro. Em superfície clara ele só
existe como preenchimento, com `--color-on-accent` por cima. Para texto em ouro no tema
claro use `--color-accent-text`, que resolve para `#8a5a00`.

O tema escuro não foi escolha estética. Foi a única saída que deixa o ouro ser ouro.

### Onde o ouro pode aparecer

Kicker · CTA primário · uma palavra do H1 · hover · filete de destaque · borda de card
carro-chefe · ícone de destaque.

Nunca: texto corrido, fundo de seção, gradiente, glow, segunda cor de acento.

### Hierarquia de texto sobre escuro

Branco rebaixado, nunca cinza sólido. Cinza sólido sobre preto morre.

```
--color-text              #ffffff
--color-text-secondary    rgba(255,255,255,.72)
--color-text-tertiary     rgba(255,255,255,.44)
--color-text-muted        rgba(255,255,255,.26)
```

### Funcionais

`--color-danger` só em erro de formulário. `--color-success` só em confirmação de envio.
Nunca decorativos.

---

## Tipografia

Uma família de prosa. Peso faz o trabalho.

- **DM Sans** - display, título, corpo, UI. Pesos 400/500/600/700/900.
- **IBM Plex Mono** - dado tabular (tabelas KT), metadado, kicker, microtexto. Nada mais.

| Papel | Tamanho | Peso | Tracking |
|---|---|---|---|
| Display (H1) | `clamp(44px, 7vw, 96px)` | 700 | -0.02em |
| H2 | `clamp(34px, 4.4vw, 62px)` | 700 | -0.02em |
| H3 | 20px | 600 | -0.02em |
| Corpo | **16px** | 500 | 0 |
| Label | 14px | 500 | 0 |
| Meta / mono | 12px | 400 | 0.12em, caixa alta |
| Número grande | 44-72px | 900 | -0.02em |

**Piso de corpo: 16px.** Não descer. O parceiro tem 40+ e lê spec técnica no celular, no
pátio da revenda. A referência `manufact` usa 14px; aqui divergimos de propósito.

Tracking em título é sempre negativo. Nenhuma das três referências usa tracking positivo
em display.

---

## Forma

```css
--radius-none | sm | md | lg | xl | full   →  todos 0
--border-width          1px
--border-width-strong   2px
--content-max           1440px
--section-y             clamp(80px, 9vw, 160px)
```

**Radius zero, sem exceção.** Botão, card, input, imagem, selo, badge. A referência
principal declara `border-radius` sete vezes e todas são zero. Correia, chapa e lâmina
não têm canto redondo.

**Os 160px de respiro entre seções não são negociáveis.** É o item que mais separa
"template de builder" de "fabricante sério". As três referências ficam entre 150 e 200px.

---

## Os cinco gestos

Isto é o que faz o site parecer Kauthec e não um template.

### 1. A malha de fios

Fio de 1px em `--color-hairline` desenhando o grid na tela. Divide o hero em células.
Em Tailwind é `border` + `divide`, custo zero. As três referências fazem isso.

Some abaixo de 680px.

### 2. Rótulos de spec dentro da malha

No hero, dentro das células, metadado técnico flutuando:

```
NORMAS                  ESTOQUE                ENTREGA
NBR · DIN · ISO ·       +10.000 m por mês      [prazo em dias úteis]
ASTM · RMA
```

A célula `ENTREGA` é o buraco do projeto. Ver Pendências.

### 3. Palavra em ouro dentro do H1

O H1 nunca é monocromático. As três referências colorem uma palavra.

```html
<h1>Seja parceiro de uma importadora que entrega no <span class="hl">prazo</span> que você prometeu.</h1>
```

### 4. Hero partido

H1 grande à esquerda, trilho de spec à direita. **Nunca centralizado.** Nenhuma das
três referências centraliza o hero.

### 5. Microtexto de metadado

No rodapé do hero, em mono: `IBIPORÃ, PR · VÁRZEA GRANDE, MT · DESDE 2007 · ROLE PARA VER`.
Dado técnico como ornamento. Custa nada e vende seriedade.

---

## Motion

Uma curva, duas durações.

```css
--ease-standard  cubic-bezier(.44, 0, .56, 1)   /* simétrica: sensação de massa */
--ease-exit      cubic-bezier(.12, .23, .5, 1)  /* micro-interação */
--dur-micro      200ms
--dur-base       450ms
--stagger        90ms
```

`--ease-standard` é quase `ease-in-out` puro: acelera e desacelera igual. Coisa pesada
que se move. Duas das três referências usam exatamente essa curva.

### O que anima

- **Scroll reveal por bloco**, não por elemento. `opacity` + `translateY(16px)`, stagger
  de 90ms entre irmãos. `IntersectionObserver`, dispara uma vez, `unobserve` depois.
- **Palavra por palavra no H1**, uma vez. Só no hero e no CTA final: são os dois momentos
  de pico (Peak-End).
- **Hover de botão troca a cor.** `active` comprime 2%.
- **Contadores** da seção Números, uma vez, ao entrar em viewport.

### O que nunca anima

`transition: all` · `width` · `height` · parallax pesado · loop infinito · WebGL ·
glow radial · botão que levita (massa industrial não flutua) · contador que sobe duas vezes.

Tudo atrás de `@media (prefers-reduced-motion: reduce)`.

---

## Componentes

Nenhum entra no build sem: default, hover, foco, desabilitado, carregando, vazio, erro.

### Botão

- Altura **48px**. Luva de trabalho, dedo grosso, tela suja. Não 44px.
- `primary`: fundo `--color-accent`, texto `--color-on-accent`, peso 700.
- `secondary`: fundo `--color-surface`, borda `--color-border`.
- `tertiary`: sem borda, texto `--color-text-secondary`.
- Hover: troca cor. **Nunca `translateY`.**
- Foco: `outline: 2px solid var(--color-accent); outline-offset: 2px`.

### Card de produto = ficha de spec

Não é card de blog. Tem `<dl>` com Normas / Aplicação / Estoque. O card da Correia em V
recebe `border-color: var(--color-accent)` e um selo "Carro-chefe" (Von Restorff).

### Grades sem gap

Células se tocam e a borda compartilhada vira a malha. `gap: var(--border-width)` sobre
um fundo `--color-border-subtle`. Mesmo gesto do hero, em escala de componente.

### Estados

- **Carregando:** esqueleto com a forma do conteúdo final. Spinner é proibido.
- **Vazio:** diz o que falta e dá uma ação.
- **Erro:** diz o que falhou e como sair. Sem faixa vermelha vaga.
- **Upload do contrato social:** precisa de estado de progresso.

---

## Ícones

Base Lucide, **customizada**: `stroke-linecap: square`, `stroke-linejoin: miter`,
`stroke-width: 1.75`. Ponta arredondada contradiz radius 0.

Dez ícones são desenhados para a Kauthec, não são Lucide puro: `CorreiaV`,
`Transportadora`, `Lençol`, `Prazo`, `Estoque`, `Laudo`, `Parceria`, `Calculadora`,
`WhatsApp`, `Indústria`.

Tamanhos: 18px em UI, 24px em card, 32px em pilar de diferencial.
Nunca: emoji, ícone colorido, duas famílias, ícone decorativo sem rótulo.

---

## Logo

Três arquivos em `my_brand_assets/`. **Inline o SVG no HTML**, senão as variáveis CSS não
chegam nele.

| Arquivo | Uso |
|---|---|
| `logo-kauthec-lockup.svg` | Header, footer, OG |
| `logo-kauthec-wordmark.svg` | Header compacto, mobile. Usa `currentColor` |
| `logo-kauthec-emblem.svg` | Favicon, avatar, selo |

O lockup e o emblema expõem quatro variáveis: `--logo-ink` (o disco), `--logo-light`
(o anel e as hastes brancas), `--logo-gold` (as hastes douradas), `--logo-word`.

**Em monocromático, `--logo-ink` tem que ser `transparent`.** O disco é uma forma sólida
por baixo do K, não um contorno: pintar os dois da mesma cor faz o K sumir.

```css
/* header escuro, o padrão */
.logo { color: var(--color-text); }

/* monocromático branco */
.logo { --logo-ink: transparent; --logo-light: #fff; --logo-gold: #fff; color: #fff; }
```

Detalhe de como o SVG traçado foi recuperado: `my_brand_assets/README.md`.

---

## Acessibilidade

- Contraste verificado **por par**, na tabela acima. Não estimar.
- Foco visível sempre. `outline` ouro de 2px, offset 2px.
- Alvo de toque mínimo **48px**.
- Um `<h1>` por página.
- `prefers-reduced-motion` desliga tudo.
- Formulário: `<label>` real, `aria-describedby` no erro, `aria-live` na mensagem de sucesso.
- Imagem decorativa: `alt=""`. Imagem de conteúdo: alt descreve a função, não a aparência.

---

## Responsivo

Mobile-first a partir de **375px**.

| Breakpoint | O que muda |
|---|---|
| 375px | base |
| 680px | a malha do hero some. Grades viram uma coluna |
| 980px | layouts de 2 colunas colapsam. Trilho do hero vai para baixo |
| 1180px | sidebar do showcase vira barra inferior |
| 1440px | container trava |

---

## Microcopy

**Palavra proibida quebra o build.** Vale para copy, alt text, mensagem de erro, tooltip,
`aria-label`, commit de conteúdo:

> inovador · disruptivo · soluções · empoderador · bem-vindo · "claro" e "perfeito" como muleta

**Zero em-dash (—).** Use hífen ou reescreva.
**Zero menção a Mercosul.** Foco Brasil.

Todo CTA é específico. Nunca "Saiba mais" solto. O CTA primário do site é
**"Quero ser parceiro"**; o de apoio é **"Falar no WhatsApp"**.

Copy canônica: [`../03-copy-final.md`](../03-copy-final.md).

---

## Performance

- Tailwind CDN **só em dev**. Antes de subir, gerar CSS enxuto.
- Orçamento: 1.5MB por página · 200KB no hero · 100KB de JS.
- Imagem em WebP. `loading="lazy"` fora da dobra.
- Fontes: `display=swap`, `preconnect` nos dois hosts do Google Fonts.
- Zero biblioteca de animação. `IntersectionObserver` é suficiente.

---

## SEO

- Um `<h1>` por página. Quatro páginas: Home, Produtos, Seja Parceiro, Contato.
- `title` e `meta description` por rota. Description de 150 a 160 caracteres.
- Open Graph 1200x630.
- Schema `LocalBusiness` com as **duas** unidades (Ibiporã-PR e Várzea Grande-MT).
- `rel="noopener noreferrer"` em link externo.
- Titles, descriptions e alt text já escritos em `../03-copy-final.md`.

---

## Princípios de UX travados no briefing

- **Two-Step:** o hero comunica parceria + prazo em 4 segundos. O resto da página remove dúvida.
- **Hick:** um CTA primário por seção.
- **Miller:** máximo 5 a 7 itens por lista.
- **Von Restorff:** só o prazo e a Correia em V quebram o padrão visual.
- **Peak-End:** hero e CTA final recebem polimento extra.

---

## Pendências que afetam o design

Estas não são detalhe de copy. Deixam buraco no layout.

| ⚑ | O que falta | Onde bate no design |
|---|---|---|
| **⚑6** | Prazo médio real em dias úteis | A célula `ENTREGA` do hero fica com texto genérico. O gesto nº2 perde o argumento |
| **⚑4** | A Kauthec promete não vender ao cliente do parceiro? | Saem 3 blocos: Sobre, pilar Parceria, FAQ |
| **⚑8** | Certificada ou segue as normas? | O kicker do hero e a faixa de selos |
| **⚑3** | Números conferem? | A seção Números sai inteira |
| **assets** | Foto real da empresa | Resolvido para o v1. Hero, cinco linhas, aplicação, textura e logo existem. Só a fachada é foto real da Kauthec |

Lista completa: [`../03-copy-final.md`](../03-copy-final.md), bloco "Pendências com o cliente".

---

## Fase 2 - não construir agora

Área do Revendedor com login, Central de Marketing, integração com ERP Sênior.
Deixar gancho no HTML, sem tela.

---

## Como não derivar

1. Todo valor visual sai de `tokens.css` via `var(--...)`. Zero hex, zero px em componente.
2. `node scripts/token-audit.js` sai com código 1 se achar valor chumbado.
3. `showcase.html` é a fonte visual. Muda lá, regenera o resto. Nunca o contrário.
4. Antes de escrever UI, ler `llms.txt` e as specs que ele apontar.

---

*Design system derivado de `refs/00-analise-referencias.md`.*
*Designer: Caio Augusto Liutti - Londrina S/A.*
