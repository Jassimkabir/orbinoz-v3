import Image, { type StaticImageData } from 'next/image';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { cn } from '@/lib/utils';

type Logo = {
  src: StaticImageData;
  alt: string;
};

type LogoCloudProps = React.ComponentProps<'div'> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        'overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]',
        className,
      )}
    >
      <InfiniteSlider gap={64} duration={40} durationOnHover={120}>
        {logos.map((logo) => (
          <Image
            alt={logo.alt}
            key={`logo-${logo.alt}`}
            src={logo.src}
            sizes='160px'
            className='pointer-events-none h-10 w-auto select-none opacity-90 transition duration-500 hover:opacity-100 md:h-14'
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
