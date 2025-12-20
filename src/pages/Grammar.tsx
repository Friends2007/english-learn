import { useState } from "react";
import { Header } from "@/components/Header";
import { BookOpen, ChevronDown, TableProperties, FileText, Zap, MessageSquare, User, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Colors for distinct styling
const topicColors = [
  { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-600 dark:text-blue-400", accent: "bg-blue-500", ring: "ring-blue-500/20" },
  { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-600 dark:text-emerald-400", accent: "bg-emerald-500", ring: "ring-emerald-500/20" },
  { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-600 dark:text-amber-400", accent: "bg-amber-500", ring: "ring-amber-500/20" },
  { bg: "bg-rose-500/10", border: "border-rose-500/30", text: "text-rose-600 dark:text-rose-400", accent: "bg-rose-500", ring: "ring-rose-500/20" },
  { bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-600 dark:text-violet-400", accent: "bg-violet-500", ring: "ring-violet-500/20" },
  { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-600 dark:text-cyan-400", accent: "bg-cyan-500", ring: "ring-cyan-500/20" },
];

const grammarTopics: Array<{
  id: string;
  title: string;
  icon: LucideIcon;
  iconColor: string;
  content: Array<{ subtitle: string; rules: string[]; colorIndex?: number }>;
}> = [
  {
    id: "tenses",
    title: "Verb Tenses",
    icon: Zap,
    iconColor: "text-orange-500",
    content: [
      {
        subtitle: "Present Simple - I do / He does",
        colorIndex: 0,
        rules: [
          "Used for habits, routines, and general truths",
          "Add -s/-es for he/she/it: He works, She watches",
          "Example: I go to school every day",
          "Example: The sun rises in the east",
          "Negative: I don't / He doesn't + base verb",
          "Question: Do you...? / Does he...?",
        ],
      },
      {
        subtitle: "Present Continuous - I am doing",
        colorIndex: 1,
        rules: [
          "Used for actions happening now or temporary situations",
          "Form: am/is/are + verb-ing",
          "Example: I am reading a book right now",
          "Example: She is working in London this month",
          "Negative: I am not / He is not + verb-ing",
          "Question: Are you working? Is she studying?",
        ],
      },
      {
        subtitle: "Past Simple - I did",
        colorIndex: 2,
        rules: [
          "Used for completed actions in the past",
          "Regular verbs: add -ed (worked, played)",
          "Irregular verbs: go→went, see→saw, have→had",
          "Example: I visited London last year",
          "Negative: I didn't + base verb",
          "Question: Did you go? Did she see?",
        ],
      },
      {
        subtitle: "Present Perfect - I have done",
        colorIndex: 3,
        rules: [
          "Used for past actions with present relevance",
          "Form: have/has + past participle",
          "Example: I have lived here for 5 years",
          "Example: She has just finished her homework",
          "Keywords: just, already, yet, ever, never, for, since",
          "Negative: I haven't / He hasn't + past participle",
        ],
      },
      {
        subtitle: "Future Simple - I will do",
        colorIndex: 4,
        rules: [
          "Used for predictions, promises, and spontaneous decisions",
          "Form: will + base verb",
          "Example: I will help you tomorrow",
          "Example: It will rain later",
          "Negative: I won't (will not) + base verb",
          "Alternative: going to + base verb for plans",
        ],
      },
    ],
  },
  {
    id: "articles",
    title: "Articles (A, An, The)",
    icon: FileText,
    iconColor: "text-green-500",
    content: [
      {
        subtitle: "Indefinite Articles - A / An",
        colorIndex: 0,
        rules: [
          "Use 'a' before consonant sounds: a book, a university",
          "Use 'an' before vowel sounds: an apple, an hour",
          "Used when mentioning something for the first time",
          "Used with singular countable nouns",
          "Example: I saw a cat in the garden",
          "Example: She is an engineer",
        ],
      },
      {
        subtitle: "Definite Article - The",
        colorIndex: 1,
        rules: [
          "Used when both speaker and listener know what is referred to",
          "Used with unique things: the sun, the moon, the earth",
          "Used with superlatives: the best, the biggest",
          "Used with ordinal numbers: the first, the second",
          "Example: The book you gave me is interesting",
          "Example: The Nile is the longest river in Africa",
        ],
      },
      {
        subtitle: "Zero Article (No Article)",
        colorIndex: 2,
        rules: [
          "With plural countable nouns (general): Cats are cute",
          "With uncountable nouns (general): Water is essential",
          "With proper nouns: John, London, Monday",
          "With meals, languages, sports: breakfast, English, football",
          "Example: I love music (in general)",
          "Example: She speaks French fluently",
        ],
      },
    ],
  },
  {
    id: "pronouns",
    title: "Pronouns",
    icon: User,
    iconColor: "text-pink-500",
    content: [
      {
        subtitle: "Subject Pronouns",
        colorIndex: 0,
        rules: [
          "I, you, he, she, it, we, they",
          "Used as the subject of a sentence",
          "Example: I am a student",
          "Example: They are playing football",
          "Example: She works at a hospital",
        ],
      },
      {
        subtitle: "Object Pronouns",
        colorIndex: 1,
        rules: [
          "me, you, him, her, it, us, them",
          "Used as the object of a verb or preposition",
          "Example: Give the book to me",
          "Example: I saw them at the park",
          "Example: She called him yesterday",
        ],
      },
      {
        subtitle: "Possessive Adjectives & Pronouns",
        colorIndex: 2,
        rules: [
          "Adjectives: my, your, his, her, its, our, their",
          "Pronouns: mine, yours, his, hers, ours, theirs",
          "Example: This is my book / This book is mine",
          "Example: Their house is big / The big house is theirs",
          "Adjectives come before nouns; pronouns stand alone",
        ],
      },
      {
        subtitle: "Reflexive Pronouns",
        colorIndex: 3,
        rules: [
          "myself, yourself, himself, herself, itself, ourselves, themselves",
          "Used when subject and object are the same",
          "Example: I hurt myself",
          "Example: She taught herself to play piano",
          "Used for emphasis: I did it myself",
        ],
      },
    ],
  },
  {
    id: "prepositions",
    title: "Prepositions",
    icon: TableProperties,
    iconColor: "text-blue-500",
    content: [
      {
        subtitle: "Prepositions of Time",
        colorIndex: 0,
        rules: [
          "AT: specific times - at 5 o'clock, at noon, at night",
          "ON: days and dates - on Monday, on July 4th",
          "IN: months, years, seasons - in January, in 2024, in summer",
          "FOR: duration - for two hours, for a week",
          "SINCE: starting point - since Monday, since 2020",
          "DURING: within a period - during the meeting",
        ],
      },
      {
        subtitle: "Prepositions of Place",
        colorIndex: 1,
        rules: [
          "IN: enclosed spaces - in the room, in the box, in the car",
          "ON: surfaces - on the table, on the wall, on the floor",
          "AT: specific points - at the door, at the bus stop, at home",
          "UNDER: below - under the table, under the bridge",
          "BETWEEN: in the middle of two - between the chairs",
          "NEXT TO / BESIDE: at the side - next to the bank",
        ],
      },
      {
        subtitle: "Prepositions of Movement",
        colorIndex: 2,
        rules: [
          "TO: destination - go to school, walk to the park",
          "INTO: entering - go into the room, jump into the water",
          "OUT OF: exiting - get out of the car, come out of the house",
          "THROUGH: passing inside - walk through the tunnel",
          "ACROSS: from one side to another - swim across the river",
          "ALONG: following a path - walk along the street",
        ],
      },
    ],
  },
  {
    id: "sentences",
    title: "Sentence Structure",
    icon: MessageSquare,
    iconColor: "text-purple-500",
    content: [
      {
        subtitle: "Basic Word Order",
        colorIndex: 4,
        rules: [
          "English follows Subject + Verb + Object (SVO) order",
          "Example: I (S) eat (V) breakfast (O)",
          "Example: She (S) reads (V) books (O)",
          "Adjectives come before nouns: a big house, a red car",
          "Adverbs of frequency before main verb: I always work hard",
        ],
      },
      {
        subtitle: "Question Formation",
        colorIndex: 5,
        rules: [
          "Yes/No questions: Auxiliary + Subject + Verb",
          "Example: Do you like coffee? Is she coming?",
          "WH-questions: WH-word + Auxiliary + Subject + Verb",
          "Example: Where do you live? What are you doing?",
          "Question words: What, Where, When, Why, Who, How",
        ],
      },
      {
        subtitle: "Negative Sentences",
        colorIndex: 0,
        rules: [
          "Present Simple: Subject + don't/doesn't + base verb",
          "Example: I don't like fish. He doesn't work here.",
          "Past Simple: Subject + didn't + base verb",
          "Example: I didn't go to school yesterday",
          "Be verb: Subject + am not/isn't/aren't",
          "Example: She isn't happy. They aren't ready.",
        ],
      },
      {
        subtitle: "Conjunctions",
        colorIndex: 1,
        rules: [
          "AND: adds information - I have a cat and a dog",
          "BUT: shows contrast - I'm tired but I'll help you",
          "OR: shows choice - Do you want tea or coffee?",
          "SO: shows result - It was raining, so I took an umbrella",
          "BECAUSE: shows reason - I stayed home because I was sick",
          "ALTHOUGH: shows contrast - Although it was cold, we went out",
        ],
      },
    ],
  },
];


const Grammar = () => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Map<string, Set<number>>>(new Map());

  const toggleSection = (topicId: string, index: number) => {
    setExpandedSections(prev => {
      const newMap = new Map(prev);
      const currentSet = newMap.get(topicId) || new Set();
      const newSet = new Set(currentSet);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      newMap.set(topicId, newSet);
      return newMap;
    });
  };

  const isSectionExpanded = (topicId: string, index: number) => {
    return expandedSections.get(topicId)?.has(index) || false;
  };

  return (
    <div className="min-h-screen bg-background gradient-navy">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12">
        <div className="absolute inset-0 animated-gradient opacity-30" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Soft gradient blobs */}
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-green-500/20 dark:bg-green-500/15 blur-[80px] animate-pulse" />
          <div className="absolute right-0 top-10 h-48 w-48 rounded-full bg-emerald-500/15 dark:bg-emerald-500/10 blur-[60px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute left-1/4 bottom-0 h-56 w-56 rounded-full bg-green-500/10 dark:bg-green-500/10 blur-[80px]" />
          
          {/* Large decorative labels - very faint */}
          <div className="absolute left-[5%] top-[10%] text-7xl md:text-8xl font-black text-green-400/[0.08] dark:text-green-400/[0.06] select-none">A</div>
          <div className="absolute right-[8%] top-[5%] text-6xl md:text-7xl font-black text-emerald-500/[0.07] dark:text-emerald-500/[0.05] select-none">The</div>
          <div className="absolute left-[15%] bottom-[15%] text-6xl md:text-7xl font-black text-green-400/[0.08] dark:text-green-400/[0.06] select-none">Is</div>
          <div className="absolute right-[12%] bottom-[20%] text-7xl md:text-8xl font-black text-emerald-500/[0.07] dark:text-emerald-500/[0.05] select-none">Do</div>
          <div className="absolute left-[40%] top-[8%] text-5xl md:text-6xl font-black text-green-400/[0.08] dark:text-green-400/[0.06] select-none">Will</div>
          <div className="absolute right-[35%] bottom-[10%] text-5xl md:text-6xl font-black text-emerald-500/[0.07] dark:text-emerald-500/[0.06] select-none">Have</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 px-4 py-2 text-sm font-medium text-primary shadow-lg animate-fade-in">
              <BookOpen className="h-4 w-4" />
              5 Topics • 20+ Rules
            </div>
            
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl animate-fade-in" style={{ animationDelay: "100ms" }}>
              Grammar
            </h1>
            
            <p className="mb-6 text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              Learn English grammar basics - from tenses to sentence structure
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-2 rounded-xl glass-section px-4 py-2">
                <span className="text-2xl">📋</span>
                <div className="text-left">
                  <p className="text-lg font-bold text-foreground">5</p>
                  <p className="text-xs text-muted-foreground">Topics</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl glass-section px-4 py-2">
                <span className="text-2xl">📚</span>
                <div className="text-left">
                  <p className="text-lg font-bold text-foreground">18</p>
                  <p className="text-xs text-muted-foreground">Sections</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl glass-section px-4 py-2">
                <span className="text-2xl">🎯</span>
                <div className="text-left">
                  <p className="text-lg font-bold text-foreground">100+</p>
                  <p className="text-xs text-muted-foreground">Rules</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Grammar Topics */}
        <div className="space-y-4">
          {grammarTopics.map((topic, index) => (
            <div
              key={topic.id}
              className={cn(
                "rounded-2xl glass-section overflow-hidden transition-all duration-500 animate-fade-in group",
                expandedTopic === topic.id 
                  ? "shadow-glow ring-2 ring-primary/30 scale-[1.01]" 
                  : "hover:shadow-lg hover:scale-[1.005] hover:ring-1 hover:ring-primary/10"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                className={cn(
                  "flex w-full items-center justify-between p-6 text-left transition-all duration-300",
                  expandedTopic === topic.id 
                    ? "bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" 
                    : "hover:bg-white/5 dark:hover:bg-white/5"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-300",
                    expandedTopic === topic.id 
                      ? "bg-primary/20 scale-110 shadow-md" 
                      : "bg-muted/50 group-hover:bg-muted group-hover:scale-105",
                    topic.iconColor
                  )}>
                    <topic.icon className={cn(
                      "h-6 w-6 transition-transform duration-300",
                      expandedTopic === topic.id && "animate-pulse"
                    )} />
                  </div>
                  <div>
                    <h3 className={cn(
                      "text-xl font-semibold transition-colors duration-300",
                      expandedTopic === topic.id ? "text-primary" : "text-foreground group-hover:text-primary/80"
                    )}>{topic.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {topic.content.length} {topic.content.length === 1 ? "section" : "sections"}
                    </p>
                  </div>
                </div>
                <div className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  expandedTopic === topic.id 
                    ? "bg-primary/20 rotate-180" 
                    : "bg-muted/50 group-hover:bg-muted"
                )}>
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </div>
              </button>
              
              <div className={cn(
                "grid transition-all duration-500 ease-in-out",
                expandedTopic === topic.id 
                  ? "grid-rows-[1fr] opacity-100" 
                  : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <div className="border-t border-border px-6 pb-6 bg-gradient-to-b from-primary/5 to-transparent">
                    <div className="grid gap-3 mt-6">
                      {topic.content.map((section, idx) => {
                        const colors = topicColors[section.colorIndex ?? idx % topicColors.length];
                        const isExpanded = isSectionExpanded(topic.id, idx);
                        return (
                          <div 
                            key={idx} 
                            className={cn(
                              "rounded-2xl overflow-hidden transition-all duration-500 animate-fade-in",
                              colors.border, "border-2", colors.ring, "ring-2",
                              isExpanded ? "shadow-xl scale-[1.01]" : "hover:shadow-lg hover:scale-[1.005]"
                            )}
                            style={{ animationDelay: `${idx * 80}ms` }}
                          >
                            <button
                              onClick={() => toggleSection(topic.id, idx)}
                              className={cn(
                                "w-full flex items-center justify-between p-4 transition-all duration-300",
                                isExpanded ? colors.bg : "bg-card hover:bg-muted/30"
                              )}
                            >
                              <div className="flex items-center gap-3">
                                <div className={cn(
                                  "w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-all duration-300",
                                  colors.accent,
                                  isExpanded && "scale-110 shadow-lg"
                                )}>
                                  {idx + 1}
                                </div>
                                <h4 className={cn(
                                  "font-bold text-base transition-all duration-300",
                                  isExpanded ? colors.text : "text-foreground"
                                )}>
                                  {section.subtitle}
                                </h4>
                              </div>
                              <div className={cn(
                                "p-2 rounded-full transition-all duration-500",
                                isExpanded ? `${colors.bg} rotate-180` : "bg-muted/50"
                              )}>
                                <ChevronDown className={cn(
                                  "h-5 w-5 transition-colors duration-300",
                                  isExpanded ? colors.text : "text-muted-foreground"
                                )} />
                              </div>
                            </button>
                            
                            <div className={cn(
                              "grid transition-all duration-500 ease-in-out",
                              isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            )}>
                              <div className="overflow-hidden">
                                <div className={cn("p-4 pt-0", colors.bg)}>
                                  <ul className="space-y-2">
                                    {section.rules.map((rule, ruleIdx) => (
                                      <li
                                        key={ruleIdx}
                                        className={cn(
                                          "flex items-start gap-2 text-sm text-foreground/90",
                                          "bg-background/60 backdrop-blur-sm rounded-xl p-3 transition-all duration-300",
                                          "hover:bg-background/80 hover:shadow-sm hover:translate-x-1",
                                          isExpanded && "animate-fade-in"
                                        )}
                                        style={{ animationDelay: `${ruleIdx * 60}ms` }}
                                      >
                                        <span className={cn("mt-0.5 transition-transform", colors.text, isExpanded && "animate-pulse")}>
                                          •
                                        </span>
                                        <span className="leading-relaxed">{rule}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Grammar;
