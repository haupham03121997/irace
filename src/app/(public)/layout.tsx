import React from "react";

import { MainLayout } from "@/layouts";


export default function RootMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout>{children}</MainLayout>;
}
