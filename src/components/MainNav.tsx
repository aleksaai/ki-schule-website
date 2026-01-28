import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navLogo from "@/assets/nav-logo.png";

const navItems = [
  {
    label: "Coaching",
    dropdown: [
      { label: "Young Founder", description: "Für Schüler, Azubis & Studenten", href: "/young-founder" },
      { label: "Agency Switcher", description: "Für Agenturinhaber aus anderen Bereichen", href: "/coming-soon" },
      { label: "9-5 Escape", description: "Für Angestellte die sich im KI-Space selbstständig machen wollen", href: "/coming-soon" },
    ],
  },
  { label: "Community", href: "/coming-soon" },
  {
    label: "Online-Kurse",
    dropdown: [
      { label: "KI-Agentur Starter", description: "Dein Einstieg in die KI-Welt", href: "/coming-soon" },
      { label: "KI-Agenten Masterclass", description: "Fortgeschrittene KI-Automation", href: "/coming-soon" },
      { label: "Workflow-Automation", description: "Prozesse automatisieren", href: "/coming-soon" },
      { label: "Vibe Coding Business", description: "No-Code & AI Development", href: "/coming-soon" },
      { label: "Testkunden Gewinnung", description: "Erste Kunden gewinnen", href: "/coming-soon" },
    ],
  },
  { label: "Erfolge", href: "#erfolgsgeschichte" },
];

interface NavItemProps {
  item: typeof navItems[0];
}

const NavItem = ({ item }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.bottom + 8
      });
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!item.dropdown) {
    // Handle anchor links for smooth scrolling
    if (item.href?.startsWith('#')) {
      return (
        <button
          onClick={() => {
            const targetId = item.href?.slice(1);
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-full transition-all duration-200"
        >
          {item.label}
        </button>
      );
    }
    return (
      <Link 
        to={item.href || "#"}
        className="px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-full transition-all duration-200"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <button 
        ref={buttonRef}
        className="px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-full transition-all duration-200 flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                transform: 'translateX(-50%)',
                zIndex: 9999
              }}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <div className="glass rounded-2xl p-2 min-w-[280px]">
                {item.dropdown.map((subItem, index) => (
                  <Link
                    key={index}
                    to={subItem.href || "#"}
                    className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-foreground/5 transition-colors group"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {subItem.label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {subItem.description}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

const MainNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <motion.nav 
      className="fixed top-4 left-0 right-0 z-50 hidden md:flex justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="glass rounded-full px-3 py-2 flex items-center gap-1">
        {/* Logo - Home Link / Scroll to top */}
        <button 
          onClick={handleLogoClick}
          className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-foreground/5 transition-all duration-200 mr-1"
        >
          <img src={navLogo} alt="KI-Schule Home" className="h-5 w-5 object-contain" />
        </button>
        
        {/* Desktop Navigation */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </div>
        
        {/* Desktop Login */}
        <a 
          href="https://app.ki-hochschule.de/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-liquid-glass px-4 py-2 rounded-full text-sm font-semibold ml-1"
        >
          Login
        </a>
      </div>
    </motion.nav>
  );
};

export default MainNav;
