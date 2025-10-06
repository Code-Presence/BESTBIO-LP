# Agent Guidelines for BESTBIO-LP

## Build/Test Commands
- **Dev**: `npm run dev` or `pnpm dev`
- **Build**: `npm run build` (runs TypeScript check + Vite build)
- **Preview**: `npm run preview`
- **Type Check**: `tsc --noEmit`
- **No test suite configured**

## Code Style
- **TypeScript**: Strict mode OFF, allowJs ON, no unused parameters discouraged
- **Imports**: React first, then external libs (@material-tailwind, @heroicons, lucide-react), then local components/assets
- **Components**: Named exports with interfaces prefixed with `I` (e.g., `ICustomNavbarProp`)
- **Formatting**: Tabs for indentation, double quotes for strings, template literals for dynamic classNames
- **Naming**: PascalCase for components, camelCase for functions/variables, UPPER_SNAKE_CASE for constants
- **Types**: Define interfaces for props, use `React.useState`, `React.useEffect`, explicit return types (`JSX.Element`)
- **Lazy Loading**: Use `React.lazy()` with dynamic imports for route sections
- **Images**: Use WebP format, include `loading="lazy"` attribute, alt text required
- **Styling**: Tailwind CSS with Material Tailwind components, custom brand color `#7ED956` (green accent)
- **Error Handling**: Implicit (no explicit try-catch patterns in codebase)
- **Comments**: Minimal to none - code should be self-documenting
