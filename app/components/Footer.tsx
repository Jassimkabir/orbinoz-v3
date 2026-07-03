import {
  ArrowRight01Icon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterIcon,
  Facebook01Icon,
} from "@hugeicons/core-free-icons";
import { Icon } from "./ui/hugeicon";

const SOCIALS = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: Linkedin01Icon },
  { label: "Twitter", href: "#", icon: NewTwitterIcon },
  { label: "Facebook", href: "#", icon: Facebook01Icon },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8">
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-14 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.14em] text-paper/50">Corporate event studio</p>
            <p className="mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.6rem)] font-light leading-[1.02] tracking-[-0.02em]">
              Let&apos;s make the next one inevitable.
            </p>
          </div>
          <a href="#contact" className="group inline-flex items-center gap-2 self-start rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 md:self-auto">
            Start a project
            <Icon
              icon={ArrowRight01Icon}
              size={16}
              className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#home" className="font-display text-3xl tracking-tight">Orbinoz</a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Orbinoz Event Planners Pvt. Ltd.<br />
              Chembumukku, Vazhakkala, Kochi, Kerala 682030
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.14em] text-paper/40">Navigate</p>
            <nav className="mt-4 flex flex-col gap-2.5 text-paper/75">
              <a href="#about" className="link-underline w-fit">About</a>
              <a href="#services" className="link-underline w-fit">Services</a>
              <a href="#gallery" className="link-underline w-fit">Work</a>
              <a href="#contact" className="link-underline w-fit">Contact</a>
            </nav>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.14em] text-paper/40">Connect</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper/75 transition-colors duration-300 hover:border-paper hover:text-paper"
                >
                  <Icon icon={s.icon} size={18} />
                </a>
              ))}
            </div>
            <a href="mailto:info@orbinozevents.com" className="link-underline mt-5 inline-block text-paper">
              info@orbinozevents.com
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 text-xs text-paper/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Orbinoz Event Planners Pvt. Ltd.</p>
          <p>Kochi · Kerala · India</p>
        </div>
      </div>
    </footer>
  );
}
