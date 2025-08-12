
import { Badge } from "@/components/ui/badge";
import SimpleText from "./SimpleText";
import { BlurFadeHeading } from "./BlurFadeHeading";

type VentureStatus = 'active' | 'building' | 'up next' | 'not-started';

type Venture = {
  id: number;
  name: string;
  url: string;
  status: VentureStatus;
};

const ventures: Venture[] = [
  {
    id: 0,
    name: "Templates",
    url: "https://shaheer972.gumroad.com/",
    status: "active"
  },
  {
    id: 1,
    name: "Onliversity",
    url: "https://onliversity.com",
    status: "building"
  },
  // {
  //   id: 2,
  //   name: "mujtama.app",
  //   description: "Achieve your goals and earn",
  //   url: "https://mujtama.framer.website/",
  //   status: "building"
  // },


];

const getStatusColor = (status: VentureStatus) => {
  switch (status) {
    case 'active':
      return 'bg-green-500/20 text-green-400 hover:bg-green-500/30';
    case 'building':
      return 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30';
    case 'up next':
      return 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30';
    case 'not-started':
      return 'bg-slate-500/20 text-slate-400 hover:bg-slate-500/30';
    default:
      return 'bg-slate-500/20 text-slate-400 hover:bg-slate-500/30';
  }
};

const Ventures = () => {
  return (
    <section id="ventures" className="relative my-0 py-[20px]">
      
      <div className="content-container">
        <div>
          <BlurFadeHeading 
            as="h2" 
            className="text-xl text-white/60"
            delay={0.1}
          >
            Ventures
          </BlurFadeHeading>
        </div>
        
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
          {ventures.map(venture => (
            <a 
              key={venture.id} 
              href={venture.url} 
              className="group p-3 border border-white/10 hover:border-white/90 hover:bg-white/5 transition-all duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="flex items-start justify-between">
                <BlurFadeHeading 
                  as="h4" 
                  className="font-medium text-l"
                  delay={0.2}
                >
                  {venture.name}
                </BlurFadeHeading>
                <Badge className={`${getStatusColor(venture.status)} border border-white/10`}>
                  {venture.status.replace('-', ' ')}
                </Badge>
              </div>
       
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
