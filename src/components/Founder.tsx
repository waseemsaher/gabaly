import { getImage } from "../config";
import { useInView } from "../hooks";
import { useLanguage } from "../LanguageContext";
import { Building2, TreePine, Tv } from "lucide-react";

const ICONS = [Building2, TreePine, Tv];

export default function Founder() {
  const { ref: headerRef, isInView: headerVisible } = useInView();
  const { ref: quoteRef, isInView: quoteVisible } = useInView();
  const { ref: contentRef, isInView: contentVisible } = useInView();
  const { ref: photosRef, isInView: photosVisible } = useInView();
  const { t, isRTL } = useLanguage();

  return (
    <section id="founder" className="relative py-24 sm:py-32 lg:py-44 bg-[#F5F4F0] overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />
      <div className={`absolute ${isRTL ? 'left-[-5%]' : 'right-[-5%]'} top-[10%] pointer-events-none select-none hidden lg:block`}>
        <span className="font-display text-[15vw] leading-none text-[#0A0A0A]/[0.025] -rotate-12">مؤسس</span>
      </div>
      <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} bottom-1/4 w-[400px] h-[600px] bg-[#0A0A0A]/[0.015] rounded-full blur-[200px] pointer-events-none`} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`mb-20 sm:mb-28 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#B0AFA9]" />
            <span className="text-[10px] tracking-[0.5em] text-[#6B6A65] uppercase">{t.founder.chapter}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.02em] text-[#0A0A0A] leading-[0.9]">{t.founder.title1}</h2>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.02em] text-[#0A0A0A] leading-[0.9] mt-1">{t.founder.title2}</h2>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.02em] text-[#0A0A0A]/15 leading-[0.9] mt-1">{t.founder.title3}</h2>
        </div>

        <div ref={quoteRef} className={`relative mb-24 sm:mb-32 transition-all duration-1000 ${quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative max-w-4xl">
            <span className={`absolute -top-12 ${isRTL ? '-right-4' : '-left-4'} font-display text-8xl text-[#0A0A0A]/8 leading-none select-none`}>"</span>
            <div className={`border-${isRTL ? 'r' : 'l'}-2 border-[#0A0A0A]/20 ${isRTL ? 'pr-6 sm:pr-10' : 'pl-6 sm:pl-10'}`}>
              <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.02em] text-[#1E1E1C] leading-[1.3]">{t.founder.quote}</p>
            </div>
          </div>
        </div>

        <div ref={contentRef} className={`transition-all duration-1000 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-3xl mb-20">
            <p className="text-[#6B6A65] text-sm sm:text-[15px] leading-[1.9] font-light">
              {t.founder.intro}{" "}<span className="text-[#0A0A0A] font-medium">{t.founder.federation}</span>{" "}{t.founder.introEnd}
            </p>
          </div>

          <div className="space-y-0 border-t border-[#0A0A0A]/8">
            {t.founder.points.map((point, i) => {
              const Icon = ICONS[i];
              return (
                <div key={point.title} className="group grid grid-cols-[auto_1fr] sm:grid-cols-[80px_auto_1fr] gap-4 sm:gap-8 py-8 sm:py-10 border-b border-[#0A0A0A]/8 hover:bg-[#0A0A0A]/[0.02] transition-all duration-500 px-2 sm:px-4">
                  <div className="font-display text-3xl sm:text-4xl text-[#0A0A0A]/10 tracking-wider">0{i + 1}</div>
                  <div className="hidden sm:flex items-start pt-1">
                    <div className="w-10 h-10 flex items-center justify-center border border-[#0A0A0A]/10 group-hover:border-[#0A0A0A]/25 transition-colors">
                      <Icon size={16} className="text-[#6B6A65] group-hover:text-[#0A0A0A] transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-display text-lg sm:text-xl tracking-[0.05em] text-[#0A0A0A] mb-2">{point.title}</h4>
                    <p className="text-[#6B6A65] text-sm leading-relaxed max-w-lg">{point.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div ref={photosRef} className={`mt-20 sm:mt-28 grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-1000 ${photosVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="relative overflow-hidden group aspect-[4/3] hover-lift shadow-md">
            <img src={getImage("founder-federation.jpg")} alt={t.founder.photoLabels.federation} loading="lazy" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1200ms] group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent" />
            <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} flex items-center gap-3`}>
              <div className="w-6 h-[1px] bg-[#F5F4F0]/60" />
              <span className="text-[8px] tracking-[0.3em] text-[#F5F4F0] uppercase drop-shadow">{t.founder.photoLabels.federation}</span>
            </div>
          </div>
          <div className="relative overflow-hidden group aspect-[4/3] hover-lift shadow-md">
            <img src={getImage("founder-community.jpg")} alt={t.founder.photoLabels.community} loading="lazy" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1200ms] group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent" />
            <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} flex items-center gap-3`}>
              <div className="w-6 h-[1px] bg-[#F5F4F0]/60" />
              <span className="text-[8px] tracking-[0.3em] text-[#F5F4F0] uppercase drop-shadow">{t.founder.photoLabels.community}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
