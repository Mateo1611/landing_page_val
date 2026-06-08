<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may differ from older Next.js versions. Read the relevant guide in `node_modules/next/dist/docs/` before writing code that depends on version-specific behavior. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# VAL AUDIOVISUAL Agent Rules

- Read `docs/` before modifying design, brand, content, tone, or section strategy.
- Do not change visual identity without reviewing the brand documentation.
- Do not implement the final visual design unless explicitly requested.
- Keep the architecture modular: `components`, `config`, `data`, `hooks`, `lib`, `styles`, and `types`.
- Use TypeScript and keep strict typing.
- Use `@/` aliases for internal imports.
- Keep content/data outside components whenever practical.
- Keep components small and focused.
- Validate forms with Zod.
- Do not expose secrets, API keys, tokens, or credentials.
- Do not install 3D dependencies until a later phase explicitly requires them.
- Run `npm run lint` and `npm run build` before finishing.
- Document important technical or brand-sensitive decisions.

## Brand Context Notes

- Docs reference a dark, cinematic, premium, technical system.
- Brand accent noted in the manual: `#FD5400`.
- Typography references in docs: Archivo, Archivo Black, JetBrains Mono.

## Implementation State (Direction A — "El Reel")

The landing's visual build is implemented from `docs/wireframes/` (Direction A)
on the dark brand system from `docs/brand/`. See `docs/implementation-notes.md`
for the full rationale. Working conventions for further changes:

- **Tokens are the source of truth.** Colors/fonts live in the `@theme` block of
  `src/app/globals.css` (exposed as both CSS vars and Tailwind utilities, e.g.
  `bg-orange`, `text-fg-muted`, `font-display`). Other design tokens (gradient,
  easing, radii, rhythm) live in `src/styles/tokens.css`. Don't hardcode hex.
- **Content lives in `src/data/`**, never inside components. Edit copy there.
- **Sections** are in `src/components/sections/`, one per landing block, composed
  in `src/app/page.tsx` in Direction A order. Reusable pieces go in `ui/`,
  motion in `animation/`.
- **Media** uses `<MediaFrame>` placeholders. Replace by passing real
  `<video>`/`<Image>` as children — keep heavy video lazy (modal/poster).
- **Animations** must honor `prefers-reduced-motion` (CSS guard +
  `useReducedMotion`). Keep GSAP scenes to one or two; prefer Motion elsewhere.
- **Forms**: validate with the shared Zod schema (`src/lib/validations.ts`) on
  both client and server. Keep the honeypot. Never expose internal errors.
- Pending assets/content are tracked as `TODO(assets)` / `TODO(content)` and in
  `docs/implementation-notes.md` §8.

