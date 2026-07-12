import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { StaggerList, StaggerItem } from "@/components/StaggerList";
import CounterNumber from "@/components/CounterNumber";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Nossa Empresa",
  description:
    "Três gerações de marceneiros. Conheça a história da Movelart, nossos valores e diferenciais. São José, Grande Florianópolis, SC.",
  alternates: { canonical: "https://moveismovelart.com.br/empresa" },
  openGraph: {
    title: "Nossa Empresa | Movelart",
    description:
      "Três gerações de marceneiros. Tradição, conhecimento técnico e tecnologia a serviço do seu projeto.",
    url: "https://moveismovelart.com.br/empresa",
  },
};

const numeros = [
  { valor: "+15", label: "Anos de tradição familiar" },
  { valor: "+1000", label: "Projetos executados" },
  { valor: "100%", label: "Instalação própria" },
  { valor: "5★", label: "Avaliação no Google" },
];

const diferenciais = [
  {
    titulo: "Três gerações de marceneiros",
    descricao:
      "Nossa história começa com nosso avô, foi fortalecida por nosso pai e hoje segue com os irmãos Arthur, Caio e Ramon. Um conhecimento que só se constrói com décadas de prática.",
  },
  {
    titulo: "Conhecimento técnico completo",
    descricao:
      "Por vivermos a marcenaria desde a infância, dominamos materiais, ferragens, processos produtivos e soluções construtivas em cada etapa do projeto.",
  },
  {
    titulo: "Produção própria",
    descricao:
      "Fabricamos nossos móveis na nossa própria estrutura, com controle rigoroso de qualidade em cada peça produzida.",
  },
  {
    titulo: "Instalação por equipe própria",
    descricao:
      "Sem terceirizados. Nossa equipe técnica cuida de toda a instalação, garantindo precisão e responsabilidade do início ao fim.",
  },
  {
    titulo: "Projetos totalmente personalizados",
    descricao:
      "Cada projeto é desenvolvido exclusivamente para o cliente. Não existem dois projetos iguais na Movelart.",
  },
  {
    titulo: "Materiais cuidadosamente selecionados",
    descricao:
      "Trabalhamos com fornecedores criteriosamente escolhidos. Acabamentos que duram décadas e valorizam o imóvel.",
  },
  {
    titulo: "Alto padrão de acabamento",
    descricao:
      "A precisão técnica herdada da marcenaria artesanal se reflete em cada detalhe: das junções às ferragens, do corte ao acabamento final.",
  },
  {
    titulo: "Atendimento consultivo e transparente",
    descricao:
      "Não vendemos móveis. Desenvolvemos projetos. Entendemos a sua necessidade antes de propor qualquer solução.",
  },
  {
    titulo: "Pós-venda comprometido",
    descricao:
      "Nossa relação com o cliente não termina na entrega. Oferecemos 3 anos de garantia e suporte contínuo no pós-instalação.",
  },
];

export default function EmpresaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://moveismovelart.com.br" },
          { name: "Nossa Empresa", url: "https://moveismovelart.com.br/empresa" },
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
                Três gerações de marceneiros. Uma história construída projeto a projeto.
              </h1>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.2}>
              <p className="text-brand-muted text-lg leading-relaxed max-w-2xl">
                A Movelart combina tradição familiar, conhecimento técnico profundo e tecnologia
                para desenvolver móveis sob medida que unem funcionalidade, sofisticação e durabilidade.
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
                    Uma tradição que atravessa gerações.
                  </h2>
                  <div className="flex flex-col gap-4 text-brand-muted leading-relaxed">
                    <p>
                      A Movelart é a continuidade de uma história construída
                      ao longo de três gerações de marceneiros. Nossa trajetória começou com nosso avô,
                      foi fortalecida por nosso pai e hoje segue com os irmãos Arthur, Caio e Ramon,
                      que cresceram dentro da marcenaria. Desde muito cedo aprendemos, na prática,
                      que qualidade, dedicação e respeito ao cliente são valores inseparáveis do nosso trabalho.
                    </p>
                    <p>
                      Arthur iniciou sua caminhada aos 15 anos, atuando em diferentes etapas da produção
                      e adquirindo uma visão completa de todo o processo de fabricação. Alguns anos depois,
                      Caio integrou a equipe e, posteriormente, Ramon também se juntou ao negócio,
                      consolidando a continuidade da tradição familiar. Há 15 anos, após o falecimento
                      de nosso pai, assumimos a responsabilidade de dar continuidade ao legado construído
                      por nossa família.
                    </p>
                    <p>
                      Desde então, evoluímos constantemente, incorporando novas tecnologias, aperfeiçoando
                      processos e investindo em inovação, sem abrir mão da essência da marcenaria artesanal
                      e dos valores que sempre nortearam nossa empresa. Hoje, combinamos tradição,
                      conhecimento técnico e tecnologia para entregar projetos que refletem a personalidade
                      e as necessidades de cada cliente.
                    </p>
                  </div>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                {/* FASE 4: substituir por foto da equipe */}
                <div className="aspect-[4/3] bg-brand-border rounded-md flex items-center justify-center">
                  <div className="text-center text-brand-muted">
                    <p className="font-medium">Foto da equipe / fábrica</p>
                    <p className="text-sm mt-1">Fase 4</p>
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
                {/* FASE 4: substituir por Google Maps embed */}
                <div className="aspect-[4/3] bg-brand-border rounded-md flex items-center justify-center order-2 lg:order-1">
                  <div className="text-center text-brand-muted">
                    <p className="font-medium">Google Maps embed</p>
                    <p className="text-sm mt-1">Fase 4</p>
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
                    Baseados em São José, SC, atendemos toda a Grande Florianópolis e região.
                    Realizamos visita técnica diretamente no seu imóvel, com horário agendado.
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
