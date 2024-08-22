import React from "react";

import { eventApi } from "@/apis/events";
import Card from "@/components/card/Card";
import SectionWrapper from "@/components/section-wrapper/SectionWrapper";
import { SkeletonCard } from "@/components/skeleton";
import { IEvent } from "@/interfaces";

const BusinessOnIRace: React.FC = async () => {
  let isFetching = false;
  let data: IEvent[] = [];

  try {
    isFetching = true;
    const response = await eventApi.getBusinessEvents();
    data = response || [];
  } catch (error) {
  } finally {
    isFetching = false;
  }

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
