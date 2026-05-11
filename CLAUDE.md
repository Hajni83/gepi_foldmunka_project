@AGENTS.md
# Claude Project Instructions

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Query
- React Hook Form
- Zod validation

---

## General Rules

- Always use TypeScript
- Avoid `any`
- Prefer functional components
- Use async/await instead of promises
- Keep components small and reusable
- Prefer composition over prop drilling

---

## File Naming

- Components: PascalCase
- Hooks: useCamelCase
- Utilities: camelCase

Examples:
- UserCard.tsx
- useAuth.ts
- formatCurrency.ts

---

## React Rules

- Use Server Components by default
- Use Client Components only when needed
- Keep business logic outside JSX
- Memoize expensive calculations

---

## Styling

- Use Tailwind only
- Avoid inline styles
- Use `cn()` utility for conditional classes

Example:
```tsx
className={cn(
  "rounded-lg p-4",
  isActive && "bg-blue-500"
)}