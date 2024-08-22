import EmptyRace from "@/assets/images/ic-empty-races.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyEvents: React.FC = () => {
  return (
    <div className="border border-card rounded-md bg-white">
      <div className="p-4 text-center border-b border-b-card">
        <h2 className="text-xl font-medium ">SỰ KIỆN ĐÃ THAM GIA</h2>
      </div>
      <div className="p-6 flex flex-col items-center">
        <div className="w-[56px] h-[56px] relative">
          <Image src={EmptyRace} priority fill alt="empty" />
        </div>
        <div className="text-center space-y-1">
          <p className="text-base">Các sự kiện bạn tham gia sẽ được hiển thị ở đây</p>
          <p className="text-base">
            Bạn chưa tham gia sự kiện nào{" "}
            <Link href="/" className="text-primary hover:underline">
              Tham gia ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
