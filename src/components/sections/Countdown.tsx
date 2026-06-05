"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export const Countdown = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const targetDate = new Date("2026-06-11T10:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".countdown-element", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const timeBlocks = [
    { label: t.countdown.days, value: timeLeft.days },
    { label: t.countdown.hours, value: timeLeft.hours },
    { label: t.countdown.minutes, value: timeLeft.minutes },
    { label: t.countdown.seconds, value: timeLeft.seconds },
  ];

  return (
    <section ref={containerRef} className="min-h-[100dvh] py-[10vh] pb-[150px] flex flex-col justify-center relative overflow-hidden bg-royal-pattern">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-royal-pattern" />
      </div>
      
      <div className="px-[20px] relative z-10 flex flex-col items-center text-center">
        
        {/* Countdown Blocks (2x2 Grid) */}
        <div className="grid grid-cols-2 gap-5 w-full max-w-[340px] mx-auto mb-14">
          {timeBlocks.map((block, index) => (
            <div key={index} className="countdown-element flex flex-col items-center text-center">
              <div className="w-full aspect-square bg-gradient-to-b from-[#E5C067]/50 via-[#E5C067]/10 to-transparent p-[1px] rounded-[30px] shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
                <div className="w-full h-full bg-gradient-to-b from-[#4A000B]/90 to-[#2A0005]/95 backdrop-blur-xl rounded-[30px] flex flex-col items-center justify-center relative overflow-hidden">
                  
                  {/* Subtle inner top glow */}
                  <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFF8E7]/20 to-transparent"></div>
                  
                  <span className="text-5xl md:text-6xl font-sans font-light bg-gradient-to-b from-[#FFF8E7] via-[#FFE8A1] to-[#D4AF37] text-transparent bg-clip-text drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] leading-none tabular-nums tracking-wider">
                    {block.value.toString().padStart(2, '0')}
                  </span>
                  
                  <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#E5C067]/50 to-transparent mt-4 mb-3"></div>
                  
                  <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[#E5C067] font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {block.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion / Blessings Content */}
        <div className="countdown-element flex flex-col items-center justify-center text-center mt-12 px-4">
          <p className="text-xl md:text-2xl font-cormorant italic tracking-wide text-[#FFE8A1] leading-relaxed max-w-[420px] mb-10 whitespace-pre-line" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
            {t.countdown.conclusion}
          </p>
        </div>
      </div>

      {/* Footer Credits */}
      <div className="absolute bottom-0 left-0 w-full pb-6 flex items-center justify-center z-20">
         <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6 px-4">
            
            <a 
              href="https://wa.me/919345105128" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[9px] md:text-[10px] font-sans text-[#E5C067] hover:text-[#FFF8E7] transition-colors tracking-[0.15em] flex items-center gap-1.5 opacity-80 hover:opacity-100"
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
               9345105128
            </a>

            <div className="h-[10px] w-[1px] bg-[#E5C067]/30 hidden sm:block"></div>

            <p className="text-[9px] md:text-[10px] font-sans text-[#FFF8E7]/50 tracking-[0.1em] uppercase">
              © VREDITSOFFL
            </p>

            <div className="h-[10px] w-[1px] bg-[#E5C067]/30 hidden sm:block"></div>

            <a 
              href="https://instagram.com/craftedbyvr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[9px] md:text-[10px] font-sans text-[#E5C067] hover:text-[#FFF8E7] transition-colors tracking-[0.15em] flex items-center gap-1.5 opacity-80 hover:opacity-100"
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               @craftedbyvr
            </a>
         </div>
      </div>
    </section>
  );
};
