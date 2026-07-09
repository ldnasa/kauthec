# Pendências com o cliente

O site está construído e navegável. Estes são os pontos que ainda dependem de resposta
do Bruno. Nenhum impede o build. Dois impedem a **publicação**.

## Como ver na tela

Abra qualquer página com `?pendencias=1`:

```
index.html?pendencias=1
produtos.html?pendencias=1
seja-parceiro.html?pendencias=1
contato.html?pendencias=1
```

Cada ponto pendente fica com contorno tracejado dourado e um rótulo dizendo o que falta.
Uma barra no rodapé conta quantos são. O console do navegador lista todos.
Sem o parâmetro, o modo some por completo e o site fica limpo.

Home tem 21 marcações. É a página para abrir com o Bruno.

---

## Bloqueiam a publicação

Estes dois não são copy. São afirmações sobre fatos externos. Errar aqui não é texto ruim,
é problema comercial e jurídico.

### ⚑4 · A Kauthec se compromete formalmente a não vender ao cliente do parceiro?

No `01-debriefing.md` isso aparece como **exemplo de resposta**, não como resposta.
Está publicado em quatro lugares: Sobre, pilar "Parceria de verdade", benefício
"Canal protegido" e a pergunta do FAQ.

É o argumento mais forte do site e o que a Multibelt não oferece. Se for "sim", fica.
Se for "não", saem os quatro blocos.

### ⚑8 · A Kauthec é certificada, ou segue as normas?

NBR, DIN e ASTM são **normas**. ISO é **certificação**. RMA é **classificação de cobertura**.
Não é a mesma coisa, e o revendedor técnico percebe.

Escrever "somos certificados ISO" sem o certificado é passivo. O site hoje diz
"as correias **seguem** NBR, DIN, ISO, ASTM e RMA", que é a formulação segura.
Se houver certificado, a copy pode ficar mais forte.

Confirmar também: o laudo técnico sai **por lote** ou **sob pedido**?

---

## Números inventados no ar agora

### ⚑6 · Prazo médio de entrega

**O site está publicando "3 dias úteis". Esse número é invenção minha.**

Aparece em dois lugares: a célula `ENTREGA` do trilho de spec do hero, e a resposta do
FAQ sobre prazo. Foi colocado a pedido, como exemplo, para o layout não ficar com um
buraco no meio do momento de maior atenção da página.

Trocar antes de qualquer coisa ir ao ar. Perguntar separado por unidade, se o prazo
variar entre PR e MT.

Quando o número chegar, o card de destaque dos Diferenciais também muda:

```
hoje:  O prazo é nosso diferencial porque o estoque é nosso.
depois: Correia despachada em X dias úteis.
```

### ⚑7 · Fórmula e tabela da calculadora PVC/PU

A calculadora funciona. A **matemática é real**: área em m² e metros lineares saem de
`comprimento × largura`. Testado: 3000 × 500 mm devolve 1,5 m² e 3 m.

O **código de referência** (`PVC-3A-500x3000`) é inventado. A tabela de siglas por
aplicação está em `js/main.js`, marcada com `⚑7`, e existe só para o layout funcionar.
Substituir pela tabela real antes de publicar.

---

## Não bloqueiam, mas custam

| ⚑ | Pergunta | Onde está no site |
|---|---|---|
| **⚑3** | Os números conferem? +100 clientes, +10.000 m/mês | Seção Números, trilho do hero |
| **⚑11** | Existe pedido mínimo? Em metros, valor ou linha? | FAQ. Hoje responde "a definir por linha", que é verdade mas é fraco |
| **⚑10** | Depoimentos e logos reais de parceiros | Não existe. A seção Prova Social foi **substituída** por um bloco de normas expandido. Depoimento placeholder em B2B industrial é pior que ausência |
| **⚑5** | O vídeo institucional do YouTube ainda representa a empresa? | Seção Sobre. Hoje o slot é a foto da fachada. Se o vídeo servir, vira embed |
| **⚑12** | As tabelas KT 140 / KT 220 e os tipos de cobertura ainda batem? | Página Produtos. Vieram do site antigo |
| **⚑9** | Pode prometer a "central de marketing em breve"? | Pilar Suporte, benefício Suporte. Prometer cria expectativa com data |
| **⚑1** | Horário de atendimento das duas unidades | Painel do WhatsApp, página Contato |
| **⚑2** | CNPJ da matriz | Rodapé. Hoje diz "CNPJ a confirmar" |
| **⚑13** | Limite de tamanho e formatos do upload | Formulário Seja Parceiro. Implementado com PDF/JPG/PNG até 10 MB |
| **⚑14** | Existe política de privacidade para linkar? (LGPD) | Aviso do upload. Documento societário é dado sensível |
| **⚑15** | Prazo de retorno do comercial | Mensagem de sucesso. Hoje não promete prazo nenhum, de propósito |

---

## Dívidas técnicas, não do cliente

- **O formulário não envia.** Não há backend definido. O `submit` valida tudo (inclusive
  o dígito verificador do CNPJ), mostra o estado de envio e a mensagem de sucesso, mas
  não posta em lugar nenhum. Definir destino: e-mail, Formspree, endpoint próprio.
- **Tailwind CDN está carregado e não é usado.** Zero utilities no markup. Ou usamos, ou
  cai no Passo E. Ver nota no fim do README.
- **Sem mapa na página Contato.** O `02-estrutura.md` pede mapa. Embed do Google Maps
  cobra consentimento de cookie (LGPD) e pesa. Hoje há dois blocos de cobertura textual
  no lugar. Decidir.
- **O SVG do logo continua sendo emblema traçado.** Funciona nos tamanhos do site.
  Não serve para impressão grande. Ver `my_brand_assets/README.md`.

---

*Marcadores no HTML: atributo `data-pendencia`. Buscar por `data-pendencia` acha todos.*
