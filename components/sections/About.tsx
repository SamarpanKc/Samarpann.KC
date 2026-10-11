import Image from "next/image";
import { about, site } from "@/content/portfolio";
import { ComboLock } from "@/components/ui/ComboLock";
import { SectionLabel } from "@/components/ui/SectionLabel";

const BARCODE = [2, 1, 3, 1, 1, 2, 4, 1, 2, 1, 1, 3, 2, 1, 4, 1, 2, 2, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 4, 1, 1, 2, 3, 1, 2];

function Barcode() {
  let x = 0;
  const bars: { x: number; w: number }[] = [];
  for (const w of BARCODE) {
    if (x + w > 250) break;
    bars.push({ x, w });
    x += w + 2;
  }
  return (
    <svg width="250" height="34" viewBox="0 0 250 34" aria-hidden className="absolute top-[572px] left-8">
      {bars.map((b) => (
        <rect key={b.x} x={b.x} width={b.w} height="34" fill="#0A0A0A" />
      ))}
    </svg>
  );
}

/** Luggage-tag ID card with strap, eyelet, photo, stamp and barcode (Figma "Luggage Tag"). */
function LuggageTag() {
  const { tag } = about;
  return (
    <div className="relative h-[620px] w-[440px] rotate-[-4deg] transition-transform duration-700 ease-[var(--ease-out-expo)] hover:rotate-[0deg]">
      {/* Body */}
      <div className="absolute top-26 left-0 h-[620px] w-[440px]">
        <svg
          viewBox="0 0 440 620"
          className="absolute inset-0 overflow-visible [filter:drop-shadow(0_15px_10px_rgb(0_0_0/0.16))_drop-shadow(0_1px_1px_rgb(0_0_0/0.08))]"
          aria-hidden
        >
          <defs>
            <linearGradient id="tag-paper" x1="0" y1="0" x2="0" y2="620" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBF9F4" />
              <stop offset="1" stopColor="#ECE7DC" />
            </linearGradient>
          </defs>
          <path
            d="M80 0L360 0L440 80L440 588C440 605.67 425.67 620 408 620L32 620C14.33 620 0 605.67 0 588L0 80Z"
            fill="url(#tag-paper)"
            stroke="rgb(255 255 255 / 0.9)"
            strokeWidth="1.5"
          />
        </svg>



        <p className="absolute top-24 left-8 flex w-[376px] items-center justify-between font-mono text-[11px] tracking-label text-muted uppercase">
          <span>{tag.header[0]}</span>
          <span>{tag.header[1]}</span>
        </p>

        <Image
          src={tag.photo.src}
          alt={tag.photo.alt}
          width={376}
          height={300}
          sizes="376px"
          className="absolute top-32 left-8 h-[300px] w-[376px] rounded-[22px] object-cover"
        />

        <span className="absolute top-[382px] left-[222px] origin-top-left -rotate-6 rounded-[10px] bg-rec px-3 py-[7px] font-mono text-[11px] font-medium tracking-label text-white uppercase shadow-[0_6px_16px_rgb(255_91_31/0.35)]">
          {tag.stamp}
        </span>

        <dl className="absolute top-[456px] left-8 grid w-[392px] grid-cols-[196px_196px] gap-y-[18px]">
          {tag.fields.map((f) => (
            <div key={f.label} className="flex flex-col gap-1">
              <dt className="font-mono text-[10px] tracking-label text-ash uppercase">{f.label}</dt>
              <dd className="text-[19px] leading-tight font-bold tracking-ui">{f.value}</dd>
            </div>
          ))}
        </dl>

        <Barcode />
        <span className="absolute top-[584px] right-8 font-mono text-[11px] tracking-label uppercase">{tag.code}</span>
      </div>


    </div>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="page-x py-20 lg:py-[90px]">
      <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,663px)] lg:gap-0">
        <div className="flex justify-center xl:justify-start xl:pl-[43px]" data-reveal>
          <div className="max-sm:[zoom:0.74] sm:max-lg:[zoom:0.9]">
            <LuggageTag />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:pt-20">
          <div className="flex flex-col gap-8" data-reveal>
            <SectionLabel>{about.eyebrow}</SectionLabel>
            <h2 id="about-title" className="text-title leading-[1.02] tracking-display">
              <span className="font-medium">{about.title[0]}</span> <br className="max-md:hidden" />
              <span className="font-bold">{about.title[1]}</span>
            </h2>
          </div>

          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              data-reveal
              className={`max-w-[620px] text-[18px] leading-[1.5] font-medium tracking-body md:text-[20px] ${i === 0 ? "text-ink-2" : "text-muted"}`}
            >
              {p}
            </p>
          ))}

          <ul className="flex flex-wrap gap-7" data-reveal>
            {about.stats.map((stat) => (
              <li key={stat.label} className="flex flex-col gap-3.5">
                <span className="relative flex items-center gap-1.5 rounded-[18px] bg-[linear-gradient(180deg,#2c2c2c_0%,#0a0a0a_100%)] px-4 py-3 shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_10px_20px_rgb(0_0_0/0.18)]">
                  <svg width="7" height="10" viewBox="0 0 7 10" aria-hidden className="mr-0.5">
                    <path d="M0 0L7 5L0 10Z" fill="#FF5B1F" />
                  </svg>
                  <ComboLock value={stat.value} label={`${Number(stat.value)} ${stat.label}`} className="flex gap-1.5" />
                  <svg width="7" height="10" viewBox="0 0 7 10" aria-hidden className="ml-0.5">
                    <path d="M7 0L0 5L7 10Z" fill="#FF5B1F" />
                  </svg>
                </span>
                <span className="text-[17px] leading-tight font-bold tracking-ui">{stat.label}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-5" data-reveal>
            <a href={site.cvUrl} download className="btn btn-dark rounded-[18px] px-6 py-3.5 text-[18px]">
              {about.ctas.cv} <span aria-hidden>↓</span>
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="group text-[18px] font-bold tracking-ui">
              {about.ctas.story}{" "}
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
