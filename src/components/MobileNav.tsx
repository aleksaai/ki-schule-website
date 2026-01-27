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
          className="w-full text-left px-4 py-3 text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
        >
          {item.label}
        </button>
      );
    }
    return (
      <Link 
        to={item.href || "#"}
        onClick={onClose}
        className="block px-4 py-3 text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
      >
        {item.label}
        <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 space-y-1 pb-2">
              {item.dropdown.map((subItem, index) => (
                <Link
                  key={index}
                  to={subItem.href || "#"}
                  onClick={onClose}
                  className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <span className="block text-base font-medium text-white/80">
                    {subItem.label}
                  </span>
                  <span className="block text-sm text-white/50">
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
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-foreground/70 hover:text-foreground transition-colors"
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-[9999]"
              style={{
                background: "linear-gradient(180deg, hsl(220 35% 12%) 0%, hsl(220 30% 10%) 100%)",
              }}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  aria-label="Menü schließen"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="px-4 space-y-1">
                {navItems.map((item) => (
                  <MobileNavItem key={item.label} item={item} onClose={() => setIsOpen(false)} />
                ))}
              </nav>

              {/* Login Button */}
              <div className="absolute bottom-8 left-4 right-4">
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
    </div>
  );
};

export default MobileNav;
