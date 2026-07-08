import type { SVGProps } from "react";
import type { Logo } from "./logo-carousel";

/**
 * Real Orbinoz client logos from /public/logos (1.png … 17.png).
 *
 * The LogoCarousel types each logo's `img` as an SVG component, but only passes
 * a `className` down, so we wrap each PNG in a tiny component that forwards that
 * className to an <img>. object-contain (from the carousel) keeps the 2:1 art
 * centered inside the square slot.
 */
const makeLogo = (src: string, name: string) => {
  const LogoImg = ({ className }: SVGProps<SVGSVGElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={name} className={className} loading="lazy" />
  );
  LogoImg.displayName = `Logo(${name})`;
  return LogoImg;
};

export const clientLogos: Logo[] = Array.from({ length: 17 }, (_, i) => {
  const n = i + 1;
  const name = `Client ${n}`;
  return { name, id: n, img: makeLogo(`/logos/${n}.png`, name) };
});
