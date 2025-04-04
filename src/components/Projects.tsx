
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import DecryptedText from "./DecryptedText";
import { AspectRatio } from "./ui/aspect-ratio";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
};

type ProjectCategory = {
  title: string;
  projects: Project[];
};

const projectCategories: ProjectCategory[] = [
  {
    title: "Web Design",
    projects: [
      {
        id: 1,
        title: "Hackathon website",
        description: "A modern website for hackathon events",
        image: "/bolt1.png",
        url: "#"
      },
      {
        id: 2,
        title: "University LMS concept",
        description: "Learning management system concept for KFUPM",
        image: "/kfupmlms.png",
        url: "https://www.behance.net/gallery/218659483/KFUPM-LMS-concept"
      },
      {
        id: 3,
        title: "Askify landing",
        description: "Landing page for AI-powered search assistant",
        image: "/askify.png",
        url: "#"
      },
      {
        id: 4,
        title: "Hackathon concept",
        description: "Modern concept for hackathon platform",
        image: "/bolt2.png",
        url: "#"
      },
      {
        id: 5,
        title: "Saas landing",
        description: "Landing page for SaaS platform",
        image: "/nextai.png",
        url: "#"
      },
      {
        id: 6,
        title: "Consultancy landing",
        description: "Landing page for consultancy services",
        image: "/onliverse.png",
        url: "#"
      },
      {
        id: 7,
        title: "LMS concept",
        description: "Learning management system concept",
        image: "/wiselearn.png",
        url: "#"
      }
    ]
  },
  {
    title: "Branding",
    projects: [
      {
        id: 8,
        title: "askify brand identity",
        description: "Brand identity design for Askify",
        image: "/askifylogo.png",
        url: "#"
      },
      {
        id: 9,
        title: "fayda concept",
        description: "Brand concept for financial platform",
        image: "/fayda logo.png",
        url: "#"
      },
      {
        id: 10,
        title: "EMRE brand identity",
        description: "Brand identity for photography business",
        image: "/emre.png",
        url: "#"
      }
    ]
  },
  {
    title: "Other",
    projects: [
      {
        id: 11,
        title: "TWLM poster",
        description: "Poster design for mobile application",
        image: "/twlm.png",
        url: "#"
      }
    ]
  }
];

const ProjectSection = ({ category }: { category: ProjectCategory }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
      
      const projectWidth = clientWidth;
      const newActiveIndex = Math.round(scrollLeft / projectWidth);
      setActiveIndex(Math.min(Math.max(0, newActiveIndex), category.projects.length - 1));
    }
  };
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  const scrollToProject = (index: number) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const targetScroll = index * containerWidth;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      
      setActiveIndex(index);
    }
  };
  
  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      scrollToProject(Math.max(0, activeIndex - 1));
    } else {
      scrollToProject(Math.min(category.projects.length - 1, activeIndex + 1));
    }
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToProject(0);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mb-4 last:mb-0">
      <div className="content-container mb-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-xl text-white/60">
              <DecryptedText 
                text={category.title} 
                animateOn="both"
                speed={50}
                sequential={true}
              />
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scroll('left')} 
              className={cn(
                "p-2 rounded-full border border-white/10 transition-all duration-300", 
                canScrollLeft ? "hover:bg-white/5 text-white" : "text-white/20 cursor-not-allowed"
              )} 
              disabled={!canScrollLeft}
              aria-label="Previous project"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className={cn(
                "p-2 rounded-full border border-white/10 transition-all duration-300", 
                canScrollRight ? "hover:bg-white/5 text-white" : "text-white/20 cursor-not-allowed"
              )} 
              disabled={!canScrollRight}
              aria-label="Next project"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative content-container overflow-visible">
        <div 
          ref={scrollRef} 
          className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-hidden pb-10" 
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {category.projects.map((project, index) => (
            <div 
              key={project.id} 
              className="w-full flex-shrink-0 snap-center px-4 first:pl-0 last:pr-0"
              style={{
                scrollSnapAlign: 'center',
                opacity: Math.abs(index - activeIndex) === 0 ? 1 : 0.3,
                transition: 'opacity 0.3s ease',
                transform: index < activeIndex ? 'translateX(-5%)' : (index > activeIndex ? 'translateX(5%)' : 'scale(1)'),
                visibility: 'visible',
                pointerEvents: activeIndex === index ? 'auto' : 'none',
              }}
            >
              <a 
                href={project.url} 
                className="block w-full"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="overflow-hidden">
                  <AspectRatio ratio={16/9} className="bg-secondary">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                    />
                  </AspectRatio>
                </div>
                <h3 className="mt-4 font-medium text-white transition-colors text-lg">
                  <DecryptedText 
                    text={project.title}
                    animateOn="both"
                    speed={40}
                    sequential={true}
                  />
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  <DecryptedText 
                    text={project.description}
                    animateOn="both"
                    speed={30}
                    sequential={true}
                  />
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="work" style={{ animationDelay: '0.2s' }} className="relative slide-up my-0 py-[40px] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
      </div>
      
      {projectCategories.map((category, index) => (
        <ProjectSection key={index} category={category} />
      ))}
    </section>
  );
};

export default Projects;
