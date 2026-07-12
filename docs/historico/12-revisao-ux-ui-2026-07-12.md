# 12 — Revisão UX/UI: clareza e experiência fluida

**Data:** 2026-07-12
**Branch:** main

## Motivação

Solicitação explícita do cliente: foco em UX/UI para clareza e experiência fluida. Auditoria completa das 5 páginas principais identificou problemas críticos e de fluxo.

## Alterações

### app/page.tsx (home)
- **Removida** seção de Depoimentos com placeholders visíveis ("A ser integrado na Fase 4" + estrelas 5★ falsas). Substituir quando chegar conteúdo real.
- **Removida** seção de Localização com placeholder de mapa. Localização já aparece em header, footer e página de contato.
- Hero height reduzida: `min-h-[85vh]` → `min-h-[60vh] md:min-h-[85vh]` (mobile não fica preso no hero).
- Eyebrow "Portfólio" e H2 "Ambientes" unificados em H2 "Ambientes em destaque" (sem eyebrow redundante).
- H2 diferenciais: "Por que nos escolher" (clichê) → "Por que a Movelart".
- Link "Ver todos os ambientes →" adicionado abaixo dos cards de portfólio.

### app/empresa/page.tsx
- Parágrafo 2 da história: voz corrigida de 1ª para 3ª pessoa ("de nosso pai, assumimos" → "do pai, Arthur, Caio e Ramon assumiram").
- Intro da seção de Diferenciais: "Entregamos projetos que transformam o modo como você vive." → "O resultado que você vê e sente no dia a dia."
- Seção de Localização: removido placeholder de mapa (box "Google Maps embed / Fase 4"). Seção agora é texto limpo com lista de cidades.

### app/processo/page.tsx
- Seção de Compromissos: separado o header centrado do grid de cards.
- Container expandido de `max-w-2xl` para largura total do container.
- Cards com `h-full` para alturas iguais na mesma linha.
- Gap aumentado de `gap-4` para `gap-6`.
- Texto dos cards de `text-xs` para `text-sm` (consistência com resto do site).

### app/contato/page.tsx
- Canal WhatsApp: valor agora é `<a>` com link `wa.me` (era texto inerte).
- Canal E-mail: valor agora é `<a href="mailto:...">` (era texto inerte).
- Seção "Área de atuação": removido placeholder de mapa. Mantido apenas o strip de chips de cidades.

### components/Footer.tsx
- Nav link "Nosso Processo" → "Como Trabalhamos" (alinhamento com título da página).
- Email no rodapé: adicionado `break-all` para evitar overflow em mobile.

## Impacto

- Nenhuma seção visível ao usuário mostra mais conteúdo placeholder ou unfinished.
- Canais de contato são clicáveis e funcionais.
- Fluxo da home mais direto: Hero → Portfólio → Diferenciais → CTA.
- Build continua limpo: 32/32 páginas estáticas.
