import Image from "next/image";
import React from "react";

import { CalendarDays, MapPin } from "lucide-react";

import HotImage from "@/assets/images/hot.png";
import NewImage from "@/assets/images/new.png";

interface CardProps {
  image: any;
  title: string;
  descriptions?: string;
  onClickCard?: () => void;
  footer?: React.ReactNode;
  calendar?: React.ReactNode;
  location?: string;
  children?: React.ReactNode;
  isNew?: boolean;
  isHot?: boolean;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  descriptions,
  footer,
  location,
  calendar,
  children,
  isNew,
  isHot,
  onClickCard,
}) => {
  return (
    <div
      className="relative shadow-card rounded-md cursor-pointer bg-white hover:shadow-cardHover hover:-translate-y-2 duration-200 border border-card border-solid"
      onClick={onClickCard}
    >
      {(isHot || isNew) && (
        <div className="absolute -top-2 -right-2 z-10 w-[44px] h-[47px]">
          {isNew && <Image src={NewImage} alt="new" fill sizes="auto" className="object-cover" priority />}
          {isHot && <Image src={HotImage} alt="hot" fill sizes="auto" className="object-cover" priority />}
        </div>
      )}
      <div className="w-full h-[175px] relative">
        <Image src={image} alt={title} fill sizes="auto" className="object-cover" priority />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold h-[44px] mb-4 truncate-2-lines">{title}</h3>
        {descriptions && <p className="text-secondary truncate-3-lines h-[62px]">{descriptions}</p>}
        {calendar && (
          <div className="flex items-center gap-2 mt-4">
            <CalendarDays size={14} className="stroke-secondary" />
            {calendar}
          </div>
        )}
        {location && (
          <div className="flex items-center gap-2 mt-2">
            <MapPin size={14} className="stroke-secondary" />
            <p className="text-secondary">{location}</p>
          </div>
        )}
        {children}
      </div>
      {footer && <div className="border-t border-card py-4 px-5">{footer}</div>}
    </div>
  );
};

export default Card;
