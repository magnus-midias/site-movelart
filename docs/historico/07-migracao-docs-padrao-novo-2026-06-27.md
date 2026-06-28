# 07 — Migração de docs/ para o padrão novo

- **Data:** 2026-06-27
- **Autor:** Claude
- **Escopo:** arquitetura, config

---

## Contexto / Motivação

O projeto usava a estrutura antiga de documentação (`docs/arquitetura/`, `docs/instrucoes/`, `docs/design-system/design-system.md`). Foi executada a migração para o padrão atual do Cristian, que inclui `constitution.md`, `prd-e-arquitetura/`, `design-system/MASTER.md` e `specs/`.

---

## O que mudou

### Arquivos criados

| Arquivo | Origem |
|---|---|
| `docs/constitution.md` | Novo — preenchido com dados reais da Movelart |
| `docs/prd-e-arquitetura/instrucoes.md` | Copiado do template `docs/Docs/` (novo formato) |
| `docs/prd-e-arquitetura/arquitetura.md` | Migrado de `docs/arquitetura/arquitetura.md` + atualizado |
| `docs/prd-e-arquitetura/plano-de-acao.md` | Migrado de `docs/instrucoes/plano-de-acao-movelart.md` + atualizado com status atual |
| `docs/prd-e-arquitetura/product-requirements-document.md` | Migrado de `docs/arquitetura/prd_site_movelaria.md` + adaptado ao novo template |
| `docs/design-system/MASTER.md` | Migrado de `docs/design-system/design-system.md` + tokens atualizados (ebony, border warm) |
| `docs/design-system/pages/home.md` | Novo — overrides específicos da Home |
| `docs/specs/.gitkeep` | Novo — pasta criada para specs futuras |

### Arquivos deletados

| Arquivo / Pasta | Motivo |
|---|---|
| `docs/Docs/` (pasta inteira) | Template de referência — conteúdo migrado para a estrutura definitiva |
| `docs/arquitetura/` (pasta inteira) | Substituída por `docs/prd-e-arquitetura/arquitetura.md` |
| `docs/instrucoes/` (pasta inteira) | Substituída por `docs/prd-e-arquitetura/instrucoes.md` e `plano-de-acao.md` |
| `docs/design-system/design-system.md` | Substituída por `docs/design-system/MASTER.md` |

### Arquivos atualizados

- `CLAUDE.md` — nova ordem de leitura obrigatória, ponteiros atualizados para a nova estrutura

---

## Referências internas atualizadas

| De | Para |
|---|---|
| `docs/arquitetura/arquitetura.md` | `docs/prd-e-arquitetura/arquitetura.md` |
| `docs/instrucoes/instrucoes.md` | `docs/prd-e-arquitetura/instrucoes.md` |
| `docs/instrucoes/plano-de-acao-movelart.md` | `docs/prd-e-arquitetura/plano-de-acao.md` |
| `docs/design-system/design-system.md` | `docs/design-system/MASTER.md` |

---

## Impacto

- Nenhuma alteração em código fonte — migração exclusivamente de documentação.
- O `constitution.md` gerado é um **rascunho revisável** — deve ser complementado pelo Cristian se algum princípio estiver faltando.
- O `MASTER.md` tem os tokens corretos do `tailwind.config.ts` atual (ebony, border warm, bg parchment).

## Próximo passo sugerido

Revisar `docs/constitution.md` com o Cristian para confirmar que todos os princípios estão corretos e completos antes de tratar como fonte de verdade definitiva.
