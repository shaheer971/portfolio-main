
import React from 'react';
import { ArrowLeft, Check, Plus, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import SimpleText from '@/components/SimpleText';
import { BlurFadeHeading } from '@/components/BlurFadeHeading';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import Footer from '@/components/Footer';

const devPackages = [
  {
    title: "MVP Development",
    price: "$2,499",
    description: "Quickly bring your idea to life with a minimum viable product.",
    features: [
      "Core functionality focus",
      "Front-end development",
      "Basic back-end setup",
      "User authentication",
      "2-4 week delivery",
      "Deployment to production",
      "Basic database schema",
      "API integration",
      "Cross-browser testing",
      "Simple admin panel",
      "Analytics setup",
      "Technical documentation"
    ],
    tech: ["React", "Next.js", "Firebase", "Vercel", "Tailwind CSS"]
  },
  {
    title: "Web App",
    price: "$4,999+",
    description: "Full-featured web application with comprehensive functionality.",
    features: [
      "Complete front-end development",
      "Robust back-end architecture",
      "Database integration",
      "API development",
      "Admin dashboard",
      "Authentication & Authorization",
      "Realtime data updates",
      "Search & filtering capability",
      "Payment integration",
      "Email notifications",
      "Performance optimization",
      "Security best practices",
      "Automated testing",
      "CI/CD pipeline setup"
    ],
    tech: ["React", "Node.js", "MongoDB", "AWS/Vercel", "Redux", "GraphQL"]
  },
  {
    title: "Mobile App",
    price: "Custom Quote",
    description: "Native-feeling mobile applications for iOS and Android.",
    features: [
      "Cross-platform development",
      "Native UI components",
      "Backend integration",
      "Push notifications",
      "App store submission support",
      "Offline functionality",
      "Camera/media integration",
      "Location services",
      "Social authentication",
      "Deep linking",
      "In-app purchases",
      "Analytics implementation",
      "Crash reporting",
      "Performance optimization"
    ],
    tech: ["React Native", "Expo", "Firebase", "Redux", "Native Modules"]
  },
  {
    title: "E-commerce Solution",
    price: "$5,999+",
    description: "Complete online store with product management and payment processing.",
    features: [
      "Product catalog",
      "Shopping cart functionality",
      "Secure checkout process",
      "Payment gateway integration",
      "Order management",
      "Customer accounts",
      "Inventory tracking",
      "Discount codes",
      "Product reviews",
      "Search and filtering",
      "Mobile-responsive design",
      "Analytics and reporting",
      "Email notifications",
      "SEO optimization"
    ],
    tech: ["Next.js", "Shopify API", "Stripe", "PostgreSQL", "Redis"]
  }
];

const DevelopmentPackageCard = ({ 
  title, 
  price, 
  description, 
  features, 
  tech, 
  featured 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  tech: string[];
  featured?: boolean;
}) => {
  return (
    <Card className={`w-full overflow-hidden border-white/10 ${featured ? 'bg-white/10' : 'bg-white/5'} backdrop-blur-sm`}>
      {featured && (
        <div className="bg-white/20 py-1 px-4 text-center text-xs font-medium">
          <SimpleText text="MOST POPULAR" className="text-white/60" />
        </div>
      )}
      <CardContent className="p-6">
        <div className="mb-6 space-y-3">
          <h3 className="text-2xl font-semibold text-white">
            <BlurFadeHeading as="h3" className="text-2xl font-bold text-white" delay={0.1}>{title}</BlurFadeHeading>
          </h3>
          <div className="text-3xl font-bold text-white">
            <SimpleText text={price} className="text-3xl font-bold text-white" />
          </div>
          <p className="text-sm text-white/60">
            <SimpleText text={description} className="text-white/60" />
          </p>
        </div>
        
        <div className="border-t border-white/10 my-4"></div>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-white/80">
              <Check className="h-4 w-4 text-white/40" />
              <span>
                <SimpleText text={feature} className="text-white/80" />
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <div key={index} className="inline-flex items-center px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs">
              <Code className="h-3 w-3 mr-1 text-white/60" />
              <SimpleText text={item} className="text-white/70" />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <a href="https://cal.com/shaheerahmar/15min" className="w-full" target="_blank" rel="noopener noreferrer">
          <InteractiveHoverButton 
            text="Get Started" 
            className="w-full border-white/20 text-white"
          />
        </a>
      </CardFooter>
    </Card>
  );
};

const Development = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="content-container h-full relative">
          <div className="absolute top-0 left-[-30px] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute top-0 right-[-30px] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>
      </div>
      
      <header className="fixed z-50 w-full bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>
      
      <div className="pt-24 pb-16 content-container">
        <div className="mb-12">
          <BlurFadeHeading 
            as="h1" 
            className="text-4xl font-bold mb-4"
            delay={0.1}
          >
            Development Services
          </BlurFadeHeading>
          <p className="text-white/70 max-w-2xl">
            <SimpleText 
              text="From MVPs to full-scale applications, I build robust, scalable, and user-friendly digital solutions that meet your business needs."
              className="text-white/70"
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {devPackages.map((pkg, index) => (
            <DevelopmentPackageCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              tech={pkg.tech}
              featured={index === 1}
            />
          ))}
        </div>
        
        <div className="mt-16 space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <BlurFadeHeading 
              as="h2" 
              className="text-2xl font-semibold mb-4"
              delay={0.2}
            >
              Development Process
            </BlurFadeHeading>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span>1</span>
                </div>
                <div>
                  <BlurFadeHeading 
                    as="h3" 
                    className="font-medium text-lg mb-1"
                    delay={0.3}
                  >
                    Discovery & Planning
                  </BlurFadeHeading>
                  <p className="text-white/70 text-sm">
                    <SimpleText 
                      text="We start with a thorough understanding of your goals, requirements, and constraints to create a detailed development plan."
                      className="text-white/70"
                    />
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span>2</span>
                </div>
                <div>
                  <BlurFadeHeading 
                    as="h3" 
                    className="font-medium text-lg mb-1"
                    delay={0.4}
                  >
                    Design & Development
                  </BlurFadeHeading>
                  <p className="text-white/70 text-sm">
                    <SimpleText 
                      text="I create interactive prototypes and develop your solution with regular check-ins to ensure alignment with your vision."
                      className="text-white/70"
                    />
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span>3</span>
                </div>
                <div>
                  <BlurFadeHeading 
                    as="h3" 
                    className="font-medium text-lg mb-1"
                    delay={0.5}
                  >
                    Testing & Deployment
                  </BlurFadeHeading>
                  <p className="text-white/70 text-sm">
                    <SimpleText 
                      text="Rigorous testing ensures your application works flawlessly before deployment to your preferred hosting environment."
                      className="text-white/70"
                    />
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span>4</span>
                </div>
                <div>
                  <BlurFadeHeading 
                    as="h3" 
                    className="font-medium text-lg mb-1"
                    delay={0.6}
                  >
                    Support & Maintenance
                  </BlurFadeHeading>
                  <p className="text-white/70 text-sm">
                    <SimpleText 
                      text="Post-launch support ensures your application remains secure, up-to-date, and optimized for performance."
                      className="text-white/70"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <BlurFadeHeading 
              as="h2" 
              className="text-2xl font-semibold mb-4"
              delay={0.7}
            >
              Custom Projects
            </BlurFadeHeading>
            <p className="text-white/70 mb-6">
              <SimpleText 
                text="Have a unique project in mind? Let's discuss your specific requirements and create a tailored solution just for you."
                className="text-white/70"
              />
            </p>
            <a href="https://cal.com/shaheerahmar/15min" className="inline-block" target="_blank" rel="noopener noreferrer">
              <InteractiveHoverButton 
                text="Schedule a Call" 
                className="border-white/20 text-white"
              />
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Development;
