"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const hasLoaded = typeof window !== "undefined" ? sessionStorage.getItem("ns_preloaded") : null;
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 100;
        }
        const step = prev < 75 ? Math.floor(Math.random() * 8 + 4) : Math.floor(Math.random() * 4 + 2);
        return Math.min(100, prev + step);
      });
    }, 40);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("ns_preloaded", "true");
      }
    }, 1800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimeout(timeout);
    };
  }, []);

  if (!isMounted || !isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#12130F] text-[#F3EFE7]"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F3EFE7]"
              >
                Neo Spark Technologies
              </motion.h1>
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-[#7FA38A]">
              Pokhara, Nepal — Student Organization
            </span>

            <div className="font-mono text-sm tracking-wider text-[#A6A394] mt-4 tabular-nums">
              {String(counter).padStart(2, "0")}%
            </div>
          </div>

          {/* Hairline progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2B2E27]">
            <motion.div
              className="h-full bg-[#7FA38A]"
              style={{ width: `${counter}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
