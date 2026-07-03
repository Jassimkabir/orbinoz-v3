'use client';

import { SparklesIcon } from '@hugeicons/core-free-icons';
import { Reveal, AnimatedHeading } from './motion';
import { Icon } from './ui/hugeicon';

const CAPS = [
  'Corporate Events',
  'Entertainment',
  'Stage & Production',
  'Audio · Visual',
  'Brand Experiences',
  'Concept to Execution',
];

const STATS = [
  { n: '9+', label: 'Years in production' },
  { n: '17+', label: 'Brand partners' },
  { n: '360°', label: 'In-house delivery' },
  { n: '1', label: 'Team, start to finish' },
];

export default function About() {
  return (
    <>
      {/* Capabilities marquee */}
      <div className='mt-24 flex select-none overflow-hidden border-y border-line py-5 sm:mt-32'>
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
        className='mx-auto max-w-[1440px] scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32'
      >
        <div className='grid gap-14 lg:grid-cols-12'>
          <div className='lg:col-span-4'>
            <Reveal>
              <p className='eyebrow'>About the studio</p>
            </Reveal>
          </div>

          <div className='lg:col-span-8'>
            <h2 className='font-display text-[clamp(1.8rem,3.6vw,3.1rem)] font-light leading-[1.12] tracking-[-0.02em] text-ink'>
              <AnimatedHeading text='For over nine years, Orbinoz has built corporate experiences that make stronger brands, real connections and lasting impressions.' />
            </h2>

            <div className='mt-10 grid gap-8 text-ink-2 md:grid-cols-2'>
              <Reveal delay={0.05}>
                <p className='text-[1.02rem] leading-relaxed'>
                  From the first concept to the final cue, we keep it in-house -
                  planning, staging, entertainment, production and audio-visual.
                  One team, one line of accountability, no handoffs.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className='text-[1.02rem] leading-relaxed'>
                  We obsess over the details others overlook and the
                  coordination nobody sees. That is what makes an event feel
                  effortless in the room - and inevitable in hindsight.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className='mt-20 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-line pt-12 md:grid-cols-4'>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div>
                <div className='font-display text-5xl font-light tracking-tight text-ink sm:text-6xl'>
                  {s.n}
                </div>
                <div className='mt-3 text-sm text-muted'>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
