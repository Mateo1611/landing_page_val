import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">404</p>
      <h1 className="mt-4 text-3xl font-semibold">Pagina no encontrada</h1>
      <Link className="mt-8 inline-flex text-[var(--color-accent)]" href="/">
        Volver al inicio
      </Link>
    </section>
  );
}

