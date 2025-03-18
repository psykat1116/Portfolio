"use client";
import Text from "@/components/Text";
import EducationCard from "@/components/Education/EducationCard";
import { EducationData, EducationDataType } from "@/utils/EducationData";
import { useMediaQuery } from "usehooks-ts";

const Education = () => {
  const isMedium = useMediaQuery("(max-width: 768px)");
  return (
    <div className="p-5 w-full min-h-full font-bold text-lightprimary">
      <div
        className={`tracking-wider flex items-center justify-center w-full ${
          isMedium ? "text-4xl" : "text-6xl"
        }`}
      >
        <Text text="Education" size={15} />
      </div>
      <div className="relative w-full flex flex-col gap-5 items-start mt-10">
        {EducationData.map((exp: EducationDataType) => (
          <EducationCard {...exp} key={exp.time} />
        ))}
      </div>
    </div>
  );
};

export default Education;
