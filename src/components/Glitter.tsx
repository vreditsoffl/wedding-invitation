"use client";
import React, { useEffect, useState } from "react";

export const Glitter = () => {
  const [particles, setParticles] = useState<{ id: number; left: string; top: string; size: string; duration: string; delay: string; opacity: number }[]>([]);

  useEffect(() => {
    // Generate very subtle, tiny golden dust particles
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.5 + 0.5}px`, // Extremely tiny (0.5px to 2px)
      duration: `${Math.random() * 3 + 2}s`, // Gentle twinkle
      delay: `${Math.random() * 3}s`,
      opacity: Math.random() * 0.4 + 0.1, // Very low opacity (0.1 to 0.5)
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#E5C067] animate-twinkle-dust"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            '--max-opacity': p.opacity,
          } as React.CSSProperties}
        ></div>
      ))}
    </div>
  );
};
