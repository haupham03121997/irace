'use client';
import React from 'react';

import MainCarousel from './MainCarousel';
import SideBanner from './SideBanner';

const Slider: React.FC = () => {
  const banners = [
    {
      image:
        'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/banner_qc/2024/08/06/banner-qc-wr1mg-image.png?v=113345',
      href: '#',
    },
    {
      image:
        'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/banner_qc/2024/08/19/banner-qc-laqbi-image.png?v=135157',
      href: '#',
    },
    {
      image:
        'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/banner_qc/2024/08/30/banner-qc-hrnjp-image.png?v=183502',
      href: '#',
    },
  ];

  const sideBanners = [
    {
      image:
        'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/banner_qc/2024/08/19/banner-qc-89nnt-image.png?v=142920',
      alt: '1',
      href: '#',
    },
    {
      image:
        'https://irace-web.s3.ap-southeast-1.amazonaws.com/photos/banner_qc/2024/08/19/banner-qc-zo2qk-image.png?v=135224',
      alt: '2',
      href: '#',
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-12 md:col-span-8">
        <MainCarousel banners={banners} />
      </div>
      <div className="hidden md:col-span-4 md:flex flex-col gap-3 justify-between">
        {sideBanners.map((banner, index) => (
          <SideBanner key={index} {...banner} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
