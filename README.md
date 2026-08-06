<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a0f08,50:3c2415,100:c9a96e&height=220&section=header&text=&fontSize=0" width="100%" />

<br>

<img src="https://readme-typing-svg.demolab.com?font=Cormorant+Garamond&weight=700&size=52&duration=3500&pause=1200&color=C9A96E&center=true&vCenter=true&repeat=false&width=600&height=70&lines=Manan+Jani" />

<br>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=400&size=14&duration=2500&pause=800&color=A06B3A&center=true&vCenter=true&width=700&height=30&lines=Full+Stack+Developer+%7C+React+%7C+Three.js+%7C+WebGL+%7C+Node.js" />

<br><br>

<a href="https://manan-jani.netlify.app/">
  <img src="https://img.shields.io/badge/Live_Portfolio-c9a96e?style=for-the-badge&logoColor=1a0f08" alt="Live Portfolio" />
</a>
&nbsp;
<a href="https://github.com/mananjani2102/Portfolio">
  <img src="https://img.shields.io/badge/Source_Code-3c2415?style=for-the-badge&logo=github&logoColor=c9a96e" alt="Source Code" />
</a>
&nbsp;
<a href="https://www.linkedin.com/in/manan-jani-1a22443a3/">
  <img src="https://img.shields.io/badge/LinkedIn-2a1a0e?style=for-the-badge&logo=linkedin&logoColor=c9a96e" alt="LinkedIn" />
</a>

<br><br>

A high-fidelity, performance-first developer portfolio built with **React 19**, **Three.js**, and **Framer Motion**.<br>
Featuring WebGL shader backgrounds, 3D parallax interactions, and a bespoke leather-and-gold design system.

<br>

<img src="https://img.shields.io/github/last-commit/mananjani2102/Portfolio?style=flat-square&color=c9a96e&labelColor=1a0f08" />
&nbsp;
<img src="https://img.shields.io/github/languages/top/mananjani2102/Portfolio?style=flat-square&color=c9a96e&labelColor=1a0f08" />
&nbsp;
<img src="https://img.shields.io/badge/license-MIT-c9a96e?style=flat-square&labelColor=1a0f08" />

</div>

<br>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a0f08,50:3c2415,100:c9a96e&height=2" width="100%" />

<br>

## Preview

<div align="center">

<table>
<tr>
<td align="center">
<img src="screenshots/desktop-projects.png" width="100%" alt="Hero Section" />
<br>
<sub><b>Hero</b> — WebGL shader backdrop with floating navigation bar</sub>
</td>
</tr>
<tr>
<td align="center">
<img src="screenshots/desktop-hero.png" width="100%" alt="Featured Work" />
<br>
<sub><b>Featured Work</b> — 3D tilt cards with mouse-tracking spotlight</sub>
</td>
</tr>
<tr>
<td align="center">
<img src="screenshots/desktop-contact.png" width="100%" alt="Contact Section" />
<br>
<sub><b>Contact</b> — Form with EmailJS integration and field validation</sub>
</td>
</tr>
</table>

<br>

<table>
<tr>
<td align="center" width="33%">
<img src="screenshots/mobile-hero.jpg" width="100%" alt="Mobile Hero" />
<br>
<sub><b>Mobile Hero</b></sub>
</td>
<td align="center" width="33%">
<img src="screenshots/mobile-about.jpg" width="100%" alt="Mobile About" />
<br>
<sub><b>About</b></sub>
</td>
<td align="center" width="33%">
<img src="screenshots/mobile-projects.jpg" width="100%" alt="Mobile Projects" />
<br>
<sub><b>Projects</b></sub>
</td>
</tr>
</table>

<sub>Responsive across all viewports — desktop, tablet, and mobile.</sub>

</div>

<br>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a0f08,50:3c2415,100:c9a96e&height=2" width="100%" />

<br>

## Tech Stack

<div align="center">

| Layer | Technologies |
|:------|:------------|
| **Frontend** | React 19 · JavaScript · Tailwind CSS 4 · Framer Motion |
| **3D / Visual** | Three.js · React Three Fiber · React Three Drei · WebGL Shaders |
| **Build** | Vite 7 · ESLint |
| **Integrations** | EmailJS · React Router 7 |
| **Deployment** | Netlify |

</div>

<br>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a0f08,50:3c2415,100:c9a96e&height=2" width="100%" />

<br>

## Architecture

```
Portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manan_jani_resume_v2.pdf
├── src/
│   ├── assets/                      # Project thumbnails and media
│   ├── components/
│   │   ├── CustomCursor.jsx         # Spring-physics cursor with hover states
│   │   ├── Navigation.jsx           # Floating glassmorphism navbar
│   │   ├── ScrollProgress.jsx       # Scroll position indicator
│   │   ├── SectionWrapper.jsx       # Viewport-aware section container
│   │   ├── ShaderBackground.jsx     # GLSL vertex/fragment shaders
│   │   ├── DotShaderBackground.jsx  # Dot-matrix WebGL shader
│   │   └── LeatherDiamondBackground.jsx  # Diamond-pattern CSS texture
│   ├── hooks/
│   │   ├── useInView.js             # Intersection Observer hook
│   │   ├── useMousePosition.js      # Mouse tracking with RAF
│   │   ├── useScrollProgress.js     # Scroll percentage tracker
│   │   └── useSmoothScroll.js       # Smooth scroll engine
│   ├── pages/
│   │   ├── Home.jsx                 # Hero section with parallax photo
│   │   ├── About.jsx                # Background and experience
│   │   ├── Projects.jsx             # Filterable project grid
│   │   ├── Skills.jsx               # Skill visualization
│   │   ├── Resume.jsx               # Downloadable resume section
│   │   └── Contact.jsx              # Contact form with EmailJS
│   ├── App.jsx                      # Root with lazy loading
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Design tokens and animations
├── index.html
├── vite.config.js
└── package.json
```

<br>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a0f08,50:3c2415,100:c9a96e&height=2" width="100%" />

<br>

## Key Highlights

<table>
<tr>
<td width="50%">

**Rendering and Performance**

- GPU-accelerated WebGL shader backgrounds (GLSL)
- `React.lazy` + `Suspense` for route-level code splitting
- `requestAnimationFrame`-throttled mouse tracking
- `memo` and `useCallback` throughout component tree
- Compositor-only CSS transforms for 60fps animations
- `will-change` hints and `translateZ(0)` GPU promotion
- `prefers-reduced-motion` media query respected

</td>
<td width="50%">

**Design and Interaction**

- Custom spring-physics cursor with contextual labels
- 3D perspective tilt on project cards via `mousemove`
- Mouse-tracking radial spotlight on hover
- Floating glassmorphism navigation with backdrop blur
- Leather diamond-pattern backgrounds (pure CSS)
- Gold accent system with `conic-gradient` borders
- Staggered `framer-motion` orchestrated entrance animations

</td>
</tr>
</table>

<br>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a0f08,50:3c2415,100:c9a96e&height=2" width="100%" />

<br>

## Design System

The portfolio uses a custom brown-gold-cream color palette designed to evoke a premium, warm, and tactile aesthetic:

```
Background     #1a0f08     Dark espresso
Surface        #2a1a0e     Deep walnut
Border         #3c2415     Warm umber
Muted Text     #7a4f2b     Aged bronze
Accent Gold    #c9a96e     Brushed gold
Accent Copper  #b87333     Burnished copper
Cream          #fdf8f0     Antique parchment
```

Typography is built on three axes: **Cormorant Garamond** for editorial headings, **Work Sans** for body text, and **JetBrains Mono** for code and labels.

<br>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a0f08,50:3c2415,100:c9a96e&height=2" width="100%" />

<br>

## Getting Started

```bash
# Clone the repository
git clone https://github.com/mananjani2102/Portfolio.git

# Navigate into the project
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.

<br>

**Prerequisites:** Node.js 18+ and npm 9+.

<br>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a0f08,50:3c2415,100:c9a96e&height=2" width="100%" />

<br>

## Available Scripts

| Command | Description |
|:--------|:-----------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

<br>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a0f08,50:3c2415,100:c9a96e&height=2" width="100%" />

<br>

## Performance

<div align="center">

| Lighthouse Metric | Score |
|:-----------------|:-----:|
| Performance | **98+** |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | **100** |

</div>

<br>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a0f08,50:3c2415,100:c9a96e&height=2" width="100%" />

<br>

## License

This project is licensed under the [MIT License](LICENSE).

<br>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:1a0f08,50:3c2415,100:c9a96e&height=2" width="100%" />

<br>

## Contact

<div align="center">

**Manan Jani** — Full Stack Developer

<br>

<a href="mailto:manan.jani.cg@gmail.com">
  <img src="https://img.shields.io/badge/Email-manan.jani.cg@gmail.com-2a1a0e?style=flat-square&logo=gmail&logoColor=c9a96e&labelColor=1a0f08" />
</a>
&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/manan-jani-1a22443a3/">
  <img src="https://img.shields.io/badge/LinkedIn-Manan_Jani-2a1a0e?style=flat-square&logo=linkedin&logoColor=c9a96e&labelColor=1a0f08" />
</a>
&nbsp;&nbsp;
<a href="https://github.com/mananjani2102">
  <img src="https://img.shields.io/badge/GitHub-mananjani2102-2a1a0e?style=flat-square&logo=github&logoColor=c9a96e&labelColor=1a0f08" />
</a>
&nbsp;&nbsp;
<a href="https://x.com/Mananjani2102">
  <img src="https://img.shields.io/badge/X-@Mananjani2102-2a1a0e?style=flat-square&logo=x&logoColor=c9a96e&labelColor=1a0f08" />
</a>

<br><br>

<a href="https://manan-jani.netlify.app/">
  <img src="https://img.shields.io/badge/View_Portfolio-manan--jani.netlify.app-c9a96e?style=for-the-badge&labelColor=1a0f08" />
</a>

</div>

<br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:c9a96e,50:3c2415,100:1a0f08&height=120&section=footer" width="100%" />
