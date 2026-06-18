import type { Metadata } from "next";
import { Open_Sans, Yantramanav, Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
    default: "Movelart | Móveis Planejados em Florianópolis",
    template: "%s | Movelart",
  },
  description:
    "Móveis planejados de alto padrão para residências na Grande Florianópolis, SC. Projetos personalizados, instalação própria e garantia.",
  metadataBase: new URL("https://movelart.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Movelart",
    title: "Movelart | Móveis Planejados em Florianópolis",
    description:
      "Móveis planejados de alto padrão para residências na Grande Florianópolis, SC. Projetos personalizados, instalação própria e garantia.",
    url: "https://movelart.com.br",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Movelart — Móveis Planejados em Florianópolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Movelart | Móveis Planejados em Florianópolis",
    description:
      "Móveis planejados de alto padrão para residências na Grande Florianópolis, SC.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${openSans.variable} ${yantramanav.variable} ${mulish.variable}`}>
      <body className="antialiased font-sans bg-brand-bg text-brand-dark">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
