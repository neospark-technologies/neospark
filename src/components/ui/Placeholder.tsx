"use client";

import React from "react";
import { Cpu, Code2, Sparkles } from "lucide-react";

interface PlaceholderProps {
  label?: string;
  category?: "hardware" | "software" | "hybrid" | "event";
  aspectRatio?: "video" | "square" | "portrait" | "wide";
  className?: string;
}

export function Placeholder({
  label = "Neo Spark Archive",
  category = "hybrid",
  aspectRatio = "video",
  className = "",
}: PlaceholderProps) {
  const aspectClasses = {
    video: "aspect-[16/10]",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  }[aspectRatio];

  const IconComponent =
    category === "hardware" ? Cpu : category === "software" ? Code2 : Sparkles;

  return (
    <div
      className={`relative w-full ${aspectClasses} bg-[#1C1E19] border border-[#2B2E27] overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
      aria-label={`Placeholder: ${label}`}
    >
      {/* Blueprint grid effect */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(#F3EFE7 1px, transparent 1px), linear-gradient(to right, #F3EFE7 1px, transparent 1px), linear-gradient(to bottom, #F3EFE7 1px, transparent 1px)",
          backgroundSize: "24px 24px, 24px 24px, 24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-[#7FA38A]/30 bg-[#2F4A3A]/20 flex items-center justify-center text-[#7FA38A]">
          <IconComponent className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[#A6A394]">
            [ Prototype Asset ]
          </p>
          <p className="text-sm font-medium text-[#F3EFE7] max-w-[200px] truncate">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
