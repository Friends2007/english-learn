import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, Newspaper, GraduationCap, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Reading = () => {
  return (
    <div className="min-h-screen bg-background gradient-navy">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12">
        <div className="absolute inset-0 animated-gradient opacity-30" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 dark:bg-primary/30 blur-[80px] animate-pulse" />
          <div className="absolute right-10 top-20 h-32 w-32 rounded-full bg-secondary/15 dark:bg-secondary/20 blur-[60px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute left-1/3 bottom-0 h-48 w-48 rounded-full bg-primary/10 dark:bg-primary/15 blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 px-4 py-2 text-sm font-medium text-primary shadow-lg animate-fade-in">
              <BookOpen className="h-4 w-4" />
              Reading Practice
            </div>
            
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl animate-fade-in" style={{ animationDelay: "100ms" }}>
              Reading
            </h1>
            
            <p className="mb-6 text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              Enhance your reading comprehension with various texts
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-2 rounded-xl glass-section px-4 py-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/20">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-foreground">Articles</p>
                  <p className="text-xs text-muted-foreground">& Stories</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl glass-section px-4 py-2">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 backdrop-blur-sm flex items-center justify-center border border-amber-500/20">
                  <GraduationCap className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-foreground">All Levels</p>
                  <p className="text-xs text-muted-foreground">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-section border-border/30">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Coming Soon</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Reading exercises are currently being prepared. 
                Soon you'll be able to practice with short stories, articles, and comprehension questions.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="gap-1">
                  <FileText className="w-3 h-3" />
                  Short Stories
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Newspaper className="w-3 h-3" />
                  Articles
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Target className="w-3 h-3" />
                  Comprehension
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Reading;
