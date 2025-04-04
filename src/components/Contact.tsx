
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import DecryptedText from "./DecryptedText";

const Contact = () => {
  return (
    <section id="contact" style={{
      animationDelay: '0.3s'
    }} className="relative slide-up my-0 py-[40px]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
      </div>
      
      <div className="content-container">
        <div className="max-w-3xl">
          <h2 className="text-xl text-white/60">
            <DecryptedText 
              text="Get in touch" 
              animateOn="both"
              speed={50}
              sequential={true}
            />
          </h2>
          <h3 className="mt-2 text-gradient leading-tight md:text-2xl text-2xl font-bold">
            <DecryptedText 
              text="Have a project in mind? Let's create something exceptional together."
              animateOn="both"
              speed={30}
              sequential={true}
            />
          </h3>
          
          <motion.div 
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button className="group bg-white text-black hover:bg-white/90 px-6 py-6 text-base" asChild>
              <a href="https://cal.com/shaheerahmar/15min" target="_blank" rel="noopener noreferrer">
                Contact me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <a href="mailto:shaheerahmar4@gmail.com" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <DecryptedText 
                text="shaheerahmar4@gmail.com"
                animateOn="both"
                speed={20}
                sequential={true}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
