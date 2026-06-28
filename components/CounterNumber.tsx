"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function parse(val: string): { prefix: string; num: number; suffix: string } | null {
  const m = val.match(/^([+]?)(\d+)(.*)$/);
  if (!m || !m[2]) return null;
  return { prefix: m[1] ?? "", num: parseInt(m[2]), suffix: m[3] ?? "" };
}

export default function CounterNumber({ valor }: { valor: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const parsed = parse(valor);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || !parsed) return;
    let startTime = 0;
    const duration = 1400;
    const target = parsed.num;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [isInView, parsed?.num]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!parsed) return <span ref={ref}>{valor}</span>;

  return (
    <span ref={ref}>
      {parsed.prefix}{count}{parsed.suffix}
    </span>
  );
}
