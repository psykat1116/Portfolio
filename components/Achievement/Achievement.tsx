"use client";
import Text from "@/components/Text";
import { AchievementData } from "@/utils/AchievementData";
import AchievementCard from "@/components/Achievement/AchievementCard";
import { useMediaQuery } from "usehooks-ts";

const Achievement = () => {
  const isMedium = useMediaQuery("(max-width: 768px)");
  return (
    <div
      id="achievement"
      className="p-5 w-full min-h-full font-bold text-lightprimary"
    >
      <div
        className={`tracking-wider flex items-center justify-center w-full ${
          isMedium ? "text-4xl" : "text-6xl"
        }`}
      >
        <Text text="Achievement" size={15} />
      </div>
      <div className="relative w-full flex gap-5 items-start mt-10 flex-wrap">
        {AchievementData.map((achievement) => (
          <AchievementCard key={achievement.title} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default Achievement;
