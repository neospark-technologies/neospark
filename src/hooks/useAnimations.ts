"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Intersection Observer hook for reveal-on-scroll animations.
 * Adds 'is-visible' class when element enters viewport.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/**
 * Custom cursor hook.
 * Returns a ref to attach to the cursor element.
 */
export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Only enable on devices that support hover (no touch)
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let rafId: number;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const animate = () => {
      cursorX = lerp(cursorX, mouseX, 0.15);
      cursorY = lerp(cursorY, mouseY, 0.15);
      cursor.style.transform = `translate3d(${cursorX - 10}px, ${cursorY - 10}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!cursor.classList.contains("is-visible")) {
        cursor.classList.add("is-visible");
      }
    };

    const onMouseEnterInteractive = () => cursor.classList.add("is-active");
    const onMouseLeaveInteractive = () => cursor.classList.remove("is-active");

    // Bind to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .cursor-hover'
    );

    document.addEventListener("mousemove", onMouseMove);
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
      cancelAnimationFrame(rafId);
    };
  }, []);

  return cursorRef;
}

/**
 * Smooth scroll to element by ID.
 */
export function useSmoothScroll() {
  return useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
}
