# Portfolio Blueprint: Samarpann KC

---

## 1. Hero Copy & Value Proposition

### **Primary Headline Options (Choose one based on your tone)**

* **Option A (Bold & Direct — Recommended):**  
  > **"Design is communication, not decoration."**

* **Option B (Context & Specialization):**  
  > **"Crafting high-stakes event identities and distinct brand systems."**

* **Option C (Minimal & Purpose-Driven):**  
  > **"Visual clarity for brands and experiences that move people."**

---

### **The Compelling One-Liner (Sub-headline)**

> *"I’m Samarpann KC — an Event & Brand Designer with 3+ years of experience turning complex messages into sharp, unignorable visual identities across Nepal and beyond."*

---

### **Call to Action (CTA) Pair**

* **Primary Action:** `[ Explore Selected Works ↓ ]`  
  *(Style: Vivid Tangerine solid button with Onyx text)*
* **Secondary Action:** `[ Get in Touch → ]`  
  *(Style: Papaya Whip border with transparent background, subtle hover fill)*

---

## 2. Design System & Theme Specifications

Following the **shadcn/ui** minimalist, high-contrast, border-driven aesthetic:

### **Color Architecture**
* **Background (Canvas):** `#0A0A0A` (Onyx)
* **Text / Primary Foreground:** `#FFECD1` (Papaya Whip)
* **Primary Accent / Interactive:** `#FF7D00` (Vivid Tangerine)
* **Card & Container Backgrounds:** `#121212` (Slightly lighter Onyx)
* **Borders / Separators:** `#262626` (Subtle dark neutral for that crisp shadcn outline look)
* **Muted Text / Metadata:** `#8C867D` (Desaturated Papaya Whip for dates, tags, subtitles)

### **Typography: Space Grotesk System**
* **Display / Hero Titles:** Space Grotesk Bold (Tight tracking: `-0.03em`)
* **Section Headers (H2/H3):** Space Grotesk Medium / SemiBold
* **Body / Paragraphs:** Space Grotesk Regular (Generous line-height for readability: `1.6`)
* **Metadata / Badges / Numbers:** Space Grotesk Medium (All Caps or Monospaced-style treatment)

---

## 3. Page Structure & UX Layout

```
┌──────────────────────────────────────────────────────────┐
│ STICKY NAVBAR                                            │
│ [SKC / Logo]              [Work]  [About]  [Contact CTA] │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ HERO SECTION                                             │
│ • Available for select projects (Live Status Badge)      │
│ • Main Headline                                          │
│ • Value Proposition (One-liner)                          │
│ • Action Buttons                                         │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ TRUSTED / COLLABORATION STRIP                            │
│ "Trusted by organizations and forward-thinking brands"   │
│ Pokhara Metro | TVS | Feedax | SR Holdings | PHOMI ...   │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ CURATED WORK (The Core Showcase)                         │
│ Clean 2-column or full-bleed cards with clear metadata    │
│ 1. Right to Protein Run (Event Branding — 1.5Cr Scale)  │
│ 2. Square Auto World (EV Brand Identity)                 │
│ 3. Feedax Calcium Gel (Packaging System)                 │
│ 4. Lions Intl Club 325J (Event Conference Identity)      │
│ 5. Neplancer (Product / Platform Design)                 │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ DESIGN PHILOSOPHY (The Manifesto Card)                  │
│ "No unwanted brush strokes. Every element has a job."    │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ ABOUT & CREDENTIALS SNAPSHOT                             │
│ 3+ Years | Pokhara, Nepal | Event & Brand Specialization │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ HIGH-CONVERTING FOOTER / CONTACT                         │
│ "Have an event or brand to elevate?"                     │
│ [Direct Email Click-to-Copy] | [Socials] | [Timezone]    │
└──────────────────────────────────────────────────────────┘
```

---

## 4. Curated Project Architecture (Case Study Format)

For each project card and case study detail, use this standardized, scannable data structure:

### **Project 01: Right to Protein Run**
* **Category:** Large-Scale Event Branding
* **Scope:** Identity, Signage, Spatial Graphics, Merchandise, Marathon Collateral
* **Impact Badge:** *~1.5 Crore NPR Scale National Event*
* **Core Narrative:** How visual discipline and high-visibility color systems coordinated thousands of runners and partners without visual chaos.

### **Project 02: Square Auto World**
* **Category:** EV Brand Identity
* **Scope:** Brand Strategy, Visual System, Showroom Guidelines
* **Core Narrative:** Modern, clean, and sustainable automotive branding tailored for the rising EV market.

### **Project 03: Feedax Premium Calcium Gel**
* **Category:** Industrial Packaging Design
* **Scope:** Label Architecture, Hierarchy, Print Finishes
* **Core Narrative:** Communicating clinical authority, quality, and veterinary clarity on the shelf.

### **Project 04: Lions International District 325J Cabinet Meeting**
* **Category:** Conference & Event Identity
* **Scope:** Stage Design, Delegate Kits, Formal Event Assets
* **Core Narrative:** Balancing global organizational prestige with sharp, modern executive aesthetics.

### **Project 05: Neplancer**
* **Category:** Digital Product & Platform
* **Scope:** UI/UX Direction, Community Identity
* **Core Narrative:** Empowering Nepalese freelancers through a focused, user-centric marketplace experience.

---

## 5. Step-by-Step Implementation Guide (For Antigravity)

### **Phase 1: Design Tokens & Base Setup**
1. **Canvas Configuration:** Set your default background to `#0A0A0A` and text to `#FFECD1`.
2. **Typography Scale:**
   - Define H1 (48px–64px desktop / 36px mobile).
   - Define H2 (32px–40px).
   - Define Body (16px–18px).
   - Assign **Space Grotesk** globally.
3. **Card Utility Tokens:**
   - Background: `#121212`
   - Border: `1px solid #262626`
   - Corner Radius: Consistent 8px or 12px (shadcn style uses refined, subtle radii).

---

### **Phase 2: Global Navigation & Hero Component**
1. **Nav Bar:**
   - Build a glassmorphism/semi-transparent bar with a `1px` bottom border (`#262626`).
   - Left: Name/Monogram (`SAMARPANN.KC`).
   - Right: Clean text links (`Work`, `About`, `Contact`).
2. **Hero Assembly:**
   - Top item: A small status badge → `🟢 Available for Q2/Q3 Projects` (Papaya Whip text, dark pill container with a Tangerine or Green dot).
   - Middle item: Main Headline in Papaya Whip.
   - Bottom item: The 2-button CTA group.

---

### **Phase 3: Client Logo Strip**
1. Create a single-row section with low visual noise.
2. Render client names (Pokhara Metropolitan City, TVS, Feedax, SR Holdings, PHOMI, Square Auto World) in **monochrome muted text** or clean grayscale SVGs.
3. Keep opacity at 50% on default, transitioning to 100% on hover.

---

### **Phase 4: Work Grid (Visual Hierarchy)**
1. **Card Layout:**
   - Alternate between large full-width cards for flagship projects (e.g., *Right to Protein Run*) and 2-column cards for branding/packaging.
2. **Thumbnail Structure:**
   - Crisp 16:9 or 4:3 image aspect ratio.
   - Subtle dark border around images.
   - Image hover: Slight zoom (1.02x scale) with smooth transition; no excessive bouncing.
3. **Project Info Row:**
   - Project Name on the left.
   - Category and Year on the right in muted Papaya Whip (`#8C867D`).

---

### **Phase 5: Philosophy & Value Statement Section**
1. Create a distinct full-width card container.
2. Display a manifesto-style quote:
   > *"Good design is not about adding brushstrokes until nothing more fits. It is about stripping away the noise until only the message speaks."*
3. Include your role summary: 3+ years in Pokhara, Nepal, driving commercial outcomes through events, branding, and packaging.

---

### **Phase 6: Contact & Conversion Footer**
1. Design a minimalist, high-impact contact area:
   - Big callout headline: *"Let's build something intentional."*
   - Interactive Click-to-Copy Email link (shows "Copied!" feedback).
   - Direct links to LinkedIn, Behance, and other professional channels.
   - Local time indicator: `Pokhara, Nepal (NPT / GMT+5:45)`.

---

### **Phase 7: Review & UX Checklist**
- [ ] **Contrast Check:** Ensure all text in Papaya Whip (`#FFECD1`) passes WCAG AA readability on Onyx (`#0A0A0A`).
- [ ] **Negative Space:** Ensure minimum 80px–120px vertical padding between sections on desktop.
- [ ] **Mobile Responsiveness:** Confirm project cards stack cleanly to a single column on small screens.
- [ ] **No Dead Ends:** Ensure every project page has a "Next Project" or "Back to Work" trigger at the bottom.