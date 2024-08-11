"use client";
import React from "react";

import Card from "@/components/card/Card";
import SectionWrapper from "@/components/section-wrapper/SectionWrapper";

import { useOpeningEvents } from "@/app/queries/useOpeningEvents";
import ImageDummy from "@/assets/images/event.jpeg";
import { SkeletonCard } from "@/components/skeleton";

const OpeningEvents: React.FC = () => {
  const { isFetching, data } = useOpeningEvents("opening");
  return (
    <SectionWrapper title="CÁC SỰ KIỆN ĐANG MỞ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {isFetching &&
          Array.from({ length: 9 }).map((_, index) => <SkeletonCard key={`skeleton-card-opening-${index}`} />)}
        {data?.map((event) => (
          <div key={`opening-card-${event.slug}`}>
            <Card
              image={event.image || ImageDummy}
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
