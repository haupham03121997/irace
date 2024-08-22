"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

import NoAvatar from "@/assets/images/ic_noavt.png";
import UserForm from "./UserForm";
import UserInfo from "./UserInfo";

const InformationContainer: React.FC = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  return (
    <div className="border border-card bg-white shadow-card rounded-md">
      <div className="p-5 flex items-center justify-between border-b border-b-card">
        <p className="text-xl">THÔNG TIN CÁ NHÂN</p>
        <Button size="lg" className="px-3" onClick={() => setIsEdit(!isEdit)}>
          Chỉnh sửa
        </Button>
      </div>
      <div className="p-5">
        <div className="flex items-center flex-col justify-center pb-8 gap-5">
          <div className="w-[100px] h-[100px] relative">
            <Image src={NoAvatar} alt="avatar" fill sizes="auto" className="object-cover" priority />
          </div>
          {isEdit && (
            <div>
              <Button size="sm" variant={"outline"}>
                Đổi ảnh đại diện
              </Button>
            </div>
          )}
        </div>
        {isEdit ? <UserForm /> : <UserInfo />}
      </div>
    </div>
  );
};

export default InformationContainer;
