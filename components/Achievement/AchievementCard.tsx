import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { useMediaQuery } from "usehooks-ts";

interface AchievementCardInterface {
  link: string;
  title: string;
}

const AchievementCard: React.FC<AchievementCardInterface> = ({
  link,
  title,
}) => {
  const isMedium = useMediaQuery("(max-width: 768px)");
  return (
    <Link
      href={link}
      target="_blank"
      className="flex justify-start items-start text-lg md:text-2xl tracking-wide relative text-lightprimary bg-[#1b1b47] p-2 px-4 rounded-md group"
    >
      {title}
      <FiArrowUpRight
        size={isMedium ? 25 : 30}
        className="ml-1 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
};

export default AchievementCard;
