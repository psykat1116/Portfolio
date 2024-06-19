import React from "react";
import Marker from "./Marker";
import ImageBox from "./ImageBox";
import { projects } from "@/utils/TechStack";
import Text from "./Text";

const Project = () => {
  return (
    <div className="p-5 w-full min-h-full font-bold text-lightprimary">
      <div className="flex items-center">
        <Marker />
        <div className="ml-2 text-2xl tracking-wider">Projects</div>
      </div>
      <div className="flex flex-col w-full items-start justify-start gap-5 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
    </div>
  );
};

export default Project;
