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

---

## 10. Iteración Hero — Scrollytelling cinematográfico

Segunda iteración enfocada **solo en el Hero**: pasa de una composición estática
a una experiencia inmersiva guiada por scroll. No se tocaron otras secciones.

### Qué cambió

- El Hero ahora es una **sección alta con un "stage" sticky** (alto de viewport).
  Mientras el stage está fijo, el scroll activa una progresión visual coreografiada
  en 4 estados, en vez de solo desplazar contenido.
- Fondo convertido en una **escena viva por capas** (CSS puro, sin assets pesados):
  base graduada, dos *light blooms* (naranja + índigo) con parallax y *breathing*,
  gradiente de marca, grilla técnica enmascarada y falloff de bordes.
- HUD cinematográfico/tech: **REC**, **timecode que avanza con el scroll**, codec y
  ratio `2.39:1` en las esquinas de la escena.

### Cómo funciona la progresión (estados)

| Progreso | Estado | Qué ocurre |
| --- | --- | --- |
| ~0.00 | 1 · Entrada | Atmósfera oscura, eyebrow + claim + CTAs en reposo, scroll cue. |
| ~0.30 | 2 · Inmersión | El visual central **escala y "endereza"** (radius → recto); el backdrop gana profundidad por parallax. |
| ~0.55 | 3 · Relevo | El contenido primario se **retira** (fade + drift up) y entra la **frase de soporte** + HUD. |
| ~0.80 | 4 · Handoff | **Fade a color base** que prepara la transición fluida a la sección siguiente. |

### Componentes nuevos

- `src/hooks/useHeroScroll.ts` — **toda** la lógica scroll-driven (Motion
  `useScroll`/`useTransform`). Aísla la coreografía: el JSX solo cablea los
  `MotionValue` resultantes. Devuelve `reducedMotion` para colapsar a estático.
- `src/components/ui/HeroBackdrop.tsx` — fondo por capas con parallax (recibe el
  `scrollYProgress`).
- `src/components/ui/Timecode.tsx` — HUD de timecode que avanza con el scroll vía
  suscripción a `MotionValue` (no re-renderiza el Hero).
- `src/data/hero.ts` — contenido del Hero separado de la UI.
- CSS: keyframe `val-glow` (luz ambiental, solo opacidad) y `.hero-grid`
  (grilla enmascarada) en `styles/animations.css` y `styles/utilities.css`.

### Decisiones de animación

- **Motion** para microinteracciones (CTAs magnéticos) y para la progresión
  scroll-driven del Hero (`useScroll`/`useTransform`): un solo `scrollYProgress`
  alimenta todas las capas, evitando ScrollTriggers extra y manteniéndolo barato.
- *Breathing* de los blooms con **CSS opacity-only** para no chocar con los
  `transform` que Motion aplica al mismo elemento.
- Cada animación cumple una función (impactar / guiar / dar profundidad / preparar
  la transición); nada decorativo sin propósito.

### Performance y accesibilidad

- `prefers-reduced-motion`: el Hero **colapsa a una sola pantalla estática** (sin
  sección alta, sin sticky, sin transforms); blooms sin parallax ni *breathing*
  (`motion-safe:` en las animaciones CSS). Coreografía JS desactivada vía
  `useHeroScroll().reducedMotion`.
- `h1` semántico, CTAs como links reales, foco visible, scrim para contraste, HUD
  decorativo `aria-hidden`.
- Solo 2 capas con blur grande (con `will-change`), blur reducido en mobile; el
  scroll suave (Lenis) ya está sincronizado con Motion.

### Pendiente para la siguiente iteración del Hero

- Reemplazar el placeholder procedural por el **frame sequence real** (ver §11).
- Evaluar pin/scrub más elaborado con GSAP si se quiere un beat extra, sin perder
  performance en mobile.
- Afinar duraciones de los estados con el footage real y QA en dispositivos.

---

## 11. Hero — Video scrubbing controlado por scroll

Inspirado en los referentes del cliente (Oryzo.ai · Lusion/WebGL+Three.js+GSAP, y
toptier.relats.com · GSAP/Webflow). La técnica clave de ambos: **el scroll no
desplaza, scrubea una línea de tiempo.** Para un estudio audiovisual es la
metáfora de marca hecha interacción (scrollear = mover el cabezal de edición).

### Cómo está implementado

- `src/components/ui/ScrollVideo.tsx` — un `<canvas>` cuyo frame se pinta según el
  `scrollYProgress` del Hero. El valor pintado se **suaviza con un lerp en rAF**
  para un scrub mantecoso (no salta con el scroll crudo). Dos modos:
  - **Placeholder (hoy)**: pinta un frame **procedural** cinematográfico que
    evoluciona con el progreso — el grado de color va de frío (noche/índigo) a
    cálido (ember), la luz clave hace *push-in*, hay bandas de profundidad y
    viñeta. Demuestra la UX sin assets pesados ni binarios en git.
  - **Producción**: si recibe `frames={[...]}` (secuencia de imágenes) pinta el
    frame correspondiente al progreso (cover-fit). El timecode del HUD ya está
    sincronizado, reforzando la sensación de "scrubbing".
- Bajo `prefers-reduced-motion` pinta **un solo still** (sin loop rAF).
- DPR cap a 2 y `ResizeObserver` para responsive sin re-montar.

### Cómo cambiar el placeholder por el footage real (swap)

1. El cliente entrega **1 clip máster** (8–12s, 1080p/4K, sin audio).
2. Exportar a **secuencia de frames** (yo lo hago con ffmpeg), p. ej.:
   `ffmpeg -i master.mov -vf "fps=12,scale=1600:-1" -q:v 6 hero/frame_%03d.webp`
   → ~90–120 frames WebP (~150–250 KB c/u). Hostear en CDN/Vercel Blob, **no** en git.
3. Pasar las URLs a `ScrollVideo` desde el Hero:
   `<ScrollVideo frames={heroFrames} progress={h.scrollYProgress} ... />`
   (cargar la lista desde `src/data/hero.ts`). No requiere más cambios.

> Alternativa: un `<video>` con `currentTime = progress * duration`. Se descartó
> como opción primaria porque el scrubbing de `<video>` es irregular entre
> navegadores; la secuencia de imágenes es la técnica robusta (estilo Apple/Relats).

### Insumos exactos que pidió el equipo (resumen)

- **Hero (prioridad)**: 1 video máster 8–12s con progresión clara (push-in,
  revelado o montaje), 1080p/4K, sin audio.
- **Loops de fondo**: 3–5 clips seamless 5–10s (bokeh, humo, luces), 1080p mp4,
  < 3 MB c/u (+ versión 9:16 para mobile).
- **Portafolio**: 8 teasers 5–8s (16:9 / 9:16) + 1 póster WebP/AVIF ~1600px (<200 KB).
- **Reel**: showreel completo mp4 1080p para el modal.
- **Marca**: logo oficial en **SVG** (y, si existe, versión con alpha / Lottie).

---

## 12. Fase B (opcional) — Capa WebGL estilo Oryzo

Aprobada para **planear como opcional** (no se instala nada aún; respeta la regla
del brief: la página debe funcionar y convertir sin 3D).

- **Alcance acotado**: UN solo momento 3D, no toda la página. Candidatos: logo/lente
  que flota y reacciona al puntero, un campo de partículas/motas de luz, o un
  **shader de displacement/transición** sobre el frame del Hero (el `<canvas>` 2D
  actual se sustituiría por un `<canvas>` WebGL que reusa el mismo `scrollYProgress`).
- **Stack**: `@react-three/fiber` + `@react-three/drei` (o `ogl` si se quiere algo
  más liviano), `three`, GLTF + Draco/Meshopt si hay modelo.
- **Reglas**: `dynamic import` + carga diferida, DPR adaptivo, *fallback* no-WebGL
  (el placeholder/ footage 2D actual), y desactivado bajo reduced-motion.
- **Arquitectura preparada**: `ScrollVideo` ya aísla "el visual central" detrás de
  un único `progress`; la Fase B sería un `HeroCanvasWebGL` intercambiable sin
  tocar la coreografía (`useHeroScroll`) ni el contenido.
- **Decisión pendiente (greenlight)**: instalar dependencias 3D y definir si el
  momento WebGL es logo/lente, partículas o shader sobre footage.
