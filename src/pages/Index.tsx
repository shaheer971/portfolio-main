
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Ventures from "@/components/Ventures";
import Disciplines from "@/components/Disciplines";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Vertical lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="content-container h-full relative">
          <div className="absolute top-0 left-[-30px] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute top-0 right-[-30px] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>
      </div>
      
      <Navbar />
      <Hero />
      
      <div className="relative">
        <div className="content-container relative">
          <div className="absolute left-[-30px] right-[-30px] h-px bg-white/10">
            <div className="absolute -top-1 left-0 w-2 h-2 bg-white rotate-45" />
            <div className="absolute -top-1 right-0 w-2 h-2 bg-white rotate-45" />
          </div>
        </div>
      </div>
      
      {/* Ventures section comes before Projects */}
      <Ventures />
      
      <div className="relative">
        <div className="content-container relative">
          <div className="absolute left-[-30px] right-[-30px] h-px bg-white/10">
            <div className="absolute -top-1 left-0 w-2 h-2 bg-white rotate-45" />
            <div className="absolute -top-1 right-0 w-2 h-2 bg-white rotate-45" />
          </div>
        </div>
      </div>
      
      {/* Projects section comes after Ventures */}
      <Projects />
      
      <div className="relative">
        <div className="content-container relative">
          <div className="absolute left-[-30px] right-[-30px] h-px bg-white/10">
            <div className="absolute -top-1 left-0 w-2 h-2 bg-white rotate-45" />
            <div className="absolute -top-1 right-0 w-2 h-2 bg-white rotate-45" />
          </div>
        </div>
      </div>
      
      <Disciplines />
      
      <div className="relative">
        <div className="content-container relative">
          <div className="absolute left-[-30px] right-[-30px] h-px bg-white/10">
            <div className="absolute -top-1 left-0 w-2 h-2 bg-white rotate-45" />
            <div className="absolute -top-1 right-0 w-2 h-2 bg-white rotate-45" />
          </div>
        </div>
      </div>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
