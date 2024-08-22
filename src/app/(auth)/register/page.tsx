"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <div className=" text-center mb-2">
        <p className="text-gray-500 text-base">Vui lòng đăng ký để tiếp tục sử dụng dịch vụ của chúng tôi.</p>
      </div>
      <form
        className="w-full"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="space-y-6">
          <Input className="py-6 focus:outline-none focus-visible:ring-0 text-base" placeholder="Tên" />
          <Input
            className="py-6 focus:outline-none focus-visible:ring-0 text-base"
            placeholder="Email (Khuyến khích dùng Gmail)"
          />
          <Input className="py-6 focus:outline-none focus-visible:ring-0 text-base" placeholder="Số điện thoại" />
          <Input
            type="password"
            className="py-6 focus:outline-none focus-visible:ring-0 text-base"
            placeholder="Mật khẩu"
          />
          <Input
            type="password"
            className="py-6 focus:outline-none focus-visible:ring-0 text-base"
            placeholder="Nhập lại mật khẩu"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="policy" />
              <label
                htmlFor="policy"
                className="text-base font-medium  text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                <p className="text-gray-500 text-base">
                  Bạn đồng ý với{" "}
                  <Link href="#" className="text-primary hover:underline duration-300">
                    {" "}
                    các điều khoản của chúng tôi
                  </Link>
                </p>
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled>
            Đăng ký
          </Button>
          <div>
            <p className="text-center text-gray-500 text-base">
              Bạn đã có tài khoản?{" "}
              <Link href="/login" className="text-primary underline font-semibold">
                Đăng nhập ngay
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
