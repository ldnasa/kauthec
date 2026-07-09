---
spec: form-field
layer: 3
tokens: [--color-bg, --color-border, --color-accent, --color-danger, --color-success, --color-text-secondary, --color-text-muted, --space-2, --space-3, --text-xs, --text-2xs, --font-mono, --radius-none]
status: v1
---

# Campo de formulário

## Visão geral

Dois formulários no site:

1. **Curto (Home, CTA final):** Nome, Empresa/CNPJ, Cidade/UF, WhatsApp.
2. **Completo (página Seja Parceiro):** o curto + linhas que pretende revender +
   **upload do contrato social**.

O upload é o campo mais delicado do site: recebe documento societário, dado sensível de
empresa.

## Anatomia

```
Label                      ← 14px, weight 500, --color-text-secondary
┌─────────────────────────┐
│ placeholder             │  ← altura 48px, radius 0
└─────────────────────────┘
Mensagem de erro           ← 12px mono, --color-danger
```

`<label>` real envolvendo o `<input>`. Nunca placeholder como label.

## Tokens

| Propriedade | Token |
|---|---|
| `height` | `48px` |
| `border-radius` | `var(--radius-none)` |
| `border` | `var(--border-width) solid var(--color-border)` |
| `background` | `var(--color-bg)` |
| `padding-inline` | `var(--space-3)` |
| `::placeholder` | `var(--color-text-muted)` |
| Label | `var(--text-xs)`, `var(--weight-medium)`, `var(--color-text-secondary)` |
| Erro | `var(--text-2xs)`, `var(--font-mono)`, `var(--color-danger)` |

## Estados

| Estado | Comportamento |
|---|---|
| `:focus` | `border-color: var(--color-accent)` |
| `:focus-visible` | `outline: 2px solid var(--color-accent); outline-offset: 2px` |
| Erro | `border-color: var(--color-danger)`, `<small>` visível, `aria-describedby` apontando para ele, `aria-invalid="true"` |
| Sucesso (envio) | Mensagem em `--color-success` dentro de um `aria-live="polite"` |
| Desabilitado | `opacity: .4` |

## Campos com regra própria

### CNPJ

```html
<input type="text" inputmode="numeric" placeholder="00.000.000/0000-00"
       aria-describedby="cnpj-erro" />
```

Máscara em vanilla JS no `input`. Validar dígito verificador no cliente antes de enviar.
Não validar apenas formato: CNPJ com máscara certa e dígito errado passa e vira lead sujo.

### Upload do contrato social

```html
<label for="contrato">Contrato social</label>
<input type="file" id="contrato" accept=".pdf,.jpg,.jpeg,.png"
       aria-describedby="contrato-ajuda contrato-erro" />
<small id="contrato-ajuda">PDF, JPG ou PNG. Até 10 MB.</small>
```

Requisitos:

- **Estado de progresso.** Arquivo de 10 MB em 4G de pátio de revenda demora. Sem barra
  de progresso o usuário clica duas vezes.
- **Nome do arquivo visível** depois de escolhido, com botão de trocar.
- **Erro específico:** "Formato não aceito. Envie PDF, JPG ou PNG." Nunca "Erro no upload".
- **Aviso de privacidade** ao lado do campo. Documento societário é dado sensível.
  ⚑14: confirmar se existe política de privacidade para linkar (LGPD).

⚑13: confirmar limite de tamanho e formatos com quem recebe o e-mail. O sugerido acima
é hipótese.

## Microcopy

Todas as mensagens de erro (as 12), labels, placeholders, texto de sucesso e o aviso do
upload já estão escritos em
[`../../../03-copy-final.md`](../../../03-copy-final.md), seção "Formulário de parceria".

**Não escreva mensagem de erro nova.** Se falta uma, ela pertence àquele arquivo primeiro.

Palavras proibidas valem aqui também: nada de "Perfeito!" na confirmação.

## Proibido

- Placeholder como substituto de label.
- Radius.
- Spinner. Use barra de progresso no upload, esqueleto no resto.
- Faixa vermelha genérica no topo do formulário. O erro fica no campo.
- Enviar o formulário sem validar CNPJ.
- Prometer prazo de retorno que não seja verdade. ⚑15.

## Ver também

- [button.md](button.md) - o botão de envio
- [../foundations/anti-slop.md](../foundations/anti-slop.md)
