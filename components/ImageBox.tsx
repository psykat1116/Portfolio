import Image from "next/image";
import React from "react";
import Batch from "./Batch";
import Link from "next/link";
import { Stack } from "@/utils/TechStack";
import { TbHexagonFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";

interface ImageBoxProps {
  title: string;
  src: string;
  techStack: Stack[];
  description: string;
  website: string;
  gitUrl: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({
  title,
  src,
  techStack,
  description,
  website,
  gitUrl,
}) => {
  return (
    <div className="relative flex flex-col gap-2">
      <TbHexagonFilled className="absolute h-5 w-5 left-0 text-redcolor mt-1" />
      <div className="flex flex-col lg:flex-row gap-4 pl-8">
        <Image
          src={src}
          alt={title}
          height={250}
          width={480}
          className="object-cover aspect-video rounded-lg"
        />
        <div className="flex flex-col items-start gap-3 mt-3">
          <div className="flex flex-col items-start md:flex-row gap-4 md:items-center">
            <h1 className="text-3xl md:text-5xl tracking-wider uppercase text-left">
              {title}
            </h1>
            <div className="flex items-center gap-2">
              <Link
                href={website}
                target="_blank"
                className="bg-[#222650] p-2 rounded-full"
              >
                <IoGlobeOutline className="h-6 w-6" />
              </Link>
              <Link
                href={gitUrl}
                target="_blank"
                className="bg-[#222650] p-2 rounded-full"
              >
                <FaGithub className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <p className="text-xl font-poppins">{description}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 font-thin w-full">
            {techStack.map((tech) => (
              <Batch key={tech.name} text={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
