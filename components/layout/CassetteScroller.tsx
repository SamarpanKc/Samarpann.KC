"use client";

import { useEffect, useRef } from "react";
import { sections } from "@/content/portfolio";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/cn";

const IDS: readonly string[] = sections.map((s) => s.id);

/* Grill lines exported from the Figma "slider tabs" node (33:33). */
const GRILL_TOP = [
  ["M38 87.647C28.2869 86.3817 22.9616 86.3618 13.5 87.647", 2.49153],
  ["M36.151 73.8715C27.904 72.7971 23.3826 72.7803 15.3491 73.8715", 2.11545],
  ["M37.0755 80.5516C28.0955 79.3818 23.1721 79.3634 14.4246 80.5516", 2.30349],
  ["M36.151 66.8121C27.904 65.7378 23.3826 65.7209 15.3491 66.8121", 2.11545],
] as const;
const GRILL_UPPER = [
  ["M40.5 144.36C28.8046 142.837 22.3926 142.813 11 144.36", 3],
  ["M39 127.802C28.494 126.433 22.734 126.412 12.5 127.802", 2.69492],
  ["M40 135.841C28.7011 134.369 22.5064 134.346 11.5 135.841", 2.89831],
  ["M38 119.263C28.2869 117.997 22.9616 117.978 13.5 119.263", 2.49153],
] as const;
const GRILL_LOWER = [
  ["M40.5 197C28.8046 198.524 22.3926 198.547 11 197", 3],
  ["M39 213.559C28.494 214.927 22.734 214.949 12.5 213.559", 2.69492],
  ["M40 205.52C28.7011 206.991 22.5064 207.015 11.5 205.52", 2.89831],
  ["M38 222.098C28.2869 223.363 22.9616 223.383 13.5 222.098", 2.49153],
] as const;
const GRILL_BOTTOM = [
  ["M38 253.713C28.2869 254.979 22.9616 254.998 13.5 253.713", 2.49153],
  ["M36.151 267.489C27.904 268.563 23.3826 268.58 15.3491 267.489", 2.11545],
  ["M37.0755 260.809C28.0955 261.979 23.1721 261.997 14.4246 260.809", 2.30349],
  ["M36.151 274.548C27.904 275.623 23.3826 275.639 15.3491 274.548", 2.11545],
] as const;

function Grill({ lines }: { lines: readonly (readonly [string, number])[] }) {
  return (
    <g data-grill>
      {lines.map(([d, w]) => (
        <path key={d} d={d} stroke="#4F4E4E" strokeWidth={w} strokeLinecap="round" />
      ))}
    </g>
  );
}

/**
 * Fixed cassette-tab scroller on the right edge (Figma "slider tabs").
 * Small knobs step between sections, the big knob rewinds to the top, and
 * the grill ribs drift with the scroll.
 */
export function CassetteScroller() {
  const active = useActiveSection(IDS);
  const svgRef = useRef<SVGSVGElement>(null);
  const index = Math.max(0, IDS.indexOf(active));
  const current = sections[index];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // Ribs drift a couple of px as the page moves, like tape across a head.
        const offset = Math.sin(window.scrollY / 90) * 1.6;
        svgRef.current?.querySelectorAll<SVGGElement>("[data-grill]").forEach((g) => {
          g.style.transform = `translateY(${offset.toFixed(2)}px)`;
        });
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const go = (to: number) => {
    const target = sections[Math.min(sections.length - 1, Math.max(0, to))];
    document.getElementById(target.id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav aria-label="Section scroller" className="group/scroller fixed top-[223px] right-0 z-50 hidden lg:block">
      <div className="relative h-[340px] w-[51px] drop-shadow-[-6px_10px_24px_rgb(0_0_0/0.25)]">
        <svg ref={svgRef} width="51" height="340" viewBox="0 0 51 340" fill="none" aria-hidden>
          <defs>
            <linearGradient id="scroller-shell" x1="25.5" y1="0" x2="25.4996" y2="340" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0A0A0A" />
              <stop offset="0.634698" stopColor="#2C2C2C" />
            </linearGradient>
          </defs>
          <path
            d="M0 78.6016C0 37.8518 21.5156 34.1006 35.3574 34.1006C46.4309 34.1006 50.3997 11.3668 51 0V340C50.3997 328.633 46.4309 305.899 35.3574 305.899C21.5156 305.899 0 302.148 0 261.398V78.6016Z"
            fill="url(#scroller-shell)"
          />
          <Grill lines={GRILL_TOP} />
          <Grill lines={GRILL_UPPER} />
          <Grill lines={GRILL_LOWER} />
          <Grill lines={GRILL_BOTTOM} />
          {/* Knobs */}
          <path d="M19.2288 103.289C18.9987 101.795 18.8843 101.049 19.1664 100.387C19.4485 99.7245 20.0751 99.2721 21.3277 98.3666L22.2637 97.69C23.8217 96.5635 24.601 96 25.5006 96C26.3989 96 27.1776 96.5635 28.7363 97.69L29.6723 98.3666C30.9248 99.2721 31.5508 99.7251 31.8335 100.387C32.1156 101.049 32.0012 101.795 31.7718 103.288L31.5761 104.562C31.2511 106.679 31.088 107.737 30.3288 108.369C29.5696 109.001 28.4601 109 26.241 109H24.759C22.5392 109 21.4297 109 20.6705 108.369C19.9113 107.737 19.7488 106.679 19.4238 104.562L19.2288 103.289Z" fill="#D9D9D9" />
          <g key={active} className="origin-center [transform-box:fill-box] motion-safe:animate-tick">
            <path d="M14.4048 171.896C13.9977 169.253 13.7954 167.933 14.2944 166.761C14.7935 165.589 15.9021 164.789 18.1182 163.187L19.7742 161.99C22.5307 159.997 23.9095 159 25.5011 159C27.0904 159 28.4681 159.997 31.2258 161.99L32.8818 163.187C35.0978 164.789 36.2052 165.591 36.7055 166.761C37.2046 167.933 37.0022 169.253 36.5962 171.895L36.2501 174.149C35.6751 177.893 35.3864 179.765 34.0432 180.883C32.7001 182.001 30.737 182 26.8109 182H24.189C20.2617 182 18.2987 182 16.9555 180.883C15.6123 179.765 15.3248 177.893 14.7498 174.148L14.4048 171.896Z" fill="#D9D9D9" />
            <path d="M28.95 176.25C28.03 176.965 26.8225 177.4 25.5 177.4C24.1775 177.4 22.97 176.965 22.05 176.25" stroke="#BCBCBC" strokeWidth="1.72499" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <path d="M19.2288 238.289C18.9987 236.795 18.8843 236.049 19.1664 235.387C19.4485 234.724 20.0751 234.272 21.3277 233.367L22.2637 232.69C23.8217 231.564 24.601 231 25.5006 231C26.3989 231 27.1776 231.564 28.7363 232.69L29.6723 233.367C30.9248 234.272 31.5508 234.725 31.8335 235.387C32.1156 236.049 32.0012 236.795 31.7718 238.288L31.5761 239.562C31.2511 241.679 31.088 242.737 30.3288 243.369C29.5696 244.001 28.4601 244 26.241 244H24.759C22.5392 244 21.4297 244 20.6705 243.369C19.9113 242.737 19.7488 241.679 19.4238 239.562L19.2288 238.289Z" fill="#D9D9D9" />
          <path d="M27.4503 240.75C26.9303 241.154 26.2478 241.4 25.5003 241.4C24.7528 241.4 24.0703 241.154 23.5503 240.75" stroke="#BCBCBC" strokeWidth="0.974992" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* Hit areas over the knobs */}
        <button
          type="button"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="Previous section"
          className="absolute top-[80px] left-[3px] size-11 cursor-pointer rounded-full disabled:cursor-default"
        />
        <button
          type="button"
          onClick={() => go(0)}
          aria-label="Back to top"
          className="absolute top-[148px] left-[3px] size-11 cursor-pointer rounded-full"
        />
        <button
          type="button"
          onClick={() => go(index + 1)}
          disabled={index === sections.length - 1}
          aria-label="Next section"
          className="absolute top-[216px] left-[3px] size-11 cursor-pointer rounded-full disabled:cursor-default"
        />

        {/* Current section label — flashes on every section change, stays while hovered */}
        <p
          key={current.id}
          aria-live="polite"
          className={cn(
            "pointer-events-none absolute top-[170px] right-[calc(100%+14px)] flex -translate-y-1/2 items-center gap-2 rounded-xl px-3 py-2 whitespace-nowrap",
            "bg-black-gradient shadow-[0_8px_20px_rgb(0_0_0/0.2)]",
            "animate-label-flash group-hover/scroller:animate-none group-focus-within/scroller:animate-none motion-reduce:animate-none",
          )}
        >
          <span aria-hidden className="size-1.5 rounded-full bg-rec" />
          <span className="font-mono text-[11px] font-medium tracking-label text-paper uppercase">
            {String(index + 1).padStart(2, "0")} / {current.label}
          </span>
        </p>
      </div>
    </nav>
  );
}
