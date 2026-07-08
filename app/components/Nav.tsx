'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { m, AnimatePresence } from 'framer-motion';
import {
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterIcon,
  Facebook01Icon,
} from '@hugeicons/core-free-icons';
import { Icon } from './ui/hugeicon';
import { LOGO_BLACK, LOGO_WHITE } from '@/lib/images';

const EASE = [0.16, 1, 0.3, 1] as const;

const LINKS = [
  { id: '#about', label: 'About' },
  { id: '#services', label: 'Services' },
  { id: '#gallery', label: 'Work' },
  { id: '#clients', label: 'Clients' },
];

const SOCIALS = [
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'LinkedIn', icon: Linkedin01Icon },
  { label: 'Twitter', icon: NewTwitterIcon },
  { label: 'Facebook', icon: Facebook01Icon },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);
  const linksBase = 0.3; // links reveal after the panel has mostly opened
  const light = !solid && !open; // light-on-transparent while over the hero

  return (
    <>
      {/* Header stays on top; the menu grows out from underneath it */}
      <m.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ${
          open
            ? 'bg-paper py-6'
            : solid
              ? 'border-b border-line bg-paper/80 py-3.5 backdrop-blur-xl'
              : 'border-b border-transparent py-6'
        }`}
      >
        <nav className='mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8'>
          <a
            href='#home'
            onClick={close}
            aria-label='Orbinoz, home'
            className='flex items-center'
          >
            <Image
              src={light ? LOGO_WHITE : LOGO_BLACK}
              alt='Orbinoz'
              loading='eager'
              sizes='150px'
              className='h-8 w-auto transition-opacity duration-300 sm:h-9'
            />
          </a>

          <div className='hidden items-center gap-9 md:flex'>
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={l.id}
                className={`link-underline text-[0.95rem] transition-colors duration-300 ${
                  light
                    ? 'text-paper/85 hover:text-paper'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href='#contact'
              className={`inline-flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-accent hover:text-white ${
                light ? 'bg-paper text-ink' : 'bg-ink text-paper'
              }`}
            >
              Get in touch
              <Icon icon={ArrowRight01Icon} size={16} />
            </a>
          </div>

          {/* Hamburger that morphs into an X in place */}
          <m.button
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.86 }}
            transition={{ duration: 0.2, ease: EASE }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className='-mr-1.5 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden'
          >
            <span
              className={`h-px w-6 transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                light ? 'bg-paper' : 'bg-ink'
              } ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-6 transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                light ? 'bg-paper' : 'bg-ink'
              } ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
            />
          </m.button>
        </nav>
      </m.header>

      {/* Menu panel: expands from the top, seamless with the header */}
      <AnimatePresence>
        {open && (
          <m.div
            key='menu'
            data-lenis-prevent
            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{
              clipPath: 'inset(0% 0% 100% 0%)',
              transition: { duration: 0.5, ease: EASE, delay: 0.05 },
            }}
            transition={{ duration: 0.62, ease: EASE }}
            className='fixed inset-0 z-40 flex flex-col bg-paper pt-20 text-ink md:hidden'
          >
            <nav className='flex flex-1 flex-col justify-center gap-1 px-6'>
              {LINKS.map((l, i) => (
                <div key={l.id} className='overflow-hidden py-1'>
                  <m.a
                    href={l.id}
                    onClick={close}
                    initial={{ y: '115%' }}
                    animate={{ y: '0%' }}
                    exit={{ opacity: 0, transition: { duration: 0.18 } }}
                    transition={{
                      duration: 0.75,
                      ease: EASE,
                      delay: linksBase + i * 0.07,
                    }}
                    className='block font-display text-[3.4rem] font-light leading-[1.1] tracking-[-0.01em] text-ink transition-colors hover:text-accent'
                  >
                    {l.label}
                  </m.a>
                </div>
              ))}

              <m.a
                href='#contact'
                onClick={close}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{
                  delay: linksBase + LINKS.length * 0.07,
                  duration: 0.5,
                  ease: EASE,
                }}
                className='mt-8 inline-flex w-fit items-center gap-2.5 rounded-xl bg-ink px-7 py-3.5 text-sm font-medium text-paper'
              >
                Get in touch
                <Icon icon={ArrowUpRight01Icon} size={16} />
              </m.a>
            </nav>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ delay: 0.55, duration: 0.5, ease: EASE }}
              className='flex flex-col gap-4 border-t border-line px-6 py-7'
            >
              <a
                href='mailto:info@orbinozevents.com'
                className='text-ink-2 transition-colors hover:text-ink'
              >
                info@orbinozevents.com
              </a>
              <div className='flex gap-2.5'>
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href='#'
                    aria-label={s.label}
                    className='flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-2 transition-colors hover:border-ink hover:text-ink'
                  >
                    <Icon icon={s.icon} size={17} />
                  </a>
                ))}
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
