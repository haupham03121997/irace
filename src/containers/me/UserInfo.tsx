import { Menu, OctagonAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import NoAvatar from "@/assets/images/ic_noavt.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserStatistic from "./UserStatistic";

const UserInfo: React.FC = () => {
  const listItem = [
    {
      label: "Thiết lập tài khoản",
      key: "me-information",
      path: "/me/information",
    },
    {
      label: "Kết nối ứng dụng",
      key: "me-connect-app",
      path: "/me/connect-app",
    },
    {
      label: "Thêm hoạt động thủ công",
      key: "me-add-activity",
      path: "/me/add-activity",
    },
    {
      label: "Xem thống kê",
      key: "me-statistic",
      path: "/me/statistic",
    },
  ];
  return (
    <>
      <div
        style={{
          background: "linear-gradient(90deg, #9BD9FE 0%, #B2F3F3 50.5%, #9BD9FE 94.17%, #98D6FF 100%)",
        }}
        className="pt-2 px-4 pb-14 block md:hidden"
      >
        <UserStatistic
          className="shadow-none bg-transparent border-none divide-x-0 gap-6"
          classNameItem="bg-white rounded-2xl py-3 shadow-card "
        />
      </div>
      <div className="shadow-card bg-white border-card border rounded-none md:rounded-md p-4">
        <div className="grid -mt-16 md:mt-0 grid-cols-12 gap-1 md:gap-6">
          <div className="col-span-12 md:col-span-6 flex flex-col items-center relative">
            <div className="bg-white rounded-full  p-2 md:p-0">
              <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] relative">
                <Image src={NoAvatar} alt="avatar" fill sizes="auto" className="object-cover" priority />
              </div>
            </div>

            <div className="py-4 md:py-2 space-y-2 text-center">
              <p className="text-sm">Mã người dùng: 311027157</p>
              <div className="flex items-center gap-1 cursor-pointer">
                <OctagonAlert size={14} className="stroke-orange-500" />
                <p className="text-sm text-orange-500">Cập nhật thông tin để nhận quà</p>
              </div>
            </div>
          </div>

          <div className=" col-span-12 text-center  md:text-start md:col-span-6 py-2 md:py-4 ">
            <div className="space-y-1 md:space-y-3">
              <p className="text-xl font-bold">Hau Dev</p>
              <p className="text-orange-500 text-sm md:text-base">
                Vui lòng chọn ứng dụng để ghi nhận thành tích của bạn.
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none focus-visible:ring-0 pt-2 md:pt-0">
                  <Button className="text-xs" size="sm">
                    <p className="text-sm font-medium text-white pr-2">Tuỳ chọn</p>
                    <Menu size={14} className="stroke-white" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {listItem.map((item, index) => {
                    return (
                      <DropdownMenuItem key={`drop-user-settings-${index}-${item.key}`} className="py-3 px-4">
                        <Link
                          href={item.path || "#"}
                          className="text-gray-500 font-medium hover:text-primary duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <p>{item.label}</p>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <hr className="bg-gray-500 my-4" />
        <div className="text-center">
          <p>Mời bạn bè tham gia để nhận được quà tặng từ iRace.vn</p>
          <Link href="#" className="text-primary">
            (Chi tiết)
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
