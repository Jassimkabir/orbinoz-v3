"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { LazyMotion, MotionConfig, domMax } from "framer-motion";

/**
 * Global Lenis smooth scrolling. Runs its own rAF loop and handles smooth
 * anchor navigation. Disabled under reduced-motion (native scroll takes over).
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1,
      // Leave touch to the browser's native momentum (smoother on phones)
      // than JS-driven smoothing, and keeps the page feeling responsive.
      syncTouch: false,
      touchMultiplier: 1.6,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: 0, duration: 1.3 });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  // LazyMotion + `m` components ship a much smaller motion runtime; `domMax`
  // covers every feature we use (animations, gestures, whileInView, layout).
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
