import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface LessonCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  progress: number;
  color: "primary" | "secondary" | "accent";
  onClick?: () => void;
  delay?: number;
}

const colorClasses = {
  primary: "from-primary to-primary/80 text-primary-foreground",
  secondary: "from-secondary to-secondary/80 text-secondary-foreground",
  accent: "from-accent to-accent/80 text-accent-foreground",
};

const progressColorClasses = {
  primary: "bg-primary-foreground/30",
  secondary: "bg-secondary-foreground/30",
  accent: "bg-accent-foreground/30",
};

const progressFillClasses = {
  primary: "bg-primary-foreground",
  secondary: "bg-secondary-foreground",
  accent: "bg-accent-foreground",
};

export function LessonCard({
  title,
  description,
  icon: Icon,
  progress,
  color,
  onClick,
  delay = 0,
}: LessonCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl p-6 text-left transition-all duration-300",
        "bg-gradient-to-br shadow-card hover:shadow-xl hover:-translate-y-1",
        "animate-fade-in",
        colorClasses[color]
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-xl bg-white/20 p-3 backdrop-blur-sm">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm opacity-90">{description}</p>
        
        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className={cn("h-2 w-full rounded-full", progressColorClasses[color])}>
            <div
              className={cn("h-full rounded-full transition-all duration-500", progressFillClasses[color])}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
      
      {/* Decorative circle */}
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110" />
    </button>
  );
}
