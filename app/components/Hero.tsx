'use client';

import { useEffect, useRef, useState } from 'react';
import {
  m,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import Image from 'next/image';
import { ArrowRight01Icon, ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { AnimatedHeading } from './motion';
import { Icon } from './ui/hugeicon';
import { img } from '@/lib/images';

const EASE = [0.16, 1, 0.3, 1] as const;
const INTERVAL = 5200;

const SLIDES = [
  {
    src: '/hero/1.jpg',
    kicker: 'Product Launches',
    heading: 'Launches that land.',
  },
  {
    src: '/hero/2.jpg',
    kicker: 'Conferences & Summits',
    heading: 'Rooms that lean in.',
  },
  {
    src: '/hero/3.jpg',
    kicker: 'Live Entertainment',
    heading: 'Energy, on cue.',
  },
  {
    src: '/hero/4.jpg',
    kicker: 'Brand Experiences',
    heading: 'Brands, made to feel.',
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  // Scroll-linked parallax as the hero leaves the viewport (rides Lenis).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      INTERVAL,
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section
      id='home'
      ref={sectionRef}
      className='relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink'
    >
      {/* Slideshow background */}
      <m.div
        style={reduce ? undefined : { scale: bgScale, y: bgY }}
        className='absolute inset-0'
      >
        <AnimatePresence>
          <m.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: EASE }}
            className='absolute inset-0'
          >
            {/* Ken Burns on a wrapper so <Image fill> can optimize the photo */}
            <m.div
              initial={{ scale: reduce ? 1 : 1.06 }}
              animate={{ scale: reduce ? 1 : 1.16 }}
              transition={{ duration: INTERVAL / 1000 + 1.6, ease: 'linear' }}
              className='absolute inset-0'
            >
              <Image
                src={img(SLIDES[index].src)}
                alt={SLIDES[index].heading}
                fill
                preload={index === 0}
                sizes='100vw'
                className='object-cover'
              />
            </m.div>
          </m.div>
        </AnimatePresence>
      </m.div>

      {/* Legibility scrims: overall tint, soft at top for the nav, heavy at base */}
      <div className='pointer-events-none absolute inset-0 bg-ink/30' />
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-transparent' />
      <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,var(--color-ink)_0%,rgba(22,21,15,0.55)_42%,transparent_78%)]' />

      {/* Content */}
      <m.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className='relative z-10 mx-auto flex h-full max-w-[1440px] flex-col px-5 sm:px-8'
      >
        {/* Bottom cluster */}
        <div className='mt-auto pb-14 sm:pb-16'>
          <div className='flex flex-col gap-11 lg:flex-row lg:items-end lg:justify-between lg:gap-16'>
            {/* Headline + actions */}
            <div className='max-w-4xl'>
              {/* Eyebrow, just above the headline */}
              <m.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
                className='mb-6 flex items-center gap-2.5 text-[0.74rem] font-medium uppercase tracking-[0.16em] text-paper/70'
              >
                Corporate event studio, Kochi
              </m.p>
              <h1 className='font-display text-[clamp(2.9rem,8vw,7rem)] font-light leading-[0.96] tracking-[-0.03em] text-paper'>
                <AnimatedHeading text='Moments engineered' delay={0.15} />
                <br />
                <AnimatedHeading
                  text='to feel inevitable.'
                  delay={0.3}
                  wordClassName={(w) =>
                    w.startsWith('inevitable')
                      ? 'italic text-accent-bright'
                      : ''
                  }
                />
              </h1>

              <m.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.75 }}
                className='mt-8 flex flex-col items-start gap-5'
              >
                <p className='max-w-md text-[1.05rem] leading-relaxed text-paper/75'>
                  We plan, produce and run corporate events, start to finish.
                </p>
                <div className='flex flex-wrap items-center gap-6'>
                  <a
                    href='#gallery'
                    className='group inline-flex items-center gap-1.5 text-sm font-medium text-paper'
                  >
                    <span className='link-underline'>See our work</span>
                    <Icon
                      icon={ArrowRight01Icon}
                      size={15}
                      className='transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1'
                    />
                  </a>
                </div>
              </m.div>
            </div>

            {/* Slide meta + indicators */}
            <m.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.95 }}
              className='shrink-0 lg:w-56 lg:text-right'
            >
              <div className='h-5 overflow-hidden'>
                <AnimatePresence mode='wait'>
                  <m.p
                    key={index}
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-110%' }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className='text-xs font-medium uppercase tracking-[0.2em] text-paper/60'
                  >
                    {SLIDES[index].kicker}
                  </m.p>
                </AnimatePresence>
              </div>

              <div className='mt-4 flex items-center gap-2.5 lg:justify-end'>
                {SLIDES.map((s, i) => (
                  <button
                    key={s.src}
                    onClick={() => setIndex(i)}
                    aria-label={`Show ${s.kicker}`}
                    className='group flex h-11 items-center py-2'
                  >
                    <span className='block h-[3px] w-9 overflow-hidden rounded-sm bg-paper/25'>
                      {i === index ? (
                        <m.span
                          key={index}
                          initial={{ scaleX: reduce ? 1 : 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: reduce ? 0 : INTERVAL / 1000,
                            ease: 'linear',
                          }}
                          className='block h-full w-full origin-left bg-paper'
                        />
                      ) : (
                        <span className='block h-full w-0 bg-paper transition-[width] duration-500 group-hover:w-full' />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </m.div>

      {/* Scroll cue */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 1.2 }}
        style={reduce ? undefined : { opacity: contentOpacity }}
        className='pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block'
      >
        <m.div
          animate={reduce ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
          className='text-paper/50'
        >
          <Icon icon={ArrowDown01Icon} size={22} />
        </m.div>
      </m.div>
    </section>
  );
}
