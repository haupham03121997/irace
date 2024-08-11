"use client";
import React from "react";

import { NavItem } from "../nav-item";

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <>
      <nav className="bg-white hidden xl:block">
        <ul className="flex items-center gap-8  bg-white ">
          <NavItem
            label="Mua Vé Sự Kiện"
            href={"/"}
            hasDropdown
            menuItems={[
              { label: "  Virtual Race", href: "#" },
              {
                label: "Sự kiện tại Việt Nam",
                href: "#",
              },
            ]}
          />
          <NavItem
            href=""
            label="Dịch vụ"
            hasDropdown
            menuItems={[
              { label: "Bán Vé Sự Kiện", href: "#" },
              { label: "Tìm Hình Sự Kiện", href: "#" },
              { label: " Tổ Chức Sự Kiện", href: "#" },
              { label: " Kiếm Tiền cùng iRace.vn", href: "#" },
              { label: " Sản Xuất Vật Phẩm", href: "#" },
            ]}
          />
          <NavItem
            href=""
            label="Thông tin"
            hasDropdown
            menuItems={[
              { label: "Về iRace", href: "#" },
              { label: "Báo chí Việt", href: "#" },
              { label: "Hỏi Đáp", href: "#" },
              { label: "Hướng dẫn sử dụng", href: "#" },
              { label: "Kiến thức chạy bộ", href: "#" },
            ]}
          />

          <NavItem
            href=""
            label="Shop Thể Thao"
            hasDropdown
            menuItems={[
              { label: "Dinh Dưỡng", href: "#" },
              { label: "Phụ Kiện", href: "#" },
            ]}
          ></NavItem>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
