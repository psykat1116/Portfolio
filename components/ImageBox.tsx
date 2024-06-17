import Image from "next/image";
import React from "react";
import Batch from "./Batch";
import Link from "next/link";

interface ImageBoxProps {
  title: string;
  src: string;
  techStack: string[];
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
        className="text-2xl tracking-wider uppercase text-right"
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
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-2 gap-2 font-thin">
        {techStack.map((tech) => (
          <Batch key={tech} text={tech} />
        ))}
      </div>
    </div>
  );
};

export default ImageBox;
