"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { galleryImages } from "@/data/achievements";
import { Lightbox } from "@/components/ui/Lightbox";
import type { GalleryImage } from "@/types";

type GalleryCategory = "all" | "team" | "event" | "workshop" | "project" | "trip";

export function GallerySection() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = galleryImages.filter((img) => {
    if (activeTab === "all") return true;
    return img.category === activeTab;
  });

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const tabs: Array<{ label: string; value: GalleryCategory }> = [
    { label: "All Moments", value: "all" },
    { label: "Team", value: "team" },
    { label: "Events", value: "event" },
    { label: "Projects", value: "project" },
    { label: "Workshops", value: "workshop" },
    { label: "Trips", value: "trip" },
  ];

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-[#12130F] text-[#F3EFE7] hairline-t-dark relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#2F4A3A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#7FA38A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 hairline-b-dark gap-6">
          <div>
            <div className="section-header-tag text-[#7FA38A]">
              <span className="tag-dot" />
              <span>05 / Photographic Archive</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#F3EFE7]">
              Moments that <span className="text-[#7FA38A]">shaped us.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A6A394] max-w-xl font-sans">
              From late night breadboard wiring to winning trophies and exploring
              the hills of Pokhara — captured raw as a student engineering cohort.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-[#1C1E19] border border-[#2B2E27]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-[#12130F]"
                      : "text-[#A6A394] hover:text-[#F3EFE7]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="gallery-tab-active"
                      className="absolute inset-0 bg-[#F3EFE7] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento Mosaic Gallery Grid: varied widths, varied heights, zero gaps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[220px] sm:auto-rows-[240px] gap-4 sm:gap-5 grid-flow-dense"
          >
            {filteredImages.map((img, idx) => {
              const span = img.span || (img.featured ? "wide" : "compact");
              const spanClasses =
                span === "wide"
                  ? "col-span-1 sm:col-span-2 row-span-1" // takes more width
                  : span === "tall"
                  ? "col-span-1 row-span-2" // takes more height, low width
                  : "col-span-1 row-span-1"; // takes low width, little height

              return (
                <div
                  key={img.id}
                  onClick={() => openLightbox(idx)}
                  className={`group relative w-full h-full rounded-2xl overflow-hidden border border-[#2B2E27] bg-[#161814] cursor-pointer shadow-md hover:border-[#7FA38A] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${spanClasses}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Always subtle bottom gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12130F]/90 via-[#12130F]/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge: Category & Enlarge trigger */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md bg-[#12130F]/80 backdrop-blur-md border border-[#2B2E27] font-mono text-[10px] text-[#7FA38A] uppercase tracking-wider">
                      {img.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#12130F]/80 backdrop-blur-md border border-[#2B2E27] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5 text-[#F3EFE7]" />
                    </div>
                  </div>

                  {/* Bottom Caption always readable */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <p className="font-sans text-xs sm:text-sm font-medium text-[#F3EFE7] leading-snug line-clamp-2">
                      {img.caption || img.alt}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={filteredImages}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? filteredImages.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setCurrentIndex((prev) =>
            prev === filteredImages.length - 1 ? 0 : prev + 1
          )
        }
      />
    </section>
  );
}
