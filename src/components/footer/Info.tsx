import Link from "next/link";
import React from "react";

const Info: React.FC = () => {
  return (
    <div className="md:px-0 md:text-center">
      <div className="flex flex-col mt-4 md:mt-0 gap-3 md:gap-1">
        <Link href="#" className="text-primary font-medium">
          CÔNG TY CỔ PHẦN IRACE - Hotline: 0902316831 - Email: support@irace.vn
        </Link>
        <p className="text-gray-500">B-00.02 Sarica, KĐT Sala, Đường D9, P. An Lợi Đông, TP. Thủ Đức, TP. HCM</p>
        <p className="text-gray-500">
          Mã số doanh nghiệp: 0315105285 do Sở Kế hoạch và Đầu tư TP.HCM cấp lần 2 ngày 12/04/19
        </p>
      </div>
    </div>
  );
};

export default Info;
