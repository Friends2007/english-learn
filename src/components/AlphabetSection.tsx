import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

const cyrillicAlphabet = [
  { letter: "А", pronunciation: "a" },
  { letter: "Б", pronunciation: "b" },
  { letter: "В", pronunciation: "v" },
  { letter: "Г", pronunciation: "g" },
  { letter: "Д", pronunciation: "d" },
  { letter: "Е", pronunciation: "ye" },
  { letter: "Ё", pronunciation: "yo" },
  { letter: "Ж", pronunciation: "j" },
  { letter: "З", pronunciation: "z" },
  { letter: "И", pronunciation: "i" },
  { letter: "Й", pronunciation: "y" },
  { letter: "К", pronunciation: "k" },
  { letter: "Л", pronunciation: "l" },
  { letter: "М", pronunciation: "m" },
  { letter: "Н", pronunciation: "n" },
  { letter: "О", pronunciation: "o" },
  { letter: "П", pronunciation: "p" },
  { letter: "Р", pronunciation: "r" },
  { letter: "С", pronunciation: "s" },
  { letter: "Т", pronunciation: "t" },
  { letter: "У", pronunciation: "u" },
  { letter: "Ф", pronunciation: "f" },
  { letter: "Х", pronunciation: "x" },
  { letter: "Ц", pronunciation: "ts" },
  { letter: "Ч", pronunciation: "ch" },
  { letter: "Ш", pronunciation: "sh" },
  { letter: "Щ", pronunciation: "shch" },
  { letter: "Ъ", pronunciation: "hard" },
  { letter: "Ы", pronunciation: "ı" },
  { letter: "Ь", pronunciation: "soft" },
  { letter: "Э", pronunciation: "e" },
  { letter: "Ю", pronunciation: "yu" },
  { letter: "Я", pronunciation: "ya" },
];

export function AlphabetSection() {
  const speak = (letter: string) => {
    const utterance = new SpeechSynthesisUtterance(letter);
    utterance.lang = "ru-RU";
    speechSynthesis.speak(utterance);
  };

  return (
    <section className="py-8">
      <h2 className="mb-6 text-2xl font-bold text-foreground">Rus Alifbosi</h2>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11">
        {cyrillicAlphabet.map(({ letter, pronunciation }, index) => (
          <button
            key={letter}
            onClick={() => speak(letter)}
            className={cn(
              "group relative flex flex-col items-center justify-center rounded-xl bg-card p-3 shadow-sm transition-all duration-300",
              "hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:-translate-y-1",
              "animate-fade-in"
            )}
            style={{ animationDelay: `${index * 20}ms` }}
          >
            <span className="text-2xl font-bold">{letter}</span>
            <span className="text-xs text-muted-foreground group-hover:text-primary-foreground/80">
              {pronunciation}
            </span>
            <Volume2 className="absolute right-1 top-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        ))}
      </div>
    </section>
  );
}
