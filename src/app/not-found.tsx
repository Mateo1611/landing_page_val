import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-3xl flex-col justify-center px-6 py-24">
      <p className="font-mono text-sm uppercase tracking-[0.18em] text-fg-muted">404</p>
      <h1 className="mt-4 font-display text-4xl uppercase tracking-tight">Página no encontrada</h1>
      <p className="mt-4 text-fg-muted">La página que buscas no existe o cambió de lugar.</p>
      <Link className="mt-8 inline-flex text-orange" href="/">
        ← Volver al inicio
      </Link>
    </section>
  );
}
