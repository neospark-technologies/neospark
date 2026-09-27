"use client";

import React from "react";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { KineticTicker } from "@/components/ui/KineticTicker";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { VideoShowcaseSection } from "@/components/sections/VideoShowcaseSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { SupportersSection } from "@/components/sections/SupportersSection";
import { CTASection } from "@/components/sections/CTASection";

// Client-only dynamic imports for interactive overlays to prevent hydration mismatches
const Preloader = dynamic(
  () =>
    import("@/components/layout/Preloader").then((mod) => mod.Preloader),
  { ssr: false }
);

const CustomCursor = dynamic(
  () =>
    import("@/components/layout/CustomCursor").then((mod) => mod.CustomCursor),
  { ssr: false }
);

export default function HomeClient() {
  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <div
        suppressHydrationWarning
        className="relative min-h-screen bg-[#F3EFE7] text-[#12130F] selection:bg-[#2F4A3A] selection:text-[#F3EFE7]"
      >
        <Header />
        <main>
          <HeroSection />
          <KineticTicker theme="light" />
          <AboutSection />
          <ProjectsSection />
          <VideoShowcaseSection />
          <AchievementsSection />
          <TimelineSection />
          <GallerySection />
          <KineticTicker theme="dark" />
          <SupportersSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
