"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { AnimatedHeading } from "./motion";
import { Icon } from "./ui/hugeicon";

const EASE = [0.16, 1, 0.3, 1] as const;
const INTERVAL = 4800;

const SLIDES = [
  { src: "/hero/1.jpg", kicker: "Product Launches", heading: "Launches that land." },
  { src: "/hero/2.jpg", kicker: "Conferences & Summits", heading: "Rooms that lean in." },
  { src: "/hero/3.jpg", kicker: "Live Entertainment", heading: "Energy, on cue." },
  { src: "/hero/4.jpg", kicker: "Brand Experiences", heading: "Brands, made to feel." },
];

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  // Scroll progress across the tall stage → drives the expand-to-fullscreen.
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });
  const p = useTransform(scrollYProgress, [0, 0.62], [0, 1]);
  const width = useTransform(p, [0, 1], ["86vw", "100vw"]);
  const height = useTransform(p, [0, 1], ["66vh", "100vh"]);
  const radius = useTransform(p, [0, 1], [24, 0]);
  const captionOpacity = useTransform(p, [0.25, 0.6], [0, 1]);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      INTERVAL
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section id="home" className="relative">
      {/* Editorial intro (normal flow) */}
      <div className="mx-auto max-w-[1440px] px-5 pt-36 sm:px-8 sm:pt-44">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              className="eyebrow"
            >
              Corporate event studio, Kochi
            </motion.p>
            <h1 className="mt-7 font-display text-[clamp(2.7rem,7.4vw,6.6rem)] font-light leading-[0.98] tracking-[-0.03em] text-ink">
              <AnimatedHeading text="Moments engineered" />
              <br />
              <AnimatedHeading
                text="to feel inevitable."
                delay={0.15}
                wordClassName={(w) =>
                  w.startsWith("inevitable") ? "italic text-accent" : ""
                }
              />
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
            className="lg:col-span-3"
          >
            <p className="max-w-xs text-[1.05rem] leading-relaxed text-ink-2">
              We design, produce and run corporate events from the first idea
              to the final cue.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-solid">
                Start a project
              </a>
              <a
                href="#gallery"
                className="group inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-ink"
              >
                <span className="link-underline">See our work</span>
                <Icon
                  icon={ArrowRight01Icon}
                  size={16}
                  className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll-expand slideshow stage */}
      <div
        ref={stageRef}
        className={`relative mt-14 sm:mt-16 ${reduce ? "" : "h-[220vh]"}`}
      >
        <div
          className={`flex items-center justify-center overflow-hidden ${
            reduce ? "px-5 sm:px-8" : "sticky top-0 h-screen"
          }`}
        >
          <motion.div
            style={
              reduce
                ? undefined
                : { width, height, borderRadius: radius }
            }
            className={`relative overflow-hidden ${
              reduce ? "aspect-[16/9] w-full rounded-2xl md:aspect-[21/9]" : ""
            }`}
          >
            {/* Crossfade slideshow */}
            <AnimatePresence>
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: EASE }}
                className="absolute inset-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <motion.img
                  src={SLIDES[index].src}
                  alt={SLIDES[index].heading}
                  initial={{ scale: reduce ? 1 : 1.05 }}
                  animate={{ scale: reduce ? 1 : 1.14 }}
                  transition={{ duration: INTERVAL / 1000 + 1.5, ease: "linear" }}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Legibility gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-ink/20" />

            {/* Per-slide heading */}
            <motion.div
              style={reduce ? undefined : { opacity: captionOpacity }}
              className="absolute inset-0 flex items-end p-6 sm:p-12 lg:p-16"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="max-w-2xl text-paper"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-paper/70 sm:text-sm">
                    {SLIDES[index].kicker}
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.8rem,5vw,4.5rem)] font-light leading-[1] tracking-[-0.02em]">
                    {SLIDES[index].heading}
                  </h2>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Indicators */}
            <div className="absolute bottom-6 right-6 z-10 flex gap-2.5 sm:bottom-10 sm:right-12">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className="group flex h-6 items-center"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      i === index
                        ? "w-8 bg-paper"
                        : "w-1.5 bg-paper/50 group-hover:bg-paper/80"
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
