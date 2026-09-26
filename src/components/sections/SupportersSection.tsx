"use client";

import React from "react";
import { supporters } from "@/data/supporters";
import { LogoLoop } from "@/components/ui/LogoLoop";

export function SupportersSection() {
  const row1 = supporters.slice(0, 3);
  const row2 = supporters.slice(3, 6);

  // Convert to LogoLoop items
  const loopRow1 = row1.map((s) => ({
    name: s.name,
    role: s.role,
  }));

  const loopRow2 = row2.map((s) => ({
    name: s.name,
    role: s.role,
  }));

  return (
    <section
      id="supporters"
      className="py-24 sm:py-32 bg-[#F3EFE7] text-[#12130F] hairline-t-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-header-tag text-[#2F4A3A] justify-center">
            <span className="tag-dot" />
            <span>06 / Supported By</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#12130F] mb-4">
            Backed by innovators <br />
            <span className="text-[#2F4A3A]">& creative communities.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B685E] font-sans">
            The communities, technology studios, and teams that back what we
            build.
          </p>
        </div>

        {/* Dual-Row Counter-Rotating LogoLoop Strips */}
        <div className="space-y-4">
          <LogoLoop
            items={loopRow1}
            direction="left"
            speedSeconds={26}
            pauseOnHover={true}
            theme="light"
          />
          <LogoLoop
            items={loopRow2}
            direction="right"
            speedSeconds={30}
            pauseOnHover={true}
            theme="light"
          />
        </div>

        {/* Small editorial note */}
        <div className="text-center mt-12">
          <p className="font-mono text-xs text-[#6B685E] uppercase tracking-wider">
            Interested in partnering or sponsoring hardware builds?{" "}
            <a
              href="mailto:neosparktechnologies@gmail.com"
              className="text-[#2F4A3A] font-semibold underline underline-offset-4 hover:text-[#12130F]"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
