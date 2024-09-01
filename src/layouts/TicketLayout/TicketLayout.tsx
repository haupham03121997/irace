import React, { FC } from 'react';

import { Header } from '@/components/header';
import SiteFooter from '@/components/footer/SiteFooter';

interface TicketLayoutProps {
  children: React.ReactNode;
}

const TicketLayout: FC<TicketLayoutProps> = ({ children }) => {
  return (
    <div className="bg-background">
      <Header />
      <div className="pt-[86px] md:pt-[92px] " style={{ minHeight: `calc(100vh - 66px)` }}>
        {children}
      </div>
      <div className="bg-white">
        <SiteFooter />
      </div>
    </div>
  );
};

export default TicketLayout;
