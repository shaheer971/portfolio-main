
import SimpleText from "./SimpleText";
import { BlurFadeHeading } from "./BlurFadeHeading";

const disciplines = [{
  id: 1,
  name: "Visual design",
  description: "Creating aesthetic interfaces with strong visual hierarchy and brand alignment"
}, {
  id: 2,
  name: "User experience",
  description: "Crafting intuitive user journeys that enhance engagement and satisfaction"
}, {
  id: 3,
  name: "Front-end development",
  description: "Building responsive, accessible, and performant user interfaces"
}, {
  id: 4,
  name: "Back-end systems",
  description: "Architecting robust server-side solutions and API integrations"
}];

const Disciplines = () => {
  return (
    <section id="disciplines" className="relative py-[20px]">
      
      <div className="content-container py-0">
        <div>
          <BlurFadeHeading 
            as="h2" 
            className="text-xl text-white/60"
            delay={0.1}
          >
            Disciplines
          </BlurFadeHeading>
        </div>
        
        <div className="mt-8 space-y-4 my-[23px]">
          {disciplines.map(discipline => (
            <div key={discipline.id} className="pb-4 border-b border-white/5 hover:border-white/10 transition-colors duration-300 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <BlurFadeHeading 
                  as="h4" 
                  className="font-medium group-hover:text-gradient transition-all duration-300 md:text-l text-lg"
                  delay={0.2}
                >
                  {discipline.name}
                </BlurFadeHeading>
                <div className="mt-2 md:mt-0 md:w-1/2 text-white/60 text-sm md:text-base leading-relaxed">
                  {discipline.description.split('\n').map((line, index) => (
                    <div key={index} className="text-white/60">
                      <SimpleText 
                        text={line}
                        className="text-white/60"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
