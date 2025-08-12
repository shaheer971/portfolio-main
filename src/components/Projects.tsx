
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import './Projects.module.css';

type Project = {
  id: string;
  title: string;
  tags: string[];
  image: string;
  link: string;
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const splideRef = useRef<Splide>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const projects: Project[] = useMemo(() => [{
    id: "bolt1",
    title: "Hackathon Hero concept",
    tags: ["Web", "React.js"],
    image: "/project images/bolt1.png",
    link: "#"
  },  {
    id: "nextai",
    title: "Next AI landing template",
    tags: ["Web", "React.js"],
    image: "/project images/nextai.png",
    link: "https://next-ai-landing.netlify.app"
  },{
    id: "fayda-digital",
    title: "Fayda Digital onboarding",
    tags: ["App", "Featured"],
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

  // Splide options for carousel behavior
  const splideOptions = {
    type: 'loop',
    drag: true,
    pagination: false,
    arrows: false,
    autoplay: false, // Disable regular autoplay, use AutoScroll instead
    perPage: 'auto' as const,
    perMove: 1,
    gap: '12px',
    focus: 'center', // Center the active slide
    trimSpace: false, // Don't trim empty space
    padding: { 
      left: '50%', // Start from center
      right: '50%' // End at center
    },
    autoScroll: {
      speed: 0.3, // Continuous slow scroll (lower = slower)
      pauseOnHover: true,
      pauseOnFocus: true,
    },
    breakpoints: {
      640: {
        gap: '10px',
        padding: { 
          left: '25%',
          right: '25%'
        },
      },
      768: {
        gap: '10px',
        padding: { 
          left: '40%',
          right: '40%'
        },
      },
      1024: {
        gap: '12px',
        padding: { 
          left: '50%',
          right: '50%'
        },
      },
    },
  };
  
  // Optimized intersection observer with useCallback
  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    setIsVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
        rootMargin: '50px' // Preload slightly before visible
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
    <section id="work" ref={sectionRef} className="relative my-0 py-[10px] slide-up overflow-hidden mobile-16-9 md:h-auto" style={{
      animationDelay: '0.1s'
    }}>
      {/* Vertical lines acting as boundaries */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-800 z-10"></div>
      
      {/* Bounded carousel container */}
      <div className="w-full px-px relative overflow-hidden">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Splide Carousel - Centered and Masked */}
          <div className="splide-section relative overflow-hidden">
            {/* Progressive blur fade overlays */}
            <div className="progressive-blur-left"></div>
            <div className="progressive-blur-right"></div>
            <div className="carousel-mask relative overflow-hidden">
              <Splide
                ref={splideRef}
                options={splideOptions}
                extensions={{ AutoScroll }}
                className="splide splide--loop splide--ltr splide--draggable"
                aria-label="Projects Carousel"
              >
                {projects.map((project, index) => (
                  <SplideSlide key={`${project.id}-${index}`}>
                    <div className="splide-img-wrapper w-[350px] sm:w-[450px] md:w-[500px] lg:w-[600px]">
                      <div className="relative overflow-hidden bg-gray-900 border border-gray-800">
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="splide-img w-full h-full object-cover"
                            draggable={false}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
