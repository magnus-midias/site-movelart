"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
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
  // Sempre começa visível (opacity: 1) — apenas anima posição Y
  // Isso evita hydration mismatch e garante conteúdo sempre acessível
  const hidden = { y: distance };
  const visible = { y: 0 };
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
