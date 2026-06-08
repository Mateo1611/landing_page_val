"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { buttonClasses } from "@/components/ui/Button";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations";
import { CONTACT_ENDPOINT } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

/** Fields rendered in the 2-column grid. `full` spans both columns. */
const fields: Array<{ name: keyof ContactFormSchema; label: string; type?: string; full?: boolean }> = [
  { name: "name", label: "Nombre" },
  { name: "brand", label: "Marca / empresa" },
  { name: "projectType", label: "Tipo de proyecto" },
  { name: "date", label: "Fecha tentativa" },
  { name: "budget", label: "Presupuesto aprox." },
  { name: "whatsapp", label: "WhatsApp / email" },
];

const inputClass =
  "w-full rounded-[var(--radius-sm)] border border-[var(--line-strong)] bg-[var(--color-base)] px-4 py-3 text-sm text-fg " +
  "transition-colors focus:border-orange focus:outline-none";
const labelClass = "font-mono text-[0.64rem] uppercase tracking-[0.12em] text-fg-muted";

/**
 * Lead capture form. Validates on the client with the shared Zod schema (same
 * one the API route enforces) and posts to /api/contact. Includes a hidden
 * honeypot ("website") for basic anti-spam (docs/brief §12). On success it
 * swaps to a confirmation message instead of leaving a stale form.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    setStatus("submitting");
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      trackEvent("contact_submit", { projectType: data.projectType });
      setStatus("success");
      reset();
    } catch {
      // Never surface internal errors; show a friendly message (§12).
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--color-surface)] p-8">
        <h3 className="font-display text-xl uppercase tracking-tight text-orange">¡Recibido!</h3>
        <p className="mt-2 text-sm text-fg-muted">
          Gracias por escribirnos. Te respondemos muy pronto para hablar de tu proyecto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4 sm:grid-cols-2">
      {/* Honeypot: visually hidden, off the tab order. Bots fill it, humans don't. */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="website">No completar</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1.5">
          <label className={labelClass} htmlFor={field.name}>
            {field.label}
          </label>
          <input id={field.name} type={field.type ?? "text"} className={inputClass} {...register(field.name)} />
          {errors[field.name] ? (
            <span className="text-xs text-[#ff5a5a]">{errors[field.name]?.message}</span>
          ) : null}
        </div>
      ))}

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass} htmlFor="message">
          Mensaje
        </label>
        <textarea id="message" rows={4} className={inputClass} {...register("message")} />
        {errors.message ? <span className="text-xs text-[#ff5a5a]">{errors.message.message}</span> : null}
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "submitting"} className={buttonClasses("primary", "lg")}>
          {status === "submitting" ? "Enviando…" : "Enviar solicitud →"}
        </button>
        {status === "error" ? (
          <p className="mt-3 text-sm text-[#ff5a5a]">
            No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos por WhatsApp.
          </p>
        ) : null}
      </div>
    </form>
  );
}
