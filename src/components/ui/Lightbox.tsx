"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  const activeImage = images[currentIndex];
  if (!activeImage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#12130F]/95 backdrop-blur-md p-4 sm:p-8"
          onClick={onClose}
        >
          {/* Top Bar */}
          <div
            className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-20 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-mono text-xs tracking-wider text-[#A6A394] bg-[#1C1E19]/80 px-3 py-1.5 rounded-full border border-[#2B2E27]">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#1C1E19]/80 hover:bg-[#2B2E27] text-[#F3EFE7] border border-[#2B2E27] transition-colors focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#1C1E19]/80 hover:bg-[#2B2E27] text-[#F3EFE7] border border-[#2B2E27] transition-all hover:scale-105 focus:outline-none hidden sm:flex items-center justify-center"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#1C1E19]/80 hover:bg-[#2B2E27] text-[#F3EFE7] border border-[#2B2E27] transition-all hover:scale-105 focus:outline-none hidden sm:flex items-center justify-center"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Main Image Stage */}
          <div
            className="relative w-full max-w-5xl max-h-[80vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[60vh] sm:h-[72vh] rounded-lg overflow-hidden border border-[#2B2E27] bg-[#1C1E19]"
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Caption */}
            {activeImage.caption && (
              <p className="mt-4 font-sans text-sm text-[#A6A394] text-center max-w-lg">
                {activeImage.caption}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
