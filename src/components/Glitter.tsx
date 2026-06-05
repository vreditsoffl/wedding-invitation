"use client";
import React, { useEffect, useState } from "react";

export const Glitter = () => {
  const [sparkles, setSparkles] = useState<
    { id: number; left: string; top: string; size: string; duration: string; delay: string }[]
  >([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 8 + 4}px`, // 4-12px
      duration: `${Math.random() * 3 + 3}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Soft ambient glowing orbs */}
      <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-[#E5C067]/5 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: "8s" }}></div>
      <div className="absolute top-[50%] right-[10%] w-96 h-96 bg-[#FFE8A1]/5 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "12s" }}></div>
      <div className="absolute bottom-[15%] left-[20%] w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[70px] animate-pulse" style={{ animationDuration: "10s" }}></div>

      {/* Radial particle sparkles */}
      {sparkles.map((p) => (
        <div
          key={p.id}
          className="sparkle-particle"
          style={{
            left: p.left,
            top: p.top,
            "--size": p.size,
            "--duration": p.duration,
            "--delay": p.delay,
          } as React.CSSProperties}
        ></div>
      ))}
    </div>
  );
};
