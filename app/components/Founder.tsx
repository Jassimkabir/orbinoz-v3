'use client';

import { motion } from 'framer-motion';
import { Reveal } from './motion';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Founder() {
  return (
    <section id='founder' className='scroll-mt-24 py-24 sm:py-32'>
      <div className='mx-auto max-w-[1440px] px-5 sm:px-8'>
        <div className='grid items-center gap-12 lg:grid-cols-12 lg:gap-16'>
          {/* Portrait */}
          <div className='lg:col-span-5'>
            <div className='relative mx-auto max-w-sm overflow-hidden rounded-2xl lg:mx-0 lg:max-w-none'>
              <motion.div
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 1.3, ease: EASE }}
                className='aspect-[4/5]'
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/founder.jpg'
                  alt='Amal Roy Paul, Managing Director of Orbinoz Event Planners'
                  className='h-full w-full object-cover'
                />
              </motion.div>
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/15 to-transparent' />
            </div>
          </div>

          {/* Note */}
          <div className='lg:col-span-7'>
            <Reveal>
              <p className='eyebrow'>Founder&apos;s note</p>
            </Reveal>

            <span
              aria-hidden
              className='mt-4 block font-display text-7xl leading-none text-accent sm:text-8xl'
            >
              &ldquo;
            </span>

            <blockquote className='-mt-6 font-display text-[clamp(1.5rem,2.9vw,2.4rem)] font-light leading-[1.28] tracking-[-0.01em] text-ink'>
              <Reveal delay={0.05}>
                <p>
                  At Orbinoz, we believe corporate events are more than
                  gatherings — they are{' '}
                  <span className='italic text-accent'>
                    strategic brand moments
                  </span>
                  .
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className='mt-6 text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.5] text-ink-2'>
                  Every experience we design is built with purpose, aligned with
                  business goals, and executed to create lasting impact. We
                  don&apos;t just manage events — we craft platforms where
                  brands communicate, connect, and grow.
                </p>
              </Reveal>
            </blockquote>

            <Reveal delay={0.16}>
              <figcaption className='mt-10 flex items-center gap-4'>
                <span>
                  <span className='block font-display text-xl text-ink'>
                    Amal Roy Paul
                  </span>
                  <span className='block text-sm text-muted'>
                    Managing Director · Orbinoz Event Planners Pvt Ltd
                  </span>
                </span>
              </figcaption>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
