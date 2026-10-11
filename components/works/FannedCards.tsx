import type { Cover } from "@/content/portfolio";
import { cn } from "@/lib/cn";
import { ProjectCover } from "./ProjectCover";

/* Fan geometry from Figma: 306×344 cards inside a 560×440 box. */
const CARD = { w: 306, h: 344 };
const BOX = { w: 560, h: 440 };
const pct = (v: number, of: number) => `${(v / of) * 100}%`;

const POSITIONS = [
  { cx: 210, cy: 228, motion: "-rotate-12 group-hover/row:-translate-x-[9%] group-hover/row:-rotate-[17deg]" },
  { cx: 350, cy: 228, motion: "rotate-12 group-hover/row:translate-x-[9%] group-hover/row:rotate-[17deg]" },
  { cx: 280, cy: 220, motion: "group-hover/row:-translate-y-[3%] group-hover/row:scale-[1.03]" },
] as const;

/** Three project covers fanned like cards in a hand — [back-left, back-right, front]. */
export function FannedCards({ cards, className }: { cards: [Cover, Cover, Cover]; className?: string }) {
  return (
    <div className={cn("relative aspect-[560/440] w-full max-w-[560px]", className)}>
      {cards.map((cover, i) => {
        const p = POSITIONS[i];
        return (
          <div
            key={cover.name}
            className={cn(
              "absolute transition-transform duration-700 ease-[var(--ease-out-expo)] will-change-transform",
              p.motion,
            )}
            style={{
              left: pct(p.cx - CARD.w / 2, BOX.w),
              top: pct(p.cy - CARD.h / 2, BOX.h),
              width: pct(CARD.w, BOX.w),
              height: pct(CARD.h, BOX.h),
            }}
          >
            <ProjectCover
              cover={cover}
              refW={CARD.w}
              refH={CARD.h}
              radius={56}
              inset={{ tag: [28, 30], mark: [26, 28] }}
              className="size-full shadow-[0_28px_56px_rgb(0_0_0/0.55)]"
            />
            {i < 2 && <span className="sr-only">{cover.name}</span>}
          </div>
        );
      })}
    </div>
  );
}
