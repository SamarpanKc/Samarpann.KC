import type { Cover } from "@/content/portfolio";
import { cn, cq } from "@/lib/cn";

type ProjectCoverProps = {
  cover: Cover;
  /** Reference size of this card in the Figma file — art is laid out against it. */
  refW: number;
  refH: number;
  /** Figma corner radius at the reference size */
  radius: number;
  /** Text positions at the reference size: tag/year [x, y] from the top corners, mark [x, y] from bottom-left */
  inset: { tag: [number, number]; mark: [number, number] };
  className?: string;
  children?: React.ReactNode;
};

const fill = (bg: Cover["bg"]) => (Array.isArray(bg) ? `linear-gradient(180deg, ${bg[0]} 0%, ${bg[1]} 100%)` : bg);
const solidOf = (bg: Cover["bg"]) => (Array.isArray(bg) ? bg[1] : bg);

/**
 * Mock project cover. Every value is expressed in container-query units
 * against the Figma reference size, so a card can be any size and keep its
 * composition.
 */
export function ProjectCover({ cover, refW, refH, radius, inset, className, children }: ProjectCoverProps) {
  const w = (px: number) => cq(px, refW, "w");
  const h = (px: number) => cq(px, refH, "h");
  const accent = cover.accent ?? cover.fg;

  return (
    <div
      className={cn("relative isolate overflow-hidden [container-type:size]", className)}
      style={{ background: fill(cover.bg), borderRadius: `${(radius / refW) * 100}% / ${(radius / refH) * 100}%` }}
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <Art cover={cover} w={w} h={h} refW={refW} refH={refH} accent={accent} />
      </div>

      <span
        className="absolute font-mono font-medium tracking-label uppercase opacity-75"
        style={{ left: w(inset.tag[0]), top: h(inset.tag[1]), fontSize: w(11), color: cover.fg }}
      >
        {cover.tag}
      </span>
      <span
        className="absolute font-mono font-medium tracking-label opacity-75"
        style={{ right: w(inset.tag[0]), top: h(inset.tag[1]), fontSize: w(11), color: cover.fg }}
      >
        {cover.year}
      </span>
      <span
        className="absolute font-extrabold whitespace-pre-line"
        style={{
          left: w(inset.mark[0]),
          bottom: h(inset.mark[1]),
          fontSize: w(cover.markSize),
          lineHeight: 0.92,
          letterSpacing: "-0.06em",
          color: cover.fg,
        }}
      >
        {cover.mark}
      </span>
      {children}
    </div>
  );
}

type ArtProps = {
  cover: Cover;
  accent: string;
  refW: number;
  refH: number;
  w: (px: number) => string;
  h: (px: number) => string;
};

function Art({ cover, accent, refW, refH, w, h }: ArtProps) {
  const circle = (size: number, left: string, top: string, background: string, extra?: React.CSSProperties) => (
    <span className="absolute rounded-full" style={{ width: w(size), height: w(size), left, top, background, ...extra }} />
  );

  switch (cover.art) {
    case "moon":
      return circle(refW * 0.5, w(refW * 0.42), h(refH * 0.1), accent, {
        boxShadow: `0 0 60px 4px color-mix(in srgb, ${accent} 60%, transparent)`,
      });

    case "rings": {
      const cx = refW * 0.68;
      const cy = refH * 0.34;
      return (
        <>
          {[0.9, 0.7, 0.5, 0.3].map((k) => (
            <span
              key={k}
              className="absolute rounded-full"
              style={{
                width: w(refW * k),
                height: w(refW * k),
                left: w(cx - (refW * k) / 2),
                top: `calc(${h(cy)} - ${w((refW * k) / 2)})`,
                border: `${w(2)} solid color-mix(in srgb, ${accent} 90%, transparent)`,
              }}
            />
          ))}
          {circle(refW * 0.1, w(cx - refW * 0.05), `calc(${h(cy)} - ${w(refW * 0.05)})`, accent)}
        </>
      );
    }

    case "grid":
      return (
        <>
          <span
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(90deg, color-mix(in srgb, ${accent} 14%, transparent) 1px, transparent 1px), linear-gradient(0deg, color-mix(in srgb, ${accent} 14%, transparent) 1px, transparent 1px)`,
              backgroundSize: `${w(32)} ${w(32)}`,
              backgroundPosition: `${w(24)} ${w(24)}`,
            }}
          />
          <span
            className="absolute"
            style={{ width: w(64), height: w(64), left: w(refW - 24 - 64 - 8), top: w(56), background: cover.highlight ?? "#FF5B1F" }}
          />
        </>
      );

    case "mountain":
      return (
        <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M5 62 L42 18 L66 46 L76 34 L100 62 Z" fill={accent} />
          <path d="M33 29 L42 18 L51 29 L46 27 L42 31 L38 27 Z" fill={cover.bg2 ?? "#fff"} />
        </svg>
      );

    case "sun":
      return (
        <>
          {circle(refW * 0.9, w(refW * 0.05), h(refH * 0.42), accent)}
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="absolute inset-x-0" style={{ top: `calc(${h(refH * 0.62)} + ${w(i * 22)})`, height: w(6), background: solidOf(cover.bg) }} />
          ))}
        </>
      );

    case "sunTop":
      return circle(refW * 0.9, w(refW * 0.25), `calc(${w(refW * 0.9)} * -0.35)`, accent);

    case "dot":
      return circle(refW * 0.42, w(refW * 0.5), h(refH * (refH > refW ? 0.12 : 0.14)), accent);

    case "blob":
      return (
        <>
          {circle(refW * 0.75, w(refW * 0.4), w(-refW * 0.15), accent)}
          {circle(refW * 0.3, w(refW * 0.18), h(refH * 0.3), cover.highlight ?? "#fff")}
        </>
      );

    case "tape":
      return (
        <>
          <span className="absolute inset-x-0" style={{ top: h(refH * 0.3), height: w(46), background: accent }} />
          {[0.3, 0.7].map((k) => (
            <span
              key={k}
              className="absolute grid place-items-center rounded-full"
              style={{
                width: w(54),
                height: w(54),
                left: w(refW * k - 27),
                top: `calc(${h(refH * 0.3)} - ${w(4)})`,
                background: cover.bg2 ?? "#0A0A0A",
                border: `${w(3)} solid #F0F0F0`,
              }}
            >
              <span className="rounded-full bg-[#F0F0F0]" style={{ width: w(16), height: w(16) }} />
            </span>
          ))}
        </>
      );

    case "arrow": {
      const x0 = refW * 0.18;
      const y0 = refH * 0.18;
      const L = refW * 0.62;
      const t = refW * 0.13;
      const d = `M${x0} ${y0 + L * 0.45 - t / 2} L${x0 + L * 0.62} ${y0 + L * 0.45 - t / 2} L${x0 + L * 0.62} ${y0 + L * 0.12} L${x0 + L} ${y0 + L * 0.45} L${x0 + L * 0.62} ${y0 + L * 0.78} L${x0 + L * 0.62} ${y0 + L * 0.45 + t / 2} L${x0} ${y0 + L * 0.45 + t / 2} Z`;
      return (
        <svg className="absolute inset-0 size-full" viewBox={`0 0 ${refW} ${refH}`}>
          <path d={d} fill={accent} />
        </svg>
      );
    }

    case "stripes":
      return (
        <span
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(120deg, color-mix(in srgb, ${accent} 22%, transparent) 0 ${w(18)}, transparent ${w(18)} ${w(38.1)})`,
          }}
        />
      );
  }
}
