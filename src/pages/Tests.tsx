import { useState } from "react";
import { Header } from "@/components/Header";
import { CheckCircle2, XCircle, Trophy, Clock, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface TestQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface Test {
  id: string;
  title: string;
  icon: string;
  description: string;
  timeLimit: number; // in minutes
  questions: TestQuestion[];
}

const tests: Test[] = [
  {
    id: "alphabet",
    title: "Rus alifbosi",
    icon: "🔤",
    description: "Kirill harflarini bilish testi",
    timeLimit: 5,
    questions: [
      { question: "\"А\" harfining talaffuzi qanday?", options: ["o", "a", "e", "u"], correct: 1, explanation: "А harfi \"a\" deb talaffuz qilinadi." },
      { question: "\"Ж\" harfi qanday tovush beradi?", options: ["sh", "ch", "j", "ts"], correct: 2, explanation: "Ж harfi \"j\" tovushini beradi (juk - qo'ng'iz)." },
      { question: "Rus alifbosida nechta harf bor?", options: ["26", "30", "33", "35"], correct: 2, explanation: "Rus alifbosida 33 ta harf mavjud." },
      { question: "\"Ы\" harfining eng yaqin talaffuzi qaysi?", options: ["i", "e", "ı (qattiq i)", "u"], correct: 2, explanation: "Ы harfi qattiq \"ı\" tovushiga yaqin." },
      { question: "\"Щ\" harfi qanday talaffuz qilinadi?", options: ["sh", "shch", "ch", "ts"], correct: 1, explanation: "Щ harfi \"shch\" deb talaffuz qilinadi." },
    ],
  },
  {
    id: "greetings",
    title: "Salomlashish",
    icon: "👋",
    description: "Salomlashish iboralari testi",
    timeLimit: 5,
    questions: [
      { question: "\"Здравствуйте\" qanday tarjima qilinadi?", options: ["Xayr", "Assalomu alaykum", "Rahmat", "Kechirasiz"], correct: 1, explanation: "Здравствуйте - rasmiy salomlashish shakli." },
      { question: "\"До свидания\" qachon ishlatiladi?", options: ["Uchrashganda", "Xayrlashganda", "Rahmat aytganda", "So'raganda"], correct: 1, explanation: "До свидания - xayrlashish ibodasi." },
      { question: "\"Добрый вечер\" ning tarjimasi:", options: ["Xayrli tong", "Xayrli kun", "Xayrli kech", "Xayrli tun"], correct: 2, explanation: "Добрый вечер - Xayrli kech." },
      { question: "Do'stlar bilan qanday salomlashiladi?", options: ["Здравствуйте", "Привет", "До свидания", "Спасибо"], correct: 1, explanation: "Привет - norasmiy, do'stona salomlashish." },
      { question: "\"Пока\" nimani bildiradi?", options: ["Salom", "Xayr (norasmiy)", "Rahmat", "Iltimos"], correct: 1, explanation: "Пока - norasmiy xayrlashish." },
    ],
  },
  {
    id: "numbers",
    title: "Raqamlar",
    icon: "🔢",
    description: "Ruscha raqamlar testi",
    timeLimit: 5,
    questions: [
      { question: "\"Семь\" bu qaysi raqam?", options: ["5", "6", "7", "8"], correct: 2, explanation: "Семь = 7 (yetti)." },
      { question: "\"Двадцать\" ning ma'nosi:", options: ["12", "20", "22", "200"], correct: 1, explanation: "Двадцать = 20 (yigirma)." },
      { question: "\"Сто\" qancha?", options: ["10", "50", "100", "1000"], correct: 2, explanation: "Сто = 100 (yuz)." },
      { question: "\"Пятнадцать\" bu:", options: ["5", "14", "15", "50"], correct: 2, explanation: "Пятнадцать = 15 (o'n besh)." },
      { question: "\"Тысяча\" ning tarjimasi:", options: ["Yuz", "Ming", "Million", "O'n"], correct: 1, explanation: "Тысяча = 1000 (ming)." },
    ],
  },
  {
    id: "family",
    title: "Oila",
    icon: "👨‍👩‍👧‍👦",
    description: "Oila a'zolari testi",
    timeLimit: 5,
    questions: [
      { question: "\"Бабушка\" kim?", options: ["Ona", "Opa", "Buvi", "Xola"], correct: 2, explanation: "Бабушка = buvi (grandmother)." },
      { question: "\"Брат\" ning tarjimasi:", options: ["Ota", "Aka/uka", "Opa", "Amaki"], correct: 1, explanation: "Брат = aka yoki uka." },
      { question: "\"Дядя\" kim bo'ladi?", options: ["Amaki/tog'a", "Ota", "Bobo", "Aka"], correct: 0, explanation: "Дядя = amaki yoki tog'a." },
      { question: "\"Внук\" bu:", options: ["O'g'il", "Nevara (o'g'il)", "Aka", "Jiyan"], correct: 1, explanation: "Внук = nevara (o'g'il bola)." },
      { question: "\"Жена\" ning ma'nosi:", options: ["Qiz", "Opa", "Xotin", "Ona"], correct: 2, explanation: "Жена = xotin, rafiq." },
    ],
  },
  {
    id: "verbs",
    title: "Fe'llar",
    icon: "🏃",
    description: "Asosiy fe'llar testi",
    timeLimit: 7,
    questions: [
      { question: "\"Читать\" fe'lining ma'nosi:", options: ["Yozmoq", "O'qimoq", "Gapirmoq", "Eshitmoq"], correct: 1, explanation: "Читать = o'qimoq." },
      { question: "\"Я работаю\" ning tarjimasi:", options: ["Men o'qiyman", "Men ishlayman", "Men yuraman", "Men uxlayman"], correct: 1, explanation: "Работать = ishlamoq." },
      { question: "\"Говорить\" nimani bildiradi?", options: ["Eshitmoq", "Ko'rmoq", "Gapirmoq", "O'ylamoq"], correct: 2, explanation: "Говорить = gapirmoq." },
      { question: "\"Они идут\" - bu:", options: ["Ular kelishadi", "Ular yurishadi/ketishadi", "Ular o'tirishadi", "Ular turishadi"], correct: 1, explanation: "Идти = yurmoq, ketmoq." },
      { question: "\"Писать\" fe'li:", options: ["O'qimoq", "Yozmoq", "Chizmoq", "Rasm solmoq"], correct: 1, explanation: "Писать = yozmoq." },
      { question: "\"Слушать\" ning tarjimasi:", options: ["Ko'rmoq", "Sezmoq", "Eshitmoq/tinglamoq", "Gapirmoq"], correct: 2, explanation: "Слушать = eshitmoq, tinglamoq." },
      { question: "\"Мы едим\" nimani bildiradi?", options: ["Biz ketyapmiz", "Biz ovqatlanayapmiz", "Biz uxlayapmiz", "Biz o'ynayapmiz"], correct: 1, explanation: "Есть (еда) = ovqatlanmoq." },
    ],
  },
];

const Tests = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const currentTest = tests.find((t) => t.id === selectedTest);

  const startTest = (testId: string) => {
    const test = tests.find((t) => t.id === testId);
    if (test) {
      setSelectedTest(testId);
      setCurrentQuestion(0);
      setAnswers([]);
      setShowResults(false);
      setTimeLeft(test.timeLimit * 60);
    }
  };

  const selectAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentTest && currentQuestion < currentTest.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    if (!currentTest) return 0;
    let correct = 0;
    currentTest.questions.forEach((q, i) => {
      if (answers[i] === q.correct) correct++;
    });
    return correct;
  };

  const getPercentage = () => {
    if (!currentTest) return 0;
    return Math.round((calculateScore() / currentTest.questions.length) * 100);
  };

  const resetTest = () => {
    setSelectedTest(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Testlar</h1>
          <p className="text-muted-foreground">Bilimlaringizni sinab ko'ring va natijalaringizni baholang</p>
        </div>

        {!selectedTest ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tests.map((test, index) => (
              <div
                key={test.id}
                className={cn(
                  "group rounded-2xl bg-card p-6 shadow-card transition-all duration-300 animate-fade-in",
                  "hover:shadow-xl hover:-translate-y-1"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-4xl">{test.icon}</span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {test.timeLimit} min
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{test.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{test.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {test.questions.length} ta savol
                  </span>
                  <Button onClick={() => startTest(test.id)} size="sm">
                    Boshlash
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : showResults ? (
          <div className="mx-auto max-w-2xl animate-fade-in">
            <div className="rounded-2xl bg-card p-8 shadow-card text-center">
              <div className="mb-6">
                <Trophy className={cn(
                  "h-16 w-16 mx-auto mb-4",
                  getPercentage() >= 80 ? "text-yellow-500" : getPercentage() >= 60 ? "text-gray-400" : "text-orange-400"
                )} />
                <h2 className="text-2xl font-bold text-foreground mb-2">Test yakunlandi!</h2>
                <p className="text-muted-foreground">{currentTest?.title}</p>
              </div>

              <div className="mb-8 rounded-xl bg-muted/30 p-6">
                <div className="text-5xl font-bold text-primary mb-2">{getPercentage()}%</div>
                <p className="text-lg text-foreground">
                  {calculateScore()} / {currentTest?.questions.length} to'g'ri javob
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {getPercentage() >= 80
                    ? "🎉 Ajoyib natija!"
                    : getPercentage() >= 60
                    ? "👍 Yaxshi, davom eting!"
                    : "📚 Ko'proq mashq qiling"}
                </p>
              </div>

              <div className="space-y-3 mb-8 text-left">
                {currentTest?.questions.map((q, index) => (
                  <div
                    key={index}
                    className={cn(
                      "rounded-xl p-4",
                      answers[index] === q.correct ? "bg-accent/10" : "bg-destructive/10"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      {answers[index] === q.correct ? (
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium text-foreground text-sm">{q.question}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {answers[index] !== q.correct && (
                            <span className="text-destructive">Sizning javobingiz: {q.options[answers[index]]} • </span>
                          )}
                          To'g'ri javob: {q.options[q.correct]}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 italic">{q.explanation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={resetTest} className="flex-1">
                  Testlarga qaytish
                </Button>
                <Button onClick={() => startTest(selectedTest)} className="flex-1">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Qayta topshirish
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 flex items-center justify-between">
              <button onClick={resetTest} className="text-primary hover:underline">
                ← Testlarga qaytish
              </button>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground">
                  {currentQuestion + 1} / {currentTest?.questions.length}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-6 h-2 rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / (currentTest?.questions.length || 1)) * 100}%`,
                }}
              />
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-card animate-fade-in">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {currentTest?.questions[currentQuestion].question}
              </h3>

              <div className="space-y-3 mb-6">
                {currentTest?.questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    className={cn(
                      "w-full rounded-xl p-4 text-left transition-all duration-200 border-2",
                      answers[currentQuestion] === index
                        ? "bg-primary/10 border-primary"
                        : "bg-muted/30 border-transparent hover:bg-muted"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "h-6 w-6 rounded-full border-2 flex items-center justify-center",
                          answers[currentQuestion] === index
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        )}
                      >
                        {answers[currentQuestion] === index && (
                          <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className="flex-1"
                >
                  Oldingi
                </Button>
                <Button
                  onClick={nextQuestion}
                  disabled={answers[currentQuestion] === undefined}
                  className="flex-1"
                >
                  {currentQuestion === (currentTest?.questions.length || 0) - 1
                    ? "Yakunlash"
                    : "Keyingi"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Tests;
