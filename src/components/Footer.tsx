import { SITE_CONFIG } from "../config";
import { useLanguage } from "../LanguageContext";
import { ArrowUp } from "lucide-react";
import { scrollTo } from "../hooks";

export default function Footer() {
  const { lang, t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();
  const displayName = lang === "ar" ? SITE_CONFIG.nameAr : "OMAR EL-GABALY";

  const NAV_LINKS = [
    { label: t.nav.story, section: "story" },
    { label: t.nav.achievements, section: "achievements" },
    { label: t.nav.founder, section: "founder" },
    { label: t.nav.coaching, section: "coaching" },
    { label: t.nav.reviews, section: "reviews" },
    { label: t.nav.contact, section: "social" },
  ];

  return (
    <footer className="relative bg-[#0A0A0A] text-[#F5F4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className={`grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 md:gap-8 ${isRTL ? 'md:grid-cols-[1fr_1fr_1.5fr]' : ''}`}>
          <div className={isRTL ? 'md:order-3' : ''}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[#F5F4F0]/30 flex items-center justify-center font-display text-base tracking-wider text-[#F5F4F0]">OG</div>
              <div>
                <div className="font-display text-base tracking-[0.15em] text-[#F5F4F0]">{displayName}</div>
                {lang !== "ar" && <div className="text-[#6B6A65] text-sm" style={{ fontFamily: "serif" }}>{SITE_CONFIG.nameAr}</div>}
              </div>
            </div>
            <p className="text-[#6B6A65] text-xs leading-relaxed max-w-xs">{t.hero.tagline}</p>
          </div>

          <div className={isRTL ? 'md:order-2' : ''}>
            <h5 className="text-[10px] tracking-[0.3em] text-[#6B6A65]/70 uppercase mb-5">{t.footer.navigate}</h5>
            <div className="space-y-3 flex flex-col items-start">
              {NAV_LINKS.map(link=><button key={link.section} onClick={() => scrollTo(link.section)} className="block text-left text-[#B0AFA9] text-xs tracking-[0.1em] hover:text-[#F5F4F0] transition-colors duration-300">{link.label}</button>)}
            </div>
          </div>

          <div className={isRTL ? 'md:order-1' : ''}>
            <h5 className="text-[10px] tracking-[0.3em] text-[#6B6A65]/70 uppercase mb-5">{t.footer.follow}</h5>
            <div className="space-y-3">
              {Object.entries(SITE_CONFIG.socialLinks).map(([platform,data])=>(
                <a key={platform} href={data.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-[#B0AFA9] text-xs tracking-[0.1em] hover:text-[#F5F4F0] transition-colors duration-300">
                  <span className="capitalize">{platform}</span>
                  {data.followers && <span className="text-[#6B6A65] text-[10px]">{data.followers}</span>}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#F5F4F0]/8 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6B6A65]/50 text-[10px] tracking-[0.15em]">© {currentYear} {displayName}. {t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/waseemsaher" target="_blank" rel="noopener noreferrer" className="text-[#6B6A65]/40 text-[10px] tracking-[0.15em] hover:text-[#B0AFA9] transition-colors">
              {lang === "ar" ? "تطوير Waseem" : "Developed by Waseem"}
            </a>
            <button onClick={() => scrollTo("hero")} className="group flex items-center gap-2 text-[#6B6A65]/40 text-[10px] tracking-[0.15em] hover:text-[#B0AFA9] transition-colors cursor-pointer">
              <span>{t.footer.backToTop}</span>
              <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform"/>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
