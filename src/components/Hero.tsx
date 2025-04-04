
import { motion } from "framer-motion";
import DecryptedText from "./DecryptedText";
import GradientText from "./GradientText";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Hero = () => {
  return <section className="min-h-[50vh] pt-16 pb-1 relative overflow-hidden mx-0 px-0 my-0 py-[60px]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
      </div>
      
      <div className="content-container relative">
        <div className="flex flex-col items-start max-w-3xl mx-0 py-0">
          <motion.h1 initial={{
          opacity: 0,
          filter: "blur(8px)"
        }} animate={{
          opacity: 1,
          filter: "blur(0px)"
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="md:text-6xl leading-tight md:leading-tight tracking-tight lg:text-2xl text-2xl font-semibold py-[7px] md:pt-[100px]">
            <span className="text-gradient block font-extrabold">
              Hey, I'm Shaheer,
            </span>
            <span className="inline-block mt-1 font-medium">
              an aspiring{" "}
              <span className="inline-flex">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  className="font-instrument italic font-thin text-2xl inline-block"
                >
                  designer
                </GradientText>
                {" "}  &  {" "}
                <GradientText
                  colors={["#ff40aa", "#ff4079", "#ff40aa"]}
                  animationSpeed={3}
                  className="font-instrument italic font-thin text-2xl inline-block"
                >
                  developer
                </GradientText>
              </span>.
            </span>
          </motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="mt-1.5 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed my-0">
            <DecryptedText text="I help transform complex ideas into elegant digital experiences — crafting products that combine functionality with visual excellence." animateOn="both" speed={20} sequential={true} revealDirection="start" />
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          filter: "blur(8px)"
        }} animate={{
          opacity: 1,
          filter: "blur(0px)"
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="mt-2.5 flex flex-col sm:flex-row gap-4 mb-3 pb-[40px]">
            <InteractiveHoverButton 
              text="Let's talk"
              href="https://cal.com/shaheerahmar/15min"
              className="w-40 p-2.5 border-white/20 text-white"
            />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;
