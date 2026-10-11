import { services } from "@/content/portfolio";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Cassette } from "./Cassette";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="page-x flex flex-col gap-14 py-24 lg:gap-20 lg:py-[140px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between" data-reveal>
        <div className="flex flex-col gap-6">
          <SectionLabel>{services.eyebrow}</SectionLabel>
          <h2 id="services-title" className="text-display tracking-display">
            <span className="block font-medium">{services.title[0]}</span>
            <span className="block font-bold">{services.title[1]}</span>
          </h2>
        </div>
        <p className="max-w-[440px] text-[18px] leading-[1.5] font-medium tracking-body text-ink-2 md:text-[20px]">{services.intro}</p>
      </div>

      <ol className="grid gap-x-[26px] gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
        {services.items.map((service, i) => {
          const track = String(i + 1).padStart(2, "0");
          return (
            <li
              key={service.title}
              className="group/cassette flex flex-col gap-7"
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <div className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/cassette:-translate-y-1.5 group-hover/cassette:-rotate-1">
                <Cassette service={service} track={track} uid={`cassette-${track}`} />
              </div>
              <div className="flex flex-col gap-3.5">
                <p className="font-mono text-[11px] tracking-label text-ash uppercase">
                  {track} — {service.kicker}
                </p>
                <h3 className="text-[30px] leading-[1.1] font-bold tracking-[-0.05em]">{service.title}</h3>
                <p className="max-w-[290px] text-[16px] leading-[1.5] font-medium tracking-body text-muted">{service.description}</p>
                <ul className="flex flex-col gap-2 border-t border-ink/14 pt-3.5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="font-mono text-[11px] tracking-label text-ink-2 uppercase">
                      — {d}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
