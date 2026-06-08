# Notas de implementación — VAL AUDIOVISUAL Landing

Documento técnico de la fase de **construcción visual** de la landing. Explica qué
se implementó, cómo se adaptó el mockup, cómo se aplicó la identidad de marca y
qué queda pendiente.

## 1. Qué se implementó

Landing de una sola página (single-page), modular y responsive, que traduce el
mockup de Claude Design (`docs/wireframes/`) al stack del proyecto, respetando la
identidad de `docs/brand/` y el contexto de `docs/brief/`.

Secciones (en orden), siguiendo la **Dirección A — "El Reel"** del wireframe:

1. **Hero** full-bleed, claim con reveal línea por línea, CTA primario + secundario, cue de scroll.
2. **Categorías** — marquee ambiental (loop CSS).
3. **Reel** destacado — frame que escala con el scroll (GSAP), metadata REC.
4. **Servicios** — lista interactiva + preview sticky (servicios por necesidad).
5. **Portafolio** — grid masonry filtrable + modal de video (carga diferida).
6. **Proceso** — capítulos con riel de progreso y media sticky (scroll-driven).
7. **Sobre VAL** — bloque corto + stats con conteo animado.
8. **Testimonios** — cards + fila de logos de clientes.
9. **CTA cinematográfico** — banda de conversión con el gradiente de marca.
10. **FAQ** — acordeón premium (single-open, accesible).
11. **Contacto** — formulario (RHF + Zod + honeypot) + WhatsApp + agenda.

> El bloque **Insights** (brief §9) queda preparado (`InsightsSection`) pero **no
> se renderiza** en V1: la Dirección A no lo incluye. Listo para una fase posterior.

## 2. Cómo se adaptó el mockup

- El wireframe es un boceto low-fi (papel + naranja) con 3 direcciones (A/B/C).
  Se eligió **A · El Reel** por ser la que mejor encaja con la dirección creativa
  del brief (cine inmersivo, Apple/DJI dark) y con el sistema del manual de marca
  (letterbox, REC, cinematográfico).
- **No se copió** HTML/CSS/JS del mockup. Cada bloque se reescribió como
  componente React/Next.js tipado, con la data separada en `src/data/`.
- Los placeholders de media del wireframe se traducen a `<MediaFrame>` (slot con
  viewfinder/crop-marks) que acepta media real como `children` cuando exista.
- Las "notas de movimiento" del wireframe se implementaron como animaciones
  reales (ver §6).

## 3. Cómo se aplicó la identidad visual (`docs/brand/`)

Del **Manual de Marca** (`docs/brand/.../val-manual.css`) se extrajo el sistema de
producción dark y se registró como tokens de Tailwind v4:

- **Color**: acento `#FD5400` (+ `orange-bright`, `ember`), secundario índigo,
  superficies oscuras (`void/base/surface/raised/hi`), texto (`fg/muted/faint`),
  gradiente cinematográfico (`--grade`).
- **Tipografía**: Archivo (sans), Archivo Black (display, titulares en mayúsculas),
  JetBrains Mono (eyebrows, metadata). Cargadas con `next/font` y mapeadas a
  `--font-sans/-display/-mono`.
- **Primitivas de marca**: `eyebrow`, viewfinder (`frame`), `letterbox`, `grain`,
  `vignette`, placeholder de media — en `src/styles/utilities.css`.
- **Easing** de marca (`--ease`) usado en transiciones y animaciones.

> Los colores/fuentes viven en el bloque `@theme` de `globals.css` (única fuente de
> verdad: genera CSS vars **y** utilidades). El resto de tokens (gradiente, easing,
> radios, ritmo) en `src/styles/tokens.css`.

## 4. Arquitectura

```txt
src/
  app/            layout (grain/vignette/scroll-progress), page (orden Dirección A), api/contact
  components/
    layout/       Header (scroll-aware), Footer, MobileNav, SmoothScrollProvider (Lenis+GSAP)
    sections/     una por bloque de la landing (+ ContactForm)
    ui/           Button, Logo, Section, SectionLabel, MediaFrame, VideoCard, Modal,
                  Accordion, Marquee, MagneticButton, RevealText, CountUp
    animation/    FadeIn, ParallaxMedia, ScrollProgress, PinnedShowcase
  config/         site, navigation, seo
  data/           services, portfolio, testimonials, faqs, process, categories, about, insights
  hooks/          useMediaQuery, useReducedMotion, useIsMobile
  lib/            cn, validations (Zod), contact, analytics, constants
  styles/         tokens.css, animations.css, utilities.css
  types/          service, portfolio, contact
```

Convenciones: TypeScript estricto, imports con alias `@/`, data fuera de la UI,
componentes pequeños y enfocados, Server Components por defecto y `"use client"`
solo donde hay estado/efectos/animación.

## 5. Animaciones e interactividad

| Capa | Herramienta | Dónde |
| --- | --- | --- |
| Entradas de sección | Motion (`FadeIn`, `RevealText`) | Hero, headings, cards |
| Microinteracciones | Motion (`MagneticButton`), CSS hover | CTAs, cards de portafolio |
| Scroll narrativo | **GSAP ScrollTrigger** (`PinnedShowcase`) | Reel (escala en scroll) |
| Scroll-driven UI | Motion `useScroll` | Proceso (riel + media sticky), barra de progreso, parallax |
| Scroll suave | **Lenis** (sincronizado con GSAP) | Desktop; off en reduced-motion |
| Conteo | `CountUp` (rAF) | Stats de "Sobre VAL" |

Todo respeta `prefers-reduced-motion` (guard CSS global + `useReducedMotion` en JS).

## 6. Performance, accesibilidad y SEO

- **Media diferida**: el portafolio muestra solo thumbnails; el video pesa solo al
  abrir el modal. GSAP/ScrollTrigger se cargan con `import()` dinámico.
- **A11y**: foco visible global, navegación por teclado (acordeón, modal con
  Escape/scroll-lock, drawer móvil), `aria-*` en controles, scrim para contraste.
- **SEO**: metadata indexable + Open Graph/Twitter + canonical + robots en
  `config/seo.ts`.
- **Seguridad**: validación Zod cliente + servidor, honeypot anti-spam, sin
  secretos en el repo, errores internos nunca expuestos al usuario.

## 7. Seguridad de assets / Git

- `.gitignore` ignora `docs/brand/`, `*.mp4`, `*.mov`, `*.avi`, `*.mkv`,
  `node_modules/`, `.next/`, `.env*`.
- **Pendiente recomendado**: `docs/brand/` ya estaba versionado antes de esta fase.
  Para que el ignore tenga efecto hay que dejar de trackearlo:
  `git rm -r --cached docs/brand` (no se ejecutó aquí para no generar un borrado
  staged inesperado; decisión del equipo).

## 8. Pendientes (assets y contenido)

- Logo oficial en **SVG** (hoy: wordmark tipográfico `VAL.`).
- Video del **hero** (poster + loop muted) y **reel** real.
- **Thumbnails** (WebP/AVIF) y URLs de video del portafolio.
- Imagen real del **equipo** y media por **capítulo** del proceso.
- **Logos** reales de clientes y **testimonios** aprobados.
- Datos de contacto reales: **WhatsApp**, **Calendly**, redes, email.
- Imagen **Open Graph** (`/public/images/og.jpg`).
- Integración real de leads (Resend/CRM/Sheets) en `lib/contact.ts`.

## 9. Próximas fases (V2)

3D/WebGL opcional (regla del brief: la página debe funcionar sin él), blog/CMS,
más casos de portafolio, analytics avanzado y automatización de leads.
