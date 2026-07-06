'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './motion';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Founder() {
  const frame = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['3.5%', '-3.5%']);

  return (
    <section id='founder' className='scroll-mt-24 py-20 sm:py-28'>
      <div className='mx-auto max-w-[1200px] px-5 sm:px-8'>
        <div className='grid items-center gap-12 lg:grid-cols-12 lg:gap-14'>
          {/* Portrait: clipped at the bottom, head crests the frame */}
          <div className='lg:col-span-4'>
            <motion.div
              ref={frame}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.9, ease: EASE }}
              className='relative mx-auto aspect-[4/5] w-full max-w-[16rem] sm:max-w-[18rem]'
            >
              {/* Cobalt background panel */}
              <div className='absolute inset-x-0 bottom-0 top-[9%] overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-accent to-[#0e6aa4]'>
                <div className='absolute -top-12 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-white/15 blur-2xl' />
                <div className='absolute inset-0 bg-[radial-gradient(120%_75%_at_50%_120%,rgba(0,0,0,0.3),transparent_58%)]' />
              </div>

              {/* Image: open at the top, clipped (rounded) at the bottom */}
              <div className='absolute inset-x-0 bottom-0 -top-[28%] overflow-hidden rounded-b-[1.75rem]'>
                <motion.div style={{ y: imgY }} className='absolute inset-0'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src='/founder-cutout.webp'
                    alt='Amal Roy Paul, Managing Director of Orbinoz Event Planners'
                    className='absolute bottom-[-3%] left-1/2 w-[94%] max-w-none -translate-x-1/2'
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Note */}
          <div className='lg:col-span-7 lg:col-start-6'>
            <Reveal>
              <p className='eyebrow'>Founder&apos;s note</p>
            </Reveal>

            <blockquote className='mt-6'>
              <Reveal delay={0.04}>
                <p className='font-display text-[clamp(1.35rem,2.6vw,2.1rem)] font-light leading-[1.3] tracking-[-0.01em] text-ink'>
                  At Orbinoz we believe that corporate events are more than just
                  gatherings, they are{' '}
                  <span className='italic text-accent'>
                    strategic brand moments.
                  </span>
                  .
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className='mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink-2'>
                  Every experience we design is built with purpose, aligned with
                  business goals, and executed to create lasting impact. We
                  don&apos;t just manage events we craft platforms where brands
                  communicate, connect, and grow.
                </p>
              </Reveal>
            </blockquote>

            <Reveal delay={0.14}>
              <figcaption className='mt-8 flex items-center gap-4'>
                <span>
                  <span className='block font-display text-lg text-ink'>
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
