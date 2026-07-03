'use client';

import { useEffect, useRef, useState } from 'react';
import { Reveal } from './motion';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { clientLogos } from '@/components/ui/client-logos';

export default function Clients() {
  const [api, setApi] = useState<CarouselApi>();
  const paused = useRef(false);

  // Gentle auto-advance; loops seamlessly and pauses on hover / reduced-motion.
  useEffect(() => {
    if (!api) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      if (!paused.current) api.scrollNext();
    }, 2200);
    return () => clearInterval(id);
  }, [api]);

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
                Nine years of building events with brands across Kerala and
                beyond, a few of the teams we&apos;ve had the privilege to work
                with.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Auto-scrolling logo carousel */}
        <Reveal delay={0.12} className='mt-14'>
          <div
            className='relative'
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
          >
            <Carousel
              setApi={setApi}
              opts={{ loop: true, align: 'start', dragFree: true }}
              className='w-full'
            >
              <CarouselContent>
                {clientLogos.map((logo) => {
                  const LogoMark = logo.img;
                  return (
                    <CarouselItem
                      key={logo.id}
                      className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6'
                    >
                      <div className='group flex h-24 items-center justify-center rounded-xl border border-line bg-card/50 px-5 transition-colors duration-500 hover:bg-card'>
                        <LogoMark className='max-h-10 w-auto max-w-[80%] object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 sm:max-h-12' />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>

            {/* Edge fades */}
            <div className='pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-paper to-transparent sm:w-20' />
            <div className='pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-paper to-transparent sm:w-20' />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
