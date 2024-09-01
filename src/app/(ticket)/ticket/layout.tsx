
import React from 'react';

import { TicketLayout } from '@/layouts';

interface Props {
  children: React.ReactNode;
}

export default function RootTicketLayout({ children }: Props) {
  return <TicketLayout>{children}</TicketLayout>;
}
