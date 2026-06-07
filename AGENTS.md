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
- Current implementation only prepares tokens and structure; final art direction remains pending.

