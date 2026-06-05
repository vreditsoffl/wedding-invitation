"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Navigation, Phone, CalendarHeart, MessageCircle } from "lucide-react";
import { Glitter } from "@/components/Glitter";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Venue = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const mapsUrl = "https://maps.google.com/?q=Sorna+Durai+Marriage+Hall+Thiruvarur";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".venue-element").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [t]);

  return (
    <section ref={containerRef} className="py-[5vh] flex flex-col justify-center bg-royal-pattern relative overflow-hidden">
      <Glitter />
      
      {/* Heading */}
      <div className="relative w-full z-10 flex flex-col items-center justify-center py-12 px-4">
        <h2 className="text-xl font-cormorant text-[#E5C067] uppercase tracking-[0.3em] mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {t.venue.title}
        </h2>
      </div>

      <div className="px-[20px] w-full max-w-[400px] mx-auto">
        <div className="flex flex-col gap-8 items-center w-full">
          
          {/* Details Card */}
          <div className="venue-element w-full max-w-[340px] flex flex-col items-center text-center">
             <div className="w-full bg-gradient-to-br from-[#E5C067]/50 via-[#E5C067]/10 to-[#E5C067]/30 p-[2px] rounded-[30px] shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
               <div className="relative w-full bg-gradient-to-b from-[#4A000B] to-[#250003] rounded-[28px] p-[6px] overflow-hidden">
                 
                 {/* Subtle Inner Glow */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[120px] bg-[#E5C067]/15 blur-[40px] pointer-events-none"></div>

                 {/* Ornate Inner Border */}
                 <div className="w-full border border-[#E5C067]/30 rounded-[22px] p-8 py-10 flex flex-col items-center relative z-10">
                   
                   {/* Corner Accents */}
                   <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#E5C067]/60 rounded-tl-[8px]"></div>
                   <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#E5C067]/60 rounded-tr-[8px]"></div>
                   <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#E5C067]/60 rounded-bl-[8px]"></div>
                   <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#E5C067]/60 rounded-br-[8px]"></div>

                   <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-[#E5C067]/10">
                      <MapPin className="w-6 h-6 text-[#E5C067]" />
                   </div>

                   <h3 className="text-4xl md:text-5xl font-script text-[#FFE8A1] font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-6 leading-tight whitespace-pre-wrap">
                     {t.venue.hall.replace(/ /g, '\n')}
                   </h3>
                   
                   <p className="text-[13px] font-sans font-medium text-[#FFF8E7] tracking-[0.15em] uppercase leading-relaxed mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                     {t.venue.village}<br/>
                     {t.venue.district}<br/>
                     {t.venue.state}
                   </p>
                   
                   <a 
                     href={mapsUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="w-full min-h-[44px] flex items-center justify-center bg-gradient-to-r from-[#E5C067] via-[#FFE8A1] to-[#D4AF37] text-[#1a1a1a] font-sans font-bold py-3 px-6 rounded-full active:scale-95 transition-transform uppercase tracking-widest text-[11px] shadow-[0_4px_15px_rgba(229,192,103,0.4)] mb-8"
                   >
                     {t.venue.navigate}
                   </a>
                   
                   <div className="w-full flex justify-between items-center gap-2 border-t border-[#E5C067]/20 pt-6">
                      <a href="tel:+919643545378" className="flex flex-col items-center justify-center gap-2 text-[#E5C067] hover:text-[#FFF8E7] transition-colors min-w-[64px] min-h-[44px]">
                        <Phone className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                        <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-medium">{t.venue.call}</span>
                      </a>
                      <a 
                        href="https://wa.me/919643545378?text=Send%20me%20the%20venue%20location" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex flex-col items-center justify-center gap-2 text-[#E5C067] hover:text-[#FFF8E7] transition-colors min-w-[64px] min-h-[44px]"
                      >
                        <MessageCircle className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                        <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-medium">WhatsApp</span>
                      </a>
                      <a 
                        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Satya+Priya+Dhivakar+Marriage&dates=20260611T033000Z/20260611T050000Z&details=Sorna+Durai+Marriage+Hall,+Thiruvarur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center gap-2 text-[#E5C067] hover:text-[#FFF8E7] transition-colors min-w-[64px] min-h-[44px]"
                      >
                        <CalendarHeart className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                        <span className="text-[10px] font-sans tracking-[0.2em] uppercase font-medium">Save Date</span>
                      </a>
                   </div>
                 </div>
               </div>
             </div>
          </div>


          
        </div>
      </div>
    </section>
  );
};
