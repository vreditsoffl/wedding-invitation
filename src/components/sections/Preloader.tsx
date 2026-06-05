"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Preloader = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the preloader to show
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-[100dvh] z-[100] flex items-center justify-center bg-[#4B0012] overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image 
              src="/images/preloader-bg.png" 
              alt="Rose Petals and Thali" 
              fill 
              className="object-cover" 
              priority 
              quality={100}
            />
            {/* Dark gradient overlay to make text pop and feel cinematic */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#4B0012]/80 via-black/40 to-[#4B0012]/80" />
          </div>

          {/* Elegant Gold Border Frame */}
          <div className="absolute inset-4 md:inset-6 border border-[#E5C067]/40 z-10 pointer-events-none flex flex-col justify-between">
             {/* Corner Ornaments (CSS approximation) */}
             <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-[#E5C067]/80"></div>
             <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-2 border-r-2 border-[#E5C067]/80"></div>
             <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-2 border-l-2 border-[#E5C067]/80"></div>
             <div className="absolute -bottom-[2px] -right-[2px] w-4 h-4 border-b-2 border-r-2 border-[#E5C067]/80"></div>
             
             {/* Top Center Flourish */}
             <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 bg-transparent px-2">
                <span className="text-[#E5C067]/80 text-lg">❦</span>
             </div>
             {/* Bottom Center Flourish */}
             <div className="absolute -bottom-[12px] left-1/2 -translate-x-1/2 bg-transparent px-2">
                <span className="text-[#E5C067]/80 text-lg rotate-180 inline-block">❦</span>
             </div>
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center w-full px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center"
            >
              <h3 className="text-xs md:text-sm uppercase tracking-[0.25em] font-cormorant font-bold text-[#FFE8A1] mb-2 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,1)] leading-[2em] px-2">
                We cordially invite you<br/>to the wedding of
              </h3>
              
              <div className="flex items-center justify-center gap-2 my-5 opacity-80">
                <div className="w-10 h-[1px] bg-[#E5C067]"></div>
                <span className="text-[#E5C067] text-[10px]">❖</span>
                <div className="w-10 h-[1px] bg-[#E5C067]"></div>
              </div>

              <h1 className="text-5xl md:text-6xl text-center font-cormorant font-normal text-[#FFE8A1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Dhivakar
              </h1>
              <span className="text-3xl font-light text-[#E5C067] font-cormorant italic my-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                ~ &amp; ~
              </span>
              <h1 className="text-5xl md:text-6xl text-center font-cormorant font-normal text-[#FFE8A1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Satya Priya
              </h1>

              <div className="flex items-center justify-center gap-2 mt-5 opacity-80">
                <div className="w-10 h-[1px] bg-[#E5C067]"></div>
                <span className="text-[#E5C067] text-[10px]">❖</span>
                <div className="w-10 h-[1px] bg-[#E5C067]"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
