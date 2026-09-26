"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
      className="py-24 sm:py-32 bg-[#12130F] text-[#F3EFE7] hairline-t-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 hairline-b-dark gap-6">
          <div>
            <div className="section-header-tag text-[#7FA38A]">
              <span className="tag-dot" />
              <span>05 / Archive</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#F3EFE7]">
              Moments that <span className="text-[#7FA38A]">shaped us.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A6A394] max-w-xl font-sans">
              From late night breadboard wiring to winning trophies and hiking
              the hills of Pokhara.
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
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
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

        {/* Dynamic Bento / Masonry Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => {
              const isFeatured = img.featured;

              return (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className={`group relative overflow-hidden rounded-xl border border-[#2B2E27] bg-[#1C1E19] cursor-pointer ${
                    isFeatured ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                  data-cursor="open"
                  onClick={() => openLightbox(idx)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Editorial Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12130F]/90 via-[#12130F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Caption & Category on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#7FA38A] block mb-1">
                      {img.category}
                    </span>
                    <p className="font-sans text-sm font-medium text-[#F3EFE7] line-clamp-2">
                      {img.caption || img.alt}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
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
