"use client";
import React from "react";

import { useBusinessEvents } from "@/app/queries/useBusinessEvents";
import Card from "@/components/card/Card";
import SectionWrapper from "@/components/section-wrapper/SectionWrapper";
import { SkeletonCard } from "@/components/skeleton";

const BusinessOnIRace: React.FC = () => {
  const { isFetching, data } = useBusinessEvents("business");
  return (
    <SectionWrapper title="DOANH NGHIỆP TRÊN IRACE" btnText="Xem tất cả">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {isFetching &&
          Array.from({ length: 9 }).map((_, index) => <SkeletonCard key={`skeleton-card-business-${index}`} />)}
        {data?.map((event) => (
          <div key={`opening-card-${event.slug}`}>
            <Card image={event.image} title={event.title} descriptions={event.descriptions} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default BusinessOnIRace;
