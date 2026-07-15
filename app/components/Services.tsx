"use client";

import { useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { Reveal } from "./motion";
import { Icon } from "./ui/hugeicon";
import { img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const SERVICES = [
  {
    title: "Corporate Events",
    desc: "Full corporate event management, from concept to execution. Entertainment, best-in-class light and sound, AV and elegant stage sets that leave the room spellbound.",
    img: "/gallery/01.jpg",
    tags: ["Conferences", "Product Launches", "Award Nights", "Dealer Meets"],
  },
  {
    title: "Brand Activations",
    desc: "Exhibitions and activations that put your product in its best light. Customised, target-oriented branding for launches, road shows and promotions.",
    img: "/gallery/04.jpg",
    tags: ["Exhibition Stalls", "Road Shows", "Promotions", "Displays"],
  },
  {
    title: "Orbinoz Media",
    desc: "Complete event media, from live coverage to post-event highlights. Corporate films, branded content, brand stories and photography that carry your message further.",
    img: "/gallery/06.jpg",
    tags: ["Corporate Films", "Photography", "Brand Stories", "Post-production"],
  },
  {
    title: "Event Prop Up",
    desc: "The gear and the talent, sorted. Light and sound, LED floors, live musicians, anchors and celebrities, with pricing and a personal touch that feel like family.",
    img: "/gallery/10.jpg",
    tags: ["Light & Sound", "LED Floor", "Musicians", "Anchors"],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="scroll-mt-24 bg-paper-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">What we do</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-2xl font-display text-[clamp(2rem,4.4vw,3.4rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
                One studio for the whole event.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-ink-2">
              Tap any service to see it in action. Take one, or hand us the
              whole event. Either way it stays with one team.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 border-t border-line sm:mt-16">
          {SERVICES.map((s, i) => {
            const open = active === i;
            return (
              <div key={s.title} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setActive(open ? -1 : i)}
                  aria-expanded={open}
                  className="group flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <h3
                    className={`font-display text-[1.7rem] font-light leading-tight tracking-[-0.01em] transition-colors duration-300 sm:text-4xl ${
                      open ? "text-accent" : "text-ink"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <m.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
                      open
                        ? "border-accent text-accent"
                        : "border-line text-ink group-hover:border-ink"
                    }`}
                  >
                    <Icon icon={PlusSignIcon} size={18} />
                  </m.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <m.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.55, ease: EASE },
                        opacity: { duration: 0.4, ease: EASE },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-9 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                          <m.div
                            initial={{ scale: 1.12 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.9, ease: EASE }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={img(s.img)}
                              alt={s.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 45vw"
                              placeholder="blur"
                              className="object-cover"
                            />
                          </m.div>
                        </div>
                        <div>
                          <p className="text-lg leading-relaxed text-ink-2">
                            {s.desc}
                          </p>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {s.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-md border border-line px-3.5 py-1.5 text-sm text-ink-2"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
