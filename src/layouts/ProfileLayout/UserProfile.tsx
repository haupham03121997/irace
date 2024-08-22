import Image from "next/image";
import React from "react";

import NoAvatar from "@/assets/images/ic_noavt.png";
import ListMenu from "./ListMenu";

const UserProfile: React.FC = () => {
  return (
    <div className="border border-card shadow-card bg-white rounded-md">
      <div className="flex items-center gap-4 p-4">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-[48px] h-[48px] rounded-full border bg-background border-gray-200 flex items-center justify-center">
            <div className="w-[38px] h-[38px] relative">
              <Image src={NoAvatar} alt="avatar" fill sizes="auto" className="object-cover" priority />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p>Xin Chào!</p>
          <p className="text-orange-500 font-semibold">Hau Dev</p>
        </div>
      </div>
      <ListMenu
        list={[
          {
            icon: "User",
            title: "Thiết lập tài khoản",
            href: "/me/information",
            key: "me-information",
          },
          {
            icon: "PersonStanding",
            title: "Chiều cao & cân nặng",
            href: "/me/measurements",
            key: "me-measurements",
          },
          {
            icon: "Grip",
            title: "Ứng dụng",
            href: "/me/app",
            key: "me-app",
          },
          {
            icon: "Mail",
            title: "Email & mật khẩu",
            href: "/me/email-password",
            key: "me-email-password",
          },
          {
            icon: "TicketPercent",
            title: "Mã giảm giá",
            href: "/me/voucher",
            key: "me-voucher",
          },
          {
            icon: "Info",
            title: "Giới thiệu",
            href: "/me/guide",
            key: "me-guide",
          },
          {
            icon: "Shirt",
            title: "Phụ kiện",
            href: "/me/accessory",
            key: "me-accessory",
          },
          {
            icon: "HandCoins",
            title: "Đóng góp",
            href: "/me/contribute",
            key: "me-contribute",
          },
          {
            icon: "FileText",
            title: "Đơn hàng",
            href: "/me/order",
            key: "me-order",
          },
          {
            icon: "Wallet",
            title: "iWallet",
            href: "/me/wallet",
            key: "me-wallet",
          },
        ]}
      />
    </div>
  );
};

export default UserProfile;
