import { process } from "@/content/portfolio";
import { ComboLock } from "@/components/ui/ComboLock";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProcessDeck } from "./ProcessDeck";

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="panel-wrap pb-10">
      <div className="panel flex flex-col gap-14 lg:gap-[72px] xl:pb-[120px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between" data-reveal>
          <div className="flex flex-col gap-6">
            <SectionLabel tone="dark">{process.eyebrow}</SectionLabel>
            <h2 id="process-title" className="text-display tracking-display text-paper">
              <span className="block font-medium">{process.title[0]}</span>
              <span className="block font-bold">{process.title[1]}</span>
            </h2>
          </div>

          <div className="flex w-fit flex-col gap-3 rounded-[20px] border border-white/12 bg-white/5 px-[18px] py-4">
            <p className="font-mono text-[10px] tracking-label text-subtle uppercase">Tape counter</p>
            <div className="flex items-center gap-1.5">
              <ComboLock value={process.counter.digits} size="md" label="4 weeks average project" className="flex gap-1.5" />
              <span className="flex flex-col gap-0.5 pl-2">
                <span className="text-[18px] leading-tight font-bold tracking-ui text-paper">{process.counter.unit}</span>
                <span className="font-mono text-[10px] tracking-label text-subtle uppercase">{process.counter.caption}</span>
              </span>
            </div>
          </div>
        </div>

        <div data-reveal>
          <ProcessDeck />
        </div>
      </div>
    </section>
  );
}
