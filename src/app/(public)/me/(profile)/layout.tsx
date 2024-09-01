import React from "react";

import { ProfileLayout } from "@/layouts";
interface RootProfileLayoutProps {
  children: React.ReactNode;
}

export default function RootProfileLayout({ children }: RootProfileLayoutProps) {
  return <ProfileLayout>{children}</ProfileLayout>;
}
