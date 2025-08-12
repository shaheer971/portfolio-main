
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { BlurFadeHeading } from "./BlurFadeHeading";
import SimpleText from "./SimpleText";

const Contact = () => {
  return (
    <section id="contact" style={{
      animationDelay: '0.3s'
    }} className="relative slide-up my-0 py-[40px]">
      {/* Plus icons at bottom corners */}
      <div className="absolute bottom-[-6px] left-[-36px] w-3 h-3 flex items-center justify-center z-10">
        <Plus className="w-3 h-3 text-white" />
      </div>
      <div className="absolute bottom-[-6px] right-[-36px] w-3 h-3 flex items-center justify-center z-10">
        <Plus className="w-3 h-3 text-white" />
      </div>
      

      
      <div className="content-container">
        <div className="max-w-3xl">
          <BlurFadeHeading 
            as="h2" 
            className="text-xl text-white/60"
            delay={0.1}
          >
            Get in touch
          </BlurFadeHeading>
          <BlurFadeHeading 
            as="h3" 
            className="mt-2 text-gradient leading-tight md:text-2xl text-2xl font-bold"
            delay={0.2}
          >
            Have a project in mind? Let's create something exceptional together.
          </BlurFadeHeading>
          
          <motion.div 
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button className="group bg-white text-black hover:bg-white/90 px-6 py-6 text-base" asChild>
              <a href="https://cal.com/shaheerahmar/15min" target="_blank" rel="noopener noreferrer">
                Contact
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <a href="mailto:shaheerahmar4@gmail.com" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
