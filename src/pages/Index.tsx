
import React, { memo, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Plus } from "lucide-react";
import { usePerformance } from "@/hooks/usePerformance";

// Lazy load heavy components for better performance
const Projects = lazy(() => import("@/components/Projects"));
const Ventures = lazy(() => import("@/components/Ventures"));
const Disciplines = lazy(() => import("@/components/Disciplines"));
// const Services = lazy(() => import("@/components/Services"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Memoized separator component to prevent unnecessary re-renders
const SectionSeparator = memo(() => (
  <div className="relative">
    <div className="content-container relative">
      <div className="absolute left-[-30px] right-[-30px] h-[1.2px] border-t border-dashed border-white/12">
        <div className="absolute top-[-6px] left-[-6px] w-3 h-3 flex items-center justify-center">
          <Plus className="w-3 h-3 text-white" />
        </div>
        <div className="absolute top-[-6px] right-[-6px] w-3 h-3 flex items-center justify-center">
          <Plus className="w-3 h-3 text-white" />
        </div>
      </div>
    </div>
  </div>
));

SectionSeparator.displayName = "SectionSeparator";

// Loading component for lazy-loaded sections
const SectionLoader = memo(() => (
  <div className="py-20 flex justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white/20"></div>
  </div>
));

SectionLoader.displayName = "SectionLoader";

const Index = memo(() => {
  const { preloadResource } = usePerformance();

  // Preload critical assets
  React.useEffect(() => {
    preloadResource('/pfp.jpeg', 'image');
  }, [preloadResource]);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Vertical lines - always visible with dashed style */}
      <div className="fixed inset-0 pointer-events-none z-0 will-change-transform">
        <div className="content-container h-full relative">
          <div className="absolute top-0 left-[-30px] w-[1.2px] h-full border-l border-dashed border-white/12" />
          <div className="absolute top-0 right-[-30px] w-[1.2px] h-full border-l border-dashed border-white/12" />
        </div>
      </div>
      
      <Navbar />
      <Hero />
      
      {/* Horizontal separator after Get Started section */}
      <SectionSeparator />
      
      {/* Ventures section comes before Projects */}
      <Suspense fallback={<SectionLoader />}>
        <Ventures />
      </Suspense>
      
      <SectionSeparator />
      
      {/* Projects section comes after Ventures */}
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      
      <SectionSeparator />
      
      <Suspense fallback={<SectionLoader />}>
        <Disciplines />
      </Suspense>
      
      <SectionSeparator />
      
      {/* <SectionSeparator />
      
      Add Services section after Disciplines
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      
      <SectionSeparator /> */}
      
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
});

Index.displayName = "Index";

export default Index;
