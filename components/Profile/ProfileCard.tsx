import Link from "next/link";
import { IconType } from "react-icons";

interface ProfileCardProps {
  name: string;
  url: string;
  icon: IconType;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, url, icon: Icon }) => {
  return (
    <Link
    target="_blank"
      href={url}
      className="flex py-2 px-3 bg-[#222650] w-auto rounded-md items-center justify-between cursor-pointer transition duration-300 ease-in-out"
    >
      <Icon className="h-6 w-6" />
      <div className="ml-2 text-xl tracking-wider">{name}</div>
    </Link>
  );
};

export default ProfileCard;
