"use client";

import { motion } from "framer-motion";
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
  distance = 24,
}: AnimateInProps) {
  const hidden = { opacity: 0, y: distance };
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
