
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import SplitText from "./SplitText";

const Hero = () => {
  return (
    <section className="min-h-[50vh] pt-16 pb-1 relative overflow-hidden mx-0 px-0 my-0 py-[60px]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
      </div>
      
      <div className="content-container relative">
        <div className="flex flex-col items-start max-w-3xl mx-0 py-0">
          {/* Profile Picture with hover effect */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            whileHover={{
              scale: 1.1,
              rotate: 3,
              transition: { duration: 0.2 }
            }}
            transition={{
              duration: 0.6
            }}
            className="mb-2"
          >
            <div className="w-12 h-12 rounded-md overflow-hidden border border-white/20">
              <img 
                src="/pfp.jpeg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Hero Text with SplitText */}
          <div className="md:text-6xl leading-tight md:leading-tight tracking-tight lg:text-2xl text-2xl font-semibold py-[7px] md:pt-[20px]">
            <div className="block font-extrabold text-white">
              <SplitText 
                text="Hey, I'm Shaheer,"
                delay={150}
                textAlign="left"
                threshold={0.2}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,20px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              />
            </div>
            <div className="inline-block mt-1 font-bold text-white">
              <SplitText 
                text="an aspiring designer and developer."
                delay={150}
                textAlign="left"
                threshold={0.2}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,20px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              />
            </div>
          </div>
          
          <motion.p 
            initial={{
              opacity: 0,
              y: 20
            }} 
            animate={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.6,
              delay: 0.6
            }} 
            className="mt-1.5 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed my-0"
          >
            I help transform complex ideas into elegant digital experiences — crafting products that combine functionality with visual excellence.
          </motion.p>
          
          <motion.div 
            initial={{
              opacity: 0,
              filter: "blur(8px)"
            }} 
            animate={{
              opacity: 1,
              filter: "blur(0px)"
            }} 
            transition={{
              duration: 0.6,
              delay: 0.8
            }} 
            className="mt-2.5 flex flex-col sm:flex-row gap-4 mb-3 pb-[40px]"
          >
            <InteractiveHoverButton 
              text="Let's talk"
              href="https://cal.com/shaheerahmar/15min"
              className="w-40 p-2.5 border-white/20 text-white"
            />
            <InteractiveHoverButton 
              text="View work"
              href="https://www.behance.net/shaheerahmar"
              className="w-40 p-2.5 border-white/20 text-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
