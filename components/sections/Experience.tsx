import { experience } from "@/content/portfolio";
import { ComboLock } from "@/components/ui/ComboLock";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="page-x flex flex-col gap-12 py-24 lg:gap-16 lg:py-[140px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between" data-reveal>
        <div className="flex flex-col gap-6">
          <SectionLabel>{experience.eyebrow}</SectionLabel>
          <h2 id="experience-title" className="text-display tracking-display">
            <span className="block font-medium">{experience.title[0]}</span>
            <span className="block font-bold">{experience.title[1]}</span>
          </h2>
        </div>
        <p className="max-w-[440px] text-[18px] leading-[1.5] font-medium tracking-body text-ink-2 md:text-[20px]">{experience.intro}</p>
      </div>

      <ol className="flex flex-col">
        {experience.roles.map((r) => (
          <li
            key={r.counter}
            data-reveal
            className="group flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-ink/16 py-8 last:border-b md:flex-nowrap"
          >
            <span className="flex rounded-[14px] bg-[linear-gradient(180deg,#2c2c2c_0%,#0a0a0a_100%)] px-2.5 py-2 shadow-[inset_0_1px_0_rgb(255_255_255/0.1)] transition-transform duration-500 group-hover:-rotate-2">
              <ComboLock value={r.counter} size="sm" label={`Track ${Number(r.counter)}`} className="flex gap-1" />
            </span>

            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2">
                <h3 className="text-[26px] leading-[1.15] font-bold tracking-[-0.05em] md:text-[34px]">{r.role}</h3>
                {r.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rec/12 px-2.5 py-[5px] font-mono text-[10px] font-medium tracking-label text-rec-deep uppercase">
                    <span aria-hidden className="size-1.5 rounded-full bg-rec" />
                    Now playing
                  </span>
                )}
              </div>
              <p className="text-[18px] leading-tight font-medium tracking-ui text-muted md:text-[20px]">{r.org}</p>
            </div>

            <div className="flex w-full flex-col gap-1.5 md:w-auto md:items-end md:text-right">
              <p className="text-[18px] leading-tight font-bold tracking-ui">{r.period}</p>
              <p className="font-mono text-[11px] tracking-label text-muted uppercase">{r.meta}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
