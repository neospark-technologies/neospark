"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const prefersReduced = useReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hoverType, setHoverType] = useState<string | null>(null);
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for mouse/trackpad (fine pointer), never touch
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setHasFinePointer(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setHasFinePointer(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    if (!mediaQuery.matches || prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest("[data-cursor='view']");
      const galleryItem = target.closest("[data-cursor='open']");
      const link = target.closest("a, button, [role='button']");

      if (projectCard) {
        setHoverType("VIEW");
      } else if (galleryItem) {
        setHoverType("OPEN");
      } else if (link) {
        setHoverType("LINK");
      } else {
        setHoverType(null);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, prefersReduced]);

  if (!hasFinePointer || prefersReduced || !isVisible) {
    return null;
  }

  const isExpanded = hoverType === "VIEW" || hoverType === "OPEN";
  const isLink = hoverType === "LINK";

  return (
    <>
      {/* Precision Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          left: pos.x,
          top: pos.y,
          opacity: isExpanded ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      />

      {/* Outer Adaptive Ring */}
      <motion.div
        className={`cursor-ring ${isExpanded ? "cursor-hover" : ""}`}
        animate={{
          x: pos.x,
          y: pos.y,
          width: isExpanded ? 64 : isLink ? 42 : 28,
          height: isExpanded ? 64 : isLink ? 42 : 28,
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 300,
          mass: 0.5,
        }}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        {isExpanded && (
          <span className="font-mono text-[9px] tracking-widest font-semibold text-[#F3EFE7]">
            {hoverType}
          </span>
        )}
      </motion.div>
    </>
  );
}
