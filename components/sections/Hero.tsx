import Image from "next/image";
import { hero } from "@/content/portfolio";
import { SiteNav } from "@/components/layout/SiteNav";
import { LockPills } from "@/components/ui/LockPills";
import { PortLogo } from "@/components/ui/PortLogo";
import { TrustedBy } from "./TrustedBy";

const rise = (step: number) => ({ animationDelay: `${120 + step * 90}ms` });

export function Hero() {
  return (
    <section id="intro" aria-labelledby="hero-title" className="relative pb-8">
      <SiteNav />

      <div className="page-x flex flex-col items-center text-center">
        {/* Logo mark */}
        <div className="mt-10 animate-rise text-[28px] md:mt-16 md:text-[36px]" style={rise(0)}>
          <PortLogo eager />
        </div>

        {/* Name / greeting */}
        <h1
          id="hero-title"
          className="mt-8 animate-rise text-display leading-[1.05] tracking-display md:mt-12"
          style={rise(1)}
        >
          <span className="block font-medium">{hero.greeting}</span>
          <span className="block font-extrabold">{hero.name}</span>
        </h1>

        {/* Discipline pills */}
        <div className="mt-8 w-full max-w-[900px] animate-rise md:mt-12" style={rise(2)}>
          <LockPills
            tone="glass"
            height={46}
            ariaLabel="Disciplines"
            role="list"
            pillClassName="text-[13px] font-bold tracking-display leading-[1.1] md:text-[15px] lg:text-[18px]"
            items={hero.disciplines.map((d) => ({ key: d, label: d, props: { role: "listitem" } }))}
          />
        </div>

        {/* Bio lede */}
        <p
          className="mt-8 max-w-[680px] animate-rise text-lede font-semibold tracking-display md:mt-12"
          style={rise(3)}
        >
          Over <strong className="font-bold">3+ years</strong> of crafting sharp, high-impact visual
          identities and spatial event design systems for leading organizations across Nepal and
          beyond.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="mt-8 inline-flex h-[42px] animate-rise items-center gap-3 rounded-2xl bg-[linear-gradient(180deg,#0a0a0a_0%,#2c2c2c_63.47%)] px-4 text-paper shadow-[0_8px_20px_rgb(0_0_0/0.16)] transition-transform duration-300 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 active:scale-[0.98] md:mt-12"
          style={rise(4)}
        >
          <Image
            src="/assets/avatar-sky.png"
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-full object-cover"
            loading="eager"
          />
          <span className="text-[15px] font-bold tracking-display leading-[1.1] md:text-[17px]">
            Get in Touch
          </span>
        </a>
      </div>

      <div className="mt-14 md:mt-16">
        <TrustedBy />
      </div>
    </section>
  );
}
