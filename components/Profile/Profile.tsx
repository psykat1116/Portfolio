"use client";
import Text from "@/components/Text";
import { ProfileData } from "@/utils/ProfileData";
import ProfileCard from "@/components/Profile/ProfileCard";
import { useMediaQuery } from "usehooks-ts";

const Profile = () => {
  const isMedium = useMediaQuery("(max-width: 768px)");
  return (
    <div
      id="profile"
      className="p-5 w-full min-h-full font-bold text-lightprimary"
    >
      <div
        className={`tracking-wider flex items-center justify-center w-full ${
          isMedium ? "text-4xl" : "text-6xl"
        }`}
      >
        <Text text="Profile" size={15} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 mt-5 gap-3 w-full">
        {ProfileData.map((profile) => (
          <ProfileCard
            key={profile.url}
            name={profile.name}
            url={profile.url}
            icon={profile.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
