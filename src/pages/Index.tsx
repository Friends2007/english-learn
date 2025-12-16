import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, MessageCircle, GraduationCap, Sparkles, PenTool, FileCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { ProgressStats } from "@/components/ProgressStats";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const lessons = [
  {
    title: "Alifbo",
    description: "Kirill alifbosini o'rganing",
    icon: BookOpen,
    progress: 75,
    color: "primary" as const,
  },
  {
    title: "Salomlashish",
    description: "Asosiy salomlashish iboralari",
    icon: MessageCircle,
    progress: 40,
    color: "secondary" as const,
  },
  {
    title: "Grammatika",
    description: "Asosiy grammatik qoidalar",
    icon: GraduationCap,
    progress: 10,
    color: "accent" as const,
  },
];

const vocabulary = [
  { russian: "Привет", uzbek: "Salom", pronunciation: "Privyet" },
  { russian: "Спасибо", uzbek: "Rahmat", pronunciation: "Spasiba" },
  { russian: "Да", uzbek: "Ha", pronunciation: "Da" },
  { russian: "Нет", uzbek: "Yo'q", pronunciation: "Nyet" },
  { russian: "Пожалуйста", uzbek: "Iltimos", pronunciation: "Pajalusta" },
  { russian: "Здравствуйте", uzbek: "Assalomu alaykum", pronunciation: "Zdrastvuyte" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<"lessons" | "vocabulary" | "alphabet">("lessons");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Kunlik mashqingizni bajarishni unutmang!
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl animate-fade-in" style={{ animationDelay: "100ms" }}>
              Rus tilini <span className="text-primary">oson</span> o'rganing
            </h1>
            <p className="mb-8 text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              Interaktiv darslar, so'z kartochkalari va mashqlar orqali rus tilini tez va samarali o'rganing
            </p>
            <Button variant="hero" size="lg" className="animate-fade-in" style={{ animationDelay: "300ms" }}>
              Darsni boshlash
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Progress Stats */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Sizning natijalaringiz</h2>
          <ProgressStats />
        </section>

        {/* Section Tabs */}
        <div className="mb-6 flex gap-2">
          {[
            { id: "lessons", label: "Darslar" },
            { id: "vocabulary", label: "Lug'at" },
            { id: "alphabet", label: "Alifbo" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as typeof activeSection)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                activeSection === tab.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Lessons Section */}
        {activeSection === "lessons" && (
          <section className="grid gap-4 md:grid-cols-3">
            {lessons.map((lesson, index) => (
              <LessonCard
                key={lesson.title}
                {...lesson}
                delay={index * 100}
              />
            ))}
          </section>
        )}

        {/* Vocabulary Section */}
        {activeSection === "vocabulary" && (
          <section>
            <div className="mb-4 rounded-xl bg-card p-4 shadow-sm">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Maslahat:</strong> Tarjimani ko'rish uchun kartochkani bosing. Talaffuzni eshitish uchun tovush tugmasini bosing.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {vocabulary.map((word, index) => (
                <VocabularyCard
                  key={word.russian}
                  {...word}
                  delay={index * 100}
                />
              ))}
            </div>
          </section>
        )}

        {/* Alphabet Section */}
        {activeSection === "alphabet" && <AlphabetSection />}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 RusTil - Rus tilini o'rganish ilovasi
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
