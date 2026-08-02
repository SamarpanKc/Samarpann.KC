"use client";

import { useState } from "react";

const EMAIL = "samarpannkc@gmail.com";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers without clipboard API
      const el = document.createElement("textarea");
      el.value = EMAIL;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        borderTop: "1px solid #262626",
        padding: "4.5rem 1.5rem 3rem",
      }}
    >
      <div className="container-wide">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left — CTA copy */}
          <div>
            <p
              className="text-label"
              style={{ color: "#FF7D00", marginBottom: "1rem" }}
            >
              Let&apos;s Collaborate
            </p>
            <h2
              id="contact-heading"
              className="text-section-title"
              style={{ color: "#FFECD1", marginBottom: "1rem" }}
            >
              Let&apos;s build something intentional.
            </h2>
            <p
              className="text-body"
              style={{ color: "#8C867D", maxWidth: "38ch" }}
            >
              Have an event or brand identity that needs clarity and impact?
              I&apos;m currently taking on new projects.
            </p>
          </div>

          {/* Right — Contact details */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {/* Email copy button */}
            <div>
              <p
                className="text-label"
                style={{ color: "#8C867D", marginBottom: "0.5rem" }}
              >
                Email
              </p>
              <button
                id="email-copy-btn"
                onClick={handleCopyEmail}
                aria-label={
                  copied
                    ? "Email address copied to clipboard"
                    : "Copy email address to clipboard"
                }
                title={copied ? "Copied!" : "Click to copy"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  color: copied ? "#FF7D00" : "#FFECD1",
                  fontSize: "1.0625rem",
                  fontWeight: 500,
                  fontFamily: "inherit",
                  transition: "color 0.2s ease",
                  minHeight: "44px",
                }}
              >
                <span>{EMAIL}</span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.25rem 0.625rem",
                    backgroundColor: copied ? "#FF7D00" : "#1a1a1a",
                    border: `1px solid ${copied ? "#FF7D00" : "#262626"}`,
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: copied ? "#0A0A0A" : "#8C867D",
                    transition: "all 0.2s ease",
                    letterSpacing: "0.04em",
                    userSelect: "none",
                  }}
                >
                  {copied ? "Copied!" : "Copy"}
                </span>
              </button>
            </div>

            {/* Socials */}
            <div
              style={{
                display: "flex",
                gap: "1.25rem",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  id: "linkedin-link",
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/samarpannkc",
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  id: "behance-link",
                  label: "Behance",
                  href: "https://behance.net/samarpannkc",
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.938.19.386.284.858.284 1.411 0 .604-.135 1.109-.404 1.518-.271.41-.667.75-1.195 1.022.72.209 1.261.57 1.621 1.081.362.512.543 1.126.543 1.839 0 .607-.118 1.128-.354 1.566-.238.437-.563.801-.982 1.09-.415.285-.896.498-1.441.636-.547.137-1.108.206-1.688.206H0V5.731h7.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.23.467-.604.467-1.119 0-.285-.051-.521-.154-.707-.104-.187-.247-.333-.426-.44a1.859 1.859 0 00-.607-.232 3.351 3.351 0 00-.712-.073H2.831v2.916h4.621zm.199 5.239c.267 0 .521-.026.763-.08.243-.053.459-.143.648-.271.188-.128.339-.301.454-.518.114-.217.172-.495.172-.831 0-.659-.185-1.127-.555-1.407-.372-.28-.862-.42-1.473-.42H2.831v3.527h4.82zm8.695-1.67c.299.291.729.436 1.292.436.402 0 .749-.101 1.041-.303.293-.202.473-.417.539-.643h2.271c-.363 1.136-.921 1.949-1.674 2.443-.754.494-1.667.742-2.736.742-.742 0-1.411-.119-2.005-.357-.594-.238-1.097-.578-1.509-1.022-.413-.442-.731-.971-.952-1.585-.222-.614-.333-1.289-.333-2.025 0-.713.115-1.375.344-1.987.23-.612.556-1.14.979-1.583.423-.444.933-.792 1.527-1.044.594-.252 1.255-.378 1.983-.378.808 0 1.512.156 2.115.465.604.31 1.099.729 1.489 1.255.39.524.669 1.13.84 1.816.169.686.217 1.41.14 2.169h-6.766c.037.637.237 1.109.535 1.401zm2.37-3.878c-.239-.262-.628-.394-1.168-.394-.339 0-.622.057-.849.172-.228.113-.41.257-.547.428a1.604 1.604 0 00-.294.555 2.66 2.66 0 00-.099.563h3.465c-.082-.576-.27-.061-.508-.324zm-3.934-6.019h5.439v1.312h-5.439z" />
                    </svg>
                  ),
                },
                {
                  id: "instagram-link",
                  label: "Instagram",
                  href: "https://instagram.com/samarpannkc",
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <SocialLink key={social.id} {...social} />
              ))}
            </div>

            {/* Location */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "0.25rem",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8C867D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#8C867D",
                }}
              >
                Pokhara, Nepal{" "}
                <span style={{ color: "#4a4540" }}>(GMT+5:45)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div
          style={{
            marginTop: "3.5rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid #1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "#4a4540" }}>
            © {new Date().getFullYear()} Samarpann KC. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8125rem", color: "#4a4540" }}>
            Design is communication, not just decoration.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  id,
  label,
  href,
  icon,
}: {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} profile (opens in new tab)`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        color: hovered ? "#FF7D00" : "#8C867D",
        textDecoration: "none",
        fontSize: "0.9375rem",
        fontWeight: 500,
        transition: "color 0.2s ease",
        minHeight: "44px",
      }}
    >
      {icon}
      {label}
    </a>
  );
}
