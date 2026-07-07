'use client';

import { useRef, type SVGProps } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion';
import { Reveal } from './motion';
import { GOOGLE_REVIEWS } from '@/lib/constants';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

type Review = (typeof GOOGLE_REVIEWS)[number];

function fmtDate(d: string) {
  const dt = new Date(d);
  return `${MONTHS[dt.getUTCMonth()]} ${dt.getUTCFullYear()}`;
}

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

function GoogleG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 48 48' {...props}>
      <path
        fill='#4285F4'
        d='M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z'
      />
      <path
        fill='#34A853'
        d='M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z'
      />
      <path
        fill='#FBBC05'
        d='M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z'
      />
      <path
        fill='#EA4335'
        d='M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z'
      />
    </svg>
  );
}

function Stars({ rating, size = 13 }: { rating: number; size?: number }) {
  return (
    <span className='flex gap-0.5' aria-label={`${rating} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox='0 0 20 20'
          fill='currentColor'
          className={i < rating ? 'text-[#f4b400]' : 'text-line'}
        >
          <path d='M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.95 2.6.95-5.5-4-3.9 5.53-.8z' />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <article className='flex w-[290px] shrink-0 flex-col rounded-2xl bg-card p-5 shadow-[0_18px_40px_-26px_rgba(20,19,15,0.4)]'>
      <div className='flex items-center justify-between'>
        <Stars rating={r.rating} />
        <GoogleG className='h-4 w-4 shrink-0 opacity-90' />
      </div>
      <p className='mt-3 line-clamp-3 text-[0.88rem] leading-relaxed text-ink-2'>
        {r.text}
      </p>
      <div className='mt-4 flex items-center gap-2.5'>
        <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-[0.7rem] font-semibold text-accent'>
          {initials(r.author)}
        </span>
        <div className='min-w-0'>
          <p className='truncate text-[0.82rem] font-medium text-ink'>
            {r.author}
          </p>
          <p className='text-[0.7rem] text-muted'>{fmtDate(r.date)}</p>
        </div>
      </div>
    </article>
  );
}

function Row({
  items,
  reverse,
  drift,
  duration,
}: {
  items: Review[];
  reverse?: boolean;
  drift?: MotionValue<string>;
  duration: number;
}) {
  return (
    <motion.div style={drift ? { x: drift } : undefined}>
      <div
        className={`flex w-max gap-4 px-4 marquee-track sm:px-6 ${
          reverse ? '[animation-direction:reverse]' : ''
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...items, ...items].map((r, i) => (
          <ReviewCard key={`${r.id}-${i}`} r={r} />
        ))}
      </div>
    </motion.div>
  );
}

const count = GOOGLE_REVIEWS.length;
const avg = (GOOGLE_REVIEWS.reduce((s, r) => s + r.rating, 0) / count).toFixed(
  1,
);
const half = Math.ceil(count / 2);
const rowA = GOOGLE_REVIEWS.slice(0, half);
const rowB = GOOGLE_REVIEWS.slice(half);

export default function Reviews() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const driftA = useTransform(scrollYProgress, [0, 1], ['3%', '-5%']);
  const driftB = useTransform(scrollYProgress, [0, 1], ['-3%', '5%']);

  return (
    <section
      id='reviews'
      ref={ref}
      className='overflow-hidden bg-paper py-16 sm:py-20'
    >
      <div className='mx-auto max-w-[1440px] px-5 sm:px-8'>
        <Reveal>
          <div className='flex flex-col items-center text-center'>
            <h2 className='font-display text-[clamp(1.9rem,4vw,3rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink'>
              Loved by the teams{' '}
              <span className='italic text-accent'>we work with</span>
            </h2>
          </div>
        </Reveal>
      </div>

      {/* Two-row marquee wall */}
      <Reveal delay={0.05} className='relative mt-12'>
        <div className='flex flex-col gap-4'>
          <Row items={rowA} drift={reduce ? undefined : driftA} duration={64} />
          <Row
            items={rowB}
            reverse
            drift={reduce ? undefined : driftB}
            duration={72}
          />
        </div>

        <div className='pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-paper to-transparent sm:w-28' />
        <div className='pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-paper to-transparent sm:w-28' />
      </Reveal>
    </section>
  );
}
