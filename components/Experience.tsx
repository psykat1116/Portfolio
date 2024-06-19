import React from "react";
import Marker from "./Marker";
import { ExperienceData, ExperienceType } from "@/utils/Experience";
import JobInternCard from "./JobInternCard";

const Experience = () => {
  return (
    <div className="p-5 w-full min-h-full font-bold text-lightprimary">
      <div className="flex items-center">
        <Marker />
        <div className="ml-2 text-xl tracking-wider">Experience</div>
      </div>
      <div className="w-full flex flex-col gap-5 items-center mt-4">
        {ExperienceData.map((exp: ExperienceType) => (
          <JobInternCard {...exp} key={exp.time} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
