"use client";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

import BannerItem from "@/components/BannerItem";

const Intro = () => {
  return (
    <div className="relative w-full flex justify-center items-center font-bold">
      <AnimatePresence>
        <div className="flex overflow-hidden whitespace-nowrap justify-between gap-5 w-auto">
          <BannerItem />
          <BannerItem />
        </div>
      </AnimatePresence>
      <div className="absolute h-64 w-64 md:h-80 md:w-80 xl:h-96 xl:w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/profile.jpg"
          alt="profile"
          className="relative object-cover filter grayscale rounded-md shadow-md"
          fill
        />
      </div>
    </div>
  );
};

export default Intro;
