---
spec: spec-card
layer: 3
tokens: [--color-surface, --color-border, --color-accent, --color-on-accent, --color-text-tertiary, --space-2, --space-3, --space-4, --font-mono, --text-2xs, --tracking-meta, --radius-none]
status: v1
---

# Spec card (card de produto)

## Visão geral

O card de produto da Kauthec **é uma ficha técnica**, não um card de blog. Ele não tem
imagem no topo, título, parágrafo e "Saiba mais". Ele tem dados.

Origem: a referência `machin` coloca rótulos de spec (`COMPLIANCE`, `LOAD CAPACITY`,
`OPERATIONAL CYCLES`) direto na malha do hero. O mesmo vocabulário desce para o card.

Vale para as cinco linhas: Correia em V, Transportadora, PVC e PU, Laminada e Elevadora,
Lençol de Borracha.

## Anatomia

```
┌──────────────────────────────────┐
│ [CARRO-CHEFE]                    │  ← selo, só na Correia em V
│                                  │
│ Correia em V                     │  ← h3
│ Transmissão industrial e         │  ← p
│ agrícola. Lisas, dentadas...     │
│ ──────────────────────────────   │
│ NORMAS          NBR · DIN · RMA  │  ← <dl>, dt em mono
│ ──────────────────────────────   │
│ APLICAÇÃO       Transmissão...   │
│ ──────────────────────────────   │
│ ESTOQUE         Linha completa   │
│                                  │
│ [ Quero revender esta linha → ]  │  ← btn primary
└──────────────────────────────────┘
```

Marcação semântica: o bloco de specs é `<dl>` com `<dt>`/`<dd>`, não uma tabela nem divs.

## Von Restorff: a Correia em V

É o carro-chefe. Recebe, e só ela:

```css
.spec-card.flagship { border-color: var(--color-accent); }
```

Mais o selo `<span class="flag">Carro-chefe</span>`: fundo `--color-accent`, texto
`--color-on-accent`, mono, caixa alta, `tracking: var(--tracking-meta)`.

Nenhum outro card recebe borda de acento. Se todos recebem, nenhum recebe.

## Tokens

| Propriedade | Token |
|---|---|
| `background` | `var(--color-surface)` |
| `border` | `var(--border-width) solid var(--color-border)` |
| `border-radius` | `var(--radius-none)` |
| `padding` | `var(--space-4)` |
| `gap` | `var(--space-3)` |
| Divisor entre specs | `border-top: var(--border-width) solid var(--color-border-subtle)` |
| `dt` | `var(--font-mono)`, `var(--text-2xs)`, caixa alta, `var(--tracking-meta)`, `var(--color-text-tertiary)` |
| `dd` | `var(--text-xs)`, `var(--weight-medium)` |

## Grade de cards: sem gap

Os cinco cards ficam numa grade **sem gap**. As células se tocam e a borda compartilhada
vira a malha. Mesmo gesto do hero, em escala de componente.

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--border-width);
  background: var(--color-border-subtle);
  border: var(--border-width) solid var(--color-border-subtle);
}
.product-grid > .spec-card { border: 0; }
```

Cinco cards em grade de três: o quinto ocupa duas colunas, ou a Correia em V ocupa duas
desde o começo. A segunda opção é melhor: reforça o Von Restorff.

## Estados

| Estado | Comportamento |
|---|---|
| `:hover` | `background: var(--color-accent-wash)`. Sem `translateY`, sem sombra |
| `:focus-within` | Herda o foco do botão interno |
| Carregando | Esqueleto com a forma da ficha: 3 linhas de `dt`/`dd` |
| Sem imagem | É o default. Este card não depende de foto |

O último ponto importa: os cinco cards funcionam **hoje**, sem as fotos que a Kauthec
não tem. É a única parte do site que não trava em `assets`.

## Proibido

- Imagem no topo do card.
- Radius.
- Sombra no hover.
- `translateY` no hover.
- Mais de um card com borda de acento.
- Tabela HTML no lugar do `<dl>`.

## Conteúdo

Os textos das cinco linhas estão em [`../../../03-copy-final.md`](../../../03-copy-final.md),
seção "Linha de Produtos". As tabelas KT 140 / KT 220 e os tipos de cobertura vivem na
página Produtos, não no card. ⚑12: confirmar com o cliente se ainda batem.

## Ver também

- [button.md](button.md)
- [../patterns/hairline-grid.md](../patterns/hairline-grid.md)
