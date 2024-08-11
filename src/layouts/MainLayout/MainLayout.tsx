import React from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="pt-[86px] md:pt-[92px]">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
