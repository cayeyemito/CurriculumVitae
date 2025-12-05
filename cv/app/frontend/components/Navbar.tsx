"use client";

import ThemeToggle from "./ThemeToggle";
import { useEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  useEffect(() => {
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[999] px-10 py-6 
                    flex justify-between items-center
                    bg-white/60 dark:bg-black/60 backdrop-blur-md border-b border-black/10 dark:border-white/10">

      <h1 className="nav-item text-2xl font-bold tracking-wider">
        CV<span className="text-neutral-500">.</span>
      </h1>

      <div className="flex items-center gap-6">
        <a href="#proyectos" className="nav-item text-sm hover:opacity-60 transition">
          Proyectos
        </a>
        <a href="#experiencia" className="nav-item text-sm hover:opacity-60 transition">
          Experiencia
        </a>
        <a href="#contacto" className="nav-item text-sm hover:opacity-60 transition">
          Contacto
        </a>

        <ThemeToggle />
      </div>
    </nav>
  );
}
