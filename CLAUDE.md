# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BESTBIO-LP is a landing page for a sports nutrition and training consultation business. Built with React + TypeScript + Vite, it showcases services for athletes and patients seeking nutrition and fitness consultation packages (online and presential).

## Development Commands

**Using pnpm (preferred):**
- `pnpm dev` - Start development server
- `pnpm build` - Build for production (TypeScript check + Vite build)
- `pnpm preview` - Preview production build

**Type checking:**
- `tsc --noEmit` - Run TypeScript type checking without emitting files

**Note:** No test suite is configured in this project.

## Architecture

### Application Structure

- **Entry point:** `src/main.tsx` wraps the app with `ThemeProvider` from Material Tailwind
- **App component:** `src/App.tsx` provides the `BrowserRouter` wrapper
- **Routing:** `src/routes/index.tsx` defines all routes and initializes AOS (Animate On Scroll)

### Page Organization

The main home page (`/`) uses a lazy-loaded section pattern:
- Sections are split into separate files: `src/pages/Home/Sections/1.tsx` through `5.tsx`
- Each section is lazy-loaded via `React.lazy()` in `src/pages/Home/index.tsx`
- This pattern optimizes initial bundle size

### Data Management

All static content (services, pricing plans, testimonials, athletes, videos, news) is centralized in `src/data/globalData.ts`:
- `services` - Service package descriptions
- `plans` - Presential consultation pricing (basic and VIP packages)
- `onlinePlans` - Online consultation pricing (basic and VIP packages)
- `testimonials` - Patient testimonials with images
- `athletes` - Athlete photos with blurhash placeholders
- `videos` - YouTube video IDs for content
- `news` - External news articles about the business

### Routing Structure

- `/` - Main landing page with sticky navbar
- `/presencial` - Presential consultation plans
- `/online` - Online consultation plans
- `/pro` - Pro page (no navbar/footer wrapper)
- `/ebook/como-manter-o-peso-perdido` - Ebook landing page (uses CustomFooter)
- `/checkout` - Checkout page

**Route configuration:**
- Presential and online routes use `PlansWrapper` component
- Most routes include `CustomNavbar` and `Footer`
- Ebook route has conditional footer rendering (CustomFooter vs Footer)

### Styling Approach

- **Framework:** Tailwind CSS with Material Tailwind components
- **Brand color:** `#7ED956` (lime green accent)
- **Custom animations:** Defined in `tailwind.config.js` (fade-in variants, custom keyframes)
- **Custom font:** Racing Sans One for headings
- **Image optimization:** WebP format with lazy loading and blurhash placeholders
- **Animations:** AOS library initialized in routes, GSAP available for complex animations

### Build Configuration

- **Vite:** Development server and build tool
- **Compression:** Brotli compression enabled via `vite-plugin-compression`
- **Minification:** Terser minifier for production builds
- **Deployment:** Configured for both Netlify (SPA redirects) and Vercel

## Code Style Guidelines

### TypeScript
- TypeScript strict mode is OFF, `allowJs` is ON
- Define interfaces for component props with `I` prefix (e.g., `ICustomNavbarProp`)
- Use explicit return types (`JSX.Element`) for components
- Use `React.useState`, `React.useEffect` with explicit React namespace

### Component Structure
- Named exports preferred
- PascalCase for components, camelCase for functions/variables
- Tabs for indentation, double quotes for strings
- Template literals for dynamic className values
- Minimal to no comments (self-documenting code)

### Import Order
1. React and React-related imports
2. External libraries (@material-tailwind, @heroicons, lucide-react, etc.)
3. Local components and assets
4. CSS imports last

### Image Handling
- Use WebP format for all images
- Include `loading="lazy"` attribute
- Alt text required for accessibility
- Blurhash placeholders for athlete images (see `globalData.ts`)

## Important Notes

- No automated testing infrastructure exists
- The project uses pnpm as the package manager
- Static assets are organized in `src/assets/` by type (photos, athletes, bg, icons, fonts)
- Contact links use WhatsApp (`wa.me/5584996152620`) with pre-filled messages
