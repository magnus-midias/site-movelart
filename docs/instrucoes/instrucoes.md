# Instruções de Trabalho — site-movelart

Este documento define as regras obrigatórias de trabalho neste projeto. Todo agente ou colaborador deve ler este arquivo antes de iniciar qualquer alteração.

---

## Estrutura de documentação

```
docs/
  arquitetura/       → Informações técnicas: stack, modelo de dados, decisões arquiteturais
  instrucoes/        → Este arquivo + planos de ação por fases
  historico/         → Registro sequencial de todas as alterações relevantes
  design-system/     → Identidade visual, tokens, componentes
    logos/
    icones/
    favicon/
  prompt-inicial/    → Cópia do prompt padrão de estruturação (só referência)
CLAUDE.md            → Contexto principal do projeto para o agente
```

### Finalidade de cada pasta

**`docs/arquitetura/`**
Informações técnicas do projeto: stack, divisões do software, ferramentas utilizadas, banco de dados (quando houver), modelo de dados, roteamento, decisões arquiteturais, lacunas conhecidas. Arquivo principal: `arquitetura.md`. Deve ser atualizado sempre que a arquitetura mudar.

**`docs/instrucoes/`**
Regras de trabalho e planos de ação por fases. Contém este arquivo (`instrucoes.md`) e um ou mais arquivos `plano-de-acao-*.md` quando o projeto for dividido em fases.

**`docs/historico/`**
Registro sequencial de toda alteração relevante feita no projeto. Cada alteração gera um arquivo `.md` novo. Ver seção "Regra inegociável de histórico" abaixo.

**`docs/design-system/`**
Identidade visual e design system do projeto. Arquivo principal: `design-system.md`. Qualquer alteração com impacto visual deve ler este arquivo antes e atualizá-lo depois, se introduzir ou alterar um token.

**`docs/prompt-inicial/`**
Contém o prompt padrão de estruturação de projetos do Cristian. Apenas referência — não precisa ser consultada durante o trabalho.

**`CLAUDE.md` (raiz)**
Arquivo de contexto que o agente consulta antes de qualquer alteração. Contém: o que é o projeto, stack, scripts de dev, estrutura de pastas relevante e ponteiros para `docs/`.

---

## Convenção de nomenclatura (obrigatória)

- Nenhum arquivo ou pasta pode ter acentos ou caracteres especiais (ç, ~, `, etc.). Use ASCII puro e kebab-case em nomes compostos.
- Textos **dentro** dos arquivos podem ser em pt-BR com acentos normalmente. A restrição é só para **nomes** de arquivos e pastas.

---

## Regra inegociável de histórico

Toda e qualquer alteração relevante no projeto deve ser registrada em `docs/historico/` como um arquivo `.md` novo.

**Formato obrigatório do nome:**
```
NN-descricao-curta-AAAA-MM-DD.md
```

- `NN` = número sequencial com 2 dígitos, começando em `00` e incrementando. Olhar os arquivos existentes na pasta para usar o próximo número disponível.
- `descricao-curta` = resumo em kebab-case, sem acentos.
- `AAAA-MM-DD` = data da alteração.

Exemplo: `00-criacao-estrutura-docs-2026-06-04.md`

**"Relevante" inclui:**
- Criação, remoção ou renomeação de arquivos/pastas
- Alteração de dependências
- Mudança de estrutura de rotas, componentes ou lógica de negócio
- Alteração de conteúdo (se for projeto de conteúdo)
- Mudança de estilo/design global
- Alterações de configuração (build, lint, tipagem, etc.)
- Decisões de arquitetura (mesmo sem código alterado)

### Antes de fazer uma alteração relevante
1. Ler todo o histórico em `docs/historico/` em ordem numérica crescente.
2. Ler a arquitetura em `docs/arquitetura/`.
3. Se a alteração tem impacto visual: ler também `docs/design-system/design-system.md`.
4. Só então propor/aplicar a alteração.

### Depois de fazer uma alteração relevante
1. Criar um arquivo novo em `docs/historico/` seguindo o formato do nome.
2. Se a alteração impactou arquitetura, atualizar `docs/arquitetura/arquitetura.md`.
3. Se a alteração mudou regras/fluxo de trabalho, atualizar este arquivo (`instrucoes.md`).
4. Se a alteração tocou em tokens visuais, componentes, animações ou assets de marca, atualizar `docs/design-system/design-system.md`.

### Formato de cada arquivo de histórico

```markdown
# <Título da alteração>

- **Data:** AAAA-MM-DD
- **Autor:** <Cristian | Claude>
- **Escopo:** <arquitetura | conteudo | UI | config | infra | outro>

## Contexto / Motivação
Por que essa alteração foi feita.

## O que mudou
Lista objetiva dos arquivos/áreas afetadas.

## Impacto
O que pode quebrar, o que precisa ser revisado, próximos passos.
```

---

## Planos de ação por fases

Projetos ou iniciativas grandes devem ser quebrados em fases numeradas e registrados em `docs/instrucoes/plano-de-acao-<nome>.md`.

**Diretrizes:**
- Cada fase tem objetivo, checklist e critério de conclusão claro.
- Uma fase só começa quando a anterior está 100% concluída.
- Intercalar fases de testes entre fases de construção — não deixar testes só para o fim.
- A última fase antes do deploy deve ser uma rodada de testes de segurança + funcionalidade, cobrindo: sanitização/XSS, auditoria de dependências, headers, segredos, links externos com `rel="noopener noreferrer"`, smoke test manual e re-execução da suite automática.
- Ao final de cada fase: marcar como concluída no plano **e** criar o registro correspondente em `docs/historico/`.
- Listar explicitamente o que está **fora de escopo** (pós-MVP), para evitar looping em partes já concluídas.
