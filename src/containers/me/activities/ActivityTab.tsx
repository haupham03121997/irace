import Image from "next/image";
import React from "react";

import { TabsTrigger } from "@/components/ui/tabs";

interface ActivityTabProps {
  value: string;
  imageSrc: any;
  label: string;
}

const ActivityTab: React.FC<ActivityTabProps> = ({ value, imageSrc, label }) => (
  <TabsTrigger
    className="w-full border-b-[3px] border-b-transparent text-base text-black py-2 hover:border-b-[3px] hover:text-primary hover:border-b-primary rounded-none duration-300 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-primary data-[state=active]:border-b-[3px] data-[state=active]:text-primary flex flex-col md:flex-row gap-2"
    value={value}
  >
    <div className="block">
      <Image src={imageSrc} alt={label.toLowerCase()} width={16} height={16} />
    </div>
    <span className="text-inherit block md:inline-block text-[13px] md:text-base">{label}</span>
  </TabsTrigger>
);

export default ActivityTab;
