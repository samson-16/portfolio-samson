# Samson Demessie Ayalew - Developer Portfolio

A fast, animated, production-ready portfolio for Samson Demessie Ayalew, a software engineer focused on full-stack development, AI-powered products, clean architecture, and practical problem solving.
## What This Portfolio Communicates

- A clear personal brand for a full-stack developer, AI enthusiast, competitive programmer, and mentor.
- A curated project showcase spanning legal-tech, real-time chat, mobile dining tools, subscription APIs, ML systems, application platforms, and rental management.
- A responsive, animated interface with dark mode, section-aware navigation, a custom cursor, smooth scrolling, and a first-visit welcome loader.
- A deployable contact workflow using a Vercel serverless function and Resend email delivery.

## Live Experience

The site is designed as a scroll-driven journey:

1. **Hero** - personal introduction, role typing animation, profile image, social links, and primary CTAs.
2. **About** - engineering summary, key stats, values, and focus areas.
3. **Experience** - professional timeline with internships and freelance work.
4. **Projects** - paginated carousel of selected work with demos, source links, technologies, and screenshots.
5. **Skills** - animated technology marquee covering frontend, backend, databases, cloud, and tooling.
6. **Education** - university background and A2SV competitive programming training.
7. **Contact** - direct links plus a form that sends email through `/api/send-email`.


## Tech Stack

**Frontend**

- React 18
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion for animation
- Radix UI primitives
- Lucide React icons
- Sonner toasts
- Custom theme provider with dark mode

**Backend / Serverless**

- Vercel serverless function
- Resend email API
- CORS-enabled contact endpoint

**Tooling**

- Vite React SWC plugin
- Path aliases through Vite
- Component primitives inspired by shadcn/ui
- Static assets served from `public/`

## Project Structure

```text
portfolio-samson/
|-- api/
|   `-- send-email.js          # Vercel serverless contact endpoint
|-- public/
|   |-- header-profile.jpg     # Profile image
|   `-- *.png                  # Project preview assets
|-- src/
|   |-- components/
|   |   |-- About.tsx
|   |   |-- Contact.tsx
|   |   |-- Education.tsx
|   |   |-- Experience.tsx
|   |   |-- Hero.tsx
|   |   |-- Navbar.tsx
|   |   |-- Projects.tsx
|   |   |-- Skills.tsx
|   |   |-- ThemeProvider.tsx
|   |   |-- WelcomeLoader.tsx
|   |   `-- ui/                # Reusable UI primitives
|   |-- App.tsx                # Page composition
|   |-- index.css              # Tailwind/theme styles
|   `-- main.tsx               # React entry point
|-- vercel.json                # Vercel build/output config
|-- vite.config.ts             # Vite, Tailwind, aliases, build config
`-- package.json
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- A Resend API key if you want the deployed contact form to send email

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The Vite development server runs on:

```text
http://localhost:3000
```

The contact form UI is available locally, but the email endpoint is intended to run as a Vercel serverless function after deployment.

### Production Build

```bash
npm run build
```

The compiled site is emitted to:

```text
build/
```

## Environment Variables

Create the following environment variable in Vercel:

```env
RESEND_API_KEY=your_resend_api_key
```

The contact API uses this key to send portfolio messages to:

```text
samsondemessie@gmail.com
```

The sender configured in `api/send-email.js` is:

```text
Portfolio Contact <contact@samied.tech>
```

Make sure the sending domain is verified in Resend before relying on production email delivery.

## Deployment

This project is configured for Vercel.

Vercel settings:

- **Framework:** Vite
- **Build command:** `npm run build`
- **Output directory:** `build`
- **Serverless API:** `api/send-email.js`

The included `vercel.json` already defines the build command and output directory.

## Key Implementation Details

- `App.tsx` composes the full portfolio into one scrollable experience.
- `ThemeProvider.tsx` manages light/dark theme state.
- `WelcomeLoader.tsx` stores first-visit state in `sessionStorage`.
- `Navbar.tsx` tracks the active section while scrolling and supports mobile navigation.
- `Projects.tsx` paginates selected work into animated cards.
- `Contact.tsx` posts form submissions to `/api/send-email` and gives feedback through toast notifications.
- `api/send-email.js` validates input, checks `RESEND_API_KEY`, and sends contact messages through Resend.

## Customization Guide

To adapt this portfolio:

- Update personal copy in `Hero.tsx`, `About.tsx`, `Experience.tsx`, and `Education.tsx`.
- Add or edit project entries in the `projects` array inside `Projects.tsx`.
- Replace project screenshots and profile images in `public/`.
- Update social links and resume URL in `Hero.tsx` and `Navbar.tsx`.
- Adjust the email recipient, verified sender, and message template in `api/send-email.js`.
- Tune global colors, fonts, and theme tokens in `src/index.css`.

## Contact

**Samson Demessie Ayalew**

- GitHub: [samson-16](https://github.com/samson-16)
- LinkedIn: [samson-demessie](https://www.linkedin.com/in/samson-demessie/)
- Email: [samsondemessie@gmail.com](mailto:samsondemessie@gmail.com)

