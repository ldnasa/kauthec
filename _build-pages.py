"""
Gerador das paginas internas a partir dos partials do index.html.

Nao e build tool: e um script de uma vez so, rodado a mao, para que header,
footer, sprite e botao de WhatsApp nunca divirjam entre as quatro paginas.
HTML puro nao tem partial. Depois de rodar, o script pode ser apagado.

    python _build-pages.py
"""
import pathlib, re, sys

src = pathlib.Path("index.html").read_text(encoding="utf-8")

def between(a, b, s=src):
    i = s.index(a); j = s.index(b, i)
    return s[i:j + len(b)]

SPRITE = between('<svg aria-hidden="true" class="icon-sprite">', '</svg>\n')
HEADER = between('<header class="header">', '</header>')
FOOTER = between('<footer class="footer">', '</footer>')
WA = between('<!-- Dois números.', '<button class="wa__toggle"')
WA = WA[:WA.index('<button class="wa__toggle"')] + between('<button class="wa__toggle"', '</div>')


def head(title, desc, canonical, og_image="assets/images/hero-expedicao.webp", extra=""):
    return f"""<!DOCTYPE html>
<html lang="pt-BR" class="theme-dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>{title}</title>
  <meta name="description" content="{desc}">
  <link rel="canonical" href="https://kauthecdobrasil.com/{canonical}">

  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="Kauthec do Brasil">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{desc}">
  <meta property="og:url" content="https://kauthecdobrasil.com/{canonical}">
  <meta property="og:image" content="https://kauthecdobrasil.com/{og_image}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#101011">

  <link rel="icon" href="my_brand_assets/logo-kauthec-emblem.svg" type="image/svg+xml">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,900&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">

  <!-- Tailwind via CDN só em dev. preflight desligado: o reset dele entra
       depois do nosso CSS e sobrescreve a escala tipográfica. -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>tailwind.config = {{ corePlugins: {{ preflight: false }} }};</script>
  <link rel="stylesheet" href="design_system/tokens.css">
  <link rel="stylesheet" href="css/custom.css">
{extra}</head>
<body>
  <a class="skip-link" href="#main">Pular para o conteúdo</a>

  {SPRITE}
"""


def nav_current(html, page):
    """Marca aria-current na aba certa e tira da Home."""
    html = html.replace(' aria-current="page"', "")
    return html.replace(f'<a href="{page}">', f'<a href="{page}" aria-current="page">', 1)


def tail():
    return f"""
  {FOOTER}

  {WA}

  <div class="pendencias-bar" role="status"></div>

  <script src="js/main.js" defer></script>
</body>
</html>
"""


# ============================================================ PRODUTOS
PRODUTOS_MAIN = """
  <main id="main">
    <section class="section">
      <div class="container">
        <span class="eyebrow">Produtos</span>
        <h1>Cinco linhas de correia, prontas para <span class="hl">despachar</span>.</h1>
        <p class="lead">A Correia em V é o carro-chefe. Todas as linhas seguem NBR, DIN, ISO, ASTM e RMA, com laudo técnico disponível. Abaixo, o nível de detalhe que o parceiro precisa para especificar certo na primeira vez.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid-hairline cols-3 reveal">
          <article class="product product--flagship">
            <div class="product__thumb">
              <span class="product__flag">Carro-chefe</span>
              <img src="assets/images/linha-correia-v.webp" width="800" height="800" loading="lazy" alt="Correia de transmissão em V para uso industrial e agrícola">
            </div>
            <div class="product__body">
              <h2>Correias em V</h2>
              <p>Transmissão de potência para indústria e agro. Perfis lisos, dentados e sextavados. A linha que mais gira no estoque da Kauthec.</p>
            </div>
          </article>
          <article class="product">
            <div class="product__thumb"><img src="assets/images/linha-transportadora.webp" width="800" height="800" loading="lazy" alt="Correia transportadora de carcaça têxtil com cobertura de borracha"></div>
            <div class="product__body">
              <h2>Correias Transportadoras</h2>
              <p>Carcaça em poliéster e nylon, com e sem cobertura de borracha. Para impacto, abrasão e granel pesado. Coberturas anti-óleo, antichama e antiestática.</p>
            </div>
          </article>
          <article class="product">
            <div class="product__thumb"><img src="assets/images/linha-pvc-pu.webp" width="800" height="800" loading="lazy" alt="Correia transportadora de PVC branca para linha de produção alimentícia"></div>
            <div class="product__body">
              <h2>Correias de PVC e PU</h2>
              <p>Transporte leve, linha alimentícia e produção. Lisas, rugosas e com perfil. Calculadora de referência na própria página.</p>
              <a class="product__cta" href="#calculadora">Abrir calculadora <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"/></svg></a>
            </div>
          </article>
          <article class="product">
            <div class="product__thumb"><img src="assets/images/linha-laminada-elevadora.webp" width="800" height="800" loading="lazy" alt="Correia elevadora com taliscas para transporte vertical de grãos"></div>
            <div class="product__body">
              <h2>Correias Laminadas e Elevadoras</h2>
              <p>Com e sem taliscas, lisas e corrugadas. Elevação de grãos, fertilizante e material a granel.</p>
            </div>
          </article>
          <article class="product">
            <div class="product__thumb"><img src="assets/images/linha-lencol-borracha.webp" width="800" height="800" loading="lazy" alt="Lençol de borracha para revestimento antiabrasivo de equipamentos"></div>
            <div class="product__body">
              <h2>Lençol de Borracha</h2>
              <p>Revestimento de chutes, calhas e caçambas. Proteção contra abrasão e impacto.</p>
            </div>
          </article>
          <article class="product product--utility">
            <div class="product__body">
              <h2>Não achou a referência?</h2>
              <p>A Kauthec importa fora de linha sob demanda.</p>
              <a class="btn btn--secondary" href="contato.html">Falar no WhatsApp <svg class="icon" aria-hidden="true"><use href="#i-whatsapp"/></svg></a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ============================================ CALCULADORA -->
    <section class="section" id="calculadora">
      <div class="container">
        <div class="section-head section-head--split reveal">
          <div>
            <span class="eyebrow">Ferramenta</span>
            <h2>Calculadora de correia PVC e PU</h2>
          </div>
          <p>Ferramenta para o parceiro cotar rápido, sem tabela impressa.</p>
        </div>

        <div class="calc reveal">
          <form id="calc-form" novalidate>
            <div class="form form--two">
              <label class="field">
                <span>Comprimento (mm)</span>
                <input type="number" id="calc-comprimento" min="1" placeholder="Ex: 3000" inputmode="numeric">
                <span class="field__error" aria-live="polite"></span>
              </label>
              <label class="field">
                <span>Largura (mm)</span>
                <input type="number" id="calc-largura" min="1" placeholder="Ex: 500" inputmode="numeric">
                <span class="field__error" aria-live="polite"></span>
              </label>
              <label class="field field--full">
                <span>Aplicação</span>
                <select id="calc-aplicacao">
                  <option value="">Selecione a aplicação</option>
                  <option value="leve">Transporte leve</option>
                  <option value="alimenticio">Linha alimentícia</option>
                  <option value="producao">Linha de produção</option>
                  <option value="inclinado">Inclinado, superfície rugosa</option>
                </select>
                <span class="field__error" aria-live="polite"></span>
              </label>
              <div class="field field--full">
                <button class="btn btn--primary" type="submit">Calcular referência <svg class="icon" aria-hidden="true"><use href="#i-calculator"/></svg></button>
              </div>
            </div>
          </form>

          <div class="calc__result" id="calc-result" hidden>
            <span class="meta">Referência recomendada</span>
            <strong class="calc__ref" id="calc-ref"></strong>
            <dl class="calc__rows">
              <div class="calc__row"><dt>Aplicação</dt><dd id="calc-aplicacao-out"></dd></div>
              <div class="calc__row"><dt>Área</dt><dd id="calc-area"></dd></div>
              <div class="calc__row"><dt>Metros lineares</dt><dd id="calc-metros"></dd></div>
            </dl>
            <p class="support" data-pendencia="⚑7 · o CÓDIGO de referência é um exemplo. Área e metros lineares são cálculo real. A tabela verdadeira vem do cliente">Confirme a especificação com o comercial antes de fechar o pedido.</p>
            <a class="btn btn--primary" href="contato.html">Pedir orçamento dessa referência <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"/></svg></a>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================ DETALHAMENTO TÉCNICO -->
    <section class="section">
      <div class="container">
        <div class="about reveal">
          <div class="about__media">
            <img src="assets/images/produto-correia-v.webp" width="1600" height="1194" loading="lazy" alt="Seção transversal de uma correia em V, mostrando os cordonéis de poliéster sob a capa de lona">
          </div>
          <div>
            <span class="eyebrow">Autoridade técnica</span>
            <h2>Detalhamento técnico: correias transportadoras</h2>
            <p class="lead">Carcaça em poliéster e nylon, atendendo às normas técnicas nacionais e internacionais. Resistência a impacto, abrasão e queda de material, com coberturas anti-óleo e antichama.</p>
          </div>
        </div>

        <div class="table-wrap reveal" style="margin-top:var(--space-6)" data-pendencia="⚑12 · tabelas herdadas do site atual. Validar se ainda batem">
          <table>
            <caption>Referências KT - tensão de trabalho e diâmetro mínimo de rolete</caption>
            <thead>
              <tr><th scope="col">Referência</th><th scope="col">Tensão (kgf/cm)</th><th scope="col">Diâm. mín. rolete (mm)</th><th scope="col">(pol)</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">KT 140/2L x 1/16 x 1/16</th><td>25</td><td>165</td><td>6.5</td></tr>
              <tr><th scope="row">KT 140/3L x 1/8 x 1/16</th><td>37,5</td><td>250</td><td>10</td></tr>
              <tr><th scope="row">KT 220/3L x 3/16 x 1/16</th><td>66</td><td>350</td><td>14</td></tr>
              <tr><th scope="row">KT 220/3L x 3/8 x 1/8</th><td>66</td><td>350</td><td>14</td></tr>
            </tbody>
          </table>
        </div>
        <p class="support reveal">Não achou a referência? A Kauthec importa fora de linha sob demanda. <a class="product__cta" href="contato.html">Falar no WhatsApp <svg class="icon" aria-hidden="true"><use href="#i-whatsapp"/></svg></a></p>

        <h3 class="reveal" style="margin-top:var(--space-6)">Tipos de cobertura</h3>
        <div class="table-wrap reveal" style="margin-top:var(--space-3)">
          <table>
            <thead>
              <tr><th scope="col">Código</th><th scope="col">Nome</th><th scope="col" class="wrap">Aplicação</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">AA</th><td>Alta Abrasão</td><td class="wrap">Areia, cal, cimento, calcário, soja, milho, trigo. Tipo RMA 2.</td></tr>
              <tr><th scope="row">EA</th><td>Extra Abrasão</td><td class="wrap">Brita, minério de ferro, granito, coque, escória. Tipo RMA 1.</td></tr>
              <tr><th scope="row">ACAOE</th><td>Antichama, Antiestática e Óleo</td><td class="wrap">Silos, armazéns e corredores portuários. Até 90 ºC.</td></tr>
              <tr><th scope="row">CW</th><td>Corrugada W</td><td class="wrap">Mercadoria leve em inclinação de até 35 graus.</td></tr>
              <tr><th scope="row">TT</th><td>Taliscada Trator</td><td class="wrap">Granel em superfície inclinada.</td></tr>
              <tr><th scope="row">TV</th><td>Taliscada em V</td><td class="wrap">Granel em superfície inclinada.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ============================================ CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-band reveal">
          <div>
            <span class="eyebrow">Parceria</span>
            <h2>Essas linhas rendem bem na sua prateleira.</h2>
            <p class="lead">Cinco linhas em estoque, laudo técnico e prazo de entrega. É o que o seu cliente cobra de você.</p>
            <div class="cta-band__actions">
              <a class="btn btn--primary" href="seja-parceiro.html">Quero revender essas linhas <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"/></svg></a>
              <a class="btn btn--secondary" href="contato.html">Pedir orçamento</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
"""

# ============================================================ SEJA PARCEIRO
PARCEIRO_MAIN = """
  <main id="main">
    <section class="section">
      <div class="container">
        <span class="eyebrow">Programa de parceria</span>
        <h1 class="js-words">Seja parceiro de uma importadora que <span class="hl">joga junto</span> com você.</h1>
        <p class="lead">Prazo de entrega em que o seu cliente confia, estoque em linha, laudo técnico e suporte para você fechar mais vendas. Você cuida do cliente. A Kauthec cuida da retaguarda.</p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="#formulario">Quero receber a proposta <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"/></svg></a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Benefícios</span>
          <h2>O que o parceiro Kauthec ganha</h2>
        </div>

        <div class="grid-hairline cols-3 reveal">
          <article class="pillar">
            <svg class="icon icon--lg" aria-hidden="true"><use href="#i-delivery"/></svg>
            <h3>Prazo como argumento de venda</h3>
            <p>Prometa prazo ao seu cliente e cumpra. Na indústria e no agro, é isso que fideliza.</p>
          </article>
          <article class="pillar">
            <svg class="icon icon--lg" aria-hidden="true"><use href="#i-stock"/></svg>
            <h3>Abastecimento garantido</h3>
            <p>Cinco linhas em estoque nas duas unidades. Você não fica na mão no meio da safra.</p>
          </article>
          <article class="pillar">
            <svg class="icon icon--lg" aria-hidden="true"><use href="#i-certificate"/></svg>
            <h3>Respaldo técnico</h3>
            <p data-pendencia="⚑8 · norma ou certificação?">NBR, DIN, ISO, ASTM e RMA, com laudo disponível. Você revende importado com o papel na mão.</p>
          </article>
          <article class="pillar">
            <svg class="icon icon--lg" aria-hidden="true"><use href="#i-support"/></svg>
            <h3>Suporte para vender</h3>
            <p data-pendencia="⚑9 · pode prometer a central de marketing?">Material técnico e especificação pronta para apresentar. Central de marketing para parceiros em breve.</p>
          </article>
          <article class="pillar">
            <svg class="icon icon--lg" aria-hidden="true"><use href="#i-partnership"/></svg>
            <h3>Canal protegido</h3>
            <p data-pendencia="⚑4 · o benefício que a Multibelt não oferece. Confirmar antes de publicar">A Kauthec não vende para o cliente do parceiro. Quem conquistou a conta é dono dela.</p>
          </article>
          <article class="pillar product--utility">
            <h3>Prefere falar antes?</h3>
            <p>Chame a unidade mais perto de você.</p>
            <a class="btn btn--secondary" href="contato.html">Falar no WhatsApp <svg class="icon" aria-hidden="true"><use href="#i-whatsapp"/></svg></a>
          </article>
        </div>
      </div>
    </section>

    <!-- ============================================ FORMULÁRIO -->
    <section class="section" id="formulario">
      <div class="container">
        <div class="section-head section-head--split reveal">
          <div>
            <span class="eyebrow">Formulário</span>
            <h2>Quero receber a proposta de parceria</h2>
          </div>
          <p>Para fechar a parceria pediremos CNPJ ativo e cópia do contrato social. Envie agora e adiante o processo.</p>
        </div>

        <form class="form form--two reveal" data-validate data-success="parceiro-sucesso" novalidate>
          <label class="field">
            <span>Nome</span>
            <input type="text" name="nome" placeholder="Nome e sobrenome" autocomplete="name" required>
            <span class="field__error" aria-live="polite"></span>
          </label>
          <label class="field">
            <span>Empresa</span>
            <input type="text" name="empresa" placeholder="Razão social ou nome fantasia" autocomplete="organization" required>
            <span class="field__error" aria-live="polite"></span>
          </label>
          <label class="field">
            <span>CNPJ</span>
            <input type="text" name="cnpj" data-mask="cnpj" placeholder="00.000.000/0000-00" inputmode="numeric" required>
            <span class="field__error" aria-live="polite"></span>
          </label>
          <label class="field">
            <span>Cidade / UF</span>
            <input type="text" name="cidade" placeholder="Ibiporã / PR" required>
            <span class="field__error" aria-live="polite"></span>
          </label>
          <label class="field">
            <span>WhatsApp</span>
            <input type="tel" name="whatsapp" data-mask="phone" placeholder="(43) 9 9999-9999" inputmode="tel" required>
            <span class="field__error" aria-live="polite"></span>
          </label>
          <label class="field">
            <span>E-mail</span>
            <input type="email" name="email" placeholder="voce@suaempresa.com.br" autocomplete="email" required>
            <span class="field__error" aria-live="polite"></span>
          </label>
          <label class="field field--full">
            <span>Que linhas pretende revender?</span>
            <input type="text" name="linhas" placeholder="Correia em V, PVC, transportadora...">
          </label>

          <div class="field field--full">
            <span>Cópia do contrato social</span>
            <label class="upload">
              <input type="file" accept=".pdf,.jpg,.jpeg,.png" aria-describedby="upload-hint">
              <svg class="icon icon--lg" aria-hidden="true"><use href="#i-upload"/></svg>
              <span class="upload__empty">Arraste o arquivo aqui ou clique para escolher</span>
              <span class="upload__file" hidden>
                <span class="upload__name"></span>
                <button type="button" class="upload__remove">Remover</button>
              </span>
            </label>
            <span class="field__hint" id="upload-hint" data-pendencia="⚑13 · confirmar limite e formatos com quem recebe">PDF, JPG ou PNG. Até 10 MB.</span>
            <span class="field__error" aria-live="polite"></span>
            <span class="field__hint" data-pendencia="⚑14 · existe política de privacidade para linkar? LGPD">Usamos o documento apenas para montar a sua proposta de parceria. Pode enviar depois: o comercial pede pelo WhatsApp.</span>
          </div>

          <div class="field field--full">
            <button class="btn btn--primary" type="submit">Enviar e falar com o comercial <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"/></svg></button>
          </div>
        </form>

        <div class="form__success reveal" id="parceiro-sucesso" tabindex="-1" hidden>
          <h3>Recebemos seus dados.</h3>
          <p data-pendencia="⚑15 · prometer prazo de retorno só se for verdade">O comercial da Kauthec entra em contato pelo WhatsApp que você informou, com a proposta de parceria.</p>
          <a class="btn btn--secondary" href="contato.html">Prefere adiantar? Falar no WhatsApp agora <svg class="icon" aria-hidden="true"><use href="#i-whatsapp"/></svg></a>
        </div>
      </div>
    </section>
  </main>
"""

# ============================================================ CONTATO
CONTATO_MAIN = """
  <main id="main">
    <section class="section">
      <div class="container">
        <span class="eyebrow">Contato</span>
        <h1>Duas unidades, atendimento em <span class="hl">todo o Brasil</span>.</h1>
        <p class="lead">Matriz em Ibiporã-PR e filial em Várzea Grande-MT. Fale direto com a unidade mais perto de você. Se for sobre parceria, o caminho mais rápido é o formulário.</p>
        <div class="hero__actions">
          <a class="btn btn--secondary" href="seja-parceiro.html">Quero ser parceiro <svg class="icon" aria-hidden="true"><use href="#i-arrow-right"/></svg></a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid-hairline cols-2 reveal">
          <article class="unit">
            <span class="eyebrow">Matriz</span>
            <h2>Ibiporã / PR</h2>
            <address>
              <span>Rua Luiz Carlos Zani, 4199 - Parque Industrial V</span>
              <span>Ibiporã / PR</span>
              <a href="tel:+554333736600">Telefone: 43 3373-6600</a>
              <a href="mailto:comercial@kauthecdobrasil.com">comercial@kauthecdobrasil.com</a>
            </address>
            <a class="btn btn--primary" href="https://wa.me/5543988158640?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kauthec%20e%20quero%20falar%20sobre%20a%20parceria." target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp da matriz em Ibiporã, Paraná">
              WhatsApp da matriz <svg class="icon" aria-hidden="true"><use href="#i-whatsapp"/></svg>
            </a>
          </article>

          <article class="unit">
            <span class="eyebrow">Filial</span>
            <h2>Várzea Grande / MT</h2>
            <address>
              <span>Rua Brigadeiro Eduardo Gomes, 998 - Centro Sul</span>
              <span>Várzea Grande / MT</span>
              <a href="tel:+556536273737">Telefone: 65 3627-3737</a>
              <a href="mailto:kauthecmt@kauthecdobrasil.com">kauthecmt@kauthecdobrasil.com</a>
            </address>
            <a class="btn btn--primary" href="https://wa.me/5565996047226?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kauthec%20e%20quero%20falar%20sobre%20a%20parceria." target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp da filial em Várzea Grande, Mato Grosso">
              WhatsApp da filial <svg class="icon" aria-hidden="true"><use href="#i-whatsapp"/></svg>
            </a>
          </article>
        </div>

        <p class="support reveal" data-pendencia="⚑1 · horário de atendimento das duas unidades">Atendimento comercial em horário comercial, de segunda a sexta.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head section-head--split reveal">
          <div>
            <span class="eyebrow">Cobertura</span>
            <h2>Onde estamos</h2>
          </div>
          <p>Matriz em Ibiporã-PR, no eixo industrial de Londrina. Filial em Várzea Grande-MT, no corredor do agro do Centro-Oeste.</p>
        </div>

        <div class="grid-hairline cols-2 reveal">
          <div class="unit">
            <svg class="icon icon--lg" aria-hidden="true"><use href="#i-map-pin"/></svg>
            <h3>Eixo Sul</h3>
            <p>Despacho de Ibiporã-PR para Paraná, Santa Catarina, Rio Grande do Sul e São Paulo.</p>
          </div>
          <div class="unit">
            <svg class="icon icon--lg" aria-hidden="true"><use href="#i-map-pin"/></svg>
            <h3>Eixo Centro-Oeste</h3>
            <p>Despacho de Várzea Grande-MT para Mato Grosso, Mato Grosso do Sul, Goiás e Rondônia.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
"""

PAGES = [
    ("produtos.html", "Correias em V, PVC, PU e Transportadoras | Kauthec",
     "Correia em V, transportadora, PVC e PU, laminada, elevadora e lençol de borracha. Referências KT, tipos de cobertura e calculadora de PVC e PU.",
     "produtos.html", PRODUTOS_MAIN, "assets/images/produto-correia-v.webp"),
    ("seja-parceiro.html", "Seja Parceiro Kauthec | Revenda Correias Industriais",
     "Revenda correia industrial e agrícola com estoque em linha, laudo técnico e prazo de entrega. Envie CNPJ e contrato social e receba a proposta de parceria.",
     "seja-parceiro.html", PARCEIRO_MAIN, "assets/images/hero-expedicao.webp"),
    ("contato.html", "Contato | Kauthec do Brasil - Correias PR e MT",
     "Fale com a Kauthec. Matriz em Ibiporã-PR e filial em Várzea Grande-MT. Telefone, e-mail e WhatsApp de cada unidade. Atendimento em todo o Brasil.",
     "contato.html", CONTATO_MAIN, "assets/images/photo-kauthec-fachada.webp"),
]

for filename, title, desc, canonical, main, og in PAGES:
    html = head(title, desc, canonical, og) + nav_current(HEADER, filename) + main + tail()
    pathlib.Path(filename).write_text(html, encoding="utf-8")
    print(f"{filename:22} {len(html):7} bytes")
