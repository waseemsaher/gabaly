import { useState, useEffect, useCallback } from "react";
import { SITE_CONFIG, getImage } from "../config";
import { useInView, useLockBodyScroll } from "../hooks";
import { useLanguage } from "../LanguageContext";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const ASPECT_HEIGHTS = ["h-56","h-72","h-60","h-80","h-52","h-68","h-56","h-76","h-60","h-72","h-64","h-80","h-56","h-72","h-60","h-80","h-56"];

function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: { images: typeof SITE_CONFIG.galleryImages; currentIndex: number; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  const { isRTL } = useLanguage();
  useLockBodyScroll(true);
  const handleKey = useCallback((e: KeyboardEvent) => { if (e.key==="Escape") onClose(); if (e.key==="ArrowLeft") isRTL?onNext():onPrev(); if (e.key==="ArrowRight") isRTL?onPrev():onNext(); }, [onClose,onPrev,onNext,isRTL]);
  useEffect(() => { window.addEventListener("keydown",handleKey); return()=>window.removeEventListener("keydown",handleKey); }, [handleKey]);
  const current = images[currentIndex];
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in">
      <div className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-md" onClick={onClose} />
      <button onClick={onClose} className={`absolute top-6 ${isRTL?'left-6':'right-6'} z-20 p-2 text-[#B0AFA9] hover:text-[#F5F4F0] transition-colors`}><X size={20}/></button>
      <div className={`absolute top-6 ${isRTL?'right-6':'left-6'} z-20`}><span className="text-[10px] tracking-[0.3em] text-[#B0AFA9] uppercase">{currentIndex+1}<span className="mx-2 text-[#6B6A65]/30">/</span>{images.length}</span></div>
      <button onClick={isRTL?onNext:onPrev} className={`absolute ${isRTL?'right-4 sm:right-8':'left-4 sm:left-8'} z-20 p-3 text-[#B0AFA9] hover:text-[#F5F4F0] transition-colors`}><ChevronLeft size={24}/></button>
      <button onClick={isRTL?onPrev:onNext} className={`absolute ${isRTL?'left-4 sm:left-8':'right-4 sm:right-8'} z-20 p-3 text-[#B0AFA9] hover:text-[#F5F4F0] transition-colors`}><ChevronRight size={24}/></button>
      <div className="relative z-10 w-full max-w-5xl max-h-[85vh] mx-4 sm:mx-8">
        <img key={current.src} src={getImage(current.src)} alt={current.alt} loading="lazy" className="w-full max-h-[85vh] object-contain animate-scale-in" />
        <div className="text-center mt-4"><span className="text-[#B0AFA9] text-xs tracking-[0.2em] uppercase">{current.alt}</span><span className="mx-3 text-[#6B6A65]/30">·</span><span className="text-[#6B6A65] text-xs tracking-[0.2em] uppercase">{current.category}</span></div>
      </div>
    </div>
  );
}

function GalleryItem({ img, index, onClick }: { img: (typeof SITE_CONFIG.galleryImages)[0]; index: number; onClick: () => void }) {
  const { ref, isInView } = useInView({ threshold: 0.05, rootMargin: "0px" });
  return (
    <div ref={ref} className={`relative overflow-hidden cursor-pointer group transition-all duration-700 shadow-sm hover:shadow-xl ${isInView?"opacity-100 translate-y-0":"opacity-0 translate-y-6"}`} style={{ transitionDelay:`${(index%4)*80}ms` }} onClick={onClick}>
      <img src={getImage(img.src)} alt={img.alt} loading="lazy" className={`w-full ${ASPECT_HEIGHTS[index%ASPECT_HEIGHTS.length]} object-cover group-hover:scale-[1.04] transition-all duration-[800ms]`} />
      <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/40 transition-all duration-500 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-3 border border-[#F5F4F0]/50 bg-[#0A0A0A]/20 backdrop-blur-sm"><Maximize2 size={16} className="text-[#F5F4F0]"/></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0A0A0A]/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-[8px] tracking-[0.3em] text-[#F5F4F0]/80 uppercase">{img.alt}</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { ref: headerRef, isInView: headerVisible } = useInView();
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number|null>(null);

  const FILTER_TABS = [
    { key:"All", label:t.gallery.filters.all },
    { key:"Skills", label:t.gallery.filters.skills },
    { key:"Training", label:t.gallery.filters.training },
    { key:"Competitions", label:t.gallery.filters.competitions },
    { key:"Federation", label:t.gallery.filters.federation },
  ];
  const filteredImages = activeFilter==="All" ? SITE_CONFIG.galleryImages : SITE_CONFIG.galleryImages.filter(img=>img.category===activeFilter);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => { if(lightboxIndex===null) return; setLightboxIndex(lightboxIndex===0?filteredImages.length-1:lightboxIndex-1); };
  const nextImage = () => { if(lightboxIndex===null) return; setLightboxIndex(lightboxIndex===filteredImages.length-1?0:lightboxIndex+1); };

  return (
    <>
      <section id="gallery" className="relative py-24 sm:py-32 lg:py-44 bg-[#F5F4F0]">
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[400px] bg-[#0A0A0A]/[0.015] rounded-full blur-[200px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className={`mb-12 sm:mb-16 transition-all duration-1000 ${headerVisible?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-4 mb-6"><div className="h-[1px] w-12 bg-[#B0AFA9]" /><span className="text-[10px] tracking-[0.5em] text-[#6B6A65] uppercase">{t.gallery.chapter}</span></div>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.02em] text-[#0A0A0A] leading-[0.9]">{t.gallery.title}</h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {FILTER_TABS.map(tab=>(
              <button key={tab.key} onClick={()=>setActiveFilter(tab.key)}
                className={`px-4 py-2 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase transition-all duration-500 ${activeFilter===tab.key ? "bg-[#0A0A0A] text-[#F5F4F0] font-semibold" : "text-[#6B6A65] hover:text-[#0A0A0A] border border-[#0A0A0A]/10 hover:border-[#0A0A0A]/25"}`}>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="masonry-grid">
            {filteredImages.map((img,index)=><GalleryItem key={`${activeFilter}-${img.src}`} img={img} index={index} onClick={()=>setLightboxIndex(index)} />)}
          </div>
        </div>
      </section>
      {lightboxIndex!==null && <Lightbox images={filteredImages} currentIndex={lightboxIndex} onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />}
    </>
  );
}
