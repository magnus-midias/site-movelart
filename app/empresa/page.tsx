import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { StaggerList, StaggerItem } from "@/components/StaggerList";
import CounterNumber from "@/components/CounterNumber";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Nossa Empresa",
  description:
    "Conheça a história, os valores e os diferenciais da Movelart. Especialistas em móveis planejados de alto padrão na Grande Florianópolis, SC.",
  alternates: { canonical: "https://movelart.com.br/empresa" },
  openGraph: {
    title: "Nossa Empresa | Movelart",
    description:
      "Mais de 15 anos transformando residências na Grande Florianópolis. Conheça nossa história, diferenciais e área de atuação.",
    url: "https://movelart.com.br/empresa",
  },
};

const numeros = [
  { valor: "+15", label: "Anos de mercado" },
  { valor: "+500", label: "Projetos entregues" },
  { valor: "100%", label: "Instalação própria" },
  { valor: "5★", label: "Avaliação média" },
];

const diferenciais = [
  { titulo: "Projeto 3D incluso", descricao: "Você visualiza cada detalhe do seu ambiente antes da produção começar. Ajustes ilimitados até a aprovação final." },
  { titulo: "Instalação própria", descricao: "Nossa equipe técnica cuida de toda a instalação. Sem terceirizados: precisão e responsabilidade do início ao fim." },
  { titulo: "Materiais de alto padrão", descricao: "Trabalhamos com os melhores fornecedores do mercado. Acabamentos que duram décadas e valorizam o imóvel." },
  { titulo: "Atendimento consultivo", descricao: "Não vendemos móveis. Desenvolvemos projetos. Nosso time entende suas necessidades antes de propor qualquer solução." },
  { titulo: "Garantia total", descricao: "Suporte completo no pós-instalação. Qualquer ajuste necessário, nossa equipe atende com agilidade." },
  { titulo: "Projeto personalizado", descricao: "Cada detalhe é pensado para o seu espaço e o seu estilo de vida. Não existem dois projetos iguais." },
];

export default function EmpresaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://movelart.com.br" },
          { name: "Nossa Empresa", url: "https://movelart.com.br/empresa" },
        ]}
      />
      <main id="main-content">
        {/* Banner */}
        <section className="pt-16 md:pt-20 bg-brand-bg border-b border-brand-border">
          <div className="container mx-auto py-12 md:py-20 max-w-3xl">
            <AnimateIn trigger="mount" delay={0} distance={16}>
              <p className="font-yantra text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
                Nossa Empresa
              </p>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance text-brand-dark">
                Mais de uma década transformando residências na Grande Florianópolis.
              </h1>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.2}>
              <p className="text-brand-muted text-lg leading-relaxed max-w-2xl">
                Nascemos da paixão por projetos que respeitam o espaço, a vida e o gosto de quem mora.
                Cada ambiente que entregamos carrega o cuidado de quem trata o seu projeto como se fosse o próprio.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Números */}
        <section className="bg-brand-ebony py-10 md:py-14">
          <div className="container mx-auto">
            <StaggerList className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {numeros.map((n) => (
                <StaggerItem key={n.label}>
                  <div className="flex flex-col gap-1">
                    <span className="font-yantra text-4xl md:text-5xl font-bold text-brand-bg">
                      <CounterNumber valor={n.valor} />
                    </span>
                    <span className="text-brand-bg/70 text-sm">{n.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </section>

        {/* Nossa história */}
        <section className="py-12 md:py-20 bg-brand-surface">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateIn>
                <div className="flex flex-col gap-6">
                  <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest">
                    Nossa história
                  </p>
                  <h2 className="font-display text-3xl font-bold text-brand-dark">
                    De projeto em projeto, construímos nossa reputação.
                  </h2>
                  <div className="flex flex-col gap-4 text-brand-muted leading-relaxed">
                    <p>
                      Fundada há mais de 15 anos, a Movelart nasceu com um propósito claro: entregar
                      móveis planejados que combinam funcionalidade, sofisticação e durabilidade para
                      residências da Grande Florianópolis.
                    </p>
                    <p>
                      Ao longo dos anos, construímos nossa reputação projeto a projeto, com clientes que
                      nos indicam porque confiam no nosso trabalho. Do dormitório ao escritório, da cozinha
                      ao closet. Cada ambiente recebe a mesma atenção ao detalhe.
                    </p>
                    <p>
                      Hoje, somos referência em móveis planejados de alto padrão na região, com equipe
                      técnica própria e estrutura completa para atender da concepção à instalação.
                    </p>
                  </div>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <div className="aspect-[4/3] bg-brand-border rounded-md flex items-center justify-center">
                  <div className="text-center text-brand-muted">
                    <p className="font-medium">Foto da equipe / showroom</p>
                    <p className="text-sm mt-1">Substituir na Fase 4</p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-12 md:py-20 bg-brand-bg">
          <div className="container mx-auto">
            <AnimateIn>
              <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest mb-3">
                Diferenciais
              </p>
              <h2 className="font-display text-3xl font-bold text-brand-dark mb-3">O que nos diferencia</h2>
              <p className="text-brand-muted mb-8 md:mb-12 max-w-xl">
                Entregamos projetos que transformam o modo como você vive.
              </p>
            </AnimateIn>
            <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {diferenciais.map((d) => (
                <StaggerItem key={d.titulo}>
                  <div className="flex flex-col gap-3 p-6 border border-brand-border rounded-md bg-white hover:border-brand-ebony transition-colors h-full">
                    <div className="w-8 h-8 rounded-sm bg-brand-ebony/10 flex items-center justify-center" aria-hidden="true">
                      <span className="text-brand-ebony text-base">✦</span>
                    </div>
                    <h3 className="font-semibold text-brand-dark">{d.titulo}</h3>
                    <p className="text-sm text-brand-muted leading-relaxed">{d.descricao}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </section>

        {/* Localização */}
        <section className="py-10 md:py-16 bg-brand-surface border-t border-brand-border">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimateIn delay={0.1}>
                <div className="aspect-[4/3] bg-brand-border rounded-md flex items-center justify-center order-2 lg:order-1">
                  <div className="text-center text-brand-muted">
                    <p className="font-medium">Grande Florianópolis, SC</p>
                    <p className="text-sm mt-1">Google Maps embed — Fase 4</p>
                  </div>
                </div>
              </AnimateIn>
              <AnimateIn>
                <div className="flex flex-col gap-6 order-1 lg:order-2">
                  <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest">
                    Onde atuamos
                  </p>
                  <h2 className="font-display text-3xl font-bold text-brand-dark">
                    Atendemos toda a Grande Florianópolis.
                  </h2>
                  <p className="text-brand-muted leading-relaxed">
                    Florianópolis, São José, Palhoça, Biguaçu e municípios da região. Realizamos visita técnica
                    diretamente no seu imóvel, sem custo adicional.
                  </p>
                  <ul className="flex flex-col gap-2 text-brand-muted text-sm">
                    {["Florianópolis", "São José", "Palhoça", "Biguaçu", "Santo Amaro da Imperatriz"].map((cidade) => (
                      <li key={cidade} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-ebony shrink-0" aria-hidden="true" />
                        {cidade}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-brand-dark">
          <AnimateIn>
            <div className="container mx-auto text-center flex flex-col items-center gap-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold max-w-2xl text-balance text-brand-bg">
                Pronto para conhecer nosso trabalho?
              </h2>
              <p className="text-brand-bg/70 max-w-lg">
                Agende uma visita ou veja nosso portfólio de projetos realizados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato" className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]">
                  Fale conosco
                </Link>
                <Link href="/ambientes" className="inline-flex items-center justify-center border-2 border-brand-bg text-brand-bg hover:bg-brand-bg hover:text-brand-dark font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]">
                  Ver portfólio
                </Link>
              </div>
            </div>
          </AnimateIn>
        </section>
      </main>
    </>
  );
}
