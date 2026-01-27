import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Step {
  id: number;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface StepCardProps {
  step: Step;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const StepCard = ({ step, index, isActive, onClick }: StepCardProps) => {
  const Icon = step.icon;

  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
        isActive ? "cursor-default" : "cursor-pointer"
      }`}
      style={{
        background: isActive
          ? "linear-gradient(135deg, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.03) 100%)"
          : "linear-gradient(145deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 100%)",
        border: isActive
          ? "1.5px solid hsl(var(--primary) / 0.4)"
          : "1px solid rgba(255,255,255,0.6)",
        boxShadow: isActive
          ? "0 0 20px hsl(var(--primary) / 0.15), inset 0 1px 0 rgba(255,255,255,0.5)"
          : "0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
      whileHover={!isActive ? { scale: 1.01, y: -2 } : {}}
      whileTap={!isActive ? { scale: 0.99 } : {}}
    >
      <div className="flex items-start gap-4">
        {/* Step Number + Icon */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
            isActive ? "bg-primary text-white" : "bg-muted/50 text-muted-foreground"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Schritt {index + 1}
            </span>
          </div>
          <h4
            className={`text-base font-bold mb-2 transition-colors duration-300 ${
              isActive ? "text-foreground" : "text-foreground/70"
            }`}
          >
            {step.title}
          </h4>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isActive ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </motion.button>
  );
};

export default StepCard;
