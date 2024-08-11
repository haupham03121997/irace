import Image from "next/image";
import Link from "next/link";
import React from "react";

import Notification from "@/assets/images/dathongbao.png";
import Contact from "./Contact";
import Info from "./Info";

const Footer: React.FC = () => {
  return (
    <div style={{ boxShadow: "0 0 4px rgba(15,34,58,.12)" }} className="bg-white mt-8">
      <div className="container py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 px-6 md:px-0">
          <div className="col-span-2">
            <div className="flex items-center w-1/3 md:w-full ">
              <Image src={Notification} alt="Notification" />
            </div>
          </div>
          <div className="col-span-8">
            <Info />
          </div>
          <div className="col-span-2">
            <Contact />
          </div>
        </div>
      </div>
      <div style={{ borderTop: "solid 1px #ddd" }} className="px-6 md:px-0">
        <div className="container py-6 flex ">
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-12 md:col-span-3 ">
              <p className=" text-base text-gray-500">© 2024 iRace.vn - Made by VietNam.</p>
            </div>
            <div className="col-span-9 flex justify-start md:justify-end">
              <ul>
                <li className="inline-block mt-4 md:mt-0 md:ml-4">
                  <Link href="#" className="text-gray-500 text-base">
                    Chính sách bảo mật
                  </Link>
                </li>
                <li className="inline-block mt-4 md:mt-0 md:ml-4">
                  <Link href="#" className="text-gray-500 text-base">
                    Điều khoản thanh toán
                  </Link>
                </li>
                <li className="inline-block mt-4 md:mt-0 md:ml-4">
                  <Link href="#" className="text-gray-500 text-base">
                    Điều khoản sử dụng
                  </Link>
                </li>
                <li className="inline-block mt-4 md:mt-0 md:ml-4">
                  <Link href="#" className="text-gray-500 text-base">
                    Tuyển dụng
                  </Link>
                </li>
                <li className="inline-block mt-4 md:mt-0 md:ml-4">
                  <Link href="#" className="text-gray-500 text-base">
                    Liện hệ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
