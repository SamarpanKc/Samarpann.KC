import type { Service } from "@/content/portfolio";

type CassetteProps = {
  service: Service;
  /** Track number shown on the label, e.g. "01" */
  track: string;
  /** Unique prefix for SVG ids (gradients / clip paths) */
  uid: string;
};

const HOLES = [
  { cx: 104, cy: 172, r: 4 },
  { cx: 133, cy: 181, r: 5 },
  { cx: 171, cy: 181, r: 5 },
  { cx: 198, cy: 172, r: 4 },
];
const SCREWS = [
  [12.5, 12.5],
  [289.5, 12.5],
  [12.5, 183.5],
  [289.5, 183.5],
  [151, 142.5],
];

/** 6-tooth reel hub star, centred on (cx, cy). */
function hubStar(cx: number, cy: number, r = 5, inner = 2.75) {
  const pts: string[] = [];
  for (let i = 0; i < 12; i++) {
    const rad = ((i * 30 - 90) * Math.PI) / 180;
    const rr = i % 2 === 0 ? r : inner;
    pts.push(`${(cx + rr * Math.cos(rad)).toFixed(2)},${(cy + rr * Math.sin(rad)).toFixed(2)}`);
  }
  return pts.join(" ");
}

/**
 * Compact cassette (302×196) drawn from the Figma "Cassette" frames:
 * shell, paper label with colour stripe, tape window with spools, head
 * guard, holes and screws. Reels spin while the card is hovered.
 */
export function Cassette({ service, track, uid }: CassetteProps) {
  const dark = service.shell === "dark";
  const id = (name: string) => `${uid}-${name}`;

  return (
    <svg
      viewBox="0 0 302 196"
      className="block h-auto w-full [filter:drop-shadow(0_22px_20px_rgb(0_0_0/0.22))]"
      role="img"
      aria-label={`Cassette labelled ${service.title}, side A track ${track}`}
    >
      <defs>
        <linearGradient id={id("shell")} x1="0" y1="0" x2="0" y2="196" gradientUnits="userSpaceOnUse">
          <stop stopColor={dark ? "#232323" : "#E4E4E4"} />
          <stop offset="1" stopColor={dark ? "#0B0B0B" : "#BDBDBD"} />
        </linearGradient>
        <linearGradient id={id("guard")} x1="0" y1="150" x2="0" y2="196" gradientUnits="userSpaceOnUse">
          <stop stopColor={dark ? "#2E2E2E" : "#CFCFCF"} />
          <stop offset="1" stopColor={dark ? "#1A1A1A" : "#B0B0B0"} />
        </linearGradient>
        <linearGradient id={id("label")} x1="0" y1="0" x2="0" y2="118" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBF9F4" />
          <stop offset="1" stopColor="#EDE8DD" />
        </linearGradient>
        <linearGradient id={id("window")} x1="0" y1="0" x2="0" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2A2A2A" />
          <stop offset="1" stopColor="#111111" />
        </linearGradient>
        <linearGradient id={id("screw")} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#C8C8C8" />
          <stop offset="1" stopColor="#6A6A6A" />
        </linearGradient>
        <clipPath id={id("label-clip")}>
          <rect width="274" height="118" rx="10" />
        </clipPath>
        <clipPath id={id("window-clip")}>
          <rect width="162" height="42" rx="21" />
        </clipPath>
      </defs>

      {/* Shell */}
      <rect width="302" height="196" rx="16" fill={`url(#${id("shell")})`} />
      <rect x="0.5" y="0.5" width="301" height="195" rx="15.5" fill="none" stroke="#FFFFFF" strokeOpacity={dark ? 0.1 : 0.8} />

      {/* Label */}
      <g transform="translate(14 14)">
        <g clipPath={`url(#${id("label-clip")})`}>
          <rect width="274" height="118" fill={`url(#${id("label")})`} />
          <rect width="274" height="28" fill={service.accent} />
        </g>
        <circle cx="19" cy="14" r="9" fill={service.onAccent} />
        <text x="19" y="14" textAnchor="middle" dominantBaseline="central" className="font-mono text-[11px] font-medium" fill={service.accent}>
          A
        </text>
        <text x="36" y="14" dominantBaseline="central" className="font-mono text-[10px] font-medium tracking-label uppercase" fill={service.onAccent}>
          Side A · Track {track}
        </text>
        <text x="262" y="14" textAnchor="end" dominantBaseline="central" className="font-mono text-[10px] font-medium tracking-label" fill={service.onAccent}>
          C-60
        </text>
        <text x="12" y="49" className="text-[19px] font-bold tracking-snug" fill="#0A0A0A">
          {service.title}
        </text>
        <rect x="12" y="62" width="250" height="1" fill="#0A0A0A" fillOpacity="0.12" />

        {/* Tape window */}
        <g transform="translate(56 68)">
          <g clipPath={`url(#${id("window-clip")})`}>
            <rect width="162" height="42" fill={`url(#${id("window")})`} />
            <rect width="162" height="3" fill="#000" fillOpacity="0.45" />
            <circle cx="27" cy="21" r={service.spool[0] / 2} fill="#4A3426" />
            <circle cx="135" cy="21" r={service.spool[1] / 2} fill="#4A3426" />
            <rect x="27" y="34" width="108" height="3" fill="#4A3426" />
            {[27, 135].map((cx) => (
              <g key={cx} className="origin-center [transform-box:fill-box] group-hover/cassette:animate-reel-spin">
                <circle cx={cx} cy="21" r="13" fill="#F4F4F4" />
                <circle cx={cx} cy="21" r="6" fill="#1A1A1A" />
                <polygon points={hubStar(cx, 21)} fill="#F4F4F4" />
                <circle cx={cx} cy="21" r="2.5" fill="#1A1A1A" />
              </g>
            ))}
          </g>
        </g>
        <text x="40" y="89" className="font-mono text-[9px] font-medium" fill="#0A0A0A" fillOpacity="0.5">
          0
        </text>
        <text x="226" y="89" className="font-mono text-[9px] font-medium" fill="#0A0A0A" fillOpacity="0.5">
          60
        </text>
      </g>

      {/* Head guard + holes */}
      <path d="M64 196L82 150H220L238 196Z" fill={`url(#${id("guard")})`} stroke="#FFFFFF" strokeOpacity={dark ? 0.08 : 0.6} />
      {HOLES.map((h) => (
        <circle key={h.cx} cx={h.cx} cy={h.cy} r={h.r} fill="#050505" />
      ))}

      {/* Screws */}
      {SCREWS.map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="4.5" fill={`url(#${id("screw")})`} />
          <rect x={cx - 2.5} y={cy - 0.6} width="5" height="1.2" fill="#2C2C2C" fillOpacity="0.7" />
        </g>
      ))}
    </svg>
  );
}
