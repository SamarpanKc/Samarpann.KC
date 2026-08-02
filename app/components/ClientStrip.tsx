"use client";

import { useState } from "react";

const clients = [
  "Pokhara Metropolitan City",
  "TVS",
  "Feedax",
  "SR Holdings",
  "Square Auto World",
  "PHOMI",
  "Pokhara Internet",
  "NYEF",
  "Franklin Edu Consultancy",
  "Everest Consulting",
];

// Duplicate list to achieve seamless infinite loop scrolling
const marqueeClients = [...clients, ...clients, ...clients];

export default function ClientStrip() {
  return (
    <section
      aria-label="Clients and collaborators"
      style={{
        borderTop: "1px solid #262626",
        borderBottom: "1px solid #262626",
        padding: "2.5rem 0",
        overflow: "hidden",
        backgroundColor: "#0C0C0C",
        position: "relative",
      }}
    >
      <div className="container-wide" style={{ marginBottom: "1.5rem" }}>
        <p
          className="text-label"
          style={{
            color: "#8C867D",
            textAlign: "center",
            letterSpacing: "0.08em",
            fontSize: "0.75rem",
          }}
        >
          Trusted by organizations &amp; forward-thinking brands
        </p>
      </div>

      {/* Marquee Wrapper with left/right fade mask */}
      <div
        className="marquee-mask"
        style={{
          width: "100%",
          overflow: "hidden",
          display: "flex",
          position: "relative",
        }}
      >
        <ul
          role="list"
          aria-label="Client marquee"
          className="animate-marquee"
          style={{
            alignItems: "center",
            gap: "2.5rem",
            listStyle: "none",
            paddingLeft: 0,
            paddingRight: "2.5rem",
          }}
        >
          {marqueeClients.map((client, index) => (
            <li key={`${client}-${index}`}>
              <ClientBadge name={client} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ClientBadge({ name }: { name: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "1.25rem",
        fontWeight: 500,
        fontSize: "0.9375rem",
        letterSpacing: "0.03em",
        color: hovered ? "#FF7D00" : "#FFECD1",
        opacity: hovered ? 1 : 0.6,
        transition: "all 0.25s ease",
        cursor: "pointer",
        whiteSpace: "nowrap",
        userSelect: "none",
      }}
    >
      <span>{name}</span>
      <span
        aria-hidden="true"
        style={{
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          backgroundColor: hovered ? "#FF7D00" : "rgba(255, 236, 209, 0.25)",
          display: "inline-block",
          transition: "background-color 0.25s ease",
        }}
      />
    </span>
  );
}

