import Link from "next/link";
import React from "react";
import { TbHexagonFilled } from "react-icons/tb";

interface JobInternCardProps {
  title: string;
  company: string;
  time: string;
  companyLocation: string;
  lines: string[];
  companyLink: string;
  locationLink: string;
}

const JobInternCard: React.FC<JobInternCardProps> = ({
  time,
  title,
  company,
  companyLocation,
  lines,
  companyLink,
  locationLink,
}) => {
  return (
    <div className="relative flex flex-col items-center w-full md:w-3/4 pl-8">
      <TbHexagonFilled className="absolute h-5 w-5 left-0 text-redcolor mt-1" />
      <div className="flex flex-col sm:flex-row justify-between w-full items-start md:items-center text-lg md:text-xl tracking-wide">
        <h1>{title}</h1>
        <p>{time}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-full items-start md:items-center text-xl md:text-2xl tracking-wide">
        <Link href={companyLink}>{company}</Link>
        <Link href={locationLink}>{companyLocation}</Link>
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
  );
};

export default JobInternCard;
