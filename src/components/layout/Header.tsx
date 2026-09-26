"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { GithubIcon } from "@/components/ui/icons";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Solid background after 60px
      setIsScrolled(currentScrollY > 60);

      // Hide on scroll down, reveal on scroll up
      if (currentScrollY > 180) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Detect active section on homepage
      if (pathname === "/") {
        const sections = [
          "about",
          "projects",
          "achievements",
          "journey",
          "gallery",
          "supporters",
          "contact",
        ];
        const scrollPosition = currentScrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen, pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-[#12130F]/90 backdrop-blur-md border-b border-[#2B2E27] py-3.5 shadow-sm text-[#F3EFE7]"
            : "bg-transparent py-5 text-[#12130F]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Neo Spark Technologies Home"
          >
            <span
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all ${
                isScrolled
                  ? "bg-[#F3EFE7] text-[#12130F]"
                  : "bg-[#12130F] text-[#F3EFE7]"
              }`}
            >
              NS
            </span>
            <div className="flex flex-col">
              <span
                className={`font-display text-base font-bold tracking-tight transition-colors ${
                  isScrolled ? "text-[#F3EFE7]" : "text-[#12130F]"
                }`}
              >
                Neo Spark
              </span>
              <span
                className={`font-mono text-[9px] uppercase tracking-wider opacity-60 ${
                  isScrolled ? "text-[#A6A394]" : "text-[#6B685E]"
                }`}
              >
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace("/#", "");
              const isActive = pathname === "/" && activeSection === sectionId;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isScrolled
                      ? isActive
                        ? "text-[#F3EFE7] bg-[#2B2E27]"
                        : "text-[#A6A394] hover:text-[#F3EFE7] hover:bg-[#1C1E19]"
                      : isActive
                      ? "text-[#12130F] bg-[#E7E0D2]"
                      : "text-[#6B685E] hover:text-[#12130F] hover:bg-[#E7E0D2]/60"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#7FA38A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: GitHub & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                isScrolled
                  ? "border-[#2B2E27] bg-[#1C1E19] text-[#F3EFE7] hover:border-[#7FA38A]"
                  : "border-[#CFC8B8] bg-[#E7E0D2]/60 text-[#12130F] hover:border-[#12130F]"
              }`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg md:hidden border transition-colors ${
                isScrolled
                  ? "border-[#2B2E27] text-[#F3EFE7] bg-[#1C1E19]"
                  : "border-[#CFC8B8] text-[#12130F] bg-[#E7E0D2]"
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Staggered Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#12130F] text-[#F3EFE7] flex flex-col justify-between p-6 pt-24 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              <span className="font-mono text-xs text-[#A6A394] tracking-widest uppercase mb-2">
                Navigation
              </span>
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-2xl font-display font-semibold hover:text-[#7FA38A] transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs opacity-40">
                      0{idx + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="pt-6 border-t border-[#2B2E27] flex flex-col gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#1C1E19] border border-[#2B2E27] text-sm font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Follow on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <p className="font-mono text-[11px] text-[#A6A394] text-center">
                Pokhara, Nepal — Built by students.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
