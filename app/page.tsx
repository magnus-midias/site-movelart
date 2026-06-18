import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Movelart | Móveis Planejados em Florianópolis",
  description:
    "Móveis planejados de alto padrão para residências na Grande Florianópolis, SC. Projetos personalizados, instalação própria, projeto 3D incluso e garantia.",
  alternates: { canonical: "https://movelart.com.br" },
  openGraph: {
    title: "Movelart | Móveis Planejados em Florianópolis",
    description:
      "Móveis planejados de alto padrão para residências na Grande Florianópolis, SC. Projetos personalizados, instalação própria, projeto 3D incluso e garantia.",
    url: "https://movelart.com.br",
  },
};

const ambientes = [
  { slug: "cozinha", nome: "Cozinha" },
  { slug: "dormitorio", nome: "Dormitório" },
  { slug: "closet", nome: "Closet" },
  { slug: "sala", nome: "Sala" },
  { slug: "home-office", nome: "Home Office" },
  { slug: "banheiro", nome: "Banheiro" },
];

const diferenciais = [
  { titulo: "Projeto 3D Incluso", descricao: "Visualize cada detalhe antes da produção começar. Ajustes ilimitados até a aprovação final." },
  { titulo: "Instalação Própria", descricao: "Nossa equipe cuida de toda a instalação. Sem terceirizados, sem imprevistos." },
  { titulo: "Materiais de Alta Qualidade", descricao: "Acabamentos premium selecionados para durar décadas e valorizar o imóvel." },
  { titulo: "Garantia Total", descricao: "Suporte completo no pós-instalação. Qualquer ajuste necessário, estamos à disposição." },
];

const depoimentos = [
  { nome: "Cliente 1", texto: "Depoimento real do cliente. A ser integrado na Fase 4." },
  { nome: "Cliente 2", texto: "Depoimento real do cliente. A ser integrado na Fase 4." },
  { nome: "Cliente 3", texto: "Depoimento real do cliente. A ser integrado na Fase 4." },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-16 md:pt-20 min-h-[85vh] flex items-center bg-brand-bg border-b border-brand-border">
        <div className="container mx-auto py-20 flex flex-col gap-6 max-w-3xl">
          <p className="font-yantra text-brand-accent text-sm font-semibold uppercase tracking-widest">
            Móveis Planejados · Grande Florianópolis, SC
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-balance text-brand-dark">
            Ambientes que refletem quem você é.
          </h1>
          <p className="text-brand-muted text-lg max-w-xl leading-relaxed">
            Projetos personalizados de alto padrão, desenvolvidos com exclusividade
            para a sua residência. Do projeto 3D à instalação, cada detalhe é cuidado pela nossa equipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px] text-center"
            >
              Solicitar orçamento
            </Link>
            <Link
              href="/ambientes"
              className="inline-flex items-center justify-center bg-brand-bg border-2 border-brand-ebony text-brand-ebony hover:bg-brand-ebony hover:text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px] text-center"
            >
              Ver portfólio
            </Link>
          </div>
        </div>
      </section>

      {/* Ambientes em destaque */}
      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto">
          <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest mb-3">
            Portfólio
          </p>
          <h2 className="font-display text-3xl font-bold text-brand-dark mb-3">Ambientes</h2>
          <p className="text-brand-muted mb-10 max-w-xl">
            Do dormitório à cozinha, transformamos cada espaço com precisão e sofisticação.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ambientes.map((ambiente) => (
              <Link
                key={ambiente.slug}
                href={`/ambientes/${ambiente.slug}`}
                className="group block bg-brand-bg rounded-md overflow-hidden border border-brand-border hover:border-brand-ebony transition-colors"
              >
                <div className="aspect-[4/3] bg-brand-border flex items-center justify-center">
                  <span className="text-brand-muted text-sm">Foto placeholder</span>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
                    {ambiente.nome}
                  </h3>
                  <span className="text-brand-ebony group-hover:text-brand-accent transition-colors text-sm" aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/ambientes"
              className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:underline"
            >
              Ver todos os ambientes →
            </Link>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto">
          <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest mb-3">
            Por que nos escolher
          </p>
          <h2 className="font-display text-3xl font-bold text-brand-dark mb-3">Nossos diferenciais</h2>
          <p className="text-brand-muted mb-10 max-w-xl">
            Mais de 15 anos transformando residências na Grande Florianópolis.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((d) => (
              <div
                key={d.titulo}
                className="flex flex-col gap-3 p-6 border border-brand-border rounded-md bg-white hover:border-brand-ebony transition-colors"
              >
                <div className="w-10 h-10 rounded-sm bg-brand-ebony/10 flex items-center justify-center">
                  <span className="text-brand-ebony text-lg" aria-hidden="true">✦</span>
                </div>
                <h3 className="font-semibold text-brand-dark">{d.titulo}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{d.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto">
          <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest mb-3">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl font-bold text-brand-dark mb-3">O que nossos clientes dizem</h2>
          <p className="text-brand-muted mb-10">Depoimentos reais de quem viveu a experiência.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 p-6 bg-brand-bg border border-brand-border rounded-md"
              >
                <div className="flex gap-0.5 text-brand-ebony">
                  {"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}
                </div>
                <p className="text-brand-muted text-sm leading-relaxed italic">
                  &ldquo;{d.texto}&rdquo;
                </p>
                <p className="text-brand-dark font-semibold text-sm">{d.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-16 bg-brand-bg border-t border-brand-border">
        <div className="container mx-auto">
          <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest mb-3">
            Onde estamos
          </p>
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">Grande Florianópolis, SC</h2>
          <div className="w-full h-72 bg-brand-border rounded-md flex items-center justify-center">
            <div className="text-center text-brand-muted">
              <p className="font-medium">Google Maps embed</p>
              <p className="text-sm mt-1">Fase 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold max-w-2xl text-balance text-brand-bg">
            Pronto para transformar a sua residência?
          </h2>
          <p className="text-brand-bg/70 max-w-lg">
            Fale com nossa equipe e receba um projeto personalizado para o seu espaço.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
            >
              Solicitar orçamento
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5548963406360"}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-brand-bg text-brand-bg hover:bg-brand-bg hover:text-brand-dark font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
