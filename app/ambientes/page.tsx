import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AmbientesGrid from "@/components/AmbientesGrid";

export const metadata: Metadata = {
  title: "Ambientes",
  description:
    "Portfólio de projetos da Movelart por categoria: residencial, corporativo e empreendimentos. Móveis sob medida na Grande Florianópolis, SC.",
  alternates: { canonical: "https://moveismovelart.com.br/ambientes" },
  openGraph: {
    title: "Ambientes | Movelart",
    description:
      "Portfólio de projetos sob medida por categoria: cozinha, dormitório, closet, escritório e muito mais. Grande Florianópolis, SC.",
    url: "https://moveismovelart.com.br/ambientes",
  },
};

const ambientes = [
  // Residencial
  { slug: "cozinha", nome: "Cozinha", segmento: "residencial" as const },
  { slug: "dormitorio", nome: "Dormitório", segmento: "residencial" as const },
  { slug: "closet", nome: "Closet", segmento: "residencial" as const },
  { slug: "sala-de-estar", nome: "Sala de Estar", segmento: "residencial" as const },
  { slug: "home-theater", nome: "Home Theater", segmento: "residencial" as const },
  { slug: "sala-de-jantar", nome: "Sala de Jantar", segmento: "residencial" as const },
  { slug: "home-office", nome: "Home Office", segmento: "residencial" as const },
  { slug: "banheiro", nome: "Banheiro", segmento: "residencial" as const },
  { slug: "lavabo", nome: "Lavabo", segmento: "residencial" as const },
  { slug: "area-de-servico", nome: "Área de Serviço", segmento: "residencial" as const },
  { slug: "hall-de-entrada", nome: "Hall de Entrada", segmento: "residencial" as const },
  { slug: "espaco-gourmet", nome: "Espaço Gourmet", segmento: "residencial" as const },
  // Corporativo
  { slug: "escritorios", nome: "Escritórios", segmento: "corporativo" as const },
  { slug: "clinicas", nome: "Clínicas", segmento: "corporativo" as const },
  { slug: "lojas", nome: "Lojas", segmento: "corporativo" as const },
  // Empreendimentos
  { slug: "condominios", nome: "Condomínios", segmento: "empreendimentos" as const },
  { slug: "apartamentos-decorados", nome: "Apartamentos Decorados", segmento: "empreendimentos" as const },
  { slug: "areas-comuns", nome: "Áreas Comuns", segmento: "empreendimentos" as const },
  { slug: "halls", nome: "Halls", segmento: "empreendimentos" as const },
];

export default function AmbientesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://moveismovelart.com.br" },
          { name: "Ambientes", url: "https://moveismovelart.com.br/ambientes" },
        ]}
      />
      <main id="main-content">
        {/* Banner */}
        <section className="pt-16 md:pt-20 bg-brand-bg border-b border-brand-border">
          <div className="container mx-auto py-10 md:py-16 max-w-3xl">
            <AnimateIn trigger="mount" delay={0} distance={16}>
              <p className="font-yantra text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
                Portfólio
              </p>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight text-balance text-brand-dark">
                Ambientes transformados com exclusividade e precisão.
              </h1>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.2}>
              <p className="text-brand-muted text-lg mt-5 max-w-xl leading-relaxed">
                Explore nossos projetos por categoria e encontre inspiração para o seu espaço.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Grid com filtro */}
        <section className="py-10 md:py-16 bg-brand-surface">
          <div className="container mx-auto">
            <AmbientesGrid ambientes={ambientes} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-16 bg-brand-dark">
          <AnimateIn>
            <div className="container mx-auto text-center flex flex-col items-center gap-5">
              <h2 className="font-display text-2xl font-bold text-brand-bg">
                Não encontrou o ambiente que procura?
              </h2>
              <p className="text-brand-bg/70 max-w-md">
                Desenvolvemos projetos para qualquer ambiente residencial ou corporativo.
              </p>
              <a
                href="/contato"
                className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
              >
                Solicitar projeto personalizado
              </a>
            </div>
          </AnimateIn>
        </section>
      </main>
    </>
  );
}
