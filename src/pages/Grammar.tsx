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
        subtitle: "1. Present Simple - I do / He does",
        colorIndex: 0,
        rules: [
          "Used for habits, routines, and general truths",
          "Form: Subject + base verb (add -s/-es for he/she/it)",
          "Example: I go to school every day",
          "Example: She works at a bank",
          "Negative: I don't / He doesn't + base verb",
          "Question: Do you...? / Does he...?",
          "Keywords: always, usually, often, sometimes, never, every day",
        ],
      },
      {
        subtitle: "2. Present Continuous - I am doing",
        colorIndex: 1,
        rules: [
          "Used for actions happening now or temporary situations",
          "Form: am/is/are + verb-ing",
          "Example: I am reading a book right now",
          "Example: She is working in London this month",
          "Negative: I am not / He is not + verb-ing",
          "Question: Are you working? Is she studying?",
          "Keywords: now, right now, at the moment, currently",
        ],
      },
      {
        subtitle: "3. Present Perfect - I have done",
        colorIndex: 2,
        rules: [
          "Used for past actions with present relevance or experiences",
          "Form: have/has + past participle (V3)",
          "Example: I have lived here for 5 years",
          "Example: She has just finished her homework",
          "Negative: I haven't / He hasn't + past participle",
          "Question: Have you ever...? Has she finished?",
          "Keywords: just, already, yet, ever, never, for, since, recently",
        ],
      },
      {
        subtitle: "4. Present Perfect Continuous - I have been doing",
        colorIndex: 3,
        rules: [
          "Used for actions that started in the past and continue to present",
          "Form: have/has + been + verb-ing",
          "Example: I have been waiting for 2 hours",
          "Example: She has been studying English since 2020",
          "Emphasizes duration of an ongoing action",
          "Negative: I haven't been / He hasn't been + verb-ing",
          "Keywords: for, since, all day, how long",
        ],
      },
      {
        subtitle: "5. Past Simple - I did",
        colorIndex: 4,
        rules: [
          "Used for completed actions in the past",
          "Form: Subject + past form (V2)",
          "Regular verbs: add -ed (worked, played)",
          "Irregular verbs: go→went, see→saw, have→had",
          "Example: I visited London last year",
          "Negative: I didn't + base verb",
          "Keywords: yesterday, last week/month/year, ago, in 2020",
        ],
      },
      {
        subtitle: "6. Past Continuous - I was doing",
        colorIndex: 5,
        rules: [
          "Used for actions in progress at a specific past time",
          "Form: was/were + verb-ing",
          "Example: I was watching TV at 8 pm yesterday",
          "Example: They were sleeping when I called",
          "Often used with 'when' or 'while'",
          "Negative: I wasn't / They weren't + verb-ing",
          "Keywords: while, when, at that time, all day yesterday",
        ],
      },
      {
        subtitle: "7. Past Perfect - I had done",
        colorIndex: 0,
        rules: [
          "Used for an action completed before another past action",
          "Form: had + past participle (V3)",
          "Example: I had finished my homework before she arrived",
          "Example: They had already left when we got there",
          "The 'past of the past'",
          "Negative: I hadn't + past participle",
          "Keywords: before, after, by the time, already, just",
        ],
      },
      {
        subtitle: "8. Past Perfect Continuous - I had been doing",
        colorIndex: 1,
        rules: [
          "Used for ongoing actions that happened before another past action",
          "Form: had + been + verb-ing",
          "Example: I had been waiting for 2 hours when she finally came",
          "Example: They had been living there for 10 years before they moved",
          "Emphasizes duration before a past event",
          "Negative: I hadn't been + verb-ing",
          "Keywords: for, since, before, by the time",
        ],
      },
      {
        subtitle: "9. Future Simple - I will do",
        colorIndex: 2,
        rules: [
          "Used for predictions, promises, and spontaneous decisions",
          "Form: will + base verb",
          "Example: I will help you tomorrow",
          "Example: It will rain later",
          "Negative: I won't (will not) + base verb",
          "Question: Will you come? Will it rain?",
          "Keywords: tomorrow, next week, soon, probably",
        ],
      },
      {
        subtitle: "10. Future Continuous - I will be doing",
        colorIndex: 3,
        rules: [
          "Used for actions in progress at a specific future time",
          "Form: will + be + verb-ing",
          "Example: I will be working at 9 pm tomorrow",
          "Example: This time next week, we will be flying to Paris",
          "Negative: I won't be + verb-ing",
          "Question: Will you be working?",
          "Keywords: at this time tomorrow, this time next week",
        ],
      },
      {
        subtitle: "11. Future Perfect - I will have done",
        colorIndex: 4,
        rules: [
          "Used for actions completed before a specific future time",
          "Form: will + have + past participle (V3)",
          "Example: I will have finished the project by Friday",
          "Example: By 2025, she will have graduated",
          "Negative: I won't have + past participle",
          "Question: Will you have finished by then?",
          "Keywords: by, by the time, before, by next year",
        ],
      },
      {
        subtitle: "12. Future Perfect Continuous - I will have been doing",
        colorIndex: 5,
        rules: [
          "Used for ongoing actions up to a specific future time",
          "Form: will + have + been + verb-ing",
          "Example: By December, I will have been working here for 5 years",
          "Example: By next month, she will have been studying English for 2 years",
          "Emphasizes duration of action up to a future point",
          "Negative: I won't have been + verb-ing",
          "Keywords: by, for, by the time",
        ],
      },
      {
        subtitle: "13. Future in the Past Simple - I would do",
        colorIndex: 0,
        rules: [
          "Used to talk about future from a past perspective",
          "Form: would + base verb",
          "Example: He said he would call me later",
          "Example: I knew she would come to the party",
          "Often used in reported speech",
          "Negative: I wouldn't + base verb",
          "Keywords: said, knew, thought, believed",
        ],
      },
      {
        subtitle: "14. Future in the Past Continuous - I would be doing",
        colorIndex: 1,
        rules: [
          "Used for ongoing actions expected from a past perspective",
          "Form: would + be + verb-ing",
          "Example: He said he would be waiting for us at the station",
          "Example: I knew they would be traveling all day",
          "Used in reported speech for future continuous actions",
          "Negative: I wouldn't be + verb-ing",
          "Keywords: said, knew, thought",
        ],
      },
      {
        subtitle: "15. Future in the Past Perfect - I would have done",
        colorIndex: 2,
        rules: [
          "Used for actions expected to be completed from a past perspective",
          "Form: would + have + past participle (V3)",
          "Example: He said he would have finished by Monday",
          "Example: I thought she would have arrived by then",
          "Used in reported speech and conditional sentences",
          "Negative: I wouldn't have + past participle",
          "Keywords: by, before, said, thought",
        ],
      },
      {
        subtitle: "16. Future in the Past Perfect Continuous - I would have been doing",
        colorIndex: 3,
        rules: [
          "Used for ongoing actions expected up to a point from past perspective",
          "Form: would + have + been + verb-ing",
          "Example: He said by June he would have been working there for 10 years",
          "Example: I knew she would have been waiting for hours",
          "Emphasizes expected duration from past perspective",
          "Negative: I wouldn't have been + verb-ing",
          "Keywords: by, for, said, knew, thought",
        ],
      },
    ],
  },
  {
    id: "articles",
    title: "Articles & Essential Grammar",
    icon: FileText,
    iconColor: "text-green-500",
    content: [
      {
        subtitle: "1️⃣ 6 ta muhim zamon (6 Important Tenses)",
        colorIndex: 0,
        rules: [
          "1. Present Simple - I do / He does → Har kunlik odatlar",
          "Example: I go to school every day",
          "2. Present Continuous - I am doing → Hozir bo'layotgan ish",
          "Example: I am reading a book now",
          "3. Past Simple - I did → O'tgan zamonda tugallangan ish",
          "Example: I visited London last year",
          "4. Past Continuous - I was doing → O'tgan zamonda davom etgan ish",
          "Example: I was watching TV at 8 pm",
          "5. Future Simple - I will do → Kelajakda bo'ladigan ish",
          "Example: I will help you tomorrow",
          "6. Present Perfect - I have done → O'tgan lekin hozirga bog'liq",
          "Example: I have lived here for 5 years",
        ],
      },
      {
        subtitle: "2️⃣ a / an / the - Artikllar",
        colorIndex: 1,
        rules: [
          "A - undosh tovush oldidan: a book, a car, a university",
          "AN - unli tovush oldidan: an apple, an hour, an umbrella",
          "THE - ma'lum narsa haqida: the sun, the book you gave me",
          "No article - umumiy ma'noda: I love music, Cats are cute",
          "Example: I saw a cat. The cat was black.",
          "Example: She is an engineer at the hospital.",
          "THE + superlative: the best, the biggest, the most beautiful",
          "THE + unique things: the moon, the earth, the internet",
        ],
      },
      {
        subtitle: "3️⃣ Present Perfect vs Past Simple",
        colorIndex: 2,
        rules: [
          "Present Perfect - hozirga bog'liq yoki tajriba",
          "Example: I have visited Paris (hayotimda)",
          "Example: I have just finished my homework",
          "Past Simple - aniq vaqtda tugallangan",
          "Example: I visited Paris in 2020 (aniq vaqt)",
          "Example: I finished my homework yesterday",
          "Keywords for Present Perfect: just, already, yet, ever, never",
          "Keywords for Past Simple: yesterday, last week, in 2020, ago",
          "Key difference: 'When' = Past Simple, 'How many times' = Present Perfect",
        ],
      },
      {
        subtitle: "4️⃣ in / on / at - Predloglar",
        colorIndex: 3,
        rules: [
          "AT - aniq vaqt: at 5 o'clock, at noon, at night, at the weekend",
          "ON - kunlar: on Monday, on July 4th, on my birthday",
          "IN - oy, yil, fasl: in January, in 2024, in summer, in the morning",
          "AT - aniq joy: at the door, at the bus stop, at home, at work",
          "ON - sirt ustida: on the table, on the wall, on the floor",
          "IN - ichida: in the room, in the box, in the car, in London",
          "Remember: at night BUT in the morning/afternoon/evening",
          "Remember: at the weekend (UK) / on the weekend (US)",
        ],
      },
      {
        subtitle: "5️⃣ Top 50 Words - Eng ko'p ishlatiladigan so'zlar",
        colorIndex: 4,
        rules: [
          "Verbs: be, have, do, say, get, make, go, know, take, see",
          "Verbs: come, think, look, want, give, use, find, tell, work, call",
          "Nouns: time, year, people, way, day, man, thing, woman, life, child",
          "Nouns: world, school, hand, part, place, week, company, system, program",
          "Adjectives: good, new, first, last, long, great, little, own, other, old",
          "Adverbs: just, also, now, only, very, well, then, here, even, back",
          "Pronouns: I, you, he, she, it, we, they, me, him, her",
          "Prepositions: to, of, in, for, on, with, at, by, from, about",
        ],
      },
      {
        subtitle: "6️⃣ Common Mistakes - Ko'p qilinadigan xatolar",
        colorIndex: 5,
        rules: [
          "❌ I am agree → ✅ I agree",
          "❌ He don't like → ✅ He doesn't like",
          "❌ I have 20 years → ✅ I am 20 years old",
          "❌ I am interesting → ✅ I am interested",
          "❌ I went to home → ✅ I went home",
          "❌ He suggested me → ✅ He suggested to me",
          "❌ I'm going to school everyday → ✅ I go to school every day",
          "❌ Informations → ✅ Information (uncountable)",
          "❌ Advices → ✅ Advice (uncountable)",
          "❌ I'm boring → ✅ I'm bored (feelings)",
        ],
      },
      {
        subtitle: "7️⃣ Sentence Structure - Gap tuzilishi",
        colorIndex: 0,
        rules: [
          "Basic order: Subject + Verb + Object (SVO)",
          "Example: I (S) eat (V) breakfast (O)",
          "Adjective before noun: a beautiful house, a red car",
          "Adverb of frequency before main verb: I always study",
          "Question: Auxiliary + Subject + Verb?",
          "Example: Do you like coffee? Is she coming?",
          "Negative: Subject + don't/doesn't/didn't + Verb",
          "Example: I don't like fish. She doesn't work here.",
          "WH-question: WH-word + Auxiliary + Subject + Verb?",
          "Example: Where do you live? What are you doing?",
        ],
      },
      {
        subtitle: "8️⃣ Phrasal Verbs - Murakkab fe'llar",
        colorIndex: 1,
        rules: [
          "LOOK: look for (qidirmoq), look after (qaramoq), look forward to (kutmoq)",
          "GET: get up (turmoq), get on (chiqmoq), get off (tushmoq), get along (kelishmoq)",
          "TAKE: take off (yechmoq/uchmoq), take care of (qaramoq), take up (boshlamoq)",
          "GIVE: give up (tashlamoq), give back (qaytarmoq), give away (bepul bermoq)",
          "TURN: turn on (yoqmoq), turn off (o'chirmoq), turn up (kuchayirmoq)",
          "PUT: put on (kiymoq), put off (kechiktirmoq), put away (joyiga qo'ymoq)",
          "COME: come back (qaytmoq), come in (kirmoq), come up with (topmoq)",
          "GO: go on (davom etmoq), go out (chiqmoq), go through (o'tmoq)",
          "MAKE: make up (yarashmoq), make out (tushunmoq), make up for (to'ldirmoq)",
          "BREAK: break down (buzilmoq), break up (ajralmoq), break into (buzib kirmoq)",
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
        subtitle: "1. Personal Pronouns - Shaxs olmoshlari",
        colorIndex: 0,
        rules: [
          "Subject: I, you, he, she, it, we, they",
          "Object: me, you, him, her, it, us, them",
          "Subject = gap egasi, Object = to'ldiruvchi",
          "Example: I love her. She loves me.",
          "Example: They helped us. We helped them.",
          "Example: He called her. She called him back.",
          "Note: 'You' and 'It' are same in subject and object form",
        ],
      },
      {
        subtitle: "2. Possessive Pronouns - Egalik olmoshlari",
        colorIndex: 1,
        rules: [
          "Adjectives: my, your, his, her, its, our, their",
          "Pronouns: mine, yours, his, hers, ours, theirs",
          "Adjectives come before nouns: This is my book",
          "Pronouns stand alone: This book is mine",
          "Example: Her car is red. The red car is hers.",
          "Example: Their house is big. The big house is theirs.",
          "Note: 'Its' has no apostrophe (it's = it is)",
          "Note: 'His' is same for adjective and pronoun",
        ],
      },
      {
        subtitle: "3. Reflexive Pronouns - Qaytim olmoshlari",
        colorIndex: 2,
        rules: [
          "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves",
          "Used when subject and object are the same person",
          "Example: I hurt myself. (Men o'zimni yaraladim)",
          "Example: She taught herself to play piano.",
          "Example: They enjoyed themselves at the party.",
          "Emphasis: I myself did it. (O'zim qildim)",
          "By + reflexive = alone: He lives by himself.",
          "Common: Help yourself! Enjoy yourselves!",
        ],
      },
      {
        subtitle: "4. Demonstrative Pronouns - Ko'rsatish olmoshlari",
        colorIndex: 3,
        rules: [
          "This (bu) - yaqin, birlik: This is my book.",
          "That (u/ana u) - uzoq, birlik: That is your car.",
          "These (bular) - yaqin, ko'plik: These are my friends.",
          "Those (ular) - uzoq, ko'plik: Those are their houses.",
          "Distance in time: Those were the good days.",
          "Example: This is better than that.",
          "Example: These books are more interesting than those.",
          "Used to introduce: This is my brother, Ali.",
        ],
      },
      {
        subtitle: "5. Relative Pronouns - Nisbiy olmoshlar",
        colorIndex: 4,
        rules: [
          "WHO - odamlar uchun: The man who called you is here.",
          "WHICH - narsalar uchun: The book which I bought is great.",
          "THAT - odam va narsalar: The car that I want is expensive.",
          "WHOSE - egalik: The woman whose bag was stolen.",
          "WHOM - formal, object: The person whom I met.",
          "WHERE - joy: The house where I grew up.",
          "WHEN - vaqt: The day when we met.",
          "Example: She is the teacher who helped me.",
          "Example: This is the movie that I like.",
        ],
      },
      {
        subtitle: "6. Interrogative Pronouns - So'roq olmoshlari",
        colorIndex: 5,
        rules: [
          "WHO - kim: Who is calling? Who are you?",
          "WHOM - kimni/kimga (formal): Whom did you see?",
          "WHOSE - kimning: Whose book is this?",
          "WHAT - nima: What is your name? What happened?",
          "WHICH - qaysi: Which one do you want?",
          "Example: Who told you that? (Kim aytdi?)",
          "Example: What do you think? (Nima deb o'ylaysiz?)",
          "Example: Which color do you prefer? (Qaysi rang?)",
          "Note: What vs Which - What is general, Which is limited choice",
        ],
      },
      {
        subtitle: "7. Indefinite Pronouns - Noaniq olmoshlar",
        colorIndex: 0,
        rules: [
          "SOME-: someone, somebody, something, somewhere (ijobiy)",
          "ANY-: anyone, anybody, anything, anywhere (so'roq/inkor)",
          "NO-: no one, nobody, nothing, nowhere (inkor)",
          "EVERY-: everyone, everybody, everything, everywhere (hammasi)",
          "Example: Someone is at the door. (Kimdir eshikda)",
          "Example: I don't know anybody here. (Hech kimni tanimayman)",
          "Example: Nothing is impossible. (Hech narsa imkonsiz emas)",
          "Example: Everybody loves pizza. (Hamma pizzani yaxshi ko'radi)",
          "Also: all, both, each, either, neither, one, many, few, some, any",
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
        subtitle: "1. Prepositions of Time - Vaqt predloglari",
        colorIndex: 0,
        rules: [
          "AT - aniq vaqt: at 5 o'clock, at noon, at midnight, at night",
          "AT - bayramlar: at Christmas, at Easter, at the weekend (UK)",
          "ON - kunlar: on Monday, on Friday, on weekdays, on weekends (US)",
          "ON - sanalar: on July 4th, on my birthday, on New Year's Day",
          "IN - oylar: in January, in March, in December",
          "IN - yillar: in 2024, in 1990, in the 21st century",
          "IN - fasllar: in summer, in winter, in spring, in autumn/fall",
          "IN - kunning qismi: in the morning, in the afternoon, in the evening",
          "⚠️ Istisnolar: at night (NOT in the night), at noon, at midnight",
          "FOR - davomiylik: for 2 hours, for a week, for 10 years",
          "SINCE - boshlanish nuqtasi: since Monday, since 2020, since I was young",
          "DURING - davomida: during the meeting, during summer, during the movie",
          "BEFORE - oldin: before lunch, before 5 pm, before the exam",
          "AFTER - keyin: after work, after dinner, after the meeting",
          "BY - gacha: by Monday (dushanba kunigacha), by 5 pm, by next week",
          "UNTIL/TILL - gacha: until Friday, till 10 pm, until tomorrow",
          "FROM...TO - dan...gacha: from Monday to Friday, from 9 to 5",
          "WITHIN - ichida: within an hour, within 2 days, within a week",
        ],
      },
      {
        subtitle: "2. Prepositions of Place - Joy predloglari",
        colorIndex: 1,
        rules: [
          "IN - ichida (yopiq joy): in the room, in the box, in the car",
          "IN - shahar/mamlakat: in London, in Uzbekistan, in Asia",
          "IN - suv: in the water, in the sea, in the pool",
          "ON - ustida (sirt): on the table, on the wall, on the floor",
          "ON - transport: on the bus, on the train, on the plane (katta transport)",
          "ON - qavat: on the first floor, on the second floor",
          "AT - aniq nuqta: at the door, at the bus stop, at the corner",
          "AT - manzil: at home, at work, at school, at university",
          "AT - tadbir: at the party, at the concert, at the meeting",
          "UNDER - ostida: under the table, under the bridge, under the bed",
          "ABOVE - tepasida (tegmagan): above the clouds, above the door",
          "OVER - ustida (yopgan): over the city, a bridge over the river",
          "BELOW - pastida: below sea level, below the surface",
          "BEHIND - orqasida: behind the building, behind the door",
          "IN FRONT OF - oldida: in front of the house, in front of me",
          "BETWEEN - orasida (2 narsa): between the chairs, between us",
          "AMONG - orasida (ko'p): among the trees, among friends",
          "NEXT TO / BESIDE - yonida: next to the bank, beside the window",
          "NEAR - yaqinida: near the station, near my house",
          "OPPOSITE - qarama-qarshi: opposite the school, opposite me",
          "INSIDE - ichkarida: inside the box, inside the building",
          "OUTSIDE - tashqarida: outside the house, outside the city",
        ],
      },
      {
        subtitle: "3. Prepositions of Movement - Harakat predloglari",
        colorIndex: 2,
        rules: [
          "TO - ga (yo'nalish): go to school, walk to the park, travel to London",
          "INTO - ichiga (kirish): go into the room, jump into the water",
          "OUT OF - dan (chiqish): get out of the car, come out of the house",
          "ONTO - ustiga (chiqish): climb onto the roof, jump onto the table",
          "OFF - dan (tushish): get off the bus, fall off the chair",
          "THROUGH - orqali (ichidan): walk through the tunnel, go through the door",
          "ACROSS - kesib (sirtdan): swim across the river, walk across the street",
          "OVER - oshib: jump over the fence, fly over the mountains",
          "UNDER - ostidan: crawl under the table, drive under the bridge",
          "ALONG - bo'ylab: walk along the street, drive along the river",
          "AROUND - atrofida: walk around the park, travel around the world",
          "PAST - yonidan o'tib: walk past the shop, drive past the school",
          "TOWARDS - tomon: walk towards the door, run towards me",
          "AWAY FROM - dan uzoqqa: run away from danger, move away from here",
          "UP - yuqoriga: climb up the stairs, go up the hill",
          "DOWN - pastga: run down the stairs, go down the street",
          "FROM - dan: come from Tashkent, travel from London to Paris",
        ],
      },
      {
        subtitle: "4. Prepositions with Adjectives - Sifat bilan predloglar",
        colorIndex: 3,
        rules: [
          "AFRAID OF - dan qo'rqmoq: afraid of spiders, afraid of the dark",
          "ANGRY WITH/AT - ga g'azablanmoq: angry with my brother, angry at the situation",
          "BAD AT - da yomon: bad at math, bad at cooking",
          "GOOD AT - da yaxshi: good at English, good at sports",
          "FAMOUS FOR - bilan mashhur: famous for its food, famous for beauty",
          "FOND OF - ni yaxshi ko'rmoq: fond of music, fond of reading",
          "FULL OF - ga to'la: full of water, full of ideas",
          "INTERESTED IN - ga qiziqqan: interested in history, interested in art",
          "JEALOUS OF - ga hasad qilmoq: jealous of her success",
          "KIND TO - ga mehribon: kind to animals, kind to everyone",
          "MARRIED TO - ga turmushga chiqqan: married to John",
          "PROUD OF - dan faxrlanmoq: proud of my children, proud of my work",
          "READY FOR - ga tayyor: ready for the exam, ready for work",
          "RESPONSIBLE FOR - uchun javobgar: responsible for this project",
          "SCARED OF - dan qo'rqmoq: scared of heights, scared of dogs",
          "SIMILAR TO - ga o'xshash: similar to my brother, similar to yours",
          "SORRY FOR/ABOUT - uchun uzr: sorry for the delay, sorry about that",
          "TIRED OF - dan charchagan: tired of waiting, tired of work",
          "WORRIED ABOUT - haqida tashvishlanmoq: worried about the exam",
        ],
      },
      {
        subtitle: "5. Prepositions with Verbs - Fe'l bilan predloglar",
        colorIndex: 4,
        rules: [
          "AGREE WITH - ga rozi bo'lmoq: I agree with you",
          "APOLOGIZE FOR - uchun uzr so'ramoq: apologize for being late",
          "APPLY FOR - ga ariza bermoq: apply for a job, apply for visa",
          "ASK FOR - so'ramoq: ask for help, ask for advice",
          "BELIEVE IN - ga ishonmoq: believe in God, believe in yourself",
          "BELONG TO - ga tegishli: This belongs to me",
          "CARE ABOUT - haqida qayg'urmoq: care about the environment",
          "CONSIST OF - dan iborat: consists of 5 parts",
          "DEPEND ON - ga bog'liq: depends on the weather",
          "DREAM OF/ABOUT - haqida orzu qilmoq: dream of success",
          "INSIST ON - talab qilmoq: insist on paying",
          "LISTEN TO - ni tinglamoq: listen to music, listen to me",
          "LOOK AT - ga qaramoq: look at the picture, look at me",
          "LOOK FOR - qidirmoq: look for my keys, look for a job",
          "RELY ON - ga tayanmoq: rely on my friends",
          "SUCCEED IN - da muvaffaq bo'lmoq: succeed in business",
          "SUFFER FROM - dan azob chekmoq: suffer from headaches",
          "THINK ABOUT/OF - haqida o'ylamoq: think about the future",
          "WAIT FOR - ni kutmoq: wait for the bus, wait for me",
          "WARN ABOUT - haqida ogohlantirmoq: warn about the danger",
        ],
      },
      {
        subtitle: "6. Prepositions with Nouns - Ot bilan predloglar",
        colorIndex: 5,
        rules: [
          "BY + transport: by car, by bus, by train, by plane, by bike",
          "⚠️ Istisno: on foot (piyoda)",
          "IN + til: in English, in Uzbek, in Russian",
          "IN + rang: in red, in blue (kiyim uchun)",
          "IN + holat: in love, in danger, in trouble, in a hurry",
          "ON + qurilma: on TV, on the radio, on the phone, on the internet",
          "ON + ta'til: on holiday, on vacation, on a trip",
          "ON + maqsad: on purpose (atayin), on business (ish bilan)",
          "AT + tezlik: at 100 km/h, at high speed, at full speed",
          "AT + narx: at $50, at a low price, at a discount",
          "FOR + maqsad: for sale, for rent, for breakfast",
          "FOR + sabab: for this reason, for example",
          "BY + usul: by hand, by mistake, by accident, by chance",
          "OUT OF + holat: out of order, out of date, out of stock",
          "WITH + asbob: with a knife, with a pen, with my hands",
          "WITHOUT + narsa: without help, without money, without permission",
        ],
      },
      {
        subtitle: "7. IN vs ON vs AT - Farqlari",
        colorIndex: 0,
        rules: [
          "📍 JOY UCHUN:",
          "IN = katta joy, ichida: in London, in the room, in a car",
          "ON = sirt, yo'l: on the table, on the street, on the bus",
          "AT = aniq nuqta: at the door, at home, at school",
          "🕐 VAQT UCHUN:",
          "IN = uzoq vaqt: in January, in 2024, in the morning",
          "ON = kunlar: on Monday, on July 4th, on my birthday",
          "AT = aniq vaqt: at 5 o'clock, at noon, at night",
          "📝 MUHIM FARQLAR:",
          "in the street (UK) vs on the street (US)",
          "in the corner (xona ichida) vs at the corner (ko'cha burchagi)",
          "on time (vaqtida) vs in time (kech qolmasdan)",
          "at the end (oxirida) vs in the end (nihoyat)",
          "arrive IN (shahar) vs arrive AT (joy): arrive in London, arrive at the airport",
        ],
      },
      {
        subtitle: "8. TO vs FOR - Farqlari",
        colorIndex: 1,
        rules: [
          "TO - yo'nalish, qabul qiluvchi:",
          "Go to school, Give it to me, Talk to her",
          "Send a letter to my friend, Listen to music",
          "I'm going to London, She said hello to me",
          "FOR - maqsad, sabab, foyda:",
          "This is for you (bu sen uchun)",
          "Wait for me, Look for a job, Apply for a visa",
          "Thank you for helping, Sorry for being late",
          "It's good for your health, What's this for?",
          "📝 SOLISHTIRUV:",
          "I gave the book TO him (unga berdim)",
          "I bought the book FOR him (u uchun sotib oldim)",
          "I explained it TO her (unga tushuntirdim)",
          "I did it FOR her (u uchun qildim)",
        ],
      },
      {
        subtitle: "9. BY vs WITH vs WITHOUT",
        colorIndex: 2,
        rules: [
          "BY - transport yoki usul:",
          "Travel by car/bus/train/plane",
          "Pay by card, by cash, by check",
          "Made by hand, done by accident",
          "Send by email, contact by phone",
          "WITH - asbob yoki birga:",
          "Cut with a knife, write with a pen",
          "Come with me, live with parents",
          "Coffee with milk, bread with butter",
          "I'm happy with the result",
          "WITHOUT - siz, holda:",
          "Coffee without sugar",
          "Go without me, leave without saying goodbye",
          "Without doubt, without permission",
          "He left without a word",
        ],
      },
      {
        subtitle: "10. Common Preposition Mistakes - Ko'p xatolar",
        colorIndex: 3,
        rules: [
          "❌ I'm agree with you → ✅ I agree with you",
          "❌ Listen me → ✅ Listen to me",
          "❌ I went to home → ✅ I went home (no preposition!)",
          "❌ He married with her → ✅ He married her / He got married to her",
          "❌ I arrived to London → ✅ I arrived in London",
          "❌ Enter into the room → ✅ Enter the room (no preposition!)",
          "❌ Discuss about the topic → ✅ Discuss the topic",
          "❌ I'm waiting you → ✅ I'm waiting for you",
          "❌ Answer to me → ✅ Answer me",
          "❌ Explain me → ✅ Explain to me",
          "❌ In the morning, in the night → ✅ In the morning, at night",
          "❌ On Monday morning → ✅ On Monday morning ✓ (bu to'g'ri!)",
          "❌ I depend of you → ✅ I depend on you",
          "❌ Different of → ✅ Different from / Different than (US)",
        ],
      },
      {
        subtitle: "11. Compound Prepositions - Murakkab predloglar",
        colorIndex: 4,
        rules: [
          "BECAUSE OF - tufayli: because of the rain, because of you",
          "INSTEAD OF - o'rniga: instead of coffee, instead of going",
          "IN SPITE OF / DESPITE - qaramay: in spite of the weather",
          "ACCORDING TO - bo'yicha: according to the rules, according to him",
          "DUE TO - tufayli: due to the traffic, due to illness",
          "THANKS TO - tufayli (ijobiy): thanks to your help",
          "IN ADDITION TO - qo'shimcha: in addition to English",
          "APART FROM - tashqari: apart from me, apart from that",
          "AS FOR - haqida: as for me, I prefer tea",
          "AS WELL AS - shuningdek: as well as English, he speaks French",
          "IN FRONT OF - oldida: in front of the house",
          "IN THE MIDDLE OF - o'rtasida: in the middle of the room",
          "ON TOP OF - tepasida: on top of the mountain",
          "AT THE END OF - oxirida: at the end of the street",
          "IN CASE OF - holatida: in case of emergency",
        ],
      },
      {
        subtitle: "12. Prepositions in Questions - So'roq gaplarda",
        colorIndex: 5,
        rules: [
          "WHERE...FROM - qayerdan: Where are you from?",
          "WHERE...TO - qayerga: Where are you going to?",
          "WHAT...FOR - nima uchun: What is this for?",
          "WHO...WITH - kim bilan: Who do you live with?",
          "WHAT...ABOUT - nima haqida: What are you talking about?",
          "WHAT...OF - haqida nima: What do you think of it?",
          "WHO...TO - kimga: Who did you give it to?",
          "Formal yozuvda predlog gap oxiriga qo'yilmaydi:",
          "Formal: To whom did you give it?",
          "Informal: Who did you give it to?",
          "Formal: About what are you talking?",
          "Informal: What are you talking about?",
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
