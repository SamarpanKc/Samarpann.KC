"use client";

import { useState } from "react";

const clients = [
  "Pokhara Metropolitan City",
  "TVS",
  "Feedax",
  "SR Holdings",
  "Square Auto World",
  "Nepal Tourism Board",
  "PHOMI",
  "Pokhara Internet",
  "NYEF",
  "Franklin Edu Consultancy",
  "Everest Consulting",
  "Synexis Softech",
];

export default function ClientStrip() {
  const row1Clients = clients.slice(0, 6);
  const row2Clients = clients.slice(6);

  return (
    <section
      aria-label="Clients and collaborators"
      style={{
        borderTop: "1px solid #3c3034",
        borderBottom: "1px solid #3c3034",
        padding: "2.5rem 0",
        overflow: "hidden",
        backgroundColor: "#1c1618",
        position: "relative",
      }}
    >
      <div className="container-wide" style={{ marginBottom: "1.5rem" }}>
        <p
          className="text-label"
          style={{
            color: "#9E9296",
            textAlign: "center",
            letterSpacing: "0.08em",
            fontSize: "0.75rem",
          }}
        >
          Trusted by organizations &amp; forward-thinking brands
        </p>
      </div>

      {/* Mobile Only: Two-Liner Continuous Marquee (<768px) */}
      <div
        className="mobile-marquee-wrap"
        style={{ flexDirection: "column", gap: "1.25rem" }}
      >
        {/* Row 1: Right to Left */}
        <div
          className="marquee-mask marquee-wrapper"
          style={{
            width: "100%",
            overflow: "hidden",
            display: "flex",
            position: "relative",
          }}
        >
          <ul
            role="list"
            aria-label="Client marquee row 1"
            className="animate-marquee-continuous"
            style={{
              listStyle: "none",
              paddingLeft: 0,
              margin: 0,
            }}
          >
            {row1Clients.map((client, index) => (
              <li key={`r1-t1-${client}-${index}`}>
                <ClientBadge name={client} />
              </li>
            ))}
          </ul>

          <ul
            role="list"
            aria-hidden="true"
            className="animate-marquee-continuous"
            style={{
              listStyle: "none",
              paddingLeft: 0,
              margin: 0,
            }}
          >
            {row1Clients.map((client, index) => (
              <li key={`r1-t2-${client}-${index}`}>
                <ClientBadge name={client} />
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2: Left to Right */}
        <div
          className="marquee-mask marquee-wrapper"
          style={{
            width: "100%",
            overflow: "hidden",
            display: "flex",
            position: "relative",
          }}
        >
          <ul
            role="list"
            aria-label="Client marquee row 2"
            className="animate-marquee-continuous-right"
            style={{
              listStyle: "none",
              paddingLeft: 0,
              margin: 0,
            }}
          >
            {row2Clients.map((client, index) => (
              <li key={`r2-t1-${client}-${index}`}>
                <ClientBadge name={client} />
              </li>
            ))}
          </ul>

          <ul
            role="list"
            aria-hidden="true"
            className="animate-marquee-continuous-right"
            style={{
              listStyle: "none",
              paddingLeft: 0,
              margin: 0,
            }}
          >
            {row2Clients.map((client, index) => (
              <li key={`r2-t2-${client}-${index}`}>
                <ClientBadge name={client} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop & Tablet: Single-Liner Continuous Marquee (≥768px) */}
      <div
        className="desktop-marquee-wrap marquee-mask marquee-wrapper"
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <ul
          role="list"
          aria-label="Client marquee"
          className="animate-marquee-continuous"
          style={{
            listStyle: "none",
            paddingLeft: 0,
            margin: 0,
          }}
        >
          {clients.map((client, index) => (
            <li key={`dt-t1-${client}-${index}`}>
              <ClientBadge name={client} />
            </li>
          ))}
        </ul>

        <ul
          role="list"
          aria-hidden="true"
          className="animate-marquee-continuous"
          style={{
            listStyle: "none",
            paddingLeft: 0,
            margin: 0,
          }}
        >
          {clients.map((client, index) => (
            <li key={`dt-t2-${client}-${index}`}>
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
        color: hovered ? "#f15024" : "#FFECD1",
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
          backgroundColor: hovered ? "#f15024" : "rgba(255, 236, 209, 0.25)",
          display: "inline-block",
          transition: "background-color 0.25s ease",
        }}
      />
    </span>
  );
}

