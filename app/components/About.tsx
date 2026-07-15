'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { SparklesIcon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { Reveal, AnimatedHeading } from './motion';
import { Icon } from './ui/hugeicon';
import { cn } from '@/lib/utils';

const CAPS = [
  'Corporate Events',
  'Entertainment',
  'Stage & Production',
  'Audio · Visual',
  'Brand Experiences',
  'Concept to Execution',
];

const STATS = [
  { value: 9, suffix: '+', label: 'Years in business' },
  { value: 25, suffix: '+', label: 'Brand partners' },
  { value: 700, suffix: '+', label: 'Projects delivered' },
];

/** Ease-out count from 0 → target the first time it scrolls into view. */
function Stat({
  value,
  suffix,
  label,
  className,
}: {
  value: number;
  suffix: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-12% 0px' });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]);

  return (
    <div ref={ref} className={className}>
      <div className='font-display text-[clamp(2.6rem,7vw,4.4rem)] font-light leading-none tracking-[-0.02em] text-ink'>
        <span className='tabular-nums'>{reduce ? value : display}</span>
        <span className='text-accent'>{suffix}</span>
      </div>
      <div className='mt-3 text-xs font-medium uppercase tracking-[0.14em] text-muted sm:text-sm'>
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      {/* Capabilities marquee */}
      <div className='flex select-none overflow-hidden border-y border-line py-5'>
        <div className='marquee-track flex shrink-0 items-center gap-8 whitespace-nowrap pr-8'>
          {[...CAPS, ...CAPS, ...CAPS].map((c, i) => (
            <span key={i} className='flex items-center gap-8'>
              <span className='font-display text-2xl italic text-ink-2'>
                {c}
              </span>
              <Icon icon={SparklesIcon} size={16} className='text-accent' />
            </span>
          ))}
        </div>
      </div>

      <section
        id='about'
        className='mx-auto max-w-[1440px] scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24'
      >
        <div className='grid gap-8 lg:grid-cols-12'>
          <div className='lg:col-span-3'>
            <Reveal>
              <p className='eyebrow'>About the studio</p>
            </Reveal>
          </div>

          <div className='lg:col-span-9'>
            <h2 className='font-display text-[clamp(1.9rem,3.9vw,3.4rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink'>
              <AnimatedHeading text="For over nine years, we've built corporate events that make brands look stronger and stay with the people in the room." />
            </h2>

            <div className='mt-12 grid gap-8 border-t border-line pt-10 text-ink-2 md:grid-cols-2'>
              <Reveal delay={0.05}>
                <p className='text-[1.05rem] leading-relaxed'>
                  We keep everything in-house, from planning and staging to
                  entertainment, production and AV. One team, one point of
                  contact, and nothing lost in a handoff.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className='text-[1.05rem] leading-relaxed'>
                  We sweat the small stuff and the behind-the-scenes
                  coordination most people never notice. That&apos;s usually the
                  difference between a night that runs smoothly and one that
                  doesn&apos;t.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.16}>
              <a
                href='#services'
                className='group mt-10 inline-flex items-center gap-2 text-[0.95rem] font-medium text-ink'
              >
                <span className='link-underline'>Explore our services</span>
                <Icon
                  icon={ArrowRight01Icon}
                  size={16}
                  className='transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1'
                />
              </a>
            </Reveal>

            {/* Headline stats */}
            <div className='mt-14 grid grid-cols-3 border-t border-line pt-10 sm:mt-16 sm:pt-12'>
              {STATS.map((s, i) => (
                <Reveal
                  key={s.label}
                  delay={0.05 + i * 0.1}
                  className={cn(
                    i > 0 && 'border-l border-line pl-4 sm:pl-8 lg:pl-12',
                  )}
                >
                  <Stat value={s.value} suffix={s.suffix} label={s.label} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
