import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

interface AchievementCardInterface {
  link: string;
  title: string;
}

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

const AchievementCard: React.FC<AchievementCardInterface> = ({
  link,
  title,
}) => {
  const isMedium = useMediaQuery("(max-width: 768px)");
  return (
    <motion.div
      initial={offscreen}
      whileInView={onscreen}
      viewport={{ once: true }}
    >
      <Link
        href={link}
        target="_blank"
        className="flex justify-start items-start text-lg md:text-2xl tracking-wide relative text-lightprimary bg-[#1b1b47] p-2 px-4 rounded-md group"
      >
        {title}
        <FiArrowUpRight
          size={isMedium ? 25 : 30}
          className="ml-1 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </motion.div>
  );
};

export default AchievementCard;
