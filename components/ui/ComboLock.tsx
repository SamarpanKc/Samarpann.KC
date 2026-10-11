"use client";

import { useEffect, useRef, useState } from "react";
import { DigitWheel, type WheelSize } from "./DigitWheel";

type ComboLockProps = {
  value: string;
  size?: WheelSize;
  /** Label read by screen readers instead of the decorative wheels. */
  label?: string;
  className?: string;
};

/**
 * Renders `value` on rolling digit wheels. The wheels spin into place the
 * first time they scroll into view (skipped for reduced motion).
 */
export function ComboLock({ value, size = "lg", label, className }: ComboLockProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [digits, setDigits] = useState(() => value.split(""));

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = value.split("").map((c) => Number.parseInt(c, 10));
    const rect = el.getBoundingClientRect();
    // Only animate locks that are still below the fold.
    if (rect.top < window.innerHeight) return;

    // Park the wheels a few clicks before the combination while off-screen.
    const start = target.map((t, i) => (t + 10 - (4 + i * 2)) % 10);
    const raf = window.requestAnimationFrame(() => setDigits(start.map(String)));

    let timer: number | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        // Jumped past it (anchor link / fast flick): just show the final combination.
        if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0) {
          io.disconnect();
          setDigits(target.map(String));
          return;
        }
        if (!entry.isIntersecting) return;
        io.disconnect();
        const current = [...start];
        timer = window.setInterval(() => {
          let done = true;
          for (let i = 0; i < current.length; i++) {
            if (current[i] !== target[i]) {
              current[i] = (current[i] + 1) % 10;
              done = false;
            }
          }
          setDigits(current.map(String));
          if (done) window.clearInterval(timer);
        }, 110);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.cancelAnimationFrame(raf);
      window.clearInterval(timer);
    };
  }, [value]);

  return (
    <span ref={ref} className={className} role="img" aria-label={label ?? value}>
      {digits.map((d, i) => (
        <DigitWheel key={i} digit={d} size={size} />
      ))}
    </span>
  );
}
