import Link from "next/link";
import Image from "next/image";
import { TbHexagonFilled } from "react-icons/tb";
import { motion } from "framer-motion";

interface JobInternCardProps {
  title: string;
  company: string;
  time: string;
  companyLocation: string;
  lines: string[];
  companyLink: string;
  locationLink: string;
  imageUrl: string;
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

const JobInternCard: React.FC<JobInternCardProps> = ({
  time,
  title,
  company,
  companyLocation,
  lines,
  companyLink,
  locationLink,
  imageUrl,
}) => {
  return (
    <motion.div
      initial={offscreen}
      whileInView={onscreen}
      viewport={{ once: true }}
      className="relative flex flex-col md:flex-row w-full gap-5 bg-[#1b1b47] p-4 rounded-md shadow-md"
    >
      <div className="relative flex flex-col items-center w-full md:w-5/6">
        <div className="flex flex-col sm:flex-row justify-between w-full items-start md:items-center text-lg md:text-xl tracking-wide">
          <h1>{title}</h1>
          <p>{time}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full items-start md:items-center text-xl md:text-2xl tracking-wide">
          <Link href={companyLink} target="__blank">
            {company}
          </Link>
          <Link href={locationLink} target="__blank">
            {companyLocation}
          </Link>
        </div>
        <div className="flex flex-col w-full font-normal text-sm md:text-base font-poppins mt-2">
          {lines.map((line) => (
            <div className="flex items-start gap-2" key={line}>
              <TbHexagonFilled className="text-redcolor h-4 w-4 mt-1" />
              <p>{line}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:flex w-1/6 items-center justify-center">
        <Image
          src={imageUrl}
          alt={company}
          height={150}
          width={150}
          className="object-cover rounded-sm aspect-square"
        />
      </div>
    </motion.div>
  );
};

export default JobInternCard;
