"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

import CheckIcon from "@/assets/images/tick_green.svg";
import { cn } from "@/libs/utils";

interface CheckInDayProps {
  day: string;
  icon: StaticImageData;
  isHighlighted?: boolean;
}

const CheckInDay: React.FC<CheckInDayProps> = ({ day, icon, isHighlighted = false }) => {
  const [isCheckIn, setIsCheckIn] = React.useState(false);
  return (
    <div
      className="p-2 flex flex-col items-center gap-2"
      onClick={() => {
        setIsCheckIn(true);
      }}
    >
      <div
        className={cn(
          `w-[40px] h-[40px] border border-card rounded-sm flex items-center justify-center`,
          isHighlighted ? "bg-yellow-300" : "",
          isCheckIn ? "border-red-500 border-2" : ""
        )}
      >
        <Image src={isCheckIn ? CheckIcon : icon} alt="check-coin" width={24} height={24} priority />
      </div>
      <p className="text-center text-base">{day}</p>
    </div>
  );
};

export default CheckInDay;
