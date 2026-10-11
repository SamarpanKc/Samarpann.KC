import { cn } from "@/lib/cn";

/** The glowing orange "REC" light used as a status marker across the site. */
export function RecDot({ size = 10, pulse = true, className }: { size?: number; pulse?: boolean; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("inline-block shrink-0 rounded-full bg-rec shadow-[0_0_8px_1px_rgb(255_91_31/0.55)]", pulse && "animate-rec-pulse", className)}
      style={{ width: size, height: size }}
    />
  );
}
