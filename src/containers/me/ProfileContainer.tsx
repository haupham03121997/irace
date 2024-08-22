import React from "react";

import MyEvents from "./MyEvents";
import UserCheckIn from "./UserCheckIn";
import UserInfo from "./UserInfo";
import UserStatistic from "./UserStatistic";
import MyActivities from "./activities";

const ProfileContainer: React.FC = () => {
  return (
    <div className="grid grid-cols-12 -mt-[20px] md:mt-0 gap-6 ">
      <div className="col-span-12 md:col-span-6">
        <UserInfo />
      </div>
      <div className="col-span-12 md:col-span-6 px-4 md:px-0">
        <div className="h-full flex flex-col gap-6 justify-between">
          <UserStatistic className="hidden md:grid" />
          <UserCheckIn />
        </div>
      </div>
      <div className="col-span-12">
        <MyEvents />
      </div>
      <div className="col-span-12">
        <MyActivities />
      </div>
    </div>
  );
};

export default ProfileContainer;
