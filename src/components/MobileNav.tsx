import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Coaching",
    dropdown: [
      { label: "Young Founder", description: "Für Schüler, Azubis & Studenten", href: "/coming-soon" },
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
  { label: "Blog", href: "/coming-soon" },
];

interface MobileNavItemProps {
  item: typeof navItems[0];
  onClose: () => void;
}

const MobileNavItem = ({ item, onClose }: MobileNavItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!item.dropdown) {
    if (item.href?.startsWith('#')) {
      return (
        <button
          onClick={() => {
            const targetId = item.href?.slice(1);
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
            onClose();
          }}
          className="w-full text-left px-5 py-4 text-lg font-medium text-foreground/90 hover:text-foreground hover:bg-foreground/5 rounded-2xl transition-colors"
        >
          {item.label}
        </button>
      );
    }
    return (
      <Link 
        to={item.href || "#"}
        onClick={onClose}
        className="block px-5 py-4 text-lg font-medium text-foreground/90 hover:text-foreground hover:bg-foreground/5 rounded-2xl transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="glass-mobile-item rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-5 py-4 text-lg font-medium text-foreground/90 hover:text-foreground transition-colors"
      >
        <span className="flex items-center gap-2">
          {item.label}
          <span className="text-xs text-primary/70 font-normal">
            ({item.dropdown.length})
          </span>
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-foreground/60" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 space-y-1">
              {item.dropdown.map((subItem, index) => (
                <Link
                  key={index}
                  to={subItem.href || "#"}
                  onClick={onClose}
                  className="block px-4 py-3 rounded-xl bg-foreground/[0.03] hover:bg-foreground/[0.07] transition-colors border border-foreground/[0.04]"
                >
                  <span className="block text-base font-medium text-foreground/85">
                    {subItem.label}
                  </span>
                  <span className="block text-sm text-muted-foreground mt-0.5">
                    {subItem.description}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button with glass background */}
      <button
        onClick={() => setIsOpen(true)}
        className="glass p-3 rounded-full text-foreground/80 hover:text-foreground transition-colors"
        aria-label="Menü öffnen"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[9998]"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel - Glass effect */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-[9999] glass-mobile-menu"
            >
              {/* Header with close button */}
              <div className="flex items-center justify-between p-4 border-b border-foreground/[0.06]">
                <span className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
                  Menü
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5"
                  aria-label="Menü schließen"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-180px)]">
                {navItems.map((item) => (
                  <MobileNavItem key={item.label} item={item} onClose={() => setIsOpen(false)} />
                ))}
              </nav>

              {/* Login Button at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-foreground/[0.06] bg-background/50 backdrop-blur-md">
                <a 
                  href="https://app.ki-hochschule.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-liquid-glass-accent w-full py-4 rounded-full text-base font-semibold flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
