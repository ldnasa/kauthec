# my_brand_assets/ - Ativos de marca da Kauthec

Fonte da verdade da marca. O build copia daqui para `assets/` já otimizado.

## Arquivos

| Arquivo | Peso | Uso |
|---|---|---|
| `logo-kauthec.svg` | 39,6 KB | **Original do cliente.** Não usar no site. Preservado como fonte |
| `logo-kauthec-lockup.svg` | 25,1 KB | Emblema + wordmark. Header, footer, OG image |
| `logo-kauthec-wordmark.svg` | 1,7 KB | Só a palavra KAUTHEC. Header compacto, mobile |
| `logo-kauthec-emblem.svg` | 23,4 KB | Só o medalhão. Favicon, avatar, selo |

## Cor de marca

- Ouro/âmbar: `#faa21b`
- Preto: `#070707`

Não existe manual de marca. O cliente só tem o logo. A paleta completa é derivada no
`design_system/tokens.css`.

---

## Como recolorir

Os três arquivos derivados são recoloríveis por CSS. **Inline o SVG no HTML** (variável
CSS não atravessa `<img src>`).

### Lockup e emblema

Três variáveis, uma por família de cor:

```css
--logo-ink    /* o disco preto do medalhão */
--logo-light  /* o anel e as hastes brancas do K */
--logo-gold   /* as hastes douradas do K */
--logo-word   /* a palavra KAUTHEC. Default: currentColor */
```

| Contexto | Regra |
|---|---|
| Header escuro (padrão) | Nada. Só `color: #fff` para o wordmark |
| Tema claro | `color: #1b1b1b` |
| Monocromático branco | `--logo-ink: transparent; --logo-light: #fff; --logo-gold: #fff` |
| Monocromático ouro | `--logo-ink: transparent; --logo-light/gold: #faa21b` |
| Preto sobre o ouro da marca | `--logo-ink: transparent; --logo-light/gold: #070707` |

**A pegadinha:** em monocromático, `--logo-ink` tem que ser `transparent`. Se você pintar
o disco da mesma cor do K, o K some dentro dele. O disco é uma forma sólida por baixo,
não um contorno.

### Wordmark isolado

Usa `fill="currentColor"`. Herda a cor do texto:

```html
<span style="color: var(--color-text)">
  <svg><!-- conteúdo de logo-kauthec-wordmark.svg --></svg>
</span>
```

---

## O que foi feito no original, e por quê

O `logo-kauthec.svg` do cliente tem **177 paths**. A análise separou dois mundos:

```
wordmark (KAUTHEC)     8 paths, área mediana 406.492   ← vetor nativo, limpo
emblema (o medalhão) 169 paths, área mediana   2.000   ← vetor traçado de bitmap
```

O wordmark sempre foi vetor limpo: 8 letras, coordenadas inteiras, um preenchimento cada.
Só o medalhão é traçado, com ~169 paths quase idênticos simulando o antialias do PNG
original (`#0C0A06`, `#0D0C0A`, `#0F0E0C`...).

**A recuperação:** os 169 paths do emblema caem em três famílias de cor (tinta, branco,
ouro). Como cada família vira uma cor só, os paths de cada família foram concatenados
num único `d`. Resultado: 3 paths em vez de 169, 23,4 KB em vez de 43,9 KB, pixel-idêntico
ao original, e recolorível.

Tentamos também descartar os paths pequenos como artefato. **Não dá:** abaixo de ~3.000
de área o K perde a haste vertical. Os slivers não são ruído, são estrutura.

## Ainda vale pedir ao Bruno

O `.ai` ou `.eps` original. O que temos funciona e escala, mas o emblema continua sendo
uma reconstrução: as bordas têm o serrilhado do traçado, visível acima de ~400px. Para
impressão grande ou fachada, não serve.

Para web, nos tamanhos que o site usa (header 40px, footer 32px, favicon 64px, OG 200px),
o serrilhado é invisível. Verificado em render.
