import React from "react";
import BusinessOnIRace from "./BusinessOnIRace";
import OfflineEvents from "./OfflineEvents";
import OpeningEvents from "./OpeningEvents";

const HomeContainer: React.FC = () => {
  return (
    <section className="flex min-h-screen container px-0 md:px-2 lg:px-4">
      <div className="w-full flex flex-col gap-6">
        <OpeningEvents />
        <OfflineEvents />
        <BusinessOnIRace />
      </div>
    </section>
  );
};

export default HomeContainer;
