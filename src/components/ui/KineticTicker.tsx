"use client";

import React from "react";
import { motion } from "framer-motion";

interface KineticTickerProps {
  theme?: "light" | "dark";
  className?: string;
}

export function KineticTicker({
  theme = "light",
  className = "",
}: KineticTickerProps) {
  const line1 = [
    "NEO SPARK TECHNOLOGIES",
    "1ST PLACE IOT FESTIVAL 2026",
    "DUOPONG ARCADE MACHINE",
    "1ST PLACE INNOHACK 2026",
    "THE YATRI TRAVEL PLATFORM",
    "STUDENT-RUN ENGINEERING",
    "TRUSTED BEYOND THE CLASSROOM",
    "INFORMATICS COLLEGE POKHARA",
  ];

  const line2 = [
    "TWO TEAMS FIELDED AT IOT FEST",
    "HC-SR04 ULTRASONIC SENSOR ARRAYS",
    "DUAL ARDUINO & ESP32 FIRMWARE",
    "GOVERNMENT INVITATION EXHIBITIONS",
    "REGIONAL STEM OUTREACH",
    "ENTERPRISE JAVA MVC & RAILWAY CLOUD",
    "POKHARA, NEPAL",
    "HARDWARE • SOFTWARE • ROBOTICS",
  ];

  const isDark = theme === "dark";

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-6 border-y ${
        isDark
          ? "bg-[#0D0E0B] border-[#22251D] text-[#F3EFE7]"
          : "bg-[#ECE6D9] border-[#CFC8B8] text-[#12130F]"
      } ${className}`}
    >
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-inherit to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-inherit to-transparent z-10 pointer-events-none" />

      {/* Track 1: Gliding Left */}
      <div className="flex w-max mb-3">
        <motion.div
          className="flex shrink-0 items-center gap-6 pr-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...line1, ...line1, ...line1, ...line1].map((text, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 font-display text-sm sm:text-base font-bold tracking-wider uppercase whitespace-nowrap"
            >
              <span>{text}</span>
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isDark ? "bg-[#7FA38A]" : "bg-[#2F4A3A]"
                } opacity-70`}
              />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Track 2: Gliding Right */}
      <div className="flex w-max">
        <motion.div
          className="flex shrink-0 items-center gap-6 pr-6"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...line2, ...line2, ...line2, ...line2].map((text, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-6 font-mono text-xs sm:text-sm tracking-widest uppercase whitespace-nowrap ${
                isDark ? "text-[#A6A394]" : "text-[#6B685E]"
              }`}
            >
              <span>{text}</span>
              <span className="text-[#2F4A3A] opacity-60">◆</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
