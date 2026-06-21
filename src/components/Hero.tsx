import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG, getImage } from "../config";
import { useLanguage } from "../LanguageContext";
import { scrollTo } from "../hooks";

export default function Hero() {
  const { lang, t, isRTL } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => { const timer = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(timer); }, []);
  useEffect(() => {
    let ticking = false;
    const h = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("mousemove", h); 
    return () => window.removeEventListener("mousemove", h);
  }, []);

  const nicknames = lang === "ar" ? SITE_CONFIG.nicknamesAr : SITE_CONFIG.nicknames;

  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden pt-16 lg:pt-20">
      {/* Background */}
      <div className="absolute inset-[-20px] transition-transform duration-[2000ms] ease-out"
        style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px) scale(1.05)` }}>
        <img src={getImage("hero-main.jpg")} alt="Omar El-Gabaly" fetchPriority="high"
          className={`w-full h-full object-cover object-center transition-all duration-[3000ms] ${loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
          style={{ filter: "brightness(0.35) saturate(0.5) contrast(1.1)" }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#F5F4F0] via-transparent to-[#F5F4F0]/40" />
      <div className={`absolute inset-0 bg-gradient-to-r ${isRTL ? 'from-transparent via-transparent to-[#F5F4F0]/60' : 'from-[#F5F4F0]/60 via-transparent to-transparent'}`} />
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#F5F4F0] to-transparent" />

      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#0A0A0A]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute ${isRTL ? 'right-[8%]' : 'left-[8%]'} top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#0A0A0A]/5 to-transparent`} />
        <div className={`absolute ${isRTL ? 'left-[8%]' : 'right-[8%]'} top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#0A0A0A]/5 to-transparent`} />
        <div className={`absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A0A0A]/8 to-transparent transition-all duration-[2000ms] ${loaded ? "top-[60%] opacity-100" : "top-[65%] opacity-0"}`} />
      </div>

      <div className={`absolute ${isRTL ? 'left-[-2%]' : 'right-[-2%]'} top-[15%] pointer-events-none select-none hidden xl:block`}>
        <span className={`font-display text-[20vw] leading-none text-[#0A0A0A]/[0.03] transition-all duration-[3000ms] ${loaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>13</span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 ${loaded ? "opacity-100 translate-x-0" : `opacity-0 ${isRTL ? 'translate-x-8' : '-translate-x-8'}`}`} style={{ transitionDelay: "400ms" }}>
            <div className="h-[1px] w-12 bg-[#6B6A65]" />
            <span className="text-[#6B6A65] text-[10px] tracking-[0.5em] uppercase">{t.hero.preTitle}</span>
          </div>

          {lang === "ar" ? (
            <div className="overflow-hidden mb-3">
              <h1 className={`font-display text-[clamp(2rem,8vw,5.5rem)] leading-[1.1] tracking-[0.02em] text-[#0A0A0A] transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`} style={{ transitionDelay: "500ms" }}>{SITE_CONFIG.nameAr}</h1>
            </div>
          ) : (
            <>
              <div className="overflow-hidden mb-2">
                <h1 className={`font-display text-[clamp(2.5rem,10vw,7rem)] leading-[0.85] tracking-[0.02em] text-[#0A0A0A] transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`} style={{ transitionDelay: "500ms" }}>OMAR</h1>
              </div>
              <div className="overflow-hidden mb-3">
                <h1 className={`font-display text-[clamp(2.5rem,10vw,7rem)] leading-[0.85] tracking-[0.02em] text-[#0A0A0A] transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`} style={{ transitionDelay: "650ms" }}>EL-GABALY</h1>
              </div>
              <div className={`mb-6 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "800ms" }}>
                <span className="text-[#6B6A65] text-2xl sm:text-3xl md:text-4xl" style={{ fontFamily: "serif" }}>{SITE_CONFIG.nameAr}</span>
              </div>
            </>
          )}

          <div className={`flex flex-wrap gap-2 mb-8 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "900ms" }}>
            {nicknames.map((nick) => (
              <span key={nick} className="px-3 py-1 border border-[#0A0A0A]/15 text-[#1E1E1C] text-[8px] sm:text-[9px] tracking-[0.25em] uppercase hover:border-[#0A0A0A]/40 hover:bg-[#0A0A0A]/5 transition-all duration-500 cursor-default">{nick}</span>
            ))}
          </div>

          <div className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "1000ms" }}>
            <p className="text-[#1E1E1C] text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">{t.hero.tagline}</p>
          </div>

          <div className={`mt-4 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "1100ms" }}>
            <p className="text-[#6B6A65] text-sm leading-relaxed max-w-lg">{t.hero.subtext}</p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-3 mt-10 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "1200ms" }}>
            <button onClick={() => scrollTo("story")} className="px-8 py-4 bg-[#0A0A0A] text-[#F5F4F0] text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-[#1E1E1C] transition-all duration-500 hover:shadow-[0_0_40px_rgba(10,10,10,0.2)] text-center cursor-pointer">
              {t.hero.ctaSecondary}
            </button>
            <a href={SITE_CONFIG.coachingLink} target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 border border-[#0A0A0A]/20 text-[#1E1E1C] text-[10px] tracking-[0.25em] uppercase font-medium hover:border-[#0A0A0A]/50 hover:bg-[#0A0A0A]/5 transition-all duration-500 text-center">
              {t.hero.ctaPrimary}
            </a>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-8 ${isRTL ? 'left-8 sm:left-12' : 'right-8 sm:right-12'} flex flex-col items-center gap-3 transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "1500ms" }}>
        <button onClick={() => scrollTo("story")} className="flex flex-col items-center gap-2 text-[#6B6A65] hover:text-[#0A0A0A] transition-colors cursor-pointer">
          <span className="text-[8px] tracking-[0.4em] uppercase" style={{ writingMode: "vertical-rl" }}>{t.hero.scroll}</span>
          <ChevronDown size={14} className="animate-bounce" />
        </button>
      </div>

      <div className={`hidden xl:flex absolute ${isRTL ? 'right-6' : 'left-6'} top-1/2 -translate-y-1/2 items-center gap-3 ${isRTL ? 'rotate-90' : '-rotate-90'} origin-center`}>
        <div className="h-[1px] w-8 bg-[#B0AFA9]" />
        <span className="text-[8px] tracking-[0.5em] text-[#B0AFA9] uppercase whitespace-nowrap">{t.hero.sideLeft}</span>
      </div>
      <div className={`hidden xl:flex absolute ${isRTL ? 'left-6' : 'right-6'} top-1/2 -translate-y-1/2 items-center gap-3 ${isRTL ? '-rotate-90' : 'rotate-90'} origin-center`}>
        <div className="h-[1px] w-8 bg-[#B0AFA9]" />
        <span className="text-[8px] tracking-[0.5em] text-[#B0AFA9] uppercase whitespace-nowrap">{t.hero.sideRight}</span>
      </div>
    </section>
  );
}
