# Copilot Instructions for Cartera

## Project Overview

Cartera is a Next.js 15-based marketing website for an expense tracker and budget planner app. The site showcases features, displays terms/privacy policy, and includes a contact form. Built with TypeScript, React Server Components, and shadcn/ui components.

## Build, Test, and Lint Commands

```bash
# Development
npm run dev                    # Start dev server on port 9002 with Turbopack
npm run build                  # Production build (sets NODE_ENV=production)
npm start                      # Start production server

# Code Quality
npm run lint                   # Run ESLint on all source files
npm run lint -- --dir src/app  # Lint specific directory
npm run lint -- --file src/app/page.tsx  # Lint specific file
npm run typecheck              # TypeScript type checking without emit

# Genkit AI (if needed)
npm run genkit:dev             # Start Genkit dev server
npm run genkit:watch           # Start Genkit with file watching
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.3.3 with React 18 Server Components
- **UI Library**: shadcn/ui (Radix UI primitives + Tailwind CSS)
- **Styling**: Tailwind CSS 3.4 with custom color variables
- **AI Integration**: Genkit with Google Gemini 2.5 Flash
- **Form Handling**: react-hook-form + zod validation
- **Deployment**: Firebase App Hosting (configured in apphosting.yaml)

### Directory Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Homepage (main landing page)
│   ├── layout.tsx    # Root layout with Header/Footer
│   ├── privacy-policy/
│   └── terms-and-conditions/
├── components/
│   ├── ui/           # shadcn/ui components (auto-generated)
│   ├── layout/       # header.tsx, footer.tsx
│   └── contact-form.tsx
├── ai/
│   ├── genkit.ts     # Genkit AI configuration
│   └── dev.ts        # Genkit dev entry point
├── lib/
│   ├── utils.ts      # cn() utility and helpers
│   ├── schema.ts     # Zod schemas for form validation
│   └── placeholder-images.ts
└── hooks/            # Custom React hooks
```

### Component Patterns

**shadcn/ui Components**: All UI components in `src/components/ui/` are auto-generated via shadcn CLI. Never modify these directly—regenerate or update using:
```bash
npx shadcn@latest add <component-name>
```

**Import Aliases**: Use TypeScript path aliases defined in tsconfig.json:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`

**Layout Structure**: All pages use the root layout (`src/app/layout.tsx`) which includes:
- `<Header />` component from `@/components/layout/header`
- Main content area with responsive container classes
- `<Footer />` component from `@/components/layout/footer`
- `<Toaster />` for toast notifications

**Metadata Pattern**: Pages export `metadata` objects (or `generateMetadata` functions) for SEO:
```typescript
export const metadata: Metadata = {
  title: 'Page Title | Cartera',
  description: '...',
};
```

### AI Integration (Genkit)

Genkit is configured in `src/ai/genkit.ts` with Google Gemini 2.5 Flash as the default model. The AI instance is exported as `ai` and uses the `@genkit-ai/next` integration for server actions.

## Key Conventions

### Styling
- **CSS Variables**: Tailwind uses CSS variables for theming (defined in `src/app/globals.css`)
- **Utility Function**: Use `cn()` from `@/lib/utils` to merge Tailwind classes with conditional logic
- **Component Variants**: Use `class-variance-authority` for component variants (see shadcn/ui components for examples)

### TypeScript
- **Strict Mode**: Enabled in tsconfig.json
- **Build Errors Ignored**: `next.config.ts` has `typescript.ignoreBuildErrors: true` and `eslint.ignoreDuringBuilds: true` (for rapid development)
- **Target**: ES2017 for maximum compatibility

### Forms and Validation
- Use `react-hook-form` with `@hookform/resolvers/zod` for form handling
- Define Zod schemas in `src/lib/schema.ts`
- Example pattern in `contact-form.tsx`

### Images
- Next.js Image component configured with remote patterns for `placehold.co`
- Add new remote domains to `next.config.ts` `images.remotePatterns` array

### Icons
- Primary icon library: `lucide-react`
- Import specific icons as needed: `import { IconName } from 'lucide-react'`

## Firebase & Deployment

The project is configured for Firebase App Hosting:
- `apphosting.yaml`: Limits to 1 instance (increase `maxInstances` for scaling)
- GitHub Actions workflow (`.github/workflows/nextjs.yml`) deploys to GitHub Pages on `gh-pages` branch

## Notes

- **Port**: Dev server runs on port 9002 (not default 3000)
- **Font**: Uses Inter font loaded from Google Fonts in root layout
- **Brand Colors**: Primary deep blue (#3F51B5), light blue background (#E8EAF6), yellow accent (#FFEB3B)
- **Contact Email**: media.uqab@gmail.com (UqabMedia organization)
