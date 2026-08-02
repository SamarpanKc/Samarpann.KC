export default function PhilosophySection() {
  return (
    <section
      id="about"
      aria-labelledby="philosophy-heading"
      className="section-padding"
      style={{
        borderTop: "1px solid #262626",
      }}
    >
      <div className="container-wide">
        <div
          className="card"
          style={{
            padding: "clamp(2.5rem, 6vw, 5rem)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle corner accent */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background:
                "linear-gradient(90deg, transparent 0%, #FF7D00 50%, transparent 100%)",
            }}
          />

          {/* Opening quote mark */}
          <div
            aria-hidden="true"
            style={{
              fontSize: "5rem",
              lineHeight: 0.5,
              color: "#FF7D00",
              fontWeight: 700,
              opacity: 0.3,
              marginBottom: "1.5rem",
              fontFamily: "Georgia, serif",
            }}
          >
            &ldquo;
          </div>

          {/* Quote */}
          <blockquote
            id="philosophy-heading"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
              fontWeight: 500,
              color: "#FFECD1",
              lineHeight: 1.65,
              maxWidth: "720px",
              margin: "0 auto",
              letterSpacing: "-0.06em",
            }}
          >
            Good design is not about adding brushstrokes until nothing more
            fits. It is about stripping away the noise until only the message
            speaks.
          </blockquote>

          {/* Divider */}
          <div
            aria-hidden="true"
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "#262626",
              margin: "2.5rem auto",
            }}
          />

          {/* Role summary */}
          <p
            className="text-body"
            style={{
              color: "#8C867D",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            3+ years designing; creating visual systems that work, not just look good.
          </p>

          {/* Credential pills */}
          <div
            className="philosophy-credential-pills"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.625rem",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            {[
              "Brand Identity",
              "Event Branding",
              "Packaging Design",
              "Spatial Graphics",
              "UI/UX Direction",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  padding: "0.375rem 0.875rem",
                  border: "1px solid #262626",
                  borderRadius: "9999px",
                  fontSize: "0.8125rem",
                  color: "#8C867D",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
