"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { GithubIcon } from "@/components/ui/icons";
import { LogoLoop } from "@/components/ui/LogoLoop";

const techDomains = [
  { name: "IoT & Robotics", tag: "Hardware" },
  { name: "Embedded Systems", tag: "Firmware" },
  { name: "Arduino & ESP32", tag: "Microcontrollers" },
  { name: "Full-Stack Software", tag: "Web" },
  { name: "Next.js & TypeScript", tag: "Frontend" },
  { name: "Java MVC & MySQL", tag: "Backend" },
  { name: "Autonomous Navigation", tag: "Robotics" },
  { name: "Hardware Prototyping", tag: "Lab" },
  { name: "Open Source Engineering", tag: "Community" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-8 bg-[#F3EFE7] text-[#12130F] overflow-hidden">
      {/* Background Hero Image - clear and visible with subtle opacity reduction */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <Image
          src="/images/mainimageallvisiting.JPG"
          alt="Neo Spark collective cohort visiting technology program"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%] opacity-75 sm:opacity-85 transition-opacity duration-500"
        />
        {/* Soft, clear directional gradient protecting left-side text while leaving right side completely clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F3EFE7]/90 via-[#F3EFE7]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F3EFE7]/50 via-transparent to-[#F3EFE7]/30" />
      </div>

      {/* Background blueprint architectural accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] z-0"
        style={{
          backgroundImage:
            "linear-gradient(#12130F 1px, transparent 1px), linear-gradient(90deg, #12130F 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="max-w-4xl">
          {/* Eyebrow badge with floating animation */}
          <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#CFC8B8] bg-[#E7E0D2]/70 text-[#2F4A3A]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F4A3A] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2F4A3A]" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                Student-Run Technology Organization — Pokhara, Nepal
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F4A3A]/10 border border-[#2F4A3A]/20 text-[#2F4A3A] font-mono text-xs font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F4A3A]" />
              <span>2x Collegiate Champions (IoT Fest & InnoHack)</span>
            </motion.div>
          </div>

          {/* Main Title with masked reveal */}
          <div className="overflow-hidden mb-6 sm:mb-8">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#12130F] leading-[1.05]"
            >
              We engineer things <br />
              <span className="text-[#2F4A3A] italic font-serif font-normal">
                that actually work.
              </span>
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="text-lg sm:text-xl text-[#6B685E] max-w-2xl font-sans leading-relaxed mb-8 sm:mb-10"
          >
            Built by students. Trusted beyond the classroom. From physical IoT
            arcade games to hackathon-winning platforms — designed, wired, and
            shipped by undergraduates in college.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/#projects"
              className="btn-magnetic btn-forest-solid px-7 py-3.5 text-sm font-semibold tracking-wide shadow-sm"
            >
              <span>Explore Our Work</span>
              <ArrowDown className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic btn-outline-light px-6 py-3.5 text-sm font-medium"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Open Source</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Infinite scrolling technical disciplines strip using LogoLoop (NO marquee tag) */}
      <div className="w-full pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#6B685E]">
            Core Disciplines & Toolchains
          </span>
          <span className="font-mono text-[11px] text-[#6B685E]/70 hidden sm:inline">
            Scroll to discover
          </span>
        </div>
        <LogoLoop
          items={techDomains}
          direction="left"
          speedSeconds={32}
          theme="light"
        />
      </div>
    </section>
  );
}
