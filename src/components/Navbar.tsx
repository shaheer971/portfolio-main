
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";
import { Twitter, Linkedin } from "lucide-react";

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

// Outlined button style, shared
const navBtn =
  "px-4 py-2 rounded-lg border border-white/20 bg-transparent text-white font-medium hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 text-sm";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  // Control the socials popover manually on mobile for "open above" behavior
  const [socialOpen, setSocialOpen] = useState(false);
  const socialsBtnRef = useRef<HTMLButtonElement | null>(null);

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
          "fixed z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-white/10"
            : "bg-background/50 backdrop-blur-sm border-b border-white/5"
        )}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-center">
          <div className="flex items-center gap-4">
            {/* Work Button */}
            <a
              href={BEHANCE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={navBtn}
            >
              Work
            </a>
            {/* Services Button */}
            <button
              className={navBtn}
              onClick={() => scrollToSection(SERVICES_SECTION_ID)}
              type="button"
            >
              Services
            </button>
            {/* Socials Button with Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <button className={navBtn} type="button">
                  Socials
                </button>
              </PopoverTrigger>
              <PopoverContent
                align="center"
                className="w-44 p-0 mt-2 border border-white/15 rounded-lg shadow-lg bg-background"
                side="bottom"
              >
                <div className="flex flex-col py-2 gap-1">
                  {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center gap-2 px-4 py-2 hover:bg-white/5 rounded transition"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{name}</span>
                    </a>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>
    );
  }

  // MOBILE NAVBAR (bottom bar)
  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-300 left-1/2 -translate-x-1/2",
        "bottom-6 w-[80%]",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border border-white/10"
          : "bg-background/50 backdrop-blur-sm border border-white/5",
        "rounded-full py-3 px-6"
      )}
    >
      <div className="flex items-center justify-between gap-4 w-full">
        <div className="flex-1 flex items-center justify-center gap-4">
          {/* Work */}
          <a
            href={BEHANCE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={navBtn}
          >
            Work
          </a>
          {/* Services */}
          <button
            className={navBtn}
            onClick={() => scrollToSection(SERVICES_SECTION_ID)}
            type="button"
            ref={socialsBtnRef}
          >
            Services
          </button>
          {/* Socials Button w/ popover above the "Services" button */}
          <Popover open={socialOpen} onOpenChange={setSocialOpen}>
            <PopoverTrigger asChild>
              <button
                className={navBtn}
                type="button"
                onClick={() => setSocialOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={socialOpen}
              >
                Socials
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="center"
              side="top"
              className="w-36 p-0 mb-2 border border-white/15 rounded-lg shadow-lg bg-background"
              sideOffset={8}
            >
              <div className="flex flex-col py-2 gap-1">
                {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-white/5 rounded transition"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{name}</span>
                  </a>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
