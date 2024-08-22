import React from "react";

import CycleImage from "@/assets/images/ride.png";
import RunImage from "@/assets/images/run.png";
import SwimImage from "@/assets/images/swim.png";
import WalkImage from "@/assets/images/walk.png";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";

import ActivityTab from "./ActivityTab";
import ActivityTable from "./ActivityTable";

interface ActivityTable {
  columns: Array<{
    key: string;
    label: string;
    isHiddenMobile?: boolean;
  }>;
  noDataMessage: string;
  data: never[];
}

const MyActivities: React.FC = () => {
  const activities = [
    { value: "running", imageSrc: RunImage, label: "Chạy bộ" },
    { value: "walking", imageSrc: WalkImage, label: "Đi bộ" },
    { value: "cycling", imageSrc: CycleImage, label: "Đạp xe" },
    { value: "swimming", imageSrc: SwimImage, label: "Bơi" },
  ];

  const activityTables: {
    [key: string]: ActivityTable;
  } = {
    running: {
      columns: [
        { key: "order", label: "#", isHiddenMobile: true },
        { key: "time", label: "Thời gian" },
        { key: "activity", label: "Hoạt Động" },
        { key: "distance", label: "Quãng Đường", isHiddenMobile: true },
        { key: "duration", label: "Thời gian", isHiddenMobile: true },
        { key: "pace", label: "Pace", isHiddenMobile: true },
        { key: "action", label: "Thao tác", isHiddenMobile: true },
      ],
      noDataMessage: "Bạn chưa có hoạt động nào",
      data: [],
    },
    walking: {
      columns: [
        { key: "order", label: "#", isHiddenMobile: true },
        { key: "date", label: "Ngày" },
        { key: "steps", label: "Bước chân" },
        { key: "action", label: "Thao tác", isHiddenMobile: true },
      ],
      noDataMessage: "Bạn chưa có hoạt động nào",
      data: [],
    },
    cycling: {
      columns: [
        {
          key: "order",
          label: "#",
          isHiddenMobile: true,
        },
        {
          key: "time",
          label: "Thời gian",
        },
        {
          key: "activity",
          label: "Hoạt Động",
        },
        {
          key: "distance",
          label: "Quãng Đường",
          isHiddenMobile: true,
        },
        {
          key: "duration",
          label: "Thời gian",
          isHiddenMobile: true,
        },
        {
          key: "pace",
          label: "Pace",
          isHiddenMobile: true,
        },
        {
          key: "action",
          label: "Thao tác",
          isHiddenMobile: true,
        },
      ],
      noDataMessage: "Bạn chưa có hoạt động nào",
      data: [],
    },
    swimming: {
      columns: [
        {
          key: "order",
          label: "#",
          isHiddenMobile: true,
        },
        {
          key: "time",
          label: "Thời gian",
        },
        {
          key: "activity",
          label: "Hoạt Động",
        },
        {
          key: "distance",
          label: "Quãng Đường",
          isHiddenMobile: true,
        },
        {
          key: "duration",
          label: "Thời gian",
          isHiddenMobile: true,
        },
        {
          key: "pace",
          label: "Pace",
          isHiddenMobile: true,
        },
        {
          key: "action",
          label: "Thao tác",
          isHiddenMobile: true,
        },
      ],
      noDataMessage: "Bạn chưa có hoạt động nào",
      data: [],
    },
  };

  return (
    <div className="border border-card shadow-card bg-white">
      <div className="p-4 text-center border-b border-b-card">
        <h2 className="text-xl font-medium">HOẠT ĐỘNG CỦA BẠN</h2>
      </div>
      <div className="p-4 w-full">
        <Tabs defaultValue="running" className="w-full border-b border-b-card">
          <TabsList className="w-full flex justify-between items-center bg-white border-b rounded-none border-b-card p-0">
            {activities.map((activity) => (
              <ActivityTab key={activity.value} {...activity} />
            ))}
          </TabsList>
          {Object.entries(activityTables).map(([key, { columns, noDataMessage, data }]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <ActivityTable columns={columns} noDataMessage={noDataMessage} data={data} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default MyActivities;
