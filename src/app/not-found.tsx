import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#12130F] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#2F4A3A] px-3 py-1 rounded-full bg-[#E7E0D2] border border-[#CFC8B8]">
          Error 404 — Build Missing
        </span>

        <h1 className="text-5xl sm:text-6xl font-display font-bold tracking-tight text-[#12130F]">
          Project Not Found
        </h1>

        <p className="text-base text-[#6B685E] font-sans leading-relaxed">
          The project or resource you requested is either still under hardware
          assembly or does not exist in the public repository archive.
        </p>

        <div className="pt-4">
          <Link
            href="/#projects"
            className="btn-magnetic btn-forest-solid px-6 py-3 text-sm font-semibold tracking-wide inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
