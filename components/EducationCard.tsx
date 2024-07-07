import Link from "next/link";
import { TbHexagonFilled } from "react-icons/tb";

interface EducationCardProps {
  institute: string;
  time: string;
  info: string;
  location: string;
  instituteLink: string;
  locationLink: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  info,
  institute,
  instituteLink,
  location,
  locationLink,
  time,
}) => {
  return (
    <div className="relative text-lightprimary flex flex-col items-center w-full lg:w-3/4 pl-8">
      <TbHexagonFilled className="absolute h-5 w-5 left-0 text-redcolor mt-1" />
      <div className="flex flex-col sm:flex-row justify-between w-full items-start md:items-center text-lg md:text-xl tracking-wide">
        <Link href={instituteLink} target="_blank">
          {institute}
        </Link>
        <p>{time}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-full items-start md:items-center text-xl md:text-2xl tracking-wide">
        <p>{info}</p>
        <Link href={locationLink} target="_blank">
          {location}
        </Link>
      </div>
    </div>
  );
};

export default EducationCard;
