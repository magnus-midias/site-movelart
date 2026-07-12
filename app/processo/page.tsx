import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { StaggerList, StaggerItem } from "@/components/StaggerList";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Como Trabalhamos",
  description:
    "Conheça o processo da Movelart: do primeiro contato e pré-orçamento à instalação e pós-venda. Transparência e rigor técnico em cada etapa.",
  alternates: { canonical: "https://moveismovelart.com.br/processo" },
  openGraph: {
    title: "Como Trabalhamos | Movelart",
    description:
      "Do primeiro contato à instalação final. Transparência, rigor técnico e comprometimento em cada etapa do projeto.",
    url: "https://moveismovelart.com.br/processo",
  },
};

const etapas = [
  {
    numero: "01",
    titulo: "Primeiro contato e pré-orçamento",
    descricao:
      "Entramos em contato para entender a demanda, o ambiente e o orçamento disponível. Apresentamos uma proposta inicial de forma clara e transparente.",
  },
  {
    numero: "02",
    titulo: "Aprovação da proposta",
    descricao:
      "Com a proposta aprovada, alinhamos todos os detalhes e formalizamos o avanço do projeto. Sem letras miúdas, sem surpresas.",
  },
  {
    numero: "03",
    titulo: "Levantamento técnico e briefing",
    descricao:
      "Nossa equipe visita o imóvel para medir o espaço com precisão e aprofundar o briefing: materiais, acabamentos, funcionalidades e estilo de vida.",
  },
  {
    numero: "04",
    titulo: "Desenvolvimento do projeto",
    descricao:
      "Desenvolvemos o projeto completo em 3D para que você visualize cada detalhe antes da produção. Ajustes ilimitados até a aprovação total.",
  },
  {
    numero: "05",
    titulo: "Produção",
    descricao:
      "Os móveis são fabricados na nossa própria estrutura, com controle rigoroso de qualidade em cada peça e respeito ao prazo acordado.",
  },
  {
    numero: "06",
    titulo: "Instalação e pós-venda",
    descricao:
      "Nossa equipe técnica própria realiza toda a instalação com precisão. Após a entrega, seguimos disponíveis para suporte dentro da garantia de 3 anos.",
  },
];

const compromissos = [
  {
    titulo: "Qualidade em cada detalhe",
    texto:
      "Do projeto à instalação, cada etapa é executada com o mesmo rigor técnico e atenção ao acabamento que herdamos de três gerações de marceneiros.",
  },
  {
    titulo: "Produção com rigor técnico",
    texto:
      "Fabricação própria com controle de qualidade em cada peça, garantindo precisão dimensional e durabilidade.",
  },
  {
    titulo: "Compromisso com o prazo",
    texto:
      "Cumprimos os prazos acordados. Qualquer imprevisto é comunicado com antecedência e total transparência.",
  },
];

export default function ProcessoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://moveismovelart.com.br" },
          { name: "Como Trabalhamos", url: "https://moveismovelart.com.br/processo" },
        ]}
      />
      <main id="main-content">
        {/* Banner */}
        <section className="pt-16 md:pt-20 bg-brand-bg border-b border-brand-border">
          <div className="container mx-auto py-12 md:py-20 max-w-3xl">
            <AnimateIn trigger="mount" delay={0} distance={16}>
              <p className="font-yantra text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
                Processo
              </p>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight text-balance text-brand-dark">
                Do primeiro contato à entrega impecável.
              </h1>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.2}>
              <p className="text-brand-muted text-lg mt-6 max-w-xl leading-relaxed">
                Cada projeto segue um processo claro, transparente e pensado para garantir
                que o resultado final supere as suas expectativas.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Etapas */}
        <section className="py-12 md:py-20 bg-brand-surface">
          <div className="container mx-auto">
            <AnimateIn>
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-10 md:mb-14">
                Nossas etapas
              </h2>
            </AnimateIn>
            <StaggerList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {etapas.map((etapa) => (
                <StaggerItem key={etapa.numero}>
                  <div className="flex flex-col gap-4 p-6 border border-brand-border rounded-md bg-brand-bg hover:border-brand-ebony transition-colors h-full">
                    <span className="font-yantra text-4xl font-bold text-brand-ebony/20">
                      {etapa.numero}
                    </span>
                    <h3 className="font-display font-semibold text-brand-dark text-lg">
                      {etapa.titulo}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {etapa.descricao}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </section>

        {/* Compromissos */}
        <section className="py-10 md:py-16 bg-brand-bg border-t border-brand-border">
          <div className="container mx-auto">
            <AnimateIn>
              <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
                <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest">
                  Nosso compromisso
                </p>
                <h2 className="font-display text-3xl font-bold text-brand-dark">
                  Transparência em cada etapa.
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left mt-2">
                  {compromissos.map((item) => (
                    <div key={item.titulo} className="p-5 border border-brand-border rounded-md flex flex-col gap-2">
                      <h3 className="font-semibold text-brand-dark text-sm">{item.titulo}</h3>
                      <p className="text-xs text-brand-muted leading-relaxed">{item.texto}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-brand-dark">
          <AnimateIn>
            <div className="container mx-auto text-center flex flex-col items-center gap-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold max-w-2xl text-balance text-brand-bg">
                Pronto para dar o primeiro passo?
              </h2>
              <p className="text-brand-bg/70 max-w-md">
                Entre em contato e agende uma visita técnica. Nossa equipe visita o seu imóvel
                e apresenta uma proposta personalizada.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
              >
                Agendar visita técnica
              </Link>
            </div>
          </AnimateIn>
        </section>
      </main>
    </>
  );
}
