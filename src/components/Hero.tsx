import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BlurFadeHeading } from "@/components/BlurFadeHeading";
import { Plus, ArrowRight } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import { memo } from "react";

const Hero = memo(() => {
  return <section className="min-h-[50vh] pt-24 pb-1 relative overflow-hidden mx-0 px-0 my-0 py-[90px]">
      {/* Plus icons where vertical lines meet navbar - mobile responsive */}
      <div className="absolute top-[-6px] left-[-6px] sm:left-[-36px] w-3 h-3 flex items-center justify-center z-10">
        <Plus className="w-3 h-3 text-white" />
      </div>
      <div className="absolute top-[-6px] right-[-6px] sm:right-[-36px] w-3 h-3 flex items-center justify-center z-10">
        <Plus className="w-3 h-3 text-white" />
      </div>
      
      <div className="content-container relative">
        <div className="flex flex-col items-start max-w-3xl mx-0 py-0">
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} whileHover={{
          scale: 1.1,
          rotate: 3,
          transition: {
            duration: 0.2
          }
        }} transition={{
          duration: 0.6
        }} className="mb-1">
            <div className="w-12 h-12 overflow-hidden border border-white/20">
              <img 
                src="/pfp.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover" 
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </motion.div>
          
          {/* Heading with blur fade animation and looping text */}
          <BlurFadeHeading 
            as="h1" 
            className="text-xl sm:text-2xl md:text-4xl leading-tight md:leading-tight tracking-tight lg:text-2xl font-semibold py-[7px] md:pt-[20px]"
            delay={0.2}
          >
            <div className="block font-medium text-white">
              Hey, I'm Shaheer, <AnimatedText words={["designer", "developer", "founder"]} className="text-white" />
            </div>
          </BlurFadeHeading>
          
          {/* Body text without animation */}
          <p className="mt-1.5 text-l font-light md:text-l text-white/80 max-w-2xl leading-relaxed my-0">
            I help transform complex ideas into elegant digital experiences - crafting products that combine functionality with visual excellence.
          </p>
          
          {/* Button without text animation */}
          <div className="mt-4 flex gap-4 mb-3 pb-[32px]">
            <Button className="group bg-white text-black hover:bg-white/90 px-6 py-6 text-base" asChild>
              <a href="https://wa.me/966553533795" target="_blank" rel="noopener noreferrer">
                Let's talk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
});

Hero.displayName = "Hero";

export default Hero;
