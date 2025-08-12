
import { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";

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
      return projects.filter(project => project.tags.includes("Featured"));
    }
    return projects.filter(project => project.tags.includes(selectedCategory));
  }, [projects, selectedCategory]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset currentIndex when filteredProjects changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filteredProjects]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center text-white/60 py-8">
        No projects found for this category.
      </div>
    );
  }

  // Safety check to ensure currentIndex is valid
  const currentProject = filteredProjects[currentIndex];
  if (!currentProject) {
    console.log("Current project is undefined. currentIndex:", currentIndex, "filteredProjects length:", filteredProjects.length);
    return (
      <div className="text-center text-white/60 py-8">
        Loading projects...
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center w-full">
      {/* Left Arrow */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevProject}
        disabled={filteredProjects.length <= 1}
        className="absolute left-0 z-10 h-10 w-10 bg-white/5 hover:bg-white/10 border border-white/10 text-white disabled:opacity-30"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {/* Project Card */}
      <div className="w-full max-w-md mx-12">
        <ProjectCard 
          key={currentProject.id}
          project={currentProject} 
          index={0} 
        />
      </div>

      {/* Right Arrow */}
      <Button
        variant="ghost"
        size="icon"
        onClick={nextProject}
        disabled={filteredProjects.length <= 1}
        className="absolute right-0 z-10 h-10 w-10 bg-white/5 hover:bg-white/10 border border-white/10 text-white disabled:opacity-30"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots indicator */}
      {filteredProjects.length > 1 && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
