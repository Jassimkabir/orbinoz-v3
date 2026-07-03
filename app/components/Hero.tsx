'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { AnimatedHeading } from './motion';
import { Icon } from './ui/hugeicon';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const imgWrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgWrap,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '12%']);

  return (
    <section
      id='home'
      className='relative overflow-hidden px-5 pt-36 sm:px-8 sm:pt-44'
    >
      <div className='mx-auto max-w-[1440px]'>
        <div className='grid gap-8 lg:grid-cols-12 lg:items-end'>
          <div className='lg:col-span-9'>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              className='eyebrow'
            >
              Corporate Event Studio — Kochi
            </motion.p>

            <h1 className='mt-7 font-display text-[clamp(2.7rem,7.4vw,6.6rem)] font-light leading-[0.98] tracking-[-0.03em] text-ink'>
              <AnimatedHeading text='Moments engineered' />
              <br />
              <AnimatedHeading
                text='to feel inevitable.'
                delay={0.15}
                wordClassName={(w) =>
                  w.startsWith('inevitable') ? 'italic text-accent' : ''
                }
              />
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
            className='lg:col-span-3'
          >
            <p className='max-w-xs text-[1.05rem] leading-relaxed text-ink-2'>
              We design, produce and run corporate events end to end - from the
              first idea to the final cue.
            </p>
            <div className='mt-7 flex flex-wrap items-center gap-4'>
              <a href='#contact' className='btn-solid'>
                Start a project
              </a>
              <a
                href='#gallery'
                className='group inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-ink'
              >
                <span className='link-underline'>See our work</span>
                <Icon
                  icon={ArrowRight01Icon}
                  size={16}
                  className='transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1'
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero image */}
        <div
          ref={imgWrap}
          className='relative mt-14 aspect-[16/9] overflow-hidden rounded-2xl sm:mt-16 md:aspect-[21/9]'
        >
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.4 }}
            className='absolute inset-0'
          >
            <motion.img
              src='/hero.jpg'
              alt='Orbinoz corporate event production'
              style={{ y: imgY }}
              className='absolute inset-[-8%_0] h-[116%] w-full object-cover'
            />
          </motion.div>
          <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent' />
        </div>
      </div>
    </section>
  );
}
