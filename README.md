# VAL AUDIOVISUAL — Landing Page

Landing page premium para VAL AUDIOVISUAL: estudio audiovisual en Medellín. Una
sola página, dark, cinematográfica y orientada a conversión (portafolio, CTAs y
contacto/agenda).

Esta fase implementa la **construcción visual** a partir del mockup de Claude
Design (`docs/wireframes/`, **Dirección A — "El Reel"**) sobre el sistema de marca
de `docs/brand/`. Faltan los **assets finales** (videos, fotos, logo SVG) y la
conexión real de leads — ver `docs/implementation-notes.md`.

## Stack

- Next.js (App Router) + React 19 + TypeScript estricto
- Tailwind CSS v4 (tokens de marca en `@theme`)
- Motion (microinteracciones + entradas de sección)
- GSAP ScrollTrigger (escena narrativa del reel)
- Lenis (scroll suave, sincronizado con GSAP)
- React Hook Form + Zod (formulario + validación)
- lucide-react, clsx, tailwind-merge

## Comandos

```bash
npm install
npm run dev     # desarrollo
npm run lint    # ESLint
npm run build   # build de producción
```

## Estructura

```txt
src/
  app/          layout, page (orden Dirección A), api/contact, globals.css
  components/
    layout/     Header, Footer, MobileNav, SmoothScrollProvider
    sections/   una por bloque de la landing (+ ContactForm)
    ui/         Button, Logo, Section, MediaFrame, VideoCard, Modal, Accordion,
                Marquee, MagneticButton, RevealText, CountUp, SectionLabel
    animation/  FadeIn, ParallaxMedia, ScrollProgress, PinnedShowcase
  config/       site, navigation, seo
  data/         services, portfolio, testimonials, faqs, process, categories, about
  hooks/        useMediaQuery, useReducedMotion, useIsMobile
  lib/          cn, validations, contact, analytics, constants
  styles/       tokens.css, animations.css, utilities.css
  types/        service, portfolio, contact
docs/           brand/ (ignorado en git), brief/, wireframes/, implementation-notes.md
```

## Secciones (Dirección A)

Hero → Categorías → Reel → Servicios → Portafolio → Proceso → Sobre VAL →
Testimonios → CTA → FAQ → Contacto.

## Convenciones

- Leer `docs/` antes de tocar identidad, contenido o dirección visual.
- Colores/fuentes desde tokens (`@theme` en `globals.css`); no hardcodear hex.
- Contenido editable en `src/data/`, fuera de los componentes.
- Imports con alias `@/`. Componentes pequeños y tipados.
- Validar formularios con Zod (cliente + servidor). No exponer secretos.
- Respetar `prefers-reduced-motion` en toda animación.
- Ejecutar `npm run lint` y `npm run build` antes de entregar.

Más detalle (decisiones, marca, animaciones, pendientes) en
[`docs/implementation-notes.md`](docs/implementation-notes.md).

## Estado actual

Construcción visual completa y responsive con animaciones controladas. Pendiente:
assets reales del cliente, datos de contacto reales e integración de leads.

## Variables de entorno

Copiar `.env.example` a `.env.local`. No subir secretos al repo.

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
