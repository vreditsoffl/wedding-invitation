"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="absolute top-4 right-4 z-50 pointer-events-none">
      <div className="bg-[#1F0004]/80 backdrop-blur-md rounded-full p-0.5 shadow-lg border border-[#D4AF37]/30 flex gap-0.5 pointer-events-auto">
        <button
          onClick={() => setLanguage("ta")}
          className={`px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider transition-colors relative ${
            language === "ta" ? "text-[#1F0004]" : "text-[#D4AF37] hover:bg-[#D4AF37]/10"
          }`}
        >
          {language === "ta" && (
            <motion.div
              layoutId="lang-bg"
              className="absolute inset-0 bg-[#D4AF37] rounded-full -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          தமிழ்
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider transition-colors relative ${
            language === "en" ? "text-[#1F0004]" : "text-[#D4AF37] hover:bg-[#D4AF37]/10"
          }`}
        >
          {language === "en" && (
            <motion.div
              layoutId="lang-bg"
              className="absolute inset-0 bg-[#D4AF37] rounded-full -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          EN
        </button>
      </div>
    </div>
  );
};
