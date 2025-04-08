
import { Badge } from "@/components/ui/badge";
import DecryptedText from "./DecryptedText";

type VentureStatus = 'active' | 'in-progress' | 'not-started';

type Venture = {
  id: number;
  name: string;
  description: string;
  url: string;
  status: VentureStatus;
};

const ventures: Venture[] = [
  {
    id: 1,
    name: "onliversity.com",
    description: "The new way to learn",
    url: "https://onliversity.com",
    status: "in-progress"
  },
  {
    id: 2,
    name: "mujtama.app",
    description: "Achieve your goals and earn",
    url: "https://mujtama.framer.website/",
    status: "in-progress"
  },
  {
    id: 3,
    name: "waitlister.co",
    description: "Create beautiful waitlist pages",
    url: "#",
    status: "not-started"
  },
  {
    id: 4,
    name: "resumly.io",
    description: "Instantly create resume portfolio",
    url: "#",
    status: "not-started"
  },
  {
    id: 5,
    name: "askify.ai",
    description: "Chat with any website",
    url: "https://askifyapp.netlify.app",
    status: "not-started"
  },
  {
    id: 6,
    name: "supersi.de",
    description: "Browser productivity Sidebar",
    url: "https://superside.netlify.app",
    status: "not-started"
  },
  {
    id: 7,
    name: "tazkiyah.app",
    description: "Simplify habit building",
    url: "https://tazkiyah.netlify.app",
    status: "not-started"
  },
  {
    id: 8,
    name: "tahseen.health",
    description: "Simplify health tracking",
    url: "https://tahseen.health",
    status: "not-started"
  }
];

const getStatusColor = (status: VentureStatus) => {
  switch (status) {
    case 'active':
      return 'bg-green-500/20 text-green-400 hover:bg-green-500/30';
    case 'in-progress':
      return 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30';
    case 'not-started':
      return 'bg-slate-500/20 text-slate-400 hover:bg-slate-500/30';
    default:
      return 'bg-slate-500/20 text-slate-400 hover:bg-slate-500/30';
  }
};

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
              className="group p-3 rounded-lg border border-white/10 hover:border-white/90 hover:bg-white/5 transition-all duration-300" 
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
                <Badge className={`${getStatusColor(venture.status)} border border-white/10`}>
                  {venture.status.replace('-', ' ')}
                </Badge>
              </div>
              <p className="mt-2 text-white/60 text-sm leading-relaxed">
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
