
import { useRef, useState, useEffect, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import ProjectFilters from "./ProjectFilters";
import ProjectsList from "./ProjectsList";

type Project = {
  id: string;
  title: string;
  tags: string[];
  image: string;
  link: string;
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.1
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const projects: Project[] = useMemo(() => [{
    id: "kfupm-lms",
    title: "Concept University LMS",
    tags: ["Product Design", "React.js", "Node.js", "Featured"],
    image: "/project images/kfupmlms.png",
    link: "https://www.behance.net/gallery/218659483/KFUPM-LMS-concept"
  }, {
    id: "bolt1",
    title: "Hackathon Hero concept",
    tags: ["Web Design", "React.js", "All"],
    image: "/project images/bolt1.png",
    link: "#"
  }, {
    id: "askify",
    title: "Askify landing",
    tags: ["Web Design", "React.js", "All"],
    image: "/project images/askify.png",
    link: "https://getaskify.netlify.app"
  }, {
    id: "bolt2",
    title: "Bolt Hackathon Hero",
    tags: ["Web Design", "React.js", "All"],
    image: "/project images/bolt2.png",
    link: "#"
  }, {
    id: "nextai",
    title: "Next AI landing template",
    tags: ["Web Design", "React.js", "All"],
    image: "/project images/nextai.png",
    link: "https://next-ai-landing.netlify.app"
  }, {
    id: "superside",
    title: "Superside landing",
    tags: ["Web Design", "React.js", "All"],
    image: "/project images/superside.png",
    link: "https://supersideapp.netlify.app"
  }, {
    id: "onliverse",
    title: "Onliverse landing",
    tags: ["Web Design", "React.js", "All"],
    image: "/project images/onliverse.png",
    link: "https://onliversetech.netlify.app"
  }, {
    id: "sea",
    title: "SEA Landing",
    tags: ["Web Design", "WordPress", "Figma"],
    image: "/project images/sea.png",
    link: "https://www.behance.net/gallery/219903085/SEA-protection-services-website-development"
  }, {
    id: "ereader",
    title: "Embellisher eReader dashboard",
    tags: ["Product Design", "Figma"],
    image: "/project images/ereader.png",
    link: "https://www.behance.net/gallery/220152297/Embellisher-eReader-dashboard-designs"
  }, {
    id: "wiselearn",
    title: "E-learning dashboard concept",
    tags: ["Product Design", "React.js", "Concept"],
    image: "/project images/wiselearn.png",
    link: "https://www.behance.net/gallery/220505775/Elearning-dashboard-concept"
  }, {
    id: "fayda-digital",
    title: "Fayda Digital onboarding",
    tags: ["App Design", "Figma", "Featured"],
    image: "/project images/fayda digital.png",
    link: "https://www.behance.net/gallery/172586225/Fayda-Digital-UI-design"
  }, {
    id: "askify-logo",
    title: "Askify identity",
    tags: ["Brand Identity", "Logo Design", "Concept"],
    image: "/project images/askifylogo.png",
    link: "#"
  }, {
    id: "fayda-logo",
    title: "Fayda Digital logo concept",
    tags: ["Brand Identity", "Logo Design", "Concept"],
    image: "/project images/fayda logo.png",
    link: "#"
  }, {
    id: "mujtama-logo",
    title: "Mujtama identity",
    tags: ["Brand Identity", "Logo Design"],
    image: "/project images/mujtama logo.png",
    link: "#"
  }, {
    id: "bestglobal",
    title: "Best Global AI brand identity",
    tags: ["Brand Identity", "Logo Design"],
    image: "/project images/bestglobal.png",
    link: "#"
  }, {
    id: "versatility-works",
    title: "Versatility Works brand identity",
    tags: ["Brand Identity", "Logo Design"],
    image: "/project images/versatility works.png",
    link: "https://www.behance.net/gallery/200149573/Versatility-works-Brand-guidelines"
  }, {
    id: "esme",
    title: "ESME brand identity",
    tags: ["Brand Identity", "Logo Design"],
    image: "/project images/emre.png",
    link: "#"
  }, {
    id: "twlm",
    title: "TWLM app poster",
    tags: ["Other", "Poster Design", "Concept"],
    image: "/project images/twlm.png",
    link: "https://www.behance.net/gallery/200150477/App-poster-design-Twlm"
  }], []);
  
  const categories = useMemo(() => ["Featured", "Web Design", "Product Design", "App Design", "Brand Identity", "Other"], []);

  return (
    <section id="work" ref={sectionRef} className="relative my-0 py-[40px] slide-up overflow-hidden" style={{
      animationDelay: '0.2s'
    }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
      </div>
      
      <div className="container mx-auto max-w-full relative px-[8px]">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <ProjectFilters 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            isMobile={isMobile}
          />

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
