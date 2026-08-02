"use client";

import { useState, useEffect } from "react";

import MobileBottomNav from "./MobileBottomNav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: "1px solid #262626",
          backgroundColor: scrolled
            ? "rgba(10,10,10,0.92)"
            : "rgba(10,10,10,0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          className="container-wide"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Monogram */}
          <a
            href="#"
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.05em",
              color: "#FFECD1",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#FF7D00")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#FFECD1")
            }
            aria-label="Samarpann KC — Home"
          >
            SAMARPANN.KC
          </a>

          {/* Desktop Nav Links */}
          <nav aria-label="Primary navigation" className="desktop-nav-links">
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                listStyle: "none",
              }}
            >
              {[
                { label: "Work", href: "#work" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <NavLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Floating Bottom Nav for Mobile & Tablet */}
      <MobileBottomNav />
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      style={{
        color: hovered ? "#FF7D00" : "#FFECD1",
        textDecoration: "none",
        fontSize: "0.9375rem",
        fontWeight: 500,
        position: "relative",
        paddingBottom: "2px",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1.5px",
          backgroundColor: "#FF7D00",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.2s ease",
        }}
      />
    </a>
  );
}
