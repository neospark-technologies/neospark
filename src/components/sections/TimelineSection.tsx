"use client";

import React from "react";
import { motion } from "framer-motion";
import { timeline } from "@/data/achievements";
import { Users2, Award, Zap, Compass, Building, Boxes } from "lucide-react";

export function TimelineSection() {
  const getIcon = (type: string, title: string) => {
    if (title.includes("Dual Teams") || title.includes("Founded")) return Users2;
    if (type === "achievement") return Award;
    if (type === "event") return Building;
    if (type === "project") return Boxes;
    return Zap;
  };

  return (
    <section
      id="journey"
      className="py-24 sm:py-32 bg-[#E7E0D2] text-[#12130F] hairline-t-light relative overflow-hidden"
    >
      {/* Ambient background particles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#2F4A3A]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#7FA38A]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 hairline-b-light gap-4">
          <div>
            <div className="section-header-tag text-[#2F4A3A]">
              <span className="tag-dot" />
              <span>04 / Our Journey</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#12130F]">
              From idea <span className="text-[#2F4A3A]">to impact.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#6B685E] max-w-md font-sans">
            How a united cohort of ambitious students turned spare microcontrollers and
            late-night hackathons into championship technology.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Track Line with continuous subtle shimmer */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-[#CFC8B8]">
            <motion.div
              className="w-full h-24 bg-gradient-to-b from-transparent via-[#2F4A3A] to-transparent"
              animate={{
                y: ["0%", "800%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="space-y-12">
            {timeline.map((event, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = getIcon(event.type, event.title);
              const isDualTeam = event.title.includes("Dual Teams");

              return (
                <div
                  key={event.title}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node Indicator with continuous alive pulse */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-[#E7E0D2] bg-[#2F4A3A] z-10 mt-6 shadow-sm flex items-center justify-center">
                    <motion.div
                      className="w-full h-full rounded-full bg-[#7FA38A] opacity-75"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.7, 0, 0.7],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: idx * 0.4,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2.25rem)] pl-12 sm:pl-0">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className={`p-6 sm:p-7 rounded-2xl bg-[#F3EFE7] border ${
                        isDualTeam
                          ? "border-[#2F4A3A] shadow-md ring-1 ring-[#2F4A3A]/20"
                          : "border-[#CFC8B8] shadow-sm"
                      } transition-all duration-300 hover:-translate-y-1 hover:border-[#12130F]`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#E7E0D2] font-mono text-xs font-semibold text-[#2F4A3A]">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{event.date}</span>
                        </span>

                        {isDualTeam && (
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#2F4A3A] text-[#F3EFE7]">
                            2 Teams Fielded
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-display font-bold text-[#12130F] mb-2">
                        {event.title}
                      </h3>

                      <p className="text-sm text-[#6B685E] leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
