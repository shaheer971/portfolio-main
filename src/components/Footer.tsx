
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-white/5 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
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
