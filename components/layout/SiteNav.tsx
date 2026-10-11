"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/content/portfolio";
import { RecDot } from "@/components/ui/RecDot";
import { cn } from "@/lib/cn";

/** Top bar: name, glass link pill (Works highlighted as the primary destination), availability. */
export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="page-x relative z-40 flex h-20 items-center justify-between md:h-24">
      <a href="#intro" className="flex flex-col gap-0.5 rounded-md">
        <span className="text-[20px] leading-tight font-bold tracking-snug">{site.name}</span>
        <span className="font-mono text-[11px] tracking-label text-muted uppercase">
          {site.role} — {site.location}
        </span>
      </a>

      {/* <nav aria-label="Primary" className="glass-pill hidden items-start gap-1 rounded-full p-1.5 lg:flex">
        {navLinks.map((link, i) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            aria-current={i === 0 ? "true" : undefined}
            className={cn(
              "rounded-full px-[18px] py-2.5 text-[16px] leading-tight font-semibold tracking-ui transition-colors duration-300",
              i === 0 ? "bg-black-gradient text-paper" : "text-ink hover:bg-white/80",
            )}
          >
            {link.label}
          </a>
        ))}
      </nav> */}

      <div className="hidden items-center gap-2.5 md:flex">
        <RecDot />
        <span className="flex flex-col gap-0.5">
          <span className="text-[16px] leading-tight font-bold tracking-ui">{site.availability}</span>
          <span className="font-mono text-[11px] tracking-label text-muted uppercase">{site.timezone}</span>
        </span>
      </div>

      {/* Mobile menu */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="glass-pill relative grid size-11 place-items-center rounded-full lg:hidden md:ml-6"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden className={cn("absolute h-[2px] w-4 rounded-full bg-ink transition-transform duration-300", open ? "rotate-45" : "-translate-y-[3px]")} />
        <span aria-hidden className={cn("absolute h-[2px] w-4 rounded-full bg-ink transition-transform duration-300", open ? "-rotate-45" : "translate-y-[3px]")} />
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="glass-pill absolute inset-x-5 top-[calc(100%-4px)] rounded-[28px] p-2 sm:inset-x-8 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-[20px] px-5 py-4 text-[20px] font-bold tracking-snug hover:bg-white/70"
                >
                  {link.label}
                  <span aria-hidden className="font-mono text-[11px] text-muted">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="flex items-center gap-2.5 px-5 pt-2 pb-4 md:hidden">
          <RecDot size={8} />
          <span className="text-[15px] font-bold tracking-ui">{site.availability}</span>
        </p>
      </div>
    </header>
  );
}
