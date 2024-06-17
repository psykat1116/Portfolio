"use client";
import React from "react";
import Image from "next/image";
import BannerItem from "./BannerItem";
import { AnimatePresence } from "framer-motion";

const Intro = () => {
  return (
    <div className="relative w-full flex justify-center items-center font-bold">
      <AnimatePresence>
        <div className="flex overflow-hidden whitespace-nowrap justify-between gap-5 w-auto">
          <BannerItem />
          <BannerItem />
        </div>
      </AnimatePresence>
      <div className="absolute h-56 w-56 sm:h-80 sm:w-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:h-96 md:w-96">
        <Image
          src="/profile.jpg"
          alt="profile"
          className="relative object-cover filter grayscale"
          fill
        />
      </div>
    </div>
  );
};

export default Intro;
