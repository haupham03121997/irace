'use client';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import React from 'react';

import SectionWrapper from '@/components/section-wrapper/SectionWrapper';
import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { chunkArray } from '@/libs/utils';

const Organizers: React.FC = () => {
  const imagesOrganizers = [
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/19/organizers-bdrc-logo.png?v=175704',
      alt: 'Organizer 1',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/03/09/organizers-ly-son-cross-island-logo.png?v=110359',
      alt: 'Organizer 2',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-superman-night-run-logo.png?v=161710',
      alt: 'Organizer 3',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-superman-night-run-logo.png?v=161710',
      alt: 'Organizer 4',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-son-kim-logo.png?v=161649',
      alt: 'Organizer 5',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/06/26/organizers-irace-demo-logo.png?v=172057',
      alt: 'Organizer 6',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-amazing-events-logo.png?v=161702',
      alt: 'Organizer 7',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-cambodia-event-organizer-logo.png?v=161701',
      alt: 'Organizer 8',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-vietrace365-logo.png?v=161655',
      alt: 'Organizer 9',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/03/27/organizers-teelakow-logo.png?v=174502',
      alt: 'Organizer 10',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-irace-logo.png?v=161646',
      alt: 'Organizer 11',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/07/23/organizers-delta-engagement-marketing-logo.png?v=151154',
      alt: 'Organizer 12',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/08/05/organizers-tropiad-logo.png?v=161142',
      alt: 'Organizer 13',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-viettel-logo.png?v=161713',
      alt: 'Organizer 14',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-frv-logo.png?v=161705',
      alt: 'Organizer 15',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/01/08/organizers-trung-thang-travel-logo.jpeg?v=165621',
      alt: 'Organizer 16',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/05/14/organizers-setiabecamex-logo.png?v=160213',
      alt: 'Organizer 17',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-kong-forest-logo.png?v=161714',
      alt: 'Organizer 18',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/08/10/organizers-vtv-dai-truyen-hinh-viet-nam-logo.png?v=112105',
      alt: 'Organizer 19',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-domingo-sport-logo.png?v=161555',
      alt: 'Organizer 20',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/07/08/organizers-coteccons-logo.png?v=103111',
      alt: 'Organizer 21',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/06/19/organizers-viet-challenge-tour-ban-to-chuc-tour-logo.jpg?v=180558',
      alt: 'Organizer 22',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-klang-adventure-logo.png?v=161710',
      alt: 'Organizer 23',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-stop-and-sports-logo.png?v=161658',
      alt: 'Organizer 24',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-ubnd-nghi-xuan-logo.png?v=161707',
      alt: 'Organizer 25',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/02/29/organizers-vud-logo.png?v=093858',
      alt: 'Organizer 26',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/08/15/organizers-bcnv-mang-luoi-ung-thu-vu-viet-nam-logo.png?v=145917',
      alt: 'Organizer 27',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/02/06/organizers-artlive-a-virtual-art-campus-logo.png?v=083634',
      alt: 'Organizer 28',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/08/12/organizers-ubnd-quan-1-logo.png?v=142409',
      alt: 'Organizer 29',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-dha-logo.png?v=161652',
      alt: 'Organizer 30',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-vnexpress-marathon-logo.png?v=161655',
      alt: 'Organizer 31',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/05/08/organizers-sen-vang-logo.png?v=170038',
      alt: 'Organizer 32',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/06/18/organizers-sec-logo.png?v=154657',
      alt: 'Organizer 33',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-hopebox-logo.png?v=161708',
      alt: 'Organizer 34',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-vnpr-logo.png?v=161707',
      alt: 'Organizer 35',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/03/21/organizers-win-vietnam-logo.png?v=173754',
      alt: 'Organizer 36',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/06/19/organizers-race-jungle-ban-to-chuc-giai-logo.jpg?v=204950',
      alt: 'Organizer 37',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-greenhat-logo.png?v=161652',
      alt: 'Organizer 38',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/26/organizers-cong-ty-phat-trien-chay-bo-viet-nam-logo.png?v=151406',
      alt: 'Organizer 39',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-nexus-sport-events-logo.png?v=161713',
      alt: 'Organizer 40',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/02/29/organizers-bao-nong-nghiep-viet-nam-logo.png?v=093507',
      alt: 'Organizer 41',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-biji-vietnam-logo.png?v=161658',
      alt: 'Organizer 42',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/05/04/organizers-yeah1-ban-to-chuc-su-kien-logo.png?v=105415',
      alt: 'Organizer 43',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2024/08/24/organizers-hanoi-eventmore-ban-to-chuc-su-kien-logo.png?v=154729',
      alt: 'Organizer 44',
    },
    {
      src: 'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/organizers/2023/12/16/organizers-vpbank-logo.png?v=161649',
      alt: 'Organizer 45',
    },
  ];

  const chunkedImages = chunkArray(imagesOrganizers, 15);

  return (
    <SectionWrapper title="BAN TỔ CHỨC" classNameHeader="justify-center">
      <div className="px-4 pt-4">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {chunkedImages.map((images, index) => {
              return (
                <CarouselItem key={index}>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {images.map((image, index) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-center px-3 py-3 md:py-6 rounded-md border border-card shadow-card overflow-hidden hover:shadow-cardHover hover:-translate-y-2 duration-200"
                        >
                          <div className="relative w-full h-[85px]">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              sizes="auto"
                              className="object-contain rounded-md"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious
            classNameIcon="stroke-white"
            className=" absolute -left-2 bg-black opacity-25 hover:opacity-100 duration-300 border-none"
          />
          <CarouselNext
            classNameIcon="stroke-white"
            className="absolute -right-2  bg-black opacity-25 hover:opacity-100 duration-300 border-none"
          />

          <CarouselIndicators className="-bottom-6" />
        </Carousel>
      </div>
    </SectionWrapper>
  );
};

export default Organizers;
