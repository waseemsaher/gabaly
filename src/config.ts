// ============================================================
// SITE CONFIG — All real data for Omar El-Gabaly's portfolio
// Edit this file to update content across the entire site.
// ============================================================

import type { Language } from "./i18n";

export function loc<T extends Record<string, unknown>>(obj: T, field: string, lang: Language): string {
  if (lang === "ar" && `${field}Ar` in obj) return obj[`${field}Ar`] as string;
  return obj[field as keyof T] as string;
}

export const SITE_CONFIG = {
  name: "Omar El-Gabaly",
  nameAr: "عمر الجبلي",
  nameDisplay: "OMAR EL-GABALY",
  nameDisplayAr: "عمر الجبلي",
  nicknames: [
    "ARABIAN PHARAOH",
    "KING OF CALISTHENICS",
    "FOUNDER OF CALISTHENICS IN EGYPT 🇪🇬",
  ],
  nicknamesAr: [
    "الفرعون العربي",
    "ملك الكاليسثنكس",
    "مؤسس الكاليسثنكس في مصر 🇪🇬",
  ],
  coachingLink:
    "https://docs.google.com/forms/d/e/1FAIpQLScWnOf058g84Ntj4wvLpewx0cX6iL2wBvBrrYAT0hWX1k5sYw/viewform",
  instagramHandle: "@arabianpharaoh",
  socialLinks: {
    instagram: {
      url: "https://www.instagram.com/arabianpharaoh/",
      followers: "528K",
    },
    youtube: {
      url: "https://www.youtube.com/@thecalisthenicschool",
      followers: "1.3M",
    },
    tiktok: {
      url: "https://www.tiktok.com/@omarlgabaly",
      followers: "1.2M",
    },
    facebook: {
      url: "https://www.facebook.com/OmarLGabaly",
      followers: "1.9M",
    },
  },
  stats: [
    { label: "National Champion Titles", value: 3, suffix: "" },
    { label: "Years Competing", value: 12, suffix: "+" },
    { label: "Athletes Trained", value: 10000, suffix: "+" },
  ],
  achievements: [
    {
      year: 2015,
      title: "Egypt National Championship",
      titleAr: "بطولة مصر الوطنية",
      subtitle: "First-ever edition",
      subtitleAr: "النسخة الأولى على الإطلاق",
      result: "🥇 1st Place",
      resultAr: "🥇 المركز الأول",
      detail: "Held in a self-built yard in Al-Hawamdeya, 28 competitors",
      detailAr: "أُقيمت في ساحة بناها بنفسه في الحوامدية، 28 متسابق",
      image: "achievement-2015-nationals.jpg",
    },
    {
      year: 2015,
      title: "Street Workout World Championship — Moscow",
      titleAr: "بطولة العالم للتمارين في الشوارع — موسكو",
      subtitle: "International debut",
      subtitleAr: "أول مشاركة دولية",
      result: "22nd of 70 countries",
      resultAr: "المركز 22 من 70 دولة",
      detail: "Egypt's first-ever international appearance in calisthenics",
      detailAr: "أول ظهور دولي لمصر في رياضة الكاليسثنكس",
      image: "achievement-2015-moscow.jpg",
    },
    {
      year: 2016,
      title: "Street Workout World Cup Stage — Egypt",
      titleAr: "مرحلة كأس العالم للتمارين في الشوارع — مصر",
      subtitle: "Pyramids of Giza",
      subtitleAr: "أهرامات الجيزة",
      result: "🥈 2nd Place",
      resultAr: "🥈 المركز الثاني",
      detail: "Qualified for finals",
      detailAr: "تأهل للنهائيات",
      image: "achievement-2016-worldcup.jpg",
    },
    {
      year: 2017,
      title: "World Cup Stage — Bahrain",
      titleAr: "مرحلة كأس العالم — البحرين",
      subtitle: "International qualifier",
      subtitleAr: "تصفيات دولية",
      result: "Qualified for finals",
      resultAr: "تأهل للنهائيات",
      detail: "Qualified for finals + $1,000 prize",
      detailAr: "تأهل للنهائيات + جائزة 1,000 دولار",
      image: "achievement-2017-bahrain.jpg",
    },
    {
      year: 2018,
      title: "Street Workout World Cup Super Final — Egypt",
      titleAr: "السوبر فاينال لكأس العالم — مصر",
      subtitle: "Pyramids of Giza",
      subtitleAr: "أهرامات الجيزة",
      result: "Top-15 / Top-50 World",
      resultAr: "ضمن أفضل 15 / أفضل 50 عالمياً",
      detail: "Competed on home soil at the sport's biggest-ever event; career top-15 / top-50 world rankings",
      detailAr: "نافس على أرضه في أكبر حدث في تاريخ الرياضة؛ تصنيف عالمي ضمن أفضل 15 / أفضل 50",
      image: "achievement-2018-superfinal.jpg",
    },
  ],
  storyBeats: [
    {
      id: "spark",
      heading: "The Spark",
      headingAr: "الشرارة",
      year: "2013",
      text: `He found calisthenics by accident on YouTube while watching parkour videos in his last year of high school — a clip of someone holding a Front Lever, looking like "a solid bar of iron" floating in the air. He'd been a swimmer for years but was skinny and had no time for the gym during exam season. That one clip changed everything.`,
      textAr: `اكتشف الكاليسثنكس بالصدفة على يوتيوب وهو بيتفرج على فيديوهات باركور في آخر سنة ثانوي — كليب لحد ماسك فرونت ليفر، شكله زي "قضيب حديد" معلق في الهوا. كان سبّاح لسنين بس كان نحيف ومعندوش وقت للجيم في فترة الامتحانات. الكليب ده غيّر كل حاجة.`,
      image: "story-early-1.jpg",
    },
    {
      id: "bar",
      heading: "The Homemade Bar",
      headingAr: "العقلة المحلية الصنع",
      year: "2013",
      text: "There were no parks or bars built for this in Egypt. His father — an engineer — helped him weld and build a pull-up bar under their house. He trained alone, filming himself on an old laptop camera to self-correct his form, learning entirely through trial and error.",
      textAr: "مكانش فيه حدائق أو أجهزة مبنية للرياضة دي في مصر. أبوه — مهندس — ساعده يلحم ويبني عقلة تحت البيت. اتمرن لوحده، بيصور نفسه بكاميرا لابتوب قديمة عشان يصلح أداءه، وتعلم كل حاجة بالتجربة والخطأ.",
      image: null,
    },
    {
      id: "community",
      heading: "Building the Community",
      headingAr: "بناء المجتمع",
      year: "2014",
      text: "Friends started joining him under the house. When the space ran out, he and his friends cleared an abandoned plot of land owned by his family in Al-Hawamdeya — once literally a dumping ground — and self-funded the construction of Egypt's first real calisthenics training yard.",
      textAr: "أصحابه بدأوا ينضموا له تحت البيت. لما المكان ضاق، هو وأصحابه نضفوا قطعة أرض مهجورة ملك عيلته في الحوامدية — كانت حرفياً مقلب زبالة — وموّلوا بناء أول ساحة تدريب كاليسثنكس حقيقية في مصر.",
      image: "story-community.jpg",
    },
    {
      id: "championship",
      heading: "Egypt's First Championship",
      headingAr: "أول بطولة في مصر",
      year: "2015",
      text: "He organized Egypt's first national calisthenics championship in that same yard, on a budget of just 900 EGP, with 28 competitors. He won it.",
      textAr: "نظّم أول بطولة كاليسثنكس وطنية في مصر في نفس الساحة، بميزانية 900 جنيه بس، و28 متسابق. وكسبها.",
      image: null,
    },
    {
      id: "global",
      heading: "Going Global",
      headingAr: "الانطلاق العالمي",
      year: "2015",
      text: "That win got him invited to represent Egypt at the Street Workout World Championship in Moscow later that year — Egypt's first-ever appearance on that stage. He placed 22nd out of 70 countries, despite competing injured. He came home and the sport's credibility in Egypt exploded.",
      textAr: "الفوز ده خلاه يتدعى يمثل مصر في بطولة العالم للتمارين في الشوارع في موسكو في نفس السنة — أول ظهور لمصر على المسرح ده. جاب المركز 22 من 70 دولة، رغم إنه كان مصاب. رجع مصر ومصداقية الرياضة انفجرت.",
      image: null,
    },
    {
      id: "pyramids",
      heading: "The Pyramids Era",
      headingAr: "عصر الأهرامات",
      year: "2016–2018",
      text: 'He helped organize World Cup qualifier stages under the Pyramids of Giza, bringing in international judges and the head of the world federation. In 2018, Egypt hosted the Street Workout World Cup Super Final — the biggest event in the sport\'s history at the time — at the foot of the Pyramids. This is the event that pushed calisthenics into mainstream Egyptian media and led directly to official federation recognition.',
      textAr: 'ساعد في تنظيم مراحل تصفيات كأس العالم تحت أهرامات الجيزة، وجاب حكام دوليين ورئيس الاتحاد العالمي. في 2018، مصر استضافت السوبر فاينال لكأس العالم — أكبر حدث في تاريخ الرياضة وقتها — عند سفح الأهرامات. الحدث ده هو اللي دخّل الكاليسثنكس في الإعلام المصري وأدى مباشرة للاعتراف الرسمي بالاتحاد.',
      image: "story-pyramids.jpg",
    },
    {
      id: "covid",
      heading: "The COVID Explosion",
      headingAr: "انفجار كوفيد",
      year: "2020",
      text: `Years earlier, in 2015, he'd started posting workout videos to a small Facebook page that took 2.5 years to reach just 6,000 followers. A pivotal moment came in 2017 when Facebook invited him to a content creator conference — surrounded by creators with millions of followers, he was told: "We see real potential in you — if you focus, you'll get somewhere big." That reset his entire approach to content. He built a structured home-workout video series across 3 difficulty levels, filming each movement up to 13 times for precision, and uploaded it to YouTube — where it sat almost dormant for years. Then COVID hit. Gyms closed, people searched for home workouts, and YouTube's algorithm surfaced his exact series at the exact right moment. Videos that once got a trickle of views started pulling 48,000–50,000 views within hours of posting. The channel rocketed past 200,000 subscribers during lockdown alone — the spark that grew into The Calisthenics School, now past 1.2 million subscribers.`,
      textAr: `قبلها بسنين، في 2015، بدأ ينزل فيديوهات تمارين على صفحة فيسبوك صغيرة أخدت سنتين ونص عشان توصل 6,000 متابع بس. لحظة محورية جت في 2017 لما فيسبوك دعاه لمؤتمر صناع المحتوى — وسط صناع محتوى بملايين المتابعين، قالوله: "احنا شايفين فيك إمكانيات حقيقية — لو ركزت، هتوصل لمكان كبير." الكلام ده غيّر طريقة تفكيره في المحتوى بالكامل. بنى سلسلة فيديوهات تمارين منزلية منظمة على 3 مستويات صعوبة، بيصور كل حركة لحد 13 مرة عشان الدقة، ورفعها على يوتيوب — وفضلت شبه مش موجودة لسنين. بعدين كوفيد ضرب. الجيمات قفلت، الناس بدأت تدور على تمارين منزلية، وخوارزمية يوتيوب طلّعت سلسلته بالظبط في اللحظة المناسبة. فيديوهات كانت بتجيب مشاهدات قليلة بدأت تجيب 48,000–50,000 مشاهدة في ساعات من النشر. القناة طارت فوق 200,000 متابع في فترة الحظر لوحدها — الشرارة اللي كبرت وبقت مدرسة الكاليسثنكس، اللي عدّت 1.2 مليون متابع.`,
      image: null,
      videoEmbed: "https://www.youtube.com/embed/Ydq5fEcxmkQ",
    },
    {
      id: "setbacks",
      heading: "Through the Setbacks",
      headingAr: "رغم العقبات",
      year: "Ongoing",
      yearAr: "مستمر",
      text: "The journey wasn't a straight line — periods of injury and burnout (including a 1.5-year break before the 2018 Super Final, during which he rebuilt in just 2 months, training 6 hours a day and gaining 10kg of muscle to compete again) are part of the story, not hidden from it.",
      textAr: "الرحلة مكانتش خط مستقيم — فترات إصابة وإرهاق (منها توقف سنة ونص قبل السوبر فاينال 2018، واللي رجع فيها في شهرين بس، بيتمرن 6 ساعات في اليوم وزاد 10 كيلو عضل عشان ينافس تاني) جزء من القصة، مش مخبية.",
      image: null,
    },
  ],
  galleryImages: [
    { src: "gallery-skill-1.jpg", category: "Skills", alt: "Planche hold" },
    { src: "gallery-skill-2.jpg", category: "Skills", alt: "Front lever" },
    { src: "gallery-skill-3.jpg", category: "Skills", alt: "Human flag" },
    { src: "gallery-skill-4.jpg", category: "Skills", alt: "Muscle up" },
    { src: "gallery-skill-5.jpg", category: "Skills", alt: "Handstand" },
    { src: "gallery-training-1.jpg", category: "Training", alt: "Training session" },
    { src: "gallery-training-2.jpg", category: "Training", alt: "Training session" },
    { src: "gallery-training-3.jpg", category: "Training", alt: "Training session" },
    { src: "gallery-training-4.jpg", category: "Training", alt: "Training session" },
    { src: "gallery-competition-1.jpg", category: "Competitions", alt: "Competition" },
    { src: "gallery-competition-2.jpg", category: "Competitions", alt: "Competition" },
    { src: "gallery-competition-3.jpg", category: "Competitions", alt: "Competition" },
    { src: "gallery-competition-4.jpg", category: "Competitions", alt: "Competition" },
    { src: "gallery-community-1.jpg", category: "Federation", alt: "Federation event" },
    { src: "gallery-community-2.jpg", category: "Federation", alt: "Community training" },
    { src: "gallery-portrait-1.jpg", category: "All", alt: "Portrait" },
    { src: "gallery-portrait-2.jpg", category: "All", alt: "Portrait" },
  ],
  reviews: [
    {
      name: "[EDIT: Client Name]",
      nameAr: "[عدّل: اسم العميل]",
      location: "[EDIT: City/Country]",
      locationAr: "[عدّل: المدينة/البلد]",
      avatar: "review-avatar-1.jpg",
      rating: 5,
      text: "[EDIT: Real testimonial text from a coaching client — describe how the coaching program helped them achieve their goals]",
      textAr: "[عدّل: نص شهادة حقيقي من عميل تدريب — اوصف إزاي برنامج التدريب ساعده يحقق أهدافه]",
    },
    {
      name: "[EDIT: Client Name]",
      nameAr: "[عدّل: اسم العميل]",
      location: "[EDIT: City/Country]",
      locationAr: "[عدّل: المدينة/البلد]",
      avatar: "review-avatar-2.jpg",
      rating: 5,
      text: "[EDIT: Real testimonial text from a coaching client — describe their experience with the personalized program and video feedback]",
      textAr: "[عدّل: نص شهادة حقيقي من عميل تدريب — اوصف تجربته مع البرنامج الشخصي ومراجعة الفيديو]",
    },
    {
      name: "[EDIT: Client Name]",
      nameAr: "[عدّل: اسم العميل]",
      location: "[EDIT: City/Country]",
      locationAr: "[عدّل: المدينة/البلد]",
      avatar: "review-avatar-3.jpg",
      rating: 5,
      text: "[EDIT: Real testimonial text from a coaching client — describe how they progressed from beginner to achieving calisthenics skills]",
      textAr: "[عدّل: نص شهادة حقيقي من عميل تدريب — اوصف إزاي تطور من مبتدئ لتحقيق مهارات كاليسثنكس]",
    },
  ],
};

export const PLACEHOLDER_IMAGES: Record<string, string> = {
  "review-avatar-1.jpg":
    "https://images.pexels.com/photos/8611341/pexels-photo-8611341.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
  "review-avatar-2.jpg":
    "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
  "review-avatar-3.jpg":
    "https://images.pexels.com/photos/30283458/pexels-photo-30283458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
};

export function getImage(filename: string): string {
  return PLACEHOLDER_IMAGES[filename] || `/images/${filename}`;
}
