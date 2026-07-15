# 13 — Formulário de contato: WhatsApp + n8n webhook

**Data:** 2026-07-15

---

## O que mudou

### Formulário de contato (`components/ContactForm.tsx`) — reescrita completa
- Campos: nome, whatsapp, email (opcional), situação do projeto (radio group), mensagem, honeypot `_hp`
- Submit: `window.open(waUrl)` chamado sincronamente no gesto do usuário; fetch ao `/api/contato` em background
- Radio group customizado (dois botões visíveis) substitui o checkbox anterior
- Mensagem pré-formatada da perspectiva do lead (não da Movelart)
- `normalizarWA()`: normaliza número para formato `55DDDXXXXXXXX`
- `buildMsgWA()`: monta mensagem em português para o lead enviar pelo WA

### Route Handler (`app/api/contato/route.ts`) — reescrito
- Validação via Zod
- Rate limiter em memória: 5 req/min por IP
- Honeypot: aceita silenciosamente para não revelar ao bot
- Envia header `x-webhook-secret` no fetch para o n8n
- Timeout de 8s via `AbortSignal.timeout(8000)`
- Sempre retorna 200 (WA já foi aberto no cliente)

### Workflow n8n (`docs/n8n-workflow-movelart-lead.json`) — workflow completo
Fluxo: **Webhook → Validar Secret (IF) → Preparar e-mail (Code) → Enviar ao Arthur (Gmail) → Responder 200**
- Nó IF adicionado para validar `x-webhook-secret` contra `$env.MOVELART_WEBHOOK_SECRET`
- Rota falsa retorna 401 e para
- Nó Code monta e-mail HTML com botão "Responder no WhatsApp" apontando para o número do lead
- Acentuação corrigida no código do nó (encoding corrompido na versão original)
- E-mail do Arthur atualmente em `c.dornelles97@gmail.com` (teste) — trocar antes de produção

### Variáveis de ambiente
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — número da Movelart
- `N8N_WEBHOOK_URL` — URL do webhook no VPS
- `N8N_WEBHOOK_SECRET` — secret compartilhado (já adicionado na Vercel e no `.env.local`)

---

## Pendências antes de produção

1. **n8n → Settings → Environment Variables:** adicionar `MOVELART_WEBHOOK_SECRET` com o mesmo valor de `N8N_WEBHOOK_SECRET`
2. **Nó "Enviar ao Arthur":** trocar campo `To` para o Gmail real do Arthur
3. **Credencial Gmail** no nó já está apontando para conta Magnus Midias — confirmar que está ativa

---

## Arquivos alterados

| Arquivo | Tipo |
|---|---|
| `components/ContactForm.tsx` | Reescrita |
| `app/api/contato/route.ts` | Reescrita |
| `docs/n8n-workflow-movelart-lead.json` | Criado / atualizado |
| `.env.local` | Secret preenchido (não vai ao git) |

---

## Arquitetura

Nenhuma mudança estrutural no Next.js. Apenas a lógica do formulário e do Route Handler.
