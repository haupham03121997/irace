import { ProfileLayout } from "@/layouts/ProfileLayout";
import React from "react";

interface RootProfileLayoutProps {
  children: React.ReactNode;
}

export default function RootProfileLayout({ children }: RootProfileLayoutProps) {
  return <ProfileLayout>{children}</ProfileLayout>;
}
