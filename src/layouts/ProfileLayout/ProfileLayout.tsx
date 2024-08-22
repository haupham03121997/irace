import React from "react";
import UserProfile from "./UserProfile";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-2">
        <div className=" md:col-span-3">
          <UserProfile />
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
