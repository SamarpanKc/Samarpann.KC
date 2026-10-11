import { Fragment } from "react";
import { cn } from "@/lib/cn";

/*
 * Suitcase-lock pills — the gooey, clasp-connected pill strip from Figma.
 *
 * Each clasp is the exact union geometry exported from the Figma file
 * (neck + four fillets) at a 54.92px reference pill height. It is drawn as a
 * clipped div that shares the pills' own gradient, so pill + clasp read as
 * one continuous shape at any `height`.
 */

const REF_H = 54.9205;
const CLASP_PATH =
  "M50.9971 53.3516C48.2509 52.6976 42.0529 50.0564 39.2285 44.7217C35.6979 38.0528 34.9136 31.3838 29.0293 31.3838C23.145 31.3838 22.3607 38.0528 18.8301 44.7217C16.0057 50.0564 9.80771 52.6976 7.06152 53.3516V31.3818H0V21.9668H7.06152V0C9.80771 0.653969 16.0057 3.29518 18.8301 8.62988C22.3497 15.2781 23.1401 21.9256 28.9746 21.9668H29.084C34.9185 21.9256 35.7089 15.2781 39.2285 8.62988C42.0529 3.29518 48.2509 0.653969 50.9971 0V53.3516Z";
/** Only the concave top + bottom edges, used to continue the outline on dark pills. */
const CLASP_EDGES =
  "M7.06152 0C9.80771 0.653969 16.0057 3.29518 18.8301 8.62988C22.3497 15.2781 23.1401 21.9256 28.9746 21.9668H29.084C34.9185 21.9256 35.7089 15.2781 39.2285 8.62988C42.0529 3.29518 48.2509 0.653969 50.9971 0M50.9971 53.3516C48.2509 52.6976 42.0529 50.0564 39.2285 44.7217C35.6979 38.0528 34.9136 31.3838 29.0293 31.3838C23.145 31.3838 22.3607 38.0528 18.8301 44.7217C16.0057 50.0564 9.80771 52.6976 7.06152 53.3516";

function scalePath(d: string, k: number) {
  return d.replace(/-?\d*\.?\d+(?:e-?\d+)?/gi, (n) => String(+(parseFloat(n) * k).toFixed(3)));
}

export type LockPillsTone = "glass" | "dark" | "deck";

export type LockPillItem = {
  key: string;
  label: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  /** Extra attributes for the pill element (aria-pressed, aria-controls…) */
  props?: React.HTMLAttributes<HTMLElement> & Record<`data-${string}`, string>;
};

type LockPillsProps = {
  items: LockPillItem[];
  tone?: LockPillsTone;
  /** Pill height in px — every other dimension derives from it. */
  height?: number;
  /** Below `md` the strip breaks into separate wrapping pills. */
  collapse?: boolean;
  className?: string;
  pillClassName?: string;
  ariaLabel?: string;
  role?: string;
};

export function LockPills({
  items,
  tone = "glass",
  height = 55,
  collapse = true,
  className,
  pillClassName,
  ariaLabel,
  role,
}: LockPillsProps) {
  const k = height / REF_H;
  const clip = `path("${scalePath(CLASP_PATH, k)}")`;

  return (
    <div
      role={role}
      aria-label={ariaLabel}
      data-tone={tone}
      data-collapse={collapse || undefined}
      className={cn("lock-pills", className)}
      style={{ "--pill-h-base": `${height}px` } as React.CSSProperties}
    >
      {items.map((item, i) => {
        const Tag = item.onClick ? "button" : "span";
        return (
          <Fragment key={item.key}>
            {i > 0 && (
              <span aria-hidden className="lock-joint">
                <span
                  className="lock-clasp"
                  style={{
                    left: -21.97 * k,
                    top: 0.785 * k,
                    width: 51 * k,
                    height: 53.352 * k,
                    clipPath: clip,
                    backgroundSize: `100% ${height}px`,
                    backgroundPosition: `0 ${-0.785 * k}px`,
                  }}
                />
                {tone === "dark" && (
                  <svg viewBox="0 0 51 54" fill="none" aria-hidden>
                    <path d={CLASP_EDGES} stroke="rgb(255 255 255 / 0.16)" strokeWidth={1 / k} />
                  </svg>
                )}
              </span>
            )}
            <Tag
              type={Tag === "button" ? "button" : undefined}
              onClick={item.onClick}
              data-active={item.active ? "true" : undefined}
              className={cn("lock-pill", pillClassName)}
              {...item.props}
            >
              {item.label}
            </Tag>
          </Fragment>
        );
      })}
    </div>
  );
}
