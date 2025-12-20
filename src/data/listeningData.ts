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
  // ==================== DICTATION EXERCISES ====================
  // Beginner Dictation
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
  {
    id: "dict-6",
    type: "dictation",
    title: "Colors",
    difficulty: "beginner",
    points: 10,
    text: "The sky is blue and the grass is green.",
    hint: "About colors"
  },
  {
    id: "dict-7",
    type: "dictation",
    title: "Numbers",
    difficulty: "beginner",
    points: 10,
    text: "There are twelve months in a year.",
    hint: "About time"
  },
  {
    id: "dict-8",
    type: "dictation",
    title: "School",
    difficulty: "beginner",
    points: 10,
    text: "I go to school by bus every day.",
    hint: "About school"
  },
  {
    id: "dict-9",
    type: "dictation",
    title: "Pets",
    difficulty: "beginner",
    points: 10,
    text: "My dog likes to play in the park.",
    hint: "About pets"
  },
  {
    id: "dict-10",
    type: "dictation",
    title: "Home",
    difficulty: "beginner",
    points: 10,
    text: "Our house has three bedrooms.",
    hint: "About home"
  },
  // Intermediate Dictation
  {
    id: "dict-11",
    type: "dictation",
    title: "Travel Plans",
    difficulty: "intermediate",
    points: 20,
    text: "I am planning to visit London next summer.",
    hint: "Travel related"
  },
  {
    id: "dict-12",
    type: "dictation",
    title: "Work Life",
    difficulty: "intermediate",
    points: 20,
    text: "She works as a teacher at the local school.",
    hint: "About profession"
  },
  {
    id: "dict-13",
    type: "dictation",
    title: "Shopping",
    difficulty: "intermediate",
    points: 25,
    text: "Could you please tell me where the nearest supermarket is?",
    hint: "Asking for directions"
  },
  {
    id: "dict-14",
    type: "dictation",
    title: "Restaurant",
    difficulty: "intermediate",
    points: 20,
    text: "I would like to make a reservation for two people.",
    hint: "Restaurant booking"
  },
  {
    id: "dict-15",
    type: "dictation",
    title: "Health",
    difficulty: "intermediate",
    points: 20,
    text: "You should drink plenty of water every day.",
    hint: "Health advice"
  },
  {
    id: "dict-16",
    type: "dictation",
    title: "Technology",
    difficulty: "intermediate",
    points: 25,
    text: "My smartphone battery usually lasts for two days.",
    hint: "About technology"
  },
  {
    id: "dict-17",
    type: "dictation",
    title: "Hobbies",
    difficulty: "intermediate",
    points: 20,
    text: "I enjoy reading books and listening to music in my free time.",
    hint: "About hobbies"
  },
  {
    id: "dict-18",
    type: "dictation",
    title: "Weather Report",
    difficulty: "intermediate",
    points: 25,
    text: "Tomorrow will be cloudy with a chance of rain in the afternoon.",
    hint: "Weather forecast"
  },
  {
    id: "dict-19",
    type: "dictation",
    title: "Sports",
    difficulty: "intermediate",
    points: 20,
    text: "The football match starts at eight o'clock tonight.",
    hint: "About sports"
  },
  {
    id: "dict-20",
    type: "dictation",
    title: "Education",
    difficulty: "intermediate",
    points: 25,
    text: "University students must complete their assignments on time.",
    hint: "About education"
  },
  // Advanced Dictation
  {
    id: "dict-21",
    type: "dictation",
    title: "Business Meeting",
    difficulty: "advanced",
    points: 30,
    text: "The quarterly report indicates a significant improvement in our sales figures.",
    hint: "Business context"
  },
  {
    id: "dict-22",
    type: "dictation",
    title: "Academic",
    difficulty: "advanced",
    points: 35,
    text: "The research demonstrates a strong correlation between exercise and mental health.",
    hint: "Academic context"
  },
  {
    id: "dict-23",
    type: "dictation",
    title: "Environmental",
    difficulty: "advanced",
    points: 35,
    text: "Climate change is affecting ecosystems and biodiversity around the world.",
    hint: "Environmental topic"
  },
  {
    id: "dict-24",
    type: "dictation",
    title: "Medical",
    difficulty: "advanced",
    points: 35,
    text: "The patient should take this medication twice daily after meals.",
    hint: "Medical instructions"
  },
  {
    id: "dict-25",
    type: "dictation",
    title: "Legal",
    difficulty: "advanced",
    points: 40,
    text: "The contract must be signed by both parties before the deadline.",
    hint: "Legal context"
  },
  {
    id: "dict-26",
    type: "dictation",
    title: "Economics",
    difficulty: "advanced",
    points: 35,
    text: "The inflation rate has decreased compared to the previous quarter.",
    hint: "Economic news"
  },
  {
    id: "dict-27",
    type: "dictation",
    title: "Technology Innovation",
    difficulty: "advanced",
    points: 40,
    text: "Artificial intelligence is revolutionizing the way businesses operate globally.",
    hint: "Tech innovation"
  },
  {
    id: "dict-28",
    type: "dictation",
    title: "Scientific Discovery",
    difficulty: "advanced",
    points: 40,
    text: "Scientists have discovered a new species of butterfly in the Amazon rainforest.",
    hint: "Scientific news"
  },

  // ==================== DIALOGUE EXERCISES ====================
  // Beginner Dialogues
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
      { question: "What does the customer order?", options: ["Tea", "Coffee", "Juice", "Water"], correct: 1 },
      { question: "What size does the customer choose?", options: ["Small", "Medium", "Large", "Extra large"], correct: 2 },
      { question: "How much does it cost?", options: ["Two dollars", "Three dollars", "Four dollars", "Five dollars"], correct: 1 }
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
      { question: "How is Tom feeling?", options: ["Tired", "Fine", "Sick", "Sad"], correct: 1 },
      { question: "When do they plan to meet?", options: ["Friday", "Saturday", "Sunday", "Monday"], correct: 1 },
      { question: "Where are they planning to go?", options: ["Restaurant", "Park", "Cinema", "Shopping mall"], correct: 2 }
    ]
  },
  {
    id: "dialogue-3",
    type: "dialogue",
    title: "At the Supermarket",
    difficulty: "beginner",
    points: 20,
    speakers: [
      { name: "Customer", lines: ["Excuse me, where can I find the milk?", "Thank you! And where is the bread?", "Great, thanks for your help!"] },
      { name: "Staff", lines: ["The milk is in aisle three, next to the cheese.", "The bread is in aisle one, near the entrance.", "You're welcome! Have a nice day!"] }
    ],
    questions: [
      { question: "Where is the milk?", options: ["Aisle one", "Aisle two", "Aisle three", "Aisle four"], correct: 2 },
      { question: "What is next to the milk?", options: ["Bread", "Cheese", "Eggs", "Butter"], correct: 1 },
      { question: "Where is the bread located?", options: ["Near the exit", "Near the entrance", "In the back", "Upstairs"], correct: 1 }
    ]
  },
  {
    id: "dialogue-4",
    type: "dialogue",
    title: "Ordering Food",
    difficulty: "beginner",
    points: 20,
    speakers: [
      { name: "Waiter", lines: ["Good evening! Are you ready to order?", "Would you like anything to drink?", "Your order will be ready in fifteen minutes."] },
      { name: "Customer", lines: ["Yes, I'll have the chicken salad, please.", "I'll have a glass of orange juice.", "Thank you very much!"] }
    ],
    questions: [
      { question: "What does the customer order to eat?", options: ["Beef steak", "Chicken salad", "Fish and chips", "Pizza"], correct: 1 },
      { question: "What does the customer order to drink?", options: ["Water", "Coffee", "Orange juice", "Tea"], correct: 2 },
      { question: "How long will the order take?", options: ["Ten minutes", "Fifteen minutes", "Twenty minutes", "Thirty minutes"], correct: 1 }
    ]
  },
  {
    id: "dialogue-5",
    type: "dialogue",
    title: "At the Bus Stop",
    difficulty: "beginner",
    points: 20,
    speakers: [
      { name: "Tourist", lines: ["Excuse me, does this bus go to the city center?", "How long does it take?", "Thank you so much!"] },
      { name: "Local", lines: ["Yes, it does. It's the number five bus.", "About twenty minutes, depending on traffic.", "No problem! Enjoy your visit!"] }
    ],
    questions: [
      { question: "What number is the bus?", options: ["Three", "Four", "Five", "Six"], correct: 2 },
      { question: "Where does the tourist want to go?", options: ["Airport", "Train station", "City center", "Beach"], correct: 2 },
      { question: "How long does the journey take?", options: ["Ten minutes", "Twenty minutes", "Thirty minutes", "Forty minutes"], correct: 1 }
    ]
  },
  {
    id: "dialogue-6",
    type: "dialogue",
    title: "Making Plans",
    difficulty: "beginner",
    points: 20,
    speakers: [
      { name: "Sarah", lines: ["What are you doing tomorrow?", "That sounds fun! Can I join you?", "Great! What time should I come?"] },
      { name: "Mike", lines: ["I'm going to the beach with some friends.", "Of course! The more the merrier!", "We're meeting at ten in the morning."] }
    ],
    questions: [
      { question: "Where is Mike going tomorrow?", options: ["Park", "Beach", "Mountain", "Lake"], correct: 1 },
      { question: "Who is Mike going with?", options: ["Family", "Colleagues", "Friends", "Alone"], correct: 2 },
      { question: "What time are they meeting?", options: ["Nine AM", "Ten AM", "Eleven AM", "Twelve PM"], correct: 1 }
    ]
  },
  // Intermediate Dialogues
  {
    id: "dialogue-7",
    type: "dialogue",
    title: "Job Interview",
    difficulty: "intermediate",
    points: 30,
    speakers: [
      { name: "Interviewer", lines: ["Good morning. Please take a seat.", "Tell me about your previous work experience.", "Why do you want to work for our company?"] },
      { name: "Candidate", lines: ["Thank you for having me today.", "I worked as a marketing specialist for three years at a tech company.", "I admire your innovative approach and company culture."] }
    ],
    questions: [
      { question: "What was the candidate's previous job?", options: ["Software developer", "Marketing specialist", "Sales manager", "Designer"], correct: 1 },
      { question: "How long did the candidate work there?", options: ["One year", "Two years", "Three years", "Four years"], correct: 2 },
      { question: "What does the candidate admire?", options: ["High salary", "Location", "Innovative approach and culture", "Benefits"], correct: 2 }
    ]
  },
  {
    id: "dialogue-8",
    type: "dialogue",
    title: "Doctor's Appointment",
    difficulty: "intermediate",
    points: 30,
    speakers: [
      { name: "Doctor", lines: ["Good morning. What seems to be the problem?", "How long have you had these symptoms?", "I'll prescribe some medicine. Take it twice a day after meals."] },
      { name: "Patient", lines: ["I've been having headaches and feeling tired.", "About a week now.", "Thank you, doctor. Should I come back for a checkup?"] }
    ],
    questions: [
      { question: "What symptoms does the patient have?", options: ["Cough and fever", "Headaches and tiredness", "Stomach pain", "Back pain"], correct: 1 },
      { question: "How long has the patient been sick?", options: ["Three days", "Five days", "A week", "Two weeks"], correct: 2 },
      { question: "How often should the medicine be taken?", options: ["Once a day", "Twice a day", "Three times a day", "Four times a day"], correct: 1 }
    ]
  },
  {
    id: "dialogue-9",
    type: "dialogue",
    title: "Hotel Check-in",
    difficulty: "intermediate",
    points: 30,
    speakers: [
      { name: "Receptionist", lines: ["Good evening. Welcome to Grand Hotel. Do you have a reservation?", "I found your booking. A double room for three nights.", "Here's your key. Your room is on the fifth floor."] },
      { name: "Guest", lines: ["Yes, I booked online. The name is Johnson.", "That's correct. Is breakfast included?", "Thank you. What time is checkout?"] }
    ],
    questions: [
      { question: "What type of room did the guest book?", options: ["Single room", "Double room", "Suite", "Family room"], correct: 1 },
      { question: "How many nights is the stay?", options: ["Two nights", "Three nights", "Four nights", "Five nights"], correct: 1 },
      { question: "Which floor is the room on?", options: ["Third floor", "Fourth floor", "Fifth floor", "Sixth floor"], correct: 2 }
    ]
  },
  {
    id: "dialogue-10",
    type: "dialogue",
    title: "At the Bank",
    difficulty: "intermediate",
    points: 30,
    speakers: [
      { name: "Customer", lines: ["Hello, I'd like to open a savings account.", "What's the interest rate?", "That sounds good. What documents do I need?"] },
      { name: "Banker", lines: ["Certainly! We have several options available.", "Our current rate is two point five percent annually.", "You'll need your ID and proof of address."] }
    ],
    questions: [
      { question: "What does the customer want to open?", options: ["Checking account", "Savings account", "Credit card", "Loan"], correct: 1 },
      { question: "What is the interest rate?", options: ["One point five percent", "Two percent", "Two point five percent", "Three percent"], correct: 2 },
      { question: "What documents are needed?", options: ["Passport only", "ID and proof of address", "Birth certificate", "Work contract"], correct: 1 }
    ]
  },
  {
    id: "dialogue-11",
    type: "dialogue",
    title: "Booking a Flight",
    difficulty: "intermediate",
    points: 30,
    speakers: [
      { name: "Agent", lines: ["Hello, how can I help you today?", "When would you like to travel?", "We have a flight departing at eight AM. The ticket costs four hundred dollars."] },
      { name: "Customer", lines: ["I need to book a flight to New York.", "Next Monday, please.", "I'll take it. Can I pay by credit card?"] }
    ],
    questions: [
      { question: "Where does the customer want to fly?", options: ["Los Angeles", "Chicago", "New York", "Miami"], correct: 2 },
      { question: "When does the customer want to travel?", options: ["This Friday", "This Sunday", "Next Monday", "Next Wednesday"], correct: 2 },
      { question: "How much does the ticket cost?", options: ["Three hundred dollars", "Four hundred dollars", "Five hundred dollars", "Six hundred dollars"], correct: 1 }
    ]
  },
  {
    id: "dialogue-12",
    type: "dialogue",
    title: "Car Rental",
    difficulty: "intermediate",
    points: 30,
    speakers: [
      { name: "Agent", lines: ["Good morning! Are you here to pick up a rental car?", "We have a compact car available for fifty dollars per day.", "The car has a full tank. Please return it with a full tank."] },
      { name: "Customer", lines: ["Yes, I made a reservation for a week.", "That works for me. Does it include insurance?", "Understood. Where can I pick up the car?"] }
    ],
    questions: [
      { question: "How long is the rental period?", options: ["Three days", "Five days", "A week", "Two weeks"], correct: 2 },
      { question: "How much does the car cost per day?", options: ["Forty dollars", "Fifty dollars", "Sixty dollars", "Seventy dollars"], correct: 1 },
      { question: "How should the car be returned?", options: ["Empty tank", "Half tank", "Full tank", "Any level"], correct: 2 }
    ]
  },
  // Advanced Dialogues
  {
    id: "dialogue-13",
    type: "dialogue",
    title: "Business Negotiation",
    difficulty: "advanced",
    points: 40,
    speakers: [
      { name: "Client", lines: ["We've reviewed your proposal, and while the quality is excellent, the price seems higher than competitors.", "What kind of discounts can you offer for a long-term partnership?", "That sounds reasonable. Let's proceed with the contract."] },
      { name: "Supplier", lines: ["I understand your concern. However, our premium materials justify the cost.", "For a two-year contract, we can offer a fifteen percent discount.", "Excellent! I'll have the documents prepared by tomorrow."] }
    ],
    questions: [
      { question: "What is the client's concern?", options: ["Quality is poor", "Delivery is slow", "Price is higher than competitors", "Service is bad"], correct: 2 },
      { question: "What discount is offered?", options: ["Ten percent", "Fifteen percent", "Twenty percent", "Twenty-five percent"], correct: 1 },
      { question: "How long is the proposed contract?", options: ["One year", "Two years", "Three years", "Five years"], correct: 1 }
    ]
  },
  {
    id: "dialogue-14",
    type: "dialogue",
    title: "Real Estate Discussion",
    difficulty: "advanced",
    points: 40,
    speakers: [
      { name: "Agent", lines: ["This property is located in the downtown area with excellent transport links.", "The asking price is eight hundred thousand dollars, but there's room for negotiation.", "The current owner is motivated to sell, so we could close within thirty days."] },
      { name: "Buyer", lines: ["How old is the building and what's the condition?", "That's within our budget. Are there any additional fees?", "We're interested. Can we schedule a second viewing?"] }
    ],
    questions: [
      { question: "Where is the property located?", options: ["Suburbs", "Downtown", "Countryside", "Beach area"], correct: 1 },
      { question: "What is the asking price?", options: ["Six hundred thousand", "Seven hundred thousand", "Eight hundred thousand", "Nine hundred thousand"], correct: 2 },
      { question: "How quickly could the sale close?", options: ["Two weeks", "Thirty days", "Sixty days", "Ninety days"], correct: 1 }
    ]
  },
  {
    id: "dialogue-15",
    type: "dialogue",
    title: "Project Meeting",
    difficulty: "advanced",
    points: 40,
    speakers: [
      { name: "Manager", lines: ["Let's review the project timeline. We're behind schedule by two weeks.", "What resources do we need to get back on track?", "I'll approve the overtime budget. We need to deliver on time."] },
      { name: "Team Lead", lines: ["The delay was caused by unexpected technical issues.", "We need two additional developers and authorization for overtime work.", "Thank you. I'll update the team immediately."] }
    ],
    questions: [
      { question: "How far behind schedule is the project?", options: ["One week", "Two weeks", "Three weeks", "One month"], correct: 1 },
      { question: "What caused the delay?", options: ["Budget problems", "Staff shortage", "Technical issues", "Client changes"], correct: 2 },
      { question: "How many additional developers are needed?", options: ["One", "Two", "Three", "Four"], correct: 1 }
    ]
  },
  {
    id: "dialogue-16",
    type: "dialogue",
    title: "Investment Consultation",
    difficulty: "advanced",
    points: 40,
    speakers: [
      { name: "Advisor", lines: ["Based on your risk profile, I recommend a diversified portfolio.", "I suggest sixty percent in stocks and forty percent in bonds.", "This strategy should yield approximately seven percent annually."] },
      { name: "Client", lines: ["What's the minimum investment required?", "That sounds balanced. What are the management fees?", "I'd like to proceed. When can we start?"] }
    ],
    questions: [
      { question: "What portfolio split is recommended?", options: ["50-50", "60-40", "70-30", "80-20"], correct: 1 },
      { question: "What is sixty percent allocated to?", options: ["Bonds", "Stocks", "Real estate", "Cash"], correct: 1 },
      { question: "What is the expected annual return?", options: ["Five percent", "Six percent", "Seven percent", "Eight percent"], correct: 2 }
    ]
  },

  // ==================== COMPREHENSION EXERCISES ====================
  {
    id: "comp-1",
    type: "comprehension",
    title: "A Day at the Zoo",
    difficulty: "beginner",
    points: 25,
    text: "Last Sunday, my family went to the zoo. We saw many animals like lions, elephants, and monkeys. The monkeys were very funny. They jumped from tree to tree. We had lunch near the lake and watched the ducks swimming. It was a wonderful day.",
    questions: [
      { question: "When did the family go to the zoo?", options: ["Last Saturday", "Last Sunday", "Last Monday", "Last Friday"], correct: 1 },
      { question: "Which animals were described as funny?", options: ["Lions", "Elephants", "Monkeys", "Ducks"], correct: 2 },
      { question: "Where did they have lunch?", options: ["Near the monkeys", "Near the lake", "Near the entrance", "At a restaurant"], correct: 1 }
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
      { question: "Where is Maria from?", options: ["France", "Italy", "Spain", "Portugal"], correct: 2 },
      { question: "How many languages does Maria speak?", options: ["One", "Two", "Three", "Four"], correct: 2 },
      { question: "What sport does Maria like?", options: ["Football", "Tennis", "Basketball", "Swimming"], correct: 2 }
    ]
  },
  {
    id: "comp-3",
    type: "comprehension",
    title: "The Library",
    difficulty: "beginner",
    points: 25,
    text: "The city library is open every day from nine in the morning to eight in the evening. It has thousands of books, magazines, and newspapers. Students can borrow up to five books for two weeks. There is also a quiet reading room where people can study.",
    questions: [
      { question: "When does the library open?", options: ["Eight AM", "Nine AM", "Ten AM", "Eleven AM"], correct: 1 },
      { question: "How many books can students borrow?", options: ["Three", "Four", "Five", "Six"], correct: 2 },
      { question: "How long can books be borrowed?", options: ["One week", "Two weeks", "Three weeks", "One month"], correct: 1 }
    ]
  },
  {
    id: "comp-4",
    type: "comprehension",
    title: "Global Warming",
    difficulty: "advanced",
    points: 40,
    text: "Global warming is causing significant changes to our planet. Average temperatures have risen by one degree Celsius since the industrial revolution. Scientists predict that sea levels could rise by up to one meter by the year twenty one hundred. Many countries are now investing in renewable energy sources like solar and wind power to reduce carbon emissions.",
    questions: [
      { question: "How much have temperatures risen?", options: ["Half a degree", "One degree", "One and a half degrees", "Two degrees"], correct: 1 },
      { question: "What could happen by 2100?", options: ["Temperatures drop", "Sea levels rise by one meter", "Ice age begins", "Deserts shrink"], correct: 1 },
      { question: "What are countries investing in?", options: ["Nuclear power only", "Renewable energy", "More factories", "Oil production"], correct: 1 }
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
