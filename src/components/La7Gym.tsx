import { getImage } from "../config";
import { useInView } from "../hooks";
import { useLanguage } from "../LanguageContext";
import { MapPin, Dumbbell } from "lucide-react";

export default function La7Gym() {
  const { ref, isInView } = useInView();
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32 bg-[#EEEEE9] overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div ref={ref} className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-center ${isRTL ? 'lg:grid-cols-[1.2fr_1fr]' : ''}`}>
          <div className={isRTL ? 'lg:order-2' : ''}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#B0AFA9]" />
              <span className="text-[10px] tracking-[0.5em] text-[#6B6A65] uppercase">{t.la7gym.chapter}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.02em] text-[#0A0A0A] leading-[1.05] mb-8">
              {t.la7gym.title1}<br /><span className="text-[#0A0A0A]/20">{t.la7gym.title2}</span>
            </h2>
            <p className="text-[#6B6A65] text-sm sm:text-[15px] leading-[1.8] font-light mb-8 max-w-md">{t.la7gym.description}</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[#6B6A65]"><MapPin size={13} /><span className="text-[10px] tracking-[0.2em] uppercase">{t.la7gym.location}</span></div>
              <div className="flex items-center gap-2 text-[#6B6A65]"><Dumbbell size={13} /><span className="text-[10px] tracking-[0.2em] uppercase">{t.la7gym.inPerson}</span></div>
            </div>
            <div className="mt-10 p-4 border border-[#0A0A0A]/10 inline-flex items-center gap-3 bg-white">
              <div className="w-8 h-8 border border-[#0A0A0A]/15 flex items-center justify-center"><span className="text-[#1E1E1C] text-[8px] font-bold tracking-wider">L7</span></div>
              <span className="text-[#6B6A65] text-xs tracking-[0.2em] uppercase">La7 Gym</span>
            </div>
          </div>
          <div className={`relative overflow-hidden group ${isRTL ? 'lg:order-1' : ''} shadow-lg`}>
            <img src={getImage("la7gym-action.jpg")} alt="Omar coaching at La7 Gym" className="w-full h-80 sm:h-[28rem] object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-[1200ms] group-hover:scale-[1.02]" />
            <div className={`absolute inset-0 bg-gradient-to-${isRTL ? 'r' : 'l'} from-transparent to-[#EEEEE9]/20`} />
            <div className={`absolute bottom-4 ${isRTL ? 'left-4' : 'right-4'} flex items-center gap-2`}>
              <div className="w-6 h-[1px] bg-[#F5F4F0]/60" />
              <span className="text-[8px] tracking-[0.3em] text-[#F5F4F0] uppercase drop-shadow">La7 Gym</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
