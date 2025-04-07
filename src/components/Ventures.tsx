
import { ArrowUpRight } from "lucide-react";
import DecryptedText from "./DecryptedText";

type Venture = {
  id: number;
  name: string;
  description: string;
  url: string;
};

const ventures: Venture[] = [{
  id: 1,
  name: "onliversity.com",
  description: "The new way to learn",
  url: "https://onliversity.com"
}, {
  id: 2,
  name: "mujtama.app",
  description: "Acheive your goals and earn",
  url: "https://mujtama.netlify.app"
}, {
  id: 3,
  name: "supersi.de",
  description: "Browser productivity Sidebar",
  url: "https://superside.netlify.app"
}, {
  id: 4,
  name: "tazkiyah.app",
  description: "Simplify habit building",
  url: "https://tazkiyah.netlify.app"
}, {
  id: 5,
  name: "askify.ai",
  description: "Chat with any website",
  url: "https://askifyapp.netlify.app"
}, {
  id: 6,
  name: "tahseen.health",
  description: "Simplify health tracking",
  url: "https://tahseen.health"
}];

const Ventures = () => {
  return (
    <section id="ventures" className="relative my-0 py-[40px]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
      </div>
      
      <div className="content-container">
        <div>
          <h2 className="text-xl text-white/60">
            <DecryptedText 
              text="Ventures"
              animateOn="view"
              speed={50}
              sequential={true}
            />
          </h2>
        </div>
        
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
          {ventures.map(venture => (
            <a 
              key={venture.id} 
              href={venture.url} 
              className="group p-4 rounded-lg border border-white/10 hover:border-white/90 hover:bg-white/5 transition-all duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="flex items-start justify-between">
                <h4 className="font-medium text-lg">
                  <DecryptedText 
                    text={venture.name}
                    animateOn="view"
                    speed={30}
                    sequential={true}
                  />
                </h4>
                <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-white transition-colors" />
              </div>
              <p className="mt-3 text-white/60 text-sm leading-relaxed">
                <DecryptedText 
                  text={venture.description}
                  animateOn="view"
                  speed={20}
                  sequential={true}
                  encryptedClassName="text-white/30"
                />
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
