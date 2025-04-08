
import { Plus } from "lucide-react";
import DecryptedText from "./DecryptedText";
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
          <h3 className="text-2xl font-semibold text-white">
            <DecryptedText text={title} animateOn="view" speed={50} sequential={true} />
          </h3>
          <div className="text-3xl font-bold text-white">
            <DecryptedText text={price} animateOn="view" speed={30} sequential={true} />
          </div>
          <p className="text-sm text-white/60">
            <DecryptedText text={description} animateOn="view" speed={20} sequential={true} />
          </p>
        </div>
        
        <div className="border-t border-white/10 my-4"></div>
        
        <div className="space-y-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-white/80">
              <Plus className="h-4 w-4 text-white/40" />
              <span>
                <DecryptedText text={service} animateOn="view" speed={15} sequential={true} />
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
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
      </div>
      
      <div className="content-container py-0">
        <div>
          <h2 className="text-xl text-white/60">
            <DecryptedText 
              text="Services"
              animateOn="view"
              speed={50}
              sequential={true}
            />
          </h2>
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
