"use client";
import { cn } from "@/libs/utils";
import {
  FileText,
  Grip,
  HandCoins,
  Info,
  Mail,
  PersonStanding,
  Shirt,
  TicketPercent,
  User,
  Wallet,
} from "lucide-react";
import { usePathname } from "next/navigation";

import React from "react";

interface ListMenuProps {
  list: Array<{
    icon:
      | "User"
      | "PersonStanding"
      | "Grip"
      | "Mail"
      | "TicketPercent"
      | "Info"
      | "Shirt"
      | "HandCoins"
      | "FileText"
      | "Wallet";
    title: string;
    href: string;
    key: string;
  }>;
}

const ListMenu: React.FC<ListMenuProps> = ({ list }) => {
  const pathname = usePathname();

  const icons = {
    User: User,
    PersonStanding: PersonStanding,
    Grip: Grip,
    Mail: Mail,
    TicketPercent: TicketPercent,
    Info: Info,
    Shirt: Shirt,
    HandCoins: HandCoins,
    FileText: FileText,
    Wallet: Wallet,
  };

  return (
    <div>
      {list.map((item, index) => {
        const isActive = pathname === item.href;
        const iconProps = {
          size: 14,
          className: cn("group-hover:stroke-white", {
            "stroke-white": isActive,
          }),
        };
        const Icon = icons[item.icon];
        return (
          <div
            key={item.href}
            className={cn(
              "py-[10px] px-4 flex group  items-center gap-2 border-t border-t-card text-black cursor-pointer bg-white hover:bg-primary hover:text-white duration-300",
              {
                "bg-primary text-white": isActive,
              }
            )}
          >
            <Icon {...iconProps} />
            <p className="text-inherit">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListMenu;
