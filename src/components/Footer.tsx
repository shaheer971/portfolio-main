
import { Plus } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 relative">
      {/* Dashed top border with plus icons */}
      <div className="absolute top-0 left-0 right-0">
        <div className="content-container relative">
          <div className="absolute left-[-30px] right-[-30px] h-[1.2px] border-t border-dashed border-white/12">
            <div className="absolute top-[-6px] left-[-6px] w-3 h-3 flex items-center justify-center">
              <Plus className="w-3 h-3 text-white" />
            </div>
            <div className="absolute top-[-6px] right-[-6px] w-3 h-3 flex items-center justify-center">
              <Plus className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      </div>
      

      
      <div className="content-container">
        <div className="flex items-center">
          <div className="text-white/60">
            <span>© {currentYear}</span>
            <span className="text-white mx-1">Shaheer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
