import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard: React.FC = () => {
  return (
    <div className="shadow-card rounded-md overflow-hidden cursor-pointer bg-white duration-200 border border-card border-solid">
      <Skeleton className="h-[175px] w-full rounded-md" />
      <div className="p-5">
        <div className="space-y-6">
          <Skeleton className="h-[40px] w-full" />
          <Skeleton className="h-[62px] w-full" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
