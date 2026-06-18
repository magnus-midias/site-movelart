import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosso Processo",
  description:
    "Conheça como funciona o processo da Movelart: da visita técnica à instalação, cada etapa é conduzida com cuidado e transparência.",
  alternates: { canonical: "https://movelart.com.br/processo" },
  openGraph: {
    title: "Nosso Processo | Movelart",
    description:
      "Da visita técnica à instalação: veja como funciona cada etapa do processo da Movelart. Transparência e comunicação do início ao fim.",
    url: "https://movelart.com.br/processo",
  },
};

const etapas = [
  {
    numero: 1,
    titulo: "Visita Técnica",
    descricao:
      "Nossa equipe visita o ambiente para medição precisa e levantamento das suas necessidades. Sem compromisso e sem custo.",
  },
  {
    numero: 2,
    titulo: "Projeto 3D",
    descricao:
      "Desenvolvemos o projeto em 3D para que você visualize cada detalhe: materiais, cores e acabamentos. Tudo antes da produção começar.",
  },
  {
    numero: 3,
    titulo: "Aprovação e Ajustes",
    descricao:
      "Apresentamos o projeto, ouvimos seu feedback e realizamos todos os ajustes necessários. Nada é produzido sem a sua aprovação.",
  },
  {
    numero: 4,
    titulo: "Produção em Fábrica",
    descricao:
      "Com o projeto aprovado, iniciamos a produção com materiais de alta qualidade e rigoroso controle em cada peça.",
  },
  {
    numero: 5,
    titulo: "Entrega e Instalação",
    descricao:
      "Nossa equipe própria realiza a instalação com precisão e cuidado no acabamento. Sem terceirizados, sem imprevistos.",
  },
  {
    numero: 6,
    titulo: "Pós-venda e Garantia",
    descricao:
      "Acompanhamos sua satisfação e oferecemos suporte completo após a instalação. Qualquer ajuste necessário, estamos à disposição.",
  },
];

export default function ProcessoPage() {
  return (
    <main>
      {/* Banner */}
      <section className="pt-16 md:pt-20 bg-brand-bg border-b border-brand-border">
        <div className="container mx-auto py-20 max-w-3xl">
          <p className="font-yantra text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
            Nosso Processo
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight text-balance text-brand-dark">
            Da visita técnica à instalação, com cuidado em cada etapa.
          </h1>
          <p className="text-brand-muted text-lg mt-6 max-w-xl leading-relaxed">
            Transparência e comunicação em cada passo do projeto. Você acompanha tudo de perto.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {etapas.map((etapa, idx) => (
                <div
                  key={etapa.numero}
                  className="flex flex-col gap-4 p-6 border border-brand-border rounded-md bg-brand-bg hover:border-brand-ebony transition-colors"
                >
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center shrink-0
                      font-bold text-sm text-white
                      ${idx < etapas.length - 1 ? "bg-brand-accent" : "bg-brand-dark"}
                    `}
                  >
                    {etapa.numero}
                  </div>
                  <h2 className="font-display text-lg font-semibold text-brand-dark">{etapa.titulo}</h2>
                  <p className="text-brand-muted text-sm leading-relaxed">{etapa.descricao}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl font-bold text-brand-bg max-w-xl text-balance">
            Pronto para dar o primeiro passo?
          </h2>
          <p className="text-brand-bg/70 max-w-md">
            Agende uma visita técnica sem compromisso. Nossa equipe vai até você.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
          >
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </main>
  );
}
