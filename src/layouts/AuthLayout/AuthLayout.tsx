import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, header }) => {
  return (
    <div
      style={{ background: "linear-gradient(139deg, #f1f1f1, #e1e1e1 39%, #d1d1d1 68%, #d1d1d1) fixed" }}
      className="h-screen flex justify-center items-center"
    >
      <div
        className="grid grid-cols-4 gap-4 min-w-[500px]  rounded-md bg-white"
        style={{ border: "1px solid rgba(54, 64, 74, 0.05)" }}
      >
        <div className="col-start-1 col-end-5 p-8  flex-col gap-4 flex items-center justify-center">
          <div className="w-[80px] h-[35px] md:w-[158px] md:h-[50px] py-4 ">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="w-auto h-auto" priority />
            </Link>
          </div>
          <h1 className="text-2xl text-gray-500 font-medium pt-4">
            Chào mừng bạn đến với{" "}
            <Link href="/" className="text-2xl font-semibold text-primary">
              Irace
            </Link>
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
