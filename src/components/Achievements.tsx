import { SITE_CONFIG, getImage, loc } from "../config";
import { useInView, useCounter } from "../hooks";
import { useLanguage } from "../LanguageContext";
import { Medal } from "lucide-react";

function StatCard({ stat, index, label }: { stat: (typeof SITE_CONFIG.stats)[0]; index: number; label: string }) {
  const { ref, isInView } = useInView();
  const count = useCounter(stat.value, 2500, isInView);
  return (
    <div ref={ref} className={`relative text-center p-8 sm:p-10 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${index * 150}ms` }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[8rem] sm:text-[10rem] text-[#0A0A0A]/[0.03] leading-none">{stat.value}{stat.suffix}</span>
      </div>
      <div className="relative z-10">
        <div className="font-display text-6xl sm:text-7xl md:text-8xl text-[#0A0A0A] tracking-wider leading-none">
          {count.toLocaleString()}<span className="text-[#B0AFA9]">{stat.suffix}</span>
        </div>
        <div className="h-[1px] w-12 bg-[#0A0A0A]/15 mx-auto my-4" />
        <div className="text-[10px] sm:text-xs tracking-[0.3em] text-[#6B6A65] uppercase">{label}</div>
      </div>
    </div>
  );
}

function AchievementCard({ achievement, index }: { achievement: (typeof SITE_CONFIG.achievements)[0]; index: number }) {
  const { ref, isInView } = useInView();
  const { lang, isRTL } = useLanguage();
  const isGold = achievement.result.includes("1st");

  const title = loc(achievement, "title", lang);
  const subtitle = loc(achievement, "subtitle", lang);
  const result = loc(achievement, "result", lang);
  const detail = loc(achievement, "detail", lang);

  return (
    <div ref={ref} className={`group flex-shrink-0 w-[85vw] sm:w-[400px] md:w-auto transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="relative h-full bg-white border border-[#0A0A0A]/5 hover:border-[#0A0A0A]/15 transition-all duration-700 overflow-hidden hover-lift shadow-sm">
        <div className="relative h-52 sm:h-60 overflow-hidden">
          <img src={getImage(achievement.image)} alt={title} loading="lazy" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[1200ms] group-hover:scale-105" style={{ filter: "brightness(0.6)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
          <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} p-5 flex items-start justify-between w-full`}>
            <span className="font-display text-4xl tracking-wider text-[#F5F4F0]/90 drop-shadow">{achievement.year}</span>
            {isGold && <div className="p-2 bg-[#F5F4F0]/20 backdrop-blur-sm"><Medal size={16} className="text-[#F5F4F0]" /></div>}
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <h4 className="font-display text-base sm:text-lg tracking-[0.05em] text-[#0A0A0A] mb-2 leading-snug">{title}</h4>
          {subtitle && <p className="text-[9px] tracking-[0.25em] text-[#B0AFA9] uppercase mb-4">{subtitle}</p>}
          <div className="border-t border-[#0A0A0A]/8 pt-4 mt-auto">
            <div className="text-[#1E1E1C] text-sm font-medium mb-1">{result}</div>
            <p className="text-[#6B6A65] text-xs leading-relaxed">{detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  const { ref: headerRef, isInView: headerVisible } = useInView();
  const { t } = useLanguage();
  const statLabels = [t.achievements.stats.titles, t.achievements.stats.years, t.achievements.stats.athletes];

  return (
    <section id="achievements" className="relative py-24 sm:py-32 lg:py-44 bg-[#EEEEE9]">
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-[#0A0A0A]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className={`mb-16 sm:mb-24 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#B0AFA9]" />
              <span className="text-[10px] tracking-[0.5em] text-[#6B6A65] uppercase">{t.achievements.chapter}</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.02em] text-[#0A0A0A] leading-[0.9]">{t.achievements.title1}</h2>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.02em] text-[#0A0A0A]/15 leading-[0.9] mt-1">{t.achievements.title2}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-b border-[#0A0A0A]/8 mb-16 sm:mb-24">
            {SITE_CONFIG.stats.map((stat, i) => (
              <div key={stat.label} className={`${i > 0 ? "border-t sm:border-t-0 sm:border-l border-[#0A0A0A]/8" : ""}`}>
                <StatCard stat={stat} index={i} label={statLabels[i]} />
              </div>
            ))}
          </div>
        </div>

        <div className="md:max-w-7xl md:mx-auto">
          <div className="flex md:hidden gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
            {SITE_CONFIG.achievements.map((ach, i) => (
              <div key={`${ach.year}-${i}`} className="snap-center"><AchievementCard achievement={ach} index={i} /></div>
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-6 lg:px-8">
            {SITE_CONFIG.achievements.map((ach, i) => <AchievementCard key={`${ach.year}-${i}`} achievement={ach} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
