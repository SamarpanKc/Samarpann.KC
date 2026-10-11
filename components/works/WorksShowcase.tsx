"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import { works, workFilters, type WorkCategory } from "@/content/portfolio";
import { LockPills } from "@/components/ui/LockPills";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/cn";
import { FannedCards } from "./FannedCards";
import { ProjectCover } from "./ProjectCover";

type Filter = "all" | WorkCategory;

/** Header, lock-pill filters, the three fanned feature rows and the B-sides grid. */
export function WorksShowcase() {
  const [filter, setFilter] = useState<Filter>("all");

  const features = works.features.filter((f) => filter === "all" || f.category === filter);
  const archive = works.archive.items.filter((p) => filter === "all" || p.category === filter);
  const activeLabel = workFilters.find((f) => f.id === filter)?.label;

  /** Row CTA: filter to that category, then bring the matching B-sides into view. */
  const showCategory = (category: WorkCategory) => {
    flushSync(() => setFilter(category));
    document.getElementById("archive")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Header + filters */}
      <div className="flex flex-col gap-10 md:gap-14" data-reveal>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <SectionLabel tone="dark" dot rule={false}>
              {works.eyebrow}
            </SectionLabel>
            <h2 id="works-title" className="text-display tracking-display text-paper">
              <span className="block font-medium">{works.title[0]}</span>
              <span className="block font-bold">{works.title[1]}</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-[18px] leading-[1.45] font-medium tracking-body text-fog md:text-[20px]">
            {works.intro}
          </p>
        </div>

        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <LockPills
            tone="dark"
            height={56}
            ariaLabel="Filter projects"
            className="w-full xl:w-[992px] xl:flex-none"
            pillClassName="text-[15px] font-bold tracking-snug text-silver hover:text-paper data-[active=true]:text-ink md:text-[17px] lg:text-[19px]"
            items={workFilters.map((f) => ({
              key: f.id,
              label: f.label,
              active: filter === f.id,
              onClick: () => setFilter(f.id),
              props: { "aria-pressed": filter === f.id, "aria-controls": "works-results" },
            }))}
          />
          <p className="mono-label text-subtle" aria-live="polite">
            {filter === "all" ? works.totalLabel : `Showing ${activeLabel} · newest first`}
          </p>
        </div>
      </div>

      <div id="works-results" className="contents">
        {/* Fanned feature rows */}
        {features.map((row) => (
          <article
            key={`${filter}-${row.index}`}
            aria-labelledby={`feature-${row.index}`}
            className="group/row grid animate-rise items-center gap-10 lg:min-h-[440px] lg:grid-cols-2 lg:gap-12"
          >
            <FannedCards
              cards={row.cards}
              className={cn("mx-auto lg:mx-0", row.side === "right" ? "lg:order-2 lg:justify-self-end" : "lg:justify-self-start")}
            />

            <div className={cn("flex max-w-[440px] flex-col gap-7", row.side === "left" && "lg:justify-self-end")}>
              <SectionLabel tone="dark">{`${row.index} / ${row.label}`}</SectionLabel>
              <h3 id={`feature-${row.index}`} className="flex flex-col">
                <span className="text-[24px] leading-[1.2] font-medium tracking-snug text-subtle md:text-[28px]">From</span>
                <span className="text-title leading-[1.05] font-bold tracking-display text-paper">{row.title}</span>
              </h3>
              <p className="text-[17px] leading-[1.5] font-medium tracking-body text-fog md:text-[18px]">{row.description}</p>
              <ul className="w-full">
                {row.projects.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-center justify-between border-t border-white/12 py-3.5 last:border-b"
                  >
                    <span className="text-[18px] leading-tight font-semibold tracking-ui text-paper">{p.name}</span>
                    <span className="mono-label text-subtle">{p.year}</span>
                  </li>
                ))}
              </ul>
              <button type="button" onClick={() => showCategory(row.category)} className="btn btn-light w-fit">
                Open case studies <span aria-hidden>→</span>
              </button>
            </div>
          </article>
        ))}

        {/* B-sides grid */}
        <div id="archive" className="flex scroll-mt-10 flex-col gap-10 md:gap-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
            <div className="flex flex-col gap-5">
              <SectionLabel tone="dark" rule={false}>
                {works.archive.eyebrow}
              </SectionLabel>
              <h3 className="text-heading font-bold tracking-display text-paper">{works.archive.title}</h3>
            </div>
            <button type="button" onClick={() => setFilter("all")} className="btn btn-ghost w-fit">
              {works.archive.cta} <span aria-hidden>→</span>
            </button>
          </div>

          <ul className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-[18px] sm:gap-y-12 lg:grid-cols-4">
            {archive.map((item, i) => (
              <li
                key={`${filter}-${item.cover.name}`}
                className="group/tile flex animate-rise flex-col gap-[18px]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <ProjectCover
                  cover={item.cover}
                  refW={296}
                  refH={296}
                  radius={32}
                  inset={{ tag: [26, 26], mark: [24, 24] }}
                  className="aspect-square w-full transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/tile:scale-[1.015]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 ring-2 ring-paper/90 transition-opacity duration-300 ring-inset group-hover/tile:opacity-100"
                  />
                  <span
                    aria-hidden
                    className="absolute right-[8.1cqw] bottom-[8.1cqw] hidden translate-y-2 rounded-[14px] sm:block bg-paper px-4 py-2.5 text-[15px] leading-tight font-bold tracking-ui text-ink opacity-0 transition-all duration-300 group-hover/tile:translate-y-0 group-hover/tile:opacity-100"
                  >
                    View case ↗
                  </span>
                </ProjectCover>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-[15px] leading-tight font-semibold tracking-ui text-paper sm:text-[19px]">{item.cover.name}</h4>
                  <p className="font-mono text-[11px] tracking-label text-subtle uppercase">
                    {item.label} · {item.cover.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
