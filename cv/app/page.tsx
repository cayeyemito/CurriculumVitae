"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollProgress from "@/app/frontend/components/ScrollProgress";
import ThreeHero from "@/app/frontend/components/ThreeHeroGLB"; // nuevo 3D realista
import Timeline from "@/app/frontend/components/Timeline";
import Contacto from "@/app/frontend/components/Contacto";
import Navbar from "@/app/frontend/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const sobreMiRef = useRef(null);
  const portfolioRef = useRef(null);

  // GSAP reveal avanzado
  useEffect(() => {
    const sections = [
      heroRef.current,
      sobreMiRef.current,
      portfolioRef.current
    ];

    sections.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <ScrollProgress />

      {/* HERO — Presentación profesional */}
      <section
        ref={heroRef}
        className="min-h-screen grid md:grid-cols-2 items-center px-10 pt-40 gap-10"
      >
        {/* Textos */}
        <div>
          <h1 className="text-[12vw] md:text-[7vw] font-extrabold leading-none tracking-tight">
            Hola, soy
            <br />
            <span className="block">Tu Nombre</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-neutral-700 dark:text-neutral-300">
            Frontend Developer & UI/UX Designer.  
            Especializado en crear experiencias digitales rápidas, limpias
            y visualmente potentes.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#proyectos"
              className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black 
                font-medium border border-black dark:border-white hover:bg-white 
                hover:text-black dark:hover:bg-black dark:hover:text-white transition"
            >
              Ver proyectos
            </a>

            <a
              href="#contacto"
              className="px-6 py-3 border border-black dark:border-white font-medium 
                hover:bg-black hover:text-white dark:hover:bg-white 
                dark:hover:text-black transition"
            >
              Contactar
            </a>
          </div>
        </div>

        {/* Objeto 3D — Modelo GLB profesional */}
        <div className="flex justify-center">
          <ThreeHero />
        </div>
      </section>

      {/* SOBRE MI — Personal y profesional */}
      <section
        ref={sobreMiRef}
        className="min-h-screen bg-black text-white flex items-center px-10 py-32"
      >
        <h2 className="text-5xl font-serif max-w-3xl leading-snug">
          Soy un desarrollador con pasión por crear experiencias digitales que
          combinan estética, rendimiento y usabilidad.  
          <br />
          <br />
          Me gusta trabajar en entornos donde el diseño y la tecnología se unen
          para resolver problemas reales y ofrecer productos de alto impacto.
        </h2>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" ref={portfolioRef} className="px-10 py-32 space-y-40">

        {/* Item 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src="/mockups/project1.webp"
            className="w-full h-[500px] object-cover rounded hover:scale-[1.02] transition"
          />
          <div>
            <h3 className="text-4xl font-bold">Proyecto Destacado</h3>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
              Un proyecto que representa mi enfoque en la estética funcional
              y el desarrollo con propósito.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl font-bold">Aplicación Mobile</h3>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
              Desarrollo completo con UI moderna, interacciones suaves y un estilo visual atractivo.
            </p>
          </div>

          <img
            src="/mockups/project2.webp"
            className="w-full h-[500px] object-cover rounded hover:scale-[1.02] transition"
          />
        </div>
      </section>

      {/* TIMELINE PROFESIONAL — con hover premium */}
      <Timeline />

      {/* CONTACTO — Funcional con EmailJS */}
      <Contacto />
    </main>
  );
}
