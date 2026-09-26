"use client";

import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { GithubIcon } from "@/components/ui/icons";

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#E7E0D2] text-[#12130F] hairline-t-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#12130F] text-[#F3EFE7] p-8 sm:p-14 lg:p-20 relative overflow-hidden">
          {/* Subtle background blueprint accents */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#F3EFE7 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 max-w-3xl">
            <div className="section-header-tag text-[#7FA38A]">
              <span className="tag-dot" />
              <span>07 / Get Involved</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#F3EFE7] mb-6 leading-tight">
              Want to engineer <br />
              <span className="text-[#7FA38A]">something real?</span>
            </h2>

            <p className="text-base sm:text-xl text-[#A6A394] font-sans leading-relaxed mb-10 max-w-2xl">
              We are constantly seeking students, makers, and innovators who want
              to push beyond the syllabus. Build hardware, deploy software, and
              ship technology that leaves the classroom.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="btn-magnetic btn-forest-solid px-8 py-4 text-sm font-semibold tracking-wide"
              >
                <Mail className="w-4 h-4" />
                <span>Say Hello</span>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic btn-outline-dark px-7 py-4 text-sm font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Explore on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-[#2B2E27] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A6A394]">
              <span>Location: Pokhara, Nepal</span>
              <span>Direct: {siteConfig.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
