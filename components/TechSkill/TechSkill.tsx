"use client";
import Text from "@/components/Text";
import Batch from "@/components/TechSkill/Batch";
import { Field, SkillData, SkillType } from "@/utils/TechSkillData";

import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

const offscreen = {
  translateY: 200,
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

const TechSkill = () => {
  const isMedium = useMediaQuery("(max-width: 768px)");
  return (
    <div
      id="techskill"
      className="p-5 w-full min-h-full font-bold text-lightprimary"
    >
      <div
        className={`tracking-wider flex items-center justify-center w-full ${
          isMedium ? "text-4xl" : "text-6xl"
        }`}
      >
        <Text text="Tech Stack" size={15} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md mt-10">
        {SkillData.map((skill: SkillType) => (
          <motion.div
            key={skill.category}
            initial={offscreen}
            whileInView={onscreen}
            viewport={{ once: true }}
            className="p-4 flex flex-col gap-4 bg-[#1b1b47] shadow-md rounded-md"
          >
            <h1 className="text-3xl tracking-wider">{skill.category}</h1>
            <div className="flex flex-wrap gap-2">
              {skill.fields.map((s: Field) => (
                <Batch
                  key={s.name}
                  text={s.name}
                  icon={s.icon}
                  className="bg-[#222650] px-4 py-1"
                  iconClassName="mr-3"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechSkill;
