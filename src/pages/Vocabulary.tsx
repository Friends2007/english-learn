import { useState } from "react";
import { Header } from "@/components/Header";
import { Volume2, Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const vocabularyCategories = [
  {
    id: "greetings",
    name: "Приветствия",
    icon: "👋",
    words: [
      { russian: "Привет", uzbek: "Salom", pronunciation: "Привет", example: "Привет, как дела? - Salom, qanday ahvol?" },
      { russian: "Здравствуйте", uzbek: "Assalomu alaykum", pronunciation: "Здравствуйте", example: "Здравствуйте, меня зовут Анна. - Assalomu alaykum, mening ismim Anna." },
      { russian: "До свидания", uzbek: "Xayr", pronunciation: "До свидания", example: "До свидания, до завтра! - Xayr, ertaga ko'rishguncha!" },
      { russian: "Доброе утро", uzbek: "Xayrli tong", pronunciation: "Доброе утро", example: "Доброе утро! Как спалось? - Xayrli tong! Qanday uxladingiz?" },
      { russian: "Добрый день", uzbek: "Xayrli kun", pronunciation: "Добрый день", example: "Добрый день, рад вас видеть! - Xayrli kun, sizni ko'rganimdan xursandman!" },
      { russian: "Добрый вечер", uzbek: "Xayrli kech", pronunciation: "Добрый вечер", example: "Добрый вечер, друзья! - Xayrli kech, do'stlar!" },
      { russian: "Спокойной ночи", uzbek: "Xayrli tun", pronunciation: "Спокойной ночи", example: "Спокойной ночи, сладких снов! - Xayrli tun, shirin tushlar!" },
      { russian: "Пока", uzbek: "Ko'rishguncha", pronunciation: "Пока", example: "Пока, увидимся завтра! - Ko'rishguncha, ertaga ko'rishamiz!" },
      { russian: "Как дела?", uzbek: "Qanday ahvol?", pronunciation: "Как дела?", example: "Привет! Как дела? - Salom! Qanday ahvol?" },
      { russian: "Хорошо", uzbek: "Yaxshi", pronunciation: "Хорошо", example: "Спасибо, у меня всё хорошо. - Rahmat, menda hammasi yaxshi." },
    ],
  },
  {
    id: "numbers",
    name: "Числа",
    icon: "🔢",
    words: [
      { russian: "Один", uzbek: "Bir", pronunciation: "Один", example: "У меня один брат. - Mening bitta akam bor." },
      { russian: "Два", uzbek: "Ikki", pronunciation: "Два", example: "Два плюс два - четыре. - Ikki qo'shish ikki - to'rt." },
      { russian: "Три", uzbek: "Uch", pronunciation: "Три", example: "Три часа дня. - Kunduzi soat uch." },
      { russian: "Четыре", uzbek: "To'rt", pronunciation: "Четыре", example: "Четыре сезона года. - Yilning to'rt fasli." },
      { russian: "Пять", uzbek: "Besh", pronunciation: "Пять", example: "Пять пальцев на руке. - Qo'lda beshta barmoq." },
      { russian: "Шесть", uzbek: "Olti", pronunciation: "Шесть", example: "Шесть месяцев. - Olti oy." },
      { russian: "Семь", uzbek: "Yetti", pronunciation: "Семь", example: "Семь дней в неделе. - Haftada yetti kun." },
      { russian: "Восемь", uzbek: "Sakkiz", pronunciation: "Восемь", example: "Восемь часов утра. - Ertalab soat sakkiz." },
      { russian: "Девять", uzbek: "To'qqiz", pronunciation: "Девять", example: "Девять жизней у кошки. - Mushukda to'qqizta jon bor." },
      { russian: "Десять", uzbek: "O'n", pronunciation: "Десять", example: "Десять минут. - O'n daqiqa." },
      { russian: "Двадцать", uzbek: "Yigirma", pronunciation: "Двадцать", example: "Двадцать лет. - Yigirma yosh." },
      { russian: "Пятьдесят", uzbek: "Ellik", pronunciation: "Пятьдесят", example: "Пятьдесят процентов. - Ellik foiz." },
      { russian: "Сто", uzbek: "Yuz", pronunciation: "Сто", example: "Сто рублей. - Yuz rubl." },
      { russian: "Тысяча", uzbek: "Ming", pronunciation: "Тысяча", example: "Тысяча человек. - Ming kishi." },
    ],
  },
  {
    id: "family",
    name: "Семья",
    icon: "👨‍👩‍👧‍👦",
    words: [
      { russian: "Мама", uzbek: "Ona", pronunciation: "Мама", example: "Моя мама - учительница. - Mening onam o'qituvchi." },
      { russian: "Папа", uzbek: "Ota", pronunciation: "Папа", example: "Папа читает газету. - Ota gazeta o'qiyapti." },
      { russian: "Брат", uzbek: "Aka/Uka", pronunciation: "Брат", example: "Мой брат - студент. - Mening akam talaba." },
      { russian: "Сестра", uzbek: "Opa/Singil", pronunciation: "Сестра", example: "Сестра живёт в Москве. - Opam Moskvada yashaydi." },
      { russian: "Бабушка", uzbek: "Buvi", pronunciation: "Бабушка", example: "Бабушка готовит вкусно. - Buvi mazali ovqat tayyorlaydi." },
      { russian: "Дедушка", uzbek: "Bobo", pronunciation: "Дедушка", example: "Дедушка рассказывает истории. - Bobo hikoyalar aytib beradi." },
      { russian: "Сын", uzbek: "O'g'il", pronunciation: "Сын", example: "Мой сын ходит в школу. - O'g'lim maktabga boradi." },
      { russian: "Дочь", uzbek: "Qiz", pronunciation: "Дочь", example: "Дочь любит танцевать. - Qizim raqsni yaxshi ko'radi." },
      { russian: "Муж", uzbek: "Er", pronunciation: "Муж", example: "Мой муж работает врачом. - Erim shifokor bo'lib ishlaydi." },
      { russian: "Жена", uzbek: "Xotin", pronunciation: "Жена", example: "Моя жена готовит плов. - Xotinim palov tayyorlaydi." },
      { russian: "Дядя", uzbek: "Tog'a/Amaki", pronunciation: "Дядя", example: "Дядя приехал в гости. - Tog'am mehmon bo'lib keldi." },
      { russian: "Тётя", uzbek: "Xola/Amma", pronunciation: "Тётя", example: "Тётя живёт в деревне. - Xolam qishloqda yashaydi." },
    ],
  },
  {
    id: "food",
    name: "Еда",
    icon: "🍽️",
    words: [
      { russian: "Хлеб", uzbek: "Non", pronunciation: "Хлеб", example: "Свежий хлеб очень вкусный. - Yangi non juda mazali." },
      { russian: "Вода", uzbek: "Suv", pronunciation: "Вода", example: "Дайте, пожалуйста, воды. - Iltimos, suv bering." },
      { russian: "Чай", uzbek: "Choy", pronunciation: "Чай", example: "Я люблю зелёный чай. - Men ko'k choyni yaxshi ko'raman." },
      { russian: "Мясо", uzbek: "Go'sht", pronunciation: "Мясо", example: "Мясо нужно хорошо варить. - Go'shtni yaxshi pishirish kerak." },
      { russian: "Рис", uzbek: "Guruch", pronunciation: "Рис", example: "Плов готовят из риса. - Palovni guruchdan tayyorlashadi." },
      { russian: "Яблоко", uzbek: "Olma", pronunciation: "Яблоко", example: "Красное яблоко сладкое. - Qizil olma shirin." },
      { russian: "Молоко", uzbek: "Sut", pronunciation: "Молоко", example: "Молоко полезно для здоровья. - Sut sog'liq uchun foydali." },
      { russian: "Сахар", uzbek: "Shakar", pronunciation: "Сахар", example: "Положите сахар в чай. - Choyga shakar soling." },
      { russian: "Соль", uzbek: "Tuz", pronunciation: "Соль", example: "Добавьте соли. - Tuz qo'shing." },
      { russian: "Масло", uzbek: "Yog'", pronunciation: "Масло", example: "Масло растаяло. - Yog' eridi." },
      { russian: "Картошка", uzbek: "Kartoshka", pronunciation: "Картошка", example: "Жареная картошка вкусная. - Qovurilgan kartoshka mazali." },
      { russian: "Помидор", uzbek: "Pomidor", pronunciation: "Помидор", example: "Спелый помидор красный. - Pishgan pomidor qizil." },
      { russian: "Огурец", uzbek: "Bodring", pronunciation: "Огурец", example: "Свежий огурец хрустящий. - Yangi bodring qarsillaydi." },
      { russian: "Лук", uzbek: "Piyoz", pronunciation: "Лук", example: "Лук нужен для салата. - Salat uchun piyoz kerak." },
    ],
  },
  {
    id: "colors",
    name: "Цвета",
    icon: "🎨",
    words: [
      { russian: "Красный", uzbek: "Qizil", pronunciation: "Красный", example: "Красный цветок. - Qizil gul." },
      { russian: "Синий", uzbek: "Ko'k", pronunciation: "Синий", example: "Синее небо. - Ko'k osmon." },
      { russian: "Зелёный", uzbek: "Yashil", pronunciation: "Зелёный", example: "Зелёная трава. - Yashil maysalar." },
      { russian: "Жёлтый", uzbek: "Sariq", pronunciation: "Жёлтый", example: "Жёлтое солнце. - Sariq quyosh." },
      { russian: "Белый", uzbek: "Oq", pronunciation: "Белый", example: "Белый снег. - Oq qor." },
      { russian: "Чёрный", uzbek: "Qora", pronunciation: "Чёрный", example: "Чёрная кошка. - Qora mushuk." },
      { russian: "Оранжевый", uzbek: "Apelsin rangi", pronunciation: "Оранжевый", example: "Оранжевый апельсин. - Apelsin rangi apelsin." },
      { russian: "Розовый", uzbek: "Pushti", pronunciation: "Розовый", example: "Розовая роза. - Pushti atirgul." },
      { russian: "Серый", uzbek: "Kulrang", pronunciation: "Серый", example: "Серые облака. - Kulrang bulutlar." },
      { russian: "Коричневый", uzbek: "Jigarrang", pronunciation: "Коричневый", example: "Коричневый стол. - Jigarrang stol." },
      { russian: "Фиолетовый", uzbek: "Binafsha", pronunciation: "Фиолетовый", example: "Фиолетовые цветы. - Binafsha gullar." },
      { russian: "Голубой", uzbek: "Havorang", pronunciation: "Голубой", example: "Голубое море. - Havorang dengiz." },
    ],
  },
  {
    id: "days",
    name: "Дни недели",
    icon: "📅",
    words: [
      { russian: "Понедельник", uzbek: "Dushanba", pronunciation: "Понедельник", example: "В понедельник я работаю. - Dushanba kuni ishlayman." },
      { russian: "Вторник", uzbek: "Seshanba", pronunciation: "Вторник", example: "Во вторник у нас урок. - Seshanba kuni darsimiz bor." },
      { russian: "Среда", uzbek: "Chorshanba", pronunciation: "Среда", example: "Среда - середина недели. - Chorshanba - haftaning o'rtasi." },
      { russian: "Четверг", uzbek: "Payshanba", pronunciation: "Четверг", example: "В четверг идём в кино. - Payshanba kuni kinoga boramiz." },
      { russian: "Пятница", uzbek: "Juma", pronunciation: "Пятница", example: "Пятница - любимый день. - Juma - sevimli kun." },
      { russian: "Суббота", uzbek: "Shanba", pronunciation: "Суббота", example: "В субботу отдыхаем. - Shanba kuni dam olamiz." },
      { russian: "Воскресенье", uzbek: "Yakshanba", pronunciation: "Воскресенье", example: "Воскресенье - выходной. - Yakshanba - dam olish kuni." },
    ],
  },
  {
    id: "months",
    name: "Месяцы",
    icon: "🗓️",
    words: [
      { russian: "Январь", uzbek: "Yanvar", pronunciation: "Январь", example: "В январе холодно. - Yanvarda sovuq." },
      { russian: "Февраль", uzbek: "Fevral", pronunciation: "Февраль", example: "Февраль - короткий месяц. - Fevral - qisqa oy." },
      { russian: "Март", uzbek: "Mart", pronunciation: "Март", example: "Весна начинается в марте. - Bahor martda boshlanadi." },
      { russian: "Апрель", uzbek: "Aprel", pronunciation: "Апрель", example: "В апреле цветут деревья. - Aprelda daraxtlar gullab." },
      { russian: "Май", uzbek: "May", pronunciation: "Май", example: "В мае тепло. - Mayda iliq." },
      { russian: "Июнь", uzbek: "Iyun", pronunciation: "Июнь", example: "Лето начинается в июне. - Yoz iyunda boshlanadi." },
      { russian: "Июль", uzbek: "Iyul", pronunciation: "Июль", example: "Июль - самый жаркий месяц. - Iyul - eng issiq oy." },
      { russian: "Август", uzbek: "Avgust", pronunciation: "Август", example: "В августе много фруктов. - Avgustda ko'p meva bor." },
      { russian: "Сентябрь", uzbek: "Sentyabr", pronunciation: "Сентябрь", example: "Учёба начинается в сентябре. - O'qish sentyabrda boshlanadi." },
      { russian: "Октябрь", uzbek: "Oktyabr", pronunciation: "Октябрь", example: "В октябре падают листья. - Oktyabrda barglar to'kiladi." },
      { russian: "Ноябрь", uzbek: "Noyabr", pronunciation: "Ноябрь", example: "В ноябре холодает. - Noyabrda soviydi." },
      { russian: "Декабрь", uzbek: "Dekabr", pronunciation: "Декабрь", example: "В декабре Новый год. - Dekabrda Yangi yil." },
    ],
  },
  {
    id: "body",
    name: "Тело",
    icon: "🧍",
    words: [
      { russian: "Голова", uzbek: "Bosh", pronunciation: "Голова", example: "У меня болит голова. - Boshim og'riyapti." },
      { russian: "Рука", uzbek: "Qo'l", pronunciation: "Рука", example: "Поднимите руку. - Qo'lingizni ko'taring." },
      { russian: "Нога", uzbek: "Oyoq", pronunciation: "Нога", example: "Нога устала. - Oyog'im charchadi." },
      { russian: "Глаза", uzbek: "Ko'z", pronunciation: "Глаза", example: "У неё красивые глаза. - Uning ko'zlari chiroyli." },
      { russian: "Нос", uzbek: "Burun", pronunciation: "Нос", example: "Нос чувствует запах. - Burun hidni sezadi." },
      { russian: "Рот", uzbek: "Og'iz", pronunciation: "Рот", example: "Открой рот. - Og'zingni och." },
      { russian: "Ухо", uzbek: "Quloq", pronunciation: "Ухо", example: "Я слышу ушами. - Men quloq bilan eshitaman." },
      { russian: "Сердце", uzbek: "Yurak", pronunciation: "Сердце", example: "Сердце бьётся. - Yurak uryapti." },
      { russian: "Живот", uzbek: "Qorin", pronunciation: "Живот", example: "Живот болит. - Qorin og'riyapti." },
      { russian: "Спина", uzbek: "Orqa", pronunciation: "Спина", example: "Спина болит от работы. - Ishdan orqam og'riyapti." },
    ],
  },
  {
    id: "animals",
    name: "Животные",
    icon: "🐾",
    words: [
      { russian: "Собака", uzbek: "It", pronunciation: "Собака", example: "Собака лает. - It huryapti." },
      { russian: "Кошка", uzbek: "Mushuk", pronunciation: "Кошка", example: "Кошка мяукает. - Mushuk miyovlayapti." },
      { russian: "Корова", uzbek: "Sigir", pronunciation: "Корова", example: "Корова даёт молоко. - Sigir sut beradi." },
      { russian: "Лошадь", uzbek: "Ot", pronunciation: "Лошадь", example: "Лошадь быстро бегает. - Ot tez yuguradi." },
      { russian: "Овца", uzbek: "Qo'y", pronunciation: "Овца", example: "Овца даёт шерсть. - Qo'y jun beradi." },
      { russian: "Курица", uzbek: "Tovuq", pronunciation: "Курица", example: "Курица несёт яйца. - Tovuq tuxum qo'yadi." },
      { russian: "Птица", uzbek: "Qush", pronunciation: "Птица", example: "Птица летает. - Qush uchyapti." },
      { russian: "Рыба", uzbek: "Baliq", pronunciation: "Рыба", example: "Рыба плавает. - Baliq suzyapti." },
      { russian: "Медведь", uzbek: "Ayiq", pronunciation: "Медведь", example: "Медведь живёт в лесу. - Ayiq o'rmonda yashaydi." },
      { russian: "Волк", uzbek: "Bo'ri", pronunciation: "Волк", example: "Волк воет. - Bo'ri uvillayapti." },
    ],
  },
  {
    id: "professions",
    name: "Профессии",
    icon: "👔",
    words: [
      { russian: "Врач", uzbek: "Shifokor", pronunciation: "Врач", example: "Врач лечит людей. - Shifokor odamlarni davolaydi." },
      { russian: "Учитель", uzbek: "O'qituvchi", pronunciation: "Учитель", example: "Учитель учит детей. - O'qituvchi bolalarni o'qitadi." },
      { russian: "Инженер", uzbek: "Muhandis", pronunciation: "Инженер", example: "Инженер строит дома. - Muhandis uylar quradi." },
      { russian: "Повар", uzbek: "Oshpaz", pronunciation: "Повар", example: "Повар готовит еду. - Oshpaz ovqat tayyorlaydi." },
      { russian: "Водитель", uzbek: "Haydovchi", pronunciation: "Водитель", example: "Водитель ведёт автобус. - Haydovchi avtobus haydaydi." },
      { russian: "Продавец", uzbek: "Sotuvchi", pronunciation: "Продавец", example: "Продавец продаёт товары. - Sotuvchi tovarlar sotadi." },
      { russian: "Полицейский", uzbek: "Politsiyachi", pronunciation: "Полицейский", example: "Полицейский охраняет порядок. - Politsiyachi tartibni saqlaydi." },
      { russian: "Программист", uzbek: "Dasturchi", pronunciation: "Программист", example: "Программист пишет код. - Dasturchi kod yozadi." },
      { russian: "Журналист", uzbek: "Jurnalist", pronunciation: "Журналист", example: "Журналист пишет статьи. - Jurnalist maqolalar yozadi." },
      { russian: "Художник", uzbek: "Rassom", pronunciation: "Художник", example: "Художник рисует картины. - Rassom rasmlar chizadi." },
    ],
  },
  {
    id: "house",
    name: "Дом",
    icon: "🏠",
    words: [
      { russian: "Дом", uzbek: "Uy", pronunciation: "Дом", example: "Мой дом большой. - Mening uyim katta." },
      { russian: "Комната", uzbek: "Xona", pronunciation: "Комната", example: "В комнате светло. - Xonada yorug'." },
      { russian: "Кухня", uzbek: "Oshxona", pronunciation: "Кухня", example: "Мама на кухне. - Onam oshxonada." },
      { russian: "Спальня", uzbek: "Yotoqxona", pronunciation: "Спальня", example: "Спальня уютная. - Yotoqxona qulay." },
      { russian: "Ванная", uzbek: "Hammom", pronunciation: "Ванная", example: "Ванная чистая. - Hammom toza." },
      { russian: "Окно", uzbek: "Deraza", pronunciation: "Окно", example: "Откройте окно. - Derazani oching." },
      { russian: "Дверь", uzbek: "Eshik", pronunciation: "Дверь", example: "Закройте дверь. - Eshikni yoping." },
      { russian: "Стол", uzbek: "Stol", pronunciation: "Стол", example: "Книга на столе. - Kitob stolda." },
      { russian: "Стул", uzbek: "Stul", pronunciation: "Стул", example: "Сядьте на стул. - Stulga o'tiring." },
      { russian: "Кровать", uzbek: "Krovat", pronunciation: "Кровать", example: "Кровать мягкая. - Krovat yumshoq." },
    ],
  },
  {
    id: "verbs",
    name: "Глаголы",
    icon: "⚡",
    words: [
      { russian: "Читать", uzbek: "O'qimoq", pronunciation: "Читать", example: "Я люблю читать книги. - Men kitob o'qishni yaxshi ko'raman." },
      { russian: "Писать", uzbek: "Yozmoq", pronunciation: "Писать", example: "Она пишет письмо. - U xat yozyapti." },
      { russian: "Говорить", uzbek: "Gapirmoq", pronunciation: "Говорить", example: "Он хорошо говорит по-русски. - U ruscha yaxshi gapiradi." },
      { russian: "Слушать", uzbek: "Eshitmoq", pronunciation: "Слушать", example: "Слушайте внимательно. - Diqqat bilan eshiting." },
      { russian: "Смотреть", uzbek: "Qaramoq", pronunciation: "Смотреть", example: "Мы смотрим фильм. - Biz kino ko'rayapmiz." },
      { russian: "Идти", uzbek: "Bormoq", pronunciation: "Идти", example: "Я иду в школу. - Men maktabga borayapman." },
      { russian: "Есть", uzbek: "Yemoq", pronunciation: "Есть", example: "Мы едим обед. - Biz tushlik yeyapmiz." },
      { russian: "Пить", uzbek: "Ichmoq", pronunciation: "Пить", example: "Я пью воду. - Men suv ichyapman." },
      { russian: "Спать", uzbek: "Uxlamoq", pronunciation: "Спать", example: "Дети спят. - Bolalar uxlayapti." },
      { russian: "Работать", uzbek: "Ishlamoq", pronunciation: "Работать", example: "Папа работает. - Otam ishlayapti." },
      { russian: "Учить", uzbek: "O'rganmoq", pronunciation: "Учить", example: "Я учу русский язык. - Men rus tilini o'rganyapman." },
      { russian: "Понимать", uzbek: "Tushunmoq", pronunciation: "Понимать", example: "Я понимаю вас. - Men sizni tushunaman." },
    ],
  },
  {
    id: "adjectives",
    name: "Прилагательные",
    icon: "✨",
    words: [
      { russian: "Большой", uzbek: "Katta", pronunciation: "Большой", example: "Большой дом. - Katta uy." },
      { russian: "Маленький", uzbek: "Kichik", pronunciation: "Маленький", example: "Маленький ребёнок. - Kichik bola." },
      { russian: "Красивый", uzbek: "Chiroyli", pronunciation: "Красивый", example: "Красивая девушка. - Chiroyli qiz." },
      { russian: "Новый", uzbek: "Yangi", pronunciation: "Новый", example: "Новая машина. - Yangi mashina." },
      { russian: "Старый", uzbek: "Eski", pronunciation: "Старый", example: "Старый город. - Eski shahar." },
      { russian: "Хороший", uzbek: "Yaxshi", pronunciation: "Хороший", example: "Хороший друг. - Yaxshi do'st." },
      { russian: "Плохой", uzbek: "Yomon", pronunciation: "Плохой", example: "Плохая погода. - Yomon ob-havo." },
      { russian: "Быстрый", uzbek: "Tez", pronunciation: "Быстрый", example: "Быстрый поезд. - Tez poyezd." },
      { russian: "Медленный", uzbek: "Sekin", pronunciation: "Медленный", example: "Медленная музыка. - Sekin musiqa." },
      { russian: "Вкусный", uzbek: "Mazali", pronunciation: "Вкусный", example: "Вкусный торт. - Mazali tort." },
    ],
  },
];

const Vocabulary = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedWord, setExpandedWord] = useState<string | null>(null);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ru-RU";
    speechSynthesis.speak(utterance);
  };

  const currentCategory = vocabularyCategories.find((c) => c.id === selectedCategory);
  
  const filteredWords = currentCategory?.words.filter(
    (word) =>
      word.russian.toLowerCase().includes(searchQuery.toLowerCase()) ||
      word.uzbek.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Словарь</h1>
          <p className="text-muted-foreground">Изучайте самые употребляемые русские слова</p>
        </div>

        {!selectedCategory ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vocabularyCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "group flex items-center gap-4 rounded-2xl bg-card p-6 text-left shadow-card transition-all duration-300",
                  "hover:shadow-xl hover:-translate-y-1 animate-fade-in"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-3xl">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.words.length} слов</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </button>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSearchQuery("");
              }}
              className="mb-6 flex items-center gap-2 text-primary hover:underline"
            >
              ← Вернуться к категориям
            </button>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                {currentCategory?.icon}
              </div>
              <h2 className="text-2xl font-bold text-foreground">{currentCategory?.name}</h2>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск слова..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl"
              />
            </div>

            <div className="space-y-3">
              {filteredWords?.map((word, index) => (
                <div
                  key={word.russian}
                  className={cn(
                    "rounded-2xl bg-card p-4 shadow-sm transition-all duration-300 animate-fade-in",
                    expandedWord === word.russian && "shadow-card"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setExpandedWord(expandedWord === word.russian ? null : word.russian)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-foreground">{word.russian}</span>
                        <span className="text-sm text-muted-foreground">({word.pronunciation})</span>
                      </div>
                      <span className="text-lg text-primary font-medium">{word.uzbek}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speak(word.russian);
                      }}
                      className="rounded-full bg-primary/10 p-3 text-primary transition-colors hover:bg-primary/20"
                    >
                      <Volume2 className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {expandedWord === word.russian && (
                    <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                      <p className="text-sm font-medium text-muted-foreground mb-2">Пример:</p>
                      <p className="text-foreground bg-muted/50 rounded-lg p-3">{word.example}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Vocabulary;