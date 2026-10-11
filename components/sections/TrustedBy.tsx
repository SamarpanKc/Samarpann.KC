import Image from "next/image";
import { Fragment } from "react";
import { trustedBy } from "@/content/portfolio";

function Star() {
  return <Image src="/assets/star.svg" alt="" width={20} height={21} className="size-5 shrink-0" />;
}

function ClientList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 items-center gap-6 pr-6 min-[1440px]:w-full min-[1440px]:justify-between min-[1440px]:gap-0 min-[1440px]:pr-0"
    >
      {trustedBy.clients.map((client, i) => (
        <Fragment key={client}>
          {i > 0 && (
            <li aria-hidden className="flex items-center">
              <Star />
            </li>
          )}
          <li className="text-[14px] leading-[1.1] font-bold whitespace-nowrap tracking-display md:text-[17px]">{client}</li>
        </Fragment>
      ))}
      {/* trailing separator so the loop stays evenly spaced */}
      <li aria-hidden className="flex items-center min-[1440px]:hidden">
        <Star />
      </li>
    </ul>
  );
}

/** "Trusted by" rail — static at the 1440 design width, a slow marquee below it. */
export function TrustedBy() {
  return (
    <div className="page-x">
      <p className="relative z-10 mx-auto w-fit max-w-full rounded-full border border-white/80 bg-white/45 px-6 py-2.5 text-center text-[13px] leading-[1.1] font-semibold tracking-display shadow-[inset_0_1px_0_rgb(255_255_255),0_6px_20px_rgb(0_0_0/0.04)] backdrop-blur-[30px] md:min-w-[480px] md:text-[15px]">
        {trustedBy.label}
      </p>

      <div className="mt-3.5 border-y-2 border-ink-2/18">
        <div className="group relative overflow-hidden py-[46px] [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] min-[1440px]:[mask-image:none]">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] min-[1440px]:w-full min-[1440px]:animate-none motion-reduce:animate-none">
            <ClientList />
            <div className="contents min-[1440px]:hidden">
              <ClientList duplicate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
