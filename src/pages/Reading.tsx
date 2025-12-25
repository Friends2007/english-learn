import { useState } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Clock, ChevronRight, CheckCircle2, XCircle, ArrowLeft, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { readingStories, ReadingStory, ReadingQuestion } from "@/data/readingData";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Reading = () => {
  const [selectedStory, setSelectedStory] = useState<ReadingStory | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleStorySelect = (story: ReadingStory) => {
    setSelectedStory(story);
    setShowQuiz(false);
    setAnswers({});
    setSubmitted(false);
  };

  const handleBackToList = () => {
    setSelectedStory(null);
    setShowQuiz(false);
    setAnswers({});
    setSubmitted(false);
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    if (!submitted) {
      setAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
    }
  };

  const handleSubmitQuiz = () => {
    if (!selectedStory) return;
    
    if (Object.keys(answers).length < selectedStory.questions.length) {
      toast.error("Iltimos, barcha savollarga javob bering");
      return;
    }
    
    setSubmitted(true);
    
    const correctCount = selectedStory.questions.filter(
      (q, index) => answers[index] === q.correctAnswer
    ).length;
    
    const percentage = Math.round((correctCount / selectedStory.questions.length) * 100);
    
    if (percentage >= 80) {
      toast.success(`Ajoyib! ${correctCount}/${selectedStory.questions.length} to'g'ri (${percentage}%)`);
    } else if (percentage >= 60) {
      toast.info(`Yaxshi! ${correctCount}/${selectedStory.questions.length} to'g'ri (${percentage}%)`);
    } else {
      toast.warning(`${correctCount}/${selectedStory.questions.length} to'g'ri (${percentage}%). Qayta urinib ko'ring!`);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Technology": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Psychology": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Business": "bg-green-500/20 text-green-400 border-green-500/30",
      "Science": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      "Personal Development": "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "Culture": "bg-pink-500/20 text-pink-400 border-pink-500/30",
      "Environment": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      "Health": "bg-red-500/20 text-red-400 border-red-500/30",
      "Society": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    };
    return colors[category] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

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
              B2 darajadagi hikoyalar bilan o'qish tushunishingizni yaxshilang
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-2 rounded-xl glass-section px-4 py-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/20">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-foreground">{readingStories.length}</p>
                  <p className="text-xs text-muted-foreground">Hikoyalar</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl glass-section px-4 py-2">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 backdrop-blur-sm flex items-center justify-center border border-amber-500/20">
                  <Target className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-foreground">B2</p>
                  <p className="text-xs text-muted-foreground">Daraja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        {!selectedStory ? (
          // Story List
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-4 md:grid-cols-2">
              {readingStories.map((story, index) => (
                <Card 
                  key={story.id}
                  className="glass-section border-border/30 cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => handleStorySelect(story)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge className={`${getCategoryColor(story.category)} border`}>
                        {story.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Clock className="h-3.5 w-3.5" />
                        {story.readingTime} min
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {story.titleUz}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {story.level}
                      </Badge>
                      <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        O'qish <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : !showQuiz ? (
          // Story Content
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={handleBackToList}
              className="mb-6 gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Orqaga
            </Button>
            
            <Card className="glass-section border-border/30">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={`${getCategoryColor(selectedStory.category)} border`}>
                    {selectedStory.category}
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {selectedStory.level}
                  </Badge>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm ml-auto">
                    <Clock className="h-3.5 w-3.5" />
                    {selectedStory.readingTime} min
                  </div>
                </div>
                <CardTitle className="text-2xl text-foreground">{selectedStory.title}</CardTitle>
                <p className="text-muted-foreground">{selectedStory.titleUz}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {selectedStory.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-foreground/90 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="border-t border-border/30 pt-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">O'zbekcha tarjima</h4>
                  <div className="bg-muted/30 rounded-xl p-6">
                    {selectedStory.contentUz.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button 
                    size="lg" 
                    onClick={handleStartQuiz}
                    className="gap-2 bg-primary hover:bg-primary/90"
                  >
                    <Target className="h-5 w-5" />
                    Testni boshlash ({selectedStory.questions.length} savol)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          // Quiz Section
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => setShowQuiz(false)}
              className="mb-6 gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Hikoyaga qaytish
            </Button>
            
            <Card className="glass-section border-border/30">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Tushunishni tekshirish: {selectedStory.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {selectedStory.questions.map((question, qIndex) => (
                  <div key={qIndex} className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                        {qIndex + 1}
                      </span>
                      <div>
                        <p className="text-foreground font-medium">{question.question}</p>
                        <p className="text-muted-foreground text-sm">{question.questionUz}</p>
                      </div>
                    </div>
                    
                    <RadioGroup
                      value={answers[qIndex]?.toString()}
                      onValueChange={(value) => handleAnswerSelect(qIndex, parseInt(value))}
                      className="ml-11 space-y-2"
                    >
                      {question.options.map((option, oIndex) => {
                        const isSelected = answers[qIndex] === oIndex;
                        const isCorrect = question.correctAnswer === oIndex;
                        const showResult = submitted;
                        
                        let optionClass = "border-border/50 hover:border-primary/50";
                        if (showResult && isSelected && isCorrect) {
                          optionClass = "border-green-500 bg-green-500/10";
                        } else if (showResult && isSelected && !isCorrect) {
                          optionClass = "border-red-500 bg-red-500/10";
                        } else if (showResult && isCorrect) {
                          optionClass = "border-green-500/50 bg-green-500/5";
                        }
                        
                        return (
                          <div
                            key={oIndex}
                            className={`flex items-center space-x-3 rounded-xl border p-4 transition-all ${optionClass} ${!submitted ? 'cursor-pointer' : ''}`}
                            onClick={() => !submitted && handleAnswerSelect(qIndex, oIndex)}
                          >
                            <RadioGroupItem 
                              value={oIndex.toString()} 
                              id={`q${qIndex}-o${oIndex}`}
                              disabled={submitted}
                            />
                            <Label 
                              htmlFor={`q${qIndex}-o${oIndex}`} 
                              className={`flex-1 cursor-pointer ${showResult && isCorrect ? 'text-green-400' : 'text-foreground'}`}
                            >
                              {option}
                            </Label>
                            {showResult && isSelected && isCorrect && (
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                            )}
                            {showResult && isSelected && !isCorrect && (
                              <XCircle className="h-5 w-5 text-red-500" />
                            )}
                            {showResult && !isSelected && isCorrect && (
                              <CheckCircle2 className="h-5 w-5 text-green-500/50" />
                            )}
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </div>
                ))}
                
                <div className="flex justify-center gap-4 pt-4">
                  {!submitted ? (
                    <Button 
                      size="lg" 
                      onClick={handleSubmitQuiz}
                      className="gap-2 bg-primary hover:bg-primary/90"
                    >
                      <CheckCircle2 className="h-5 w-5" />
                      Javoblarni tekshirish
                    </Button>
                  ) : (
                    <>
                      <Button 
                        variant="outline"
                        size="lg" 
                        onClick={() => {
                          setAnswers({});
                          setSubmitted(false);
                        }}
                        className="gap-2"
                      >
                        Qayta urinish
                      </Button>
                      <Button 
                        size="lg" 
                        onClick={handleBackToList}
                        className="gap-2 bg-primary hover:bg-primary/90"
                      >
                        Boshqa hikoya
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </section>
    </div>
  );
};

export default Reading;
