"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /**
   * "mount" — dispara ao montar (acima do fold, ex: hero)
   * "view"  — dispara ao entrar na viewport (padrão)
   */
  trigger?: "mount" | "view";
  distance?: number;
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  trigger = "view",
  distance = 20,
}: AnimateInProps) {
  const shouldReduce = useReducedMotion();

  // Reduced motion: renderiza sem animação (conteúdo sempre visível)
  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  // Opacidade começa em 0.001 (invisível mas não 0) para evitar
  // conflito de hidratação SSR → cliente, e anima para 1
  const hidden = { opacity: 0.001, y: distance };
  const visible = { opacity: 1, y: 0 };
  const transition = { duration: 0.5, delay, ease: EASE };

  if (trigger === "mount") {
    return (
      <motion.div
        className={className}
        initial={hidden}
        animate={visible}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
