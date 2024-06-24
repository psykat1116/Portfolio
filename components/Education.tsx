import React from "react";
import Marker from "./Marker";
import { EducationData, EducationDataType } from "@/utils/EducationData";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="p-5 w-full min-h-full font-bold text-lightprimary">
      <div className="flex items-center">
        <Marker />
        <div className="ml-2 text-2xl tracking-wider">Education</div>
      </div>
      <div className="relative w-full flex flex-col gap-5 items-start pt-4 before:absolute before:content-[''] before:h-full before:w-1 before:top-0 before:left-2 before:bg-redcolor">
        {EducationData.map((exp: EducationDataType) => (
          <EducationCard {...exp} key={exp.time} />
        ))}
      </div>
    </div>
  );
};

export default Education;
