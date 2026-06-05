"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Glitter } from "@/components/Glitter";

gsap.registerPlugin(ScrollTrigger);

// Reusable CSS Ornamental Divider
const OrnamentalDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-2 opacity-90 ${className}`}>
      <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#E5C067]"></div>
      <div className="w-2 h-2 transform rotate-45 border border-[#E5C067]"></div>
      <div className="w-1.5 h-1.5 transform rotate-45 bg-[#E5C067]" style={{ boxShadow: "0 0 8px rgba(229,192,103,0.8)" }}></div>
      <div className="w-2 h-2 transform rotate-45 border border-[#E5C067]"></div>
      <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#E5C067]"></div>
  </div>
);

export const CoupleIntro = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".couple-element", {
        y: 30,
        opacity: 0,
        scale: 0.98,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
      
      gsap.to(".gold-shimmer", {
        backgroundPosition: "200% center",
        duration: 3,
        repeat: -1,
        ease: "linear",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-[5vh] min-h-[100dvh] relative overflow-hidden bg-royal-pattern flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5C067]/10 rounded-full blur-[80px]"></div>
      </div>
      <Glitter />

      <div className="px-[20px] text-center relative z-10 flex flex-col items-center justify-center w-full flex-1 py-12">
        {/* Header */}
        <div className="couple-element flex flex-col items-center justify-center w-full mb-10">
          <h2 className="text-xl font-cormorant text-[#E5C067] uppercase tracking-[0.3em] text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            MEET THE COUPLE
          </h2>
        </div>

        {/* Couple Photo — Recessed into background */}
        <div className="couple-element relative w-[70%] max-w-[260px] aspect-[3/4] mb-4 deep-card">
          <div className="deep-card-inner relative w-full h-full" style={{ borderRadius: "16px" }}>
            <Image
              src="/images/couple%20photo.png"
              alt="Dhivakar and Satya Priya"
              fill
              className="object-cover object-top"
              quality={100}
              priority
            />
          </div>
        </div>

        {/* Story Content */}
        <div className="couple-element flex flex-col items-center w-full mb-2">
            
            <h3 className="text-3xl md:text-4xl flex items-center justify-center flex-wrap gap-x-4 font-script text-[#FFE8A1] font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-8 w-full px-2">
              <span>Dhivakar</span>
              <svg className="w-9 h-9 transform -translate-y-1" viewBox="0 0 64 64" fill="none">
                <defs>
                  <linearGradient id="metalRing" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="30%" stopColor="#FFE8A1" />
                    <stop offset="70%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#FFE8A1" />
                  </linearGradient>
                  <linearGradient id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#FFF8E7" />
                    <stop offset="100%" stopColor="#FFE8A1" />
                  </linearGradient>
                  <filter id="dropShadowRealistic" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.8" floodColor="#000000" />
                  </filter>
                </defs>
                <g filter="url(#dropShadowRealistic)">
                  {/* The Ring Band in perspective */}
                  <ellipse cx="32" cy="38" rx="16" ry="10" stroke="url(#metalRing)" strokeWidth="5" />
                  
                  {/* Prongs holding the diamond */}
                  <path d="M 28 24 L 28 28 M 36 24 L 36 28" stroke="url(#metalRing)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 32 30 L 26 24 L 38 24 Z" fill="url(#metalRing)" />

                  {/* Diamond Pavilion (bottom) */}
                  <path d="M 22 22 L 42 22 L 32 32 Z" fill="url(#diamondGrad)" />
                  {/* Diamond Facets for realistic 3D look */}
                  <path d="M 22 22 L 32 22 L 32 32 Z" fill="#FFFFFF" opacity="0.8" />
                  <path d="M 32 22 L 42 22 L 32 32 Z" fill="#FFE8A1" opacity="0.4" />
                  
                  {/* Diamond Crown (top) */}
                  <path d="M 26 16 L 38 16 L 42 22 L 22 22 Z" fill="#FFF8E7" />
                  <path d="M 26 16 L 32 16 L 32 22 L 22 22 Z" fill="#FFFFFF" opacity="0.9" />
                  <path d="M 32 16 L 38 16 L 42 22 L 32 22 Z" fill="#FFE8A1" opacity="0.6" />
                  <path d="M 32 16 L 28 22 L 36 22 Z" fill="#FFFFFF" opacity="1" />

                  {/* Diamond Sparkle */}
                  <path d="M 40 10 L 41 14 L 45 15 L 41 16 L 40 20 L 39 16 L 35 15 L 39 14 Z" fill="#FFFFFF" />
                </g>
              </svg>
              <span>Satya Priya</span>
            </h3>

            <p 
              className="text-lg md:text-xl font-cormorant text-[#FFF8E7] tracking-wide font-medium leading-relaxed text-center w-full px-4 max-w-[420px]" 
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
            >
              Two hearts, one beautiful dream coming true. Together with our families, we joyfully invite you to celebrate our love and share in the magic of our new beginning.
            </p>

        </div>
      </div>
    </section>
  );
};
