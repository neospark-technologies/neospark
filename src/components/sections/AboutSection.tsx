"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Hammer, Sparkles, ShieldCheck } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F3EFE7] text-[#12130F] hairline-t-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-6 hairline-b-light">
          <div className="section-header-tag text-[#2F4A3A]">
            <span className="tag-dot" />
            <span>01 / About Neo Spark</span>
          </div>
          <span className="font-mono text-xs text-[#6B685E] tracking-wider uppercase">
            Pokhara, Nepal — Est. 2025
          </span>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Mission statement */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#12130F] leading-[1.12]">
              Not a student club. <br />
              <span className="text-[#2F4A3A]">An organization built to ship.</span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#6B685E] leading-relaxed font-sans">
              <p>
                Neo Spark Technologies is a student-run technology organization
                based in Pokhara, Nepal. Everything we ship — from physical IoT
                arcade hardware to full-stack cloud platforms — is designed,
                soldered, programmed, and delivered by students who are actively
                studying in college.
              </p>
              <p>
                We do not build for classroom grades or theoretical marks. We
                build because we believe the most rigorous way to master
                technology is to put real machines into people's hands. Our
                work has earned hackathon championships, been demonstrated at
                government events on invitation, and been presented to school
                audiences across Nepal.
              </p>
              <p className="font-medium text-[#12130F]">
                From wiring microcontrollers to deploying production database
                architectures — if it can be engineered, we build it ourselves.
              </p>
            </div>

            {/* Core Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-[#CFC8B8] bg-[#E7E0D2]/50">
                <div className="w-8 h-8 rounded-lg bg-[#2F4A3A]/10 text-[#2F4A3A] flex items-center justify-center mb-3">
                  <Hammer className="w-4 h-4" />
                </div>
                <h3 className="font-display text-sm font-bold text-[#12130F] mb-1">
                  Hardware First
                </h3>
                <p className="text-xs text-[#6B685E] leading-relaxed">
                  Real motors, physical sensors, microcontrollers, and custom
                  chassis built hands-on.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#CFC8B8] bg-[#E7E0D2]/50">
                <div className="w-8 h-8 rounded-lg bg-[#2F4A3A]/10 text-[#2F4A3A] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-display text-sm font-bold text-[#12130F] mb-1">
                  Tested Reliability
                </h3>
                <p className="text-xs text-[#6B685E] leading-relaxed">
                  Documented multi-cycle stress tests ensuring tournament and
                  public showcase durability.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Large Imagery Frame & Context */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#CFC8B8] bg-[#E7E0D2]">
              <Image
                src="/images/IMG_6378.JPG"
                alt="Neo Spark team members gathered with Pokhara mountain backdrop"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12130F]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#F3EFE7]/80">
                  Pokhara, Nepal
                </span>
                <p className="text-sm font-medium text-[#F3EFE7]">
                  The cohort of student builders driving hardware and software
                  initiatives.
                </p>
              </div>
            </div>

            {/* Editorial manifesto block */}
            <div className="p-6 rounded-2xl border border-[#CFC8B8] bg-[#E7E0D2] flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#12130F] text-[#F3EFE7] flex-shrink-0 flex items-center justify-center font-serif text-lg italic">
                &ldquo;
              </div>
              <div>
                <p className="text-sm text-[#12130F] italic font-serif leading-relaxed mb-2">
                  The syllabus teaches you what was built yesterday. Building for
                  actual users in the real world teaches you what to build
                  tomorrow.
                </p>
                <span className="font-mono text-xs uppercase tracking-wider text-[#6B685E]">
                  — Neo Spark Builders Guild
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
