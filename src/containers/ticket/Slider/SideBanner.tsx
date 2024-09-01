import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SideBannerProps {
  image: string;
  alt: string;
  href: string;
}

const SideBanner: React.FC<SideBannerProps> = ({ image, alt, href }) => {
  return (
    <div className="relative w-full h-[186px] rounded-md overflow-hidden">
      <Link href={href}>
        <Image src={image} className="object-cover rounded-md" priority alt={alt} fill sizes="auto" />
      </Link>
    </div>
  );
};

export default SideBanner;
