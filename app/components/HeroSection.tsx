export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "7.5rem 1.5rem 4rem",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0A0A0A",
      }}
    >
      {/* Background Subtle Grid Pattern */}
      <div
        className="bg-grid-pattern"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {/* Atmospheric Radial Ambient Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(800px, 92vw)",
          height: "min(800px, 92vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,125,0,0.12) 0%, rgba(255,125,0,0.02) 45%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      <div
        className="container-wide"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.75rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Status Badge */}
        <div
          role="status"
          aria-label="Availability status"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.625rem",
            padding: "0.4rem 1rem",
            backgroundColor: "rgba(18, 18, 18, 0.8)",
            border: "1px solid rgba(255, 236, 209, 0.12)",
            borderRadius: "9999px",
            fontSize: "0.8125rem",
            fontWeight: 500,
            color: "#FFECD1",
            letterSpacing: "0.02em",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#22c55e",
              boxShadow: "0 0 8px rgba(34,197,94,0.8)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          Available for Brand Projects
        </div>

        {/* Main Headline */}
        <h1
          id="hero-headline"
          className="text-display"
          style={{
            color: "#FFECD1",
            maxWidth: "900px",
            lineHeight: 1.08,
            letterSpacing: "-0.04em",
          }}
        >
          Hi, I'm{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #FF7D00 0%, #FFA84C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          ><br />
            SAMARPANN KC
          </span>
        </h1>


        {/* Short Sub-headline */}
        <p
          className="text-body"
          style={{
            color: "#8C867D",
            maxWidth: "640px",
            fontSize: "1.0625rem",
            lineHeight: "1.6",
          }}
        >
          Over <span style={{ color: "#FFECD1", fontWeight: 600 }}>3+ years</span> of crafting sharp, high-impact visual identities and spatial event design systems for leading organizations across Nepal and beyond.
        </p>

        {/* Strategic Manifesto Quote Banner */}
        {/* <div
          className="hero-manifesto-card"
          style={{
            maxWidth: "640px",
            width: "100%",
            padding: "1.25rem 1.5rem",
            textAlign: "center",
            margin: "0.25rem 0",
          }}
        >
          <p
            style={{
              color: "#FF7D00",
              fontSize: "1.0625rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            "Design is communication, not just Decoration"
          </p>
        </div> */}

        {/* Focus Pillar Tags */}
        <div
          aria-label="Core focus areas"
          className="hero-pillar-tags-grid"
        >
          <span className="hero-pill-badge">✦ Brand Systems</span>
          <span className="hero-pill-badge">◈ Visual Identity</span>
          <span className="hero-pill-badge">⬟ Event Design</span>
          <span className="hero-pill-badge">✥ Spatial Strategy</span>
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          <a
            id="hero-cta-work"
            href="#work"
            className="btn-primary"
            aria-label="Explore selected works"
          >
            Explore Selected Works ↓
          </a>
          <a
            id="hero-cta-contact"
            href="#contact"
            className="btn-secondary"
            aria-label="Get in touch"
          >
            Start a Project →
          </a>
        </div>

        {/* Proof Point Metrics */}
        <div
          className="proof-metrics-grid"
          style={{
            marginTop: "1.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(38, 38, 38, 0.6)",
            maxWidth: "600px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "#FFECD1",
                letterSpacing: "-0.03em",
              }}
            >
              3+
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#8C867D",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginTop: "0.125rem",
              }}
            >
              Years Experience
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "#FF7D00",
                letterSpacing: "-0.03em",
              }}
            >
              10+
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#8C867D",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginTop: "0.125rem",
              }}
            >
              Key Client Partners
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "#FFECD1",
                letterSpacing: "-0.03em",
              }}
            >
              100%
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#8C867D",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginTop: "0.125rem",
              }}
            >
              Purpose-Driven Design
            </div>
          </div>
        </div>

        {/* Scroll Nudge */}
        {/* <div
          aria-hidden="true"
          style={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.45,
          }}
        >
          <span
            style={{
              fontSize: "0.6875rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#8C867D",
            }}
          >
            Scroll Down
          </span>
          <div
            style={{
              width: "1px",
              height: "36px",
              background: "linear-gradient(to bottom, #FF7D00, transparent)",
            }}
          />
        </div> */}
      </div>
    </section>
  );
}


