"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2, Cpu, Sparkles, Video } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  poster: string;
  tag: string;
  specs: string;
}

const videos: VideoItem[] = [
  {
    id: "v1",
    title: "DuoPong Live Arcade Gameplay",
    subtitle: "Real-time ball rally, joystick actuation & automatic ultrasonic goal detection",
    src: "/images/2301595E-C4E8-4624-AB01-F7C2A9E4113C.mp4",
    poster: "/images/winnerofduopong.jpg",
    tag: "Primary Match Feed",
    specs: "1080p MP4 • Dual Arduino/ESP32 • 60 FPS",
  },
  {
    id: "v2",
    title: "Tournament Match & Strike Response",
    subtitle: "Competitive multiplayer action evaluating mechanical paddle durability",
    src: "/images/IMG_4862.mov",
    poster: "/images/douopongpresentation.JPG",
    tag: "Tournament Play",
    specs: "QuickTime Master • MG90S Servos • Active Rally",
  },
  {
    id: "v3",
    title: "Hardware Bench & Microcontroller Wiring",
    subtitle: "Internal electronics bench test: dual microcontrollers, ultrasonic sensors & power isolation",
    src: "/images/IMG_4835.MOV",
    poster: "/images/testing.jpeg",
    tag: "Lab Prototyping",
    specs: "Bench Feed • L298N Motor Drivers • Power Reg",
  },
  {
    id: "v4",
    title: "Public Showcase & Government Exhibit",
    subtitle: "Live demonstration before public officials, educators, and event evaluators",
    src: "/images/IMG_4880.MOV",
    poster: "/images/mainimageallvisiting.JPG",
    tag: "Civic Outreach",
    specs: "Exhibition Feed • Official Invitation Showcase",
  },
];

export function VideoShowcaseSection() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      setIsPlaying(false);
      setProgress(0);
    }
  }, [activeVideo]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current || !videoRef.current.duration) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setProgress((current / duration) * 100);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section
      id="hardware-reels"
      className="py-24 sm:py-32 bg-[#0E100D] text-[#F3EFE7] hairline-t-dark relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#2F4A3A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7FA38A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#23261F] gap-6">
          <div>
            <div className="section-header-tag text-[#7FA38A]">
              <span className="tag-dot" />
              <span>Live Demonstration Reels</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-[#F3EFE7]">
              Hardware in <span className="text-[#7FA38A]">motion.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#A6A394] max-w-md font-sans">
            Raw, unfiltered video recordings of student-built hardware rallying,
            triggering ultrasonic goal events, and captivating live audiences.
          </p>
        </div>

        {/* Video Player & Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Theater Screen (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#2B2E27] bg-[#161814] shadow-2xl group">
              <video
                ref={videoRef}
                src={activeVideo.src}
                poster={activeVideo.poster}
                muted={isMuted}
                playsInline
                loop
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
              />

              {/* Video Overlay Telemetry HUD */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12130F]/80 backdrop-blur-md border border-[#2B2E27] text-[11px] font-mono font-semibold text-[#7FA38A]">
                  <span className="w-2 h-2 rounded-full bg-[#7FA38A] animate-ping" />
                  <span>{activeVideo.tag}</span>
                </div>
                <div className="hidden sm:block px-3 py-1.5 rounded-full bg-[#12130F]/80 backdrop-blur-md border border-[#2B2E27] text-[10px] font-mono text-[#A6A394]">
                  {activeVideo.specs}
                </div>
              </div>

              {/* Center Play Button Overlay when paused */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-[#12130F]/30 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-opacity"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-[#7FA38A] text-[#12130F] flex items-center justify-center shadow-lg pl-1"
                  >
                    <Play className="w-8 h-8 fill-current" />
                  </motion.div>
                </div>
              )}

              {/* Bottom Custom Control Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0E100D] via-[#0E100D]/80 to-transparent p-4 flex flex-col gap-2">
                {/* Progress scrub bar */}
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#7FA38A] transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[#F3EFE7] pt-1">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 fill-current" />
                      )}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                      aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-[#A6A394]" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-[#7FA38A]" />
                      )}
                    </button>

                    <span className="text-[11px] text-[#A6A394]">
                      {activeVideo.title}
                    </span>
                  </div>

                  <button
                    onClick={toggleFullscreen}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Fullscreen view"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Video Description Banner */}
            <div className="p-5 rounded-xl border border-[#2B2E27] bg-[#161814] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-bold text-[#F3EFE7]">
                  {activeVideo.title}
                </h3>
                <p className="text-xs text-[#A6A394] mt-0.5">
                  {activeVideo.subtitle}
                </p>
              </div>
              <div className="px-3 py-1 rounded bg-[#2F4A3A]/40 border border-[#7FA38A]/30 text-[#7FA38A] font-mono text-[11px] whitespace-nowrap">
                Student Engineering Archive
              </div>
            </div>
          </div>

          {/* Video Playlist Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7FA38A] block font-semibold mb-2">
              Select Recording (4 Available)
            </span>

            {videos.map((vid, idx) => {
              const isSelected = activeVideo.id === vid.id;

              return (
                <button
                  key={vid.id}
                  onClick={() => setActiveVideo(vid)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? "bg-[#1E221B] border-[#7FA38A] shadow-md"
                      : "bg-[#141612] border-[#2B2E27] hover:border-[#4B5244] hover:bg-[#1A1D17]"
                  }`}
                >
                  {/* Thumbnail Preview */}
                  <div className="relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-[#2B2E27]">
                    <Image
                      src={vid.poster}
                      alt={vid.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#12130F]/40 flex items-center justify-center">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          isSelected
                            ? "bg-[#7FA38A] text-[#12130F]"
                            : "bg-white/80 text-[#12130F]"
                        }`}
                      >
                        <Play className="w-3 h-3 fill-current pl-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#7FA38A]">
                        {vid.tag}
                      </span>
                      <span className="font-mono text-[10px] text-[#A6A394]">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="font-display text-sm font-bold text-[#F3EFE7] truncate">
                      {vid.title}
                    </h4>
                    <p className="text-[11px] text-[#A6A394] line-clamp-1 mt-0.5">
                      {vid.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
