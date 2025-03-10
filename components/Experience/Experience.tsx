"use client";
import Text from "@/components/Text";
import { useMediaQuery } from "usehooks-ts";
import JobInternCard from "@/components/Experience/JobInternCard";
import { ExperienceData, ExperienceType } from "@/utils/ExperienceData";

const Experience = () => {
  const isMedium = useMediaQuery("(max-width: 768px)");

  return (
    <div
      id="experience"
      className="p-5 w-full min-h-full font-bold text-lightprimary"
    >
      <div
        className={`tracking-wider flex items-center justify-center w-full ${
          isMedium ? "text-4xl" : "text-6xl"
        }`}
      >
        <Text text="Experience" size={15} />
      </div>
      <div className="relative w-full flex flex-col gap-10 items-start pt-4 mt-6">
        {ExperienceData.map((exp: ExperienceType) => (
          <JobInternCard {...exp} key={exp.time} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
