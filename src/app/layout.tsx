import type { Metadata } from "next";
import { Noto_Sans as FontSans } from "next/font/google";
import "./globals.css";

import AppProvider from "@/libs/app-provider";
import { cn } from "@/libs/utils";
import Head from "next/head";
import { envConfig } from "../../config";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Danh sách sự kiện chạy bộ, đạp xe, bơi lội online hot nhất",
  description:
    "iRace nền là tảng kết nối, thúc đẩy và tạo động lực giúp hình thành thói quen tập luyện thể thao và duy trì sức khoẻ bằng việc chạy bộ, đạp xe, đi bộ mỗi ngày",
};

console.log(envConfig);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}
        suppressHydrationWarning
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
