"use client";
import React, { useEffect, useState } from "react";

export const Glitter = () => {
  const [particles, setParticles] = useState<{ id: number; top: string; left: string; size: string; duration: string; delay: string }[]>([]);

  useEffect(() => {
    // Generate particles on client to avoid hydration mismatch
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 2 + 1.5}s`,
      delay: `${Math.random() * 2}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#FFF8E7] animate-twinkle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            boxShadow: `0 0 ${parseFloat(p.size) * 3}px ${parseFloat(p.size)}px rgba(229,192,103,0.8)`
          }}
        ></div>
      ))}
    </div>
  );
};
