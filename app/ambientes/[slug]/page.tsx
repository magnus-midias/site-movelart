import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const ambientes: Record<string, string> = {
  cozinha: "Cozinha",
  dormitorio: "Dormitório",
  closet: "Closet",
  sala: "Sala",
  "sala-de-jantar": "Sala de Jantar",
  "home-office": "Home Office",
  banheiro: "Banheiro",
  "area-de-servico": "Área de Serviço",
};

export function generateStaticParams() {
  return Object.keys(ambientes).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const nome = ambientes[params.slug];
  if (!nome) return {};
  const url = `https://movelart.com.br/ambientes/${params.slug}`;
  return {
    title: `${nome} Planejado`,
    description: `Veja projetos de ${nome.toLowerCase()} planejado da Movelart. Móveis de alto padrão na Grande Florianópolis, SC. Solicite seu orçamento.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${nome} Planejado | Movelart`,
      description: `Projetos exclusivos de ${nome.toLowerCase()} planejado para residências na Grande Florianópolis. Veja o portfólio da Movelart.`,
      url,
    },
  };
}

export default function AmbienteSlugPage({ params }: { params: { slug: string } }) {
  const nome = ambientes[params.slug];
  if (!nome) notFound();

  return (
    <main>
      {/* Banner */}
      <section className="pt-16 md:pt-20 bg-brand-bg border-b border-brand-border">
        <div className="container mx-auto py-16">
          <Link
            href="/ambientes"
            className="inline-flex items-center gap-2 text-brand-ebony hover:text-brand-accent font-medium text-sm mb-8 group transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para Ambientes
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-dark">{nome} Planejado</h1>
          <p className="text-brand-muted text-lg mt-4 max-w-xl">
            Projetos exclusivos de {nome.toLowerCase()} desenvolvidos para residências na Grande Florianópolis.
          </p>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-brand-border rounded-md flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                role="button"
                aria-label={`Abrir foto ${i + 1}`}
                tabIndex={0}
              >
                {/* Placeholder: substituir por <Image> na Fase 4; lightbox na Fase 3 */}
                <div className="text-center text-brand-muted">
                  <p className="font-medium text-sm">Foto {i + 1}</p>
                  <p className="text-xs mt-1">{nome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark">
        <div className="container mx-auto text-center flex flex-col items-center gap-5">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-balance max-w-xl text-brand-bg">
            Quer um projeto como este para a sua residência?
          </h2>
          <p className="text-brand-bg/70 max-w-md">
            Entre em contato e receba um projeto personalizado para o seu {nome.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
            >
              Solicitar orçamento
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5548963406360"}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de saber mais sobre móveis planejados.")}`}
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
