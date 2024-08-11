import { ISocial } from "@/interfaces";
import { Facebook, Instagram, Wifi, Youtube } from "lucide-react";

import React from "react";

const Socials: React.FC = () => {
  const socials: ISocial[] = [
    {
      name: "Facebook",
      icon: Facebook,
      key: "facebook",
    },
    {
      name: "Instagram",
      icon: Instagram,
      key: "instagram",
    },
    {
      name: "Wifi",
      icon: Wifi,
      key: "wifi",
    },
    {
      name: "Youtube",
      icon: Youtube,
      key: "youtube",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <div
          key={`footer-social-${social.key}`}
          className="w-[28px] h-[28px] rounded-full bg-black flex items-center justify-center"
        >
          <social.icon size={14} color="white" />
        </div>
      ))}
    </div>
  );
};

export default Socials;
