
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Twitter, Linkedin, Home, Palette } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialIcons = [
    { Icon: Twitter, href: "https://x.com/_shaheerdev", label: "Twitter" },
    { Icon: Palette, href: "https://www.behance.net/shaheerahmar", label: "Behance" },
    { Icon: Linkedin, href: "https://contra.com/shaheer_ahmar_dyxao8hk", label: "Contra" }
  ];

  if (isMobile) {
    return (
      <header 
        className={cn(
          "fixed z-50 transition-all duration-300 left-1/2 -translate-x-1/2",
          "bottom-6 w-[80%]",
          isScrolled ? "bg-background/80 backdrop-blur-md border border-white/10" : "bg-background/50 backdrop-blur-sm border border-white/5",
          "rounded-full py-3 px-6"
        )}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#" className="text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-2">
            <Home className="w-4 h-4" />
          </a>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              {socialIcons.map(({ Icon, href, label }, index) => (
                <a 
                  key={index}
                  href={href}
                  className="text-white/70 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            <a 
              href="https://cal.com/shaheerahmar/15min" 
              className="text-xs py-1.5 px-3 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's talk
            </a>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header 
      className={cn(
        "fixed z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-background/50 backdrop-blur-sm border-b border-white/5"
      )}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-center">
        <div className="flex items-center justify-center gap-6">
          <a href="#" className="text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-2">
            <Home className="w-4 h-4" />
          </a>
          
          <div className="flex gap-4">
            {socialIcons.map(({ Icon, href, label }, index) => (
              <a 
                key={index}
                href={href}
                className="text-white/70 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          
          <a 
            href="https://cal.com/shaheerahmar/15min" 
            className="text-xs py-1.5 px-3 border border-white/10 rounded-full hover:bg-white/5 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
