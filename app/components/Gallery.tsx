"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { Cancel01Icon, ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Reveal } from "./motion";
import { Icon } from "./ui/hugeicon";
import { img } from "@/lib/images";

const PATHS = Array.from({ length: 13 }, (_, i) => `/gallery/${String(i + 1).padStart(2, "0")}.jpg`);

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) =>
      setOpen((cur) => (cur === null ? cur : (cur + dir + PATHS.length) % PATHS.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  return (
    <section id="gallery" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <Reveal><p className="eyebrow">Selected work</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.4rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
                Rooms we&apos;ve moved.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="hidden max-w-[15rem] text-right text-sm text-muted sm:block">
              A few recent productions. Ask us for the full portfolio.
            </p>
          </Reveal>
        </div>

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {PATHS.map((src, i) => (
            <m.button
              key={src}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 4) * 0.06 }}
              className="group block w-full overflow-hidden rounded-xl"
            >
              <Image
                src={img(src)}
                alt="Orbinoz event"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                placeholder="blur"
                className="h-auto w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />
            </m.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <m.div
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-10"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-paper transition-colors hover:bg-white/10"
            >
              <Icon icon={Cancel01Icon} size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              aria-label="Previous"
              className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 text-paper transition-colors hover:bg-white/10 sm:left-8"
            >
              <Icon icon={ArrowLeft01Icon} size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label="Next"
              className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 text-paper transition-colors hover:bg-white/10 sm:right-8"
            >
              <Icon icon={ArrowRight01Icon} size={20} />
            </button>

            <AnimatePresence mode="wait">
              <m.div
                key={open}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <Image
                  src={img(PATHS[open])}
                  alt="Orbinoz event"
                  sizes="90vw"
                  className="h-auto max-h-[85vh] w-auto max-w-[90vw] rounded-lg object-contain"
                />
              </m.div>
            </AnimatePresence>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-paper/70">
              {open + 1} / {PATHS.length}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}
