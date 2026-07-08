'use client';

import { Reveal } from './motion';
import { LogoCloud } from '@/components/ui/logo-cloud-3';

const logos = Array.from({ length: 17 }, (_, i) => ({
  src: `/logos/${i + 1}.png`,
  alt: `Client ${i + 1}`,
}));

export default function Clients() {
  return (
    <section
      id='clients'
      className='scroll-mt-24 border-t border-line py-24 sm:py-32'
    >
      <div className='mx-auto max-w-[1440px] px-5 sm:px-8'>
        {/* Masthead */}
        <Reveal>
          <div className='flex items-center justify-between border-b border-line pb-5'>
            <span className='eyebrow'>Clients</span>
            <span className='text-sm text-muted'>
              <span className='text-ink'>17</span> brand partners
            </span>
          </div>
        </Reveal>

        <div className='mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16'>
          <div className='lg:col-span-5'>
            <Reveal delay={0.05}>
              <h2 className='font-display text-[clamp(2.2rem,4vw,3.4rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink'>
                In good <span className='italic text-accent'>company.</span>
              </h2>
            </Reveal>
          </div>
          <div className='lg:col-span-6 lg:col-start-7 lg:self-end'>
            <Reveal delay={0.1}>
              <p className='max-w-md text-lg leading-relaxed text-ink-2'>
                Nine years of events with brands across Kerala and beyond. A few
                of the teams we&apos;ve worked with.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Auto-scrolling logo marquee */}
        <Reveal delay={0.12} className='mt-16'>
          <LogoCloud logos={logos} />
        </Reveal>
      </div>
    </section>
  );
}
