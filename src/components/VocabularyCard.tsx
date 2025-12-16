import { useState } from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface VocabularyCardProps {
  russian: string;
  uzbek: string;
  pronunciation: string;
  delay?: number;
}

export function VocabularyCard({ russian, uzbek, pronunciation, delay = 0 }: VocabularyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const speak = (e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(russian);
    utterance.lang = "ru-RU";
    speechSynthesis.speak(utterance);
  };

  return (
    <div
      className="perspective-1000 animate-fade-in cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          "relative h-48 w-full transition-transform duration-500 preserve-3d",
          isFlipped && "rotate-y-180"
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-card p-6 shadow-card backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="mb-2 text-4xl font-bold text-foreground">{russian}</span>
          <span className="mb-4 text-sm text-muted-foreground">{pronunciation}</span>
          <button
            onClick={speak}
            className="rounded-full bg-primary/10 p-3 text-primary transition-colors hover:bg-primary/20"
          >
            <Volume2 className="h-5 w-5" />
          </button>
          <span className="mt-4 text-xs text-muted-foreground">Tarjimani ko'rish uchun bosing</span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-primary p-6 text-primary-foreground shadow-card"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span className="text-3xl font-bold">{uzbek}</span>
          <span className="mt-4 text-xs opacity-80">Orqaga qaytish uchun bosing</span>
        </div>
      </div>
    </div>
  );
}
