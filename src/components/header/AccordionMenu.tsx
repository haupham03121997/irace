import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const AccordionMenu: React.FC = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="accordion-menu" className="border-b-0 accordion-menu">
        <AccordionTrigger className="custom-accordion-trigger">
          <MenuIcon size={18} className="stroke-secondary" />
        </AccordionTrigger>
        <div className="fixed w-full top-[65.5px] left-0 z-50 bg-white shadow-card">
          <AccordionContent className="pb-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="w-full px-4 text-base no-underline">Mua Vé Sự Kiện</AccordionTrigger>
                <AccordionContent className="pl-4">
                  <div className="flex flex-col">
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Virtual Race
                    </Link>
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Sự kiện tại Việt Nam
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="w-full px-4 text-base no-underline">Dịch vụ</AccordionTrigger>
                <AccordionContent className="pl-4">
                  <div className="flex flex-col">
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Bán Vé Sự Kiện
                    </Link>
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Tìm Hình Sự Kiện
                    </Link>
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Tổ Chức Sự Kiện
                    </Link>
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Kiếm Tiền cùng iRace.vn
                    </Link>
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Sản Xuất Vật Phẩm
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="w-full px-4 text-base no-underline">Thông tin</AccordionTrigger>
                <AccordionContent className="pl-4">
                  <div className="flex flex-col">
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Về iRace
                    </Link>
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Báo chí Việt
                    </Link>
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Hỏi Đáp
                    </Link>
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Hướng dẫn sử dụng
                    </Link>
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Kiến thức chạy bộ
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="w-full px-4 text-base no-underline">Shop Thể Thao</AccordionTrigger>
                <AccordionContent className="pl-4">
                  <div className="flex flex-col">
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Dinh Dưỡng
                    </Link>
                    <Link href="#" className="py-2 px-4 text-gray-500">
                      Phụ Kiện
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionMenu;
