export interface ReadingQuestion {
  question: string;
  questionUz: string;
  options: string[];
  correctAnswer: number;
}

export interface ReadingStory {
  id: string;
  title: string;
  titleUz: string;
  level: "B2";
  category: string;
  readingTime: number;
  content: string;
  contentUz: string;
  questions: ReadingQuestion[];
}

export const readingStories: ReadingStory[] = [
  {
    id: "1",
    title: "The Future of Renewable Energy",
    titleUz: "Qayta tiklanuvchi energiya kelajagi",
    level: "B2",
    category: "Technology",
    readingTime: 5,
    content: `The global transition to renewable energy sources has accelerated dramatically over the past decade. Solar and wind power have become increasingly cost-effective, making them competitive with traditional fossil fuels. Many countries have set ambitious targets to achieve carbon neutrality by 2050, driving significant investments in clean energy infrastructure.

One of the most promising developments is the advancement of battery storage technology. This innovation addresses one of the main challenges of renewable energy: its intermittent nature. When the sun doesn't shine or the wind doesn't blow, stored energy can be released to meet demand. Companies like Tesla and numerous startups are working on more efficient and affordable battery solutions.

However, the transition is not without obstacles. Many developing nations still rely heavily on coal and oil for their energy needs. The cost of infrastructure upgrades and the need for skilled workers in the renewable sector present significant challenges. Additionally, some communities dependent on fossil fuel industries are concerned about job losses.

Despite these challenges, experts remain optimistic. The falling costs of renewable technologies, combined with increasing public awareness about climate change, are creating unstoppable momentum. The question is no longer whether we will transition to clean energy, but how quickly we can make it happen.`,
    contentUz: `Qayta tiklanuvchi energiya manbalariga global o'tish so'nggi o'n yilda keskin tezlashdi. Quyosh va shamol energiyasi tobora arzonlashib, an'anaviy yoqilg'i turlariga raqobatbardosh bo'lib bormoqda. Ko'plab davlatlar 2050 yilga kelib uglerod neytralligiga erishish maqsadida toza energiya infratuzilmasiga katta investitsiyalar kiritmoqda.

Eng istiqbolli rivojlanishlardan biri batareya saqlash texnologiyasining taraqqiyotidir. Bu innovatsiya qayta tiklanuvchi energiyaning asosiy muammolaridan biri - uning uzluksiz emasligini hal qiladi. Quyosh chiqmagan yoki shamol esmaganda, saqlangan energiya talabni qondirish uchun chiqarilishi mumkin. Tesla va ko'plab startaplar yanada samarali va arzon batareya yechimlarini ishlab chiqmoqda.

Biroq, o'tish to'siqlarsiz emas. Ko'plab rivojlanayotgan davlatlar hali ham energiya ehtiyojlari uchun ko'mir va neftga tayanadi. Infratuzilmani yangilash xarajatlari va qayta tiklanuvchi sektorda malakali ishchilar zarurati muhim qiyinchiliklarni keltirib chiqaradi. Bundan tashqari, yoqilg'i sanoatiga bog'liq ba'zi jamoalar ish o'rinlarini yo'qotishdan xavotirda.

Ushbu qiyinchiliklarga qaramay, mutaxassislar optimistik bo'lib qolmoqda. Qayta tiklanuvchi texnologiyalar narxining pasayishi, iqlim o'zgarishi haqida ommaviy xabardorlikning oshishi bilan birgalikda to'xtatib bo'lmaydigan turtki yaratmoqda. Savol endi toza energiyaga o'tamizmi emas, balki buni qanchalik tez amalga oshira olamiz.`,
    questions: [
      {
        question: "What is one of the main challenges of renewable energy mentioned in the text?",
        questionUz: "Matnda qayta tiklanuvchi energiyaning qaysi asosiy muammosi tilga olingan?",
        options: [
          "High installation costs",
          "Its intermittent nature",
          "Lack of government support",
          "Limited availability"
        ],
        correctAnswer: 1
      },
      {
        question: "According to the text, what is driving investments in clean energy?",
        questionUz: "Matnga ko'ra, toza energiyaga investitsiyalarni nima rag'batlantirmoqda?",
        options: [
          "International pressure",
          "Falling oil prices",
          "Countries' carbon neutrality targets",
          "Consumer demand"
        ],
        correctAnswer: 2
      },
      {
        question: "What concern do fossil fuel-dependent communities have?",
        questionUz: "Yoqilg'iga bog'liq jamoalar qanday xavotirda?",
        options: [
          "Higher energy prices",
          "Environmental damage",
          "Job losses",
          "Health issues"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "2",
    title: "The Psychology of Decision Making",
    titleUz: "Qaror qabul qilish psixologiyasi",
    level: "B2",
    category: "Psychology",
    readingTime: 6,
    content: `Every day, we make thousands of decisions, from trivial choices like what to eat for breakfast to life-changing ones like which career path to pursue. Understanding how we make these decisions has fascinated psychologists for decades, leading to insights that have practical applications in business, healthcare, and public policy.

One of the most influential theories in decision-making psychology is Daniel Kahneman's dual-process theory. According to this framework, our thinking operates in two distinct modes: System 1, which is fast, automatic, and intuitive; and System 2, which is slow, deliberate, and analytical. Most of our daily decisions rely on System 1, which works efficiently but can be prone to cognitive biases.

These biases can significantly impact our choices. For instance, the "anchoring effect" causes us to rely too heavily on the first piece of information we receive. If a salesperson shows you an expensive item first, subsequent items seem more reasonably priced by comparison. Similarly, "confirmation bias" leads us to favor information that confirms our existing beliefs while dismissing contradictory evidence.

Understanding these psychological tendencies can help us make better decisions. By being aware of our biases, we can consciously engage System 2 thinking when facing important choices. Taking time to gather diverse perspectives, questioning our initial assumptions, and considering alternative options can lead to more rational and beneficial outcomes.`,
    contentUz: `Har kuni biz minglab qarorlar qabul qilamiz - nonushta uchun nima yeyishdan tortib, qaysi kasb yo'lini tanlash kabi hayotni o'zgartiruvchi qarorlargacha. Bu qarorlarni qanday qabul qilishimizni tushunish psixologlarni o'nlab yillar davomida qiziqtirib, biznes, sog'liqni saqlash va davlat siyosatida amaliy qo'llanmalar yaratdi.

Qaror qabul qilish psixologiyasidagi eng ta'sirli nazariyalardan biri Daniel Kanemanning ikki jarayonli nazariyasidir. Ushbu tizimga ko'ra, fikrlashimiz ikki xil rejimda ishlaydi: 1-tizim - tez, avtomatik va intuitiv; 2-tizim - sekin, ataylab va analitik. Kundalik qarorlarimizning aksariyati 1-tizimga tayanadi, u samarali ishlaydi, lekin kognitiv xatoliklarga moyil bo'lishi mumkin.

Bu xatolar tanlovlarimizga sezilarli ta'sir qilishi mumkin. Masalan, "langar effekti" bizni olgan birinchi ma'lumotga haddan tashqari tayanishga majbur qiladi. Agar sotuvchi sizga avval qimmat mahsulot ko'rsatsa, keyingi mahsulotlar taqqoslash natijasida arzonroq ko'rinadi. Xuddi shunday, "tasdiqlash xatosi" bizni mavjud e'tiqodlarimizni tasdiqlovchi ma'lumotlarga ko'proq e'tibor berishga, qarama-qarshi dalillarni rad etishga olib keladi.

Ushbu psixologik tendentsiyalarni tushunish yaxshiroq qarorlar qabul qilishga yordam beradi. Xatolarimizdan xabardor bo'lgan holda, muhim tanlovlarga duch kelganimizda 2-tizim fikrlashini ongli ravishda ishga solishimiz mumkin. Turli nuqtai nazarlarni to'plash, dastlabki taxminlarimizni so'roq qilish va muqobil variantlarni ko'rib chiqish yanada oqilona va foydali natijalarga olib kelishi mumkin.`,
    questions: [
      {
        question: "What is System 1 thinking characterized by?",
        questionUz: "1-tizim fikrlashi nimalar bilan tavsiflanadi?",
        options: [
          "Slow and analytical",
          "Deliberate and careful",
          "Fast and intuitive",
          "Complex and methodical"
        ],
        correctAnswer: 2
      },
      {
        question: "What is the 'anchoring effect'?",
        questionUz: "'Langar effekti' nima?",
        options: [
          "Being influenced by first information received",
          "Making decisions based on emotions",
          "Avoiding risky choices",
          "Following others' decisions"
        ],
        correctAnswer: 0
      },
      {
        question: "How can understanding biases help us?",
        questionUz: "Xatolarni tushunish bizga qanday yordam beradi?",
        options: [
          "Make faster decisions",
          "Avoid all mistakes",
          "Make more rational choices",
          "Trust our instincts more"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "3",
    title: "The Rise of Remote Work",
    titleUz: "Masofaviy ishning yuksalishi",
    level: "B2",
    category: "Business",
    readingTime: 5,
    content: `The COVID-19 pandemic fundamentally transformed how we think about work. What was once considered a perk offered by progressive companies became an overnight necessity for millions of workers worldwide. Now, as we emerge from the pandemic, many organizations are grappling with the question of what the future of work will look like.

Studies have shown that remote work offers significant benefits for both employees and employers. Workers report higher job satisfaction, better work-life balance, and reduced commuting stress. Companies have discovered that they can access a wider talent pool, reduce office costs, and often see improvements in productivity. Some organizations have embraced fully remote models, closing their physical offices entirely.

However, remote work is not without its drawbacks. Many employees struggle with isolation, finding it difficult to separate work from personal life when both occur in the same space. Collaboration and spontaneous creativity can suffer when teams are dispersed. Younger workers may miss out on mentorship opportunities and the informal learning that happens in office environments.

The most likely outcome appears to be a hybrid model, where employees split their time between home and office. This approach aims to capture the benefits of both arrangements: the flexibility and focus of remote work combined with the social connection and collaboration of in-person interaction. Companies are now investing in technologies and policies that support this new way of working.`,
    contentUz: `COVID-19 pandemiyasi ish haqidagi fikrlashimizni tubdan o'zgartirdi. Ilg'or kompaniyalar tomonidan imtiyoz sifatida taqdim etilgan narsa bir kechada dunyo bo'ylab millionlab ishchilar uchun zarurat bo'lib qoldi. Endi, pandemiyadan chiqayotganimizda, ko'plab tashkilotlar ishning kelajagi qanday bo'lishi haqida savol bilan kurashmoqda.

Tadqiqotlar shuni ko'rsatdiki, masofaviy ish xodimlarga ham, ish beruvchilarga ham sezilarli foyda keltiradi. Ishchilar yuqori ish qoniqishi, yaxshiroq ish-hayot muvozanati va kamroq yo'l stressi haqida xabar berishadi. Kompaniyalar kengroq iste'dodli odamlar havzasiga kirish, ofis xarajatlarini kamaytirish va ko'pincha unumdorlikni yaxshilashni ko'rishdi. Ba'zi tashkilotlar to'liq masofaviy modellarni qabul qilib, jismoniy ofislarini butunlay yopdilar.

Biroq, masofaviy ishning kamchiliklari ham bor. Ko'plab xodimlar izolyatsiya bilan kurashadi, chunki ish va shaxsiy hayot bir joyda sodir bo'lganda ularni ajratish qiyin. Jamoalar tarqalib ketganda hamkorlik va o'z-o'zidan ijodkorlik zararlanishi mumkin. Yosh ishchilar murabbiylik imkoniyatlarini va ofis muhitida sodir bo'ladigan norasmiy o'rganishni boy berishi mumkin.

Eng ehtimoliy natija gibrid model bo'lib ko'rinadi, bunda xodimlar vaqtlarini uy va ofis o'rtasida bo'lishadilar. Ushbu yondashuv ikkala tartibning afzalliklarini qo'lga kiritishga qaratilgan: masofaviy ishning moslashuvchanligi va e'tibori shaxsiy muloqotning ijtimoiy aloqasi va hamkorligi bilan birlashtirilgan. Kompaniyalar endi ushbu yangi ishlash usulini qo'llab-quvvatlaydigan texnologiyalar va siyosatlarga sarmoya kiritmoqdalar.`,
    questions: [
      {
        question: "What benefit of remote work is mentioned for companies?",
        questionUz: "Kompaniyalar uchun masofaviy ishning qaysi foydasi tilga olingan?",
        options: [
          "Higher employee turnover",
          "Access to wider talent pool",
          "More office space",
          "Increased meetings"
        ],
        correctAnswer: 1
      },
      {
        question: "What challenge do younger workers face with remote work?",
        questionUz: "Yosh ishchilar masofaviy ishda qanday qiyinchilikka duch keladi?",
        options: [
          "Technology problems",
          "Missing mentorship opportunities",
          "Lower salaries",
          "Longer working hours"
        ],
        correctAnswer: 1
      },
      {
        question: "What appears to be the most likely future work model?",
        questionUz: "Kelajakdagi ish modeli qanday bo'lishi kutilmoqda?",
        options: [
          "Fully remote",
          "Fully in-office",
          "Hybrid model",
          "Four-day work week"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "4",
    title: "Artificial Intelligence in Healthcare",
    titleUz: "Sog'liqni saqlashda sun'iy intellekt",
    level: "B2",
    category: "Technology",
    readingTime: 6,
    content: `Artificial intelligence is revolutionizing healthcare in ways that seemed like science fiction just a decade ago. From diagnosing diseases to developing new drugs, AI systems are becoming invaluable tools for medical professionals. These advancements promise to improve patient outcomes while reducing costs and increasing accessibility to quality care.

One of the most impressive applications is in medical imaging. AI algorithms can analyze X-rays, MRIs, and CT scans with remarkable accuracy, sometimes detecting abnormalities that human radiologists might miss. In dermatology, smartphone apps powered by AI can identify potential skin cancers from photographs, enabling early detection and treatment. These tools don't replace doctors but rather augment their capabilities, allowing them to make more informed decisions.

Drug discovery is another area where AI is making significant contributions. Traditionally, developing a new medication takes over a decade and costs billions of dollars. AI can dramatically accelerate this process by analyzing vast amounts of biological data to identify promising drug candidates. During the COVID-19 pandemic, AI helped researchers understand the virus's structure and identify potential treatments in record time.

Despite these advances, important challenges remain. Questions about data privacy, algorithmic bias, and the need for regulatory frameworks are being actively debated. There are concerns that AI systems trained on data from certain populations may not work as well for others. Additionally, the "black box" nature of some AI algorithms makes it difficult to understand how they reach their conclusions, raising issues of accountability in medical decision-making.`,
    contentUz: `Sun'iy intellekt sog'liqni saqlashni o'n yil oldin ilmiy fantastika kabi ko'ringan usullarda inqilob qilmoqda. Kasalliklarni tashxislashdan tortib yangi dorilarni ishlab chiqarishgacha, sun'iy intellekt tizimlari tibbiyot mutaxassislari uchun bebaho vositalarga aylanmoqda. Ushbu yutuqlar xarajatlarni kamaytirish va sifatli tibbiy yordamga kirishni oshirish bilan birga bemorlar natijalarini yaxshilashni va'da qiladi.

Eng ta'sirchan ilovalardan biri tibbiy tasvirlashda. Sun'iy intellekt algoritmlari rentgen, MRT va KT skanlarini ajoyib aniqlik bilan tahlil qilishi mumkin, ba'zida inson radiologlar o'tkazib yuborishi mumkin bo'lgan anomaliyalarni aniqlaydi. Dermatologiyada sun'iy intellekt tomonidan quvvatlanadigan smartfon ilovalari fotosuratlardan potentsial teri saratonlarini aniqlay oladi, bu erta aniqlash va davolash imkonini beradi. Bu vositalar shifokorlarni almashtirmaydi, balki ularning imkoniyatlarini kuchaytiradi, ularga yanada asoslangan qarorlar qabul qilish imkonini beradi.

Dori kashfiyoti sun'iy intellekt sezilarli hissa qo'shayotgan yana bir soha. An'anaviy ravishda, yangi dori ishlab chiqish o'n yildan ortiq vaqt va milliardlab dollar talab qiladi. Sun'iy intellekt istiqbolli dori nomzodlarini aniqlash uchun katta miqdordagi biologik ma'lumotlarni tahlil qilish orqali bu jarayonni keskin tezlashtirishi mumkin. COVID-19 pandemiyasi davrida sun'iy intellekt tadqiqotchilarga virusning tuzilishini tushunish va rekord vaqt ichida potentsial davolash usullarini aniqlashda yordam berdi.

Ushbu yutuqlarga qaramay, muhim muammolar qolmoqda. Ma'lumotlar maxfiyligi, algoritmik xatolar va tartibga solish tizimlari zarurati haqidagi savollar faol muhokama qilinmoqda. Ma'lum populyatsiyalar ma'lumotlari bo'yicha o'qitilgan sun'iy intellekt tizimlari boshqalar uchun yaxshi ishlamasligi mumkinligi haqida xavotirlar mavjud. Bundan tashqari, ba'zi sun'iy intellekt algoritmlarining "qora quti" tabiati ularning xulosalarga qanday kelishini tushunishni qiyinlashtiradi, bu tibbiy qaror qabul qilishda javobgarlik masalalarini ko'taradi.`,
    questions: [
      {
        question: "How does AI help in medical imaging?",
        questionUz: "Sun'iy intellekt tibbiy tasvirlashda qanday yordam beradi?",
        options: [
          "By replacing radiologists completely",
          "By detecting abnormalities with high accuracy",
          "By taking X-rays automatically",
          "By reducing image quality"
        ],
        correctAnswer: 1
      },
      {
        question: "What is a traditional challenge in drug development that AI addresses?",
        questionUz: "Sun'iy intellekt hal qiladigan dori ishlab chiqishdagi an'anaviy muammo nima?",
        options: [
          "Drug packaging",
          "Marketing strategies",
          "Long development time and high costs",
          "Distribution networks"
        ],
        correctAnswer: 2
      },
      {
        question: "What concern exists about AI systems in healthcare?",
        questionUz: "Sog'liqni saqlashda sun'iy intellekt tizimlari haqida qanday xavotir mavjud?",
        options: [
          "They are too expensive to maintain",
          "They may not work equally well for all populations",
          "They require too much electricity",
          "They are too slow"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "5",
    title: "The Ocean's Hidden World",
    titleUz: "Okeanning yashirin dunyosi",
    level: "B2",
    category: "Science",
    readingTime: 5,
    content: `The deep ocean remains one of the least explored frontiers on our planet. Despite covering more than 70% of Earth's surface, we have mapped only about 20% of the ocean floor in detail. This mysterious realm holds secrets that could revolutionize our understanding of life, provide new medicines, and even help address climate change.

Recent technological advances have enabled scientists to venture deeper than ever before. Submersibles equipped with powerful lights and cameras can now descend to depths of over 10,000 meters, revealing ecosystems that thrive in complete darkness. These deep-sea communities often exist around hydrothermal vents, where superheated water emerges from the Earth's crust, supporting life forms that derive energy from chemical reactions rather than sunlight.

The creatures found in these environments are remarkably adapted to their extreme conditions. Giant tube worms, eyeless fish, and bioluminescent organisms populate this alien landscape. Some of these species produce unique compounds with potential pharmaceutical applications. Scientists have already discovered substances from deep-sea organisms that show promise in treating cancer, bacterial infections, and other diseases.

However, this fragile ecosystem faces increasing threats. Deep-sea mining companies are eyeing the mineral-rich ocean floor, and fishing operations are extending into ever-deeper waters. Climate change is altering ocean temperatures and chemistry, with unknown consequences for deep-sea life. Conservationists argue that we must protect these environments before we fully understand what we might lose.`,
    contentUz: `Chuqur okean sayyoramizda eng kam o'rganilgan chegaralardan biri bo'lib qolmoqda. Yer yuzasining 70% dan ortig'ini qoplaganiga qaramay, biz okean tubining atigi 20% ga yaqinini batafsil xaritaladik. Bu sirli hudud hayot haqidagi tushunchamizni inqilob qilishi, yangi dorilar taqdim etishi va hatto iqlim o'zgarishini hal qilishga yordam berishi mumkin bo'lgan sirlarni o'z ichiga oladi.

Yaqinda texnologik yutuqlar olimlarga avvalgidan ham chuqurroq sayohat qilish imkonini berdi. Kuchli chiroqlar va kameralar bilan jihozlangan suvosti kemalar endi 10,000 metrdan ortiq chuqurlikka tushishi mumkin, bu to'liq zulmatda gullab-yashnagan ekotizimlarni ochib beradi. Bu chuqur dengiz jamoalari ko'pincha gidrotermal tuynuklari atrofida mavjud bo'lib, u yerda Yer qobig'idan qizigan suv chiqadi, quyosh nuri o'rniga kimyoviy reaktsiyalardan energiya oladigan hayot shakllarini qo'llab-quvvatlaydi.

Bu muhitda topilgan jonzotlar o'zlarining ekstremal sharoitlariga ajoyib moslashgan. Ulkan trubka qurtlari, ko'rsiz baliqlar va bioluminessent organizmlar bu begona landshaftni to'ldiradi. Ushbu turlarning ba'zilari potentsial farmatsevtik ilovalarga ega noyob birikmalarni ishlab chiqaradi. Olimlar allaqachon chuqur dengiz organizmlaridan saraton, bakterial infektsiyalar va boshqa kasalliklarni davolashda istiqbolli moddalarni kashf etdilar.

Biroq, bu mo'rt ekotizim tobora ko'payib borayotgan tahdidlarga duch kelmoqda. Chuqur dengiz qazib olish kompaniyalari mineralga boy okean tubiga ko'z tikmoqda, baliq ovlash operatsiyalari tobora chuqurroq suvlarga cho'zmoqda. Iqlim o'zgarishi okean harorati va kimyosini o'zgartirmoqda, bu chuqur dengiz hayoti uchun noma'lum oqibatlarga olib keladi. Tabiatni muhofaza qiluvchilar biz nimani yo'qotishimiz mumkinligini to'liq tushunishdan oldin bu muhitlarni himoya qilishimiz kerak deb ta'kidlaydilar.`,
    questions: [
      {
        question: "How much of the ocean floor has been mapped in detail?",
        questionUz: "Okean tubining qancha qismi batafsil xaritalangan?",
        options: [
          "About 70%",
          "About 50%",
          "About 20%",
          "About 5%"
        ],
        correctAnswer: 2
      },
      {
        question: "What do deep-sea organisms near hydrothermal vents use for energy?",
        questionUz: "Gidrotermal tuynuklari yaqinidagi chuqur dengiz organizmlari energiya uchun nimadan foydalanadi?",
        options: [
          "Sunlight",
          "Chemical reactions",
          "Ocean currents",
          "Plant material"
        ],
        correctAnswer: 1
      },
      {
        question: "What potential threat to deep-sea ecosystems is mentioned?",
        questionUz: "Chuqur dengiz ekotizimlariga qanday potentsial tahdid tilga olingan?",
        options: [
          "Plastic pollution only",
          "Tourism activities",
          "Deep-sea mining",
          "Underwater volcanoes"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "6",
    title: "The Art of Effective Communication",
    titleUz: "Samarali muloqot san'ati",
    level: "B2",
    category: "Personal Development",
    readingTime: 5,
    content: `Effective communication is often cited as the most important skill in both personal and professional life. Yet despite its importance, many people struggle to express their ideas clearly, listen actively, and navigate difficult conversations. Understanding the principles of good communication can transform relationships and open doors to new opportunities.

Active listening is perhaps the most undervalued component of communication. While most people focus on what they want to say, skilled communicators prioritize understanding others first. This means giving full attention to the speaker, asking clarifying questions, and reflecting back what you've heard to ensure understanding. When people feel truly heard, they become more open and cooperative.

Non-verbal communication often speaks louder than words. Research suggests that body language, facial expressions, and tone of voice can convey more meaning than the actual words spoken. Maintaining eye contact, having an open posture, and matching your expression to your message all contribute to effective communication. Being aware of these signals—both your own and others'—can significantly improve how your message is received.

The ability to adapt your communication style to different audiences and situations is equally important. What works in a casual conversation with friends may not be appropriate in a business meeting. Emotional intelligence—the ability to recognize and manage emotions in yourself and others—plays a crucial role here. By reading the room and adjusting accordingly, you can ensure your message resonates with your audience.`,
    contentUz: `Samarali muloqot ko'pincha shaxsiy va professional hayotda eng muhim mahorat sifatida tilga olinadi. Ammo uning ahamiyatiga qaramay, ko'p odamlar o'z fikrlarini aniq ifodalash, faol tinglash va qiyin suhbatlarni boshqarishda qiynalishadi. Yaxshi muloqot tamoyillarini tushunish munosabatlarni o'zgartirishi va yangi imkoniyatlarga eshik ochishi mumkin.

Faol tinglash ehtimol muloqotning eng kam baholanadigan komponentidir. Ko'pchilik odamlar nima demoqchi ekanliklariga e'tibor berishsa-da, mohir muloqotchilar avval boshqalarni tushunishga ustuvorlik berishadi. Bu spikergafull diqqat qaratish, aniqlashtiruvchi savollar berish va tushunishni ta'minlash uchun eshitganlaringizni qaytarishni anglatadi. Odamlar haqiqatan ham eshitilganini his qilganda, ular yanada ochiq va hamkorlikka tayyor bo'ladilar.

Noverbal muloqot ko'pincha so'zlardan balandroq gapiradi. Tadqiqotlar shuni ko'rsatadiki, tana tili, yuz ifodalari va ovoz ohangi aytilgan so'zlardan ko'ra ko'proq ma'no etkazishi mumkin. Ko'z aloqasini saqlash, ochiq tana holati va ifodalashni xabaringizga moslashtirish barchasi samarali muloqotga hissa qo'shadi. Bu signallardan - o'zingizning va boshqalarning - xabardor bo'lish xabaringiz qanday qabul qilinishini sezilarli darajada yaxshilashi mumkin.

Turli auditoriya va vaziyatlarga muloqot uslubingizni moslashtirish qobiliyati ham xuddi shunday muhim. Do'stlar bilan tasodifiy suhbatda ishlaydigan narsa biznes uchrashuvida mos kelmasligi mumkin. Emotsional intellekt - o'zingizda va boshqalarda hissiyotlarni tan olish va boshqarish qobiliyati - bu yerda hal qiluvchi rol o'ynaydi. Xonani o'qish va shunga mos ravishda moslashish orqali xabaringiz auditoriyangiz bilan rezonanslashishini ta'minlashingiz mumkin.`,
    questions: [
      {
        question: "What is described as the most undervalued component of communication?",
        questionUz: "Muloqotning eng kam baholanadigan komponenti nima deb ta'riflangan?",
        options: [
          "Speaking clearly",
          "Active listening",
          "Using gestures",
          "Writing skills"
        ],
        correctAnswer: 1
      },
      {
        question: "According to the text, what can convey more meaning than words?",
        questionUz: "Matnga ko'ra, so'zlardan ko'ra ko'proq ma'no nima etkazishi mumkin?",
        options: [
          "Written messages",
          "Formal language",
          "Body language and tone",
          "Technical vocabulary"
        ],
        correctAnswer: 2
      },
      {
        question: "What role does emotional intelligence play in communication?",
        questionUz: "Emotsional intellekt muloqotda qanday rol o'ynaydi?",
        options: [
          "It's not important",
          "It helps adapt to different situations",
          "It only matters in personal life",
          "It replaces verbal skills"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "7",
    title: "The History of Coffee Culture",
    titleUz: "Qahva madaniyati tarixi",
    level: "B2",
    category: "Culture",
    readingTime: 5,
    content: `Coffee is more than just a beverage; it's a global phenomenon that has shaped cultures, economies, and social interactions for centuries. From its legendary discovery in Ethiopia to the modern specialty coffee movement, this humble bean has an extraordinary story.

According to legend, coffee was discovered by an Ethiopian goat herder named Kaldi in the 9th century. He noticed his goats becoming unusually energetic after eating berries from a certain tree. The stimulating properties of coffee soon became known throughout the Arab world, where coffeehouses emerged as centers of intellectual exchange and social gathering. These establishments were sometimes called "schools of the wise."

Coffee arrived in Europe in the 17th century and quickly became popular despite initial suspicion from some religious authorities who called it "the devil's drink." Coffeehouses in London became meeting places for merchants, writers, and thinkers, earning nicknames like "penny universities" because for the price of a coffee, one could engage in stimulating conversation. Some of today's major institutions, including Lloyd's of London insurance market, originated in coffeehouses.

Today, coffee culture continues to evolve. The third wave of coffee emphasizes quality, sustainability, and the artistry of brewing. Consumers increasingly want to know where their beans come from and how they were processed. Baristas are treated as skilled craftspeople, and specialty coffee shops offer experiences similar to wine tasting. This evolution reflects broader trends toward mindful consumption and appreciation of craftsmanship.`,
    contentUz: `Qahva shunchaki ichimlik emas; u asrlar davomida madaniyatlar, iqtisodiyotlar va ijtimoiy munosabatlarni shakllantirgan global hodisadir. Efiopiyadagi afsonaviy kashfiyotdan zamonaviy maxsus qahva harakatigacha, bu oddiy don ajoyib tarixga ega.

Afsonaga ko'ra, qahva 9-asrda Kaldi ismli efiopiyalik echki cho'poni tomonidan kashf etilgan. U echkilari ma'lum bir daraxtning mevalarini yegandan keyin g'ayrioddiy darajada tetik bo'lganini payqadi. Qahvaning rag'batlantiruvchi xususiyatlari tez orada Arab olamida mashhur bo'ldi, u yerda qahvaxonalar intellektual almashish va ijtimoiy yig'ilish markazlari sifatida paydo bo'ldi. Bu muassasalar ba'zan "donolarning maktablari" deb atalgan.

Qahva 17-asrda Yevropaga keldi va uni "shayton ichimligi" deb atagan ba'zi diniy vakillarning dastlabki gumoniga qaramay tezda mashhur bo'ldi. Londondagi qahvaxonalar savdogarlar, yozuvchilar va mutafakkirlar uchun uchrashish joylariga aylandi va "tiyin universitetlari" laqabini oldi, chunki qahva narxiga jonli suhbatda ishtirok etish mumkin edi. Bugungi yirik institutlarning ba'zilari, shu jumladan Lloyd's of London sug'urta bozori, qahvaxonalarda paydo bo'lgan.

Bugungi kunda qahva madaniyati rivojlanishda davom etmoqda. Qahvaning uchinchi to'lqini sifat, barqarorlik va pishirish san'atini ta'kidlaydi. Iste'molchilar tobora ko'proq o'z donlari qayerdan kelganini va qanday ishlov berilganini bilishni xohlashmoqda. Baristalar mohir hunarmandlar sifatida qaraladi va maxsus qahva do'konlari vino tatib ko'rishga o'xshash tajribalar taklif qiladi. Bu evolyutsiya ongli iste'mol va hunarmandchilikni qadrlash tomon kengroq tendentsiyalarni aks ettiradi.`,
    questions: [
      {
        question: "According to legend, who discovered coffee?",
        questionUz: "Afsonaga ko'ra, qahvani kim kashf qilgan?",
        options: [
          "Arab merchants",
          "Ethiopian goat herder",
          "European explorers",
          "Turkish traders"
        ],
        correctAnswer: 1
      },
      {
        question: "Why were London coffeehouses called 'penny universities'?",
        questionUz: "Nima uchun London qahvaxonalari 'tiyin universitetlari' deb atalgan?",
        options: [
          "They taught formal classes",
          "They were cheap and offered intellectual conversation",
          "They were near universities",
          "They gave diplomas"
        ],
        correctAnswer: 1
      },
      {
        question: "What does the 'third wave' of coffee emphasize?",
        questionUz: "Qahvaning 'uchinchi to'lqini' nimani ta'kidlaydi?",
        options: [
          "Fast service and convenience",
          "Low prices",
          "Quality, sustainability, and artistry",
          "Large chain expansion"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "8",
    title: "Urban Farming: Growing Food in Cities",
    titleUz: "Shahar fermerligi: Shaharlarda oziq-ovqat yetishtirish",
    level: "B2",
    category: "Environment",
    readingTime: 6,
    content: `As cities expand and populations grow, urban farming has emerged as a innovative solution to food security challenges. From rooftop gardens to vertical farms, city dwellers are finding creative ways to produce fresh food in the heart of urban environments.

Vertical farming represents one of the most promising developments in this field. These indoor facilities use stacked growing systems and LED lighting to produce crops year-round, regardless of weather conditions. Compared to traditional agriculture, vertical farms use up to 95% less water and can produce significantly higher yields per square meter. Companies like AeroFarms and Plenty are demonstrating that this technology can be commercially viable.

Community gardens offer a different model of urban agriculture. These shared spaces bring neighbors together to cultivate plots, fostering social connections while providing fresh produce. Research has shown that community gardens can improve mental health, reduce stress, and increase access to nutritious food in areas where grocery stores are scarce. They also serve as educational spaces where children can learn about where their food comes from.

However, urban farming faces significant challenges. High startup costs, expensive real estate in cities, and energy consumption for indoor growing operations can make profitability difficult. Critics also point out that urban farms cannot replace conventional agriculture at scale; rather, they should be seen as a complement to traditional food systems. Despite these limitations, the urban farming movement continues to grow, driven by consumer demand for local, fresh, and sustainably produced food.`,
    contentUz: `Shaharlar kengayib, aholi ko'paygan sari, shahar fermerligi oziq-ovqat xavfsizligi muammolariga innovatsion yechim sifatida paydo bo'ldi. Tom boglari va vertikal fermalardan tortib, shahar aholisi shaharga oid muhitlarning markazida yangi oziq-ovqat ishlab chiqarishning ijodiy usullarini topmoqda.

Vertikal fermerlik ushbu sohadagi eng istiqbolli rivojlanishlardan birini ifodalaydi. Bu yopiq inshootlar ob-havo sharoitlaridan qat'i nazar, yil davomida hosil yetishtirish uchun qatlamli o'stirish tizimlari va LED yoritishdan foydalanadi. An'anaviy qishloq xo'jaligiga nisbatan vertikal fermalar 95% gacha kam suv sarflaydi va kvadrat metrga sezilarli darajada yuqori hosil ishlab chiqarishi mumkin. AeroFarms va Plenty kabi kompaniyalar ushbu texnologiya tijorat jihatidan hayotiy bo'lishi mumkinligini namoyish qilmoqda.

Jamoat bog'lari shahar qishloq xo'jaligining boshqa modelini taklif qiladi. Bu umumiy joylar qo'shnilarni er uchastkalarini etishtirish uchun birlashtirib, yangi mahsulot bilan ta'minlash bilan birga ijtimoiy aloqalarni rivojlantiradi. Tadqiqotlar shuni ko'rsatdiki, jamoat bog'lari ruhiy salomatlikni yaxshilashi, stressni kamaytirishi va oziq-ovqat do'konlari kam bo'lgan hududlarda to'yimli ovqatga kirishni oshirishi mumkin. Ular shuningdek bolalar oziq-ovqat qayerdan kelishini o'rganishi mumkin bo'lgan ta'lim makonlari sifatida xizmat qiladi.

Biroq, shahar fermerligi sezilarli qiyinchiliklarga duch keladi. Yuqori boshlang'ich xarajatlar, shaharlarda qimmat ko'chmas mulk va yopiq yetishtirish operatsiyalari uchun energiya iste'moli daromadlilikni qiyinlashtirishi mumkin. Tanqidchilar shuningdek shahar fermalari an'anaviy qishloq xo'jaligini miqyosda almashtirolmasligini ta'kidlaydilar; aksincha, ular an'anaviy oziq-ovqat tizimlarini to'ldiruvchi sifatida qarash kerak. Ushbu cheklovlarga qaramay, shahar fermerlik harakati mahalliy, yangi va barqaror ishlab chiqarilgan oziq-ovqatga iste'molchi talabi tufayli o'sishda davom etmoqda.`,
    questions: [
      {
        question: "How much less water do vertical farms use compared to traditional agriculture?",
        questionUz: "Vertikal fermalar an'anaviy qishloq xo'jaligiga nisbatan qancha kam suv sarflaydi?",
        options: [
          "Up to 50%",
          "Up to 75%",
          "Up to 95%",
          "Up to 100%"
        ],
        correctAnswer: 2
      },
      {
        question: "What benefit of community gardens is mentioned besides food production?",
        questionUz: "Oziq-ovqat ishlab chiqarishdan tashqari jamoat bog'larining qaysi foydasi tilga olingan?",
        options: [
          "Financial profits",
          "Improved mental health",
          "Tax benefits",
          "Reduced traffic"
        ],
        correctAnswer: 1
      },
      {
        question: "What is a major challenge facing urban farming?",
        questionUz: "Shahar fermerligiga duch keladigan asosiy qiyinchilik nima?",
        options: [
          "Lack of consumer interest",
          "High startup costs",
          "Water shortages",
          "Pest problems"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "9",
    title: "The Science of Sleep",
    titleUz: "Uyqu fani",
    level: "B2",
    category: "Health",
    readingTime: 5,
    content: `Sleep is one of the most fundamental aspects of human health, yet it remains poorly understood and often neglected. Scientists are increasingly discovering that quality sleep is essential for physical health, cognitive function, and emotional well-being.

During sleep, the brain undergoes crucial processes that cannot occur while we're awake. The glymphatic system, discovered only in 2012, clears toxic waste products from the brain during deep sleep. This includes beta-amyloid, a protein associated with Alzheimer's disease. Memory consolidation also occurs during sleep, as the brain transfers information from short-term to long-term storage. This is why adequate sleep is so important for learning.

The consequences of sleep deprivation are far-reaching. Even moderate sleep loss impairs cognitive function, reaction time, and decision-making abilities. Chronic sleep deprivation has been linked to serious health conditions, including heart disease, diabetes, obesity, and depression. Studies have shown that sleeping fewer than six hours per night regularly can reduce life expectancy.

Despite this knowledge, modern society often treats sleep as a luxury rather than a necessity. The blue light from screens suppresses melatonin production, making it harder to fall asleep. Work demands and social pressures encourage people to sacrifice sleep for productivity. However, research consistently shows that well-rested individuals are actually more productive, creative, and healthy. Prioritizing sleep is not laziness; it's an investment in overall well-being.`,
    contentUz: `Uyqu inson sog'lig'ining eng muhim jihatlaridan biri, ammo u hali ham yetarlicha tushunilmagan va ko'pincha e'tiborsiz qoldiriladi. Olimlar tobora ko'proq sifatli uyqu jismoniy salomatlik, kognitiv funksiya va emotsional farovonlik uchun zarur ekanligini kashf etmoqdalar.

Uyqu paytida miya biz uyg'oq bo'lganimizda sodir bo'la olmaydigan muhim jarayonlarni o'tkazadi. 2012-yilda kashf etilgan glimfatik tizim chuqur uyqu paytida miyadan toksik chiqindilarni tozalaydi. Bunga Altsgeymer kasalligi bilan bog'liq oqsil bo'lgan beta-amiloid kiradi. Xotira mustahkamlanishi ham uyqu paytida sodir bo'ladi, chunki miya ma'lumotlarni qisqa muddatli xotiradan uzoq muddatli saqlashga o'tkazadi. Shuning uchun yetarli uyqu o'rganish uchun juda muhim.

Uyqu yetishmasligining oqibatlari keng qamrovli. Hatto o'rtacha uyqu yo'qotilishi kognitiv funksiya, reaktsiya vaqti va qaror qabul qilish qobiliyatlarini buzadi. Surunkali uyqu yetishmasligi yurak kasalliklari, diabet, semizlik va depressiya kabi jiddiy sog'liq holatlari bilan bog'langan. Tadqiqotlar shuni ko'rsatdiki, muntazam ravishda tuniga olti soatdan kam uxlash umr ko'rish davomiyligini qisqartirishi mumkin.

Ushbu bilimga qaramay, zamonaviy jamiyat ko'pincha uyquni zarurat emas, balki hashamat sifatida ko'radi. Ekranlardan keladigan ko'k yorug'lik melatonin ishlab chiqarishni bostiradi, bu uyquga ketishni qiyinlashtiradi. Ish talablari va ijtimoiy bosimlar odamlarni unumdorlik uchun uyquni qurbon qilishga undaydi. Biroq, tadqiqotlar doimiy ravishda yaxshi dam olgan odamlar aslida yanada unumdor, ijodiy va sog'lom ekanligini ko'rsatadi. Uyquga ustuvorlik berish dangasalik emas; bu umumiy farovonlikka investitsiyadir.`,
    questions: [
      {
        question: "What does the glymphatic system do during sleep?",
        questionUz: "Glimfatik tizim uyqu paytida nima qiladi?",
        options: [
          "Produces dreams",
          "Clears toxic waste from the brain",
          "Regulates breathing",
          "Controls muscle movement"
        ],
        correctAnswer: 1
      },
      {
        question: "What happens to memories during sleep?",
        questionUz: "Uyqu paytida xotiralar bilan nima sodir bo'ladi?",
        options: [
          "They are deleted",
          "They become confused",
          "They are consolidated and stored",
          "They remain unchanged"
        ],
        correctAnswer: 2
      },
      {
        question: "Why does blue light from screens affect sleep?",
        questionUz: "Ekranlardan keladigan ko'k yorug'lik uyquga nima uchun ta'sir qiladi?",
        options: [
          "It damages eyes",
          "It suppresses melatonin production",
          "It causes headaches",
          "It increases anxiety"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "10",
    title: "The Economics of Happiness",
    titleUz: "Baxt iqtisodiyoti",
    level: "B2",
    category: "Society",
    readingTime: 6,
    content: `For decades, economists measured societal progress primarily through GDP and income growth. However, a growing body of research suggests that these traditional metrics fail to capture what truly matters to people: their overall well-being and life satisfaction. This has led to the emergence of "happiness economics," a field that seeks to understand what makes people flourish.

Studies have consistently shown that beyond a certain income threshold—typically enough to meet basic needs and achieve a comfortable lifestyle—additional wealth has diminishing returns on happiness. This phenomenon, known as the "Easterlin paradox," challenges the assumption that economic growth automatically leads to greater societal happiness. Countries like Bhutan have pioneered alternative measures such as "Gross National Happiness" to complement traditional economic indicators.

Research has identified several factors that contribute more significantly to life satisfaction than income alone. Strong social relationships, meaningful work, good health, and personal freedom consistently rank as top predictors of happiness. The quality of one's daily experiences—the small pleasures and daily interactions—often matters more than major life events or achievements.

These findings have profound implications for public policy. Governments are increasingly considering well-being metrics alongside economic indicators when making decisions. Policies that promote work-life balance, strengthen community bonds, and protect mental health may be more effective at improving citizens' lives than those focused solely on economic growth. The happiness research suggests that building a good society requires looking beyond the numbers.`,
    contentUz: `O'nlab yillar davomida iqtisodchilar jamiyat taraqqiyotini asosan YaIM va daromad o'sishi orqali o'lchadilar. Biroq, tobora ko'payib borayotgan tadqiqotlar shuni ko'rsatadiki, bu an'anaviy ko'rsatkichlar odamlar uchun haqiqatan ham muhim bo'lgan narsani - ularning umumiy farovonligi va hayot qoniqishini qamrab ololmaydi. Bu "baxt iqtisodiyoti" ning paydo bo'lishiga olib keldi, bu odamlarni nima gullab-yashnashiga tushunishga intiluvchi soha.

Tadqiqotlar doimiy ravishda shuni ko'rsatdiki, ma'lum bir daromad chegarasidan keyin - odatda asosiy ehtiyojlarni qondirish va qulay turmush tarziga erishish uchun yetarli - qo'shimcha boylik baxtga kamroq ta'sir ko'rsatadi. "Easterlin paradoksi" deb nomlanuvchi bu hodisa iqtisodiy o'sish avtomatik ravishda katta ijtimoiy baxtga olib keladi degan taxminga e'tiroz bildiradi. Butan kabi mamlakatlar an'anaviy iqtisodiy ko'rsatkichlarni to'ldirish uchun "Yalpi milliy baxt" kabi muqobil choralarni joriy qildi.

Tadqiqotlar faqat daromaddan ko'ra hayot qoniqishiga ko'proq hissa qo'shadigan bir nechta omillarni aniqladi. Kuchli ijtimoiy munosabatlar, mazmunli ish, yaxshi sog'liq va shaxsiy erkinlik doimiy ravishda baxtning eng muhim ko'rsatkichlari sifatida qayd etiladi. Kundalik tajribalarning sifati - kichik zavqlar va kundalik muloqotlar - ko'pincha yirik hayot voqealari yoki yutuqlardan ko'ra muhimroq.

Bu topilmalar davlat siyosati uchun chuqur ahamiyatga ega. Hukumatlar qaror qabul qilishda iqtisodiy ko'rsatkichlar bilan birga farovonlik ko'rsatkichlarini ham tobora ko'proq hisobga olmoqda. Ish-hayot muvozanatini rag'batlantiradigan, jamoa bog'larini mustahkamlaydigan va ruhiy salomatlikni himoya qiladigan siyosatlar faqat iqtisodiy o'sishga yo'naltirilganlardan ko'ra fuqarolarning hayotini yaxshilashda samaraliroq bo'lishi mumkin. Baxt tadqiqotlari yaxshi jamiyat qurishda raqamlardan tashqariga qarash talab qilinishini ko'rsatadi.`,
    questions: [
      {
        question: "What is the 'Easterlin paradox'?",
        questionUz: "'Easterlin paradoksi' nima?",
        options: [
          "Rich countries are always happier",
          "Beyond basic needs, more wealth doesn't increase happiness proportionally",
          "Happiness causes wealth",
          "GDP measures happiness accurately"
        ],
        correctAnswer: 1
      },
      {
        question: "What factors are mentioned as top predictors of happiness?",
        questionUz: "Baxtning eng muhim ko'rsatkichlari sifatida qaysi omillar tilga olingan?",
        options: [
          "High income and expensive possessions",
          "Social relationships, meaningful work, health, and freedom",
          "Fame and recognition",
          "Living in a big city"
        ],
        correctAnswer: 1
      },
      {
        question: "What alternative measure has Bhutan pioneered?",
        questionUz: "Butan qanday muqobil o'lchov joriy qilgan?",
        options: [
          "Net National Income",
          "Human Development Index",
          "Gross National Happiness",
          "Social Progress Index"
        ],
        correctAnswer: 2
      }
    ]
  }
];

export const getStoryById = (id: string): ReadingStory | undefined => {
  return readingStories.find(story => story.id === id);
};
