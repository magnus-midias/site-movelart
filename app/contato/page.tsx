import type { Metadata } from "next";
import Script from "next/script";
import AnimateIn from "@/components/AnimateIn";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Movelart. Solicite um orçamento para móveis sob medida na Grande Florianópolis, SC. Respondemos em até 24 horas.",
  alternates: { canonical: "https://moveismovelart.com.br/contato" },
  openGraph: {
    title: "Contato | Movelart",
    description:
      "Solicite um orçamento ou agende uma visita técnica. Atendemos Florianópolis e região.",
    url: "https://moveismovelart.com.br/contato",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Movelart — Móveis Sob Medida",
  description: "Móveis sob medida de alto padrão para residências e empresas na Grande Florianópolis, SC.",
  url: "https://moveismovelart.com.br",
  telephone: "+5548996340636",
  email: "contato@moveismovelart.com.br",
  areaServed: [
    "Florianópolis",
    "São José",
    "Palhoça",
    "Biguaçu",
    "Santo Amaro da Imperatriz",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "São José",
    addressRegion: "SC",
    addressCountry: "BR",
  },
};

const canaisContato = [
  { titulo: "WhatsApp", descricao: "Resposta rápida. Clique para iniciar uma conversa.", valor: "(48) 99634-0636" },
  { titulo: "E-mail", descricao: "Respondemos em até 24 horas úteis.", valor: "contato@moveismovelart.com.br" },
  { titulo: "Atendimento", descricao: "Exclusivamente com horário agendado.", valor: null },
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
          { name: "Home", url: "https://moveismovelart.com.br" },
          { name: "Contato", url: "https://moveismovelart.com.br/contato" },
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
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Formulário — primeiro no mobile e esquerda no desktop */}
              <AnimateIn delay={0.05} className="order-1">
                <h2 className="font-display text-xl font-bold text-brand-dark mb-4">
                  Solicitar orçamento
                </h2>
                <div className="bg-brand-bg border border-brand-border rounded-md p-6 md:p-8">
                  <ContactForm />
                </div>
              </AnimateIn>

              {/* Canais de atendimento — segundo no mobile e direita no desktop */}
              <AnimateIn className="order-2">
                <h2 className="font-display text-xl font-bold text-brand-dark mb-4">
                  Canais de atendimento
                </h2>
                <div className="flex flex-col gap-3">
                  {canaisContato.map((canal) => (
                    <div
                      key={canal.titulo}
                      className="p-4 border border-brand-border rounded-md bg-brand-bg"
                    >
                      <h3 className="font-semibold text-brand-dark text-sm">{canal.titulo}</h3>
                      <p className="text-brand-muted text-sm mt-0.5">{canal.descricao}</p>
                      {canal.valor && (
                        <p className="font-medium text-brand-dark mt-0.5 text-sm">{canal.valor}</p>
                      )}
                    </div>
                  ))}
                </div>
              </AnimateIn>

            </div>
          </div>
        </section>

        {/* Área de atuação — seção separada, centralizada */}
        <section className="py-12 md:py-16 bg-brand-bg border-t border-brand-border">
          <div className="container mx-auto max-w-5xl">
            <AnimateIn>
              <h2 className="font-display text-xl font-bold text-brand-dark mb-6">
                Área de atuação
              </h2>
              <div className="aspect-video md:aspect-[21/7] bg-brand-border rounded-md flex items-center justify-center">
                <div className="text-center text-brand-muted">
                  <p className="font-medium text-sm">Google Maps embed</p>
                  <p className="text-xs mt-1">Fase 4</p>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {["Florianópolis", "São José", "Palhoça", "Biguaçu", "Santo Amaro"].map((c) => (
                  <li
                    key={c}
                    className="text-xs bg-brand-surface border border-brand-border rounded-full px-3 py-1 text-brand-muted"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </section>
      </main>
    </>
  );
}
