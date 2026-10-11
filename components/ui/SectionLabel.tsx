import { cn } from "@/lib/cn";
import { RecDot } from "./RecDot";

type SectionLabelProps = {
  children: React.ReactNode;
  /** `light` = on the light page background, `dark` = inside a black panel */
  tone?: "light" | "dark";
  /** Orange REC light before the label */
  dot?: boolean;
  /** Short rule after the label */
  rule?: boolean;
  className?: string;
};

export function SectionLabel({ children, tone = "light", dot = false, rule = true, className }: SectionLabelProps) {
  return (
    <p className={cn("flex items-center gap-3", className)}>
      {dot && <RecDot size={8} />}
      <span className={cn("mono-label", tone === "dark" ? "text-fog" : "text-muted")}>{children}</span>
      {rule && (
        <span aria-hidden className={cn("h-px w-12", tone === "dark" ? "bg-white/25" : "bg-ink/30")} />
      )}
    </p>
  );
}
