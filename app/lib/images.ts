// Static image imports so next/image gets intrinsic width/height + an automatic
// blur placeholder at build time. Keyed by the same public paths the app uses.
import type { StaticImageData } from 'next/image';

import g01 from '../../public/gallery/01.jpg';
import g02 from '../../public/gallery/02.jpg';
import g03 from '../../public/gallery/03.jpg';
import g04 from '../../public/gallery/04.jpg';
import g05 from '../../public/gallery/05.jpg';
import g06 from '../../public/gallery/06.jpg';
import g07 from '../../public/gallery/07.jpg';
import g08 from '../../public/gallery/08.jpg';
import g09 from '../../public/gallery/09.jpg';
import g10 from '../../public/gallery/10.jpg';
import g11 from '../../public/gallery/11.jpg';
import g12 from '../../public/gallery/12.jpg';
import g13 from '../../public/gallery/13.jpg';
import h1 from '../../public/hero/1.jpg';
import h2 from '../../public/hero/2.jpg';
import h3 from '../../public/hero/3.jpg';
import h4 from '../../public/hero/4.jpg';
import sCorporate from '../../public/services/corporate.jpg';
import founderCutout from '../../public/founder-cutout.webp';
import logoBlack from '../../public/icons/logo-black.webp';
import logoWhite from '../../public/icons/logo-white.webp';
import l1 from '../../public/logos/1.png';
import l2 from '../../public/logos/2.png';
import l3 from '../../public/logos/3.png';
import l4 from '../../public/logos/4.png';
import l5 from '../../public/logos/5.png';
import l6 from '../../public/logos/6.png';
import l7 from '../../public/logos/7.png';
import l8 from '../../public/logos/8.png';
import l9 from '../../public/logos/9.png';
import l10 from '../../public/logos/10.png';
import l11 from '../../public/logos/11.png';
import l12 from '../../public/logos/12.png';
import l13 from '../../public/logos/13.png';
import l14 from '../../public/logos/14.png';
import l15 from '../../public/logos/15.png';
import l16 from '../../public/logos/16.png';
import l17 from '../../public/logos/17.png';

export const LOGO_BLACK = logoBlack;
export const LOGO_WHITE = logoWhite;

export const LOGOS: StaticImageData[] = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17,
];

export const IMAGES: Record<string, StaticImageData> = {
  '/gallery/01.jpg': g01,
  '/gallery/02.jpg': g02,
  '/gallery/03.jpg': g03,
  '/gallery/04.jpg': g04,
  '/gallery/05.jpg': g05,
  '/gallery/06.jpg': g06,
  '/gallery/07.jpg': g07,
  '/gallery/08.jpg': g08,
  '/gallery/09.jpg': g09,
  '/gallery/10.jpg': g10,
  '/gallery/11.jpg': g11,
  '/gallery/12.jpg': g12,
  '/gallery/13.jpg': g13,
  '/hero/1.jpg': h1,
  '/hero/2.jpg': h2,
  '/hero/3.jpg': h3,
  '/hero/4.jpg': h4,
  '/founder-cutout.webp': founderCutout,
  '/services/corporate.jpg': sCorporate,
};

export function img(path: string): StaticImageData {
  return IMAGES[path];
}
