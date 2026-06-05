"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Glitter } from "@/components/Glitter";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Events = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".event-card").forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [t]);

  return (
    <section id="events" ref={containerRef} className="relative w-full overflow-hidden py-12 px-4">
      {/* Background with darker gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#250003] via-[#4A000B] to-[#250003] opacity-95"></div>
      <Glitter />
      
      {/* Heading */}
      <div className="flex flex-col items-center mb-10">
          <h2 className="text-xl font-cormorant text-[#E5C067] uppercase tracking-[0.3em] text-center">
            WEDDING EVENTS
          </h2>
      </div>

      <div className="px-[20px] relative z-10 w-full">
        <div className="flex flex-col items-center justify-center gap-5 w-full">
          
          {/* Reception Card */}
          <div className="event-card w-full max-w-[340px] flex flex-col items-center text-center">
             <div className="w-full bg-gradient-to-br from-[#E5C067]/50 via-[#E5C067]/10 to-[#E5C067]/30 p-[2px] rounded-[30px] shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
               <div className="relative w-full bg-gradient-to-b from-[#023D38] to-[#011A18] rounded-[28px] p-[6px] overflow-hidden">
                 
                 {/* Subtle Inner Glow */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[120px] bg-[#E5C067]/15 blur-[40px] pointer-events-none"></div>

                 {/* Ornate Inner Border */}
                 <div className="w-full border border-[#E5C067]/30 rounded-[22px] p-8 py-10 flex flex-col items-center relative z-10">
                   
                   {/* Corner Accents */}
                   <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#E5C067]/60 rounded-tl-[8px]"></div>
                   <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#E5C067]/60 rounded-tr-[8px]"></div>
                   <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#E5C067]/60 rounded-bl-[8px]"></div>
                   <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#E5C067]/60 rounded-br-[8px]"></div>

                   <h3 className="text-4xl md:text-5xl font-script text-[#FFE8A1] font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-4">
                     Reception
                   </h3>
                   
                   <p className="text-[13px] font-sans font-medium text-[#FFF8E7] tracking-[0.2em] uppercase mb-1" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
                     10 June 2026
                   </p>
                   <p className="text-[#E5C067] font-cormorant tracking-widest uppercase text-xs mb-4">
                     Wednesday
                   </p>
                   <p className="text-xs font-sans font-medium text-[#FFF8E7] tracking-[0.15em] uppercase" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
                     6:30 PM Onwards
                   </p>
                   
                 </div>
               </div>
             </div>
          </div>

          {/* Elegant Divider */}
          <div className="flex items-center justify-center gap-2 my-6 opacity-90">
             <div className="w-2 h-2 transform rotate-45 border border-[#E5C067]/60"></div>
             <div className="w-3 h-3 transform rotate-45 bg-gradient-to-br from-[#FFE8A1] to-[#D4AF37]" style={{ boxShadow: "0 0 10px rgba(229,192,103,0.6)" }}></div>
             <div className="w-2 h-2 transform rotate-45 border border-[#E5C067]/60"></div>
          </div>

          {/* Wedding Ceremony Card */}
          <div className="event-card w-full max-w-[340px] flex flex-col items-center text-center">
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
                 
                   <h3 className="text-4xl md:text-5xl font-script text-[#FFE8A1] font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-4">
                     Marriage
                   </h3>
                   
                   <p className="text-[13px] font-sans font-medium text-[#FFF8E7] tracking-[0.2em] uppercase mb-1" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
                     11 June 2026
                   </p>
                   <p className="text-[#E5C067] font-cormorant tracking-widest uppercase text-xs mb-5">
                     Thursday
                   </p>
                   
                   <div className="flex flex-col items-center gap-1.5">
                     <p className="text-[#E5C067] font-cormorant text-xs tracking-[0.2em] uppercase">Muhurtham</p>
                     <p className="text-xs font-sans font-medium text-[#FFF8E7] tracking-[0.15em] uppercase" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
                       9:00 AM - 10:30 AM
                     </p>
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
