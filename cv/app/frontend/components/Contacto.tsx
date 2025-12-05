"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contacto() {
  const [status, setStatus] = useState("");

  const enviar = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "SERVICE_ID",
        "TEMPLATE_ID",
        e.target,
        "PUBLIC_KEY"
      )
      .then(
        () => setStatus("Mensaje enviado correctamente."),
        () => setStatus("Error al enviar el mensaje.")
      );
  };

  return (
    <section
      id="contacto"
      className="px-10 py-32 bg-neutral-100 dark:bg-neutral-900 
                 text-black dark:text-white"
    >
      <h2 className="text-5xl font-bold mb-10">Contacto</h2>

      <form onSubmit={enviar} className="max-w-xl space-y-6">
        <input
          name="nombre"
          type="text"
          required
          placeholder="Tu nombre"
          className="w-full p-3 border bg-white dark:bg-black border-neutral-300 
          dark:border-neutral-700 rounded"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Tu email"
          className="w-full p-3 border bg-white dark:bg-black border-neutral-300 
          dark:border-neutral-700 rounded"
        />

        <textarea
          name="mensaje"
          required
          placeholder="Tu mensaje..."
          rows={5}
          className="w-full p-3 border bg-white dark:bg-black border-neutral-300 
          dark:border-neutral-700 rounded"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black 
          border border-black dark:border-white font-medium hover:bg-white 
          hover:text-black dark:hover:bg-black dark:hover:text-white transition"
        >
          Enviar
        </button>

        {status && <p className="mt-4 opacity-70">{status}</p>}
      </form>
    </section>
  );
}
