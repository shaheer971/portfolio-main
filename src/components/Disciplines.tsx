
import DecryptedText from "./DecryptedText";

const disciplines = [{
  id: 1,
  name: "visual design",
  description: "Creating aesthetic interfaces with strong visual hierarchy and brand alignment"
}, {
  id: 2,
  name: "user experience",
  description: "Crafting intuitive user journeys that enhance engagement and satisfaction"
}, {
  id: 3,
  name: "front-end development",
  description: "Building responsive, accessible, and performant user interfaces"
}, {
  id: 4,
  name: "back-end systems",
  description: "Architecting robust server-side solutions and API integrations"
}
//                      {
//   id: 5,
//   name: "product strategy",
//   description: "Defining product vision and roadmap to achieve business objectives"
// }, {
//   id: 6,
//   name: "design systems",
//   description: "Establishing scalable design languages and component libraries"
// }];

const Disciplines = () => {
  return (
    <section id="disciplines" className="relative py-[40px]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
      </div>
      
      <div className="content-container py-0">
        <div>
          <h2 className="text-xl text-white/60">
            <DecryptedText 
              text="Disciplines"
              animateOn="both"
              speed={50}
              sequential={true}
            />
          </h2>
        </div>
        
        <div className="mt-8 space-y-4 my-[23px]">
          {disciplines.map(discipline => (
            <div key={discipline.id} className="pb-4 border-b border-white/5 hover:border-white/10 transition-colors duration-300 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h4 className="font-medium group-hover:text-gradient transition-all duration-300 md:text-xl text-lg">
                  <DecryptedText 
                    text={discipline.name}
                    animateOn="both"
                    speed={30}
                    sequential={true}
                  />
                </h4>
                <p className="mt-2 md:mt-0 md:w-1/2 text-white/60 text-sm md:text-base leading-relaxed">
                  <DecryptedText 
                    text={discipline.description}
                    animateOn="both"
                    speed={20}
                    sequential={true}
                    encryptedClassName="text-white/30"
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
