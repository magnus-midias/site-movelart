# 06 — Ajustes de UX/UI, dados reais do cliente e simplificação do formulário

- **Data:** 2026-06-12
- **Autor:** Claude
- **Escopo:** UI, conteúdo, arquitetura

---

## Contexto / Motivação

Sessão de refinamento pós-estruturação. Objetivo: aplicar a paleta definitiva com token `brand-ebony`, integrar os dados reais do cliente (WhatsApp, Instagram), padronizar o sistema de botões em todas as páginas, corrigir copy, ajustar a lista de ambientes e simplificar o formulário de contato.

---

## O que mudou

### 1. Token `brand-ebony` substitui `brand-gold`

- `tailwind.config.ts`: removido `brand.gold: "#C9A96E"`, adicionado `brand.ebony: "#5B5941"` e `brand.ebony-hover: "#4A4835"`.
- Todas as ocorrências de `brand-gold` substituídas por `brand-ebony` nos arquivos de componentes e páginas.
- `docs/design-system/design-system.md` atualizado com o novo token e regras de uso.

### 2. Sistema de botões padronizado

Padrão definido e aplicado em todas as páginas:

| Variante | Uso | Estilo |
|---|---|---|
| Primário | Sempre | `bg-brand-accent hover:bg-brand-accent-hover text-white` |
| Secundário (fundo claro) | Hero, seções claras | `bg-brand-bg border-2 border-brand-ebony text-brand-ebony hover:bg-brand-ebony hover:text-white` |
| Secundário (fundo escuro) | CTAs em `bg-brand-dark` | `border-2 border-brand-bg text-brand-bg hover:bg-brand-bg hover:text-brand-dark` |

Arquivos afetados: `app/page.tsx`, `app/empresa/page.tsx`, `app/ambientes/[slug]/page.tsx`, `app/processo/page.tsx`.

### 3. Seção de números (Empresa) ajustada

- Fundo alterado de `bg-brand-dark` para `bg-brand-ebony`.
- Valores dos números: `text-brand-accent` → `text-brand-bg` (contraste adequado sobre Ebony).
- Labels: `text-brand-bg/70` mantido.

### 4. Diferenciais com fundo branco

- `app/page.tsx` e `app/empresa/page.tsx`: cards de diferenciais receberam `bg-white` para criar contraste contra o fundo `bg-brand-bg` da seção.

### 5. Dados reais do cliente integrados

- Instagram oficial: `https://www.instagram.com/movelartoficial/`
  - Atualizado em: `components/Header.tsx`, `components/Footer.tsx`.
- WhatsApp: número `5548963406360` (exibido como `(48) 9634-0636`)
  - Atualizado em: `components/Header.tsx`, `components/Footer.tsx`, `components/WhatsAppButton.tsx`, `app/ambientes/[slug]/page.tsx`, `app/contato/page.tsx`.
  - `.env.local`: `NEXT_PUBLIC_WHATSAPP_NUMBER=5548963406360`
- Mensagem pré-preenchida unificada em todos os links: `"Olá! Vim pelo site e gostaria de saber mais sobre móveis planejados."`
- Magnus Mídias: URL corrigida para `https://magnusmidias.com` no `components/Footer.tsx`.

### 6. Lista de ambientes corrigida

- Removido ambiente `escritorio` ("Escritório Doméstico") — era duplicata de `home-office`.
- Mantido apenas `home-office: "Home Office"`.
- Arquivos afetados: `app/page.tsx` (grid de ambientes em destaque), `app/ambientes/page.tsx`, `app/ambientes/[slug]/page.tsx` (generateStaticParams).

### 7. Copy ajustada

- "casa/casas/apartamentos" → "residência/residências" em todas as páginas (público-alvo mais preciso).
- "Agendar visita" → "Solicitar orçamento" em botões e CTAs (`app/processo/page.tsx`, `app/empresa/page.tsx`, `app/ambientes/[slug]/page.tsx`).

### 8. Navegação de volta em `/ambientes/[slug]`

- Adicionado link "← Voltar para Ambientes" acima do `<h1>` na página de categoria.
- Estilo: `text-brand-ebony hover:text-brand-accent` com seta animada no hover (`group-hover:-translate-x-1`).

### 9. Página de Contato — layout revisado

- Colunas `lg:grid-cols-5`: esquerda 2/5 (texto, sticky), direita 3/5 (formulário em card branco).
- Removido botão de WhatsApp da coluna esquerda — mantido apenas texto.

### 10. Formulário de Contato simplificado

- `components/ContactForm.tsx` reescrito:
  - **Removidos:** campo `email`, seleção múltipla de `ambientes` (toggle buttons), função `handleAmbienteToggle`, array `ambientesList`.
  - **Mantidos:** `nome` (obrigatório), `telefone/WhatsApp` (obrigatório, com validação de formato), `mensagem` (opcional).
  - Interface `FormFields` atualizada: apenas `{ nome, telefone, mensagem }`.
  - Estado de sucesso exibe mensagem confirmando retorno via WhatsApp.
- `app/api/contato/route.ts`: destructuring e log atualizados — removidos `email` e `ambiente`.

---

## Impacto

- **Nenhum breaking change** — todas as rotas existentes permanecem funcionais.
- O formulário está pronto para integração com Resend/Telegram Bot na Fase 3.
- A lista de ambientes está consolidada em 8 categorias definitivas.
- O sistema de botões está padronizado e pronto para manutenção.
