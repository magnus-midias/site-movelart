import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-16 md:pt-20 min-h-[70vh] flex items-center">
      <div className="container mx-auto py-20 text-center flex flex-col items-center gap-6">
        <p className="font-yantra text-brand-accent font-bold text-6xl" aria-hidden="true">404</p>
        <h1 className="font-display text-3xl font-bold text-brand-dark">Página não encontrada</h1>
        <p className="text-brand-muted max-w-md">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
          >
            Voltar ao início
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center border border-brand-border hover:border-brand-accent text-brand-dark hover:text-brand-accent font-semibold px-8 py-4 rounded-md transition-colors min-h-[44px]"
          >
            Falar conosco
          </Link>
        </div>
      </div>
    </main>
  );
}
