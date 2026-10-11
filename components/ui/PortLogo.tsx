import Image from "next/image";
import { cn } from "@/lib/cn";

type PortLogoProps = {
  className?: string;
  /** Load eagerly when the logo is above the fold. */
  eager?: boolean;
};

/**
 * USB-C "port" + folio wordmark. Every dimension is in `em`, so the whole
 * lockup scales from a single font-size (54px in the hero, per Figma).
 */
export function PortLogo({ className, eager = false }: PortLogoProps) {
  return (
    <span className={cn("inline-flex items-start gap-[0.032em] leading-none select-none", className)}>
      <Image
        src="/assets/port.svg"
        alt=""
        width={116}
        height={41}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="mt-[0.2226em] h-[0.7514em] w-[2.143em] shrink-0"
      />
      <span className="text-[1em] leading-[1.105] font-bold tracking-display text-ink">folio</span>
      <span className="sr-only">Samarpann KC portfolio</span>
    </span>
  );
}
