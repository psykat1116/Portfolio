"use client";
import Text from "@/components/Text";
import { projects } from "@/utils/TechStack";
import ImageBox from "@/components/Project/ImageBox";
import { useMediaQuery } from "usehooks-ts";

const Project = () => {
  const isMedium = useMediaQuery("(max-width: 768px)");
  return (
    <div
      id="project"
      className="p-5 w-full min-h-full font-bold text-lightprimary"
    >
      <div
        className={`tracking-wider flex items-center justify-center w-full ${
          isMedium ? "text-4xl" : "text-6xl"
        }`}
      >
        <Text text="Projects" size={15} />
      </div>
      <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-start pt-10 gap-5">
        {projects.map((project) => (
          <ImageBox
            key={project.title}
            title={project.title}
            src={project.src}
            techStack={project.techStack}
            description={project.description}
            website={project.website}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
