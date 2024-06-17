import React from "react";
import { motion } from "framer-motion";

const item = {
  initial: {
    y: "34vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const container = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

interface BannerItemProps {
  text?: string;
}

const BannerItem: React.FC<BannerItemProps> = ({
  text = "Full Stack Developer • UI/UX Designer •",
}) => {
  return (
    <motion.div
      className="text-[8rem] sm:text-[12rem] flex gap-1 animate-rtl text-lightprimary"
      variants={container}
      initial="initial"
      animate="open"
      exit="initial"
    >
      {text.split("").map((char, index) => (
        <div key={index}>
          <motion.p variants={item}>{char}</motion.p>
        </div>
      ))}
    </motion.div>
  );
};

export default BannerItem;
