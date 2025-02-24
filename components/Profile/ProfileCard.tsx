import Link from "next/link";
import { IconType } from "react-icons";
import { FiArrowUpRight } from "react-icons/fi";

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
      className="relative flex flex-col bg-[#222650] rounded-md items-center justify-center cursor-pointer transition duration-300 ease-in-out gap-3 py-4 shadow-md group"
    >
      <Icon size={60} />
      <div className="ml-2 text-xl tracking-wider">{name}</div>
      <FiArrowUpRight
        size={25}
        className="absolute top-2.5 right-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
      />
    </Link>
  );
};

export default ProfileCard;
