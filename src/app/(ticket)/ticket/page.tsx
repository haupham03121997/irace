import { SEO_TAG } from '@/constants/seo';
import { TicketContainer } from '@/containers/ticket';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: SEO_TAG.TITLE_TICKET,
  description: SEO_TAG.DESCRIPTION_TICKET,
};

export default function TicketPage() {
  return (
    <div className="container -mt-6">
      <TicketContainer />
    </div>
  );
}
