import React from "react";
import Marker from "./Marker";
import JobInternCard from "./JobInternCard";
import { ExperienceData, ExperienceType } from "@/utils/ExperienceData";

const Experience = () => {
  return (
    <div className="p-5 w-full min-h-full font-bold text-lightprimary">
      <div className="flex items-center">
        <Marker />
        <div className="ml-2 text-2xl tracking-wider">Experience</div>
      </div>
      <div className="relative w-full flex flex-col gap-16 items-start pt-4 before:absolute before:content-[''] before:h-full before:w-1 before:top-0 before:left-2 before:bg-redcolor">
        {ExperienceData.map((exp: ExperienceType) => (
          <JobInternCard {...exp} key={exp.time} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
