import Image from "next/image";
import React from "react";
import Batch from "./Batch";
import Link from "next/link";
import { Stack } from "@/utils/TechStack";

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
    <div className="relative flex flex-col group gap-2">
      <Link
        href={gitUrl}
        target="_blank"
        className="text-lg tracking-wider uppercase text-right"
      >
        {title}
      </Link>
      <Link href={website} target="_blank">
        <Image
          src={src}
          alt={title}
          height={320}
          width={640}
          className="object-cover aspect-video rounded-lg"
        />
      </Link>
      <p className="text-sm font-poppins">{description}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-2 gap-2 font-thin">
        {techStack.map((tech) => (
          <Batch key={tech.name} text={tech.name} icon={tech.icon} />
        ))}
      </div>
    </div>
  );
};

export default ImageBox;
