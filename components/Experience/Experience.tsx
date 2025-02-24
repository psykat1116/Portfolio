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
      <div className="relative w-full flex flex-col gap-16 items-start pt-4 before:absolute before:content-[''] before:h-full before:w-1 before:top-0 before:left-2 before:bg-redcolor mt-10">
        {ExperienceData.map((exp: ExperienceType) => (
          <JobInternCard {...exp} key={exp.time} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
