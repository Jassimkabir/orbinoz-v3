"use client";

import { SparklesIcon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Reveal, AnimatedHeading } from "./motion";
import { Icon } from "./ui/hugeicon";

const CAPS = [
  "Corporate Events",
  "Entertainment",
  "Stage & Production",
  "Audio · Visual",
  "Brand Experiences",
  "Concept to Execution",
];

export default function About() {
  return (
    <>
      {/* Capabilities marquee */}
      <div className="flex select-none overflow-hidden border-y border-line py-5">
        <div className="marquee-track flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
          {[...CAPS, ...CAPS, ...CAPS].map((c, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-2xl italic text-ink-2">{c}</span>
              <Icon icon={SparklesIcon} size={16} className="text-accent" />
            </span>
          ))}
        </div>
      </div>

      <section
        id="about"
        className="mx-auto max-w-[1440px] scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
      >
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="eyebrow">About the studio</p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <h2 className="font-display text-[clamp(1.9rem,3.9vw,3.4rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
              <AnimatedHeading text="For over nine years, we've built corporate events that make brands look stronger and stay with the people in the room." />
            </h2>

            <div className="mt-12 grid gap-8 border-t border-line pt-10 text-ink-2 md:grid-cols-2">
              <Reveal delay={0.05}>
                <p className="text-[1.05rem] leading-relaxed">
                  We keep everything in-house, from planning and staging to
                  entertainment, production and AV. One team, one point of
                  contact, and nothing lost in a handoff.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-[1.05rem] leading-relaxed">
                  We sweat the small stuff and the behind-the-scenes
                  coordination most people never notice. That's usually the
                  difference between a night that runs smoothly and one that
                  doesn't.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 text-[0.95rem] font-medium text-ink"
                >
                  <span className="link-underline">Explore our services</span>
                  <Icon
                    icon={ArrowRight01Icon}
                    size={16}
                    className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                  />
                </a>

                {/* Quiet credential line */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
                  <span className="flex items-baseline gap-1.5">
                    <span className="font-display text-xl font-light text-ink">9+</span>
                    years
                  </span>
                  <span className="hidden h-3.5 w-px bg-line sm:block" />
                  <span className="flex items-baseline gap-1.5">
                    <span className="font-display text-xl font-light text-ink">17+</span>
                    brand partners
                  </span>
                  <span className="hidden h-3.5 w-px bg-line sm:block" />
                  <span>In-house, end to end</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
