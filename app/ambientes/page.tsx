import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { StaggerList, StaggerItem } from "@/components/StaggerList";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

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

const residencial = [
  { slug: "cozinha", nome: "Cozinha" },
  { slug: "dormitorio", nome: "Dormitório" },
  { slug: "closet", nome: "Closet" },
  { slug: "sala-de-estar", nome: "Sala de Estar" },
  { slug: "home-theater", nome: "Home Theater" },
  { slug: "sala-de-jantar", nome: "Sala de Jantar" },
  { slug: "home-office", nome: "Home Office" },
  { slug: "banheiro", nome: "Banheiro" },
  { slug: "lavabo", nome: "Lavabo" },
  { slug: "area-de-servico", nome: "Área de Serviço" },
  { slug: "hall-de-entrada", nome: "Hall de Entrada" },
  { slug: "espaco-gourmet", nome: "Espaço Gourmet" },
];

const corporativo = [
  { slug: "escritorios", nome: "Escritórios" },
  { slug: "clinicas", nome: "Clínicas" },
  { slug: "lojas", nome: "Lojas" },
];

const empreendimentos = [
  { slug: "condominios", nome: "Condomínios" },
  { slug: "apartamentos-decorados", nome: "Apartamentos Decorados" },
  { slug: "areas-comuns", nome: "Áreas Comuns" },
  { slug: "halls", nome: "Halls" },
];

function GridAmbientes({ items }: { items: { slug: string; nome: string }[] }) {
  return (
    <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((ambiente) => (
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
            <div className="p-5 flex items-center justify-between">
              <h2 className="font-display text-base font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
                {ambiente.nome}
              </h2>
              <span className="text-brand-ebony group-hover:text-brand-accent transition-colors text-sm" aria-hidden="true">→</span>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </StaggerList>
  );
}

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
          <div className="container mx-auto py-12 md:py-20 max-w-3xl">
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
              <p className="text-brand-muted text-lg mt-6 max-w-xl leading-relaxed">
                Explore nossos projetos por categoria e encontre inspiração para o seu espaço.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Residencial */}
        <section className="py-12 md:py-20 bg-brand-surface">
          <div className="container mx-auto">
            <AnimateIn>
              <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest mb-3">
                Residencial
              </p>
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">
                Ambientes residenciais
              </h2>
            </AnimateIn>
            <GridAmbientes items={residencial} />
          </div>
        </section>

        {/* Corporativo */}
        <section className="py-12 md:py-20 bg-brand-bg border-t border-brand-border">
          <div className="container mx-auto">
            <AnimateIn>
              <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest mb-3">
                Corporativo
              </p>
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">
                Ambientes corporativos
              </h2>
            </AnimateIn>
            <GridAmbientes items={corporativo} />
          </div>
        </section>

        {/* Empreendimentos */}
        <section className="py-12 md:py-20 bg-brand-surface border-t border-brand-border">
          <div className="container mx-auto">
            <AnimateIn>
              <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest mb-3">
                Empreendimentos
              </p>
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">
                Projetos para empreendimentos
              </h2>
            </AnimateIn>
            <GridAmbientes items={empreendimentos} />
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
              <Link
                href="/contato"
                className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
              >
                Solicitar projeto personalizado
              </Link>
            </div>
          </AnimateIn>
        </section>
      </main>
    </>
  );
}
