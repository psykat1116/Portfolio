import React from "react";
import Marker from "./Marker";
import Image from "next/image";

const Project = () => {
  return (
    <div className="p-5 w-full font-bold text-[#e3e3e7]">
      <div className="flex items-center">
        <Marker />
        <div className="ml-2 text-xl tracking-wider">Projects</div>
      </div>
      <div className="flex flex-col w-full items-start justify-start gap-5 mt-5">
        <div className="flex items-center justify-between">
          <div className="relative flex flex-col group gap-2 overflow-hidden">
            <Image
              src="/Image/Airbnb.png"
              alt="Airbnb"
              height={280}
              width={560}
              className="object-cover aspect-video rounded-lg"
            />
            <div className="flex justify-between font-poppins items-center p-4">
              <div className="text-sm">ReactJS, NextJS, TailwindCSS</div>
              <div className="text-xl absolute left-2 -bottom-7 translate-y-0 group-hover:bottom-0 group-hover:-translate-y-2 group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
                Airbnb Clone
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
