"use client";

import React from "react";
import { motion } from "framer-motion";
import { timeline } from "@/data/achievements";

export function TimelineSection() {
  return (
    <section
      id="journey"
      className="py-24 sm:py-32 bg-[#E7E0D2] text-[#12130F] hairline-t-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            How a small group of ambitious students turned spare electronics and
            weekend hackathons into shipped technology.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Track Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-[#CFC8B8]" />

          <div className="space-y-12">
            {timeline.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={event.title}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#E7E0D2] bg-[#2F4A3A] z-10 mt-6 shadow-sm" />

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)] pl-10 sm:pl-0">
                    <div
                      className={`p-6 sm:p-7 rounded-2xl bg-[#F3EFE7] border border-[#CFC8B8] shadow-sm transition-transform hover:-translate-y-1 duration-300 ${
                        isEven ? "sm:text-left" : "sm:text-left"
                      }`}
                    >
                      <span className="inline-block px-2.5 py-1 rounded bg-[#E7E0D2] font-mono text-xs font-semibold text-[#2F4A3A] mb-3">
                        {event.date}
                      </span>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-[#12130F] mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-[#6B685E] leading-relaxed">
                        {event.description}
                      </p>
                    </div>
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
