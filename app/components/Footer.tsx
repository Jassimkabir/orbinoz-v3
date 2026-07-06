"use client";

import {
  ArrowUpRight01Icon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterIcon,
  Facebook01Icon,
} from "@hugeicons/core-free-icons";
import { Reveal, AnimatedHeading } from "./motion";
import { Icon } from "./ui/hugeicon";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#gallery" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: Linkedin01Icon },
  { label: "Twitter", href: "#", icon: NewTwitterIcon },
  { label: "Facebook", href: "#", icon: Facebook01Icon },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[80vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(24,136,200,0.14),transparent_66%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-16 sm:px-8 sm:pt-20">
        {/* Centered CTA */}
        <div className="flex flex-col items-center pb-24 pt-8 text-center sm:pb-32 sm:pt-12">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-paper/50">
              Have a project in mind?
            </p>
          </Reveal>
          <h2 className="mt-7 max-w-4xl font-display text-[clamp(2.4rem,7vw,6rem)] font-light leading-[0.98] tracking-[-0.02em]">
            <AnimatedHeading
              text="Let's make the next one inevitable."
              wordClassName={(w) =>
                w.startsWith("inevitable") ? "italic text-accent-bright" : ""
              }
            />
          </h2>

          <Reveal delay={0.15}>
            <div className="mt-11 flex flex-col items-center gap-6">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-accent hover:text-white"
              >
                Start a project
                <Icon
                  icon={ArrowUpRight01Icon}
                  size={17}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="mailto:info@orbinozevents.com"
                className="text-paper/70 transition-colors hover:text-paper"
              >
                <span className="link-underline">info@orbinozevents.com</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Meta row */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 md:flex-row">
          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-paper/70 transition-colors hover:text-paper"
              >
                <span className="link-underline">{n.label}</span>
              </a>
            ))}
          </nav>
          <div className="flex gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-paper/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-bright hover:text-paper"
              >
                <Icon icon={s.icon} size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative mx-auto max-w-[1440px] px-5 pb-9 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-paper/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Orbinoz Event Planners Pvt. Ltd.</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/logo-white.webp"
            alt="Orbinoz"
            className="h-5 w-auto opacity-80"
          />
          <p>Kochi · Kerala · India</p>
        </div>
      </div>
    </footer>
  );
}
