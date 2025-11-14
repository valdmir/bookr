# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Bookr is a book management application built with React 19, TypeScript, Vite, and TanStack Router. The frontend uses shadcn/ui components with Radix UI primitives and Tailwind CSS for styling.

## Development Commands

### Running the Application
- **Start dev server**: `pnpm dev`
- **Build for production**: `pnpm build` (runs TypeScript compilation then Vite build)
- **Preview production build**: `pnpm preview`

### Code Quality
- **Run linter**: `pnpm lint`
- **Type check**: `tsc -b` (included in build command)

Note: This project uses **pnpm** as the package manager, not npm or yarn. Always use `pnpm` commands.

## Architecture

### Tech Stack
- **Build Tool**: Vite (specifically `rolldown-vite@7.2.2` via pnpm override)
- **Framework**: React 19 with TypeScript
- **Routing**: TanStack Router with file-based routing
- **Styling**: Tailwind CSS v4 with CSS variables, shadcn/ui (New York style)
- **UI Components**: Radix UI primitives + shadcn/ui
- **Icons**: Lucide React
- **State/Data**: TanStack Table, TanStack Router
- **Charts**: Recharts
- **Drag & Drop**: dnd-kit
- **Validation**: Zod

### Component Architecture

The project follows an atomic design pattern with three distinct layers:

1. **UI Components** (`src/components/ui/`)
   - Base shadcn/ui components (buttons, cards, tables, sidebars, etc.)
   - Reusable primitive components built on Radix UI
   - Should not contain business logic

2. **Nucleuses** (`src/nucleuses/`)
   - Small, focused, reusable components (e.g., `search-form.tsx`)
   - Compose UI components with minimal logic
   - Think of these as molecules in atomic design

3. **Organisms** (`src/organisms/`)
   - Larger, feature-specific components (e.g., `header.tsx`)
   - Combine nucleuses and UI components
   - May contain more complex logic and state

4. **Components** (`src/components/`)
   - Application-specific composed components (e.g., `app-sidebar.tsx`, `data-table.tsx`)
   - Feature-rich components that combine multiple organisms/nucleuses
   - May contain significant application logic

### Routing

**TanStack Router** with file-based routing:
- Routes defined in `src/routes/`
- `__root.tsx` is the root layout component
- Auto-generated route tree in `src/route-tree.gen.ts` (DO NOT edit manually)
- Configured via `@tanstack/router-plugin/vite` in `vite.config.ts`

**Route Configuration:**
```typescript
routesDirectory: "./src/routes"
generatedRouteTree: "./src/route-tree.gen.ts"
```

### Path Aliases

Configured via `vite.config.ts` and `tsconfig.json`:
- `@/*` → `./src/*`

Use these aliases in imports:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

### Styling Approach

- **Tailwind CSS v4** with PostCSS
- CSS variables for theming (defined in `src/index.css`)
- `cn()` utility function in `@/lib/utils` for merging Tailwind classes
- Animation support via `tw-animate-css` plugin
- Responsive design with mobile-first approach
- shadcn/ui component configuration in `components.json`

### Key Files

- **`vite.config.ts`**: Build configuration, aliases, plugins
- **`src/main.tsx`**: Application entry point, router setup
- **`src/routes/__root.tsx`**: Root layout with Header and TanStack Router Devtools
- **`src/lib/utils.ts`**: Utility functions (cn for className merging)
- **`components.json`**: shadcn/ui configuration
- **`src/route-tree.gen.ts`**: Auto-generated, do not edit

## Development Guidelines

### Adding New Routes

1. Create a new file in `src/routes/` (e.g., `my-page.tsx`)
2. Export a route using `createFileRoute`:
   ```typescript
   import { createFileRoute } from "@tanstack/react-router"
   
   export const Route = createFileRoute("/my-page")({
     component: MyPageComponent
   })
   ```
3. The route tree will regenerate automatically

### Adding shadcn/ui Components

The project uses shadcn/ui with the "New York" style:
- Configuration in `components.json`
- Components go in `src/components/ui/`
- Use the shadcn CLI to add new components (if available)

### Component Guidelines

- Place small reusable components in `nucleuses/`
- Place larger feature components in `organisms/`
- Place complex composed components in `components/`
- Keep UI primitives in `components/ui/`
- Use `cn()` from `@/lib/utils` to merge conditional classNames

### TypeScript Configuration

- Uses TypeScript 5.9.x
- Project references: `tsconfig.app.json` and `tsconfig.node.json`
- Base config in `tsconfig.json` with path aliases

### Linting

- ESLint with TypeScript support
- React hooks and refresh plugins enabled
- Ignores `dist/` directory
- Configuration in `eslint.config.js`

## Project Structure

```
src/
├── app/                    # App-level configurations and data
├── assets/                 # Static assets (images, icons)
├── components/             # Complex composed components
│   └── ui/                # shadcn/ui base components
├── hooks/                  # Custom React hooks (e.g., use-mobile.ts)
├── lib/                    # Utilities and helpers
├── nucleuses/             # Small reusable components
├── organisms/             # Larger feature components
├── routes/                # TanStack Router file-based routes
├── index.css              # Global styles and Tailwind base
├── main.tsx               # Application entry point
└── route-tree.gen.ts      # Auto-generated route tree (DO NOT EDIT)
```

## Important Notes

- **Never edit** `src/route-tree.gen.ts` - it's auto-generated by TanStack Router
- Use **pnpm** for all package management operations
- The project uses Vite with rolldown optimization via `rolldown-vite` package
- TanStack Router Devtools are enabled in development (visible in UI)
- React 19 is used - be aware of any breaking changes from React 18
