import Image from "next/image";
import React from "react";

import LastCoinIcon from "@/assets/images/icon-check-coin-last.png";
import CheckCoinIcon from "@/assets/images/icon-check-coin.png";
import CoinIcon from "@/assets/images/icon-coin.png";
import { Button } from "@/components/ui/button";
import CheckInDay from "./CheckInDay";

const UserCheckIn: React.FC = () => {
  const days = [
    { day: "Today", icon: CheckCoinIcon },
    { day: "D2", icon: CheckCoinIcon },
    { day: "D3", icon: CheckCoinIcon },
    { day: "D4", icon: CheckCoinIcon },
    { day: "D5", icon: CheckCoinIcon },
    { day: "D6", icon: CheckCoinIcon },
    { day: "D7", icon: LastCoinIcon, isHighlighted: true },
  ];

  return (
    <div className="border border-card shadow-card flex-1 bg-white rounded-md p-2 py-5 gap-2 md:gap-0 md:p-5 flex flex-col justify-between">
      <div className="relative flex items-center gap-4 lg:gap-2 justify-center">
        <Image src={CoinIcon} alt="coin" width={24} height={24} priority />
        <p className="text-center text-base">Check-in mỗi ngày và tích lũy iCoin cùng iRace!</p>
      </div>
      <div className="grid grid-cols-7 gap-5 xl:gap-0 px-4 xl:px-16">
        {days.map(({ day, icon, isHighlighted }) => (
          <CheckInDay key={day} day={day} icon={icon} isHighlighted={isHighlighted} />
        ))}
      </div>
      <div className="text-center">
        <Button size="lg" className="px-4 py-5">
          👉 Nhận 1 iCoin ngay!
        </Button>
      </div>
    </div>
  );
};

export default UserCheckIn;
