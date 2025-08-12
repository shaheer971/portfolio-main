import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import ProjectFilters from "./ProjectFilters";
import ProjectsList from "./ProjectsList";
import { useIsMobile } from "@/hooks/use-mobile";

type Project = {
  id: string;
  title: string;
  tags: string[];
  image: string;
  link: string;
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isMobile = useIsMobile();
  
  const projects: Project[] = useMemo(() => [{
    id: "propellar-1",
    title: "Propellar AI Platform",
    tags: ["Featured", "Web"],
    image: "/lovable-uploads/d1ffb22e-2baf-4a73-a34d-c9f85c158f20.png",
    link: "#"
  }, {
    id: "propellar-2", 
    title: "Propellar Brand Identity",
    tags: ["Branding"],
    image: "/lovable-uploads/b29a2657-7150-463f-9295-d2c24f842e1d.png",
    link: "#"
  }, {
    id: "health-io",
    title: "Health.io Platform",
    tags: ["Web"],
    image: "/lovable-uploads/4617f719-7e2d-434d-9654-96789e45cdd9.png",
    link: "#"
  }, {
    id: "taskflow",
    title: "TaskFlow Project Hub",
    tags: ["App"],
    image: "/lovable-uploads/c9889f9e-51cb-4449-b826-b0deb4fd41bb.png",
    link: "#"
  }, {
    id: "onliversity",
    title: "Onliversity Brand Identity", 
    tags: ["Branding"],
    image: "/lovable-uploads/4c6b8c45-1cc6-46d0-a25f-4ff00ec30d0e.png",
    link: "#"
  }, {
    id: "careerly-brand",
    title: "Careerly Brand Identity",
    tags: ["Branding"],
    image: "/lovable-uploads/8cd078eb-a5c8-4084-bddb-9b0b51c40347.png",
    link: "#"
  }, {
    id: "calendar-app",
    title: "Calendar Application",
    tags: ["App"],
    image: "/lovable-uploads/79cef69f-2f3e-4a32-888e-fc80cb45c8ca.png",
    link: "#"
  }, {
    id: "careerly-platform",
    title: "Careerly Career Platform",
    tags: ["Featured", "Web"],
    image: "/lovable-uploads/ab8b7787-9334-488a-95d8-19942f277743.png",
    link: "#"
  }, {
    id: "bolt1",
    title: "Hackathon Hero concept",
    tags: ["Web"],
    image: "/project images/bolt1.png",
    link: "#"
  }, {
    id: "nextai",
    title: "Next AI landing template",
    tags: ["Web"],
    image: "/project images/nextai.png",
    link: "https://next-ai-landing.netlify.app"
  }, {
    id: "fayda-digital",
    title: "Fayda Digital onboarding",
    tags: ["App"],
    image: "/project images/fayda digital.png",
    link: "https://www.behance.net/gallery/172586225/Fayda-Digital-UI-design"
  }, {
    id: "askify-logo",
    title: "Askify identity",
    tags: ["Branding"],
    image: "/project images/askifylogo.png",
    link: "#"
  }, {
    id: "fayda-logo",
    title: "Fayda Digital logo concept",
    tags: ["Branding"],
    image: "/project images/fayda logo.png",
    link: "#"
  }, {
    id: "mujtama-logo",
    title: "Mujtama identity",
    tags: ["Branding"],
    image: "/project images/mujtama logo.png",
    link: "#"
  }, {
    id: "esme",
    title: "ESME brand identity",
    tags: ["Branding"],
    image: "/project images/emre.png",
    link: "#"
  }], []);

  // Categories for filtering
  const categories = ["Featured", "Web", "App", "Branding"];

  // Optimized intersection observer with useCallback
  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    setIsVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
        rootMargin: '50px'
      });
    }
    
    const currentRef = sectionRef.current;
    if (currentRef && observerRef.current) {
      observerRef.current.observe(currentRef);
    }
    
    return () => {
      if (currentRef && observerRef.current) {
        observerRef.current.unobserve(currentRef);
      }
    };
  }, [handleIntersection]);

  return (
    <section id="work" ref={sectionRef} className="relative py-20 slide-up overflow-hidden" style={{
      animationDelay: '0.1s'
    }}>
      <div className="content-container">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Project Filters */}
          <ProjectFilters 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            isMobile={isMobile}
          />
          
          {/* Projects List with Navigation */}
          <ProjectsList 
            projects={projects}
            selectedCategory={selectedCategory}
            isMobile={isMobile}
          />
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
