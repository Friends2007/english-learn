import { useState, useEffect, useRef } from "react";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSoundEffects } from "@/hooks/useSoundEffects";

interface IntroSplashProps {
  onComplete: () => void;
}

const englishWords = [
  "Hello", "Welcome", "Learn", "Speak", "Read", "Write", 
  "Listen", "Practice", "Success", "English", "Easy", "Fun"
];

const IntroSplash = ({ onComplete }: IntroSplashProps) => {
  const [stage, setStage] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullText = "Welcome to Learning!";
  const { playChime, playTypeClick, playWhoosh, playSparkle, playSuccess } = useSoundEffects();
  const soundPlayedRef = useRef({ chime: false, whoosh: false, sparkle: false, success: false });

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 100),
      setTimeout(() => setStage(2), 600),
      setTimeout(() => setStage(3), 1200),
      setTimeout(() => setStage(4), 2000),
      setTimeout(() => onComplete(), 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Sound effects for each stage
  useEffect(() => {
    if (stage === 1 && !soundPlayedRef.current.chime) {
      soundPlayedRef.current.chime = true;
      playChime();
    }
    if (stage === 2 && !soundPlayedRef.current.whoosh) {
      soundPlayedRef.current.whoosh = true;
      playWhoosh();
    }
    if (stage === 3 && !soundPlayedRef.current.sparkle) {
      soundPlayedRef.current.sparkle = true;
      playSparkle();
    }
    if (stage === 4 && !soundPlayedRef.current.success) {
      soundPlayedRef.current.success = true;
      playSuccess();
    }
  }, [stage, playChime, playWhoosh, playSparkle, playSuccess]);

  // Typing animation effect with sound
  useEffect(() => {
    if (stage >= 2) {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          if (index > 0 && index < fullText.length) {
            playTypeClick();
          }
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 80);
      return () => clearInterval(typeInterval);
    }
  }, [stage, playTypeClick]);

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500",
      "bg-background",
      stage >= 4 ? "opacity-0 pointer-events-none" : "opacity-100"
    )}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-30" />
      
      {/* Blur orbs */}
      <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/20 dark:bg-primary/30 blur-[100px] animate-pulse" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-secondary/15 dark:bg-secondary/20 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Floating English words */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {englishWords.map((word, i) => (
          <div
            key={word}
            className={cn(
              "absolute text-2xl md:text-3xl font-bold transition-all duration-1000",
              i % 3 === 0 ? "text-primary/20" : i % 3 === 1 ? "text-blue-400/15" : "text-emerald-400/15"
            )}
            style={{
              left: `${5 + (i % 4) * 25}%`,
              top: `${10 + Math.floor(i / 4) * 30}%`,
              opacity: stage >= 1 ? 1 : 0,
              transform: stage >= 1 ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 80}ms`,
              animation: stage >= 2 ? `float-up ${6 + (i % 5)}s ease-in-out infinite` : "none",
            }}
          >
            {word}
          </div>
        ))}
      </div>

      {/* Animated letters circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className={cn(
            "relative w-64 h-64 md:w-80 md:h-80 transition-all duration-1000",
            stage >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-50"
          )}
          style={{
            animation: stage >= 2 ? "spin 20s linear infinite" : "none"
          }}
        >
          {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map((letter, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const radius = 120;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div
                key={letter}
                className="absolute text-3xl md:text-4xl font-bold text-primary/30 dark:text-primary/40"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  animation: stage >= 2 ? `pulse 2s ease-in-out infinite` : "none",
                  animationDelay: `${i * 100}ms`
                }}
              >
                {letter}
              </div>
            );
          })}
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className={cn(
          "inline-flex items-center justify-center h-24 w-24 rounded-3xl gradient-button text-white mb-6 shadow-glow-lg transition-all duration-700",
          stage >= 1 ? "scale-100 opacity-100 rotate-0" : "scale-50 opacity-0 -rotate-12"
        )}>
          <BookOpen className="h-12 w-12" />
        </div>

        {/* Title */}
        <h1 className={cn(
          "text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-700",
          stage >= 2 ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        )}>
          Learn English
        </h1>

        {/* Typing animation text */}
        <div className={cn(
          "h-8 mb-2 transition-opacity duration-500",
          stage >= 2 ? "opacity-100" : "opacity-0"
        )}>
          <p className="text-lg text-primary font-medium">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Subtitle */}
        <p className={cn(
          "text-xl text-muted-foreground transition-all duration-700",
          stage >= 3 ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        )}>
          Master English language — <span className="text-primary font-semibold">easily</span>
        </p>

        {/* Animated words showcase */}
        <div className={cn(
          "flex justify-center gap-3 mt-6 flex-wrap max-w-md mx-auto transition-all duration-700",
          stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        )}>
          {["Grammar", "Vocabulary", "Reading", "Listening"].map((skill, i) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
              style={{
                animation: stage >= 3 ? `fade-in 0.5s ease-out forwards` : "none",
                animationDelay: `${i * 150}ms`,
                opacity: 0
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Loading dots */}
        <div className={cn(
          "flex justify-center gap-2 mt-8 transition-opacity duration-500",
          stage >= 3 ? "opacity-100" : "opacity-0"
        )}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroSplash;