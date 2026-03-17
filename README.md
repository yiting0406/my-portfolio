# My Portfolio

A personal portfolio website built with Vue 3 and Vite, featuring section-based layout, custom cursor interactions, scroll-reveal animations, and a scroll progress indicator. Designed for static deployment on GitHub Pages.

---

## Features

- **Section-based layout** — Hero, Skills, Projects, Clients, Contact, Footer
- **Custom cursor** — smooth ring-follows-dot animation on desktop (`useAppChrome`)
- **Scroll reveal** — IntersectionObserver-driven entrance animations (`useReveal`)
- **Scroll progress bar** — live reading progress indicator in the header
- **Back-to-top** — auto-shown after 400 px of scroll
- **Responsive** — mobile-first, custom cursor disabled below `lg` breakpoint

---

## Tech Stack

| Layer            | Library                     | Version     |
| ---------------- | --------------------------- | ----------- |
| Framework        | Vue 3 (Composition API)     | ^3.5        |
| Build tool       | Vite                        | ^7.3        |
| Styling          | Tailwind CSS v4             | ^4.2        |
| UI components    | PrimeVue + @primeuix/themes | ^4.5 / ^2.0 |
| State management | Pinia                       | ^3.0        |
| Routing          | Vue Router                  | ^5.0        |
| Testing          | Vitest + @vue/test-utils    | ^4.0 / ^2.4 |
| Formatting       | Prettier                    | 3.x         |

---

## Project Structure

```
src/
├── assets/
│   ├── tailwind.css        # Entry point — imports only (fonts → Tailwind → partials)
│   └── css/
│       ├── tokens.css      # @theme design tokens (colors, shadows)
│       ├── base.css        # @layer base (body font, .font-serif)
│       ├── components.css  # @layer components (section-*, card-*)
│       └── animations.css  # @keyframes (float-blob, badge-in, marquee)
├── components/
│   ├── layout/
│   │   ├── AppNavbar.vue       # Top navigation bar
│   │   └── AppChromeOverlay.vue # Custom cursor, scroll progress, back-to-top
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── MarqueeSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── ClientsSection.vue
│   │   ├── ContactSection.vue
│   │   └── FooterSection.vue
│   └── ui/                 # Low-level presentational components
├── composables/
│   ├── useAppChrome.js     # Cursor tracking, scroll state, back-to-top logic
│   └── useReveal.js        # IntersectionObserver scroll-reveal helper
├── data/
│   └── portfolio.js        # Static content (hero copy, skills, projects, clients)
├── router/
│   └── index.js            # Vue Router (hash history, GitHub Pages compatible)
├── stores/
│   └── counter.js          # Pinia store scaffold (replace with domain stores as needed)
├── views/                  # Route-level page components
├── App.vue                 # Root layout
└── main.js                 # App bootstrap (Vue, Pinia, Router, PrimeVue)
docs/
├── tech-stack-overview.md      # Detailed rationale for every dependency
└── theme-naming-guidelines.md  # Design token and class naming conventions
```

---

## Getting Started

### Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`

### Install

```bash
npm install
```

### Development server

```bash
npm run dev
```

Opens at `http://localhost:5173/my-portfolio/`.

### Build for production

```bash
npm run build
```

Output goes to `dist/`. The `base` is pre-configured to `/my-portfolio/` for GitHub Pages.

### Preview production build locally

```bash
npm run preview
```

### Run unit tests

```bash
npm run test:unit
```

### Format code

```bash
npm run format
```

---

## Deployment

This project is configured for **GitHub Pages** via the `base: '/my-portfolio/'` setting in `vite.config.js` and `createWebHashHistory` in the router. After building, push the contents of `dist/` to the `gh-pages` branch (or use the GitHub Actions workflow if configured).

See [docs/tech-stack-overview.md](docs/tech-stack-overview.md) for architecture rationale and [docs/theme-naming-guidelines.md](docs/theme-naming-guidelines.md) for Tailwind token conventions.

---

## IDE Setup

[VS Code](https://code.visualstudio.com/) with the [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension (disable Vetur if installed).

**Browser DevTools:**

- Chromium (Chrome / Edge / Brave): [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- Firefox: [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
