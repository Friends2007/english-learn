export interface ListeningExercise {
  id: string;
  type: "dialogue" | "dictation" | "comprehension";
  title: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  points: number;
}

export interface DialogueExercise extends ListeningExercise {
  type: "dialogue";
  speakers: { name: string; lines: string[] }[];
  questions: {
    question: string;
    options: string[];
    correct: number;
  }[];
}

export interface DictationExercise extends ListeningExercise {
  type: "dictation";
  text: string;
  hint?: string;
}

export interface ComprehensionExercise extends ListeningExercise {
  type: "comprehension";
  text: string;
  questions: {
    question: string;
    options: string[];
    correct: number;
  }[];
}

export type AnyListeningExercise = DialogueExercise | DictationExercise | ComprehensionExercise;

export const listeningExercises: AnyListeningExercise[] = [
  // Dictation Exercises - Beginner
  {
    id: "dict-1",
    type: "dictation",
    title: "Simple Greeting",
    difficulty: "beginner",
    points: 10,
    text: "Hello, my name is John.",
    hint: "A simple introduction"
  },
  {
    id: "dict-2",
    type: "dictation",
    title: "Daily Routine",
    difficulty: "beginner",
    points: 10,
    text: "I wake up at seven o'clock.",
    hint: "Morning routine"
  },
  {
    id: "dict-3",
    type: "dictation",
    title: "Weather",
    difficulty: "beginner",
    points: 10,
    text: "Today is a sunny day.",
    hint: "About weather"
  },
  {
    id: "dict-4",
    type: "dictation",
    title: "Food",
    difficulty: "beginner",
    points: 10,
    text: "I like to eat apples and bananas.",
    hint: "About food"
  },
  {
    id: "dict-5",
    type: "dictation",
    title: "Family",
    difficulty: "beginner",
    points: 15,
    text: "I have two brothers and one sister.",
    hint: "About family"
  },
  // Dictation Exercises - Intermediate
  {
    id: "dict-6",
    type: "dictation",
    title: "Travel Plans",
    difficulty: "intermediate",
    points: 20,
    text: "I am planning to visit London next summer.",
    hint: "Travel related"
  },
  {
    id: "dict-7",
    type: "dictation",
    title: "Work Life",
    difficulty: "intermediate",
    points: 20,
    text: "She works as a teacher at the local school.",
    hint: "About profession"
  },
  {
    id: "dict-8",
    type: "dictation",
    title: "Shopping",
    difficulty: "intermediate",
    points: 25,
    text: "Could you please tell me where the nearest supermarket is?",
    hint: "Asking for directions"
  },
  // Dictation Exercises - Advanced
  {
    id: "dict-9",
    type: "dictation",
    title: "Business Meeting",
    difficulty: "advanced",
    points: 30,
    text: "The quarterly report indicates a significant improvement in our sales figures.",
    hint: "Business context"
  },
  {
    id: "dict-10",
    type: "dictation",
    title: "Academic",
    difficulty: "advanced",
    points: 35,
    text: "The research demonstrates a strong correlation between exercise and mental health.",
    hint: "Academic context"
  },

  // Dialogue Exercises - Beginner
  {
    id: "dialogue-1",
    type: "dialogue",
    title: "At the Coffee Shop",
    difficulty: "beginner",
    points: 20,
    speakers: [
      { name: "Customer", lines: ["Hello, can I have a coffee please?", "Yes, a large one.", "Here you go. Thank you!"] },
      { name: "Barista", lines: ["Of course! Would you like a small or large?", "That will be three dollars.", "You're welcome. Have a nice day!"] }
    ],
    questions: [
      {
        question: "What does the customer order?",
        options: ["Tea", "Coffee", "Juice", "Water"],
        correct: 1
      },
      {
        question: "What size does the customer choose?",
        options: ["Small", "Medium", "Large", "Extra large"],
        correct: 2
      },
      {
        question: "How much does it cost?",
        options: ["Two dollars", "Three dollars", "Four dollars", "Five dollars"],
        correct: 1
      }
    ]
  },
  {
    id: "dialogue-2",
    type: "dialogue",
    title: "Meeting a Friend",
    difficulty: "beginner",
    points: 20,
    speakers: [
      { name: "Anna", lines: ["Hi! How are you today?", "I'm great too! Are you free this weekend?", "Let's go to the cinema on Saturday!"] },
      { name: "Tom", lines: ["Hello Anna! I'm fine, thank you. And you?", "Yes, I am. What do you have in mind?", "Sounds perfect! See you then!"] }
    ],
    questions: [
      {
        question: "How is Tom feeling?",
        options: ["Tired", "Fine", "Sick", "Sad"],
        correct: 1
      },
      {
        question: "When do they plan to meet?",
        options: ["Friday", "Saturday", "Sunday", "Monday"],
        correct: 1
      },
      {
        question: "Where are they planning to go?",
        options: ["Restaurant", "Park", "Cinema", "Shopping mall"],
        correct: 2
      }
    ]
  },
  // Dialogue Exercises - Intermediate
  {
    id: "dialogue-3",
    type: "dialogue",
    title: "Job Interview",
    difficulty: "intermediate",
    points: 30,
    speakers: [
      { name: "Interviewer", lines: ["Good morning. Please take a seat.", "Tell me about your previous work experience.", "Why do you want to work for our company?"] },
      { name: "Candidate", lines: ["Thank you for having me today.", "I worked as a marketing specialist for three years at a tech company.", "I admire your innovative approach and company culture."] }
    ],
    questions: [
      {
        question: "What was the candidate's previous job?",
        options: ["Software developer", "Marketing specialist", "Sales manager", "Designer"],
        correct: 1
      },
      {
        question: "How long did the candidate work at the previous company?",
        options: ["One year", "Two years", "Three years", "Four years"],
        correct: 2
      },
      {
        question: "What does the candidate admire about the company?",
        options: ["High salary", "Location", "Innovative approach and culture", "Benefits"],
        correct: 2
      }
    ]
  },
  // Dialogue Exercises - Advanced
  {
    id: "dialogue-4",
    type: "dialogue",
    title: "Business Negotiation",
    difficulty: "advanced",
    points: 40,
    speakers: [
      { name: "Client", lines: ["We've reviewed your proposal, and while the quality is excellent, the price seems higher than competitors.", "What kind of discounts can you offer for a long-term partnership?", "That sounds reasonable. Let's proceed with the contract."] },
      { name: "Supplier", lines: ["I understand your concern. However, our premium materials justify the cost.", "For a two-year contract, we can offer a fifteen percent discount.", "Excellent! I'll have the documents prepared by tomorrow."] }
    ],
    questions: [
      {
        question: "What is the client's concern about the proposal?",
        options: ["Quality is poor", "Delivery is slow", "Price is higher than competitors", "Service is bad"],
        correct: 2
      },
      {
        question: "What discount is offered for a long-term partnership?",
        options: ["Ten percent", "Fifteen percent", "Twenty percent", "Twenty-five percent"],
        correct: 1
      },
      {
        question: "How long is the proposed contract?",
        options: ["One year", "Two years", "Three years", "Five years"],
        correct: 1
      }
    ]
  },

  // Comprehension Exercises
  {
    id: "comp-1",
    type: "comprehension",
    title: "A Day at the Zoo",
    difficulty: "beginner",
    points: 25,
    text: "Last Sunday, my family went to the zoo. We saw many animals like lions, elephants, and monkeys. The monkeys were very funny. They jumped from tree to tree. We had lunch near the lake and watched the ducks swimming. It was a wonderful day.",
    questions: [
      {
        question: "When did the family go to the zoo?",
        options: ["Last Saturday", "Last Sunday", "Last Monday", "Last Friday"],
        correct: 1
      },
      {
        question: "Which animals were described as funny?",
        options: ["Lions", "Elephants", "Monkeys", "Ducks"],
        correct: 2
      },
      {
        question: "Where did they have lunch?",
        options: ["Near the monkeys", "Near the lake", "Near the entrance", "At a restaurant"],
        correct: 1
      }
    ]
  },
  {
    id: "comp-2",
    type: "comprehension",
    title: "The New Student",
    difficulty: "intermediate",
    points: 30,
    text: "A new student named Maria joined our class last week. She moved here from Spain with her family. Maria speaks three languages: Spanish, English, and French. She is very friendly and loves to play basketball. Everyone in the class welcomed her warmly.",
    questions: [
      {
        question: "Where is Maria from?",
        options: ["France", "Italy", "Spain", "Portugal"],
        correct: 2
      },
      {
        question: "How many languages does Maria speak?",
        options: ["One", "Two", "Three", "Four"],
        correct: 2
      },
      {
        question: "What sport does Maria like?",
        options: ["Football", "Tennis", "Basketball", "Swimming"],
        correct: 2
      }
    ]
  }
];

export const getDifficultyLabel = (difficulty: string): string => {
  switch (difficulty) {
    case "beginner": return "Boshlang'ich";
    case "intermediate": return "O'rta";
    case "advanced": return "Murakkab";
    default: return difficulty;
  }
};

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case "beginner": return "bg-green-500/20 text-green-600 border-green-500/30";
    case "intermediate": return "bg-amber-500/20 text-amber-600 border-amber-500/30";
    case "advanced": return "bg-red-500/20 text-red-600 border-red-500/30";
    default: return "bg-muted text-muted-foreground";
  }
};
