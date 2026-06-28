import type { Metadata } from "next";
import Script from "next/script";
import AnimateIn from "@/components/AnimateIn";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Movelart. Solicite um orçamento para móveis planejados na Grande Florianópolis, SC. Respondemos em até 24 horas.",
  alternates: { canonical: "https://movelart.com.br/contato" },
  openGraph: {
    title: "Contato | Movelart",
    description:
      "Solicite um orçamento ou agende uma visita técnica. Atendemos Florianópolis e região.",
    url: "https://movelart.com.br/contato",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Movelart",
  description: "Móveis planejados de alto padrão para residências na Grande Florianópolis, SC.",
  url: "https://movelart.com.br",
  telephone: "+5548963406360",
  areaServed: [
    "Florianópolis",
    "São José",
    "Palhoça",
    "Biguaçu",
    "Santo Amaro da Imperatriz",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Florianópolis",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
};

const canaisContato = [
  { titulo: "WhatsApp", descricao: "Resposta rápida em horário comercial.", valor: "(48) 96340-6360" },
  { titulo: "E-mail", descricao: "Respondemos em até 24 horas úteis.", valor: "contato@movelart.com.br" },
  { titulo: "Atendimento", descricao: "Segunda a sexta: 8h–18h · Sábado: 8h–12h", valor: null },
];

export default function ContatoPage() {
  return (
    <>
      <Script
        id="schema-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://movelart.com.br" },
          { name: "Contato", url: "https://movelart.com.br/contato" },
        ]}
      />
      <main id="main-content">
        {/* Banner */}
        <section className="pt-16 md:pt-20 bg-brand-bg border-b border-brand-border">
          <div className="container mx-auto py-10 md:py-16 max-w-3xl">
            <AnimateIn trigger="mount" delay={0} distance={16}>
              <p className="font-yantra text-brand-accent text-sm font-semibold uppercase tracking-widest mb-4">
                Contato
              </p>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight text-balance text-brand-dark">
                Vamos conversar sobre o seu projeto.
              </h1>
            </AnimateIn>
            <AnimateIn trigger="mount" delay={0.2}>
              <p className="text-brand-muted text-lg mt-5 max-w-xl leading-relaxed">
                Preencha o formulário ou entre em contato pelo canal de sua preferência.
                Nossa equipe responde em até 24 horas úteis.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Conteúdo principal */}
        <section className="py-12 md:py-20 bg-brand-surface">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Coluna esquerda — informações */}
              <AnimateIn>
                <div className="flex flex-col gap-8">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">
                      Canais de atendimento
                    </h2>
                    <div className="flex flex-col gap-4">
                      {canaisContato.map((canal) => (
                        <div
                          key={canal.titulo}
                          className="p-5 border border-brand-border rounded-md bg-brand-bg"
                        >
                          <h3 className="font-semibold text-brand-dark text-sm">{canal.titulo}</h3>
                          <p className="text-brand-muted text-sm mt-1">{canal.descricao}</p>
                          {canal.valor && (
                            <p className="font-medium text-brand-dark mt-1 text-sm">{canal.valor}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-display text-xl font-bold text-brand-dark mb-4">
                      Área de atuação
                    </h2>
                    <div className="aspect-video bg-brand-border rounded-md flex items-center justify-center">
                      <div className="text-center text-brand-muted">
                        <p className="font-medium text-sm">Google Maps embed</p>
                        <p className="text-xs mt-1">Fase 4</p>
                      </div>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {["Florianópolis", "São José", "Palhoça", "Biguaçu", "Santo Amaro"].map((c) => (
                        <li
                          key={c}
                          className="text-xs bg-brand-bg border border-brand-border rounded-full px-3 py-1 text-brand-muted"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>

              {/* Coluna direita — formulário */}
              <AnimateIn delay={0.1}>
                <div className="bg-brand-bg border border-brand-border rounded-md p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold text-brand-dark mb-6">
                    Solicitar orçamento
                  </h2>
                  <ContactForm />
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
