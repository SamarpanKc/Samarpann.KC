import { site, works } from "@/content/portfolio";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/cn";

/* Folder row geometry from Figma (1238×350 box, folders bottom-aligned). */
const ROW = { w: 1238, h: 350 };
const LAYOUT = [
  { left: 0, width: 284, z: 1 },
  { left: 162, width: 370.9, z: 2 },
  { left: 421, width: 473.67, z: 3 },
  { left: 730, width: 370.9, z: 2 },
  { left: 954, width: 284, z: 1 },
] as const;

/** Label metrics per folder size, in cqw of that folder (Figma px ÷ folder width). */
const LABEL = {
  sm: { pad: 8.45, bottom: 7.75, title: 8.45, meta: 3.52 },
  md: { pad: 6.47, bottom: 5.93, title: 8.09, meta: 2.7 },
  lg: { pad: 8.44, bottom: 7.6, title: 9.29, meta: 2.53 },
} as const;

/** Back shape of the glass folder, exported from Figma (node 51:4). */
function FolderBack() {
  return (
    <svg
      aria-hidden
      viewBox="82.67 26.67 422.29 301"
      overflow="visible"
      className="absolute top-0 left-[5.42%] h-[86%] w-[89.15%] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover/folder:-translate-y-[4%]"
    >
      <g filter="url(#folder-back-fx)">
        <path
          d="M215.669 26.6687C221.908 26.6687 227.86 27.893 233.3 30.1143C258.954 40.5908 282.308 66.3357 310.019 66.3357H439.627C476.624 66.3357 506.239 97.0275 504.919 134.001L500.252 264.667C498.996 299.819 470.136 327.669 434.961 327.669H156.817C123.918 327.669 96.5028 303.296 92.0997 271.312C91.7669 268.895 89.7594 267.002 87.3192 267.002C84.751 267.002 82.6689 264.92 82.6689 262.351V73.3357C82.6689 72.0857 82.719 70.847 82.8154 69.6218L82.6817 66.6225C82.6748 66.4662 82.7996 66.3357 82.956 66.3357C83.0919 66.3357 83.2074 66.2355 83.2283 66.1013C86.7047 43.7634 106.023 26.6687 129.336 26.6687H215.669Z"
          fill="url(#folder-back-grad)"
        />
      </g>
    </svg>
  );
}

function FolderDefs() {
  return (
    <svg aria-hidden className="absolute size-0 overflow-hidden" focusable="false">
      <defs>
        <filter id="folder-back-fx" x="0" y="0" width="587.63" height="466.34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="56" />
          <feGaussianBlur stdDeviation="41.3344" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.25098 0 0 0 0 0.494118 0 0 0 0 0.956863 0 0 0 0.15 0" />
          <feBlend in2="BackgroundImageFix" result="dropShadow" />
          <feBlend in="SourceGraphic" in2="dropShadow" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="9.33333" />
          <feGaussianBlur stdDeviation="4.66667" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
          <feBlend in2="shape" />
        </filter>
        <linearGradient id="folder-back-grad" x1="294.381" y1="1.00204" x2="294.381" y2="376.669" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5FB6FB" />
          <stop offset="0.426658" stopColor="#3369F9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** "Dig through the whole crate" — the glass folder archive closing the Works panel. */
export function FolderArchive() {
  const { crate } = works;

  return (
    <div className="flex flex-col items-center gap-10 text-center md:gap-12">
      <div className="flex flex-col items-center gap-5" data-reveal>
        <SectionLabel tone="dark" rule={false}>
          {crate.eyebrow}
        </SectionLabel>
        <h3 className="text-title leading-[1.02] font-bold tracking-display text-paper">
          <span className="block">{crate.title[0]}</span>
          <span className="block">{crate.title[1]}</span>
        </h3>
      </div>

      <FolderDefs />
      <ul
        className="relative w-[150%] max-w-[1238px] shrink-0 md:w-full"
        style={{ aspectRatio: `${ROW.w} / ${ROW.h}` }}
        data-reveal
      >
        {crate.folders.map((folder, i) => {
          const pos = LAYOUT[i];
          const m = LABEL[folder.size as keyof typeof LABEL];
          return (
            <li
              key={folder.label}
              className="group/folder absolute bottom-0 aspect-[473.67/350] [container-type:inline-size] [perspective:900px]"
              style={{ left: `${(pos.left / ROW.w) * 100}%`, width: `${(pos.width / ROW.w) * 100}%`, zIndex: pos.z }}
            >
              <FolderBack />
              <div className="folder-face group-hover/folder:[transform:rotateX(-16deg)]">
                <div
                  className={cn("absolute flex flex-col gap-[0.6cqw] text-white", folder.align === "end" ? "items-end text-right" : "items-start text-left")}
                  style={{
                    bottom: `${m.bottom}cqw`,
                    [folder.align === "end" ? "right" : "left"]: `${m.pad}cqw`,
                  }}
                >
                  <span className="leading-none font-bold tracking-snug" style={{ fontSize: `${m.title}cqw` }}>
                    {folder.label}
                  </span>
                  <span className="font-mono tracking-label uppercase opacity-85" style={{ fontSize: `max(${m.meta}cqw, 8px)` }}>
                    {folder.meta}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <a href={site.archiveUrl} target="_blank" rel="noreferrer" className="btn btn-light rounded-[20px] px-[26px] py-3.5 text-[18px]">
        {crate.cta} <span aria-hidden>→</span>
      </a>
    </div>
  );
}
