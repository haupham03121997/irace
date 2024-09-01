'use client';
import React from 'react';

import Card from '@/components/card/Card';
import SectionWrapper from '@/components/section-wrapper/SectionWrapper';
import { SkeletonCard } from '@/components/skeleton';
import { Button } from '@/components/ui/button';
import { useGetAllEvents } from '@/hooks/useGetAllEvents';
import { convertCurrencyVN } from '@/utils';
import SortEvent from './SortEvent';

const EventsList = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { data, isFetching } = useGetAllEvents({ currentPage, limit: 24 });
  const list = data?.list || [];
  const totalItems = data?.total || 0;
  return (
    <SectionWrapper title="SỰ KIỆN" childrenRight={<SortEvent />}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {isFetching && Array.from({ length: 9 }).map((_, index) => <SkeletonCard key={`skeleton-card-all-${index}`} />)}
        {list.map((event) => (
          <div key={`card-all-${event.slug}`}>
            <Card
              image={event.image}
              title={event.title}
              calendar={event.calendar && <p className="text-secondary text-sm">{event.calendar}</p>}
              location={event.location}
              descriptions={event.descriptions}
              isNew={event?.isNew}
              isHot={event?.isHot}
              footer={
                event.price && (
                  <div className="flex items-center justify-between">
                    <p>
                      Từ <span className="text-primary font-extrabold">{convertCurrencyVN(event.price)}đ</span>
                    </p>
                    <Button className={event.isHot ? 'bg-red-500 border border-red-500' : ''}>{`Đăng ký ngay ${
                      event?.isHot ? '🔥' : ''
                    }`}</Button>
                  </div>
                )
              }
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EventsList;
