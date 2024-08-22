import Image from "next/image";
import React from "react";

import Logo from "@/assets/images/logo.png";
import { Nav } from "@/components/nav";
import Link from "next/link";
import AccordionMenu from "./AccordionMenu";
import "./index.css";
import LanguageSettings from "./LanguageSettings";
import Search from "./Search";
import UserLogin from "./UserLogin";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="mb-8 bg-white shadow-header fixed w-screen z-50">
      <div className="container bg-white relative">
        <div className="flex items-center justify-between bg-white h-[65px]">
          <Link href={"/"} className="w-[110px] h-[35px] md:w-[158px] md:h-[50px]">
            <Image src={Logo} alt="Logo" className="w-auto h-auto" priority />
          </Link>
          <div className="flex items-center gap-6 md:gap-8 bg-white">
            <Nav />
            <Search />
            <LanguageSettings />
            <div className="block xl:hidden">
              <AccordionMenu />
            </div>
            <UserLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
