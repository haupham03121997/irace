import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';

interface MainCarouselProps {
  banners: { image: string; href: string }[];
}
const MainCarousel: React.FC<MainCarouselProps> = ({ banners }) => (
  <Carousel
    className="w-full"
    plugins={[
      Autoplay({
        delay: 3000,
      }),
    ]}
  >
    <CarouselContent>
      {banners.map((banner, index) => (
        <CarouselItem key={index}>
          <div className="w-full h-[386px] rounded-md relative">
            <Link href={banner.href}>
              <Image
                fill
                priority
                src={banner.image}
                className="w-full h-auto object-cover rounded-md"
                alt={`Slide ${index}`}
                sizes="auto"
              />
            </Link>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious
      classNameIcon="stroke-white"
      className="absolute left-2 bg-black opacity-25 hover:opacity-100 duration-300 border-none"
    />
    <CarouselNext
      classNameIcon="stroke-white"
      className="absolute right-2 bg-black opacity-25 hover:opacity-100 duration-300 border-none"
    />
    <CarouselIndicators className="absolute bottom-2 left-1/2 -translate-x-1/2" />
  </Carousel>
);

export default MainCarousel;
