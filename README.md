<div align="center">

<!-- Animated Gradient Orb Background -->
<svg width="0" height="0" style="position:absolute">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6ee7b7" />
      <stop offset="25%" stop-color="#34d399" />
      <stop offset="50%" stop-color="#10b981" />
      <stop offset="75%" stop-color="#059669" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <linearGradient id="gradient2" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="50%" stop-color="#6ee7b7" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="50%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#6ee7b7" />
    </linearGradient>
  </defs>
</svg>

<style>
  @keyframes shimmer {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(1deg); }
    66% { transform: translateY(5px) rotate(-1deg); }
  }
  @keyframes float2 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-8px) rotate(-1deg); }
    66% { transform: translateY(6px) rotate(1deg); }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 8px rgba(52,211,153,0.3), 0 0 20px rgba(52,211,153,0.1); }
    50% { box-shadow: 0 0 16px rgba(52,211,153,0.5), 0 0 40px rgba(52,211,153,0.2); }
  }
  @keyframes spin-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes spin-slower {
    0% { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }
  }
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-reverse {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  @keyframes width-grow {
    0% { width: 0%; }
    100% { width: var(--target-width); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  @keyframes fade-in-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes border-dance {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes ripple {
    0% { transform: scale(1); opacity: 0.8; }
    100% { transform: scale(2.5); opacity: 0; }
  }
  @keyframes avatar-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .section-card {
    background: rgba(52,211,153,0.05);
    border: 1px solid rgba(52,211,153,0.15);
    border-radius: 10px;
    padding: 14px 18px;
    flex: 1;
    min-width: 180px;
    transition: all 0.3s ease;
  }
  .section-card:hover {
    border-color: #34d399 !important;
    transform: translateY(-2px);
  }
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg,#059669,#34d399);
    color: #fff;
    padding: 10px 24px;
    border-radius: 100px;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.02em;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(52,211,153,0.25);
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(52,211,153,0.35);
  }
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #1f2937;
    color: #d1d5db;
    padding: 10px 24px;
    border-radius: 100px;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.02em;
    text-decoration: none;
    border: 1px solid #374151;
    transition: all 0.3s ease;
  }
  .btn-secondary:hover {
    border-color: #34d399 !important;
    color: #34d399 !important;
    transform: translateY(-2px);
  }
  .btn-top {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #6b7280;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    text-decoration: none;
    padding: 8px 20px;
    border: 1px solid #1f2937;
    border-radius: 100px;
    transition: all 0.3s ease;
  }
  .btn-top:hover {
    border-color: #34d399 !important;
    color: #34d399 !important;
  }
  
  .readme-card {
    display: none;
  }
  .section-heading {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin: 40px 0 20px 0;
    display: inline-block;
  }
  .section-heading::after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #34d399, #059669);
    border-radius: 2px;
    margin-top: 8px;
    animation: pulse-glow 2s ease-in-out infinite;
  }
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
    margin: 20px 0;
  }
  .feature-card {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 12px;
    padding: 20px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .feature-card:hover {
    border-color: #34d399;
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(52,211,153,0.15);
  }
  .feature-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(52,211,153,0.1);
    border: 1px solid rgba(52,211,153,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    font-size: 16px;
  }
  .hover-glow {
    transition: all 0.3s ease;
  }
  .hover-glow:hover {
    text-shadow: 0 0 12px rgba(52,211,153,0.5);
  }
  .code-block {
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 10px;
    padding: 16px 20px;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 14px;
    line-height: 1.6;
    overflow-x: auto;
    position: relative;
    margin: 12px 0;
  }
  .code-block::before {
    content: '$ ';
    color: #34d399;
    font-weight: bold;
  }
  .divider-gradient {
    height: 1px;
    background: linear-gradient(90deg, transparent, #34d399, transparent);
    margin: 48px 0;
    opacity: 0.3;
  }
  .badge-pulse {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(52,211,153,0.08);
    border: 1px solid rgba(52,211,153,0.2);
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #34d399;
    margin: 16px 0;
  }
  .badge-pulse .dot {
    width: 7px;
    height: 7px;
    background: #34d399;
    border-radius: 50%;
    position: relative;
  }
  .badge-pulse .dot::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: #34d399;
    animation: ripple 1.5s ease-out infinite;
  }
  .stat-item {
    text-align: center;
    padding: 16px;
  }
  .stat-number {
    font-size: 36px;
    font-weight: 800;
    background: linear-gradient(135deg, #34d399, #059669);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .stat-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #6b7280;
    margin-top: 4px;
  }
  .hover-underline {
    position: relative;
    text-decoration: none;
    color: #34d399;
  }
  .hover-underline::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: #34d399;
    transition: width 0.3s ease;
  }
  .hover-underline:hover::after {
    width: 100%;
  }
  .hover-lift {
    display: inline-block;
    transition: transform 0.2s ease;
  }
  .hover-lift:hover {
    transform: translateY(-2px);
  }
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.01ms !important; }
  }
</style>

<!-- ==================== HEADER ==================== -->

<br />

<!-- Animated Avatar / Initials Logo -->
<svg viewBox="0 0 120 120" width="120" height="120" style="display:block;margin:0 auto 20px;animation:avatar-float 4s ease-in-out infinite;filter:drop-shadow(0 8px 24px rgba(52,211,153,0.2))">
  <defs>
    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="112" height="112" rx="28" ry="28" fill="none" stroke="url(#avatarGrad)" stroke-width="2" opacity="0.4" />
  <rect x="8" y="8" width="104" height="104" rx="24" ry="24" fill="#0f172a" stroke="url(#avatarGrad)" stroke-width="1.5" />
  <text x="60" y="72" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-size="44" font-weight="800" fill="url(#avatarGrad)">SP</text>
</svg>

<!-- Animated Gradient Name -->
<h1 style="font-size:52px;font-weight:900;letter-spacing:-0.03em;margin:0;line-height:1.1;background:linear-gradient(135deg,#34d399,#6ee7b7,#059669,#34d399,#10b981);background-size:300% 300%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 6s ease-in-out infinite;">
  Sarvyagya Prakash
</h1>

<!-- Tagline with typewriter cursor -->
<p style="font-size:18px;font-weight:600;color:#9ca3af;margin:8px 0 4px 0;letter-spacing:-0.01em;">
  Software Developer &amp; AI Enthusiast
  <span style="display:inline-block;width:2px;height:20px;background:#34d399;margin-left:4px;vertical-align:middle;animation:blink 1s step-end infinite;"></span>
</p>

<!-- Animated Status Badge -->
<div class="badge-pulse">
  <span class="dot"></span>
  Available for Internship / Full-time
</div>

<!-- Navigation Links -->
<p style="font-size:14px;font-weight:500;margin:16px 0 0 0;display:flex;flex-wrap:wrap;gap:8px;justify-content:center;align-items:center;">
  <a href="https://drive.google.com/file/d/1fivd1CBoMP1ayJPw79xyNPHSCDFe14-A/view?usp=sharing" target="_blank" class="hover-underline hover-lift">📄 Resume</a>
  <span style="color:#374151;">·</span>
  <a href="mailto:hi@sarv.cc" class="hover-underline hover-lift">✉️ Email</a>
  <span style="color:#374151;">·</span>
  <a href="https://linkedin.com/in/sarvyagya" target="_blank" class="hover-underline hover-lift">💼 LinkedIn</a>
  <span style="color:#374151;">·</span>
  <a href="https://github.com/sarvyagya" target="_blank" class="hover-underline hover-lift">🐙 GitHub</a>
  <span style="color:#374151;">·</span>
  <a href="https://leetcode.com/u/sarvyagya/" target="_blank" class="hover-underline hover-lift">⚡ LeetCode</a>
</p>

<!-- Quick Stats Row -->
<div style="display:flex;justify-content:center;gap:32px;margin:28px 0 12px 0;flex-wrap:wrap;">
  <div class="stat-item">
    <div class="stat-number">7+</div>
    <div class="stat-label">Certifications</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">10+</div>
    <div class="stat-label">Projects</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">2+</div>
    <div class="stat-label">Experiences</div>
  </div>
</div>

</div>

<!-- Animated SVG Divider -->
<svg width="100%" height="20" viewBox="0 0 1200 20" preserveAspectRatio="none" style="display:block;margin:24px 0;">
  <defs>
    <linearGradient id="dividerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="transparent" />
      <stop offset="50%" stop-color="#34d399" />
      <stop offset="100%" stop-color="transparent" />
    </linearGradient>
  </defs>
  <circle cx="600" cy="10" r="3" fill="#34d399">
    <animate attributeName="cx" values="0;1200;0" dur="8s" repeatCount="indefinite" />
    <animate attributeName="opacity" values="0;1;0" dur="8s" repeatCount="indefinite" />
  </circle>
</svg>

<!-- ==================== OVERVIEW ==================== -->

<div align="center">

<span style="display:inline-block;padding:4px 16px;border-radius:100px;background:rgba(52,211,153,0.08);border:1px solid rgba(52,211,153,0.15);font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#34d399;margin:8px auto;">Overview</span>

</div>

<p align="center" style="font-size:16px;line-height:1.7;color:#9ca3af;max-width:680px;margin:12px auto;">
  A modern, interactive single-page portfolio designed to showcase skills, projects, certifications, and experience in a visually rich and engaging format. Every interaction — from the cursor to the cards — is crafted with care.
</p>

<!-- ==================== ✨ FEATURES ==================== -->

<h2 class="section-heading" style="color:#f3f4f6;">✧ Features</h2>

<div class="feature-grid">

<div class="feature-card">
  <div class="feature-icon">🖱️</div>
  <strong style="color:#f3f4f6;font-size:15px;">Custom Cursor</strong>
  <p style="color:#6b7280;font-size:13px;line-height:1.5;margin:6px 0 0 0;">Spring-animated dot + ring that expands on interactive elements and adapts to touch devices.</p>
</div>

<div class="feature-card">
  <div class="feature-icon">🧲</div>
  <strong style="color:#f3f4f6;font-size:15px;">Magnetic Hover Effect</strong>
  <p style="color:#6b7280;font-size:13px;line-height:1.5;margin:6px 0 0 0;">Buttons attract toward the cursor with configurable spring physics for a playful, tactile feel.</p>
</div>

<div class="feature-card">
  <div class="feature-icon">🌀</div>
  <strong style="color:#f3f4f6;font-size:15px;">3D Tilt Cards</strong>
  <p style="color:#6b7280;font-size:13px;line-height:1.5;margin:6px 0 0 0;">Project and certification cards rotate based on mouse position with smooth spring smoothing.</p>
</div>

<div class="feature-card">
  <div class="feature-icon">🌓</div>
  <strong style="color:#f3f4f6;font-size:15px;">Dark / Light Theme</strong>
  <p style="color:#6b7280;font-size:13px;line-height:1.5;margin:6px 0 0 0;">Toggle with a rotating sun/moon icon, persisted via <code>localStorage</code> while respecting <code>prefers-color-scheme</code>.</p>
</div>

<div class="feature-card">
  <div class="feature-icon">✨</div>
  <strong style="color:#f3f4f6;font-size:15px;">Lenis Smooth Scrolling</strong>
  <p style="color:#6b7280;font-size:13px;line-height:1.5;margin:6px 0 0 0;">Eased scrolling with section anchor interception for buttery navigation between sections.</p>
</div>

<div class="feature-card">
  <div class="feature-icon">🎬</div>
  <strong style="color:#f3f4f6;font-size:15px;">Animated Hero</strong>
  <p style="color:#6b7280;font-size:13px;line-height:1.5;margin:6px 0 0 0;">Rotating taglines, count-up stats triggered on scroll, and a morphing organic border on the profile portrait.</p>
</div>

<div class="feature-card">
  <div class="feature-icon">📜</div>
  <strong style="color:#f3f4f6;font-size:15px;">Scroll-Triggered Animations</strong>
  <p style="color:#6b7280;font-size:13px;line-height:1.5;margin:6px 0 0 0;">Staggered reveal for About sections, skill bars, and project cards using intersection observers.</p>
</div>

<div class="feature-card">
  <div class="feature-icon">🏃</div>
  <strong style="color:#f3f4f6;font-size:15px;">Scrolling Tech Marquees</strong>
  <p style="color:#6b7280;font-size:13px;line-height:1.5;margin:6px 0 0 0;">Two-directional auto-scrolling tag strips in the Skills section for a dynamic showcase.</p>
</div>

<div class="feature-card">
  <div class="feature-icon">🎯</div>
  <strong style="color:#f3f4f6;font-size:15px;">Intro Loader</strong>
  <p style="color:#6b7280;font-size:13px;line-height:1.5;margin:6px 0 0 0;">Full-screen "SP" splash with a fade/slide transition on entry for a polished first impression.</p>
</div>

<div class="feature-card">
  <div class="feature-icon">🍞</div>
  <strong style="color:#f3f4f6;font-size:15px;">Toast Notifications</strong>
  <p style="color:#6b7280;font-size:13px;line-height:1.5;margin:6px 0 0 0;">Placeholder link clicks show a gentle toast instead of navigating away, keeping you in the experience.</p>
</div>

<div class="feature-card">
  <div class="feature-icon">📱</div>
  <strong style="color:#f3f4f6;font-size:15px;">Fully Responsive</strong>
  <p style="color:#6b7280;font-size:13px;line-height:1.5;margin:6px 0 0 0;">Mobile overlay navigation, responsive grid layouts, and adaptive font sizing across all viewports.</p>
</div>

</div>

<!-- ==================== PROJECT STRUCTURE ==================== -->

<h2 class="section-heading" style="color:#f3f4f6;">✧ Project Structure</h2>

<div style="background:#0f172a;border:1px solid #1e293b;border-radius:14px;padding:20px 24px;margin:16px 0;">

<pre style="color:#9ca3af;font-family:'SF Mono','Fira Code',monospace;font-size:13px;line-height:1.7;margin:0;overflow-x:auto;">
<strong style="color:#34d399;">Portfolio/</strong>
├── <span style="color:#d1d5db;">index.html</span>                  <span style="color:#6b7280;"># Entry point (fonts, OG meta, root div)</span>
├── <span style="color:#d1d5db;">package.json</span>                <span style="color:#6b7280;"># Dependencies and scripts</span>
├── <span style="color:#d1d5db;">vite.config.js</span>              <span style="color:#6b7280;"># Build configuration</span>
├── <span style="color:#d1d5db;">.oxlintrc.json</span>              <span style="color:#6b7280;"># Linter rules</span>
├── <span style="color:#d1d5db;">public/</span>
│   ├── <span style="color:#d1d5db;">favicon.gif</span>             <span style="color:#6b7280;"># Animated favicon</span>
│   └── <span style="color:#d1d5db;">icons.svg</span>               <span style="color:#6b7280;"># SVG icon sprite</span>
└── <strong style="color:#34d399;">src/</strong>
    ├── <span style="color:#d1d5db;">main.jsx</span>                <span style="color:#6b7280;"># App entry point</span>
    ├── <span style="color:#d1d5db;">index.css</span>               <span style="color:#6b7280;"># Global styles &amp; theme variables</span>
    ├── <span style="color:#d1d5db;">App.jsx</span>                 <span style="color:#6b7280;"># Root layout: theme, Lenis, loader, toast</span>
    ├── <span style="color:#d1d5db;">App.css</span>
    ├── <strong style="color:#6366f1;">assets/</strong>
    │   ├── <span style="color:#d1d5db;">hero.png</span>            <span style="color:#6b7280;"># Hero illustration</span>
    │   └── <span style="color:#d1d5db;">profile.jpg</span>         <span style="color:#6b7280;"># Profile portrait</span>
    └── <strong style="color:#6366f1;">components/</strong>
        ├── <span style="color:#d1d5db;">Navbar.jsx</span>          <span style="color:#6b7280;"># Fixed nav + mobile overlay + theme toggle</span>
        ├── <span style="color:#d1d5db;">CustomCursor.jsx</span>    <span style="color:#6b7280;"># Spring-animated custom cursor</span>
        ├── <span style="color:#d1d5db;">Hero.jsx</span>            <span style="color:#6b7280;"># Hero with taglines, portrait, stats</span>
        ├── <span style="color:#d1d5db;">About.jsx</span>           <span style="color:#6b7280;"># Bio, info cards, specializations</span>
        ├── <span style="color:#d1d5db;">Skills.jsx</span>          <span style="color:#6b7280;"># Skill bars + scrolling tech marquees</span>
        ├── <span style="color:#d1d5db;">Projects.jsx</span>        <span style="color:#6b7280;"># Featured + regular project cards</span>
        ├── <span style="color:#d1d5db;">Certifications.jsx</span>  <span style="color:#6b7280;"># Cards with theme-colored variants</span>
        ├── <span style="color:#d1d5db;">Connect.jsx</span>         <span style="color:#6b7280;"># Contact, social links, footer</span>
        ├── <span style="color:#d1d5db;">Magnetic.jsx</span>        <span style="color:#6b7280;"># Reusable magnetic hover wrapper</span>
        └── <span style="color:#d1d5db;">TiltCard.jsx</span>        <span style="color:#6b7280;"># Reusable 3D tilt card wrapper</span>
</pre>

</div>

<!-- ==================== GETTING STARTED ==================== -->

<h2 class="section-heading" style="color:#f3f4f6;">✧ Getting Started</h2>

<h3 style="color:#d1d5db;font-size:16px;font-weight:600;margin:24px 0 12px 0;">Prerequisites</h3>

<p style="color:#9ca3af;font-size:14px;margin:0 0 12px 0;">
  <span style="display:inline-block;background:#1f2937;padding:2px 8px;border-radius:4px;color:#34d399;font-weight:600;">Node.js</span> <span style="color:#6b7280;">>= 18</span> &nbsp;·&nbsp;
  <span style="display:inline-block;background:#1f2937;padding:2px 8px;border-radius:4px;color:#34d399;font-weight:600;">npm</span> <span style="color:#6b7280;">or</span> <span style="display:inline-block;background:#1f2937;padding:2px 8px;border-radius:4px;color:#34d399;font-weight:600;">yarn</span>
</p>

<h3 style="color:#d1d5db;font-size:16px;font-weight:600;margin:24px 0 12px 0;">Install &amp; Run</h3>

<div class="code-block">npm install</div>
<div class="code-block">npm run dev</div>

<p style="color:#9ca3af;font-size:14px;margin:8px 0 20px 0;">
  The dev server starts on <strong style="color:#34d399;">port 5200</strong> → <a href="http://localhost:5200" style="color:#34d399;text-decoration:underline;text-underline-offset:3px;">localhost:5200</a>
</p>

<h3 style="color:#d1d5db;font-size:16px;font-weight:600;margin:24px 0 12px 0;">Build for Production</h3>

<div class="code-block">npm run build</div>

<p style="color:#9ca3af;font-size:14px;margin:8px 0 20px 0;">
  Output is written to <code style="background:#1f2937;padding:2px 6px;border-radius:4px;color:#d1d5db;">dist/</code> — deploy the contents to any static hosting provider.
</p>

<h3 style="color:#d1d5db;font-size:16px;font-weight:600;margin:24px 0 12px 0;">Preview &amp; Lint</h3>

<div class="code-block">npm run preview</div>
<div class="code-block">npm run lint</div>

<!-- Scripts Table -->
<h3 style="color:#d1d5db;font-size:16px;font-weight:600;margin:24px 0 12px 0;">Scripts</h3>

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 5200 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run the linter |

<!-- ==================== SECTIONS ==================== -->

<h2 class="section-heading" style="color:#f3f4f6;">✧ Sections</h2>

<div style="display:flex;flex-wrap:wrap;gap:12px;margin:20px 0;">

<div class="section-card">
  <div style="font-size:20px;margin-bottom:4px;">🏠</div>
  <strong style="color:#f3f4f6;font-size:14px;">Home</strong>
  <p style="color:#6b7280;font-size:12px;line-height:1.5;margin:4px 0 0 0;">Profile portrait, rotating taglines, availability badge, CTA buttons, count-up stats.</p>
</div>
<div class="section-card">
  <div style="font-size:20px;margin-bottom:4px;">👤</div>
  <strong style="color:#f3f4f6;font-size:14px;">About</strong>
  <p style="color:#6b7280;font-size:12px;line-height:1.5;margin:4px 0 0 0;">Biography, quick info cards, specialization highlights.</p>
</div>
<div class="section-card">
  <div style="font-size:20px;margin-bottom:4px;">🛠️</div>
  <strong style="color:#f3f4f6;font-size:14px;">Skills</strong>
  <p style="color:#6b7280;font-size:12px;line-height:1.5;margin:4px 0 0 0;">Animated progress bars, two-directional scrolling tech marquees.</p>
</div>
<div class="section-card">
  <div style="font-size:20px;margin-bottom:4px;">📂</div>
  <strong style="color:#f3f4f6;font-size:14px;">Projects</strong>
  <p style="color:#6b7280;font-size:12px;line-height:1.5;margin:4px 0 0 0;">Featured project (large TiltCard) + grid of regular project cards with tech tags.</p>
</div>
<div class="section-card">
  <div style="font-size:20px;margin-bottom:4px;">🏆</div>
  <strong style="color:#f3f4f6;font-size:14px;">Certifications</strong>
  <p style="color:#6b7280;font-size:12px;line-height:1.5;margin:4px 0 0 0;">Certification cards with distinct theme colors and preview links.</p>
</div>
<div class="section-card">
  <div style="font-size:20px;margin-bottom:4px;">📬</div>
  <strong style="color:#f3f4f6;font-size:14px;">Connect</strong>
  <p style="color:#6b7280;font-size:12px;line-height:1.5;margin:4px 0 0 0;">Email CTA, social links, back-to-top button, footer.</p>
</div>

</div>

<!-- ==================== ANIMATED DIVIDER ==================== -->

<div class="divider-gradient"></div>

<!-- ==================== CONNECT ==================== -->

<h2 class="section-heading" style="color:#f3f4f6;">✧ Connect</h2>

<div align="center" style="margin:24px 0 12px 0;">

<p style="font-size:15px;color:#9ca3af;line-height:1.8;margin:0 0 20px 0;max-width:520px;">
  Always open to new opportunities, technical collaborations, or discussions about AI, system architecture, and building great software.
</p>

<p style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;margin:20px 0;font-size:15px;">
  <a href="mailto:hi@sarv.cc" class="btn-primary">
    ✉️ Email Me
  </a>
  <a href="https://linkedin.com/in/sarvyagya" target="_blank" class="btn-secondary">
    💼 LinkedIn
  </a>
  <a href="https://github.com/sarvyagya" target="_blank" class="btn-secondary">
    🐙 GitHub
  </a>
  <a href="https://leetcode.com/u/sarvyagya/" target="_blank" class="btn-secondary">
    ⚡ LeetCode
  </a>
</p>

</div>

<!-- ==================== RESUME ==================== -->

<h2 class="section-heading" style="color:#f3f4f6;">✧ Resume</h2>

<p style="color:#9ca3af;font-size:14px;line-height:1.7;">
  <a href="https://drive.google.com/file/d/1fivd1CBoMP1ayJPw79xyNPHSCDFe14-A/view?usp=sharing" target="_blank" style="display:inline-flex;align-items:center;gap:6px;color:#34d399;font-weight:600;text-decoration:none;border-bottom:1px solid transparent;transition:all 0.2s ease;" class="hover-underline">
    View my resume 📄
  </a>
  <span style="color:#6b7280;"> — also accessible via the <strong>Resume</strong> button in the Hero section.</span>
</p>

<!-- ==================== FOOTER ==================== -->

<div class="divider-gradient"></div>

<div align="center">
  <p style="display:flex;align-items:center;justify-content:center;gap:6px;margin:0;font-size:13px;">

  <!-- Animated SVG Footer Element -->
  <svg width="16" height="16" viewBox="0 0 16 16" style="display:inline-block;">
    <rect x="1" y="1" width="14" height="14" rx="4" fill="none" stroke="#34d399" stroke-width="1.5" opacity="0.6">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
    </rect>
    <circle cx="8" cy="8" r="2" fill="#34d399" opacity="0.8">
      <animate attributeName="r" values="1.5;3;1.5" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>

  <span style="color:#6b7280;">© 2025 Sarvyagya Prakash</span>

  <svg width="16" height="16" viewBox="0 0 16 16" style="display:inline-block;">
    <rect x="1" y="1" width="14" height="14" rx="4" fill="none" stroke="#34d399" stroke-width="1.5" opacity="0.6">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" begin="1.5s" repeatCount="indefinite" />
    </rect>
    <circle cx="8" cy="8" r="2" fill="#34d399" opacity="0.8">
      <animate attributeName="r" values="1.5;3;1.5" dur="3s" begin="1.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" begin="1.5s" repeatCount="indefinite" />
    </circle>
  </svg>

  </p>

  <!-- Back to Top -->
  <p style="margin:16px 0 0 0;">
    <a href="#top" class="btn-top">
      ↑ Back to Top
    </a>
  </p>
</div>

<br />
