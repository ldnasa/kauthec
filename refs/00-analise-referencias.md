# Análise das referências | Kauthec

Tokens extraídos do CSS de produção dos três templates Framer indicados pelo Caio,
mais screenshot headless de cada um (`01-` a `03-`, hero e página inteira).

Insumo direto do `ds-builder` (Passo B).

Os três são da categoria da Kauthec, por auto-descrição:

| Template | Descrição própria |
|---|---|
| **machin** (principal) | *"Engineering and Industrial Equipment Framer Template"* |
| tilanium | *"premium Framer template for industrial, manufacturing, and engineering companies"* |
| manufact | *"built for industrial and manufacturing businesses"* |

---

## 1. machin (principal) - equipamento industrial pesado

`refs/01-machin-template-hero.png` · `01-machin-template-full.png`

| Token | Valor |
|---|---|
| Tipografia | **DM Sans** (62 usos) + Inter (20, corpo/UI) |
| Escala | 72 · 46 · 44 · 36 · 34 · 32 · 30 · 24 · 20 · 18 · **16 (corpo)** · 14px |
| Pesos | **600 dominante (42)** · 900 (16) · 700 (16) · 500 (14) · 400 (18) |
| Radius | **0px. Sete declarações, todas zero.** Nenhuma exceção |
| Tracking | **-1px** (26 usos, absoluto não relativo) · -0.2px |
| Easing | `cubic-bezier(.44, 0, .56, 1)` |
| Container | até 1790px (bleed). Breakpoints 767 / 991 / 1279 / 1439 / 1919 |
| Gap | **40px dominante** · 24 · 20 · 16 · 64 · 32 |
| Padding seção | 40 · 64 · 80 · **160px** |
| Acento | **`#064fbc` azul** (link atual, palavra do H1, botão primário, bloco do nav) |
| Neutros | `#1b1b1b` · `#666` · `#9e9e9e` · `#e4e4e4` · `#f6f6f6` · `#fff` |
| Alphas | `#f6f6f6` em `00/26/40/cc` · `#1b1b1b33` · `#9e9e9e66` |
| Superfície | Chapado. 5 linear-gradient, 6 backdrop-filter, **0 radial glow** |

**Estrutura do hero (do DOM e confirmada no screenshot):**

`Banner Section` → `Scroll Trigger` · `Video Wrapper` · `Overlay` ·
`Dividers Wrapper` (`Divider Top`, `Divider Bottom`, `Divider Left`, `Divider Right`) ·
`Border Wrapper` · `Subtitle` · `Title Wrapper` · `Buttons Wrapper` ·
`Equipment Info Wrapper` (`Compliance`, `Capacity`, `Operational Cycles`)

Traduzindo o que se vê: vídeo industrial full-bleed, escurecido por overlay, com uma
**malha de fios de cabelo brancos** desenhada por cima dividindo o hero em células.
Dentro das células, **rótulos de spec técnica flutuando**:

```
COMPLIANCE              LOAD CAPACITY          OPERATIONAL CYCLES
ISO • CE • Safety       Up to 80t              24/7 Continuous Use
```

H1 em DM Sans, sentence case, com ponto final, tracking -1px. Kicker `BUILT TO CARRY`
em caixa alta espaçada. Dois botões, radius 0: azul sólido `GET A QUOTE` + branco
`VIEW EQUIPMENT →`. No nav, `CONTACT US` é um **bloco azul sangrado até o canto
superior direito da tela**.

**Isto é quase o hero da Kauthec já desenhado.** O mapeamento é direto:

| machin | Kauthec |
|---|---|
| `BUILT TO CARRY` | kicker de autoridade: `IMPORTADORA DE CORREIAS DESDE 2007` |
| `Engineering heavy-duty performance.` | `Seja parceiro de uma importadora que entrega no prazo que você prometeu.` |
| `GET A QUOTE` (azul sólido) | `Quero ser parceiro` (ouro sólido) |
| `VIEW EQUIPMENT →` (branco) | `Falar no WhatsApp` (branco) |
| `COMPLIANCE / ISO • CE` | `NORMAS / NBR · DIN · ISO · ASTM · RMA` |
| `LOAD CAPACITY / Up to 80t` | `ESTOQUE / +10.000 m por mês` ⚑3 |
| `OPERATIONAL CYCLES / 24/7` | `ENTREGA / [prazo]` ⚑6 |

Esse último é o achado: o layout **já tem a célula esperando o número do prazo**.
A pendência ⚑6 do `03-copy-final.md` deixa de ser detalhe de copy e vira o buraco
no meio do hero.

---

## 2. tilanium - engenharia e automação

`refs/02-tilanium-hero.png` · `02-tilanium-full.png`

| Token | Valor |
|---|---|
| Tipografia | **Inter** apenas (188 usos) |
| Escala | 70 · 56 · 48 · 44 · 40 · 36 · 28 · 24 · 22 · 20 · **16** · 14px |
| Pesos | **500 dominante (61)** · 600 (17) · 400 (17) · 700 (14) |
| Radius | **10px** e 0px |
| Tracking | **-0.04em** (24 usos) · -0.2px · -0.3px. Sempre negativo |
| Easing | `cubic-bezier(.12, .23, .5, 1)` a 0.2s. Saída rápida, chegada macia |
| Container | **1600px**. Breakpoints 809 / 1199 |
| Gap | 8 · 10 · 16 · 24 · 32 · 40 · 64 · **100px** |
| Padding seção | 72 · 100 · **150px** |
| Acento | `#d94b2b` rust + `#d94b2b26` (véu 15%) |
| Neutros | `#0d0d0d` · **`#636573` · `#9799a6`** (azulados) · `#e4eaf2` |
| Alphas | `#ffffff` em `1a / 4d / 80 / bf` |
| Superfície | **51 linear-gradient · 18 radial-gradient** · 1 noise |

Hero claro (`#e4eaf2`) com **malha de pontos** de fundo. Kicker com filete laranja à
esquerda. H1 de duas linhas onde a palavra de destaque (`Performance`) é **cinza, não
o acento** - único dos três que não usa a cor no H1. Trilho direito: bloco laranja
`Get Started` + painel preto com métricas (`20+ years`, `500+ projects`). Foto
industrial full-bleed abaixo, dessaturada com um ponto de laranja no maquinário.

A escada de brancos com alpha (`1a` → `4d` → `80` → `bf`) é o sistema inteiro de
hierarquia sobre escuro: nenhum cinza sólido para texto, só branco rebaixado.
Os 18 radial-gradients são glows atrás de cards.

---

## 3. manufact - manufatura

`refs/03-manufact-wbs-hero.png` · `03-manufact-wbs-full.png`

| Token | Valor |
|---|---|
| Tipografia | **Geist** (74) + **Mona Sans** (72) + Inter (54) |
| Escala | 72 · 42 · 40 · 36 · 30 · 28 · 22 · 20 · 18 · 16 · **14 (corpo)** · 12px |
| Pesos | 500 (54) · 600 (47) · 400 (20) · 700 (17) · **900 (16)** |
| Radius | **6px** e 0px |
| Tracking | 0em corpo · **-0.02em** títulos |
| Easing | `cubic-bezier(.44, 0, .56, 1)` a **0.45s**. Simétrico |
| Container | **1360px** · 1880px (bleed). Breakpoints 809 / 1199 |
| Gap | 8 · 10 · 16 · **20 · 30** · 40 · 50 · 60px |
| Padding seção | 100 · **200px** |
| Acento | `#f66234` laranja · `#c8370b` escuro · `#c8370b00` (fade a zero) |
| Neutros | `#151515` · `#191919` · `#5c5c5c` · `#a7a3a2` · `#d1d1d1` · `#f6f6f6` |
| Superfície | Chapado, com **grão/noise** visível no fundo claro |

Hero claro `#f6f6f6` com grão, atravessado por **filetes verticais de coluna** quase
invisíveis. Kicker em pílula com quadradinho laranja. H1 com **`materials` em laranja**.
Trilho direito: `// SINCE - 2005 //` em mono, parágrafo, e CTA preto com bloco de seta
laranja encaixado. Rodapé do hero com microtexto de metadado:
`Based in: Los Angeles, USA` · `SCROLL DOWN` · `21.0278° N, 105.8342° E`.

Easing `.44,0,.56,1` a 0.45s é quase `ease-in-out` puro: acelera e desacelera igual.
Sensação de massa, de coisa pesada que se move. Mesma curva do machin.

---

## 4. O que os três fazem igual

Isto é o padrão da categoria, não gosto de designer. Sete convergências:

1. **Malha técnica sobre o hero.** machin: fios brancos sobre vídeo. tilanium: grade de
   pontos. manufact: filetes de coluna. Os três desenham a régua do grid na tela. É o
   gesto de desenho técnico, e é o que separa "industrial" de "corporativo genérico".

2. **Kicker acima do H1.** `BUILT TO CARRY` · `Engineering Excellence` ·
   `Trusted manufacturing partner`. Sempre curto, sempre acima.

3. **Uma palavra do H1 em outra cor.** machin (azul), manufact (laranja), tilanium (cinza).
   Os três. O H1 nunca é monocromático.

4. **Hero partido:** H1 grande à esquerda, trilho de apoio à direita (métricas, spec,
   parágrafo + CTA). Nenhum dos três centraliza o hero.

5. **Microtexto de metadado como ornamento.** Coordenadas, `SCROLL DOWN`, `// SINCE 2005 //`,
   rótulos de spec. Dado técnico usado como decoração. Custa nada e vende seriedade.

6. **Padding vertical de seção entre 150 e 200px.** O silêncio entre seções é o que
   comunica porte. É o item que mais separa "template de builder" de "fabricante sério".

7. **Tracking negativo em título, sempre.** Nenhum dos três usa tracking positivo em display.
   E peso de corpo 500-600, nunca 400.

**Um acento e mais nada.** Sem paleta secundária. A cor é evento: kicker, CTA, uma palavra
do H1, hover. Nunca texto corrido. O matiz varia (azul, rust, laranja) mas o *papel* é idêntico.

E onde divergem, divergem no eixo **dureza**:

```
tilanium ─────── manufact ─────── machin
radius 10px      radius 6px       radius 0px
corpo 16px       corpo 14px       corpo 16px
easing .2s       easing .45s      easing .45s
grade de pontos  filete de coluna fio de cabelo sobre vídeo
azulado, claro   grão, claro      chapado, escuro
```

O principal escolhido pelo Caio é o mais duro dos três.

---

## 5. Síntese para a Kauthec

Hipótese travada em dados para o `ds-builder` refinar contra a marca. Não é o DS final.

### Cor

O papel do acento é idêntico nos três. O `#faa21b` da Kauthec entra nesse papel sem
ajuste conceitual. Mas o ouro é mais claro e mais amarelo que os três acentos de
referência, e isso tem uma consequência dura.

Contraste WCAG, calculado:

| Par | Ratio | Veredito |
|---|---|---|
| `#faa21b` sobre `#1b1b1b` | **8.40:1** | AAA. Par principal |
| `#070707` sobre `#faa21b` | **9.8:1** | AAA. Texto preto em botão dourado |
| `#faa21b` sobre `#ffffff` | **2.05:1** | **Reprova.** Nem para texto grande (mín. 3:1) |

**Ouro nunca é cor de texto sobre fundo claro.** Em superfície clara ele só existe
como preenchimento (botão, filete, quadradinho do kicker) com preto por cima.

Isso importa porque **machin, o principal, é o único dos três com hero escuro** - e é
justamente onde o ouro funciona melhor. A rota se fecha sozinha: hero escuro sobre
vídeo/foto, ouro como acento, preto sobre ouro nos CTAs.

Neutros: escada de matiz único, machin (`#1b1b1b` `#666` `#9e9e9e` `#e4e4e4` `#f6f6f6`).
Não o tilanium, cujos cinzas azulados (`#636573`, `#9799a6`) puxariam a marca para SaaS.

Sobre escuro, hierarquia de texto por **branco com alpha**, não por cinza sólido:
`#fff` → `#ffffffcc` → `#ffffff66` → `#ffffff40`.

### Tipografia

Uma família, pesos fazem o trabalho. **DM Sans** é a do machin, está no Google Fonts,
tem 600/700/900 e geometria industrial sem ser fria. É a candidata natural. Decisão
final no Passo B, contra o logo.

Escala herdada do machin: `14 · 16 · 18 · 20 · 24 · 30 · 34 · 36 · 44 · 46 · 72px`
Corpo **16px** (machin e tilanium concordam; o 14px do manufact é o outlier).
Público de 40+ lendo spec técnica no celular no pátio da revenda.

Tracking **-1px** em display (machin), 0 em corpo. Peso de corpo **500-600**.

### Forma e ritmo

| Token | Valor | Origem |
|---|---|---|
| `--radius` | **0px** | machin, o principal. Correia não é matcha |
| `--container` | **1440px** | entre manufact (1360) e tilanium (1600) |
| `--section-y` | **160px** desktop / 80px mobile | machin |
| `--ease` | `cubic-bezier(.44, 0, .56, 1)` | **machin E manufact.** 2 de 3 |
| `--dur` | **0.45s** transição / 0.2s hover | machin + tilanium |
| `--gap` | escada 4 · 8 · 16 · 24 · **40** · 64px | machin (40 dominante) |
| `--hairline` | 1px `#ffffff26` sobre escuro | a malha técnica |

### Os cinco gestos a implementar

1. **Malha de fios de cabelo** sobre o hero, dividindo em células. Em Tailwind é
   `border` + `divide`, custo zero. É o gesto que os três compartilham.
2. **Rótulos de spec na malha do hero:** `NORMAS` / `ESTOQUE` / `ENTREGA`. A célula
   `ENTREGA` é onde entra o número da pendência ⚑6.
3. **Palavra em ouro dentro do H1.** `...que entrega no prazo que você `**`prometeu`**`.`
4. **Hero partido**, nunca centralizado. H1 à esquerda, trilho de spec à direita.
5. **Microtexto de metadado** no rodapé do hero: `IBIPORÃ, PR · VÁRZEA GRANDE, MT` ·
   `ROLE PARA VER` · coordenadas das unidades.

### O que explicitamente NÃO herdamos

- Neutro azulado (tilanium). Puxa para SaaS.
- Corpo de 14px (manufact). Público não permite.
- Glow radial (tilanium, 18 usos). Os três nem concordam nisso; machin tem zero.
- Segunda família de fonte. Uma só.
- Radius. Zero é zero.

Tudo que se move fica atrás de `prefers-reduced-motion: reduce`.

---

## O que este documento não resolve

- **Nenhuma imagem.** Os três heros dependem de foto/vídeo industrial forte e
  dessaturado. A Kauthec não tem nada (`01-debriefing.md`: Bruno não tem foto, texto
  nem vídeo). O DS nasce, o build trava sem isso.
- **O logo é vetor traçado de bitmap** (ver `my_brand_assets/README.md`). O machin usa
  wordmark branco puro sobre escuro. A Kauthec vai precisar de uma versão monocromática
  branca que hoje não existe e não dá para extrair por CSS do SVG atual.
- **⚑6, o prazo médio.** No layout do machin, o número tem uma célula reservada no hero.
  Sem ele, a célula fica com texto genérico e o hero perde o argumento.

---

## Nota de método

Primeira passada deste documento analisou `machin.framer.website` em vez de
`machin-template.framer.website`. Site errado, template de chá matcha. Tudo que estava
escrito sobre o machin foi descartado e reextraído. As tabelas acima vêm do CSS de
produção da URL correta, conferido contra os screenshots.

*Extração: `curl` + parsing do CSS servido, screenshot via Chrome headless.*
*Designer: Caio Augusto Liutti - Londrina S/A.*
