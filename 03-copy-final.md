# 03 - Copy Final | Kauthec do Brasil

Copy polida e pronta para build. Substitui `03-copy.md` como fonte da verdade verbal.
Incorpora a copy verbatim que só existia no `wireframe.html` (nav, footer, cards, tabelas KT, página Contato).

`⚑` = depende de confirmação do cliente. Todas as linhas marcadas estão consolidadas no bloco final **Pendências com o cliente**.
`[CONFIRMAR: ...]` = lacuna de dado. Não inventar. Não publicar com o marcador na tela.

---

## O que mudou no polimento (leitura de 30 segundos)

1. **Proteção de canal virou copy, não subtexto.** O debriefing identifica que a Kauthec não ganha da Multibelt em escala nem em história, e sim em relação e em não concorrer com o próprio revendedor. Isso não aparecia em lugar nenhum do rascunho. Agora aparece três vezes: no Sobre, no pilar "Parceria de verdade" e como pergunta do FAQ. É o argumento mais forte do site e estava fora dele.
2. **"Uma das principais importadoras do país" foi cortada.** Puffery não verificável, e é exatamente o terreno onde a Multibelt vence (35 anos, virou fabricante). Trocada por uma frase que explica o mecanismo do diferencial: o estoque é próprio, por isso o prazo fecha.
3. **"Prazo que o concorrente não acompanha" foi reescrita.** Claim sobre terceiro, sem número e sem prova. Vira número quando o cliente confirmar, e tem fallback que não depende de número.
4. **"Certificações: NBR · DIN · ISO · ASTM · RMA"** virou **"Normas e certificações"**. NBR, DIN e ASTM são normas, não certificações. Público técnico nota. Ver pendência ⚑8.

---

## Voz da marca (referência rápida para copy nova no build)

| Atributo | É | Não é |
|---|---|---|
| Industrial-confiável | Frase curta, fato, número, norma | Adjetivo empilhado, superlativo |
| Técnico | "Carcaça poliéster, RMA 1" | "Alta tecnologia", "qualidade superior" |
| Próximo | "A gente", "você", "seu cliente" | "A empresa", "nossos clientes", 3ª pessoa |
| Ágil | Verbo no presente, voz ativa | Gerúndio, "estaremos entrando em contato" |

**Proibido em qualquer saída** (incluindo alt text, erro de formulário, tooltip): inovador, disruptivo, soluções, empoderador, bem-vindo, "claro"/"perfeito" como muleta. **Zero em-dash.** Zero menção a Mercosul.

**CTA principal do site:** `Quero ser parceiro`. **Backup:** `Falar no WhatsApp`. Nunca "Saiba mais".

---

# NAVEGAÇÃO E RODAPÉ

## Header (fixo)

**Logo:** Kauthec (link para Início)

**Nav (desktop):**
- Início
- Produtos
- Seja Parceiro
- Contato

**Nav (mobile, labels curtos):** Início · Produtos · Parceiro · Contato

**Botões do header:**
- Secundário (contorno): `WhatsApp`
- Primário (preenchido): `Seja Parceiro`

## Botão flutuante de WhatsApp

O site tem dois números. O botão flutuante nunca chuta qual. Ele pergunta.

**Botão (fechado)**
- `aria-label`: "Falar no WhatsApp"
- Label visível (desktop, ao lado do ícone): `Falar no WhatsApp`

**Painel (aberto)**
- Título: `Fale com a unidade mais perto de você`
- Opção 1: **Matriz - Ibiporã / PR** · `(43) 9 8815-8640`
- Opção 2: **Filial - Várzea Grande / MT** · `(65) 9 9604-7226`
- Rodapé do painel: `Atendimento comercial em horário comercial` ⚑1

**Mensagem pré-preenchida (query `?text=`)**
- PR: `Olá, vim pelo site da Kauthec e quero falar sobre a parceria.`
- MT: `Olá, vim pelo site da Kauthec e quero falar sobre a parceria.`

## Rodapé

**Coluna 1 (marca)**
- Logo Kauthec
- Descritor: `Importadora e distribuidora de correia industrial e agrícola desde 2007.`

**Coluna 2 - Navegação**
Início · Produtos · Seja Parceiro · Contato

**Coluna 3 - Atendimento**
- `Matriz PR: 43 3373-6600`
- `Filial MT: 65 3627-3737`
- `Atendimento em todo o Brasil`

**Coluna 4 - Unidades** (opcional, se o grid comportar)
- `Rua Luiz Carlos Zani, 4199 - Ibiporã / PR`
- `Rua Brigadeiro Eduardo Gomes, 998 - Várzea Grande / MT`

**Barra legal**
- `Kauthec do Brasil Importadora e Exportadora Ltda. · CNPJ [CONFIRMAR: CNPJ da matriz]` ⚑2
- `© 2026 Kauthec do Brasil. Todos os direitos reservados.`

**Gancho fase 2 (não construir agora, deixar o slot):** link discreto `Área do Parceiro` com estado `em breve`.

---

# PÁGINA: HOME

**Meta title:** `Kauthec do Brasil | Correias Industriais e Agrícolas` (52 car.)
**Meta description:** `Importadora e distribuidora de correias industriais e agrícolas desde 2007. Estoque próprio em PR e MT, laudo técnico e prazo de entrega para quem revende.` (156 car.)
**Palavras-alvo:** correia transportadora, correia em V, importadora de correias, revender correia

---

## 1. Hero

**Kicker**
`Importadora de correias desde 2007 · NBR · DIN · ISO · ASTM · RMA · Unidades em PR e MT` ⚑8

**H1 - Opção A (recomendada)**
> Seja parceiro de uma importadora que entrega no prazo que você prometeu.

**H1 - Opção B**
> A correia certa, no prazo que você prometeu ao seu cliente.

**Recomendação:** vai de **A**, porque é a única que carrega a palavra "parceiro" (a premissa inteira de conversão do site) sem abrir mão do diferencial de prazo, enquanto a B soa como fabricante falando com o comprador final, que é exatamente o sinal de canal errado para quem a Kauthec quer recrutar.

Se o cliente quiser rodar teste A/B, o par funciona: A é a versão de recrutamento, B é a versão de produto. Mesma promessa, públicos diferentes.

**Subtítulo (H2 visual, não semântico)**
> A Kauthec importa e distribui correia industrial e agrícola. Você cuida do seu cliente. A gente entrega no prazo, com estoque em linha e laudo técnico nas unidades de PR e MT.

**CTA primário:** `Quero ser parceiro` → /seja-parceiro
**CTA secundário (contorno, não compete):** `Falar no WhatsApp` → abre painel de unidades

**Imagem-chave**
Correia em bobina saindo para expedição. Precisa comunicar despacho, não estoque parado.
`alt`: "Bobinas de correia transportadora prontas para expedição no estoque da Kauthec"

---

## 2. Números + Normas

**Elementos (4 colunas)**

| Número | Legenda |
|---|---|
| Desde 2007 | no mercado de correias |
| +100 ⚑3 | clientes no Brasil |
| +10.000 m ⚑3 | de correia entregues por mês |
| 5 linhas | de produto em estoque |

**Faixa de selos**
- Label: `Normas e certificações:` ⚑8
- Selos: `NBR` `DIN` `ISO` `ASTM` `RMA`

**Nota para o build:** se os números não forem confirmados a tempo, esta seção sai. Número inventado em site B2B industrial é dano de reputação, não é enfeite. Um contador quebrado ("1 anos de experiência") já existe no site antigo e é parte do motivo do rebuild.

---

## 3. Sobre a Kauthec

**Kicker**
`Quem é a Kauthec`

**H2**
> Somos importadora. O estoque é nosso, e é por isso que o prazo fecha.

**Parágrafo 1**
> Desde 2007 a Kauthec importa e distribui correia industrial e agrícola para o Brasil inteiro. Cinco linhas mantidas em estoque nas unidades de Ibiporã-PR e Várzea Grande-MT, com laudo técnico e norma por trás de cada uma.

**Parágrafo 2** ⚑4
> Trabalhamos lado a lado com quem revende. Quem fecha a venda na ponta é o parceiro. A Kauthec fica na retaguarda.

**Visual:** vídeo institucional do YouTube (`youtu.be/eehBfJf0BmQ`) ⚑5
Se o vídeo não for aprovado, o slot vira imagem única de fábrica/expedição com o mesmo texto ao lado.
`alt` (poster do vídeo): "Vídeo institucional da Kauthec do Brasil, unidade de Ibiporã-PR"

---

## 4. Diferenciais

**H2**
> Por que o parceiro escolhe a Kauthec.

**Linha de apoio**
> Não é catálogo. É retaguarda para você vender com segurança.

### Card em destaque (Von Restorff)

**Badge:** `Nosso diferencial`

**H3 - versão com número (usar assim que o prazo for confirmado)** ⚑6
> Correia despachada em [CONFIRMAR: prazo médio real em dias úteis] dias úteis.

**H3 - versão sem número (fallback, publicável hoje)**
> O prazo é nosso diferencial porque o estoque é nosso.

**Corpo**
> Cinco linhas em estoque e expedição de duas unidades, PR e MT. Você promete prazo ao seu cliente e cumpre. Máquina parada é o que mais dói na indústria e no agro, e é aí que a Kauthec ganha.

### Os quatro pilares

**Parceria de verdade** ⚑4
> O revendedor é parceiro, não é mais um pedido. E a gente não vende para o cliente que é seu.

**Estoque em linha**
> Cinco linhas prontas nas duas unidades. Menos espera, menos venda perdida.

**Laudo e certificação**
> NBR, DIN, ISO, ASTM e RMA. Você revende importado sem medo de reclamação na ponta.

**Suporte para vender** ⚑9
> Material técnico e especificação pronta para o parceiro apresentar e fechar. Central de marketing em breve.

---

## 5. Linha de Produtos

**H2**
> Linha completa de correia e borracha

**Linha de apoio**
> Cinco linhas importadas e mantidas em estoque.

### Cards (5 + 1 utilitário)

**1. Correias em V** · badge `Carro-chefe`
> O carro-chefe da Kauthec. Transmissão de potência para indústria e agro. Lisas, dentadas e sextavadas.
CTA: `Ver especificações` → /produtos
`alt`: "Correia de transmissão em V para uso industrial e agrícola"

**2. Correias Transportadoras**
> Carcaça em poliéster e nylon. Para impacto, abrasão e granel pesado.
CTA: `Ver especificações` → /produtos
`alt`: "Correia transportadora de carcaça têxtil com cobertura de borracha"

**3. Correias de PVC e PU**
> Transporte leve, linha alimentícia e produção. Com calculadora de referência.
CTA: `Calcular e ver specs` → /produtos#calculadora
`alt`: "Correia transportadora de PVC branca para linha de produção alimentícia"

**4. Correias Laminadas e Elevadoras**
> Com e sem taliscas, lisas e corrugadas. Para elevação de grãos e materiais.
CTA: `Ver especificações` → /produtos
`alt`: "Correia elevadora com taliscas para transporte vertical de grãos"

**5. Lençol de Borracha**
> Revestimento e proteção contra abrasão.
CTA: `Ver especificações` → /produtos
`alt`: "Lençol de borracha para revestimento antiabrasivo de equipamentos"

**6. Card utilitário**
> Precisa de uma correia específica?
CTA: `Pedir orçamento` → /contato

---

## 6. Calculadora PVC/PU (teaser)

**Kicker**
`Ferramenta`

**H2**
> Calcule sua correia de PVC e PU

**Parágrafo**
> Informe as medidas e a aplicação. A referência sai na hora, sem tabela impressa e sem esperar retorno do comercial.

**CTA:** `Abrir calculadora` → /produtos#calculadora

⚑7 Feature interativa em vanilla JS. Campos e fórmula ainda não definidos.

---

## 7. Indústrias Atendidas

**H2**
> Onde nossas correias trabalham

**Linha de apoio**
> Especificação por aplicação, não por catálogo.

**Tags:** Agroindústria · Cimenteira · Mineração · Madeireira · Pedreira · Papel e Celulose · Petroquímica · Siderurgia · Portos · Usinas

**Nota de regra:** são 10 tags, acima do teto de 5-7 de Miller. Miller vale para conjuntos de escolha (o usuário precisa decidir entre opções). Isto é uma nuvem de reconhecimento: o leitor varre até achar o setor dele e para. Cortar setor real para caber numa regra custaria lead qualificado. Decisão consciente, não descuido.

---

## 8. Como Virar Parceiro

**H2**
> Virar parceiro Kauthec é simples

**Passo 1 - Fale com a gente**
> Formulário ou WhatsApp. Tenha em mãos o CNPJ e uma cópia do contrato social.

**Passo 2 - Receba a proposta de parceria**
> Condições comerciais, linhas disponíveis e região de atuação.

**Passo 3 - Comece a revender**
> Com prazo, estoque, laudo técnico e suporte por trás de você.

---

## 9. Prova Social ⚑10

**H2**
> Quem já revende Kauthec

**Linha de apoio**
> Parceiros que prometem prazo ao cliente e cumprem.

**Estrutura:** 3 depoimentos (citação, nome, empresa, cidade) + faixa de 6 logos.

**Se não houver material real até o build:** a seção sai inteira. Depoimento placeholder em site B2B industrial é pior que ausência de depoimento. Substituto sugerido no mesmo slot: bloco de normas expandido, com uma frase por norma explicando o que ela garante. Autoridade sem depender de terceiro.

---

## 10. FAQ

**H2**
> Perguntas que todo parceiro faz

**Q: Que documentos preciso para me tornar parceiro?**
A: CNPJ ativo e cópia do contrato social. Com isso a gente já monta sua proposta de parceria.

**Q: Qual é o prazo de entrega?** ⚑6
A: É o nosso diferencial. Estoque em linha nas duas unidades e expedição de Ibiporã-PR ou Várzea Grande-MT, o que estiver mais perto de você. Prazo médio de [CONFIRMAR: prazo médio real em dias úteis] dias úteis.

**Q: Vocês vendem direto para o meu cliente?** ⚑4
A: Não. Quem atende o cliente final é o parceiro. A Kauthec abastece e dá a retaguarda técnica.

**Q: Tem quantidade mínima para revender?** ⚑11
A: [CONFIRMAR: existe pedido mínimo? Em metros, em valor, ou por linha?]

**Q: Correia importada tem a mesma qualidade?**
A: Sim. As correias seguem NBR, DIN, ISO, ASTM e RMA, com laudo técnico disponível por lote. ⚑8

**Q: Vocês atendem a minha região?**
A: Atendimento em todo o Brasil, com despacho das unidades de Ibiporã-PR e Várzea Grande-MT.

*6 perguntas, dentro do teto de Miller. A pergunta sobre venda direta é a mais importante da página: é a objeção que decide entre a Kauthec e a Multibelt.*

---

## 11. CTA Final (Peak-End)

**H2**
> Pronto para revender com quem entrega no prazo?

**Parágrafo**
> Preencha e o comercial entra em contato com a proposta de parceria.

**Campos:** Nome · Empresa / CNPJ · Cidade / UF · WhatsApp

**Aviso abaixo do formulário**
> Para fechar a parceria pediremos CNPJ ativo e cópia do contrato social.

**CTA primário:** `Quero ser parceiro`
**CTA secundário:** `Falar no WhatsApp`

---

# PÁGINA: PRODUTOS

**Meta title:** `Correias em V, PVC, PU e Transportadoras | Kauthec` (50 car.)
**Meta description:** `Correia em V, transportadora, PVC e PU, laminada, elevadora e lençol de borracha. Referências KT, tipos de cobertura e calculadora de PVC e PU.` (145 car.)
**Palavras-alvo:** correia em V industrial, correia em V agrícola, correia transportadora PVC, referência KT 140, KT 220

---

## Intro

**Kicker**
`Produtos`

**H1**
> Cinco linhas de correia, prontas para despachar.

**Parágrafo**
> A Correia em V é o carro-chefe. Todas as linhas seguem NBR, DIN, ISO, ASTM e RMA, com laudo técnico disponível. Abaixo, o nível de detalhe que o parceiro precisa para especificar certo na primeira vez.

---

## Os cinco cards

**Correias em V** · badge `Carro-chefe`
> Transmissão de potência para indústria e agro. Perfis lisos, dentados e sextavados. A linha que mais gira no estoque da Kauthec.

**Correias Transportadoras**
> Carcaça em poliéster e nylon, com e sem cobertura de borracha. Para impacto, abrasão e granel pesado. Coberturas anti-óleo, antichama e antiestática.

**Correias de PVC e PU**
> Transporte leve, linha alimentícia e produção. Lisas, rugosas e com perfil. Calculadora de referência na própria página.

**Correias Laminadas e Elevadoras**
> Com e sem taliscas, lisas e corrugadas. Elevação de grãos, fertilizante e material a granel.

**Lençol de Borracha**
> Revestimento de chutes, calhas e caçambas. Proteção contra abrasão e impacto.

---

## Calculadora de correia PVC e PU ⚑7

**H2**
> Calculadora de correia PVC e PU

**Linha de apoio**
> Ferramenta para o parceiro cotar rápido, sem tabela impressa.

**Campos** (a definir com o cliente)
- `Comprimento (mm)` · placeholder `Ex: 3000`
- `Largura (mm)` · placeholder `Ex: 500`
- `Aplicação` · select · placeholder `Selecione a aplicação`

**Botão:** `Calcular referência`

**Estados da interface**
- Vazio: `Preencha as medidas e a aplicação para ver a referência.`
- Carregando: `Calculando...`
- Resultado: `Referência recomendada: {REF}` + linha de apoio `Confirme a especificação com o comercial antes de fechar o pedido.`
- Sem resultado: `Não achamos uma referência padrão para essas medidas. Chame o comercial no WhatsApp que a gente resolve.`
- Erro de campo: `Informe o comprimento em milímetros.` / `Informe a largura em milímetros.` / `Escolha a aplicação.`

**CTA abaixo do resultado:** `Pedir orçamento dessa referência` → /contato

---

## Detalhamento técnico: correias transportadoras

**H2**
> Detalhamento técnico: correias transportadoras

**Parágrafo**
> Carcaça em poliéster e nylon, atendendo às normas técnicas nacionais e internacionais. Resistência a impacto, abrasão e queda de material, com coberturas anti-óleo e antichama.

⚑12 Tabelas herdadas do site atual. Validar se ainda batem com o que a Kauthec vende hoje.

### Tabela de referências KT

**Legenda da tabela:** `Referências KT - tensão de trabalho e diâmetro mínimo de rolete`

| Referência | Tensão (kgf/cm) | Diâm. mín. rolete (mm) | (pol) |
|---|---|---|---|
| KT 140/2L x 1/16 x 1/16 | 25 | 165 | 6.5 |
| KT 140/3L x 1/8 x 1/16 | 37,5 | 250 | 10 |
| KT 220/3L x 3/16 x 1/16 | 66 | 350 | 14 |
| KT 220/3L x 3/8 x 1/8 | 66 | 350 | 14 |

**Nota abaixo da tabela**
> Não achou a referência? A Kauthec importa fora de linha sob demanda. `Falar no WhatsApp`

### Tipos de cobertura

**H3**
> Tipos de cobertura

| Código | Nome | Aplicação |
|---|---|---|
| **AA** | Alta Abrasão | Areia, cal, cimento, calcário, soja, milho, trigo. Tipo RMA 2. |
| **EA** | Extra Abrasão | Brita, minério de ferro, granito, coque, escória. Tipo RMA 1. |
| **ACAOE** | Antichama, Antiestática e Óleo | Silos, armazéns e corredores portuários. Até 90 ºC. |
| **CW** | Corrugada W | Mercadoria leve em inclinação de até 35 graus. |
| **TT** | Taliscada Trator | Granel em superfície inclinada. |
| **TV** | Taliscada em V | Granel em superfície inclinada. |

*Ajuste de escrita: o site antigo usa "Anti Chama" e "Anti Estática" separados. O padrão do português é "antichama" e "antiestática", uma palavra. A sigla ACAOE permanece.*

---

## CTA da página Produtos

**H2**
> Essas linhas rendem bem na sua prateleira.

**Parágrafo**
> Cinco linhas em estoque, laudo técnico e prazo de entrega. É o que o seu cliente cobra de você.

**CTA primário:** `Quero revender essas linhas` → /seja-parceiro
**CTA secundário:** `Pedir orçamento` → /contato

---

# PÁGINA: SEJA PARCEIRO

**Meta title:** `Seja Parceiro Kauthec | Revenda Correias Industriais` (52 car.)
**Meta description:** `Revenda correia industrial e agrícola com estoque em linha, laudo técnico e prazo de entrega. Envie CNPJ e contrato social e receba a proposta de parceria.` (157 car.)
**Palavras-alvo:** revender correia, ser revendedor de correias, distribuidor de correias industriais

---

## Hero da página

**Kicker**
`Programa de parceria`

**H1**
> Seja parceiro de uma importadora que joga junto com você.

**Parágrafo**
> Prazo de entrega em que o seu cliente confia, estoque em linha, laudo técnico e suporte para você fechar mais vendas. Você cuida do cliente. A Kauthec cuida da retaguarda.

**CTA de âncora (rola até o formulário):** `Quero receber a proposta`

---

## O que o parceiro Kauthec ganha

**H2**
> O que o parceiro Kauthec ganha

**Prazo como argumento de venda**
> Prometa prazo ao seu cliente e cumpra. Na indústria e no agro, é isso que fideliza.

**Abastecimento garantido**
> Cinco linhas em estoque nas duas unidades. Você não fica na mão no meio da safra.

**Respaldo técnico**
> NBR, DIN, ISO, ASTM e RMA, com laudo disponível. Você revende importado com o papel na mão.

**Suporte para vender** ⚑9
> Material técnico e especificação pronta para apresentar. Central de marketing para parceiros em breve.

**Canal protegido** ⚑4
> A Kauthec não vende para o cliente do parceiro. Quem conquistou a conta é dono dela.

*Cinco benefícios, dentro do teto de Miller. O quinto ("Canal protegido") é o que a Multibelt não oferece. Se algum tiver que sair, não é esse.*

---

## Formulário de parceria

**H2**
> Quero receber a proposta de parceria

**Linha de apoio**
> Para fechar a parceria pediremos CNPJ ativo e cópia do contrato social. Envie agora e adiante o processo.

### Campos, labels e placeholders

| Label | Placeholder | Obrigatório |
|---|---|---|
| Nome | `Nome e sobrenome` | sim |
| Empresa | `Razão social ou nome fantasia` | sim |
| CNPJ | `00.000.000/0000-00` | sim |
| Cidade / UF | `Ibiporã / PR` | sim |
| WhatsApp | `(43) 9 9999-9999` | sim |
| E-mail | `voce@suaempresa.com.br` | sim |
| Que linhas pretende revender? | `Correia em V, PVC, transportadora...` | não |
| Cópia do contrato social | (campo de upload) | não |

### Microcopy do upload

- **Label:** `Cópia do contrato social`
- **Hint abaixo do campo:** `PDF, JPG ou PNG. Até 10 MB.` ⚑13
- **Estado vazio:** `Arraste o arquivo aqui ou clique para escolher`
- **Estado com arquivo:** `{nome-do-arquivo.pdf} · {tamanho} · Remover`
- **Aviso de privacidade (abaixo do campo):** `Usamos o documento apenas para montar a sua proposta de parceria.` ⚑14
- **Se preferir não enviar agora:** `Pode enviar depois. O comercial pede pelo WhatsApp.`

### Mensagens de erro

| Situação | Mensagem |
|---|---|
| Nome vazio | `Preencha seu nome.` |
| Empresa vazia | `Informe o nome da empresa.` |
| CNPJ vazio | `Informe o CNPJ da empresa.` |
| CNPJ inválido | `CNPJ inválido. Confira os 14 dígitos.` |
| Cidade / UF vazio | `Informe a cidade e o estado.` |
| WhatsApp vazio | `Informe um WhatsApp com DDD.` |
| WhatsApp inválido | `Número incompleto. Confira o DDD e os 9 dígitos.` |
| E-mail vazio | `Informe um e-mail para contato.` |
| E-mail inválido | `E-mail inválido. Confira o endereço.` |
| Upload de formato errado | `Formato não aceito. Envie PDF, JPG ou PNG.` |
| Upload acima do limite | `Arquivo acima de 10 MB. Comprima ou envie em PDF.` ⚑13 |
| Falha no envio | `Não conseguimos enviar agora. Tente de novo ou chame no WhatsApp.` |

### Estados do botão

- Padrão: `Enviar e falar com o comercial`
- Enviando: `Enviando...`
- Enviado: `Enviado`

### Mensagem de sucesso

**Título:** `Recebemos seus dados.`
**Corpo:** `O comercial da Kauthec entra em contato pelo WhatsApp que você informou, com a proposta de parceria. Retorno em até [CONFIRMAR: prazo de retorno comercial, ex. 1 dia útil].` ⚑15
**CTA de escape:** `Prefere adiantar? Falar no WhatsApp agora`

### Mensagem de sucesso (formulário curto da Home)

**Título:** `Recebemos.`
**Corpo:** `O comercial da Kauthec entra em contato pelo WhatsApp informado.`

---

# PÁGINA: CONTATO

**Meta title:** `Contato | Kauthec do Brasil - Correias PR e MT` (46 car.)
**Meta description:** `Fale com a Kauthec. Matriz em Ibiporã-PR e filial em Várzea Grande-MT. Telefone, e-mail e WhatsApp de cada unidade. Atendimento em todo o Brasil.` (145 car.)

---

## Hero da página

**Kicker**
`Contato`

**H1**
> Duas unidades, atendimento em todo o Brasil.

**Parágrafo**
> Matriz em Ibiporã-PR e filial em Várzea Grande-MT. Fale direto com a unidade mais perto de você. Se for sobre parceria, o caminho mais rápido é o formulário.

**CTA secundário:** `Quero ser parceiro` → /seja-parceiro

---

## Unidades

### Matriz - Ibiporã / PR

> Rua Luiz Carlos Zani, 4199 - Parque Industrial V
> Ibiporã / PR
> Telefone: 43 3373-6600
> WhatsApp: 43 9 8815-8640
> comercial@kauthecdobrasil.com

**CTA:** `WhatsApp da matriz`
`aria-label`: "Abrir WhatsApp da matriz em Ibiporã, Paraná"

### Filial - Várzea Grande / MT

> Rua Brigadeiro Eduardo Gomes, 998 - Centro Sul
> Várzea Grande / MT
> Telefone: 65 3627-3737
> WhatsApp: 65 9 9604-7226
> kauthecmt@kauthecdobrasil.com

**CTA:** `WhatsApp da filial`
`aria-label`: "Abrir WhatsApp da filial em Várzea Grande, Mato Grosso"

**Horário de atendimento (linha única, abaixo dos dois cards)**
`[CONFIRMAR: horário de atendimento das duas unidades]` ⚑1

---

## Mapa

**H2**
> Onde estamos

**Legenda:** `Matriz em Ibiporã-PR, no eixo industrial de Londrina. Filial em Várzea Grande-MT, no corredor do agro do Centro-Oeste.`

`alt` (se for imagem estática): "Mapa do Brasil com as unidades da Kauthec em Ibiporã-PR e Várzea Grande-MT"

---

# ALT TEXT DAS IMAGENS-CHAVE (resumo)

| Imagem | Alt text |
|---|---|
| Logo (header e footer) | `Kauthec do Brasil, importadora de correias industriais e agrícolas` |
| Hero da Home | `Bobinas de correia transportadora prontas para expedição no estoque da Kauthec` |
| Poster do vídeo institucional | `Vídeo institucional da Kauthec do Brasil, unidade de Ibiporã-PR` |
| Card Correia em V | `Correia de transmissão em V para uso industrial e agrícola` |
| Card Transportadora | `Correia transportadora de carcaça têxtil com cobertura de borracha` |
| Card PVC e PU | `Correia transportadora de PVC branca para linha de produção alimentícia` |
| Card Laminada / Elevadora | `Correia elevadora com taliscas para transporte vertical de grãos` |
| Card Lençol de Borracha | `Lençol de borracha para revestimento antiabrasivo de equipamentos` |
| Selos de norma | `Selo da norma {NBR / DIN / ISO / ASTM / RMA}` |
| Mapa das unidades | `Mapa do Brasil com as unidades da Kauthec em Ibiporã-PR e Várzea Grande-MT` |

**Regra:** ícones decorativos (os dos quatro pilares, setas de CTA) levam `alt=""` e `aria-hidden="true"`. Alt text não repete o título do card ao lado.

---

# PENDÊNCIAS COM O CLIENTE

Ordenadas por impacto na copy. As três primeiras travam o hero e o FAQ.

| # | Pendência | Onde bate | Bloqueia o build? |
|---|---|---|---|
| **⚑6** | **Prazo médio real de entrega, em dias úteis.** O diferencial nº1 do site inteiro está sem número. Existe fallback publicável ("o estoque é nosso"), mas o número é o que ganha da Multibelt. Perguntar separado por unidade (PR e MT) se o prazo variar. | Hero, card de destaque dos Diferenciais, FAQ | Não (tem fallback), mas custa a arma principal |
| **⚑4** | **A Kauthec se compromete formalmente a não vender para o cliente do parceiro?** Isso está como *exemplo de resposta* no debriefing, não como resposta. Se for sim, é o argumento mais forte do site. Se for não, três blocos de copy saem. | Sobre, pilar "Parceria de verdade", benefício "Canal protegido", FAQ | **Sim.** Não publicar promessa de canal que a empresa não vai cumprir |
| **⚑11** | **Existe quantidade mínima de pedido?** Em metros, em valor, ou por linha? Se não existe, dizer "não" é vantagem competitiva e deve ir no FAQ com todas as letras. | FAQ | **Sim.** Pergunta do FAQ está vazia |
| **⚑3** | **Os números batem?** +100 clientes, +10.000 m/mês, 5 linhas em estoque, desde 2007. O contador do site antigo estava quebrado. Sem confirmação, a seção de números sai. | Seção Números | Não (seção sai) |
| **⚑8** | **NBR, DIN, ISO, ASTM e RMA: a Kauthec é certificada ou segue as normas?** Não é a mesma coisa. NBR/DIN/ASTM são normas, ISO é certificação, RMA é classificação. Público técnico percebe, e "certificado ISO" sem certificado é passivo jurídico. Também confirmar se o laudo técnico sai por lote ou sob pedido. | Kicker do hero, faixa de selos, pilar de laudo, FAQ, Produtos | **Sim.** Risco de claim falso |
| **⚑5** | **O vídeo institucional (`youtu.be/eehBfJf0BmQ`) ainda representa a empresa?** Se não, o slot vira imagem e o texto permanece. | Sobre a Kauthec | Não |
| **⚑10** | **Depoimentos e logos reais.** Briefing diz que não há nada pronto. Sem material, a seção de prova social sai do v1. Perguntar: quantos parceiros ativos? Quantos topam depoimento? Quais logos podem aparecer? | Prova Social | Não (seção sai) |
| **⚑7** | **Calculadora PVC/PU: campos e fórmula.** Quais variáveis entram (comprimento, largura, aplicação, carga, velocidade?) e qual a regra que devolve a referência. Sem isso, a calculadora não existe. | Home (teaser), Produtos | **Sim, para a feature.** Site publica sem ela |
| **⚑12** | **Tabelas KT 140 / KT 220 e tipos de cobertura ainda batem com o que a Kauthec vende hoje?** Vieram do site antigo. Faltam referências no meio (só há 4 linhas). Pedir a tabela completa se existir. | Produtos | Não (publica com as 4 linhas) |
| **⚑9** | **"Central de marketing em breve" pode ser prometida?** É gancho de fase 2. Prometer no site cria expectativa com data. Alternativa: cortar "em breve" e falar só de material técnico. | Pilar Suporte, benefício Suporte | Não |
| **⚑1** | **Horário de atendimento das duas unidades.** | Contato, painel do WhatsApp | Não |
| **⚑2** | **CNPJ da matriz para o rodapé.** Obrigatório em site institucional B2B sério, e a razão social completa já é conhecida. | Rodapé | Não |
| **⚑13** | **Limite de tamanho e formatos aceitos no upload do contrato social.** Sugerido: PDF, JPG, PNG, até 10 MB. Confirmar com quem recebe o e-mail. | Formulário Seja Parceiro | Não |
| **⚑14** | **Aviso de privacidade do upload.** Documento societário é dado sensível de empresa. A frase sugerida é mínima. Confirmar se existe política de privacidade a linkar (LGPD). | Formulário Seja Parceiro | Não, mas recomendado antes de ir ao ar |
| **⚑15** | **Prazo de retorno do comercial** após o envio do formulário. Prometer "em até 1 dia útil" só se for verdade. | Mensagem de sucesso | Não |

---

## Nota final para o build

Duas coisas não podem ir ao ar sem resposta do cliente: a **promessa de proteção de canal** (⚑4) e a **natureza das certificações** (⚑8). As duas são afirmações sobre fatos externos. Erro ali não é copy ruim, é problema comercial e jurídico.

Todo o resto tem fallback e o site publica sem.

---

*Copy: Raphael. Fase estratégica: Claude Web. Designer: Caio Augusto Liutti - Londrina S/A.*
