import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { SITE_CONFIG } from "../config";
import { useScrollPosition, useActiveSection, scrollTo } from "../hooks";
import { useLanguage } from "../LanguageContext";

const SECTION_IDS = [
  "story", "achievements", "founder", "coaching", "reviews", "social",
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollPosition();
  const activeSection = useActiveSection(SECTION_IDS);
  const scrolled = scrollY > 60;

  const NAV_LINKS = [
    { label: t.nav.story, section: "story" },
    { label: t.nav.achievements, section: "achievements" },
    { label: t.nav.founder, section: "founder" },
    { label: t.nav.coaching, section: "coaching" },
    { label: t.nav.reviews, section: "reviews" },
    { label: t.nav.contact, section: "social" },
  ];

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F5F4F0]/95 backdrop-blur-md border-b border-[#0A0A0A]/8"
          : "bg-gradient-to-b from-[#F5F4F0]/80 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={() => { scrollTo("hero"); setMobileOpen(false); }} className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 border border-[#0A0A0A] flex items-center justify-center font-display text-lg tracking-wider text-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:text-[#F5F4F0] transition-all duration-300">
              OG
            </div>
            <span className="hidden sm:block font-display text-lg tracking-[0.2em] text-[#0A0A0A]">
              {lang === "ar" ? SITE_CONFIG.nameAr : "OMAR EL-GABALY"}
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollTo(link.section)}
                className={`px-3 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
                  activeSection === link.section
                    ? "text-[#0A0A0A]"
                    : "text-[#6B6A65] hover:text-[#0A0A0A]"
                }`}
              >
                {link.label}
                {activeSection === link.section && (
                  <div className="h-[1px] bg-[#0A0A0A] mt-1" />
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button onClick={toggleLang} className="flex items-center gap-2 px-3 py-2 text-[#6B6A65] hover:text-[#0A0A0A] transition-colors" aria-label="Toggle language">
              <Globe size={14} />
              <span className="text-xs tracking-[0.1em] uppercase">{lang === "en" ? "عربي" : "EN"}</span>
            </button>
            <a href={SITE_CONFIG.coachingLink} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[#0A0A0A]/20 text-[#0A0A0A] text-xs tracking-[0.15em] uppercase font-medium hover:border-[#0A0A0A] hover:bg-[#0A0A0A]/5 transition-all duration-300">
              {t.nav.onlineCoaching}
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button onClick={toggleLang} className="p-2 text-[#6B6A65] hover:text-[#0A0A0A] transition-colors" aria-label="Toggle language">
              <Globe size={18} />
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-[#0A0A0A]" aria-label={mobileOpen ? "Close menu" : "Open menu"}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`lg:hidden fixed inset-0 top-16 bg-[#F5F4F0] z-40 transition-all duration-500 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-6 -mt-16">
          {NAV_LINKS.map((link) => (
            <button key={link.section} onClick={() => { scrollTo(link.section); setMobileOpen(false); }}
              className={`text-2xl font-display tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                activeSection === link.section ? "text-[#0A0A0A]" : "text-[#B0AFA9] hover:text-[#0A0A0A]"
              }`}>
              {link.label}
            </button>
          ))}
          <a href={SITE_CONFIG.coachingLink} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 border border-[#0A0A0A]/20 text-[#0A0A0A] text-sm tracking-[0.15em] uppercase font-medium">
            {t.nav.onlineCoaching}
          </a>
        </div>
      </div>
    </header>
  );
}
