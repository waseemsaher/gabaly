import { SITE_CONFIG, getImage, loc } from "../config";
import { useInView } from "../hooks";
import { useLanguage } from "../LanguageContext";

function StoryBeat({ beat, index }: { beat: (typeof SITE_CONFIG.storyBeats)[0]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  const { lang, isRTL } = useLanguage();
  const isEven = index % 2 === 0;
  const hasImage = !!beat.image;
  const hasVideo = !!beat.videoEmbed;

  const heading = loc(beat, "heading", lang);
  const text = loc(beat, "text", lang);
  const year = loc(beat, "year", lang);

  return (
    <div ref={ref} className="relative">
      <div className={`absolute ${isRTL ? 'right-6 md:right-1/2 md:translate-x-1/2' : 'left-6 md:left-1/2 md:-translate-x-1/2'} top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#B0AFA9]/20 via-[#0A0A0A]/10 to-[#B0AFA9]/20`} />
      <div className={`relative transition-all duration-1000 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
        <div className={`absolute ${isRTL ? 'right-6 md:right-1/2 translate-x-1/2' : 'left-6 md:left-1/2 -translate-x-1/2'} top-0 z-10`}>
          <div className="w-3 h-3 bg-[#F5F4F0] border border-[#0A0A0A]/30 rotate-45 animate-pulse-glow" />
        </div>
        <div className={`absolute ${isRTL ? 'right-6 md:right-1/2 translate-x-1/2' : 'left-6 md:left-1/2 -translate-x-1/2'} -top-6 z-10`}>
          <span className="font-display text-xs tracking-[0.3em] text-[#6B6A65]">{year}</span>
        </div>

        <div className={`${isRTL ? 'pr-16 md:pr-0' : 'pl-16 md:pl-0'} pt-8 ${hasImage || hasVideo ? "md:grid md:grid-cols-2 md:gap-12 lg:gap-20" : "md:max-w-xl md:mx-auto"}`}>
          <div className={`${hasImage || hasVideo ? isEven ? `${isRTL ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'}` : `${isRTL ? 'md:col-start-1 md:pr-16' : 'md:col-start-2 md:pl-16'}` : "text-center"}`}>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-[0.03em] text-[#0A0A0A] mb-5 leading-tight">{heading}</h3>
            <p className="text-[#6B6A65] text-sm sm:text-[15px] leading-[1.8] font-light">{text}</p>
          </div>

          {hasImage && (
            <div className={`mt-8 md:mt-0 ${isEven ? `${isRTL ? 'md:col-start-1 md:row-start-1 md:pr-16' : 'md:col-start-2 md:pl-16'}` : `${isRTL ? 'md:col-start-2 md:pl-16' : 'md:col-start-1 md:row-start-1 md:pr-16'}`}`}>
              <div className="relative overflow-hidden group hover-lift">
                <img src={getImage(beat.image!)} alt={heading} className="w-full h-64 sm:h-80 object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[1200ms] group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5F4F0]/30 via-transparent to-transparent" />
                <div className={`absolute bottom-3 ${isRTL ? 'right-3' : 'left-3'} flex items-center gap-2`}>
                  <div className="w-4 h-[1px] bg-[#F5F4F0]/60" />
                  <span className="text-[8px] tracking-[0.3em] text-[#F5F4F0] uppercase drop-shadow">{heading}</span>
                </div>
              </div>
            </div>
          )}

          {hasVideo && !hasImage && (
            <div className={`mt-8 md:mt-0 ${isEven ? `${isRTL ? 'md:col-start-1 md:row-start-1 md:pr-16' : 'md:col-start-2 md:pl-16'}` : `${isRTL ? 'md:col-start-2 md:pl-16' : 'md:col-start-1 md:row-start-1 md:pr-16'}`}`}>
              <div className="aspect-video w-full overflow-hidden border border-[#0A0A0A]/10 shadow-lg">
                <iframe src={beat.videoEmbed} title="Omar El-Gabaly Documentary" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Story() {
  const { ref: headerRef, isInView: headerVisible } = useInView();
  const { t } = useLanguage();

  return (
    <section id="story" className="relative py-24 sm:py-32 lg:py-44 bg-[#F5F4F0]">
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute right-0 top-1/4 w-[400px] h-[600px] bg-[#0A0A0A]/[0.015] rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`mb-24 sm:mb-32 lg:mb-40 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#B0AFA9]" />
            <span className="text-[10px] tracking-[0.5em] text-[#6B6A65] uppercase">{t.story.chapter}</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.02em] text-[#0A0A0A] leading-[0.9]">{t.story.title1}</h2>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.02em] text-[#0A0A0A]/15 leading-[0.9] mt-1">{t.story.title2}</h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#0A0A0A]/20 to-transparent mt-8" />
        </div>

        <div className="space-y-24 sm:space-y-32 lg:space-y-44">
          {SITE_CONFIG.storyBeats.map((beat, i) => <StoryBeat key={beat.id} beat={beat} index={i} />)}
        </div>
      </div>
    </section>
  );
}
