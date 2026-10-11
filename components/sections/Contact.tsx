import Image from "next/image";
import { contact, site, socials } from "@/content/portfolio";
import { PortLogo } from "@/components/ui/PortLogo";
import { SectionLabel } from "@/components/ui/SectionLabel";

function RecButton() {
  return (
    <a
      href={`mailto:${site.email}?subject=New%20project`}
      className="group relative grid size-[200px] shrink-0 place-items-center rounded-full border border-white/12 bg-[linear-gradient(180deg,#3a3a3a,#121212)] shadow-[0_20px_40px_rgb(0_0_0/0.6)] md:size-[240px]"
    >
      <span aria-hidden className="absolute inset-[13.3%] animate-ping rounded-full bg-rec/25 [animation-duration:2.6s] motion-reduce:hidden" />
      <span className="relative grid size-[73.3%] place-items-center rounded-full bg-[linear-gradient(180deg,#ff7a45,#e2410c)] shadow-[0_0_48px_2px_rgb(255_92_31/0.55),inset_0_2px_2px_rgb(255_255_255/0.35)] transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:scale-[1.04] group-active:scale-95 group-active:shadow-[0_0_24px_2px_rgb(255_92_31/0.45),inset_0_4px_10px_rgb(0_0_0/0.35)]">
        <span className="flex flex-col items-center gap-1.5 text-white">
          <span className="font-mono text-[20px] font-medium tracking-[0.06em] md:text-[22px]">● {contact.rec.label}</span>
          <span className="text-[14px] font-bold tracking-body opacity-90 md:text-[15px]">{contact.rec.caption}</span>
        </span>
      </span>
    </a>
  );
}

export function Contact() {
  const { footer } = contact;

  return (
    <section id="contact" aria-labelledby="contact-title" className="pt-10">
      {/* CTA panel */}
      <div className="panel-wrap">
        <div className="panel flex flex-col items-start gap-12 md:flex-row md:items-center md:justify-between xl:py-24">
          <div className="flex flex-col gap-7" data-reveal>
            <SectionLabel tone="dark" rule={false}>
              {contact.eyebrow}
            </SectionLabel>
            <h2 id="contact-title" className="text-mega tracking-[-0.06em] text-paper">
              <span className="block font-medium">{contact.title[0]}</span>
              <span className="block font-bold">{contact.title[1]}</span>
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-[47px] items-center gap-[13px] rounded-[17.5px] bg-[linear-gradient(180deg,#f7f7f7,#d6d6d6)] px-[15px] text-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.9)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Image src="/assets/avatar-sky.png" alt="" width={35} height={35} className="size-[35px] rounded-full" />
                <span className="text-[20px] leading-[1.105] font-bold tracking-display md:text-[24.5px]">Get in Touch</span>
              </a>
              <a href={`mailto:${site.email}`} className="btn btn-ghost text-[18px]">
                {site.email}
              </a>
            </div>
          </div>
          <div className="self-center md:self-auto" data-reveal>
            <RecButton />
          </div>
        </div>
      </div>

      {/* Footer (Figma "Desktop - 4") */}
      <footer className="page-x pt-[82px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:gap-10 xl:grid-cols-[minmax(0,743px)_1fr] xl:gap-0 xl:pl-[17px]">
          <div className="flex flex-col">
            <p className="text-[15.17px] leading-[1.105] font-bold tracking-display text-ink/80 uppercase">{footer.eyebrow}</p>
            <p className="mt-0.5 text-heading leading-[1.105] font-bold tracking-display">
              <span className="block">{footer.title[0]}</span>
              <span className="block">{footer.title[1]}</span>
            </p>
            <p className="mt-2 text-[18px] leading-[1.105] font-bold tracking-display md:text-[24.5px]">
              <span className="block">{footer.body[0]}</span>
              <span className="block">{footer.body[1]}</span>
            </p>
          </div>

          <dl className="flex flex-col gap-0">
            <dt className="text-[15.17px] leading-[1.105] font-bold tracking-display text-ink/80 uppercase">{footer.emailLabel}</dt>
            <dd>
              <a href={`mailto:${site.email}`} className="text-[26px] leading-[1.105] font-bold tracking-display hover:underline md:text-[33.4px]">
                {site.email}
              </a>
            </dd>
            <dt className="mt-[23px] text-[15.17px] leading-[1.105] font-bold tracking-display text-ink/80 uppercase">{footer.socialLabel}</dt>
            <dd className="mt-1 flex gap-[18px]">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="rounded-[6px] transition-transform duration-300 hover:-translate-y-0.5">
                  <Image src={s.icon} alt={s.label} width={26} height={26} className="size-[26px] rounded-[6px]" />
                </a>
              ))}
            </dd>
            <dt className="mt-[23px] text-[15.17px] leading-[1.105] font-bold tracking-display text-ink/80 uppercase">{footer.locationLabel}</dt>
            <dd className="text-[26px] leading-[1.105] font-bold tracking-display md:text-[33.4px]">{footer.location}</dd>
          </dl>
        </div>

        <div className="mt-[90px] grid gap-3 border-t-2 border-ink-2/18 pt-[31px] pb-[33px] text-[17px] leading-[1.105] font-bold tracking-display md:text-[24.5px] xl:grid-cols-[minmax(0,743px)_1fr] xl:gap-0 xl:pl-[17px]">
          <p>{site.copyright}</p>
          <p>{site.motto}</p>
        </div>
      </footer>

      {/* Giant cropped port + folio wordmark */}
      <div aria-hidden className="relative mx-auto aspect-[1440/250] w-full max-w-[1440px] overflow-hidden [container-type:inline-size]">
        <div className="absolute top-[0.7cqw] left-1/2 -translate-x-1/2 text-[22.35cqw] opacity-92">
          <PortLogo />
        </div>
      </div>
    </section>
  );
}
