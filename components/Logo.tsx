import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-brand-bg" : "text-brand-dark";
  const iconSrc = variant === "light" ? "/images/icone-branco.svg" : "/images/icone-vermelho.svg";

  return (
    <Link href="/" className="inline-flex items-center gap-2.5 shrink-0">
      <Image
        src={iconSrc}
        alt="Movelart"
        width={36}
        height={42}
        className="h-9 w-auto"
        priority
      />
      <span className={`font-display font-bold text-lg tracking-tight ${textColor}`}>
        Movelart
      </span>
    </Link>
  );
}
