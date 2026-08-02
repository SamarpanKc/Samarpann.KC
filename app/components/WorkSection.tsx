"use client";

import { useState } from "react";

/* ── Project data with Hierarchical Grid specifications ─────────────────── */
const projects = [
  {
    id: "protein-run",
    title: "Right to Protein Run",
    category: "Event Branding",
    year: "2024",
    badge: "",
    description:
      "How visual discipline and high-visibility color systems coordinated thousands of runners and partners without visual chaos.",
    gradient: "linear-gradient(135deg, #FF7D00 0%, #FF4500 40%, #1a0a00 100%)",
    accentChar: "R",
    gridClass: "hgrid-hero-mobile hgrid-hero-tablet col-span-12-lg-8",
    aspectRatio: "16/9",
    featured: true,
    accentColor: "#FF7D00",
  },
  {
    id: "square-auto",
    title: "Square Auto World",
    category: "EV Brand Identity",
    year: "2024",
    description:
      "Modern, clean, and sustainable automotive branding tailored for the rising EV market.",
    gradient: "linear-gradient(135deg, #0a1628 0%, #1a3a6b 60%, #2563eb 100%)",
    accentChar: "S",
    gridClass: "hgrid-half-mobile hgrid-half-tablet col-span-12-lg-4",
    aspectRatio: "4/3",
    featured: false,
    accentColor: "#3b82f6",
  },
  {
    id: "feedax",
    title: "Feedax Premium Calcium Gel",
    category: "Packaging Design",
    year: "2023",
    description:
      "Communicating clinical authority, quality, and veterinary clarity on the shelf.",
    gradient: "linear-gradient(135deg, #0a1a15 0%, #0d3326 60%, #059669 100%)",
    accentChar: "F",
    gridClass: "hgrid-half-mobile hgrid-half-tablet col-span-12-lg-5",
    aspectRatio: "16/10",
    featured: false,
    accentColor: "#10b981",
  },
  {
    id: "neplancer",
    title: "Neplancer",
    category: "Digital Product",
    year: "2024",
    subtitle: "Freelance Platform for Nepalese Talent",
    description:
      "Empowering Nepalese freelancers through a focused, user-centric marketplace experience.",
    gradient: "linear-gradient(135deg, #0a0a14 0%, #1e1b4b 60%, #7c3aed 100%)",
    accentChar: "N",
    gridClass: "hgrid-full-mobile hgrid-full-tablet col-span-12-lg-7",
    aspectRatio: "16/9",
    featured: false,
    accentColor: "#8b5cf6",
  },
  {
    id: "lions-intl",
    title: "Lions International District 325J",
    category: "Conference Identity",
    year: "2023",
    description:
      "Balancing global organizational prestige with sharp, modern executive aesthetics.",
    gradient: "linear-gradient(135deg, #0d0a00 0%, #3b2a00 60%, #d97706 100%)",
    accentChar: "L",
    gridClass: "hgrid-full-mobile hgrid-full-tablet col-span-12-full",
    aspectRatio: "21/9",
    featured: false,
    banner: true,
    accentColor: "#f59e0b",
  },
];

/* ── Main WorkSection Component ─────────────────────────────────────── */
export default function WorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="section-padding"
      style={{ borderTop: "1px solid #262626" }}
    >
      <div className="container-wide">
        {/* Section Header */}
        <div
          style={{
            marginBottom: "3.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#FF7D00",
                display: "inline-block",
              }}
            />
            <p
              className="text-label"
              style={{ color: "#FF7D00", letterSpacing: "0.08em" }}
            >
              Portfolio &amp; Case Studies
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              textAlign: "end",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h2
              id="work-title"
              className="text-section-title"
              style={{ color: "#FFECD1" }}
            >
              Selected Work
            </h2>
            <p
              style={{
                color: "#8C867D",
                fontSize: "0.875rem",
                maxWidth: "36ch",
              }}
            >
              A curated selection of visual identities, national campaigns, and digital experiences.
            </p>
          </div>
        </div>

        {/* Hierarchical Grid Container (Carousel on Mobile) */}
        <div className="hierarchical-grid work-grid-mobile-carousel">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Project Card Component ──────────────────────────────────── */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      aria-label={project.title}
      className={`card ${project.gridClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: project.featured ? "1.5rem" : "1.25rem",
        cursor: "pointer",
        borderColor: "#262626",
        boxShadow: "none",
        transform: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Visual / Image Canvas Container */}
      <div
        className="card-image-wrap"
        style={{
          aspectRatio: project.aspectRatio,
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          className="img-placeholder"
          aria-hidden="true"
          style={{
            background: project.gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Watermark character */}
          <span
            aria-hidden="true"
            style={{
              fontSize: project.featured
                ? "clamp(7rem, 16vw, 15rem)"
                : "clamp(5rem, 12vw, 10rem)",
              fontWeight: 800,
              letterSpacing: "-0.06em",
              color: "rgba(255, 255, 255, 0.06)",
              userSelect: "none",
              lineHeight: 1,
              transition: "transform 0.4s ease, color 0.3s ease",
              transform: hovered ? "scale(1.08)" : "scale(1)",
            }}
          >
            {project.accentChar}
          </span>
        </div>

        {/* Featured tag badge (Fixed size) */}
        {project.badge && (
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              padding: "0.35rem 0.85rem",
              backgroundColor: "rgba(255, 125, 0, 0.95)",
              borderRadius: "8px",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#0A0A0A",
              letterSpacing: "0.03em",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              backdropFilter: "blur(6px)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          >
            {project.badge}
          </div>
        )}

        {/* Category Tag Overlay Pill (Fixed size - does not scale on hover) */}
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            padding: "0.3rem 0.75rem",
            backgroundColor: "rgba(10, 10, 10, 0.75)",
            border: `1px solid ${hovered ? project.accentColor : "rgba(255, 236, 209, 0.15)"}`,
            borderRadius: "9999px",
            fontSize: "0.7rem",
            fontWeight: 600,
            color: hovered ? project.accentColor : "#FFECD1",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            backdropFilter: "blur(8px)",
            transition: "border-color 0.3s ease, color 0.3s ease",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Card Content Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1.25rem",
          marginTop: "1.25rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "220px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "0.35rem",
            }}
          >
            <h3
              className="work-card-title"
              style={{
                color: hovered ? project.accentColor : "#FFECD1",
                fontWeight: 700,
                fontSize: project.featured ? "1.25rem" : "1.0625rem",
                letterSpacing: "-0.02em",
                transition: "color 0.25s ease",
              }}
            >
              {project.title}
            </h3>
          </div>

          {project.subtitle && (
            <p
              style={{
                fontSize: "0.8125rem",
                color: project.accentColor,
                fontWeight: 500,
                marginBottom: "0.35rem",
              }}
            >
              {project.subtitle}
            </p>
          )}

          <p
            className="work-card-description"
            style={{
              fontSize: "0.875rem",
              color: "#8C867D",
              lineHeight: 1.55,
              maxWidth: project.banner ? "65ch" : "44ch",
            }}
          >
            {project.description}
          </p>
        </div>

        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#6b655b",
              letterSpacing: "0.05em",
            }}
          >
            {project.year}
          </p>
          <div
            aria-hidden="true"
            style={{
              marginTop: "0.5rem",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: hovered
                ? project.accentColor
                : "rgba(255, 236, 209, 0.06)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s ease",
              color: hovered ? "#0A0A0A" : "#8C867D",
              transform: hovered ? "translate(2px, -2px)" : "translate(0, 0)",
            }}
          >
            ↗
          </div>
        </div>
      </div>
    </article>
  );
}
