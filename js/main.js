/*
  main.js - Kauthec do Brasil
  Vanilla. Sem framework, sem biblioteca de animacao.

  1. Modo pendencias (?pendencias=1)
  2. Menu mobile
  3. Scroll reveal por bloco
  4. Animacao de palavra no H1 (hero e CTA final)
  5. Contadores da secao Numeros
  6. WhatsApp flutuante com seletor de unidade
  6b. Toggle hero A/B (só index)
  6c. Linha de produtos A/B + carrossel (só index)
  7. Calculadora PVC/PU
  8. Validacao do formulario Seja Parceiro
*/

(() => {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ---------------------------------------------------------------- 1. pendencias
     Abra qualquer pagina com ?pendencias=1 para acender tudo que ainda
     depende de resposta do cliente. Some em producao. */
  const pendenciasOn = new URLSearchParams(location.search).has("pendencias");
  if (pendenciasOn) {
    document.documentElement.classList.add("pendencias");
    const marcados = $$("[data-pendencia]");
    const bar = $(".pendencias-bar");
    if (bar) bar.textContent = `Modo revisão: ${marcados.length} ponto(s) aguardando resposta do cliente nesta página. Remova ?pendencias=1 para ver o site.`;
    console.groupCollapsed(`Kauthec · ${marcados.length} pendências nesta página`);
    marcados.forEach((el) => console.log(el.dataset.pendencia, el));
    console.groupEnd();
  }

  /* ---------------------------------------------------------------- 2. menu mobile */
  const burger = $(".header__burger");
  const mobileNav = $(".mobile-nav");
  burger?.addEventListener("click", () => {
    const open = mobileNav.dataset.open === "true";
    mobileNav.dataset.open = String(!open);
    burger.setAttribute("aria-expanded", String(!open));
  });

  /* ---------------------------------------------------------------- 3. scroll reveal
     Por bloco, nao por elemento. Dispara uma vez. */
  const reveals = $$(".reveal");
  if (reveals.length && !reduced) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-in"));
  }

  /* ---------------------------------------------------------------- 4. palavra por palavra
     So no H1 do hero e no H2 do CTA final. Os dois momentos de pico.
     O texto so fica escondido depois que o JS assume. Sem JS, ele aparece. */
  $$(".js-words").forEach((el) => {
    if (reduced) return;
    // 45ms, nao os 90ms do --stagger: o H1 tem ~8 palavras e o hero e
    // momento de pico. 90ms deixaria o titulo 1,2s montando.
    const stagger = 45;
    const walk = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((chunk) => {
            if (!chunk.trim()) { frag.appendChild(document.createTextNode(chunk)); return; }
            const span = document.createElement("span");
            span.className = "word";
            span.textContent = chunk;
            frag.appendChild(span);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          walk(child);
        }
      });
    };
    walk(el);
    el.dataset.anim = "pending";
    $$(".word", el).forEach((w, i) => { w.style.animationDelay = `${i * stagger}ms`; });

    // Acima da dobra dispara no load. Abaixo, espera o scroll.
    const acimaDaDobra = el.getBoundingClientRect().top < window.innerHeight;
    if (acimaDaDobra) {
      requestAnimationFrame(() => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }),
      { threshold: 0.3 }
    );
    io.observe(el);
  });

  /* ---------------------------------------------------------------- 5. contadores
     Sobem uma vez. Nunca duas. */
  $$("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const fmt = new Intl.NumberFormat("pt-BR");
    const prefix = el.dataset.countPrefix || "";
    // Com reduced-motion o numero aparece formatado, nao cru.
    if (!Number.isFinite(target) || reduced) { el.textContent = prefix + fmt.format(target); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const dur = 900;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + fmt.format(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }),
      { threshold: 0.5 }
    );
    io.observe(el);
  });

  /* ---------------------------------------------------------------- 6. whatsapp flutuante
     Dois numeros. O botao nunca chuta qual. Ele pergunta. */
  const wa = $(".wa");
  if (wa) {
    const toggle = $(".wa__toggle", wa);
    const close = () => { wa.dataset.open = "false"; toggle.setAttribute("aria-expanded", "false"); };
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = wa.dataset.open === "true";
      wa.dataset.open = String(!open);
      toggle.setAttribute("aria-expanded", String(!open));
    });
    document.addEventListener("click", (e) => { if (!wa.contains(e.target)) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ---------------------------------------------------------------- 6c. carrossel da linha de produtos */
  const productsSection = $(".products-section");
  if (productsSection) {
    const viewport = $("[data-carousel-viewport]", productsSection);
    const track = $("[data-carousel-track]", productsSection);
    const prev = $("[data-carousel-prev]", productsSection);
    const next = $("[data-carousel-next]", productsSection);
    const cta = $("[data-carousel-cta]", productsSection);
    const slides = $$("[data-carousel-slide]", productsSection);
    let index = 0;
    let layoutCarousel = null;

    const perView = () => {
      if (window.matchMedia("(min-width: 62rem)").matches) return 3;
      if (window.matchMedia("(min-width: 40rem)").matches) return 2;
      return 1;
    };

    const maxIndex = () => Math.max(0, slides.length - perView());

    const ctaIcon = '<svg class="icon" aria-hidden="true"><use href="#i-arrow-right"/></svg>';

    const syncCta = (slide) => {
      if (!cta || !slide) return;
      cta.href = slide.dataset.ctaHref || "produtos.html";
      cta.innerHTML = `${slide.dataset.ctaLabel || "Ver especificações"} ${ctaIcon}`;
    };

    if (viewport && track && slides.length) {
      layoutCarousel = () => {
        const count = perView();
        const gap = Number.parseFloat(getComputedStyle(track).gap) || 1;
        const slideW = (viewport.clientWidth - gap * (count - 1)) / count;
        viewport.style.setProperty("--carousel-slide-w", `${slideW}px`);
        index = Math.min(index, maxIndex());
        track.style.transform = `translateX(-${index * (slideW + gap)}px)`;
        if (prev) prev.disabled = index === 0;
        if (next) next.disabled = index >= maxIndex();
        syncCta(slides[index]);
      };

      prev?.addEventListener("click", () => { index = Math.max(0, index - 1); layoutCarousel(); });
      next?.addEventListener("click", () => { index = Math.min(maxIndex(), index + 1); layoutCarousel(); });

      viewport.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") { prev?.click(); e.preventDefault(); }
        if (e.key === "ArrowRight") { next?.click(); e.preventDefault(); }
      });

      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(layoutCarousel, 120);
      });
    }

    layoutCarousel?.();
  }

  /* ---------------------------------------------------------------- 6d. explorador de linhas (produtos)
     Master-detail: cada aba (linha de produto) mostra seu painel de detalhe.
     Deep-link: #calculadora abre a linha PVC e rola ate a calculadora. */
  const explorer = $(".explorer");
  if (explorer) {
    const tabs = $$(".explorer__tab", explorer);
    const panels = $$(".explorer__panel", explorer);

    const activate = (id, moveFocus) => {
      if (!panels.some((p) => p.id === id)) return;
      tabs.forEach((t) => {
        const on = t.getAttribute("aria-controls") === id;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        if (on && moveFocus) t.focus();
      });
      panels.forEach((p) => { p.hidden = p.id !== id; });
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => activate(tab.getAttribute("aria-controls")));
      tab.addEventListener("keydown", (e) => {
        let next = null;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % tabs.length;
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
        if (e.key === "Home") next = 0;
        if (e.key === "End") next = tabs.length - 1;
        if (next === null) return;
        e.preventDefault();
        activate(tabs[next].getAttribute("aria-controls"), true);
      });
    });

    const openFromHash = () => {
      const h = location.hash.replace("#", "");
      if (!h) return;
      if (h === "calculadora") {
        activate("linha-pvc");
        const calc = document.getElementById("calculadora");
        if (calc) calc.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
        return;
      }
      if (panels.some((p) => p.id === h)) activate(h);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
  }

  /* ---------------------------------------------------------------- 7. calculadora PVC/PU
     ⚑7 A FORMULA E A TABELA ABAIXO SAO EXEMPLO.
     O calculo de area e de metros lineares e aritmetica real.
     O codigo de referencia (PVC-2P-...) e inventado para o layout
     funcionar. Substituir pela tabela do cliente antes de publicar.
  */
  const calcForm = $("#calc-form");
  if (calcForm) {
    const out = $("#calc-result");
    const APLICACOES = {
      leve:       { sigla: "2P", desc: "Transporte leve" },
      alimenticio:{ sigla: "3A", desc: "Linha alimentícia" },
      producao:   { sigla: "3P", desc: "Linha de produção" },
      inclinado:  { sigla: "4R", desc: "Inclinado, superfície rugosa" },
    };

    const erro = (field, msg) => {
      const wrap = field.closest(".field");
      wrap.dataset.invalid = msg ? "true" : "false";
      field.setAttribute("aria-invalid", msg ? "true" : "false");
      $(".field__error", wrap).textContent = msg || "";
      return !msg;
    };

    calcForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const comp = $("#calc-comprimento");
      const larg = $("#calc-largura");
      const apl = $("#calc-aplicacao");

      let ok = true;
      ok = erro(comp, comp.value && Number(comp.value) > 0 ? "" : "Informe o comprimento em milímetros.") && ok;
      ok = erro(larg, larg.value && Number(larg.value) > 0 ? "" : "Informe a largura em milímetros.") && ok;
      ok = erro(apl, apl.value ? "" : "Escolha a aplicação.") && ok;
      if (!ok) return;

      const C = Number(comp.value);
      const L = Number(larg.value);
      const cfg = APLICACOES[apl.value];

      // Aritmetica real, nao depende do cliente.
      const areaM2 = (C * L) / 1e6;
      const metrosLineares = C / 1000;

      // Codigo de referencia: EXEMPLO. ⚑7
      const ref = `PVC-${cfg.sigla}-${L}x${C}`;

      const nf = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 2 });
      out.hidden = false;
      $("#calc-ref").textContent = ref;
      $("#calc-aplicacao-out").textContent = cfg.desc;
      $("#calc-area").textContent = `${nf.format(areaM2)} m²`;
      $("#calc-metros").textContent = `${nf.format(metrosLineares)} m`;
      out.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
    });
  }

  /* ---------------------------------------------------------------- 7b. calculadora de comprimento
     Correia sem fim sobre duas polias/roletes:

       L = 2C + (PI/2)(D + d) + (D - d)^2 / (4C)

     Com D = d o ultimo termo zera sozinho e sobra L = 2C + PI*D.
     Espessura entra somando t ao diametro de cada polia, porque o comprimento
     e medido na linha neutra da correia, nao na superficie da polia.

     Aritmetica real, nao depende de tabela do cliente.
  */
  const beltForm = $("#belt-form");
  if (beltForm) {
    const beltOut = $("#belt-result");
    const nfBelt = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 });
    const nfBelt2 = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const beltErro = (field, msg) => {
      const wrap = field.closest(".field");
      wrap.dataset.invalid = msg ? "true" : "false";
      field.setAttribute("aria-invalid", msg ? "true" : "false");
      $(".field__error", wrap).textContent = msg || "";
      return !msg;
    };

    const num = (el) => (el.value.trim() === "" ? NaN : Number(el.value));

    beltForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const elD = $("#belt-d");
      const elDm = $("#belt-dm");
      const elC = $("#belt-c");
      const elT = $("#belt-t");

      const rawD = num(elD);
      const rawDm = num(elDm);
      const rawC = num(elC);
      const rawT = elT.value.trim() === "" ? 0 : Number(elT.value);

      let ok = true;
      ok = beltErro(elD, Number.isFinite(rawD) && rawD > 0 ? "" : "Informe o diâmetro da polia maior.") && ok;
      ok = beltErro(elDm, Number.isFinite(rawDm) && rawDm > 0 ? "" : "Informe o diâmetro da polia menor.") && ok;
      ok = beltErro(elC, Number.isFinite(rawC) && rawC > 0 ? "" : "Informe a distância entre centros.") && ok;
      ok = beltErro(elT, Number.isFinite(rawT) && rawT >= 0 ? "" : "Espessura inválida. Deixe em branco se não souber.") && ok;
      if (!ok) return;

      if (rawD < rawDm) {
        beltErro(elD, "O diâmetro maior tem que ser maior ou igual ao menor.");
        return;
      }

      const D = rawD + rawT;
      const d = rawDm + rawT;

      // Geometria impossivel: as polias se sobrepoem.
      if (rawC <= (rawD + rawDm) / 2) {
        beltErro(elC, `Com esses diâmetros, a distância entre centros precisa passar de ${nfBelt.format((rawD + rawDm) / 2)} mm.`);
        return;
      }

      const C = rawC;
      const L = 2 * C + (Math.PI / 2) * (D + d) + Math.pow(D - d, 2) / (4 * C);
      const iguais = D === d;

      beltOut.hidden = false;
      $("#belt-out-mm").textContent = `${nfBelt.format(Math.round(L))} mm`;
      $("#belt-out-m").textContent = `${nfBelt2.format(L / 1000)} m`;
      $("#belt-out-diam").textContent = rawT > 0
        ? `D ${nfBelt.format(D)} mm · d ${nfBelt.format(d)} mm (com ${nfBelt.format(rawT)} mm de espessura)`
        : `D ${nfBelt.format(D)} mm · d ${nfBelt.format(d)} mm`;
      $("#belt-out-mode").textContent = iguais
        ? "Polias iguais: a fórmula simplifica para L = 2C + πD"
        : "Polias diferentes: fórmula completa, com a compensação de inclinação";
      beltOut.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
    });
  }

  /* ---------------------------------------------------------------- 8. formularios */
  const digits = (s) => s.replace(/\D/g, "");

  const maskCNPJ = (v) => digits(v).slice(0, 14)
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");

  const maskPhone = (v) => {
    const d = digits(v).slice(0, 11);
    if (d.length <= 10) return d.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
    return d.replace(/^(\d{2})(\d)/, "($1) $2").replace(/^(\(\d{2}\) \d)(\d)/, "$1 $2").replace(/(\d{4})(\d)/, "$1-$2");
  };

  /* Valida os 14 digitos de verdade, nao so o formato.
     CNPJ com mascara certa e digito errado passa e vira lead sujo. */
  const cnpjValido = (raw) => {
    const c = digits(raw);
    if (c.length !== 14 || /^(\d)\1{13}$/.test(c)) return false;
    const calc = (base) => {
      let peso = base.length - 7;
      let soma = 0;
      for (let i = 0; i < base.length; i++) {
        soma += Number(base[i]) * peso--;
        if (peso < 2) peso = 9;
      }
      const r = soma % 11;
      return r < 2 ? 0 : 11 - r;
    };
    return calc(c.slice(0, 12)) === Number(c[12]) && calc(c.slice(0, 13)) === Number(c[13]);
  };

  const emailValido = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

  $$('input[data-mask="cnpj"]').forEach((i) => i.addEventListener("input", () => { i.value = maskCNPJ(i.value); }));
  $$('input[data-mask="phone"]').forEach((i) => i.addEventListener("input", () => { i.value = maskPhone(i.value); }));

  const REGRAS = {
    nome:     (v) => (v.trim() ? "" : "Preencha seu nome."),
    empresa:  (v) => (v.trim() ? "" : "Informe o nome da empresa."),
    cnpj:     (v) => (!digits(v) ? "Informe o CNPJ da empresa." : cnpjValido(v) ? "" : "CNPJ inválido. Confira os 14 dígitos."),
    cidade:   (v) => (v.trim() ? "" : "Informe a cidade e o estado."),
    whatsapp: (v) => (!digits(v) ? "Informe um WhatsApp com DDD." : digits(v).length >= 10 ? "" : "Número incompleto. Confira o DDD e os 9 dígitos."),
    email:    (v) => (!v.trim() ? "Informe um e-mail para contato." : emailValido(v) ? "" : "E-mail inválido. Confira o endereço."),
  };

  const setErro = (input, msg) => {
    const wrap = input.closest(".field");
    if (!wrap) return !msg;
    wrap.dataset.invalid = msg ? "true" : "false";
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    const slot = $(".field__error", wrap);
    if (slot) slot.textContent = msg || "";
    return !msg;
  };

  $$("form[data-validate]").forEach((form) => {
    const submit = $('button[type="submit"]', form);
    const labelPadrao = submit?.textContent;

    $$("input[name], select[name]", form).forEach((input) => {
      const regra = REGRAS[input.name];
      if (!regra) return;
      input.addEventListener("blur", () => setErro(input, regra(input.value)));
      input.addEventListener("input", () => { if (input.closest(".field")?.dataset.invalid === "true") setErro(input, regra(input.value)); });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = true;
      $$("input[name], select[name]", form).forEach((input) => {
        const regra = REGRAS[input.name];
        if (regra) ok = setErro(input, regra(input.value)) && ok;
      });
      if (!ok) { $('[data-invalid="true"] input, [data-invalid="true"] select', form)?.focus(); return; }

      // Sem backend definido. O envio real entra no Passo E. ⚑
      submit.disabled = true;
      submit.textContent = "Enviando...";
      window.setTimeout(() => {
        const sucesso = $(`#${form.dataset.success}`);
        if (sucesso) {
          form.hidden = true;
          sucesso.hidden = false;
          sucesso.focus();
        } else {
          submit.textContent = "Enviado";
        }
      }, 700);
    });
  });

  /* upload do contrato social */
  const upload = $(".upload");
  if (upload) {
    const input = $('input[type="file"]', upload);
    const empty = $(".upload__empty", upload);
    const filled = $(".upload__file", upload);
    const nome = $(".upload__name", upload);
    const erroSlot = $(".field__error", upload.closest(".field"));
    const LIMITE = 10 * 1024 * 1024; // ⚑13 confirmar com quem recebe o e-mail
    const ACEITOS = ["application/pdf", "image/jpeg", "image/png"];

    const mostrar = (file) => {
      if (!ACEITOS.includes(file.type)) { erroSlot.textContent = "Formato não aceito. Envie PDF, JPG ou PNG."; input.value = ""; return; }
      if (file.size > LIMITE) { erroSlot.textContent = "Arquivo acima de 10 MB. Comprima ou envie em PDF."; input.value = ""; return; }
      erroSlot.textContent = "";
      const mb = (file.size / 1048576).toFixed(1).replace(".", ",");
      nome.textContent = `${file.name} · ${mb} MB`;
      empty.hidden = true;
      filled.hidden = false;
    };

    input.addEventListener("change", () => { if (input.files[0]) mostrar(input.files[0]); });
    $(".upload__remove", upload).addEventListener("click", (e) => {
      e.preventDefault(); e.stopPropagation();
      input.value = "";
      empty.hidden = false;
      filled.hidden = true;
      erroSlot.textContent = "";
    });

    ["dragenter", "dragover"].forEach((ev) => upload.addEventListener(ev, (e) => { e.preventDefault(); upload.dataset.drag = "true"; }));
    ["dragleave", "drop"].forEach((ev) => upload.addEventListener(ev, (e) => { e.preventDefault(); upload.dataset.drag = "false"; }));
    upload.addEventListener("drop", (e) => {
      const file = e.dataTransfer?.files?.[0];
      if (!file) return;
      input.files = e.dataTransfer.files;
      mostrar(file);
    });
  }
})();
