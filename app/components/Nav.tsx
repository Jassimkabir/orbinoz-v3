"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu01Icon, Cancel01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "./ui/hugeicon";

const LINKS = [
  { id: "#about", label: "About" },
  { id: "#services", label: "Services" },
  { id: "#gallery", label: "Work" },
  { id: "#contact", label: "Contact" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ${
        solid
          ? "border-b border-line bg-paper/80 py-3.5 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-2xl tracking-tight text-ink">
          Orbinoz
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={l.id}
              className="link-underline text-[0.95rem] text-ink-2 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-solid !py-2.5 !text-sm">
            Start a project
            <Icon icon={ArrowRight01Icon} size={16} />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex"
            >
              <Icon icon={open ? Cancel01Icon : Menu01Icon} size={26} />
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={l.id}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-ink"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
