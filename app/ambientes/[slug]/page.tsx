import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimateIn from "@/components/AnimateIn";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GaleriaAmbiente from "@/components/GaleriaAmbiente";

const ambientes: Record<string, { nome: string; descricao: string }> = {
  // Residencial
  cozinha: {
    nome: "Cozinha",
    descricao:
      "Cozinhas sob medida que unem funcionalidade, beleza e organização. Cada projeto é desenvolvido para o seu espaço e rotina.",
  },
  dormitorio: {
    nome: "Dormitório",
    descricao:
      "Dormitórios planejados com soluções inteligentes de armazenamento e acabamentos que transmitem sofisticação e conforto.",
  },
  closet: {
    nome: "Closet",
    descricao:
      "Closets personalizados para organizar e expor seu guarda-roupa com elegância. Cada peça no lugar certo.",
  },
  "sala-de-estar": {
    nome: "Sala de Estar",
    descricao:
      "Painéis, estantes e soluções sob medida que transformam a sala de estar em um espaço único e acolhedor.",
  },
  "home-theater": {
    nome: "Home Theater",
    descricao:
      "Painéis acústicos, rack embutido e móveis para home theater projetados para a melhor experiência audiovisual em casa.",
  },
  "sala-de-jantar": {
    nome: "Sala de Jantar",
    descricao:
      "Buffets, cristaleiras e móveis de sala de jantar projetados para complementar o ambiente e facilitar o dia a dia.",
  },
  "home-office": {
    nome: "Home Office",
    descricao:
      "Escritórios em casa planejados para produtividade e conforto. Mesas, nichos e armazenamento integrados.",
  },
  banheiro: {
    nome: "Banheiro",
    descricao:
      "Gabinetes e móveis para banheiro com acabamentos resistentes à umidade e design sofisticado.",
  },
  lavabo: {
    nome: "Lavabo",
    descricao:
      "Cubas, espelhos e móveis para lavabo com acabamento refinado e design que impressiona à primeira visita.",
  },
  "area-de-servico": {
    nome: "Área de Serviço",
    descricao:
      "Armários e soluções sob medida para área de serviço que organizam e aproveitam ao máximo cada centímetro.",
  },
  "hall-de-entrada": {
    nome: "Hall de Entrada",
    descricao:
      "Móveis sob medida para hall de entrada que combinam funcionalidade e beleza desde o primeiro contato com o ambiente.",
  },
  "espaco-gourmet": {
    nome: "Espaço Gourmet",
    descricao:
      "Soluções planejadas para espaço gourmet que integram praticidade e sofisticação para receber com excelência.",
  },
  // Corporativo
  escritorios: {
    nome: "Escritórios",
    descricao:
      "Bancadas, armários e soluções sob medida para escritórios corporativos que unem produtividade e identidade visual.",
  },
  clinicas: {
    nome: "Clínicas",
    descricao:
      "Móveis planejados para clínicas e consultórios com materiais adequados às normas sanitárias e design sofisticado.",
  },
  lojas: {
    nome: "Lojas",
    descricao:
      "Displays, prateleiras e marcenaria sob medida para ambientes comerciais que valorizam o produto e a experiência do cliente.",
  },
  // Empreendimentos
  condominios: {
    nome: "Condomínios",
    descricao:
      "Soluções planejadas para áreas comuns, halls e unidades de condomínios com qualidade e escala.",
  },
  "apartamentos-decorados": {
    nome: "Apartamentos Decorados",
    descricao:
      "Projetos completos de marcenaria para apartamentos decorados que valorizam o imóvel e encantam os compradores.",
  },
  "areas-comuns": {
    nome: "Áreas Comuns",
    descricao:
      "Marcenaria sob medida para áreas comuns de condomínios: salão de festas, coworking, fitness e muito mais.",
  },
  halls: {
    nome: "Halls",
    descricao:
      "Painéis, bancadas e mobiliário planejado para halls de entrada que constroem a primeira impressão do empreendimento.",
  },
};

export async function generateStaticParams() {
  return Object.keys(ambientes).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ambiente = ambientes[slug];
  if (!ambiente) return {};

  return {
    title: `${ambiente.nome} Sob Medida em Florianópolis`,
    description: `${ambiente.descricao} Movelart — Móveis sob medida de alto padrão na Grande Florianópolis, SC.`,
    alternates: { canonical: `https://moveismovelart.com.br/ambientes/${slug}` },
    openGraph: {
      title: `${ambiente.nome} Sob Medida | Movelart`,
      description: ambiente.descricao,
      url: `https://moveismovelart.com.br/ambientes/${slug}`,
    },
  };
}

export default async function AmbienteDetalhe({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ambiente = ambientes[slug];
  if (!ambiente) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://moveismovelart.com.br" },
          { name: "Ambientes", url: "https://moveismovelart.com.br/ambientes" },
          { name: ambiente.nome, url: `https://moveismovelart.com.br/ambientes/${slug}` },
        ]}
      />
      <main id="main-content">
        {/* Banner */}
        <section className="pt-16 md:pt-20 bg-brand-bg border-b border-brand-border">
          <div className="container mx-auto py-10 md:py-16">
            <AnimateIn trigger="mount" delay={0} distance={16}>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-brand-muted">
                  <li>
                    <Link href="/" className="hover:text-brand-dark transition-colors">Home</Link>
                  </li>
                  <li aria-hidden="true">·</li>
                  <li>
                    <Link href="/ambientes" className="hover:text-brand-dark transition-colors">Ambientes</Link>
                  </li>
                  <li aria-hidden="true">·</li>
                  <li className="text-brand-dark font-medium">{ambiente.nome}</li>
                </ol>
              </nav>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight text-brand-dark mb-4">
                {ambiente.nome}
              </h1>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.2}>
              <p className="text-brand-muted text-lg max-w-2xl leading-relaxed">{ambiente.descricao}</p>
            </AnimateIn>
          </div>
        </section>

        {/* Galeria */}
        <section className="py-12 md:py-20 bg-brand-surface">
          <div className="container mx-auto">
            <AnimateIn>
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">
                Projetos de {ambiente.nome}
              </h2>
            </AnimateIn>
            <GaleriaAmbiente nome={ambiente.nome} count={6} />
          </div>
        </section>

        {/* Outros ambientes */}
        <section className="py-10 md:py-14 bg-brand-bg border-t border-brand-border">
          <div className="container mx-auto">
            <AnimateIn>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="font-display text-xl font-bold text-brand-dark">
                  Explore outros ambientes
                </h2>
                <Link
                  href="/ambientes"
                  className="text-brand-accent font-semibold text-sm hover:underline flex items-center gap-1"
                >
                  Ver todos →
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-brand-dark">
          <AnimateIn>
            <div className="container mx-auto text-center flex flex-col items-center gap-6">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-bg max-w-xl text-balance">
                Quer um projeto de {ambiente.nome} para a sua casa?
              </h2>
              <p className="text-brand-bg/70 max-w-md text-sm">
                Fale com nossa equipe e receba uma proposta personalizada para o seu espaço.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
                >
                  Solicitar orçamento
                </Link>
                <Link
                  href="/ambientes"
                  className="inline-flex items-center justify-center border-2 border-brand-bg text-brand-bg hover:bg-brand-bg hover:text-brand-dark font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
                >
                  Ver outros ambientes
                </Link>
              </div>
            </div>
          </AnimateIn>
        </section>
      </main>
    </>
  );
}
