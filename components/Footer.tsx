import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/empresa", label: "Empresa" },
  { href: "/ambientes", label: "Ambientes" },
  { href: "/processo", label: "Nosso Processo" },
  { href: "/contato", label: "Contato" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/movelartoficial/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5548996340636"}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de saber mais sobre móveis sob medida.")}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.856L.057 23.882a.5.5 0 0 0 .61.61l6.026-1.475A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 0 1-5.031-1.382l-.36-.214-3.733.914.932-3.622-.235-.373A9.808 9.808 0 0 1 2.182 12C2.182 6.58 6.58 2.182 12 2.182c5.421 0 9.818 4.398 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="container mx-auto py-10 md:py-12">
        {/*
          Mobile: logo full-width em cima, nav + contato lado a lado em baixo
          Desktop: 3 colunas iguais
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">

          {/* Logo + tagline + sociais — full width no mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <Logo variant="dark" />
            <p className="text-sm text-brand-muted max-w-xs leading-relaxed">
              Móveis sob medida de alto padrão para a sua casa.
              Grande Florianópolis, SC.
            </p>
            <div className="flex items-center gap-1 mt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-brand-muted hover:text-brand-accent transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h3 className="font-yantra text-xs font-semibold uppercase tracking-widest text-brand-ebony mb-4">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-brand-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="font-yantra text-xs font-semibold uppercase tracking-widest text-brand-ebony mb-4">
              Contato
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-brand-muted">
              <li>São José, SC</li>
              <li>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5548996340636"}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de saber mais sobre móveis sob medida.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-dark transition-colors"
                >
                  (48) 99634-0636
                </a>
              </li>
              <li>
                <a href="mailto:contato@moveismovelart.com.br" className="hover:text-brand-dark transition-colors">
                  contato@moveismovelart.com.br
                </a>
              </li>
              <li className="leading-relaxed">Exclusivamente com horário agendado</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-brand-border">
        <div className="container mx-auto py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brand-muted">
          <span>© {year} Movelart. Todos os direitos reservados.</span>
          <span>
            Desenvolvido por{" "}
            <a
              href="https://magnusmidias.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-dark hover:text-brand-accent transition-colors"
            >
              Magnus Mídias
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
