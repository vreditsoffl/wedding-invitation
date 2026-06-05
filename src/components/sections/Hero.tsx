"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text Entrance Fade-in
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from(".hero-element", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Continuous subtle float for particles/content if needed
      gsap.to(".floating", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ minHeight: "100vh" }}
    >
      {/* Background Image with Parallax */}
      <div 
        ref={bgRef} 
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
      >
        <Image
          src="/images/hero-bg.png"
          alt="Royal Temple Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        
        {/* Soft temple light rays behind tower */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(243,198,35,0.1)_0%,transparent_60%)] pointer-events-none mix-blend-screen" />
      </div>

      {/* Deep Royal Maroon Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(42,0,10,0.5), rgba(75,0,18,0.75))"
        }}
      />

      {/* Dark Vignette for edges */}
      <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]" />

      {/* Warm Golden Center Bloom */}
      <div className="absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[350px] h-[350px] bg-[#E5C067]/20 rounded-full blur-[80px] z-10 pointer-events-none" />

      {/* Deep vignette for shadows around edges (Dark Maroon/Black) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(15,0,5,0.9)_100%)]" />

      {/* Floating Golden Dust Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-40 mix-blend-screen">
         <div className="absolute top-[20%] left-[30%] w-1.5 h-1.5 bg-[#E5C067] rounded-full blur-[1px] animate-pulse floating" style={{ animationDuration: '4s' }} />
         <div className="absolute top-[40%] right-[25%] w-2 h-2 bg-[#E5C067] rounded-full blur-[1px] floating" style={{ animationDuration: '5s', animationDelay: '1s' }} />
         <div className="absolute top-[60%] left-[20%] w-1 h-1 bg-[#E5C067] rounded-full blur-[0.5px] floating" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
         <div className="absolute bottom-[30%] right-[35%] w-2 h-2 bg-[#FFE8A1] rounded-full blur-[1px] floating animate-pulse" style={{ animationDuration: '6s' }} />
         <div className="absolute top-[70%] right-[15%] w-1.5 h-1.5 bg-[#E5C067] rounded-full blur-[1px] floating" style={{ animationDuration: '4.5s', animationDelay: '2s' }} />
         <div className="absolute top-[30%] right-[45%] w-1 h-1 bg-[#FFE8A1] rounded-full blur-[0.5px] floating" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }} />
      </div>

      {/* Traditional Tamil Blessing pinned to top */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full z-30 flex flex-col items-center hero-element opacity-80">
         <span className="text-sm font-medium text-[#E5C067] mb-1 border-b border-[#E5C067]/60 px-1">
           உ
         </span>
         <span className="text-xs font-sans font-normal text-[#E5C067]/90 tracking-wide text-center px-4">
           ஸ்ரீ காத்தவராயன் துணை, ஸ்ரீ வீரன் துணை
         </span>
      </div>

      {/* Content Container (Mobile-First) */}
      <div 
        ref={textRef}
        className="relative z-20 flex flex-col items-center text-center px-[20px] w-full justify-center"
      >

        {/* Wedding Title */}
        <h3 className="hero-element text-xs uppercase tracking-[0.4em] font-sans font-medium text-[#FFF8E7] mb-10 opacity-90" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.9)" }}>
          THE WEDDING OF
        </h3>

        {/* Names */}
        <div className="hero-element flex flex-col items-center w-full relative z-10">
          
          {/* Groom Name */}
          <div className="flex flex-col items-center relative z-10 w-full mb-2">
              <h1 
                className="text-[40px] font-cormorant font-bold tracking-wider leading-none whitespace-nowrap bg-clip-text text-transparent pb-1"
                style={{ 
                  backgroundImage: "linear-gradient(to bottom, #FFE8A1, #E5C067, #A88132)",
                  filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.8))"
                }}
              >
                J. DHIVAKAR
              </h1>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans text-[#FFF8E7]/80 mt-2" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.9)" }}>
                D.C.S.E., Business (Delhi)
              </p>
          </div>
          
          {/* Ampersand */}
          <div className="flex items-center justify-center gap-4 mb-2 relative z-10 w-full px-6">
             <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#E5C067] to-transparent opacity-40"></div>
             <span className="text-2xl text-[#E5C067] font-cormorant italic font-medium" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>&amp;</span>
             <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#E5C067] to-transparent opacity-40"></div>
          </div>
          
          {/* Bride Name */}
          <div className="flex flex-col items-center relative z-10 w-full mb-8">
              <h1 
                className="text-[40px] font-cormorant font-bold tracking-wider leading-none whitespace-nowrap bg-clip-text text-transparent pb-1"
                style={{ 
                  backgroundImage: "linear-gradient(to bottom, #FFE8A1, #E5C067, #A88132)",
                  filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.8))"
                }}
              >
                S. SATYA PRIYA
              </h1>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans text-[#FFF8E7]/80 mt-2" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.9)" }}>
                Ph.D (FMS, Delhi University)
              </p>
          </div>
        </div>

        {/* Date */}
        <div className="hero-element flex flex-col items-center justify-center w-full relative mt-10 mb-6">
           <span 
             className="text-base md:text-lg tracking-[0.5em] font-sans font-light text-[#FFE8A1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-3" 
             style={{ marginRight: '-0.5em' }}
           >
             11
           </span>
           
           <div className="flex items-center justify-center w-full px-12">
             <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#E5C067]/40"></div>
             <span 
               className="text-2xl md:text-3xl uppercase tracking-[0.6em] font-sans font-medium text-[#FFE8A1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] px-6" 
               style={{ marginRight: '-0.6em' }}
             >
               JUNE
             </span>
             <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#E5C067]/40"></div>
           </div>

           <span 
             className="text-base md:text-lg tracking-[0.5em] font-sans font-light text-[#FFE8A1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mt-3" 
             style={{ marginRight: '-0.5em' }}
           >
             2026
           </span>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center hero-element floating opacity-80">
        <ChevronDown className="w-6 h-6 text-[#E5C067]" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.9))" }} />
      </div>

    </section>
  );
};
