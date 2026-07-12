import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { StaggerList, StaggerItem } from "@/components/StaggerList";

export const metadata: Metadata = {
  title: "Movelart | Móveis Sob Medida em Florianópolis",
  description:
    "Móveis sob medida de alto padrão para residências e empresas na Grande Florianópolis, SC. Três gerações de marceneiros. Produção e instalação próprias. Garantia de 3 anos.",
  alternates: { canonical: "https://moveismovelart.com.br" },
  openGraph: {
    title: "Movelart | Móveis Sob Medida em Florianópolis",
    description:
      "Móveis sob medida de alto padrão para residências e empresas na Grande Florianópolis, SC. Três gerações de marceneiros. Produção e instalação próprias.",
    url: "https://moveismovelart.com.br",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Movelart Móveis Sob Medida",
  url: "https://moveismovelart.com.br",
  logo: "https://moveismovelart.com.br/images/icone-vermelho.svg",
  telephone: "+5548996340636",
  email: "contato@moveismovelart.com.br",
  sameAs: ["https://www.instagram.com/movelartoficial/"],
  areaServed: { "@type": "AdministrativeArea", name: "Grande Florianópolis" },
};

const ambientesDestaque = [
  { slug: "cozinha", nome: "Cozinha" },
  { slug: "dormitorio", nome: "Dormitório" },
  { slug: "closet", nome: "Closet" },
  { slug: "sala-de-estar", nome: "Sala de Estar" },
  { slug: "home-office", nome: "Home Office" },
  { slug: "banheiro", nome: "Banheiro" },
];

const diferenciais = [
  {
    titulo: "Três gerações de marceneiros",
    descricao:
      "Nossa tradição familiar garante um conhecimento técnico profundo em materiais, ferragens e processos produtivos que só se adquire com décadas de prática.",
  },
  {
    titulo: "Produção e instalação próprias",
    descricao:
      "Da fábrica à sua casa, sem terceiros. Controle total sobre qualidade, prazo e resultado final em cada etapa do projeto.",
  },
  {
    titulo: "Projeto personalizado com 3D",
    descricao:
      "Visualize cada detalhe do seu ambiente antes da produção começar. Ajustes ilimitados até a aprovação final.",
  },
  {
    titulo: "3 anos de garantia",
    descricao:
      "Garantia de 3 anos nos móveis, com equipe própria disponível no pós-instalação para suporte e ajustes.",
  },
];

const depoimentos = [
  { nome: "Cliente 1", texto: "Depoimento real do cliente. A ser integrado na Fase 4." },
  { nome: "Cliente 2", texto: "Depoimento real do cliente. A ser integrado na Fase 4." },
  { nome: "Cliente 3", texto: "Depoimento real do cliente. A ser integrado na Fase 4." },
];

export default function HomePage() {
  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-16 md:pt-20 min-h-[85vh] flex items-center bg-brand-bg border-b border-brand-border">
          <div className="container mx-auto py-12 md:py-20 flex flex-col gap-6 max-w-3xl">
            <AnimateIn trigger="mount" delay={0} distance={16}>
              <p className="font-yantra text-brand-accent text-sm font-semibold uppercase tracking-widest">
                Móveis Sob Medida · Grande Florianópolis, SC
              </p>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.1}>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-balance text-brand-dark">
                Precisão técnica e elegância para quem valoriza a excelência.
              </h1>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.2}>
              <p className="text-brand-muted text-lg max-w-xl leading-relaxed">
                Mais do que fabricar móveis, desenvolvemos soluções sob medida com rigor
                técnico, materiais cuidadosamente selecionados e acabamento refinado.
                Cada projeto é pensado para unir funcionalidade, sofisticação e durabilidade.
              </p>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.3}>
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
            </AnimateIn>
          </div>
        </section>

        {/* Ambientes em destaque */}
        <section className="py-12 md:py-20 bg-brand-surface">
          <div className="container mx-auto">
            <AnimateIn>
              <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest mb-3">
                Portfólio
              </p>
              <h2 className="font-display text-3xl font-bold text-brand-dark mb-3">Ambientes</h2>
              <p className="text-brand-muted mb-8 md:mb-10 max-w-xl">
                Do dormitório à cozinha, transformamos cada espaço com precisão e sofisticação.
              </p>
            </AnimateIn>
            <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ambientesDestaque.map((ambiente) => (
                <StaggerItem key={ambiente.slug}>
                  <Link
                    href={`/ambientes/${ambiente.slug}`}
                    className="group block bg-brand-bg rounded-md overflow-hidden border border-brand-border hover:border-brand-ebony transition-colors"
                  >
                    <div className="aspect-[4/3] bg-brand-border flex items-center justify-center overflow-hidden">
                      {/* FASE 4: substituir por <Image> */}
                      <span className="text-brand-muted text-sm group-hover:scale-105 transition-transform duration-300">
                        Foto placeholder
                      </span>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <h3 className="text-base font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
                        {ambiente.nome}
                      </h3>
                      <span className="text-brand-ebony group-hover:text-brand-accent transition-colors text-sm" aria-hidden="true">→</span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerList>
            <AnimateIn>
              <div className="mt-8 text-center">
                <Link
                  href="/ambientes"
                  className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:underline"
                >
                  Ver todos os ambientes →
                </Link>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-12 md:py-20 bg-brand-bg">
          <div className="container mx-auto">
            <AnimateIn>
              <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest mb-3">
                Por que nos escolher
              </p>
              <h2 className="font-display text-3xl font-bold text-brand-dark mb-3">Nossos diferenciais</h2>
              <p className="text-brand-muted mb-8 md:mb-10 max-w-xl">
                Três gerações de marceneiros a serviço da sua casa.
              </p>
            </AnimateIn>
            <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {diferenciais.map((d) => (
                <StaggerItem key={d.titulo}>
                  <div className="flex flex-col gap-3 p-6 border border-brand-border rounded-md bg-white hover:border-brand-ebony transition-colors h-full">
                    <div className="w-10 h-10 rounded-sm bg-brand-ebony/10 flex items-center justify-center">
                      <span className="text-brand-ebony text-lg" aria-hidden="true">✦</span>
                    </div>
                    <h3 className="font-semibold text-brand-dark">{d.titulo}</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">{d.descricao}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-12 md:py-20 bg-brand-surface">
          <div className="container mx-auto">
            <AnimateIn>
              <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest mb-3">
                Depoimentos
              </p>
              <h2 className="font-display text-3xl font-bold text-brand-dark mb-3">O que nossos clientes dizem</h2>
              <p className="text-brand-muted mb-8 md:mb-10">Depoimentos reais de quem viveu a experiência.</p>
            </AnimateIn>
            <StaggerList className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {depoimentos.map((d, i) => (
                <StaggerItem key={i}>
                  <div className="flex flex-col gap-4 p-6 bg-brand-bg border border-brand-border rounded-md h-full">
                    <div className="flex gap-0.5 text-brand-ebony">
                      {"★★★★★".split("").map((s, idx) => <span key={idx}>{s}</span>)}
                    </div>
                    {/* FASE 4: substituir por depoimentos reais */}
                    <p className="text-brand-muted text-sm leading-relaxed italic">
                      &ldquo;{d.texto}&rdquo;
                    </p>
                    <p className="text-brand-dark font-semibold text-sm">{d.nome}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </section>

        {/* Localização */}
        <section className="py-10 md:py-16 bg-brand-bg border-t border-brand-border">
          <div className="container mx-auto">
            <AnimateIn>
              <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest mb-3">
                Onde estamos
              </p>
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">Grande Florianópolis, SC</h2>
              {/* FASE 4: substituir por Google Maps embed */}
              <div className="w-full h-64 md:h-72 bg-brand-border rounded-md flex items-center justify-center">
                <div className="text-center text-brand-muted">
                  <p className="font-medium">Google Maps embed</p>
                  <p className="text-sm mt-1">Fase 4</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 md:py-20 bg-brand-dark">
          <AnimateIn className="container mx-auto flex flex-col items-center gap-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold max-w-2xl text-balance text-brand-bg">
              Pronto para transformar a sua residência?
            </h2>
            <p className="text-brand-bg/70 max-w-2xl">
              Fale com nossa equipe e receba um projeto personalizado para o seu espaço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
              >
                Solicitar orçamento
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5548996340636"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-brand-bg text-brand-bg hover:bg-brand-bg hover:text-brand-dark font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
              >
                WhatsApp
              </a>
            </div>
          </AnimateIn>
        </section>
      </main>
    </>
  );
}
