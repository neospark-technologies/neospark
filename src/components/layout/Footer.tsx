"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, navItems } from "@/data/site";
import { builtProjects } from "@/data/projects";
import { GithubIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="bg-[#12130F] text-[#F3EFE7] hairline-t-dark pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 hairline-b-dark">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#F3EFE7] text-[#12130F] font-mono text-xs font-bold flex items-center justify-center">
                NS
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-[#F3EFE7]">
                Neo Spark Technologies
              </span>
            </Link>
            <p className="text-sm text-[#A6A394] max-w-sm font-sans leading-relaxed">
              A student-run technology organization that designs, builds, and
              ships real products — from IoT hardware to full-stack software.
              Based in Pokhara, Nepal.
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-mono text-xs text-[#7FA38A] hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A6A394] block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-[#F3EFE7]/80">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#7FA38A] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shipped Projects Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A6A394] block">
              Shipped Projects
            </span>
            <ul className="space-y-2 text-sm text-[#F3EFE7]/80">
              {builtProjects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="hover:text-[#7FA38A] transition-colors flex items-center justify-between group"
                  >
                    <span>{p.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="lg:col-span-2 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A6A394] block">
              Connect
            </span>
            <ul className="space-y-2 text-sm text-[#F3EFE7]/80">
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#7FA38A] transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
              {siteConfig.socials.instagram && (
                <li>
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#7FA38A] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {siteConfig.socials.linkedin && (
                <li>
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#7FA38A] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A6A394]">
          <p>© 2026 Neo Spark Technologies. All rights reserved.</p>
          <p className="text-[#7FA38A]">Built by students. Shipped for real.</p>
        </div>
      </div>
    </footer>
  );
}
