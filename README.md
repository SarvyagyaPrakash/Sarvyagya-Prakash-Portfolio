<div align="center">
  <h1>Sarvyagya Prakash · Portfolio</h1>
  <p>
    <strong>Software Developer & AI Enthusiast</strong>
  </p>
  <p>
    <a href="https://drive.google.com/file/d/1fivd1CBoMP1ayJPw79xyNPHSCDFe14-A/view?usp=sharing" target="_blank">Resume</a> ·
    <a href="mailto:hi@sarv.cc">Email</a> ·
    <a href="https://linkedin.com/in/sarvyagya" target="_blank">LinkedIn</a> ·
    <a href="https://github.com/sarvyagya" target="_blank">GitHub</a> ·
    <a href="https://leetcode.com/u/sarvyagya/" target="_blank">LeetCode</a>
  </p>
</div>

---

A modern, interactive single-page portfolio built with **React 19**, **Vite 8**, **Framer Motion**, and **Tailwind CSS 4**. Designed to showcase my skills, projects, certifications, and experience in a visually rich and engaging format.

## ✨ Features

- **Custom Cursor** — A spring-animated two-element cursor (dot + ring) that expands on interactive elements and adapts to touch devices.
- **Magnetic Hover Effect** — Buttons attract toward the cursor with configurable spring physics.
- **3D Tilt Cards** — Project and certification cards rotate based on mouse position with smooth spring smoothing.
- **Dark / Light Theme** — Toggle with a rotating sun/moon icon; persists via `localStorage` and respects `prefers-color-scheme`.
- **Lenis Smooth Scrolling** — Eased scrolling with section anchor interception.
- **Animated Hero** — Rotating taglines via `AnimatePresence`, count-up stats triggered on scroll, morphing organic border on the profile portrait.
- **Scroll-Triggered Animations** — Staggered reveal for About, Skills bars, and project cards using Framer Motion + `useInView`.
- **Scrolling Technology Marquees** — Two-directional auto-scrolling tag strips in the Skills section.
- **Intro Loader** — Full-screen "SP" splash with a fade/slide transition on entry.
- **Toast Notifications** — Placeholder link clicks show a gentle toast instead of navigating away.
- **Fully Responsive** — Mobile overlay navigation, responsive grid layouts, and adaptive font sizing.

## 🛠 Tech Stack

| | |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`) |
| **Animation** | [Framer Motion 12](https://motion.dev/) |
| **Smooth Scroll** | [Lenis 1](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Linting** | [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) |

## 📁 Project Structure

```
Portfolio/
├── index.html                  # Entry HTML (Google Fonts, OG meta, root div)
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration (React + Tailwind plugins)
├── .oxlintrc.json              # Linter rules
├── public/
│   ├── favicon.gif             # Animated favicon
│   └── icons.svg               # SVG icon sprite
└── src/
    ├── main.jsx                # App entry point
    ├── index.css               # Tailwind directives, global styles, theme variables
    ├── App.jsx                 # Root layout: theme, Lenis, loader, toast system
    ├── assets/
    │   ├── hero.png            # Hero illustration
    │   └── profile.jpg         # Profile portrait
    └── components/
        ├── Navbar.jsx          # Fixed nav + mobile overlay + theme toggle
        ├── CustomCursor.jsx    # Spring-animated custom cursor
        ├── Hero.jsx            # Hero section with taglines, portrait, stats
        ├── About.jsx           # Bio, info cards, specialization highlights
        ├── Skills.jsx          # Skill bars + scrolling tech marquees
        ├── Projects.jsx        # Featured + regular project cards (TiltCard)
        ├── Certifications.jsx  # Certification cards with theme-colored variants
        ├── Connect.jsx         # Contact section, social links, footer
        ├── Magnetic.jsx        # Reusable magnetic hover wrapper
        └── TiltCard.jsx        # Reusable 3D tilt card wrapper
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** or **yarn**

### Install & Run

```bash
npm install
npm run dev
```

The dev server starts on **port 5200** → [http://localhost:5200](http://localhost:5200)

### Build for Production

```bash
npm run build
```

Output is written to `dist/` — deploy the contents of this folder to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (port 5200) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run Oxlint |

## 🧩 Sections

1. **Home** — Profile portrait, rotating taglines, availability badge, CTA buttons (View Projects, Resume), count-up stats.
2. **About** — Biography, quick info cards (Location, Degree, Focus, Goal), specialization highlights (Computer Vision, Backend + AI, Scalable Architecture).
3. **Skills** — Animated progress bars, two-directional scrolling technology marquees.
4. **Projects** — Featured project (large TiltCard) + grid of regular project cards with tech tags and links.
5. **Certifications** — Certification cards with distinct theme colors and preview links.
6. **Connect** — Email CTA, social links (LinkedIn, GitHub, LeetCode), back-to-top button, footer.

## 📄 Resume

[View my resume](https://drive.google.com/file/d/1fivd1CBoMP1ayJPw79xyNPHSCDFe14-A/view?usp=sharing) — also accessible via the **Resume** button in the Hero section.

## 🤝 Connect

- **Email:** [hi@sarv.cc](mailto:hi@sarv.cc)
- **LinkedIn:** [linkedin.com/in/sarvyagya](https://linkedin.com/in/sarvyagya)
- **GitHub:** [github.com/sarvyagya](https://github.com/sarvyagya)
- **LeetCode:** [leetcode.com/u/sarvyagya](https://leetcode.com/u/sarvyagya/)

---

<div align="center">
  <sub>Built with React, Vite, Tailwind CSS & Framer Motion · © 2025 Sarvyagya Prakash</sub>
</div>
