import type { Metadata } from "next";
import { Open_Sans, Yantramanav, Mulish } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MotionProvider from "@/components/MotionProvider";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const yantramanav = Yantramanav({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-yantra",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Movelart | Móveis Sob Medida em Florianópolis",
    template: "%s | Movelart",
  },
  description:
    "Móveis sob medida de alto padrão para residências e empresas na Grande Florianópolis, SC. Três gerações de marceneiros. Produção e instalação próprias. Garantia de 3 anos.",
  metadataBase: new URL("https://moveismovelart.com.br"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Movelart — Móveis Sob Medida",
    title: "Movelart | Móveis Sob Medida em Florianópolis",
    description:
      "Móveis sob medida de alto padrão para residências e empresas na Grande Florianópolis, SC. Três gerações de marceneiros. Produção e instalação próprias.",
    url: "https://moveismovelart.com.br",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Movelart — Móveis Sob Medida em Florianópolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Movelart | Móveis Sob Medida em Florianópolis",
    description:
      "Móveis sob medida de alto padrão para residências e empresas na Grande Florianópolis, SC.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html
      lang="pt-BR"
      className={`${openSans.variable} ${yantramanav.variable} ${mulish.variable}`}
    >
      <head>
        {gtmId && (
          <Script
            id="gtm-head"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
      </head>
      <body className="antialiased font-sans bg-brand-bg text-brand-dark">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-surface focus:text-brand-dark focus:px-4 focus:py-2 focus:rounded-md focus:border focus:border-brand-border focus:shadow-md"
        >
          Pular para o conteúdo principal
        </a>
        <MotionProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
