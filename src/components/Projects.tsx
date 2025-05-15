import { useRef, useState, useEffect, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import DecryptedText from "./DecryptedText";
import { AspectRatio } from "./ui/aspect-ratio";
import { Skeleton } from "./ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

type Project = {
  id: string;
  title: string;
  tags: string[];
  image: string;
  link: string;
};

const OptimizedImage = ({
  src,
  alt,
  className = ""
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  return (
    <div className="relative w-full h-full">
      {!isLoaded && !error && <Skeleton className="absolute inset-0 w-full h-full bg-secondary" />}
      <img 
        src={src} 
        alt={alt} 
        loading="lazy" 
        onLoad={() => setIsLoaded(true)} 
        onError={() => setError(true)} 
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${isLoaded ? "opacity-100" : "opacity-0"}`} 
      />
    </div>
  );
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
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "Featured") {
      return projects.filter(project => ["superside", "bolt1", "bolt2", "nextai", "askify", "kfupm-lms", "onliverse", "fayda-digital"].includes(project.id));
    }
    return projects.filter(project => project.tags.includes(selectedCategory));
  }, [projects, selectedCategory]);
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const mobileContentPadding = isMobile ? 'px-1' : 'px-2';
  
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
          <div className={`w-full mb-4 ${mobileContentPadding}`}>
            <div className={`w-full grid grid-cols-2 sm:grid-cols-3 md:flex md:items-center gap-2 p-1.5 overflow-x-auto scrollbar-hidden ${!isMobile ? 'rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl' : ''}`}>
              {categories.map(category => (
                <button 
                  key={category} 
                  onClick={() => setSelectedCategory(category)} 
                  className={`w-full md:flex-1 px-4 md:px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap
                    ${category === selectedCategory ? "bg-white/10 text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" : "text-white/60 hover:text-white hover:bg-white/5"}`}
                >
                  <DecryptedText text={category} animateOn="hover" speed={30} />
                </button>
              ))}
            </div>
          </div>

          <div className={mobileContentPadding}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }} 
                  className="group py-0 px-0"
                >
                  <Card className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.02] relative">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block"
                    >
                      <AspectRatio ratio={16 / 9} className="bg-secondary relative">
                        <OptimizedImage src={project.image} alt={project.title} />
                      </AspectRatio>
                      
                      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-t overflow-hidden py-2 absolute before:rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 backdrop-blur-md bg-black/20">
                        <h3 className="text-left font-medium text-white">
                          <DecryptedText 
                            text={project.title} 
                            animateOn="hover" 
                            speed={30} 
                            sequential={true} 
                          />
                        </h3>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="p-0 h-auto bg-transparent hover:bg-transparent"
                        >
                          <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                        </Button>
                      </CardFooter>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
