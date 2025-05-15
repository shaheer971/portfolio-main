
import { useMemo } from "react";
import ProjectCard from "./ProjectCard";

type Project = {
  id: string;
  title: string;
  tags: string[];
  image: string;
  link: string;
};

type ProjectsListProps = {
  projects: Project[];
  selectedCategory: string;
  isMobile: boolean;
};

const ProjectsList = ({ projects, selectedCategory, isMobile }: ProjectsListProps) => {
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "Featured") {
      return projects.filter(project => ["superside", "bolt1", "bolt2", "nextai", "askify", "kfupm-lms", "onliverse", "fayda-digital"].includes(project.id));
    }
    return projects.filter(project => project.tags.includes(selectedCategory));
  }, [projects, selectedCategory]);
  
  const mobileContentPadding = isMobile ? 'px-1' : 'px-2';
  
  return (
    <div className={mobileContentPadding}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
