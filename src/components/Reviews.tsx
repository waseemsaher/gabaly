import { SITE_CONFIG, getImage, loc } from "../config";
import { useInView } from "../hooks";
import { useLanguage } from "../LanguageContext";
import { Star, Quote } from "lucide-react";

function ReviewCard({ review, index }: { review: (typeof SITE_CONFIG.reviews)[0]; index: number }) {
  const { ref, isInView } = useInView();
  const { lang, isRTL } = useLanguage();

  const name = loc(review, "name", lang);
  const location = loc(review, "location", lang);
  const text = loc(review, "text", lang);

  return (
    <div ref={ref} className={`group relative p-6 sm:p-8 bg-white border border-[#0A0A0A]/5 hover:border-[#0A0A0A]/15 transition-all duration-700 hover-lift shadow-sm ${isInView?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`} style={{ transitionDelay:`${index*150}ms` }}>
      <div className={`mb-5 ${isRTL?'scale-x-100':'-scale-x-100'}`}><Quote size={20} className="text-[#0A0A0A]/8"/></div>
      <div className="flex gap-0.5 mb-5">{Array.from({length:5}).map((_,i)=><Star key={i} size={12} className={i<review.rating?"text-[#0A0A0A] fill-[#0A0A0A]":"text-[#B0AFA9]/30"} />)}</div>
      <p className="text-[#6B6A65] text-sm leading-[1.8] mb-8 font-light italic">"{text}"</p>
      <div className="flex items-center gap-3 border-t border-[#0A0A0A]/8 pt-5">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#0A0A0A]/10 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500"><img src={getImage(review.avatar)} alt={name} className="w-full h-full object-cover"/></div>
        <div><div className="text-[#0A0A0A] text-sm font-medium tracking-wide">{name}</div><div className="text-[#B0AFA9] text-[10px] tracking-[0.2em] uppercase">{location}</div></div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const { ref: headerRef, isInView: headerVisible } = useInView();
  const { t } = useLanguage();
  return (
    <section id="reviews" className="relative py-24 sm:py-32 lg:py-44 bg-[#EEEEE9]">
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-[#0A0A0A]/[0.015] rounded-full blur-[180px] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`mb-16 sm:mb-20 transition-all duration-1000 ${headerVisible?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-6"><div className="h-[1px] w-12 bg-[#B0AFA9]" /><span className="text-[10px] tracking-[0.5em] text-[#6B6A65] uppercase">{t.reviews.chapter}</span></div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.02em] text-[#0A0A0A] leading-[0.9]">{t.reviews.title1}</h2>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.02em] text-[#0A0A0A]/15 leading-[0.9] mt-1">{t.reviews.title2}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {SITE_CONFIG.reviews.map((review,i) => <ReviewCard key={i} review={review} index={i} />)}
        </div>
      </div>
    </section>
  );
}
