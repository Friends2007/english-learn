export type ExerciseType = "fill" | "choice" | "translate" | "tense" | "preposition";

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  difficulty: "beginner" | "intermediate" | "advanced";
  points: number;
}

export interface FillExercise extends BaseExercise {
  type: "fill";
  sentence: string;
  answer: string;
  hint: string;
  uzbek: string;
  explanation?: string;
}

export interface ChoiceExercise extends BaseExercise {
  type: "choice";
  question: string;
  options: string[];
  correct: number;
  uzbek: string;
  explanation?: string;
}

export interface TranslateExercise extends BaseExercise {
  type: "translate";
  english: string;
  uzbek: string;
  direction: "en-uz" | "uz-en";
  acceptedAnswers: string[];
}

export interface TenseExercise extends BaseExercise {
  type: "tense";
  verb: string;
  baseForm: string;
  subject: string;
  tense: string;
  answer: string;
}

export interface PrepositionExercise extends BaseExercise {
  type: "preposition";
  sentence: string;
  answer: string;
  hint: string;
  options: string[];
}

export type Exercise = FillExercise | ChoiceExercise | TranslateExercise | TenseExercise | PrepositionExercise;

export interface ExerciseCategory {
  id: string;
  title: string;
  titleUz: string;
  description: string;
  icon: string;
  color: string;
  exercises: Exercise[];
}

export const exerciseCategories: ExerciseCategory[] = [
  {
    id: "tenses",
    title: "Verb Tenses",
    titleUz: "Fe'l zamonlari",
    description: "Practice verb conjugation",
    icon: "Zap",
    color: "bg-gradient-to-br from-orange-500 to-amber-500",
    exercises: [
      // Beginner - Present Simple
      { id: "t1", type: "tense", difficulty: "beginner", points: 10, verb: "work", baseForm: "work", subject: "He", tense: "Present Simple", answer: "works" },
      { id: "t2", type: "tense", difficulty: "beginner", points: 10, verb: "go", baseForm: "go", subject: "She", tense: "Present Simple", answer: "goes" },
      { id: "t3", type: "tense", difficulty: "beginner", points: 10, verb: "study", baseForm: "study", subject: "They", tense: "Present Simple", answer: "study" },
      { id: "t4", type: "tense", difficulty: "beginner", points: 10, verb: "have", baseForm: "have", subject: "He", tense: "Present Simple", answer: "has" },
      { id: "t5", type: "tense", difficulty: "beginner", points: 10, verb: "do", baseForm: "do", subject: "She", tense: "Present Simple", answer: "does" },
      // Intermediate - Past Simple
      { id: "t6", type: "tense", difficulty: "intermediate", points: 15, verb: "go", baseForm: "go", subject: "I", tense: "Past Simple", answer: "went" },
      { id: "t7", type: "tense", difficulty: "intermediate", points: 15, verb: "see", baseForm: "see", subject: "We", tense: "Past Simple", answer: "saw" },
      { id: "t8", type: "tense", difficulty: "intermediate", points: 15, verb: "buy", baseForm: "buy", subject: "She", tense: "Past Simple", answer: "bought" },
      { id: "t9", type: "tense", difficulty: "intermediate", points: 15, verb: "write", baseForm: "write", subject: "He", tense: "Past Simple", answer: "wrote" },
      { id: "t10", type: "tense", difficulty: "intermediate", points: 15, verb: "eat", baseForm: "eat", subject: "They", tense: "Past Simple", answer: "ate" },
      // Advanced - Present Perfect
      { id: "t11", type: "tense", difficulty: "advanced", points: 20, verb: "be", baseForm: "be", subject: "I", tense: "Present Perfect", answer: "have been" },
      { id: "t12", type: "tense", difficulty: "advanced", points: 20, verb: "do", baseForm: "do", subject: "She", tense: "Present Perfect", answer: "has done" },
      { id: "t13", type: "tense", difficulty: "advanced", points: 20, verb: "see", baseForm: "see", subject: "We", tense: "Present Perfect", answer: "have seen" },
      { id: "t14", type: "tense", difficulty: "advanced", points: 20, verb: "write", baseForm: "write", subject: "He", tense: "Present Perfect", answer: "has written" },
      { id: "t15", type: "tense", difficulty: "advanced", points: 20, verb: "go", baseForm: "go", subject: "They", tense: "Present Perfect", answer: "have gone" },
    ],
  },
  {
    id: "prepositions",
    title: "Prepositions",
    titleUz: "Predloglar",
    description: "Time, place, and movement",
    icon: "TableProperties",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    exercises: [
      // Beginner
      { id: "p1", type: "preposition", difficulty: "beginner", points: 10, sentence: "I wake up ___ 7 o'clock.", answer: "at", hint: "specific time", options: ["at", "in", "on", "to"] },
      { id: "p2", type: "preposition", difficulty: "beginner", points: 10, sentence: "The book is ___ the table.", answer: "on", hint: "surface", options: ["on", "in", "at", "under"] },
      { id: "p3", type: "preposition", difficulty: "beginner", points: 10, sentence: "She lives ___ London.", answer: "in", hint: "city", options: ["in", "on", "at", "to"] },
      { id: "p4", type: "preposition", difficulty: "beginner", points: 10, sentence: "We have a meeting ___ Monday.", answer: "on", hint: "day", options: ["on", "in", "at", "for"] },
      { id: "p5", type: "preposition", difficulty: "beginner", points: 10, sentence: "The cat is ___ the box.", answer: "in", hint: "inside", options: ["in", "on", "at", "under"] },
      // Intermediate
      { id: "p6", type: "preposition", difficulty: "intermediate", points: 15, sentence: "I've been waiting ___ two hours.", answer: "for", hint: "duration", options: ["for", "since", "during", "in"] },
      { id: "p7", type: "preposition", difficulty: "intermediate", points: 15, sentence: "She has worked here ___ 2020.", answer: "since", hint: "starting point", options: ["since", "for", "from", "in"] },
      { id: "p8", type: "preposition", difficulty: "intermediate", points: 15, sentence: "We walked ___ the park.", answer: "through", hint: "passing inside", options: ["through", "across", "over", "along"] },
      { id: "p9", type: "preposition", difficulty: "intermediate", points: 15, sentence: "The restaurant is ___ the bank and the post office.", answer: "between", hint: "middle of two", options: ["between", "among", "beside", "next to"] },
      { id: "p10", type: "preposition", difficulty: "intermediate", points: 15, sentence: "He jumped ___ the swimming pool.", answer: "into", hint: "entering", options: ["into", "in", "to", "onto"] },
      // Advanced
      { id: "p11", type: "preposition", difficulty: "advanced", points: 20, sentence: "I'm looking forward ___ meeting you.", answer: "to", hint: "phrasal verb", options: ["to", "for", "at", "on"] },
      { id: "p12", type: "preposition", difficulty: "advanced", points: 20, sentence: "She is good ___ playing tennis.", answer: "at", hint: "ability", options: ["at", "in", "on", "for"] },
      { id: "p13", type: "preposition", difficulty: "advanced", points: 20, sentence: "This book was written ___ Shakespeare.", answer: "by", hint: "author", options: ["by", "from", "with", "of"] },
      { id: "p14", type: "preposition", difficulty: "advanced", points: 20, sentence: "I'm not interested ___ football.", answer: "in", hint: "interest", options: ["in", "on", "at", "for"] },
      { id: "p15", type: "preposition", difficulty: "advanced", points: 20, sentence: "She apologized ___ being late.", answer: "for", hint: "reason", options: ["for", "to", "about", "of"] },
    ],
  },
  {
    id: "vocabulary",
    title: "Vocabulary",
    titleUz: "So'z boyligi",
    description: "Everyday words and phrases",
    icon: "GraduationCap",
    color: "bg-gradient-to-br from-purple-500 to-violet-600",
    exercises: [
      // Fill exercises
      { id: "v1", type: "fill", difficulty: "beginner", points: 10, sentence: "I ___ to school every day.", answer: "go", hint: "boraman", uzbek: "Men har kuni maktabga boraman.", explanation: "go - bormoq" },
      { id: "v2", type: "fill", difficulty: "beginner", points: 10, sentence: "She ___ English very well.", answer: "speaks", hint: "gapiradi", uzbek: "U ingliz tilida juda yaxshi gapiradi.", explanation: "speak - gapirmoq" },
      { id: "v3", type: "fill", difficulty: "beginner", points: 10, sentence: "They ___ breakfast at 8 AM.", answer: "have", hint: "yeydilar", uzbek: "Ular soat 8 da nonushta qilishadi.", explanation: "have breakfast - nonushta qilmoq" },
      { id: "v4", type: "fill", difficulty: "intermediate", points: 15, sentence: "I need to ___ my homework before dinner.", answer: "finish", hint: "tugatmoq", uzbek: "Men kechki ovqatdan oldin uy vazifamni tugatishim kerak.", explanation: "finish - tugatmoq" },
      { id: "v5", type: "fill", difficulty: "intermediate", points: 15, sentence: "Could you ___ me the salt, please?", answer: "pass", hint: "uzating", uzbek: "Iltimos, tuzni uzata olasizmi?", explanation: "pass - uzatmoq" },
      { id: "v6", type: "fill", difficulty: "intermediate", points: 15, sentence: "The movie was so ___ that I cried.", answer: "sad", hint: "g'amgin", uzbek: "Film shunchalik g'amgin ediki, men yig'lab yubordim.", explanation: "sad - g'amgin" },
      { id: "v7", type: "fill", difficulty: "advanced", points: 20, sentence: "Despite the difficulties, she ___ to complete the project.", answer: "managed", hint: "uddaladi", uzbek: "Qiyinchiliklarga qaramay, u loyihani tugatishga muvaffaq bo'ldi.", explanation: "manage - uddalash, erishish" },
      { id: "v8", type: "fill", difficulty: "advanced", points: 20, sentence: "The scientist made an important ___.", answer: "discovery", hint: "kashfiyot", uzbek: "Olim muhim kashfiyot qildi.", explanation: "discovery - kashfiyot" },
      // Choice exercises
      { id: "v9", type: "choice", difficulty: "beginner", points: 10, question: "What is the opposite of 'hot'?", options: ["warm", "cold", "cool", "wet"], correct: 1, uzbek: "Sovuq", explanation: "hot (issiq) ↔ cold (sovuq)" },
      { id: "v10", type: "choice", difficulty: "beginner", points: 10, question: "Which word means 'katta'?", options: ["small", "big", "tall", "short"], correct: 1, uzbek: "Katta = big", explanation: "big - katta" },
      { id: "v11", type: "choice", difficulty: "intermediate", points: 15, question: "What does 'delicious' mean?", options: ["terrible", "tasty", "boring", "ugly"], correct: 1, uzbek: "Mazali", explanation: "delicious - mazali" },
      { id: "v12", type: "choice", difficulty: "intermediate", points: 15, question: "Choose the correct word: 'I'm very ___ today.'", options: ["tire", "tiring", "tired", "tiredness"], correct: 2, uzbek: "Charchagan", explanation: "tired - charchagan (adjective)" },
      { id: "v13", type: "choice", difficulty: "advanced", points: 20, question: "What is a synonym for 'intelligent'?", options: ["stupid", "smart", "slow", "lazy"], correct: 1, uzbek: "Aqlli", explanation: "intelligent = smart - aqlli" },
      { id: "v14", type: "choice", difficulty: "advanced", points: 20, question: "Which word means 'to succeed'?", options: ["fail", "achieve", "lose", "miss"], correct: 1, uzbek: "Muvaffaqiyatga erishmoq", explanation: "achieve - erishmoq, muvaffaq bo'lmoq" },
    ],
  },
  {
    id: "translation",
    title: "Translation",
    titleUz: "Tarjima",
    description: "English-Uzbek translation",
    icon: "Languages",
    color: "bg-gradient-to-br from-emerald-500 to-green-600",
    exercises: [
      // English to Uzbek
      { id: "tr1", type: "translate", difficulty: "beginner", points: 10, english: "Hello!", uzbek: "Salom!", direction: "en-uz", acceptedAnswers: ["salom", "assalomu alaykum", "salom!"] },
      { id: "tr2", type: "translate", difficulty: "beginner", points: 10, english: "Thank you very much", uzbek: "Katta rahmat", direction: "en-uz", acceptedAnswers: ["katta rahmat", "rahmat", "katta raxmat"] },
      { id: "tr3", type: "translate", difficulty: "beginner", points: 10, english: "How are you?", uzbek: "Qalaysiz?", direction: "en-uz", acceptedAnswers: ["qalaysiz", "yaxshimisiz", "ishlar qanday"] },
      { id: "tr4", type: "translate", difficulty: "intermediate", points: 15, english: "I am a student", uzbek: "Men talabaman", direction: "en-uz", acceptedAnswers: ["men talabaman", "men o'quvchiman", "talabaman"] },
      { id: "tr5", type: "translate", difficulty: "intermediate", points: 15, english: "Where is the library?", uzbek: "Kutubxona qayerda?", direction: "en-uz", acceptedAnswers: ["kutubxona qayerda", "kutubxona qaerda", "kutubxona qayerda joylashgan"] },
      { id: "tr6", type: "translate", difficulty: "intermediate", points: 15, english: "I like this book", uzbek: "Menga bu kitob yoqadi", direction: "en-uz", acceptedAnswers: ["menga bu kitob yoqadi", "bu kitob menga yoqadi", "men bu kitobni yoqtiraman"] },
      { id: "tr7", type: "translate", difficulty: "advanced", points: 20, english: "I have been learning English for 3 years", uzbek: "Men 3 yildan beri ingliz tilini o'rganyapman", direction: "en-uz", acceptedAnswers: ["men 3 yildan beri ingliz tilini o'rganyapman", "3 yildan beri ingliz tili o'rganyapman"] },
      { id: "tr8", type: "translate", difficulty: "advanced", points: 20, english: "Could you help me, please?", uzbek: "Iltimos, menga yordam bera olasizmi?", direction: "en-uz", acceptedAnswers: ["iltimos menga yordam bera olasizmi", "menga yordam bering iltimos", "yordam bera olasizmi"] },
      // Uzbek to English
      { id: "tr9", type: "translate", difficulty: "beginner", points: 10, english: "Good morning", uzbek: "Xayrli tong", direction: "uz-en", acceptedAnswers: ["good morning", "good morning!"] },
      { id: "tr10", type: "translate", difficulty: "beginner", points: 10, english: "Please", uzbek: "Iltimos", direction: "uz-en", acceptedAnswers: ["please", "please!"] },
      { id: "tr11", type: "translate", difficulty: "intermediate", points: 15, english: "I am learning English", uzbek: "Men ingliz tilini o'rganyapman", direction: "uz-en", acceptedAnswers: ["i am learning english", "i'm learning english", "i learn english"] },
      { id: "tr12", type: "translate", difficulty: "intermediate", points: 15, english: "What time is it?", uzbek: "Soat necha?", direction: "uz-en", acceptedAnswers: ["what time is it", "what time is it?", "what's the time"] },
      { id: "tr13", type: "translate", difficulty: "advanced", points: 20, english: "I would like to visit London", uzbek: "Men Londonga borishni xohlayman", direction: "uz-en", acceptedAnswers: ["i would like to visit london", "i want to visit london", "i'd like to visit london"] },
      { id: "tr14", type: "translate", difficulty: "advanced", points: 20, english: "She has already finished her homework", uzbek: "U allaqachon uy vazifasini tugatdi", direction: "uz-en", acceptedAnswers: ["she has already finished her homework", "she already finished her homework", "she's already finished her homework"] },
    ],
  },
  {
    id: "sentences",
    title: "Sentences",
    titleUz: "Gaplar",
    description: "Sentence structure practice",
    icon: "MessageSquare",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
    exercises: [
      { id: "s1", type: "fill", difficulty: "beginner", points: 10, sentence: "My name ___ John.", answer: "is", hint: "bo'lmoq", uzbek: "Mening ismim Jon.", explanation: "Be verb: I am, you are, he/she/it is" },
      { id: "s2", type: "fill", difficulty: "beginner", points: 10, sentence: "I ___ from Uzbekistan.", answer: "am", hint: "bo'lmoq", uzbek: "Men O'zbekistondanman.", explanation: "I am = Men ...man" },
      { id: "s3", type: "fill", difficulty: "beginner", points: 10, sentence: "The weather ___ nice today.", answer: "is", hint: "bo'lmoq", uzbek: "Bugun ob-havo yaxshi.", explanation: "The weather is... (3rd person singular)" },
      { id: "s4", type: "fill", difficulty: "intermediate", points: 15, sentence: "I ___ never been to Paris.", answer: "have", hint: "Present Perfect", uzbek: "Men hech qachon Parijda bo'lmaganman.", explanation: "Present Perfect: have/has + past participle" },
      { id: "s5", type: "fill", difficulty: "intermediate", points: 15, sentence: "___ you speak English?", answer: "Do", hint: "savol", uzbek: "Siz inglizcha gaplasasizmi?", explanation: "Questions in Present Simple: Do/Does + subject + base verb" },
      { id: "s6", type: "fill", difficulty: "intermediate", points: 15, sentence: "She ___ reading when I called.", answer: "was", hint: "Past Continuous", uzbek: "Men qo'ng'iroq qilganimda u kitob o'qiyotgan edi.", explanation: "Past Continuous: was/were + verb-ing" },
      { id: "s7", type: "fill", difficulty: "advanced", points: 20, sentence: "If I ___ rich, I would travel the world.", answer: "were", hint: "shart gap", uzbek: "Agar men boy bo'lganimda, dunyoni sayohat qilardim.", explanation: "Second Conditional: If + past simple, would + base verb" },
      { id: "s8", type: "fill", difficulty: "advanced", points: 20, sentence: "By next year, I ___ graduated from university.", answer: "will have", hint: "Future Perfect", uzbek: "Kelasi yilga men universitetni tamomlagan bo'laman.", explanation: "Future Perfect: will have + past participle" },
      { id: "s9", type: "choice", difficulty: "beginner", points: 10, question: "Choose the correct word order:", options: ["Read I books", "I books read", "I read books", "Books I read"], correct: 2, uzbek: "Men kitob o'qiyman", explanation: "English word order: Subject + Verb + Object" },
      { id: "s10", type: "choice", difficulty: "intermediate", points: 15, question: "Which sentence is correct?", options: ["She don't like coffee", "She doesn't likes coffee", "She doesn't like coffee", "She not like coffee"], correct: 2, uzbek: "U qahvani yoqtirmaydi", explanation: "Negative: doesn't + base verb (not doesn't + verb-s)" },
      { id: "s11", type: "choice", difficulty: "advanced", points: 20, question: "Choose the correct sentence:", options: ["If I will have time, I will help you", "If I have time, I will help you", "If I have time, I help you", "If I had time, I will help you"], correct: 1, uzbek: "Agar vaqtim bo'lsa, sizga yordam beraman", explanation: "First Conditional: If + present simple, will + base verb" },
    ],
  },
];

export const getDifficultyLabel = (difficulty: string): string => {
  switch (difficulty) {
    case "beginner": return "Beginner";
    case "intermediate": return "Intermediate";
    case "advanced": return "Advanced";
    default: return difficulty;
  }
};

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case "beginner": return "bg-green-500/10 text-green-600 border-green-500/30";
    case "intermediate": return "bg-amber-500/10 text-amber-600 border-amber-500/30";
    case "advanced": return "bg-red-500/10 text-red-600 border-red-500/30";
    default: return "bg-muted text-muted-foreground";
  }
};
