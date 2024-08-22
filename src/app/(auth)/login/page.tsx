"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { authApi } from "@/apis/auth";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { handleSubmit, register, watch } = useForm<LoginForm>({
    defaultValues: {
      email: "admin123",
      password: "admin123",
    },
  });

  const { setUser } = useAuthStore((state) => state);

  const router = useRouter();

  const { mutate: handleLogin, isPending } = useMutation({
    mutationFn: (payload: LoginForm) => authApi.login(payload),
    onSuccess: (currentUser) => {
      setUser(currentUser);
      router.push("/");
    },
  });

  const email = watch("email");
  const password = watch("password");

  const onSubmit = (data: LoginForm) => {
    handleLogin(data);
  };
  return (
    <>
      <p className="text-gray-500 text-base mb-2">Vui lòng đăng nhập để tiếp tục sử dụng dịch vụ của chúng tôi.</p>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-8">
          <Input
            {...register("email")}
            className="py-6 focus:outline-none focus-visible:ring-0 text-base"
            placeholder="Email/Username"
          />
          <Input
            {...register("password")}
            type="password"
            className="py-6 focus:outline-none focus-visible:ring-0 text-base"
            placeholder="Mật khẩu"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-base font-medium  text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Ghi nhớ đăng nhập
              </label>
            </div>
            <Link href="#" className="text-base text-gray-500 underline">
              Quên mật khẩu?
            </Link>
          </div>
          <Button
            loading={isPending}
            type="submit"
            className="w-full"
            size="lg"
            disabled={(!email && !password) || isPending}
          >
            Đăng nhập
          </Button>
          <div>
            <p className="text-center text-gray-500 text-base">
              Bạn chưa có tài khoản?{" "}
              <Link href="/register" className="text-primary underline font-semibold">
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
