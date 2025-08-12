
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlurFadeHeading } from "./BlurFadeHeading";
import { AspectRatio } from "./ui/aspect-ratio";
import { Skeleton } from "./ui/skeleton";
import { Card, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

type ProjectCardProps = {
  project: {
    id: string;
    title: string;
    tags: string[];
    image: string;
    link: string;
  };
  index: number;
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

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div 
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
          
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-t overflow-hidden py-2 absolute rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 backdrop-blur-md bg-black/20">
            <BlurFadeHeading 
              as="h3" 
              className="text-left font-medium text-white"
              delay={0.1}
            >
              {project.title}
            </BlurFadeHeading>
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
  );
};

export default ProjectCard;
