import Marker from "@/components/Marker";
import { ProfileData } from "@/utils/ProfileData";
import ProfileCard from "@/components/Profile/ProfileCard";

const Profile = () => {
  return (
    <div
      id="profile"
      className="p-5 w-full min-h-full font-bold text-lightprimary"
    >
      <div className="flex items-center">
        <Marker />
        <div className="ml-2 text-2xl tracking-wider">Profiles</div>
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
