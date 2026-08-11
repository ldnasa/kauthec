# Ajustes do cliente - "Ajustes SITE.docx"

Recebido 2026-08-10. Fonte: `Ajustes SITE.docx.pdf` (8 páginas, texto + screenshots anotados).

## Progresso

- [x] **Onda 1** - Global (G1, G2, G3) + Hero (H1-H4) + limpeza do A/B do hero. 2026-08-10
- [x] **Onda 2** - Números (S2), foto da fachada (S1), seção Diferenciais nova (S3). 2026-08-10
- [x] **Onda 3** - Catálogo: 4 linhas (C1), split matriz/filial (C2), Antares (C3), P1, P2. 2026-08-10
- [x] **Onda 4** - Calculadora de comprimento (K1-K4) + `scroll-padding-top`. 2026-08-10
- [x] **Onda 5** - Card Laudo técnico (J1), FAQ novo (J2), claim do CTA (C0). 2026-08-10
- [x] **Onda 6** - Perfis da correia em V com ícones novos (PR1), campo Aplicação (PR2). 2026-08-10
- [x] **Rodada 7** - Revisão dos prints. 2026-08-10

**As 6 ondas mais a revisão dos prints estão aplicadas.**

### Rodada 7 - o que os prints tinham e o texto digitado não

Na primeira leitura eu tratei o documento como uma lista de instruções e usei os
screenshots só de apoio. Errado: os prints carregam copy e layout que o texto não
menciona. Reprocessado item a item:

| Onde | O que só estava no print |
|---|---|
| Hero | Ícones (globo, engrenagem, caminhão) nos três specs, rótulos com dois-pontos |
| Hero | Valor é **"+10.000m/mês"**, não "+10.000m processados mensalmente" do texto digitado |
| Sobre | Eyebrow "Infraestrutura e tecnologia", título "Muito além da distribuição..." e os **dois parágrafos inteiros**. Não tinham sido aplicados |
| Números | Rótulos "Metros entregues/ano" e "Segmentos críticos" |
| Cards | Ordem V, Transportadoras, Revestimentos, PVC. Nome "Correias **em** PVC e PU". As quatro descrições |
| Jornada | Seção inteira: eyebrow, título, "Programa de Fidelidade", 3 passos com ícone, número e copy |
| CTA final | Bloco "Aliança estratégica" completo, com rótulos, botão e caixa de homologação |
| Produtos | Hero "Portfólio técnico / Soluções em Correias..." e o painel da Correia em V (eyebrow, título, lead, perfis inline, Aplicação e Estoque) |

### Respostas da gestora (2026-08, via Slack)

| Pergunta | Resposta | Ação |
|---|---|---|
| ⚑4 canal protegido | "Pode manter os dois" | Marcadores ⚑4 removidos. Deixou de bloquear publicação |
| Capacidade: "+10.000m/mês" ou "processados mensalmente" | "Está falando a mesma coisa, pode manter" | Mantido "+10.000m/mês" |
| "5 linhas críticas" no hero de Produtos | "Mudaram na reunião para 4 linhas, pode corrigir" | Já estava 4. Confirmado |
| Aplicação: "Indústria Pesada" ou "Indústria" | "Corrige para a anotação" | Já estava "Indústria, Mineração e Agronegócio". Confirmado |
| FAQ de prazo x filial só MT | "A matriz cobre as principais regiões e a filial só MT" | Resposta reescrita separando as duas unidades |
| Bloco da fórmula e passo a passo | "Era para entendermos como implementar, não precisa lá" | Bloco removido. A frase de K3 ("adapta o cálculo automaticamente") foi preservada na introdução, porque era um "incluir" explícito do documento |

Sem resposta ainda: ⚑8 certificação (segue bloqueando), ⚑3 os +15 mil parceiros,
o reCAPTCHA do print, o botão de ficha técnica ausente do print, o número de 72h no
FAQ e qual unidade aparece na foto da fachada.

### Contradições dentro do próprio documento

- **Capacidade**: texto digitado diz "+10.000m processados mensalmente", print diz
  "+10.000m/mês". Usado o print.
- **Linhas**: o hero de Produtos no print diz "5 linhas críticas", mas a página 8 do mesmo
  documento manda agrupar para 4. Usado 4.
- **Unidades**: o rodapé do print do CTA diz "MATRIZ MT / FILIAL PR", invertido em relação
  à página 1 do próprio documento. Publicado corrigido.
- **Aplicação**: o print diz "Indústria Pesada", a anotação manda "Indústria". Usada a anotação.

### Decisões desta rodada

- **"Soluções" liberada** por decisão do Caio. Removida da lista do `CLAUDE.md` e da regra
  do `token-audit.js`. A copy dos prints entra literal.
- **reCAPTCHA fora**, marcado como pendência: precisa de chave do Google e de decisão de
  LGPD antes de entrar.
- **Badge do passo é quadrado**, não círculo como no print: o DS zera todos os tokens de
  radius, inclusive `--radius-full`. Um círculo seria a única forma redonda do site.
- **Selo de unidade saiu das abas** de Produtos, a pedido, para não mexer na altura dos
  botões. A disponibilidade da linha de filial vive no painel da direita.
- **Botão "Ficha técnica (PDF)" mantido**, embora não apareça no print do cliente. Remover
  perderia o ⚑16 que já está encaminhado.

Falta enviar a mensagem de observação ao Bruno (acima) e decidir as pendências que sobraram.

> **Base de código.** Os screenshots do documento mostram um build que **não existe neste
> repo nem no `origin/main`**. Decidido em 2026-08-10: foram montados pelo próprio cliente
> em cima do nosso site, provavelmente com IA. **O repo atual é a base.** Implementamos os
> ajustes aqui, seguindo a direção do que eles montaram, e geramos os assets que faltarem.
> Ver "Divergência de base" no fim.

## Decisões tomadas (2026-08-10)

| Ponto | Decisão |
|---|---|
| Base de código | Repo atual. Os mockups do cliente são referência de direção, não fonte |
| **⚑4** canal protegido | **Aplicar literal e manter os quatro blocos.** Mandar observação depois |
| **⚑8** certificação | **Aplicar "Certificação Internacional" literal.** Mandar observação depois |
| Voz do FAQ | **Aplicar literal**, no registro que o cliente escreveu |
| **⚑3** +15 MIL parceiros | Aplicar literal, entra na mesma mensagem de observação |

### Mensagem de observação a enviar ao Bruno (depois da implementação)

Três pontos aplicados como ele pediu, que merecem o olhar dele antes de publicar:

1. **Canal protegido.** A resposta do FAQ diz "priorizamos revendedores", não "não
   vendemos ao cliente final". O site afirma o compromisso em outros quatro lugares.
   Os dois textos convivem hoje na mesma página. Confirmar qual vale.
2. **Certificação.** NBR, DIN e ASTM são normas, RMA é classificação de cobertura, só ISO
   é certificação. "Certificação Internacional" no hero é o claim mais forte possível.
   Se houver certificado ISO, ótimo. Se não, o revendedor técnico percebe.
3. **+15 mil parceiros estratégicos.** O debriefing falava em faixa de +100 clientes.
   Confirmar se o número é de parceiros, de clientes da cadeia, ou de outra coisa.

### Micro-decisões assumidas na implementação

| Item | Decisão |
|---|---|
| H4 "*Garanta Margem" | Highlight dourado em "Garanta margem" no lead do hero, como "estoque" e "engenharia" no título |
| J1 quadro LAUDO TÉCNICO | É o card "Laudo técnico" da seção 9, Normas expandidas (`index.html:649`). Sai só ele |
| P2 descrição | "Proteção e durabilidade para tambores e roletes." |
| K1 fórmula | Implementar a correta, `(D - d)²/(4C)`, não a do documento |
| K3 texto | "correia sem fim", corrigindo o typo "em fim" |
| C0 crase | "a uma das maiores", sem crase antes de "uma" |
| K4 calculadoras | **Coexistem** (feito). A de PVC/PU continua na aba PVC e PU. A de comprimento vira seção própria em `produtos.html`, abaixo do explorer, porque serve a V e a transportadoras. O teaser da home passa a apontar as duas. **⚑7 continua aberto** |
| C2 split de unidade | **Badge por linha.** As 4 linhas ganham selo de disponibilidade (PR e MT / só MT) e os itens de filial entram como aba marcada. Sem filtro, sem esconder produto atrás de clique |
| Resíduo A/B | **Limpar junto.** Sai o toolbar `layout-switch` A\|B da linha de produtos e a variante de hero não usada, mais o CSS e o JS órfãos |

O diagrama de polias (D, d, C) do mockup será SVG inline com os tokens do design system,
sem asset externo.

---

## 1. Global

### G1 · Mensagem do botão WhatsApp
Texto pedido, literal:

> Olá, vim pelo site da Kauthec do Brasil e gostaria de maiores informações!

Aplicar em todos os `wa.me`: FAB flutuante, botão do header, CTAs "Falar no WhatsApp",
painel da página Contato.

### G2 · Matriz e filial estão invertidas
Cliente: **matriz é Ibiporã (PR)**, **filial é Várzea Grande (MT)**, e a filial **só atende MT**.

O screenshot da pág. 6 do PDF mostra o rodapé do formulário como
`MATRIZ MT · 65 3627-3737` / `FILIAL PR · 43 3373-6600`, ou seja, invertido.
Conferir e corrigir em: rodapé, página Contato, formulário Seja Parceiro, schema.org.

A restrição "só atende MT" é nova e tem consequência de copy: a filial não é um segundo
ponto de expedição nacional, é regional. Revisar qualquer texto que use as duas unidades
como argumento de cobertura nacional.

### G3 · Horário de atendimento
"Atendimento em horário comercial." Resolve **⚑1** de forma genérica (sem horas exatas).

---

## 2. Home · Hero

### H1 · Título
> O estoque que sua revenda precisa, com a engenharia que seu cliente exige.

### H2 · Subtítulo
> Importação direta e distribuição nacional de correias industriais e agrícolas.
> Garanta margem, pronta-entrega e a customização técnica que diferencia o seu negócio
> da concorrência.

### H3 · Trilho de specs (substituir os três)

| slot | label novo | valor novo |
|---|---|---|
| NORMAS | Certificação Internacional | NBR · DIN · ISO · ASTM · RMA |
| ESTOQUE | Capacidade Operacional | +10.000m processados mensalmente |
| ENTREGA | Logística de Alta Performance | Pronta-entrega em 72h |

- Resolve **⚑6**: o prazo passa a ser 72h. Sai o "3 dias úteis" inventado.
- **Conflita com ⚑8.** NBR, DIN e ASTM são *normas*. ISO é *certificação*. RMA é
  *classificação de cobertura*. Chamar o conjunto de "Certificação Internacional" é a
  afirmação exata que a `PENDENCIAS.md` marcou como risco. Decisão pendente.

### H4 · "*Garanta Margem"
Anotação solta abaixo do screenshot do hero. Leitura provável: destacar "Garanta margem"
no subtítulo (highlight dourado, como "estoque" e "engenharia" no título). **Confirmar.**

---

## 3. Home · Números e Sobre

### S1 · Trocar a foto da fachada
Cliente anexou foto nova da fachada (letreiro "K KAUTHEC", céu azul).
Extraída do PDF em 1600x1200 px. Pedir o original em resolução maior antes de processar.

### S2 · Números novos (do screenshot)
19 anos de expertise · +15 MIL parceiros estratégicos · +120.000 metros entregues/ano ·
soluções em 5 segmentos críticos.

- "19 anos" confere (2007 a 2026).
- **"+15 MIL parceiros estratégicos" não fecha** com o debriefing, que fala em faixa de
  +100 clientes. Quinze mil revendedores de correia no Brasil não existe. Provável confusão
  com metros, itens em estoque ou clientes finais atendidos pela cadeia. Confirmar antes
  de publicar. Relaciona-se a **⚑3**.
- "5 segmentos críticos" colide com a reestruturação do catálogo para 4 linhas (item P1).

### S3 · Substituir a seção de Diferenciais
Trocar pelo bloco mostrado na pág. 3 do PDF:

- Eyebrow: `ESTRATÉGIA E PARCERIA`
- Título: "Sua revenda mais forte com a nossa retaguarda."
- Apoio: "Importação direta e estoque robusto para impulsionar o seu crescimento."
- Faixa destacada `NOSSO DIFERENCIAL`: "Importação própria + Centro de Serviços. Estoque
  estratégico no PR e MT. Entregamos soluções customizadas com a agilidade que o seu
  cliente exige e o prazo que você precisa cumprir."
- Quatro cards: **Aliança B2B Real**, **Pronta-Entrega**, **Padrão Internacional**,
  **Suporte Técnico**.

> Nota de copy: "soluções" está na lista de palavras proibidas do `CLAUDE.md`. Aparece na
> faixa de destaque. Reescrever ou liberar a exceção.

---

## 4. Home · Linha de produtos

### P1 · São 4 linhas, não 5
Corrigir o texto de apoio, que hoje diz "Cinco linhas importadas e mantidas em estoque".
Decorre do agrupamento pedido no item C1.

### P2 · Renomear "Lençol de Borracha"
Vira **Revestimentos de Borracha**, com descrição
"Proteção e durabilidade ..." (o cliente deixou reticências; pedir a frase completa ou
escrever a partir da atual, "Proteção e durabilidade para tambores e roletes").

---

## 5. Calculadora

### K1 · Trocar a calculadora inteira
Sai a de PVC/PU (área em m², metros lineares, código de referência).
Entra **calculadora de comprimento de correia**:

Campos: `D` diâmetro da polia maior, `d` diâmetro da polia menor, `C` distância entre
centros, espessura da correia (opcional). Todos em mm.

Fórmula:

```
L = 2C + (π/2)(D + d) + (D - d)² / (4C)
```

> **O documento do cliente tem a fórmula errada.** Ele escreveu o último termo como
> `(d)²/4C`. O correto é `(D - d)²/(4C)`, e o próprio passo a passo dele confirma:
> "Subtraia o diâmetro menor do maior, eleve o resultado ao quadrado e divida por 4 vezes
> a distância entre eixos". Implementar a correta.
>
> Quando `D = d`, o termo zera e a fórmula cai em `L = 2C + πD`, como ele descreve.

### K2 · "Trocar polia por polia/rolete"
Nos labels dos campos e no passo a passo: "polia/rolete".

### K3 · Texto novo a incluir
> Nossa calculadora adapta o cálculo automaticamente para polias de tamanhos iguais e
> diferentes, garantindo o comprimento linear perfeito para sua correia sem fim.

(O documento escreve "correias em fim", typo de "sem fim".)

### K4 · Consequência em ⚑7
A calculadora antiga carregava o código de referência inventado (`PVC-3A-500x3000`).
Se ela sai de cena, **⚑7 morre junto**. Confirmar se as duas coexistem ou se é substituição.

---

## 6. Home · Jornada e FAQ

### J1 · Retirar o quadro "LAUDO TÉCNICO"
Localizar e remover. Atenção: "laudo técnico" também aparece no lead do hero e na
descrição do Passo 03 da jornada. O pedido parece ser sobre o card/quadro, não sobre todas
as menções. **Confirmar o escopo.**

### J2 · FAQ novo, cinco perguntas
Respostas fornecidas prontas pelo cliente (transcritas em `_ajustes/faq-cliente.md` se
formos aplicar literal). Resumo e impacto:

1. **"A Kauthec vende para consumidor final?"**
   Resposta do cliente: *"Priorizamos o atendimento a revendedores e parceiros estratégicos"*.
   **Isto responde ⚑4, e responde na direção fraca.** O site hoje diz "Não. Quem atende o
   cliente final é o parceiro." O cliente trocou uma negativa por uma priorização. Isso
   derruba o argumento mais forte do site, o canal protegido, que aparece em quatro lugares
   (Sobre, pilar "Parceria de verdade", benefício "Canal protegido", FAQ).
   **Decisão necessária antes de qualquer implementação.**

2. **"Qual o prazo de entrega?"**
   Resposta sem número, só "velocidade superior". Mas o hero passa a cravar 72h (item H3).
   Inconsistência: ou o FAQ repete 72h, ou o hero recua. Decidir.

3. **"Quais são as formas de pagamento?"** Pergunta nova. Boleto (sujeito a análise de
   crédito), PIX, transferência, condições para compra programada de alto volume.

4. **"Como faço para ser um revendedor?"** Formulário ou WhatsApp, diagnóstico, proposta
   personalizada.

5. **"A Kauthec faz instalação de correias?"** Não em campo. Posiciona como "Centro de
   Serviços Avançado": refile na largura exata, guias, taliscas, emendas técnicas.

Pontos abertos:
- As perguntas atuais que não estão nessa lista (pedido mínimo **⚑11**, entre outras) saem
  ou ficam?
- **Registro de voz.** As respostas vieram em corporativês pesado ("facilitadores do seu
  crescimento", "parceria financeira sustentável", "dominar seus mercados regionais"),
  registro bem distante do resto do site, que é direto e técnico. Aplicar literal ou passar
  a régua do Raphael mantendo o conteúdo?
- "soluções" e derivados aparecem nas respostas 5 e em outras. Lista proibida do `CLAUDE.md`.

---

## 7. CTA final / Seja Parceiro

### C0 · Corrigir claim superlativo
De: "Conecte-se à maior retaguarda técnica e logística de correias do Brasil."
Para: "Conecte-se **a uma das maiores** retaguardas técnica e logística..."

> O cliente escreveu "à uma das maiores". Crase antes de "uma" é erro. Vai sem crase.

---

## 8. Produtos (página interna)

### PR1 · Trocar o ícone de correia dentada
No detalhe de Correias em V, o ícone do tipo "Dentadas (Cogged)" não representa o produto.

**Feito de forma diferente:** o nosso build não tinha a lista de perfis com ícone, só a
linha "Perfis: liso, dentado e sextavado". Construí os três perfis (lisas, dentadas,
sextavadas) com três símbolos novos no sprite de `produtos.html`: `i-belt-smooth`,
`i-belt-cogged` e `i-belt-hex`, desenhados como seção transversal. **Não estão
documentados no `design_system/showcase.html`** ainda.

### PR2 · Corrigir campo Aplicação
De "Indústria Pesada, Mineração e Agronegócio" para
**"Indústria, Mineração e Agronegócio."**

---

## 9. Reestruturação do catálogo

### C1 · Agrupar linhas
"Correias Transportadoras" absorve "Elevadoras". **"Laminadas" sai**, porque já está
inclusa. Resultado: **4 linhas** onde hoje existem 5.

Afeta: grid da home, abas do master-detail em `produtos.html`, texto de apoio (item P1),
meta descriptions das duas páginas, e a contagem de fichas técnicas de **⚑16** (que passa
de 5 para 4 arquivos, mais os itens de filial).

### C2 · Separar catálogo por unidade
Dividir os produtos em **"matriz e filial"** e **"só filial"**.

**Só filial (Várzea Grande, MT):** acoplamentos, parafusos e arruelas para caneca, e canecas.
Referência do cliente: https://www.kauthecdobrasilmt.com.br/solucoes/

Isso é uma mudança de arquitetura de informação, não um ajuste de texto. Precisa de decisão
de layout: badge por linha, filtro por unidade, ou seção separada.

### C3 · Acoplamentos Antares
Registrar que os acoplamentos são da marca **Antares** (https://www.antaresacoplamentos.com.br)
e que a Kauthec é **representante exclusiva no Mato Grosso**.

Pendente: autorização de uso da marca e do logo Antares. Pedir o logo em vetor.

---

## Efeito sobre a `PENDENCIAS.md`

| ⚑ | Situação depois deste documento |
|---|---|
| **⚑1** horário | Resolvido de forma genérica: "horário comercial" |
| **⚑3** números | Substituído por um conjunto novo, com **+15 MIL parceiros suspeito** |
| **⚑4** venda direta | **Respondido, e enfraquecido.** Decisão de negócio pendente |
| **⚑6** prazo | **Resolvido: 72h** |
| **⚑7** código de referência PVC | Morre junto com a calculadora antiga, se for substituição |
| **⚑8** norma vs certificação | **Cliente afirma "Certificação Internacional". Risco mantido** |
| **⚑16** fichas técnicas | Contagem muda de 5 para 4 linhas mais itens de filial |
| ⚑2, ⚑5, ⚑9, ⚑10, ⚑11, ⚑12, ⚑13, ⚑14, ⚑15 | Não mencionados. Continuam abertos |

---

## Divergência de base

Os screenshots do documento mostram um build que não está neste repo.

Verificado em 2026-08-10:

- `index.html` (commit `eb1e2b9`) tem H1 "Seja parceiro de quem entrega no prazo prometido",
  o PDF mostra "O estoque que sua revenda precisa...".
- Os números do repo são um contador `+10.000`; o PDF mostra 19 / +15 MIL / +120.000 / 5.
- A calculadora do repo é de PVC/PU por área; a do PDF é de comprimento de correia.
- `grep` por `Calculadora de Comprimento`, `Jornada do Parceiro`, `recaptcha`,
  `potência regional` em todo o repo retorna zero.
- `origin/main` é idêntico ao local: 0 à frente, 0 atrás. Sem outras branches, sem stash.
- Os `screenshots/codex-*.png` (8 de julho, 18h-19h, fora do git por `.gitignore`) mostram
  ainda um terceiro estado, também diferente do PDF.

Só `produtos.html` bate em parte: o master-detail de 5 abas com "Carro-Chefe",
"Quero revender" e "Pedir orçamento" é o nosso (commit `c23916c`). O hero da página e a
calculadora dentro dela não são.

**Antes de implementar qualquer item acima é preciso saber onde está o build que o cliente
revisou.**
