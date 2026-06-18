import type { Metadata } from "next";
import Script from "next/script";
import ContactForm from "@/components/ContactForm";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Movelart",
  description:
    "Móveis planejados de alto padrão para residências na Grande Florianópolis, SC. Projetos personalizados, instalação própria e garantia.",
  url: "https://movelart.com.br",
  telephone: "+5548963406360",
  priceRange: "$$$$",
  image: "https://movelart.com.br/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Florianópolis",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.5954,
    longitude: -48.548,
  },
  areaServed: [
    "Florianópolis",
    "São José",
    "Palhoça",
    "Biguaçu",
    "Santo Amaro da Imperatriz",
  ],
  sameAs: ["https://www.instagram.com/movelartoficial/"],
};

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Movelart. Preencha o formulário ou fale pelo WhatsApp. Respondemos rapidamente.",
  alternates: { canonical: "https://movelart.com.br/contato" },
  openGraph: {
    title: "Contato | Movelart",
    description:
      "Fale com a equipe da Movelart. Preencha o formulário e retornamos em até 1 dia útil. Atendemos toda a Grande Florianópolis.",
    url: "https://movelart.com.br/contato",
  },
};

export default function ContatoPage() {
  return (
    <>
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
    <main>
      {/* Hero + Formulário */}
      <section className="pt-16 md:pt-20 bg-brand-bg border-b border-brand-border">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Coluna esquerda — texto (2/5) */}
            <div className="flex flex-col gap-6 lg:col-span-2 lg:sticky lg:top-28">
              <p className="font-yantra text-brand-accent text-sm font-semibold uppercase tracking-widest">
                Contato
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight text-balance text-brand-dark">
                Vamos conversar sobre o seu projeto?
              </h1>
              <p className="text-brand-muted text-lg leading-relaxed">
                Preencha o formulário e nossa equipe entra em contato em até 1 dia útil.
              </p>
            </div>

            {/* Coluna direita — formulário (3/5) */}
            <div className="bg-brand-surface border border-brand-border rounded-md p-8 lg:col-span-3">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 bg-brand-surface">
        <div className="container mx-auto">
          <p className="font-yantra text-brand-ebony text-sm font-semibold uppercase tracking-widest mb-3">
            Localização
          </p>
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">
            Grande Florianópolis, SC
          </h2>
          <div className="w-full h-80 bg-brand-border rounded-md flex items-center justify-center">
            <div className="text-center text-brand-muted">
              <p className="font-medium">Google Maps embed</p>
              <p className="text-sm mt-1">Fase 3</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
