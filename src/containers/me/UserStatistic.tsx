import CoinIcon from "@/assets/images/icon-coin.png";
import { Footprints, Route, ShoppingCart } from "lucide-react";
import React from "react";

import { cn } from "@/libs/utils";
import Image from "next/image";

interface UserStatisticProps {
  className?: string;
  classNameItem?: string;
}

const UserStatistic: React.FC<UserStatisticProps> = ({ className, classNameItem }) => {
  const statistic = [
    {
      label: "Bước",
      icon: <Footprints size={24} className="stroke-primary" />,
      value: 0,
      key: "steps",
    },
    ,
    {
      label: "Quảng đường",
      icon: <Route size={24} className="stroke-primary" />,
      value: "0.00",
      key: "distance",
    },
    {
      label: "iCoins",
      icon: <Image src={CoinIcon} alt="coin" width={24} height={24} />,
      value: 2,
      key: "icoins",
      type: "image",
      isHiddenMobile: true,
    },
    {
      label: "Đơn hàng",
      icon: <ShoppingCart className="stroke-primary" />,
      value: 0,
      key: "cart",
    },
  ];
  return (
    <div
      className={cn(
        "grid grid-cols-3 md:grid-cols-4 divide-x border-card border shadow-card px-0 md:px-4  py-4 rounded-md bg-white",
        className
      )}
    >
      {statistic.map((item) => {
        return (
          <div
            className={cn("flex items-center justify-center flex-col text-center", classNameItem, {
              "hidden md:flex": item?.isHiddenMobile,
            })}
            key={`user-stats-${item?.key}`}
          >
            {item?.icon}
            <p className="text-base md:text-2xl font-semibold">{item?.value}</p>
            <p className="text-xs md:text-sm ml-1 text-gray-500">{item?.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserStatistic;
