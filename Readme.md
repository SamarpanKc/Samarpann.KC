# samarpannkc.com

Portfolio for Samarpann KC — Next.js 16 (App Router), React 19, Tailwind CSS v4.
The UI is built from the `samarpannkc.com` Figma file ("Portfolio — Full Site v1").

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

| Path | What it is |
| --- | --- |
| `content/portfolio.ts` | **All copy and data** — hero, works, about, services, process, experience, footer, social links |
| `app/globals.css` | Design tokens (`@theme`), panels, buttons, lock pills, reveal + folder styles |
| `app/layout.tsx` | Fonts (self-hosted 42dot Sans + Geist Mono via `next/font/local`) and metadata |
| `components/sections/*` | One file per page section |
| `components/works/*` | Project covers, fanned cards, filters, folder archive |
| `components/ui/*` | Reusable bits: `LockPills`, `ComboLock`/`DigitWheel`, `PortLogo`, `SectionLabel`, `RecDot` |
| `components/layout/*` | Nav, fixed cassette scroller, scroll-reveal observer |

## Before launch

- `works` in `content/portfolio.ts` is **mock data** (fictional brands). Replace it with real projects.
- Point the Instagram / Reddit / Behance links in `socials` and `site.archiveUrl` at your profiles.
- Add your CV as `public/Samarpann-KC-CV.pdf` (or change `site.cvUrl`).
- About-section stats (`about.stats`) — check the numbers.
