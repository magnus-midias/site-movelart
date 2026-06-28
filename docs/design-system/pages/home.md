# Design System — Override: Home (`/`)

Desvios específicos da página Home em relação ao `MASTER.md`. Este arquivo só existe enquanto houver diferenças reais — se ficar vazio ou só com placeholders, deletar.

---

## Tipografia

- H1 hero: `text-4xl md:text-6xl font-bold leading-tight text-balance` — escala maior que o padrão de outras páginas (que usam `text-4xl md:text-5xl`).

---

## Layout

- Hero: `min-h-[85vh] flex items-center` — única seção com altura mínima relativa à viewport.
- Grid de ambientes: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (6 cards na Home vs 4 colunas em `/ambientes`).
- Diferenciais: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` — 4 colunas no desktop (vs 3 colunas na página Empresa).

---

## Componentes exclusivos desta página

- **Seção de Depoimentos** — cards com estrelas e itálico. Não aparece em outras páginas.
- **Seção Localização** com mapa placeholder — também aparece em `/empresa` e `/contato`, mas é componente inline (não isolado).
- **Hero CTA com dois botões** — primário vermelho + secundário outline ebony (único neste contexto).
