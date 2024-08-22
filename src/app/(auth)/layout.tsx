import React from "react";

import { AuthLayout } from "@/layouts/AuthLayout";

export default function RootAuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <AuthLayout>{children}</AuthLayout>;
}
