import Link from "next/link";
import { TbHexagonFilled } from "react-icons/tb";

interface AchievementCardInterface {
  link: string;
  title: string;
}

const AchievementCard: React.FC<AchievementCardInterface> = ({
  link,
  title,
}) => {
  return (
    <div className="relative text-lightprimary flex flex-col items-center w-full md:w-3/4 pl-8">
      <TbHexagonFilled className="absolute h-5 w-5 left-0 text-redcolor mt-1" />
      <Link
        href={link}
        target="_blank"
        className="flex flex-col sm:flex-row justify-between w-full items-start md:items-center text-xl md:text-2xl tracking-wide"
      >
        {title}
      </Link>
    </div>
  );
};

export default AchievementCard;
