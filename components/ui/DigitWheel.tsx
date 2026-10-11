import { cn } from "@/lib/cn";

/** Wheel sizes from Figma: lock stats (lg), tape counter (md), experience counters (sm). */
const SIZES = {
  lg: { w: 46, h: 84, big: 32, small: 18 },
  md: { w: 40, h: 70, big: 28, small: 15 },
  sm: { w: 30, h: 50, big: 22, small: 12 },
} as const;

export type WheelSize = keyof typeof SIZES;

/**
 * One cylinder of a combination lock / tape counter: the current digit
 * sits in the middle, its neighbours fade over the curved edge.
 */
export function DigitWheel({ digit, size = "lg", className }: { digit: string; size?: WheelSize; className?: string }) {
  const s = SIZES[size];
  const d = Number.parseInt(digit, 10);
  const prev = Number.isNaN(d) ? "" : String((d + 9) % 10);
  const next = Number.isNaN(d) ? "" : String((d + 1) % 10);

  return (
    <span
      aria-hidden
      className={cn("relative block shrink-0 overflow-hidden font-mono font-medium text-ink", className)}
      style={{
        width: s.w,
        height: s.h,
        borderRadius: Math.round(s.w * 0.22),
        background: "linear-gradient(180deg, #5e5e5e 0%, #f4f4f4 50%, #5e5e5e 100%)",
      }}
    >
      <span className="absolute inset-x-0 text-center leading-none opacity-35" style={{ top: -s.small * 0.05, fontSize: s.small }}>
        {prev}
      </span>
      <span
        key={digit}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center leading-none"
        style={{ fontSize: s.big }}
      >
        <span className="inline-block motion-safe:animate-tick">{digit}</span>
      </span>
      <span className="absolute inset-x-0 text-center leading-none opacity-35" style={{ bottom: -s.small * 0.05, fontSize: s.small }}>
        {next}
      </span>
    </span>
  );
}
