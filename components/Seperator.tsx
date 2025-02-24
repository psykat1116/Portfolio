"use client";
import { motion } from "framer-motion";
import { PiHexagonBold } from "react-icons/pi";

interface SeperatorProps {
  className?: string;
}

const offscreen = {
  width: 0,
};

const onscreen = {
  width: "97%",
  transition: {
    duration: 0.8,
  },
};

const Seperator = ({ className }: SeperatorProps) => {
  return (
    <div className="flex items-center h-auto mx-5 text-lightprimary">
      <PiHexagonBold className="h-6 w-6 rotate-[30deg] -mr-0.5" />
      <motion.div
        initial={offscreen}
        whileInView={onscreen}
        viewport={{ margin: "-100px 100px -50px 0px" }}
        className={`w-full h-[3px] bg-lightprimary ${className}`}
      />
      <PiHexagonBold className="h-6 w-6 rotate-[30deg] -ml-0.5" />
    </div>
  );
};

export default Seperator;
