"use client";

import { useState } from "react";
import type { TransportControl } from "@/content/portfolio";
import { process } from "@/content/portfolio";
import { LockPills } from "@/components/ui/LockPills";
import { cn } from "@/lib/cn";

function ControlIcon({ control }: { control: TransportControl }) {
  if (control === "record") {
    return <span aria-hidden className="size-4 rounded-full bg-rec shadow-[0_0_8px_1px_rgb(255_91_31/0.6)]" />;
  }
  const icon = {
    rewind: { w: 22, d: "M22 0V16L11 8Z M11 0V16L0 8Z" },
    play: { w: 14, d: "M0 0L14 8L0 16Z" },
    eject: { w: 16, d: "M8 0L16 9H0Z M0 12H16V16H0Z" },
  }[control];
  return (
    <svg aria-hidden width={icon.w} height="16" viewBox={`0 0 ${icon.w} 16`} className="shrink-0">
      <path d={icon.d} fill="currentColor" />
    </svg>
  );
}

/** Transport-control lock pills (Rewind / Record / Play / Eject) driving the four process steps. */
export function ProcessDeck() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-10 lg:gap-[72px]">
      <LockPills
        tone="deck"
        height={70}
        ariaLabel="Process steps"
        className="w-full"
        pillClassName="text-[18px] font-bold tracking-snug text-ink md:text-[20px] xl:text-[22px]"
        items={process.steps.map((step, i) => ({
          key: step.control,
          label: (
            <>
              <ControlIcon control={step.control} />
              {step.name}
            </>
          ),
          active: active === i,
          onClick: () => setActive((cur) => (cur === i ? null : i)),
          props: { "aria-pressed": active === i, "aria-controls": `step-${step.no}` },
        }))}
      />

      <ol className="grid gap-x-[18px] gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, i) => (
          <li
            key={step.no}
            id={`step-${step.no}`}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={cn(
              "flex flex-col gap-3.5 border-l pr-3 pl-5 transition-[opacity,border-color] duration-500",
              active === i ? "border-rec" : "border-white/14",
              active !== null && active !== i && "opacity-45",
            )}
          >
            <p className="font-mono text-[11px] tracking-label text-subtle uppercase">
              Step {step.no} — {step.time}
            </p>
            <h3 className="text-[24px] leading-[1.15] font-bold tracking-snug text-paper">{step.title}</h3>
            <p className="text-[16px] leading-[1.5] font-medium tracking-body text-fog">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
