// ============================================================
// INTERNATIONALIZATION — Arabic & English Support
// ============================================================

export type Language = "en" | "ar";

export const translations = {
  en: {
    // Navigation
    nav: {
      story: "Story",
      achievements: "Achievements",
      founder: "Founder",
      gallery: "Gallery",
      coaching: "Coaching",
      reviews: "Reviews",
      contact: "Contact",
      onlineCoaching: "Online Coaching",
    },
    // Hero
    hero: {
      preTitle: "Est. 2013 — Egypt",
      tagline: "3× National Champion. The Man Who Built Calisthenics in Egypt.",
      subtext:
        "From a homemade pull-up bar in 2013 to a 1.2M+ subscriber movement — this is the story of how one athlete created an entire sport in a country.",
      ctaPrimary: "Start Online Coaching",
      ctaSecondary: "See My Story",
      scroll: "Scroll",
      sideLeft: "Arabian Pharaoh",
      sideRight: "Since 2013",
    },
    // Story
    story: {
      chapter: "Chapter I — The Journey",
      title1: "FROM ZERO",
      title2: "TO FOUNDER",
    },
    // Achievements
    achievements: {
      chapter: "Chapter II — Record",
      title1: "CHAMPIONSHIPS",
      title2: "& TITLES",
      stats: {
        titles: "National Champion Titles",
        years: "Years Competing",
        athletes: "Athletes Trained",
      },
    },
    // Founder
    founder: {
      chapter: "Chapter III — Legacy",
      title1: "FOUNDER OF",
      title2: "CALISTHENICS",
      title3: "IN EGYPT",
      quote:
        "He didn't just compete in the sport. He built it — from a homemade bar under his house to a nationally recognized federation.",
      intro:
        "Egypt had no calisthenics scene before 2013 — no community, no bars, no recognition. Omar built the first training yard, organized the first national championship, and became a founding board member of",
      federation: "the Egyptian Federation for Street Sports & Competitive Fitness",
      introEnd:
        "— the official body under Egypt's Ministry of Youth and Sports that governs calisthenics, formally established in the wake of the 2018 Pyramids Super Final.",
      points: [
        {
          title: "From Informal to Official",
          text: "Turned a backyard pull-up routine into a Ministry-recognized sport with official budgets and delegations.",
        },
        {
          title: "First Free Public Calisthenics Parks",
          text: "Successfully lobbied for public training bars in parks, starting with Heliopolis Children's Park as a pilot model.",
        },
        {
          title: "Into Millions of Homes",
          text: "Through The Calisthenics School (1.2M+ subscribers) and his COVID-era content, he's widely credited as the primary reason an entire generation across Egypt and the Arab world picked up bodyweight training.",
        },
      ],
      photoLabels: {
        federation: "Federation Event",
        community: "The Scene He Built",
      },
    },
    // La7 Gym
    la7gym: {
      chapter: "Current Base",
      title1: "TRAINING ATHLETES",
      title2: "AT LA7 GYM",
      description:
        "Omar currently coaches in-person at La7 Gym, working directly with athletes on skill progression and strength fundamentals.",
      location: "Egypt",
      inPerson: "In-Person Coaching",
    },
    // Coaching
    coaching: {
      chapter: "Online Program",
      title: "TRAIN WITH THE MAN WHO BUILT CALISTHENICS IN EGYPT",
      description: [
        "Online coaching is delivered through a dedicated app, with a training program built specifically for your level and your goals. Every training day is clearly laid out, and every exercise comes with a video showing correct form.",
        "Follow-up happens continuously — you send videos of yourself training, and Captain Omar personally reviews your form and sends back the corrections you need, like having him right there with you.",
        "Your program keeps evolving based on your progress, so you're always moving forward — never stuck. You can message directly through the app's chat anytime with questions about training or your program.",
      ],
      cta: "Start Your Online Coaching",
      dmNote: "Or DM 'Coaching' on Instagram to get started",
      features: [
        { title: "Personalized Plan", text: "Built for your level & goal" },
        { title: "Video Form-Check", text: "Direct corrections from Omar" },
        { title: "Chat Support", text: "In-app chat & program updates" },
      ],
      global: "GLOBAL ONLINE COACHING",
      fromAnywhere: "From Anywhere in the World",
    },
    // Gallery
    gallery: {
      chapter: "Photo Archive",
      title: "IN ACTION",
      filters: {
        all: "All",
        skills: "Skills",
        training: "Training",
        competitions: "Competitions",
        federation: "Federation",
      },
    },
    // Reviews
    reviews: {
      chapter: "Testimonials",
      title1: "WHAT ATHLETES",
      title2: "SAY",
    },
    // Social
    social: {
      chapter: "Connect",
      title1: "FOLLOW THE",
      title2: "JOURNEY",
      followers: "Followers",
    },
    // Footer
    footer: {
      readyToStart: "Ready to Start?",
      beginTransformation: "BEGIN YOUR TRANSFORMATION",
      navigate: "Navigate",
      follow: "Follow",
      backToTop: "BACK TO TOP",
      rights: "ALL RIGHTS RESERVED",
    },
  },
  ar: {
    // Navigation
    nav: {
      story: "القصة",
      achievements: "الإنجازات",
      founder: "المؤسس",
      gallery: "المعرض",
      coaching: "التدريب",
      reviews: "الآراء",
      contact: "تواصل",
      onlineCoaching: "تدريب أونلاين",
    },
    // Hero
    hero: {
      preTitle: "منذ 2013 — مصر",
      tagline: "بطل مصر 3 مرات. الرجل الذي بنى رياضة الكاليسثنكس في مصر.",
      subtext:
        "من عقلة حديد تحت البيت في 2013 إلى حركة بأكثر من 1.2 مليون متابع — دي قصة رياضي واحد أسس رياضة كاملة في بلد.",
      ctaPrimary: "ابدأ التدريب أونلاين",
      ctaSecondary: "شوف قصتي",
      scroll: "انزل",
      sideLeft: "الفرعون العربي",
      sideRight: "منذ 2013",
    },
    // Story
    story: {
      chapter: "الفصل الأول — الرحلة",
      title1: "من الصفر",
      title2: "إلى المؤسس",
    },
    // Achievements
    achievements: {
      chapter: "الفصل الثاني — السجل",
      title1: "البطولات",
      title2: "والألقاب",
      stats: {
        titles: "ألقاب بطل مصر",
        years: "سنوات منافسة",
        athletes: "رياضي تم تدريبهم",
      },
    },
    // Founder
    founder: {
      chapter: "الفصل الثالث — الإرث",
      title1: "مؤسس",
      title2: "الكاليسثنكس",
      title3: "في مصر",
      quote:
        "هو مش بس اتنافس في الرياضة. هو بناها — من عقلة حديد تحت بيته لاتحاد رسمي معترف به.",
      intro:
        "مصر ماكانش فيها أي مشهد كاليسثنكس قبل 2013 — لا مجتمع، لا أجهزة، لا اعتراف. عمر بنى أول ساحة تدريب، ونظم أول بطولة وطنية، وبقى عضو مؤسس في مجلس إدارة",
      federation: "الاتحاد المصري لرياضات الشوارع واللياقة التنافسية",
      introEnd:
        "— الجهة الرسمية تحت وزارة الشباب والرياضة المصرية اللي بتدير الكاليسثنكس، واللي اتأسست رسمياً بعد حدث السوبر فاينال 2018 عند الأهرامات.",
      points: [
        {
          title: "من غير رسمي لرسمي",
          text: "حوّل تمرين عقلة في البيت لرياضة معترف بها من الوزارة بميزانيات وبعثات رسمية.",
        },
        {
          title: "أول حدائق كاليسثنكس مجانية",
          text: "نجح في الضغط لتركيب أجهزة تدريب في الحدائق العامة، بداية من حديقة أطفال مصر الجديدة كنموذج تجريبي.",
        },
        {
          title: "في ملايين البيوت",
          text: "من خلال مدرسة الكاليسثنكس (أكثر من 1.2 مليون متابع) ومحتوى فترة كورونا، هو السبب الرئيسي إن جيل كامل في مصر والعالم العربي بدأ تدريب وزن الجسم.",
        },
      ],
      photoLabels: {
        federation: "حدث الاتحاد",
        community: "المجتمع اللي بناه",
      },
    },
    // La7 Gym
    la7gym: {
      chapter: "المقر الحالي",
      title1: "تدريب الرياضيين",
      title2: "في LA7 GYM",
      description:
        "عمر حالياً بيدرب وجهاً لوجه في La7 Gym، بيشتغل مباشرة مع الرياضيين على تطوير المهارات وأساسيات القوة.",
      location: "مصر",
      inPerson: "تدريب شخصي",
    },
    // Coaching
    coaching: {
      chapter: "برنامج أونلاين",
      title: "اتدرب مع الراجل اللي بنى الكاليسثنكس في مصر",
      description: [
        "التدريب الأونلاين بيتم من خلال أبليكيشن مخصوص، مع برنامج تدريبي متصمم خصيصاً لمستواك وأهدافك. كل يوم تدريب واضح، وكل تمرين معاه فيديو بيوضح الأداء الصحيح.",
        "المتابعة مستمرة — بتبعت فيديوهات لنفسك وانت بتتمرن، والكابتن عمر بيراجع أداءك شخصياً ويبعتلك التصحيحات اللي محتاجها، كأنه موجود معاك.",
        "برنامجك بيتطور باستمرار حسب تقدمك، فدايماً بتتحرك لقدام — مش واقف. تقدر تبعت رسالة في أي وقت من خلال شات الأبليكيشن لأي سؤال عن التدريب أو برنامجك.",
      ],
      cta: "ابدأ التدريب أونلاين",
      dmNote: "أو ابعت 'Coaching' على إنستجرام للبداية",
      features: [
        { title: "خطة شخصية", text: "متصممة لمستواك وهدفك" },
        { title: "مراجعة فيديو", text: "تصحيحات مباشرة من عمر" },
        { title: "دعم شات", text: "شات في الأبليكيشن وتحديثات البرنامج" },
      ],
      global: "تدريب أونلاين عالمي",
      fromAnywhere: "من أي مكان في العالم",
    },
    // Gallery
    gallery: {
      chapter: "أرشيف الصور",
      title: "في الأكشن",
      filters: {
        all: "الكل",
        skills: "المهارات",
        training: "التدريب",
        competitions: "البطولات",
        federation: "الاتحاد",
      },
    },
    // Reviews
    reviews: {
      chapter: "آراء",
      title1: "رأي",
      title2: "الرياضيين",
    },
    // Social
    social: {
      chapter: "تواصل",
      title1: "تابع",
      title2: "الرحلة",
      followers: "متابعين",
    },
    // Footer
    footer: {
      readyToStart: "جاهز تبدأ؟",
      beginTransformation: "ابدأ التحول",
      navigate: "التنقل",
      follow: "تابعنا",
      backToTop: "العودة للأعلى",
      rights: "جميع الحقوق محفوظة",
    },
  },
};

export function isRTL(lang: Language): boolean {
  return lang === "ar";
}
