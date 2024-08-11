import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItemProps {
  label?: string;
  href?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  hasDropdown?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  menuItems?: Array<{ label: string; href: string }>;
}

const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  icon,
  hasDropdown = false,
  startAdornment,
  endAdornment,
  menuItems,
}) => {
  return (
    <>
      {hasDropdown ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <li className="flex items-center gap-1 cursor-pointer group focus-visible:no-underline  hover:focus-visible:open:no-underline bg-white">
              {startAdornment}
              <Link href={href || "#"} className="bg-white">
                <span className="group-hover:text-primary text-base bg-white">{label}</span>
              </Link>
              {endAdornment}
              {icon || <ChevronDown size={14} className="group-hover:stroke-primary bg-white" />}
            </li>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="mt-5 shadow-dropdown min-w-[180px]"
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            {menuItems?.map((item, index) => {
              return (
                <DropdownMenuItem key={`drop-item-${index}-${item.href}`} className="py-3 px-4">
                  <Link href="#" className="text-gray-500 font-medium hover:text-primary duration-300">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <li className="bg-white">
          <Link href={href || "#"} className="text-base">
            {label}
          </Link>
        </li>
      )}
    </>
  );
};

export default NavItem;
