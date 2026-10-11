"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type NowPlayingProps = {
  eyebrow: string;
  title: string;
  /** "mm:ss" shown while paused */
  time: string;
  /** 0–1 position of the playhead */
  progress: number;
  className?: string;
};

const toSeconds = (t: string) => {
  const [m, s] = t.split(":").map(Number);
  return m * 60 + s;
};
const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

/** Glass "now playing" strip — a tiny tape deck for the featured project. */
export function NowPlaying({ eyebrow, title, time, progress, className }: NowPlayingProps) {
  const start = toSeconds(time);
  const length = Math.round(start / progress);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(start);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setElapsed((s) => (s + 1) % length), 1000);
    return () => window.clearInterval(id);
  }, [playing, length]);

  return (
    <div
      className={cn(
        "glass-pill flex max-w-full items-center gap-3 rounded-full py-2.5 pr-5 pl-2.5 sm:gap-4 sm:pr-6",
        "bg-white/50 shadow-[0_12px_32px_rgb(0_0_0/0.07)]",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-pressed={playing}
        aria-label={playing ? "Pause track" : "Play track"}
        className="bg-black-gradient grid size-11 shrink-0 place-items-center rounded-full text-paper transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        {playing ? (
          <svg width="14" height="15" viewBox="0 0 14 15" aria-hidden>
            <rect x="1" width="4" height="15" rx="1" fill="currentColor" />
            <rect x="9" width="4" height="15" rx="1" fill="currentColor" />
          </svg>
        ) : (
          <svg width="13" height="15" viewBox="0 0 13 15" aria-hidden className="translate-x-px">
            <path d="M0 0L13 7.5L0 15Z" fill="currentColor" />
          </svg>
        )}
      </button>

      <span className="flex min-w-0 flex-col gap-[3px] text-left">
        <span className="truncate font-mono text-[11px] tracking-label text-muted uppercase">{eyebrow}</span>
        <span className="truncate text-[15px] leading-tight font-bold tracking-ui sm:text-[17px]">{title}</span>
      </span>

      <span aria-hidden className="relative hidden h-1 w-[120px] shrink-0 overflow-hidden rounded-[2px] bg-ink/12 sm:block">
        <span
          className="absolute inset-y-0 left-0 rounded-[2px] bg-ink transition-[width] duration-1000 ease-linear"
          style={{ width: `${(elapsed / length) * 100}%` }}
        />
      </span>
      <span className="hidden font-mono text-[13px] font-medium tabular-nums sm:inline" aria-label={`Elapsed ${fmt(elapsed)}`}>
        {fmt(elapsed)}
      </span>
    </div>
  );
}
