import { SITE_CONFIG, getImage } from "../config";
import { useInView } from "../hooks";
import { useLanguage } from "../LanguageContext";
import { Smartphone, Video, MessageCircle, ArrowRight } from "lucide-react";

const ICONS = [Smartphone, Video, MessageCircle];

export default function Coaching() {
  const { ref, isInView } = useInView();
  const { t, isRTL } = useLanguage();

  return (
    <section id="coaching" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Dark inversion section — this one stays dark for contrast break */}
      <div className="absolute inset-0">
        <img src={getImage("hero-main.jpg")} alt="" className="w-full h-full object-cover" style={{ filter: "brightness(0.12) saturate(0.2) contrast(1.1)" }} />
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
      </div>
      <div className="absolute inset-0 grain-overlay" />

      <div ref={ref} className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className={`grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 ${isRTL ? 'lg:grid-cols-[1fr_1.2fr]' : ''}`}>
          <div className={isRTL ? 'lg:order-2' : ''}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#B0AFA9]/50" />
              <span className="text-[10px] tracking-[0.5em] text-[#B0AFA9] uppercase">{t.coaching.chapter}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-[0.02em] text-[#F5F4F0] leading-[1.1] mb-8">{t.coaching.title}</h2>
            <div className="space-y-4 text-[#B0AFA9] text-sm sm:text-[15px] leading-[1.9] font-light mb-10">
              {t.coaching.description.map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <div>
              <a href={SITE_CONFIG.coachingLink} target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3 border border-[#F5F4F0]/30 text-[#F5F4F0] text-[10px] tracking-[0.25em] uppercase font-medium transition-all duration-500 hover:border-[#F5F4F0]/70 hover:bg-[#F5F4F0]/5">
                <span>{t.coaching.cta}</span>
                <ArrowRight size={14} className={`group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
              <p className="text-[#6B6A65] text-xs mt-4">
                {t.coaching.dmNote.split("Instagram")[0]}
                <a href={SITE_CONFIG.socialLinks.instagram.url} target="_blank" rel="noopener noreferrer" className="text-[#B0AFA9] hover:text-[#F5F4F0] transition-colors underline underline-offset-4 decoration-[#6B6A65]/30">Instagram</a>
                {t.coaching.dmNote.split("Instagram")[1]}
              </p>
            </div>
          </div>

          <div className={`space-y-4 ${isRTL ? 'lg:order-1' : ''}`}>
            {t.coaching.features.map((feature, i) => {
              const Icon = ICONS[i];
              return (
                <div key={feature.title} className="group relative p-6 sm:p-7 bg-[#F5F4F0]/5 backdrop-blur-sm border border-[#F5F4F0]/8 hover:border-[#F5F4F0]/20 transition-all duration-500">
                  <div className="flex items-start gap-5">
                    <span className="font-display text-2xl text-[#F5F4F0]/10 tracking-wider flex-shrink-0 mt-1">0{i + 1}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon size={16} className="text-[#B0AFA9] group-hover:text-[#F5F4F0] transition-colors" />
                        <h4 className="font-display text-base tracking-[0.08em] text-[#F5F4F0]">{feature.title}</h4>
                      </div>
                      <p className="text-[#6B6A65] text-sm">{feature.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="p-5 text-center border border-dashed border-[#F5F4F0]/10">
              <p className="text-[10px] tracking-[0.4em] text-[#6B6A65] uppercase">{t.coaching.fromAnywhere}</p>
              <p className="font-display text-base tracking-[0.1em] text-[#B0AFA9] mt-2">🌍 {t.coaching.global}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
