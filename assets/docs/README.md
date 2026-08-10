# Fichas técnicas (PDF) por linha de produto

A página **Produtos** (`produtos.html`) tem um botão "Ficha técnica (PDF)" em cada
linha, apontando para os arquivos abaixo. **Os PDFs ainda não existem** - o cliente
(Bruno) precisa fornecer. Enquanto não chegarem, o botão está marcado como pendência
(`data-pendencia`) e aparece destacado no modo `?pendencias=1`.

Basta soltar os arquivos aqui com estes nomes exatos:

| Linha | Arquivo esperado |
|---|---|
| Correias em V | `ficha-tecnica-correia-v.pdf` |
| Correias Transportadoras e Elevadoras | `ficha-tecnica-transportadora.pdf` |
| Correias de PVC e PU | `ficha-tecnica-pvc-pu.pdf` |
| Revestimentos de Borracha | `ficha-tecnica-revestimento-borracha.pdf` |

São **quatro** arquivos, não cinco. Em 2026-08 o cliente agrupou Transportadoras com
Elevadoras e renomeou Lençol de Borracha para Revestimentos de Borracha. A linha de
filial (acoplamentos e canecas) não tem botão de ficha técnica, só orçamento.

Assim que os arquivos estiverem aqui, remover os marcadores `data-pendencia`
dos botões em `produtos.html` (buscar por `ficha técnica PDF por linha`).
