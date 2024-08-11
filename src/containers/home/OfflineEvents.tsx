"use client";
import React from "react";

import Card from "@/components/card/Card";
import SectionWrapper from "@/components/section-wrapper/SectionWrapper";

import { useOfflineEvents } from "@/app/queries/useOfflineEvents";
import ImageDummy from "@/assets/images/event.jpeg";
import { SkeletonCard } from "@/components/skeleton";
import { Button } from "@/components/ui/button";
import { convertCurrencyVN } from "@/utils";

const OfflineEvents: React.FC = () => {
  const { data, isFetching } = useOfflineEvents("offline");

  return (
    <SectionWrapper title="SỰ KIỆN OFFLINE" btnText="Xem tất cả" hrefViewAll="#">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {isFetching &&
          Array.from({ length: 9 }).map((_, index) => <SkeletonCard key={`skeleton-card-offline-${index}`} />)}
        {!isFetching &&
          data?.map((event) => (
            <div key={`offline-card-${event.slug}`}>
              <Card
                image={event.image || ImageDummy}
                title={event.title}
                calendar={<p className="text-secondary text-sm">{event.calendar}</p>}
                location={event.location}
                isNew={event?.isNew}
                isHot={event?.isHot}
                footer={
                  event.price && (
                    <div className="flex items-center justify-between">
                      <p>
                        Từ <span className="text-primary font-extrabold">{convertCurrencyVN(event.price)}đ</span>
                      </p>
                      <Button className={event.isHot ? "bg-red-500 border border-red-500" : ""}>{`Đăng ký ngay ${
                        event?.isHot ? "🔥" : ""
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

export default OfflineEvents;
