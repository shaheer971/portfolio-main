import { Plus } from "lucide-react";
import SimpleText from "./SimpleText";
import { BlurFadeHeading } from "./BlurFadeHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const designServices = [
  "Website, Landing",
  "Product Design",
  "App Design",
  "Brand Identity",
  "Pitch Deck"
];

const developmentServices = [
  "MVP",
  "Web App",
  "Mobile App"
];

const ServiceCard = ({ 
  title, 
  services, 
  isDark = false,
  price,
  description,
  pageUrl
}: { 
  title: string; 
  services: string[]; 
  isDark?: boolean;
  price: string;
  description: string;
  pageUrl: string;
}) => {
  // Handle navigation to other pages with scroll to top
  const handleNavigate = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Card className={`w-full overflow-hidden border-white/10 ${isDark ? 'bg-white/10' : 'bg-white/5'} backdrop-blur-sm`}>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="text-3xl font-bold text-white">
            <SimpleText text={price} className="text-white/80" />
          </div>
          <p className="text-sm text-white/60">
            <SimpleText text={description} className="text-white/60" />
          </p>
        </div>
        
        <div className="border-t border-white/10 my-4"></div>
        
        <div className="space-y-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-white/80">
              <Plus className="h-4 w-4 text-white/40" />
              <span>
                <SimpleText text={service} className="text-white/70" />
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={pageUrl} className="w-full" onClick={handleNavigate}>
          <InteractiveHoverButton 
            text="Get Started" 
            className="w-full border-white/20 text-white"
          />
        </Link>
      </CardFooter>
    </Card>
  );
};

const Services = () => {
  return (
    <section id="services" className="relative py-[40px]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-white/10 opacity-30" style={{backgroundImage: 'repeating-linear-gradient(to bottom, white 0, white 4px, transparent 4px, transparent 8px)'}} />
        <div className="absolute top-0 right-0 w-px h-full bg-white/10 opacity-30" style={{backgroundImage: 'repeating-linear-gradient(to bottom, white 0, white 4px, transparent 4px, transparent 8px)'}} />
      </div>
      
      <div className="content-container py-0">
        <div>
          <BlurFadeHeading 
            as="h2" 
            className="text-xl text-white/60"
            delay={0.1}
          >
            Services
          </BlurFadeHeading>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard 
            title="" 
            services={designServices} 
            isDark={false} 
            price="Design"
            description= "Complete design to enhance user experience, boost conversions, and align with your brand goals."
            pageUrl="/design"
          />
          <ServiceCard 
            title="" 
            services={developmentServices} 
            isDark={true}
            price="Development"
            description="Production-ready design & development."
            pageUrl="/development"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
