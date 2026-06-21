import { SITE_CONFIG } from "../config";
import { useInView } from "../hooks";
import { useLanguage } from "../LanguageContext";
import { ExternalLink } from "lucide-react";

const PLATFORM_DATA = [
  { name:"Instagram", key:"instagram" as const, icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="m16 11.37a4 4 0 1 1-7.97 .63 4 4 0 0 1 7.97-.63z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, handle:"@arabianpharaoh" },
  { name:"YouTube", key:"youtube" as const, icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>, handle:"The Calisthenics School" },
  { name:"TikTok", key:"tiktok" as const, icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>, handle:"@omarlgabaly" },
  { name:"Facebook", key:"facebook" as const, icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, handle:"OmarLGabaly" },
];

function SocialCard({ platform, index }: { platform: (typeof PLATFORM_DATA)[0]; index: number }) {
  const { ref, isInView } = useInView();
  const { t, isRTL } = useLanguage();
  const social = SITE_CONFIG.socialLinks[platform.key];
  return (
    <div ref={ref} className={`transition-all duration-700 ${isInView?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`} style={{ transitionDelay:`${index*100}ms` }}>
      <a href={social.url} target="_blank" rel="noopener noreferrer" className="group relative block p-6 sm:p-8 bg-white border border-[#0A0A0A]/5 hover:border-[#0A0A0A]/15 transition-all duration-500 overflow-hidden hover-lift shadow-sm">
        <div className={`absolute ${isRTL?'-left-4':'-right-4'} -bottom-4 pointer-events-none select-none`}><span className="font-display text-6xl text-[#0A0A0A]/[0.03] tracking-wider">{platform.name.slice(0,2).toUpperCase()}</span></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="text-[#B0AFA9] group-hover:text-[#0A0A0A] transition-colors duration-300">{platform.icon}</div>
              <h4 className="font-display text-base tracking-[0.1em] text-[#0A0A0A]">{platform.name}</h4>
            </div>
            <ExternalLink size={12} className="text-[#0A0A0A]/0 group-hover:text-[#B0AFA9] transition-all duration-300"/>
          </div>
          <p className="text-[#B0AFA9] text-xs mb-4">{platform.handle}</p>
          {social.followers && (
            <div className="border-t border-[#0A0A0A]/8 pt-4">
              <span className="text-[9px] tracking-[0.3em] text-[#B0AFA9] uppercase">{t.social.followers}</span>
              <div className="font-display text-4xl sm:text-5xl tracking-wider text-[#0A0A0A] mt-1">{social.followers}</div>
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

export default function Social() {
  const { ref: headerRef, isInView: headerVisible } = useInView();
  const { t } = useLanguage();
  return (
    <section id="social" className="relative py-24 sm:py-32 lg:py-44 bg-[#F5F4F0]">
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute left-0 top-1/3 w-[400px] h-[500px] bg-[#0A0A0A]/[0.012] rounded-full blur-[180px] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`mb-16 sm:mb-20 transition-all duration-1000 ${headerVisible?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-6"><div className="h-[1px] w-12 bg-[#B0AFA9]" /><span className="text-[10px] tracking-[0.5em] text-[#6B6A65] uppercase">{t.social.chapter}</span></div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.02em] text-[#0A0A0A] leading-[0.9]">{t.social.title1}</h2>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.02em] text-[#0A0A0A]/15 leading-[0.9] mt-1">{t.social.title2}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLATFORM_DATA.map((p,i)=><SocialCard key={p.name} platform={p} index={i}/>)}
        </div>
      </div>
    </section>
  );
}
