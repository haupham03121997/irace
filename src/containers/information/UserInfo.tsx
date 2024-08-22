import {
  Building2,
  Calendar,
  Dna,
  Droplet,
  Facebook,
  IdCard,
  Instagram,
  MapPinHouse,
  Phone,
  QuoteIcon,
  School,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const UserInfo: React.FC = () => {
  const info = [
    {
      title: "Tên hiển thị:",
      value: "Hau dev",
      icon: IdCard,
    },
    {
      title: "Username:",
      value: "",
      icon: User,
    },
    {
      title: "Số điện thoại:",
      value: "0123456789",
      icon: Phone,
    },
    {
      title: "Giới tính:",
      value: "Nam",
      icon: Dna,
    },
    {
      title: "Ngày sinh:",
      value: "01/01/1999",
      icon: Calendar,
    },
    {
      title: "Địa chỉ:",
      value: "123 ABC, Phường Hòa Thạnh, Quận Tân Phú, Hồ Chí Minh",
      icon: MapPinHouse,
    },
    {
      title: "Châm ngôn:",
      value: "Hello world!",
      icon: QuoteIcon,
    },
    {
      title: "Công ty:",
      value: "",
      icon: Building2,
    },
    {
      title: "Câu lạc bộ:",
      value: "",
      icon: Users,
    },
    {
      title: "Trường học:",
      value: "",
      icon: School,
    },
    {
      title: "Nhóm máu:",
      value: "A",
      icon: Droplet,
    },
    {
      title: "CMND",
      value: "123456789",
      icon: IdCard,
    },
    {
      title: "Facebook:",
      value: "https://facebook.com/hau.dev",
      icon: Facebook,
      isLink: true,
    },
    {
      title: "Instagram:",
      value: "https://instagram.com/hau.dev",
      icon: Instagram,
      isLink: true,
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      {info.map((item, index) => (
        <div className="flex items-center gap-8" key={`user-info-${index}`}>
          <div className="flex items-center gap-3 min-w-[120px]">
            <item.icon size={20} />
            <p className="text-base">{item.title}</p>
          </div>
          <p className="text-base">
            {item.isLink ? (
              <Link className="text-primary hover:underline" href={item.value} target="_blank">
                {item.value}
              </Link>
            ) : (
              item.value || "Chưa cập nhật"
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
