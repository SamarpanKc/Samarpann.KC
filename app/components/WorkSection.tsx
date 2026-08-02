"use client";

import { useState } from "react";

/* ── Project data ─────────────────────────────────── */
const projects = [
  {
    id: "protein-run",
    title: "Right to Protein Run",
    category: "Event Branding",
    year: "2024",
    badge: "~1.5 Crore NPR · National Scale",
    description:
      "How visual discipline and high-visibility color systems coordinated thousands of runners and partners without visual chaos.",
    layout: "full",
    gradient: "linear-gradient(135deg, #FF7D00 0%, #FF4500 40%, #1a0a00 100%)",
    accentChar: "R",
  },
  {
    id: "square-auto",
    title: "Square Auto World",
    category: "EV Brand Identity",
    year: "2024",
    description:
      "Modern, clean, and sustainable automotive branding tailored for the rising EV market.",
    layout: "half",
    gradient: "linear-gradient(135deg, #0a1628 0%, #1a3a6b 60%, #2563eb 100%)",
    accentChar: "S",
  },
  {
    id: "feedax",
    title: "Feedax Premium Calcium Gel",
    category: "Packaging Design",
    year: "2023",
    description:
      "Communicating clinical authority, quality, and veterinary clarity on the shelf.",
    layout: "half",
    gradient:
      "linear-gradient(135deg, #0a1a15 0%, #0d3326 60%, #059669 100%)",
    accentChar: "F",
  },
  {
    id: "lions-intl",
    title: "Lions International District 325J",
    category: "Conference Identity",
    year: "2023",
    description:
      "Balancing global organizational prestige with sharp, modern executive aesthetics.",
    layout: "half",
    gradient: "linear-gradient(135deg, #0d0a00 0%, #3b2a00 60%, #d97706 100%)",
    accentChar: "L",
  },
  {
    id: "neplancer",
    title: "Neplancer",
    category: "Digital Product",
    year: "2024",
    subtitle: "Freelance Platform for Nepalese Talent",
    description:
      "Empowering Nepalese freelancers through a focused, user-centric marketplace experience.",
    layout: "half",
    gradient:
      "linear-gradient(135deg, #0a0a14 0%, #1e1b4b 60%, #7c3aed 100%)",
    accentChar: "N",
  },
];

/* ── Component ─────────────────────────────────────── */
export default function WorkSection() {
  // Separate projects by layout
  const fullWidthProjects = projects.filter((p) => p.layout === "full");
  const halfProjects = projects.filter((p) => p.layout === "half");

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="section-padding"
      style={{ borderTop: "1px solid #262626" }}
    >
      <div className="container-wide">
        {/* Section header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            className="text-label"
            style={{ color: "#FF7D00", marginBottom: "0.75rem" }}
          >
            Portfolio
          </p>
          <h2
            id="work-title"
            className="text-section-title"
            style={{ color: "#FFECD1" }}
          >
            Selected Work
          </h2>
        </div>

        {/* Project grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Full-width: Right to Protein Run */}
          {fullWidthProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* 2-column grid for half-width projects */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
              gap: "1.5rem",
            }}
          >
            {halfProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Project Card ──────────────────────────────────── */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      aria-label={project.title}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "1.25rem",
        cursor: "default",
        transition: "border-color 0.25s ease",
        borderColor: hovered ? "rgba(255,125,0,0.35)" : "#262626",
      }}
    >
      {/* Image / Gradient placeholder */}
      <div className="card-image-wrap" style={{ aspectRatio: project.layout === "full" ? "21/9" : "16/9" }}>
        <div
          className="img-placeholder"
          aria-hidden="true"
          style={{
            background: project.gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            transform: hovered ? "scale(1.02)" : "scale(1)",
            transition: "transform 0.35s ease",
          }}
        >
          {/* Large accent character watermark */}
          <span
            aria-hidden="true"
            style={{
              fontSize: "clamp(6rem, 15vw, 14rem)",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              color: "rgba(255,255,255,0.05)",
              userSelect: "none",
              lineHeight: 1,
            }}
          >
            {project.accentChar}
          </span>

          {/* Badge overlay */}
          {project.badge && (
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                padding: "0.3125rem 0.75rem",
                backgroundColor: "rgba(255,125,0,0.9)",
                borderRadius: "6px",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#0A0A0A",
                letterSpacing: "0.02em",
              }}
            >
              {project.badge}
            </div>
          )}
        </div>
      </div>

      {/* Card meta row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
          marginTop: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3
            style={{
              color: "#FFECD1",
              fontWeight: 700,
              fontSize: "1.0625rem",
              marginBottom: "0.25rem",
            }}
          >
            {project.title}
          </h3>
          {project.subtitle && (
            <p
              style={{
                fontSize: "0.8125rem",
                color: "#8C867D",
                marginBottom: "0.25rem",
              }}
            >
              {project.subtitle}
            </p>
          )}
          <p
            style={{
              fontSize: "0.875rem",
              color: "#8C867D",
              lineHeight: 1.5,
              maxWidth: "42ch",
            }}
          >
            {project.description}
          </p>
        </div>

        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <p className="text-label" style={{ color: "#8C867D" }}>
            {project.category}
          </p>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "#4a4540",
              marginTop: "0.25rem",
            }}
          >
            {project.year}
          </p>
        </div>
      </div>
    </article>
  );
}
