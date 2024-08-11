import React from "react";

import { MainLayout } from "@/layouts/MainLayout";

export default function RootMainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout>{children}</MainLayout>;
}
