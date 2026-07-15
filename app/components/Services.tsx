'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import {
  m,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  type Variants,
} from 'framer-motion';
import { img } from '@/lib/images';
import { getLenis } from '@/lib/lenis';

const SERVICES = [
  {
    title: 'Corporate Events',
    desc: 'We offer a wide range of corporate event management solutions. From concept, right through to execution, our event management service functions to deliver a luxury event that is meaningful to you and your audience. We are the pioneers in creating and organizing jaw-dropping entertainment, best in class lights & sound, audio-visuals, elegant stage set-up and backdrops that will leave your clients spellbound.',
    img: '/services/corporate.jpg',
    tags: [
      'Conferences',
      'Product Launch',
      'Award Ceremonies',
      'Dealer Meets',
    ],
  },
  {
    title: 'Brand Activations',
    desc: 'We plan and design your exhibitions to display and showcase your product in the best attractive way. We focus on the most effective, customized and target oriented branding solutions for our clients. We offer our services for product launches, conferences, parties, brand development, award ceremonies and incentive events.',
    img: '/gallery/04.jpg',
    tags: [
      'Exhibition Stalls',
      'Road Shows',
      'Promotional Activities',
      'Display Activities',
    ],
  },
  {
    title: 'Orbinoz Media',
    desc: 'We provide complete event media solutions, from live coverage and promotional content to post-event highlights. Our services include end-to-end production of corporate films, branded content, and professional photography tailored to your event goals. With a strategic approach and industry-grade execution, we ensure your brand message is captured, amplified, and delivered with impact across all media platforms.',
    img: '/gallery/06.jpg',
    tags: [
      'Corporate Videos',
      'Commercial Films',
      'Photography',
      'Post-Production',
    ],
  },
  {
    title: 'Event Prop Up',
    desc: 'We do not believe in compromises and so we come up with the best. We provide best high-quality audio and visual equipment. We also give you the best solution for entertainment. We have the edge over others in terms of pricing and an added personal touch that make you feel the performers are one amongst the family.',
    img: '/gallery/10.jpg',
    tags: [
      'Light & Sound',
      'Full AV Support',
      'Celebrities',
      'Musicians',
    ],
  },
];

const COUNT = SERVICES.length;
/** One viewport of scroll per service — the sticky scene scrubs across them. */
const TRACK_VH = 100 * COUNT;

const EASE = [0.16, 1, 0.3, 1] as const;
const bgCrossfade = { duration: 1.4, ease: [0.33, 0, 0.2, 1] as const };
const kenBurns = { duration: 22, ease: 'linear' as const };

// Staggered in/out for the centred copy — title leads, tags trail.
const stack: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};
const line: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
  exit: { opacity: 0, y: -18, transition: { duration: 0.4, ease: EASE } },
};

/**
 * Sticky scroll-scrub services: the scene locks to the viewport while scroll
 * maps to the active service — full-bleed crossfading imagery behind a single
 * centred title/copy stack, a named side nav, and a scrub bar. Always dark
 * (`theme-fixed-dark`) since it lives over photography.
 */
export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(COUNT - 1, Math.max(0, Math.floor(v * COUNT)));
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  /** Smooth-scroll (via Lenis) so progress lands mid-band for this service. */
  const scrollToService = useCallback((index: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const scrollTop = window.scrollY ?? document.documentElement.scrollTop;
    const sectionTop = el.getBoundingClientRect().top + scrollTop;
    const clamped = Math.min(COUNT - 1, Math.max(0, index));
    const p = (clamped + 0.5) / COUNT;
    const targetY = sectionTop + p * (el.offsetHeight - window.innerHeight);
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(targetY, { duration: 1.1 });
    else window.scrollTo({ top: targetY, behavior: 'smooth' });
  }, []);

  const active = useMemo(() => SERVICES[activeIndex], [activeIndex]);

  return (
    <section
      ref={sectionRef}
      id='services'
      style={{ height: `${TRACK_VH}vh` }}
      className='theme-fixed-dark relative isolate scroll-mt-24 bg-ink text-paper'
    >
      <div className='sticky top-0 h-[100svh] w-full overflow-hidden'>
        {/* Full-bleed imagery — crossfade + slow Ken Burns keyed by active service */}
        <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
          <AnimatePresence initial={false} mode='sync'>
            <m.div
              key={active.img}
              className='absolute inset-0'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={bgCrossfade}
            >
              <m.div
                className='absolute inset-0'
                initial={{ scale: 1 }}
                animate={{ scale: 1.08 }}
                transition={kenBurns}
              >
                <Image
                  src={img(active.img)}
                  alt=''
                  fill
                  sizes='100vw'
                  quality={90}
                  className='object-cover'
                  priority={activeIndex === 0}
                />
              </m.div>
            </m.div>
          </AnimatePresence>
        </div>

        {/* Legibility bed — dark on the left where the copy sits, image breathes right */}
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 bg-ink/35'
        />
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20 sm:via-ink/70 sm:to-transparent lg:via-ink/45'
        />
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/25'
        />

        {/* Content — left-aligned editorial column: eyebrow / detail / nav */}
        <div className='relative z-10 mx-auto grid h-full max-w-[1440px] grid-rows-[auto_1fr_auto] px-6 pb-14 pt-28 sm:px-10 sm:pb-16 sm:pt-32'>
          <p className='eyebrow'>What we do</p>

          <div className='flex items-center'>
            <AnimatePresence mode='wait' initial={false}>
              <m.div
                key={active.title}
                role='group'
                aria-roledescription='slide'
                aria-label={active.title}
                variants={stack}
                initial='hidden'
                animate='show'
                exit='exit'
                className='w-full'
              >
                <m.h2
                  variants={line}
                  className='max-w-2xl font-display text-[clamp(2.3rem,5.5vw,4.5rem)] font-light leading-[1] tracking-[-0.03em] text-paper'
                >
                  {active.title}
                </m.h2>
                <m.div
                  variants={line}
                  className='mt-6 flex flex-nowrap gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
                >
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className='shrink-0 whitespace-nowrap rounded-full border border-accent-bright/25 bg-accent-bright/5 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-accent-bright sm:text-xs'
                    >
                      {t}
                    </span>
                  ))}
                </m.div>
                <m.p
                  variants={line}
                  className='mt-6 max-w-xl text-pretty text-[0.95rem] leading-relaxed text-paper/75 sm:text-base'
                >
                  {active.desc}
                </m.p>
              </m.div>
            </AnimatePresence>
          </div>

          {/* Carousel control — matches the hero's slide indicators */}
          <nav aria-label='Services' className='flex items-center gap-2.5'>
            {SERVICES.map((s, i) => {
              const on = i === activeIndex;
              return (
                <button
                  key={s.title}
                  type='button'
                  aria-label={`Show ${s.title}`}
                  aria-current={on || undefined}
                  onClick={() => scrollToService(i)}
                  className='group flex h-11 items-center py-2 outline-none'
                >
                  <span className='block h-[3px] w-9 overflow-hidden rounded-sm bg-paper/25'>
                    <span
                      className={`block h-full bg-paper transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        on ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}
