'use client';

import { Reveal } from './motion';
import { LogoCloud } from '@/components/ui/logo-cloud-3';
import { LOGOS } from '@/lib/images';

const logos = LOGOS.map((src, i) => ({ src, alt: `Client ${i + 1}` }));

export default function Clients() {
  return (
    <section
      id='clients'
      className='scroll-mt-24 border-t border-line py-16 sm:py-24'
    >
      <div className='mx-auto max-w-[1440px] px-5 sm:px-8'>
        <div className='grid gap-10 lg:grid-cols-12 lg:gap-16'>
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
