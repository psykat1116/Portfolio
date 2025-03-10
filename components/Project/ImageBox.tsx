import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";

import { Stack } from "@/utils/TechStack";
import Batch from "@/components/TechSkill/Batch";

interface ImageBoxProps {
  title: string;
  src: string;
  techStack: Stack[];
  description: string;
  website: string;
  gitUrl: string;
}

const offscreen = {
  translateY: "50%",
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

const ImageBox = ({
  title,
  src,
  techStack,
  description,
  website,
  gitUrl,
}: ImageBoxProps) => {
  return (
    <motion.div
      initial={offscreen}
      whileInView={onscreen}
      viewport={{ once: true }}
      className="relative flex flex-col gap-2 max-w-[440px] bg-[#1b1b47] rounded-xl shadow-md p-2"
    >
      <Image
        src={src}
        alt={title}
        height={240}
        width={460}
        className="object-cover aspect-video rounded-t-xl"
      />
      <div className="flex flex-col items-start gap-3 p-3">
        <h1 className="text-4xl tracking-wider uppercase text-left">{title}</h1>
        <p className="font-poppins text-lightprimary/90 text-sm">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 font-thin w-full">
          {techStack.map((tech) => (
            <Batch
              key={tech.name}
              text={tech.name}
              icon={tech.icon}
              className="px-2"
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-2 gap-2 w-full">
          <Link
            href={website}
            target="_blank"
            className="items-center text-xl flex rounded-sm"
          >
            Website
            <IoGlobeOutline className="h-5 w-5 ml-1" />
          </Link>
          <Link
            href={gitUrl}
            target="_blank"
            className="items-center text-xl flex rounded-sm"
          >
            <FaGithub className="h-5 w-5 mr-2" />
            Github
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageBox;
