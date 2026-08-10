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
| `photo-kauthec-fachada.webp` | 64 KB | og:image da página Contato | **Foto real** do cliente (2026-08) |
| `photo-kauthec-fachada-square.webp` | 163 KB | Bloco "Sobre a Kauthec" | **Foto real** do cliente (2026-08) |

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

Os dois `photo-kauthec-fachada*` são as **únicas fotos reais da Kauthec neste diretório.**

Trocadas em 2026-08 pela foto que o cliente enviou no "Ajustes SITE.docx". É um **prédio
diferente** do que estava no ar antes, com céu azul no lugar do dia nublado. Original em
`_raw/fachada-cliente-2026-08.png` (1600x1200, extraído do PDF). Sem tratamento: a foto
já chega com luz direcional e a placa legível.

Dois recortes da mesma fonte: quadrado 1100x1100 para o bloco Sobre, e faixa 1300x411
para o og:image. Pedir o arquivo original em resolução maior ao cliente. Confirmar também
**qual unidade** aparece na foto, porque o alt hoje está genérico de propósito.

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


## Imagens sem uso (2026-08-10)

Nenhuma foi apagada. Auditadas com grep sobre `*.html`, `*.css` e `*.js`.

| Arquivo | Peso | Desde quando |
|---|---|---|
| `linha-laminada-elevadora.webp` | 25 KB | Onda 3: a linha Laminadas foi absorvida por Transportadoras e Elevadoras |
| `aplicacao-agroindustria.webp` | 72 KB | Já estava órfã no commit `eb1e2b9` |
| `textura-correia.webp` | 27 KB | Já estava órfã no commit `eb1e2b9` |
| `pontos-parceiro-kauthec-trophy.png` | **1,6 MB** | Já estava órfã no commit `eb1e2b9`. O site usa a `trophy2.png` |

O troféu antigo sozinho pesa mais que todas as outras imagens somadas. Decidir se apaga
antes de publicar.
