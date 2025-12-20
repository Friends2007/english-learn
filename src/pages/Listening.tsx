import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Headphones, Volume2, Play, Pause, RotateCcw, 
  ChevronRight, ArrowLeft, CheckCircle2, XCircle,
  Trophy, Target, Flame, MessageSquare, FileText, BookOpen
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";
import { 
  listeningExercises, 
  AnyListeningExercise, 
  DialogueExercise, 
  DictationExercise,
  ComprehensionExercise,
  getDifficultyLabel,
  getDifficultyColor 
} from "@/data/listeningData";

type ExerciseType = "all" | "dialogue" | "dictation" | "comprehension";
type DifficultyFilter = "all" | "beginner" | "intermediate" | "advanced";

const Listening = () => {
  const [selectedType, setSelectedType] = useState<ExerciseType>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>("all");
  const [currentExercise, setCurrentExercise] = useState<AnyListeningExercise | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [hasListened, setHasListened] = useState(false);

  const { speak, stop, isSpeaking, isSupported } = useSpeechSynthesis();

  const filteredExercises = useMemo(() => {
    return listeningExercises.filter(ex => {
      const typeMatch = selectedType === "all" || ex.type === selectedType;
      const diffMatch = difficultyFilter === "all" || ex.difficulty === difficultyFilter;
      return typeMatch && diffMatch;
    });
  }, [selectedType, difficultyFilter]);

  const exerciseTypes = [
    { id: "all", label: "Hammasi", icon: Headphones },
    { id: "dictation", label: "Dictation", icon: FileText },
    { id: "dialogue", label: "Dialoglar", icon: MessageSquare },
    { id: "comprehension", label: "Tushunish", icon: BookOpen },
  ];

  const playDictation = (text: string) => {
    if (isSpeaking) {
      stop();
    } else {
      speak(text);
      setHasListened(true);
    }
  };

  const playDialogue = (exercise: DialogueExercise) => {
    if (isSpeaking) {
      stop();
      return;
    }

    // Create full dialogue text
    const dialogueText = exercise.speakers.flatMap((speaker, i) => 
      speaker.lines.map((line, j) => `${speaker.name}: ${line}`)
    ).join(". ");
    
    speak(dialogueText);
    setHasListened(true);
  };

  const playComprehension = (text: string) => {
    if (isSpeaking) {
      stop();
    } else {
      speak(text);
      setHasListened(true);
    }
  };

  const checkDictationAnswer = (exercise: DictationExercise) => {
    const normalizedUser = userAnswer.toLowerCase().trim().replace(/[.,!?]/g, "");
    const normalizedCorrect = exercise.text.toLowerCase().trim().replace(/[.,!?]/g, "");
    
    const correct = normalizedUser === normalizedCorrect;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      setScore(score + 1);
      setTotalPoints(totalPoints + exercise.points);
      setStreak(streak + 1);
      toast.success(`To'g'ri! +${exercise.points} ball 🎉`);
    } else {
      setStreak(0);
      toast.error("Noto'g'ri. Qaytadan urinib ko'ring!");
    }
  };

  const checkDialogueAnswer = (exercise: DialogueExercise) => {
    const correct = selectedOption === exercise.questions[currentQuestionIndex].correct;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      const pointsPerQuestion = Math.floor(exercise.points / exercise.questions.length);
      setScore(score + 1);
      setTotalPoints(totalPoints + pointsPerQuestion);
      setStreak(streak + 1);
      toast.success(`To'g'ri! +${pointsPerQuestion} ball 🎉`);
    } else {
      setStreak(0);
      toast.error("Noto'g'ri!");
    }
  };

  const checkComprehensionAnswer = (exercise: ComprehensionExercise) => {
    const correct = selectedOption === exercise.questions[currentQuestionIndex].correct;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      const pointsPerQuestion = Math.floor(exercise.points / exercise.questions.length);
      setScore(score + 1);
      setTotalPoints(totalPoints + pointsPerQuestion);
      setStreak(streak + 1);
      toast.success(`To'g'ri! +${pointsPerQuestion} ball 🎉`);
    } else {
      setStreak(0);
      toast.error("Noto'g'ri!");
    }
  };

  const nextQuestion = () => {
    if (!currentExercise) return;

    if (currentExercise.type === "dialogue" || currentExercise.type === "comprehension") {
      const questions = currentExercise.questions;
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setShowResult(false);
      } else {
        // Exercise completed
        resetExercise();
      }
    } else {
      resetExercise();
    }
  };

  const resetExercise = () => {
    setCurrentExercise(null);
    setCurrentQuestionIndex(0);
    setUserAnswer("");
    setSelectedOption(null);
    setShowResult(false);
    setDialogueIndex(0);
    setHasListened(false);
    stop();
  };

  const startExercise = (exercise: AnyListeningExercise) => {
    setCurrentExercise(exercise);
    setCurrentQuestionIndex(0);
    setUserAnswer("");
    setSelectedOption(null);
    setShowResult(false);
    setDialogueIndex(0);
    setHasListened(false);
  };

  const renderExerciseContent = () => {
    if (!currentExercise) return null;

    switch (currentExercise.type) {
      case "dictation":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="gap-1">
                <FileText className="w-3 h-3" />
                Dictation
              </Badge>
              <h2 className="text-2xl font-bold text-foreground">{currentExercise.title}</h2>
              {currentExercise.hint && (
                <p className="text-muted-foreground">💡 Hint: {currentExercise.hint}</p>
              )}
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => playDictation(currentExercise.text)}
                className={cn(
                  "gap-2 px-8 py-6 text-lg",
                  isSpeaking && "animate-pulse"
                )}
              >
                {isSpeaking ? (
                  <>
                    <Pause className="w-6 h-6" />
                    To'xtatish
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6" />
                    Tinglash
                  </>
                )}
              </Button>
            </div>

            {!showResult ? (
              <div className="space-y-4">
                <Input
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Eshitganingizni yozing..."
                  className="h-14 text-lg text-center"
                  disabled={!hasListened}
                  onKeyDown={(e) => e.key === "Enter" && userAnswer.trim() && checkDictationAnswer(currentExercise)}
                />
                {!hasListened && (
                  <p className="text-center text-sm text-muted-foreground">
                    Avval audio eshiting
                  </p>
                )}
                <Button 
                  onClick={() => checkDictationAnswer(currentExercise)} 
                  disabled={!userAnswer.trim() || !hasListened}
                  className="w-full"
                  size="lg"
                >
                  Tekshirish
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className={cn(
                  "p-4 rounded-xl border-2",
                  isCorrect 
                    ? "bg-green-500/10 border-green-500" 
                    : "bg-red-500/10 border-red-500"
                )}>
                  <div className="flex items-center gap-2 mb-2">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                      {isCorrect ? "To'g'ri!" : "Noto'g'ri"}
                    </span>
                  </div>
                  <p className="text-foreground font-medium">
                    To'g'ri javob: {currentExercise.text}
                  </p>
                </div>
                <Button onClick={nextQuestion} className="w-full gap-2" size="lg">
                  Keyingisi <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        );

      case "dialogue":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="gap-1">
                <MessageSquare className="w-3 h-3" />
                Dialogue
              </Badge>
              <h2 className="text-2xl font-bold text-foreground">{currentExercise.title}</h2>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => playDialogue(currentExercise)}
                className={cn(
                  "gap-2 px-8 py-6 text-lg",
                  isSpeaking && "animate-pulse"
                )}
              >
                {isSpeaking ? (
                  <>
                    <Pause className="w-6 h-6" />
                    To'xtatish
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6" />
                    Dialogni tinglash
                  </>
                )}
              </Button>
            </div>

            {hasListened && (
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Savol {currentQuestionIndex + 1} / {currentExercise.questions.length}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {currentExercise.questions[currentQuestionIndex].question}
                  </h3>
                </div>

                <div className="grid gap-3">
                  {currentExercise.questions[currentQuestionIndex].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => !showResult && setSelectedOption(index)}
                      disabled={showResult}
                      className={cn(
                        "w-full rounded-xl p-4 text-left transition-all duration-200 border-2",
                        showResult
                          ? index === currentExercise.questions[currentQuestionIndex].correct
                            ? "bg-green-500/10 border-green-500"
                            : selectedOption === index
                            ? "bg-red-500/10 border-red-500"
                            : "bg-muted/30 border-transparent"
                          : selectedOption === index
                          ? "bg-primary/10 border-primary"
                          : "bg-muted/30 border-transparent hover:bg-muted"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                          showResult && index === currentExercise.questions[currentQuestionIndex].correct
                            ? "bg-green-500 text-white"
                            : showResult && selectedOption === index
                            ? "bg-red-500 text-white"
                            : selectedOption === index
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted-foreground/20"
                        )}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="font-medium">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {!showResult ? (
                  <Button
                    onClick={() => checkDialogueAnswer(currentExercise)}
                    disabled={selectedOption === null}
                    className="w-full"
                    size="lg"
                  >
                    Tekshirish
                  </Button>
                ) : (
                  <Button onClick={nextQuestion} className="w-full gap-2" size="lg">
                    {currentQuestionIndex < currentExercise.questions.length - 1 
                      ? "Keyingi savol" 
                      : "Tugatish"
                    } <ChevronRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            )}

            {!hasListened && (
              <p className="text-center text-muted-foreground">
                Avval dialogni eshiting, keyin savollarga javob bering
              </p>
            )}
          </div>
        );

      case "comprehension":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <Badge variant="outline" className="gap-1">
                <BookOpen className="w-3 h-3" />
                Comprehension
              </Badge>
              <h2 className="text-2xl font-bold text-foreground">{currentExercise.title}</h2>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={() => playComprehension(currentExercise.text)}
                className={cn(
                  "gap-2 px-8 py-6 text-lg",
                  isSpeaking && "animate-pulse"
                )}
              >
                {isSpeaking ? (
                  <>
                    <Pause className="w-6 h-6" />
                    To'xtatish
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6" />
                    Matnni tinglash
                  </>
                )}
              </Button>
            </div>

            {hasListened && (
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Savol {currentQuestionIndex + 1} / {currentExercise.questions.length}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">
                    {currentExercise.questions[currentQuestionIndex].question}
                  </h3>
                </div>

                <div className="grid gap-3">
                  {currentExercise.questions[currentQuestionIndex].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => !showResult && setSelectedOption(index)}
                      disabled={showResult}
                      className={cn(
                        "w-full rounded-xl p-4 text-left transition-all duration-200 border-2",
                        showResult
                          ? index === currentExercise.questions[currentQuestionIndex].correct
                            ? "bg-green-500/10 border-green-500"
                            : selectedOption === index
                            ? "bg-red-500/10 border-red-500"
                            : "bg-muted/30 border-transparent"
                          : selectedOption === index
                          ? "bg-primary/10 border-primary"
                          : "bg-muted/30 border-transparent hover:bg-muted"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                          showResult && index === currentExercise.questions[currentQuestionIndex].correct
                            ? "bg-green-500 text-white"
                            : showResult && selectedOption === index
                            ? "bg-red-500 text-white"
                            : selectedOption === index
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted-foreground/20"
                        )}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="font-medium">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {!showResult ? (
                  <Button
                    onClick={() => checkComprehensionAnswer(currentExercise)}
                    disabled={selectedOption === null}
                    className="w-full"
                    size="lg"
                  >
                    Tekshirish
                  </Button>
                ) : (
                  <Button onClick={nextQuestion} className="w-full gap-2" size="lg">
                    {currentQuestionIndex < currentExercise.questions.length - 1 
                      ? "Keyingi savol" 
                      : "Tugatish"
                    } <ChevronRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            )}

            {!hasListened && (
              <p className="text-center text-muted-foreground">
                Avval matnni eshiting, keyin savollarga javob bering
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 px-4 py-2 text-sm font-medium text-primary shadow-lg animate-fade-in">
              <Headphones className="h-4 w-4" />
              {filteredExercises.length} ta mashq
            </div>
            
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl animate-fade-in" style={{ animationDelay: "100ms" }}>
              Listening
            </h1>
            
            <p className="mb-6 text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              Ingliz tilini eshitish va tushunish ko'nikmalarini rivojlantiring
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-2 rounded-xl glass-section px-4 py-2">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center border border-amber-500/20">
                  <Trophy className="h-5 w-5 text-amber-500" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-foreground">{totalPoints}</p>
                  <p className="text-xs text-muted-foreground">Ball</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl glass-section px-4 py-2">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/20">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-foreground">{score}</p>
                  <p className="text-xs text-muted-foreground">To'g'ri</p>
                </div>
              </div>
              {streak > 0 && (
                <div className="flex items-center gap-2 rounded-xl glass-section px-4 py-2">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center border border-orange-500/20">
                    <Flame className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-bold text-foreground">{streak}</p>
                    <p className="text-xs text-muted-foreground">Streak</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        {!isSupported && (
          <Card className="mb-6 border-amber-500/50 bg-amber-500/10">
            <CardContent className="p-4 text-center text-amber-600">
              ⚠️ Sizning brauzeringiz Speech Synthesis ni qo'llab-quvvatlamaydi. 
              Iltimos, Chrome yoki Safari brauzerni ishlating.
            </CardContent>
          </Card>
        )}

        {currentExercise ? (
          <div className="max-w-2xl mx-auto">
            <Button
              variant="ghost"
              onClick={resetExercise}
              className="mb-4 gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Orqaga
            </Button>
            
            <Card className="glass-section border-border/30">
              <CardContent className="p-6 md:p-8">
                {renderExerciseContent()}
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Exercise Type Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {exerciseTypes.map(type => (
                <Button
                  key={type.id}
                  variant={selectedType === type.id ? "default" : "outline"}
                  onClick={() => setSelectedType(type.id as ExerciseType)}
                  className="gap-2"
                >
                  <type.icon className="w-4 h-4" />
                  {type.label}
                </Button>
              ))}
            </div>

            {/* Difficulty Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {["all", "beginner", "intermediate", "advanced"].map(diff => (
                <Badge
                  key={diff}
                  variant="outline"
                  className={cn(
                    "cursor-pointer px-4 py-2 transition-all",
                    difficultyFilter === diff 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "hover:bg-muted"
                  )}
                  onClick={() => setDifficultyFilter(diff as DifficultyFilter)}
                >
                  {diff === "all" ? "Hammasi" : getDifficultyLabel(diff)}
                </Badge>
              ))}
            </div>

            {/* Exercise List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredExercises.map(exercise => (
                <Card 
                  key={exercise.id}
                  className="glass-section border-border/30 hover:border-primary/50 transition-all cursor-pointer group"
                  onClick={() => startExercise(exercise)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        {exercise.type === "dictation" && <FileText className="w-5 h-5 text-primary" />}
                        {exercise.type === "dialogue" && <MessageSquare className="w-5 h-5 text-primary" />}
                        {exercise.type === "comprehension" && <BookOpen className="w-5 h-5 text-primary" />}
                      </div>
                      <Badge className={getDifficultyColor(exercise.difficulty)}>
                        {getDifficultyLabel(exercise.difficulty)}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exercise.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground capitalize">
                        {exercise.type}
                      </span>
                      <Badge variant="outline" className="gap-1">
                        <Trophy className="w-3 h-3" />
                        {exercise.points}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredExercises.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                Bu filtr bo'yicha mashqlar topilmadi
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Listening;
