# 10 — Aplicação do conteúdo real do cliente

**Data:** 2026-07-12
**Fase:** 3 → 4 (aguardando imagens)

## O que foi feito

Aplicação do briefing enviado pelo cliente (`Briefing_Movelart_Site.md`) em todos os arquivos de página e componentes do site.

### Arquivos alterados

| Arquivo | Alterações |
|---|---|
| `.env.local` | WhatsApp `5548996340636`, RESEND_TO_EMAIL `contato@moveismovelart.com.br` |
| `app/layout.tsx` | metadataBase → `moveismovelart.com.br`, títulos e descrições atualizados |
| `app/page.tsx` | H1 real, subtítulo, 4 diferenciais reais, slug sala→sala-de-estar, Schema.org atualizado |
| `app/empresa/page.tsx` | História real (3 gerações), +1000 projetos, 9 diferenciais, canonical atualizado |
| `app/processo/page.tsx` | 6 novas etapas reais, 3 novos compromissos |
| `app/contato/page.tsx` | Tel real, e-mail real, "Exclusivamente com horário agendado", canonical atualizado |
| `app/ambientes/page.tsx` | Reestruturado em 3 segmentos (Residencial/Corporativo/Empreendimentos), 19 categorias |
| `app/ambientes/[slug]/page.tsx` | 19 slugs com descrições reais, título SEO atualizado, URLs → moveismovelart.com.br |
| `components/Footer.tsx` | Tel real, e-mail real, "São José, SC", horário agendado, WA fallback atualizado |

### Domínio

Alterado de `movelart.com.br` → `moveismovelart.com.br` em todos os canonicals, Schema.org, metadataBase e BreadcrumbSchema.

O domínio está registrado na HostGator pelo cliente. A apontagem de DNS para a Vercel é tarefa da **Fase 6** (deploy).

### Portfólio expandido

De 8 categorias planas para 19 categorias em 3 segmentos:

- **Residencial (12):** cozinha, dormitório, closet, sala-de-estar, home-theater, sala-de-jantar, home-office, banheiro, lavabo, área-de-serviço, hall-de-entrada, espaço-gourmet
- **Corporativo (3):** escritórios, clínicas, lojas
- **Empreendimentos (4):** condomínios, apartamentos-decorados, áreas-comuns, halls

### Pendências (Fase 4)

- [ ] Fotos dos ambientes (cliente enviará)
- [ ] Depoimentos reais (WhatsApp, áudios, screenshots)
- [ ] Google Maps embed (contato + empresa + home)
- [ ] Foto da equipe / showroom (empresa)
- [ ] OG image real

## Build

`npm run build` passou com 32 páginas estáticas geradas, sem erros TypeScript.
