"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

import En from "@/assets/images/en.png";
import Vi from "@/assets/images/vi.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

const LanguageSettings: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = React.useState("vi");

  const handleLanguageChange = (language: string) => {
    setCurrentLanguage(language);
  };

  const renderLanguageOption = (language: string, imageSrc: StaticImageData, label: string) => (
    <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleLanguageChange(language)}>
      <Image src={imageSrc} width={23} height={16} alt="language" className="w-auto h-auto" priority />
      <p>{label}</p>
    </div>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="cursor-pointer w-[23px] h-[16px] relative ">
          <Image
            src={currentLanguage === "vi" ? Vi : En}
            fill
            sizes="auto"
            className="object-cover"
            priority
            alt={currentLanguage}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-5 shadow-dropdown" onCloseAutoFocus={(e) => e.preventDefault()}>
        <DropdownMenuItem>
          <div className="py-2 px-4">
            {currentLanguage === "vi"
              ? renderLanguageOption("en", En, "Tiếng Anh")
              : renderLanguageOption("vi", Vi, "Tiếng Việt")}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSettings;
