"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { Icon } from "./hugeicon";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Select…",
  id,
  variant = "filled",
  tone = "light",
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  id?: string;
  variant?: "filled" | "underline";
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const choose = (opt: string) => {
    onChange(opt);
    setOpen(false);
    btn.current?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setActive(Math.max(0, options.indexOf(value)));
        setOpen(true);
      }
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(options.length - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(options[active]);
    }
  };

  const underline = variant === "underline";
  const dark = tone === "dark";
  const triggerCls = underline
    ? `flex w-full items-center justify-between border-b bg-transparent pb-3 pt-1 text-left outline-none transition-colors duration-300 ${
        open
          ? dark
            ? "border-accent-bright"
            : "border-accent"
          : dark
            ? "border-white/25 hover:border-white/45"
            : "border-line hover:border-ink/40"
      }`
    : `flex w-full items-center justify-between rounded-xl border bg-paper/50 px-4 py-3.5 text-left transition duration-300 focus:outline-none focus:ring-4 focus:ring-accent/10 ${
        open ? "border-accent bg-card" : "border-line hover:border-ink/25"
      }`;

  return (
    <div ref={root} className="relative">
      <div className="relative">
        <button
          id={id}
          ref={btn}
          type="button"
          onClick={() => {
            setActive(Math.max(0, options.indexOf(value)));
            setOpen((o) => !o);
          }}
          onKeyDown={onKeyDown}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={triggerCls}
        >
          <span
            className={
              value
                ? dark
                  ? "text-paper"
                  : "text-ink"
                : dark
                  ? "text-paper/50"
                  : "text-muted/70"
            }
          >
            {value || placeholder}
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className={`flex ${dark ? "text-paper/60" : "text-muted"}`}
          >
            <Icon icon={ArrowDown01Icon} size={18} />
          </motion.span>
        </button>
        {underline && (
          <span
            className={`absolute bottom-0 left-0 h-px w-full origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              dark ? "bg-accent-bright" : "bg-accent"
            } ${open ? "scale-x-100" : "scale-x-0"}`}
          />
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: EASE }}
            className="absolute left-0 top-full z-30 mt-2 w-full origin-top overflow-hidden rounded-xl border border-line bg-card p-1.5 shadow-[0_24px_50px_-24px_rgba(20,19,15,0.4)]"
          >
            {options.map((opt, i) => {
              const selected = value === opt;
              return (
                <li
                  key={opt}
                  role="option"
                  aria-selected={selected}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => choose(opt)}
                  className={`flex cursor-pointer items-center justify-between rounded-lg px-3.5 py-2.5 text-sm transition-colors ${
                    active === i ? "bg-accent-soft text-ink" : "text-ink-2"
                  }`}
                >
                  <span>{opt}</span>
                  {selected && <Icon icon={Tick02Icon} size={16} className="text-accent" />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
