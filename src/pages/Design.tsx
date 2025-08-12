
import React from 'react';
import { ArrowLeft, Check, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import SimpleText from '@/components/SimpleText';
import { BlurFadeHeading } from '@/components/BlurFadeHeading';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import Footer from '@/components/Footer';

const designPackages = [
  {
    title: "Landing Page",
    price: "$799",
    description: "Perfect for those who need a quick single landing page designed.",
    features: [
      "Designed with Figma",
      "Discord/Slack/Email Communication",
      "Finished in under 2 weeks",
      "Interactions & Animations",
      "Responsive design (mobile, tablet, desktop)",
      "Custom illustrations/graphics",
      "SEO-friendly layout",
      "User experience optimization",
      "Unlimited revisions",
      "Detailed style guide"
    ],
    addons: [
      { name: "Webflow Development", price: "+$799" },
      { name: "Additional page", price: "+$199" }
    ]
  },
  {
    title: "Full Website",
    price: "$1,299",
    description: "Comprehensive design for multi-page websites with cohesive branding.",
    features: [
      "Up to 5 pages",
      "Designed with Figma",
      "Discord/Slack/Email Communication",
      "Responsive design",
      "Interactive prototypes",
      "Custom UI components",
      "Animation specifications",
      "Brand guidelines integration",
      "Information architecture",
      "Content strategy consultation",
      "User flow optimization",
      "Accessibility considerations"
    ],
    addons: [
      { name: "Development", price: "+$1,599" },
      { name: "Additional 5 pages", price: "+$599" }
    ]
  },
  {
    title: "Product Design",
    price: "$1,999+",
    description: "End-to-end product design solutions for digital products and services.",
    features: [
      "User research",
      "Wireframing",
      "UI/UX design",
      "User testing",
      "Design system creation",
      "Competitive analysis",
      "Journey mapping",
      "Usability testing",
      "Interaction design",
      "Visual design language",
      "Icon and illustration system",
      "Developer handoff documentation"
    ],
    addons: [
      { name: "Ongoing support", price: "+$499/month" },
      { name: "Feature addition design", price: "+$799" }
    ]
  },
  {
    title: "App Design",
    price: "$2,499+",
    description: "Native-feeling mobile application design for iOS and Android platforms.",
    features: [
      "UI/UX design for mobile",
      "Platform-specific guidelines",
      "Interaction design",
      "Gesture-based navigation",
      "Onboarding flow",
      "Design system for scaling",
      "Dark/Light mode versions",
      "Animation specifications",
      "Prototype for user testing",
      "Icon and asset creation",
      "Accessibility compliance",
      "Developer handoff"
    ],
    addons: [
      { name: "Development", price: "+$5,999" },
      { name: "Backend system design", price: "+$1,499" }
    ]
  },
  {
    title: "Brand Identity",
    price: "$1,799+",
    description: "Comprehensive brand identity package for emerging and established businesses.",
    features: [
      "Logo design (multiple concepts)",
      "Color palette development",
      "Typography selection",
      "Brand guidelines document",
      "Business card design",
      "Letterhead & stationery",
      "Social media templates",
      "Email signature design",
      "Brand voice consultation",
      "Visual asset library",
      "Competitor analysis",
      "Brand positioning strategy"
    ],
    addons: [
      { name: "Packaging design", price: "+$899" },
      { name: "Marketing materials", price: "+$699" }
    ]
  },
  {
    title: "Pitch Deck",
    price: "$1,299+",
    description: "Professional presentation design to help secure investment and partnerships.",
    features: [
      "20-30 slides",
      "Custom template creation",
      "Data visualization",
      "Infographic design",
      "Message refinement",
      "Narrative structure",
      "Investor-focused content",
      "Professional formatting",
      "Icon and illustration system",
      "Animation and transitions",
      "Speaker notes",
      "Handouts version"
    ],
    addons: [
      { name: "Presentation coaching", price: "+$499" },
      { name: "Additional 10 slides", price: "+$299" }
    ]
  }
];

const DesignPackageCard = ({ 
  title, 
  price, 
  description, 
  features, 
  addons, 
  featured 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  addons: { name: string; price: string }[];
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
          
          {addons.map((addon, index) => (
            <div key={`addon-${index}`} className="flex items-center gap-2 text-sm text-white/80 mt-2">
              <Plus className="h-4 w-4 text-white/40" />
              <span>
                <SimpleText 
                  text={`${addon.name} ${addon.price}`} 
                  className="text-white/80"
                />
              </span>
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

const Design = () => {
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
            Design Services
          </BlurFadeHeading>
          <p className="text-white/70 max-w-2xl">
            <SimpleText 
              text="From sleek landing pages to comprehensive brand identities, I craft design solutions that bring your vision to life with clarity and impact."
              className="text-white/70"
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designPackages.map((pkg, index) => (
            <DesignPackageCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              addons={pkg.addons}
              featured={index === 1}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white/5 border border-white/10 rounded-lg p-6">
          <BlurFadeHeading 
            as="h2" 
            className="text-2xl font-semibold mb-4"
            delay={0.2}
          >
            Custom Projects
          </BlurFadeHeading>
          <p className="text-white/70 mb-6">
            <SimpleText 
              text="Need something special? I offer custom design solutions tailored to your unique requirements. Let's discuss your project and build something amazing together."
              className="text-white/70"
            />
          </p>
          <a href="https://cal.com/shaheerahmar/15min" className="inline-block" target="_blank" rel="noopener noreferrer">
            <InteractiveHoverButton 
              text="Schedule a Call" 
              className="border-white/20 text-white w-40"
            />
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Design;
