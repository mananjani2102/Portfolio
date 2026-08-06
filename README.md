<div align="center">

<br>

# MANAN JANI

### Full Stack Web Developer & Creative Engineer

*Crafting high-performance web applications with React 19, Three.js, and WebGL Shaders*

<br>

<p align="center">
  <a href="https://manan-jani.netlify.app/"><img src="https://img.shields.io/badge/Live_Portfolio-Visit_Website-c9a96e?style=for-the-badge&labelColor=1a0f08&color=c9a96e" alt="Live Portfolio" /></a>&nbsp;&nbsp;
  <a href="https://github.com/mananjani2102/Portfolio"><img src="https://img.shields.io/badge/GitHub-Repository-3c2415?style=for-the-badge&labelColor=1a0f08&color=b87333" alt="GitHub Repository" /></a>&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/manan-jani-1a22443a3/"><img src="https://img.shields.io/badge/LinkedIn-Connect-0077b5?style=for-the-badge&labelColor=1a0f08&color=0077b5" alt="LinkedIn" /></a>
</p>

<br>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/mananjani2102/Portfolio?style=flat-square&label=Last%20Commit&labelColor=1a0f08&color=c9a96e" />&nbsp;
  <img src="https://img.shields.io/github/languages/top/mananjani2102/Portfolio?style=flat-square&label=Language&labelColor=1a0f08&color=c9a96e" />&nbsp;
  <img src="https://img.shields.io/badge/React-19.2.0-1a0f08?style=flat-square&color=61dafb" />&nbsp;
  <img src="https://img.shields.io/badge/Vite-7.2.4-1a0f08?style=flat-square&color=646cff" />&nbsp;
  <img src="https://img.shields.io/badge/License-MIT-1a0f08?style=flat-square&color=c9a96e" />
</p>

</div>

---

## Executive Overview

This repository contains the source code for **Manan Jani's Developer Portfolio**, a modern, interactive web application engineered for maximum visual impact, fluid 60 FPS performance, and responsive user experience across all devices.

### Core Value Propositions

- **Immersive Visual Experience:** Custom GLSL WebGL shaders, interactive 3D parallax effects, and smooth custom cursor mechanics.
- **Modern Tech Architecture:** Built on React 19, Vite 7, Tailwind CSS 4, and Framer Motion 12.
- **Optimal Performance:** Route-level code splitting (`React.lazy` + `Suspense`), requestAnimationFrame-throttled event handling, and GPU-accelerated transforms.
- **Bespoke Design System:** Premium leather-and-gold aesthetics (`#1a0f08` dark espresso, `#3c2415` walnut, `#c9a96e` brushed gold) paired with editorial typography (Cormorant Garamond, Work Sans, JetBrains Mono).

---

## Interactive Visual Showcase

### 01. Hero Section & WebGL Canvas

The hero section welcomes visitors with custom GLSL shader animation, interactive parallax profile presentation, and floating navigation bar.

<br>

<div align="center">
  <img src="screenshots/desktop-hero.png" width="100%" alt="Hero Section Preview" style="border-radius: 8px;" />
</div>

<br>

**Key Features:**
- Custom shader background running on WebGL viewport.
- Mouse-tracking parallax photo container with glowing aura effect.
- Floating navigation bar with glassmorphism backdrop blur.

---

### 02. Featured Projects Grid

An interactive showcase featuring 3D tilt cards, real-time mouse-tracking spotlights, and category filtering.

<br>

<div align="center">
  <img src="screenshots/desktop-projects.png" width="100%" alt="Featured Projects Preview" style="border-radius: 8px;" />
</div>

<br>

**Key Features:**
- 3D perspective rotation on hover calculated relative to card center.
- Dynamic radial spotlight following cursor position.
- Smooth category filtering powered by Framer Motion layout animations.

---

### 03. Contact & Communication Engine

Direct contact section with validated input fields, interactive social links, and EmailJS submission integration.

<br>

<div align="center">
  <img src="screenshots/desktop-contact.png" width="100%" alt="Contact Section Preview" style="border-radius: 8px;" />
</div>

<br>

---

### 04. Mobile Experience & Responsiveness

Optimized layout scaling for mobile screens with touch-friendly navigation and adapted canvas rendering.

<br>

<div align="center">

| Mobile Hero | Mobile About | Mobile Projects |
|:---:|:---:|:---:|
| <img src="screenshots/mobile-hero.jpg" width="280" alt="Mobile Hero" /> | <img src="screenshots/mobile-about.jpg" width="280" alt="Mobile About" /> | <img src="screenshots/mobile-projects.jpg" width="280" alt="Mobile Projects" /> |

</div>

---

## Technology Stack

<table width="100%">
  <thead>
    <tr>
      <th align="left" width="25%">Category</th>
      <th align="left" width="75%">Technologies & Tools</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Core Framework</b></td>
      <td>React 19.2, JavaScript (ESNext), Vite 7.2</td>
    </tr>
    <tr>
      <td><b>Graphics & Motion</b></td>
      <td>Three.js 0.182, React Three Fiber 9.5, React Three Drei 10.7, WebGL Shaders (GLSL), Framer Motion 12.33</td>
    </tr>
    <tr>
      <td><b>Styling & Typography</b></td>
      <td>Tailwind CSS 4.1, Custom CSS Tokens, Cormorant Garamond, Work Sans, JetBrains Mono</td>
    </tr>
    <tr>
      <td><b>Integrations & Utilities</b></td>
      <td>EmailJS Browser 4.4, React Router 7.1, Lucide React 0.563</td>
    </tr>
    <tr>
      <td><b>Quality & Tooling</b></td>
      <td>ESLint 9.39, PostCSS, Git, Netlify Deployment Platform</td>
    </tr>
  </tbody>
</table>

---

## Technical Highlights & Engineering Design

### 1. Rendering Pipeline Optimization
- **WebGL Shader Management:** Shaders are rendered inside dedicated canvas components with viewport-gated rendering to minimize idle GPU usage.
- **Execution Throttling:** Cursor tracking and parallax updates utilize `requestAnimationFrame` to maintain consistent 60 FPS without layout thrashing.
- **Code Splitting:** Secondary sections (`About`, `Projects`, `Skills`, `Resume`, `Contact`) are loaded asynchronously using `React.lazy()` and wrapped in `<Suspense>` boundaries.

### 2. UI Component Architecture
- **Pure Functional Components:** Implemented using React 19 functional pattern with `React.memo` for unnecessary render prevention.
- **Custom React Hooks:** Decoupled logic into custom hooks (`useSmoothScroll`, `useMousePosition`, `useInView`, `useScrollProgress`).
- **Responsive Layout Engine:** Fluid CSS Grid and Flexbox structures tailored for resolutions from 320px to 4K displays.

---

## Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg                  # Application favicon
│   ├── manan_jani_resume_v2.pdf     # Downloadable resume asset
│   ├── robots.txt                   # Search engine directives
│   └── sitemap.xml                  # SEO sitemap
├── screenshots/                     # Documentation preview images
├── src/
│   ├── assets/                      # Image assets and project thumbnails
│   ├── components/                  # Reusable UI components
│   │   ├── CustomCursor.jsx         # Custom spring cursor with dynamic label
│   │   ├── DotShaderBackground.jsx  # Matrix dot shader effect
│   │   ├── LeatherDiamondBackground.jsx # Textured diamond CSS pattern
│   │   ├── Navigation.jsx           # Floating header navigation
│   │   ├── ScrollProgress.jsx       # Top scroll indicator bar
│   │   ├── SectionWrapper.jsx       # Viewport entry animation wrapper
│   │   └── ShaderBackground.jsx     # WebGL canvas background shader
│   ├── hooks/                       # Custom React hooks
│   │   ├── useInView.js             # Viewport intersection tracker
│   │   ├── useMousePosition.js      # Smooth mouse coordinate listener
│   │   ├── useScrollProgress.js     # Scroll position tracker
│   │   └── useSmoothScroll.js       # Lenis-inspired smooth scroll logic
│   ├── pages/                       # Portfolio page sections
│   │   ├── About.jsx                # Experience and story section
│   │   ├── Contact.jsx              # Form and direct contact section
│   │   ├── Home.jsx                 # Main hero section
│   │   ├── Projects.jsx             # Interactive project showcase grid
│   │   ├── Resume.jsx               # Experience timeline & resume download
│   │   └── Skills.jsx               # Interactive skill set grid
│   ├── App.jsx                      # Main application component & routing
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Tailwind imports, theme tokens & custom CSS
├── eslint.config.js                 # Linter configuration
├── index.html                       # HTML root document with SEO metadata
├── package.json                     # Project manifest and dependency declarations
└── vite.config.js                   # Vite build engine configuration
```

---

## Design System Specifications

The application uses a custom color token architecture defined in `src/index.css`:

```
Background Dark     #1a0f08    Deep Espresso
Surface Dark        #2a1a0e    Rich Walnut
Border Dark         #3c2415    Warm Umber
Text Muted          #7a4f2b    Aged Bronze
Accent Gold         #c9a96e    Brushed Gold
Accent Copper       #b87333    Burnished Copper
Cream Light         #fdf8f0    Antique Parchment
```

---

## Development Setup

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher) or yarn

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mananjani2102/Portfolio.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Launch the local development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to `http://localhost:5173` to view the application live.

---

## Production Build & Deployment

To create an optimized production bundle:

```bash
# Generate production build in dist/ directory
npm run build

# Preview the build locally
npm run preview
```

### Build Scripts Reference

| Command | Action | Output |
|:---|:---|:---|
| `npm run dev` | Starts Vite dev server with Hot Module Replacement | Local server on port 5173 |
| `npm run build` | Compiles JavaScript, CSS, and assets with minification | Static production bundle in `dist/` |
| `npm run preview` | Serves production build for local QA testing | Local server preview |
| `npm run lint` | Runs ESLint validation across project files | Terminal diagnostic output |

---

## Performance Metrics

Tested using Google Lighthouse on production deployment:

<table align="center" width="80%">
  <thead>
    <tr>
      <th align="center">Metric</th>
      <th align="center">Score</th>
      <th align="center">Target</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><b>Performance</b></td>
      <td align="center"><b>98 / 100</b></td>
      <td align="center">95+</td>
    </tr>
    <tr>
      <td align="center"><b>Accessibility</b></td>
      <td align="center"><b>100 / 100</b></td>
      <td align="center">100</td>
    </tr>
    <tr>
      <td align="center"><b>Best Practices</b></td>
      <td align="center"><b>100 / 100</b></td>
      <td align="center">100</td>
    </tr>
    <tr>
      <td align="center"><b>SEO</b></td>
      <td align="center"><b>100 / 100</b></td>
      <td align="center">100</td>
    </tr>
  </tbody>
</table>

---

## Contact & Professional Links

<table align="center" width="90%">
  <thead>
    <tr>
      <th align="center" width="25%">Channel</th>
      <th align="left" width="45%">Address / Link</th>
      <th align="center" width="30%">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><b>Live Portfolio</b></td>
      <td>manan-jani.netlify.app</td>
      <td align="center"><a href="https://manan-jani.netlify.app/">Visit Portfolio</a></td>
    </tr>
    <tr>
      <td align="center"><b>Email</b></td>
      <td>manan.jani.cg@gmail.com</td>
      <td align="center"><a href="mailto:manan.jani.cg@gmail.com">Send Email</a></td>
    </tr>
    <tr>
      <td align="center"><b>LinkedIn</b></td>
      <td>linkedin.com/in/manan-jani-1a22443a3</td>
      <td align="center"><a href="https://www.linkedin.com/in/manan-jani-1a22443a3/">Connect on LinkedIn</a></td>
    </tr>
    <tr>
      <td align="center"><b>GitHub</b></td>
      <td>github.com/mananjani2102</td>
      <td align="center"><a href="https://github.com/mananjani2102">View GitHub Profile</a></td>
    </tr>
    <tr>
      <td align="center"><b>X (Twitter)</b></td>
      <td>x.com/Mananjani2102</td>
      <td align="center"><a href="https://x.com/Mananjani2102">Follow on X</a></td>
    </tr>
  </tbody>
</table>

---

## License

This project is open-source and available under the terms of the [MIT License](LICENSE).

Developed by **Manan Jani** &copy; 2026. All rights reserved.
