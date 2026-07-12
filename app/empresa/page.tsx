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
    titulo: "Experiência que não se improvisa",
    descricao:
      "Três gerações de marceneiros. Esse histórico significa que cada decisão do seu projeto tem embasamento técnico real, construído ao longo de décadas.",
  },
  {
    titulo: "Cada detalhe tem uma razão de ser",
    descricao:
      "Por crescerem dentro da marcenaria, dominam materiais, ferragens e processos construtivos que a maioria terceiriza. Você nota a diferença no resultado.",
  },
  {
    titulo: "Controle total sobre o que você vai receber",
    descricao:
      "Fabricação própria com controle de qualidade em cada peça. O que foi aprovado no projeto é o que chega na sua casa.",
  },
  {
    titulo: "Instalamos. Qualquer ajuste? A gente resolve.",
    descricao:
      "Sem terceirizados na instalação. Você tem um único responsável do início ao fim, e qualquer ajuste pós-entrega é tratado diretamente com quem fez.",
  },
  {
    titulo: "Um projeto que não existe em lugar nenhum",
    descricao:
      "Cada projeto é desenvolvido exclusivamente para o seu espaço. Nenhum outro cliente tem o mesmo que você.",
  },
  {
    titulo: "Materiais que duram tanto quanto a sua casa",
    descricao:
      "Fornecedores criteriosamente selecionados. Acabamentos que não desbotam, não incham e não dececionam depois de alguns anos.",
  },
  {
    titulo: "O detalhe que você vai notar todo dia",
    descricao:
      "Das junções às ferragens, do corte ao acabamento: a precisão de quem faz marcenaria por vocação aparece nos detalhes que a maioria não percebe até ver de perto.",
  },
  {
    titulo: "Você entende cada decisão do projeto",
    descricao:
      "Antes de propor qualquer solução, entendemos a sua rotina e o que você realmente precisa. Você aprova cada etapa com informação, não no escuro.",
  },
  {
    titulo: "Nossa relação não termina na entrega",
    descricao:
      "3 anos de garantia com equipe própria disponível. Se algo precisar de atenção depois da instalação, você não fica sozinho.",
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
                Três gerações de marceneiros. A experiência que você contrata está em cada detalhe do projeto.
              </h1>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.2}>
              <p className="text-brand-muted text-lg leading-relaxed max-w-2xl">
                Você não está contratando um fornecedor. Está contratando uma família que
                cresceu fazendo isso, com 15 anos de projetos entregues na Grande Florianópolis.
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
                    Uma história que se reflete em cada projeto.
                  </h2>
                  <div className="flex flex-col gap-4 text-brand-muted leading-relaxed">
                    <p>
                      Por trás de cada projeto da Movelart existe uma história construída
                      ao longo de três gerações de marceneiros. A trajetória começou com o avô,
                      foi fortalecida pelo pai e hoje segue com os irmãos Arthur, Caio e Ramon,
                      que cresceram dentro da marcenaria. Desde muito cedo aprenderam, na prática,
                      que qualidade, dedicação e respeito ao cliente são valores inseparáveis do trabalho.
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
