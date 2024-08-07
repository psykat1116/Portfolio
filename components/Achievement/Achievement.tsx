import Marker from "@/components/Marker";
import { AchievementData } from "@/utils/AchievementData";
import AchievementCard from "@/components/Achievement/AchievementCard";

const Achievement = () => {
  return (
    <div
      id="achievement"
      className="p-5 w-full min-h-full font-bold text-lightprimary"
    >
      <div className="flex items-center">
        <Marker />
        <div className="ml-2 text-2xl tracking-wider">Achievements</div>
      </div>
      <div className="relative w-full flex flex-col gap-5 items-start pt-4 before:absolute before:content-[''] before:h-full before:w-1 before:top-0 before:left-2 before:bg-redcolor">
        {AchievementData.map((achievement) => (
          <AchievementCard key={achievement.title} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default Achievement;
