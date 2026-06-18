import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ambientes",
  description:
    "Portfólio de projetos da Movelart por categoria de ambiente: cozinha, dormitório, closet, sala e muito mais. Móveis planejados na Grande Florianópolis, SC.",
  alternates: { canonical: "https://movelart.com.br/ambientes" },
  openGraph: {
    title: "Ambientes | Movelart",
    description:
      "Portfólio de projetos por categoria: cozinha, dormitório, closet, sala e muito mais. Móveis planejados de alto padrão na Grande Florianópolis.",
    url: "https://movelart.com.br/ambientes",
  },
};

const ambientes = [
  { slug: "cozinha", nome: "Cozinha" },
  { slug: "dormitorio", nome: "Dormitório" },
  { slug: "closet", nome: "Closet" },
  { slug: "sala", nome: "Sala" },
  { slug: "sala-de-jantar", nome: "Sala de Jantar" },
  { slug: "home-office", nome: "Home Office" },
  { slug: "banheiro", nome: "Banheiro" },
  { slug: "area-de-servico", nome: "Área de Serviço" },
];

export default function AmbientesPage() {
  return (
    <main>
      {/* Banner */}
      <section className="pt-16 md:pt-20 bg-brand-bg border-b border-brand-border">
        <div className="container mx-auto py-20 max-w-3xl">
          <p className="font-yantra text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Portfólio
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight text-balance text-brand-dark">
            Ambientes transformados com exclusividade e precisão.
          </h1>
          <p className="text-brand-muted text-lg mt-6 max-w-xl leading-relaxed">
            Explore nossos projetos por categoria e encontre inspiração para o seu espaço.
          </p>
        </div>
      </section>

      {/* Grid de categorias */}
      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ambientes.map((ambiente) => (
              <Link
                key={ambiente.slug}
                href={`/ambientes/${ambiente.slug}`}
                className="group block bg-brand-bg rounded-md overflow-hidden border border-brand-border hover:border-brand-ebony transition-colors"
              >
                {/* Placeholder de imagem */}
                <div className="aspect-[4/3] bg-brand-border flex items-center justify-center overflow-hidden">
                  <span className="text-brand-muted text-sm group-hover:scale-105 transition-transform duration-300">
                    Foto placeholder
                  </span>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h2 className="font-display text-base font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
                    {ambiente.nome}
                  </h2>
                  <span
                    className="text-brand-ebony group-hover:text-brand-accent transition-colors text-sm"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark">
        <div className="container mx-auto text-center flex flex-col items-center gap-5">
          <h2 className="font-display text-2xl font-bold text-brand-bg">
            Não encontrou o ambiente que procura?
          </h2>
          <p className="text-brand-bg/70 max-w-md">
            Fale conosco. Desenvolvemos projetos para qualquer ambiente da sua residência.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
          >
            Solicitar projeto personalizado
          </Link>
        </div>
      </section>
    </main>
  );
}
