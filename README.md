# VAL AUDIOVISUAL Landing Page

Landing page premium para VAL AUDIOVISUAL. Esta fase deja lista la base tecnica del proyecto: arquitectura Next.js, TypeScript, Tailwind, componentes base, data temporal, validaciones, endpoint de contacto y reglas de trabajo.

No contiene todavia el diseno visual final, animaciones complejas, 3D ni contenido definitivo del cliente.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- motion, GSAP y Lenis preparados para fases posteriores
- Zod, React Hook Form y resolvers para formularios
- clsx y tailwind-merge para clases
- lucide-react para iconos

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Estructura

```txt
src/
  app/                 App Router, layout, paginas y API routes
  components/          Layout, secciones, UI, animacion y futura capa 3D
  config/              Configuracion de sitio, navegacion y SEO
  data/                Data temporal separada de componentes
  hooks/               Hooks reutilizables de cliente
  lib/                 Utilidades, validaciones, contacto y constantes
  styles/              Tokens, animaciones y utilidades CSS
  types/               Tipos compartidos
public/
  images/ videos/ icons/ brand/
docs/                  Documentacion de marca y brief
```

## Convenciones

- Leer `docs/` antes de modificar identidad, contenido o direccion visual.
- Usar alias `@/` para imports internos.
- Separar data, config, UI, secciones y utilidades.
- Mantener componentes pequenos y tipados.
- Validar formularios con Zod.
- No exponer secretos ni API keys.
- Ejecutar lint y build antes de entregar cambios.

## Estado Actual

Base tecnica inicial creada. La interfaz visible es un placeholder neutral para validar compilacion y arquitectura.

## Proximos Pasos

- Reemplazar data temporal por contenido aprobado.
- Definir direccion visual final desde `docs/`.
- Conectar formulario a proveedor aprobado.
- Planificar animaciones y performance.
- Evaluar 3D solo si una fase posterior lo solicita.

