# assets/images/

Imagens de produção. WebP, dentro do orçamento de performance do `DESIGN.md`
(1.5MB por página, 200KB no hero). Total: **444 KB**.

## Cena

| Arquivo | Peso | Onde entra | Origem |
|---|---|---|---|
| `hero-expedicao.webp` | 57 KB | Hero da Home, full-bleed | Recraft V4.1, 16:9 |
| `aplicacao-agroindustria.webp` | 72 KB | Seção Indústrias Atendidas | Recraft V4.1, 3:2 |
| `produto-correia-v.webp` | 118 KB | Página Produtos, detalhamento técnico | Nano Banana Pro, 4:3 |
| `textura-correia.webp` | 27 KB | Substrato de seção, baixa opacidade | Recraft V4.1, 1:1 |
| `photo-kauthec-fachada.webp` | 21 KB | Bloco "Sobre a Kauthec" | **Foto real**, tratada |

## Linha de produtos (os cinco cards)

Todas 800x800, mesma câmera, mesma luz, mesmo fundo. Nano Banana Pro, com a
`linha-correia-v` usada como **referência de estilo** para as outras quatro.

| Arquivo | Peso | Silhueta |
|---|---|---|
| `linha-correia-v.webp` | 25 KB | Toro (bobina de laços) |
| `linha-transportadora.webp` | 29 KB | Cilindro (rolo, carcaça exposta na aresta) |
| `linha-pvc-pu.webp` | 18 KB | Planos empilhados (branco, azul, verde) |
| `linha-laminada-elevadora.webp` | 24 KB | Cilindro com taliscas parafusadas |
| `linha-lencol-borracha.webp` | 31 KB | Plano com canto enrolado |

**A silhueta é o requisito, não a foto.** O parceiro precisa reconhecer a linha antes de
ler o título. A primeira rodada do lençol saiu como rolo e ficou idêntica à
transportadora na grade: duas linhas diferentes com o mesmo desenho. Refeita como plano.

Isso é o que o site atual da Kauthec não faz: lá as cinco fotos têm fundos, escalas e
tratamentos diferentes, e duas são recorte sobre foto de fábrica. Não é falta de
qualidade individual, é falta de sistema.

---

## Tratamento no build

`hero-expedicao.webp` recebe overlay `#101011` a 55%, e a malha de fios por cima do
overlay. Texto do hero sempre sobre a parte escura (esquerda).
Ver `design_system/specs/patterns/hero.md`.

`photo-kauthec-fachada.webp` é a **única foto real da Kauthec neste diretório.** Original
em `_raw/photo-kauthec-front-original.webp`. Tratada com dessaturação 0.22, contraste 1.20,
sombras quentes e vinheta, para tirar o toldo vermelho e o céu estourado de dia nublado
que brigavam com a paleta.

Serve num bloco contido. **Não serve de hero**: a luz é chapada, sem direção, o oposto da
direção de foto do DS. Vale um ensaio real nas duas unidades.

`textura-correia.webp` **não foi verificada como seamless.** É ruído quase uniforme, a
emenda some a baixa opacidade, mas não use em `background-repeat` opaco sem conferir.

`loading="lazy"` em tudo fora da dobra. O hero é `eager`.

---

## Onde a foto de produto NÃO entra

Nada aqui é obrigatório para o site funcionar. O card de produto do DS é uma ficha de spec
e sobrevive sem imagem (`specs/components/spec-card.md`). As cinco imagens de linha entram
no topo do card, acima da ficha, e podem ser removidas sem quebrar o layout.

---

## Ainda faltando

- **Foto real da empresa.** Só a fachada é real. Todo o resto é imagem genérica de
  categoria, boa o bastante para o v1 ir ao ar, ruim o bastante para não sustentar um
  "sobre nós" honesto no médio prazo. Ensaio em Ibiporã e Várzea Grande resolve.
- **Foto de produto real.** As cinco linhas são geradas. Se a Kauthec tem amostra em
  estoque, uma tarde de estúdio substitui as cinco com fidelidade de spec, que é o que
  o revendedor técnico enxerga.

---

## `_raw/`

PNGs originais de todas as gerações, incluindo as descartadas (~45 MB). Fora do build,
no `.gitignore`. É histórico útil:

- Duas primeiras tentativas de correia em V: uma saiu vedação de borracha, outra saiu
  correia dentada. Produto errado.
- Primeira tentativa de lençol: saiu rolo, silhueta duplicada com a transportadora.
- Elevadora variante B: taliscas soltas ao lado da correia em vez de parafusadas nela.

Os prompts que funcionaram, e as lições, estão na seção `09 AI Gen` de
`design_system/showcase.html`.

## Licença

Geradas via Magnific (Recraft V4.1 e Google Nano Banana Pro) em plano pago.
Confirmar os termos de uso comercial antes de publicar. Nenhuma contém texto, logo,
rosto identificável ou marca de terceiros. A fachada é foto do próprio cliente.
