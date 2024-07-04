"use client";
import React, { useState } from "react";
import Marker from "./Marker";
import {
  SkillData,
  SkillType,
  TechCategoryData,
  TechCategoryType,
} from "@/utils/TechSkillData";
import Batch from "./Batch";

const TechSkill = () => {
  const [active, setActive] = useState("");
  const [filterSkill, setFilterSkill] = useState<SkillType[]>(SkillData);

  const handleClick = (cat: string) => {
    if (cat === active) {
      setActive("");
      setFilterSkill(SkillData);
      return;
    }
    setActive(cat);
    setFilterSkill(SkillData.filter((skill) => skill.category === cat));
  };

  return (
    <div className="p-5 w-full min-h-full font-bold text-lightprimary">
      <div className="flex items-center">
        <Marker />
        <div className="ml-2 text-2xl tracking-wider">Technical Skills</div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 gap-3 mt-5">
        {TechCategoryData.map((category: TechCategoryType) => (
          <div
            key={category.url}
            onClick={() => handleClick(category.url)}
            className={`py-1 tracking-wider cursor-pointer transition duration-300 ease-in-out text-2xl flex justify-center items-center hover:bg-redcolor rounded-md ${
              active === category.url
                ? "bg-redcolor"
                : "bg-transparent border-2 border-redcolor"
            }`}
          >
            {category.title}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 mt-5">
        {filterSkill.map((skill: SkillType) => (
          <Batch
            key={skill.name}
            text={skill.name}
            icon={skill.icon}
            className="text-2xl bg-[#222650] py-2 px-5"
            iconClassName="mr-5"
          />
        ))}
      </div>
    </div>
  );
};

export default TechSkill;
