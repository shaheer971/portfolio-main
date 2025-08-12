import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";
import { Twitter, Linkedin } from "lucide-react";
import { NavOutlineButton } from "@/components/NavOutlineButton";

const BEHANCE_LINK = "https://www.behance.net/shaheerahmar";
const SERVICES_SECTION_ID = "services";
const CAL_LINK = "https://cal.com/shaheerahmar/15min";
const SOCIAL_LINKS = [
  {
    name: "Twitter",
    href: "https://x.com/_shaheerdev",
    Icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://contra.com/shaheer_ahmar_dyxao8hk",
    Icon: Linkedin,
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [socialOpen, setSocialOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // DESKTOP NAVBAR
  if (!isMobile) {
    return (
      <header
        className={cn(
          "fixed z-50 w-full transition-all duration-300 border-b border-white/10",
          isScrolled
            ? "bg-background/80 backdrop-blur-md"
            : "bg-background/50 backdrop-blur-sm"
        )}
        style={{
          borderBottomStyle: 'dashed'
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <NavOutlineButton as="a" href={BEHANCE_LINK}>
              Work
            </NavOutlineButton>
            <NavOutlineButton onClick={() => scrollToSection(SERVICES_SECTION_ID)}>
              Services
            </NavOutlineButton>
            <Popover open={socialOpen} onOpenChange={setSocialOpen}>
              <PopoverTrigger asChild>
                <NavOutlineButton
                  onClick={() => setSocialOpen((open) => !open)}
                  aria-haspopup="true"
                  aria-expanded={socialOpen}
                  style={{ position: "relative", zIndex: 10 }}
                >
                  Socials
                </NavOutlineButton>
              </PopoverTrigger>
              <PopoverContent
                align="center"
                className="w-44 p-0 mt-2 border border-white/15 shadow-lg bg-background rounded-none"
                side="bottom"
              >
                <div className="flex flex-col py-2 gap-1">
                  {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center gap-2 px-4 py-2 hover:bg-white/5  transition"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{name}</span>
                    </a>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <NavOutlineButton as="a" href="https://wa.me/966553533795" disableHover>
              Let's talk
            </NavOutlineButton>
          </div>
        </div>
      </header>
    );
  }

  // MOBILE NAVBAR
  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-300 left-1/2 -translate-x-1/2",
        "bottom-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border border-white/10"
          : "bg-background/50 backdrop-blur-sm border border-white/5",
        "py-2 px-3",
        "flex items-center justify-center",
        "",
        "w-fit"
      )}
      style={{maxWidth: 420}}
    >
      <div className="flex items-center justify-center gap-2">
        <NavOutlineButton as="a" href={BEHANCE_LINK}>
          Work
        </NavOutlineButton>
        <NavOutlineButton onClick={() => scrollToSection(SERVICES_SECTION_ID)}>
          Services
        </NavOutlineButton>
        <Popover open={socialOpen} onOpenChange={setSocialOpen}>
          <PopoverTrigger asChild>
            <NavOutlineButton
              onClick={() => setSocialOpen((open) => !open)}
              aria-haspopup="true"
              aria-expanded={socialOpen}
            >
              Socials
            </NavOutlineButton>
          </PopoverTrigger>
          <PopoverContent
            align="center"
            side="top"
            className="w-36 p-0 mb-2 border border-white/15 shadow-lg bg-background"
            sideOffset={8}
            style={{minWidth: "120px"}}
          >
            <div className="flex flex-col py-2 gap-1">
              {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-2 px-4 py-2 hover:bg-white/5 transition"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{name}</span>
                </a>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <NavOutlineButton as="a" href="https://wa.me/966553533795" disableHover>
          Let's&nbsp;talk
        </NavOutlineButton>
      </div>
    </header>
  );
};

export default Navbar;
