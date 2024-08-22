import React from "react";

import SectionWrapper from "@/components/section-wrapper/SectionWrapper";

import { eventApi } from "@/apis/events";
import Card from "@/components/card/Card";
import { SkeletonCard } from "@/components/skeleton";
import { IEvent } from "@/interfaces";

const OpeningEvents: React.FC = async () => {
  let isFetching = false;
  let data: IEvent[] = [];
  try {
    isFetching = true;
    const response = await eventApi.getOpeningEvents();
    data = response || [];
  } catch (error) {
  } finally {
    isFetching = false;
  }

  return (
    <SectionWrapper title="CÁC SỰ KIỆN ĐANG MỞ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {isFetching &&
          Array.from({ length: 9 }).map((_, index) => <SkeletonCard key={`skeleton-card-opening-${index}`} />)}
        {data?.map((event) => (
          <div key={`opening-card-${event.slug}`}>
            <Card
              image={event.image}
              title={event.title}
              descriptions={event.descriptions}
              isNew={event?.isNew}
              isHot={event?.isHot}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default OpeningEvents;
