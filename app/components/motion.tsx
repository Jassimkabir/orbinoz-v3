"use client";

import { m, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

/** Fade/slide a block in when it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </m.div>
  );
}

/**
 * Word-by-word masked reveal for headings. Each word rides up from behind a
 * clipping line. `as` lets the caller pick the heading level/element.
 */
export function AnimatedHeading({
  text,
  className,
  wordClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: (word: string, i: number) => string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <m.span
      className={className}
      style={{ display: "inline" }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: delay } } }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
            paddingTop: "0.12em",
            paddingBottom: "0.2em",
            marginTop: "-0.12em",
            marginBottom: "-0.2em",
          }}
        >
          <m.span
            style={{ display: "inline-block", willChange: "transform" }}
            className={wordClassName?.(w, i)}
            variants={{
              hidden: { y: "118%" },
              show: { y: "0%", transition: { duration: 0.85, ease: EASE } },
            }}
          >
            {w}
          </m.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </m.span>
  );
}
