import Link from "next/link";
import React from "react";
import xss from "xss";
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
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-between w-full items-center text-xl tracking-wide">
        <h1>{title}</h1>
        <p>{time}</p>
      </div>
      <div className="flex justify-between w-full items-center text-2xl tracking-wide">
        <Link href={companyLink}>{company}</Link>
        <Link href={locationLink}>{companyLocation}</Link>
      </div>
      <div className="flex flex-col w-full font-normal font-poppins mt-2">
        {lines.map((line) => (
          <div className="flex items-center" key={line}>
            <TbHexagonFilled className="text-redcolor mr-2 size-3" />
            <p
              dangerouslySetInnerHTML={{
                __html: xss(line),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobInternCard;
