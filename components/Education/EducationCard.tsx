import Link from "next/link";
import { motion } from "framer-motion";

interface EducationCardProps {
  institute: string;
  time: string;
  info: string;
  location: string;
  instituteLink: string;
  locationLink: string;
}

const offscreen = {
  translateY: "50%",
  opacity: 0,
  transition: {
    duration: 0.5,
    ease: [0.37, 0, 0.63, 1],
  },
};

const onscreen = {
  translateY: 0,
  opacity: 1,
  transition: {
    duration: 0.7,
    ease: [0, 0.55, 0.45, 1],
  },
};

const EducationCard: React.FC<EducationCardProps> = ({
  info,
  institute,
  instituteLink,
  location,
  locationLink,
  time,
}) => {
  return (
    <motion.div
      initial={offscreen}
      whileInView={onscreen}
      viewport={{ once: true }}
      className="relative text-lightprimary flex flex-col items-center w-full bg-[#1b1b47] p-4 rounded-md shadow-md"
    >
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
    </motion.div>
  );
};

export default EducationCard;
