"use client";

import { useState, useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "work", label: "Work", href: "#work" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      // Check sections from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.element) {
          const top = sec.element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sec.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Mobile and tablet navigation"
      className="mobile-bottom-nav"
      style={{
        position: "fixed",
        bottom: "max(1.25rem, env(safe-area-inset-bottom, 1.25rem))",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        padding: "6px",
        backgroundColor: "rgba(18, 18, 18, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "9999px",
        boxShadow:
          "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        transition: "transform 0.2s ease, opacity 0.2s ease",
      }}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const isHovered = hoveredId === item.id;

        return (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => handleClick(e, item.id)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
            title={item.label}
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isActive
                ? "#FFFFFF"
                : isHovered
                ? "#FFECD1"
                : "rgba(255, 255, 255, 0.55)",
              backgroundColor: isActive
                ? "rgba(255, 255, 255, 0.16)"
                : isHovered
                ? "rgba(255, 255, 255, 0.07)"
                : "transparent",
              boxShadow: isActive
                ? "inset 0 0 0 1px rgba(255, 255, 255, 0.15), 0 2px 8px rgba(0, 0, 0, 0.3)"
                : "none",
              transition:
                "background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s ease, transform 0.15s ease",
              transform: isActive ? "scale(1.04)" : isHovered ? "scale(1.05)" : "scale(1)",
              textDecoration: "none",
              outline: "none",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <NavIcon id={item.id} active={isActive} />
          </a>
        );
      })}
    </nav>
  );
}

function NavIcon({ id, active }: { id: string; active: boolean }) {
  switch (id) {
    case "hero":
      return <HomeIcon active={active} />;
    case "about":
      return <UserIcon active={active} />;
    case "work":
      return <BriefcaseIcon active={active} />;
    case "contact":
      return <MailIcon active={active} />;
    default:
      return null;
  }
}

/* ── Custom SVGs matching design reference ───────────────── */

function HomeIcon({ active }: { active: boolean }) {
  if (active) {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2.6L2.8 9.7C2.3 10.1 2 10.7 2 11.3V19.5C2 20.9 3.1 22 4.5 22H19.5C20.9 22 22 20.9 22 19.5V11.3C22 10.7 21.7 10.1 21.2 9.7L12 2.6Z"
          fill="currentColor"
        />
        <path
          d="M9 16C9 14.34 10.34 13 12 13C13.66 13 15 14.34 15 16"
          stroke="#141414"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3L3 10.2v9.3A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5V10.2L12 3z" />
      <path d="M9 16c0-1.66 1.34-3 3-3s3 1.34 3 3" />
    </svg>
  );
}

function UserIcon({ active }: { active: boolean }) {
  if (active) {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="7.2" r="4.2" fill="currentColor" />
        <path
          d="M4.5 20.5C4.5 16.2 7.86 12.8 12 12.8C16.14 12.8 19.5 16.2 19.5 20.5"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="7.5" r="3.8" />
      <path d="M4.8 20c0-3.97 3.23-7.2 7.2-7.2s7.2 3.23 7.2 7.2" />
    </svg>
  );
}

function BriefcaseIcon({ active }: { active: boolean }) {
  if (active) {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect x="2.5" y="7" width="19" height="13.5" rx="3.5" fill="currentColor" />
        <path
          d="M8 7V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V7"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="13.5" r="1.5" fill="#141414" />
      </svg>
    );
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="7" width="18" height="13" rx="3" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <circle cx="12" cy="13.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function MailIcon({ active }: { active: boolean }) {
  if (active) {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect x="2.5" y="5" width="19" height="14" rx="4" fill="currentColor" />
        <path
          d="M4.5 7.5L10.8 12.2C11.5 12.7 12.5 12.7 13.2 12.2L19.5 7.5"
          stroke="#141414"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="4" />
      <path d="M4.5 7.5L10.8 12.2c.7.5 1.7.5 2.4 0L19.5 7.5" />
    </svg>
  );
}
