import Image from "next/image";
import React from "react";

import StravaImage from "@/assets/images/strava.png";
import Socials from "./Socials";

const Contact: React.FC = () => {
  return (
    <div className="mt-6 md:mt-0 flex flex-row md:flex-col gap-4">
      <div className="flex items-center justify-start md:justify-center">
        <Socials />
      </div>
      <div className="w-1/2 md-4 md:w-full flex items-center">
        <Image src={StravaImage} alt="logo-strava" />
      </div>
    </div>
  );
};

export default Contact;
