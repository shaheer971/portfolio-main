
import SimpleText from "./SimpleText";

type ProjectFiltersProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  isMobile: boolean;
};

const ProjectFilters = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory,
  isMobile
}: ProjectFiltersProps) => {
  const mobileContentPadding = isMobile ? 'px-1' : 'px-2';
  
  return (
    <div className={`w-full mb-4 ${mobileContentPadding}`}>
      <div className={`w-full grid grid-cols-2 sm:grid-cols-3 md:flex md:items-center gap-2 p-1.5 overflow-x-auto scrollbar-hidden ${!isMobile ? 'rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl' : ''}`}>
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => onSelectCategory(category)} 
            className={`w-full md:flex-1 px-4 md:px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap
              ${category === selectedCategory ? "bg-white/10 text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.1)]" : "text-white/60 hover:text-white hover:bg-white/5"}`}
          >
            <SimpleText text={category} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilters;
