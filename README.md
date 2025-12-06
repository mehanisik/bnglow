# Sagando Bungalows - Zanzibar

A modern, high-performance website for Sagando Bungalows, a beachfront accommodation in Michamvi Kae village, Zanzibar.

## About

Sagando Bungalows is a boutique beachfront resort located in the serene village of Michamvi Kae, Zanzibar. This website showcases the property's rooms, experiences, and amenities while providing seamless booking integration with Booking.com.

## Features

- **Dynamic Hero Section** - Immersive full-screen hero with animated booking widget
- **Smart Booking Integration** - Pre-filled booking forms that redirect to Booking.com with all selected parameters
- **Rotating Announcements** - Dynamic top banner with special offers, ratings, and promotions
- **Room Showcase** - Beautiful gallery of available accommodations
- **Experiences Section** - Highlights of local activities and attractions
- **Contact Form** - Easy way for guests to get in touch
- **Smooth Animations** - GSAP-powered animations and Lenis smooth scroll
- **Responsive Design** - Fully optimized for all screen sizes

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.0.7 (App Router) |
| React | React 19.2.0 |
| Styling | Tailwind CSS 4.1.17 |
| Animations | GSAP 3.13.0 + Lenis |
| Icons | HugeIcons React |
| Linting | Biome 2.3.8 |
| Analytics | Vercel Analytics |
| Package Manager | Bun |

## Getting Started

### Prerequisites

- Node.js 18+ or Bun 1.0+
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mehanisik/bnglow.git
   cd bnglow
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file (if needed):
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server with Turbopack |
| `bun build` | Create production build |
| `bun start` | Start production server |
| `bun lint` | Run Biome linting |
| `bun lint:fix` | Fix linting issues automatically |
| `bun format` | Format code with Biome |
| `bun typecheck` | Run TypeScript type checking |
| `bun analyze` | Analyze bundle size |

## Project Structure

```
bnglow/
  app/                   # Next.js App Router pages
    about/               # About page
    contact/             # Contact page
    experiences/         # Experiences page
    rooms/               # Rooms listing and details
    layout.tsx           # Root layout
    page.tsx             # Home page
  components/            # Reusable UI components
    hero-section.tsx     # Main hero with booking widget
    top-banner.tsx       # Rotating announcements banner
    header.tsx           # Navigation header
    footer.tsx           # Site footer
    ...
  lib/                   # Utility functions
  public/                # Static assets
  types/                 # TypeScript type definitions
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Environment Variables

If you're using any environment variables, make sure to add them in the Vercel Dashboard under Project Settings > Environment Variables.

## License

This project is private and proprietary.

---

Built with Next.js 16 and React 19
