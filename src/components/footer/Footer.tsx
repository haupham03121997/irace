import Image from "next/image";
import Link from "next/link";
import React from "react";

import Notification from "@/assets/images/dathongbao.png";
import Contact from "./Contact";
import Info from "./Info";
import SiteFooter from "./SiteFooter";

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
     <SiteFooter />
    </div>
  );
};

export default Footer;
