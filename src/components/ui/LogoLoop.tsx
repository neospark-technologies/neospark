"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export interface LogoLoopItem {
  id?: string;
  name: string;
  role?: string;
  tag?: string;
  logo?: string;
}

interface LogoLoopProps {
  items: LogoLoopItem[];
  direction?: "left" | "right";
  speedSeconds?: number;
  pauseOnHover?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export function LogoLoop({
  items,
  direction = "left",
  speedSeconds = 28,
  pauseOnHover = true,
  theme = "light",
  className = "",
}: LogoLoopProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Multiply items to ensure seamless infinite looping on both SSR and client
  const repeatedItems = [...items, ...items, ...items, ...items];
  const initialX = direction === "left" ? "0%" : "-50%";
  const animateX = direction === "left" ? "-50%" : "0%";

  return (
    <div
      className={`relative w-full overflow-hidden mask-edge-fade py-2 ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onFocus={() => pauseOnHover && setIsPaused(true)}
      onBlur={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div
        className="flex w-max items-center gap-4 py-2 logo-loop-track"
        initial={{ x: initialX }}
        animate={isPaused ? { x: undefined } : { x: animateX }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speedSeconds,
            ease: "linear",
          },
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={idx}
            tabIndex={0}
            className={`group inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 ${
              theme === "dark"
                ? "bg-[#181A15] border-[#2B2E27] hover:border-[#7FA38A] hover:bg-[#1E211A] text-[#F3EFE7] focus:ring-[#7FA38A]"
                : "bg-[#E7E0D2] border-[#CFC8B8] hover:border-[#12130F] hover:bg-[#ECE5D8] text-[#12130F] focus:ring-[#2F4A3A]"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7FA38A] opacity-70 group-hover:scale-125 transition-transform" />
            <span className="font-display text-sm font-semibold tracking-tight whitespace-nowrap">
              {item.name}
            </span>
            {item.role && (
              <span
                className={`font-mono text-[11px] uppercase tracking-wider ${
                  theme === "dark" ? "text-[#A6A394]" : "text-[#6B685E]"
                }`}
              >
                — {item.role}
              </span>
            )}
            {item.tag && (
              <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-black/10 dark:bg-white/10 opacity-70">
                {item.tag}
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
