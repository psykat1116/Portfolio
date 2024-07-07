import Marker from "@/components/Marker";
import ImageBox from "@/components/Project/ImageBox";
import { projects } from "@/utils/TechStack";

const Project = () => {
  return (
    <div id="project" className="p-5 w-full min-h-full font-bold text-lightprimary">
      <div className="flex items-center">
        <Marker />
        <div className="ml-2 text-2xl tracking-wider">Projects</div>
      </div>
      <div className="relative w-full flex flex-col gap-5 items-start pt-4 before:absolute before:content-[''] before:h-full before:w-1 before:top-0 before:left-2 before:bg-redcolor">
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
