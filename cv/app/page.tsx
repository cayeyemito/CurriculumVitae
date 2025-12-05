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
            <span className="block">Cayetano Yeste Morant</span>
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
      <section
        id="proyectos"
        ref={portfolioRef}
        className="px-10 py-32 space-y-32"
      >
        <h2 className="text-6xl font-bold mb-20">Proyectos</h2>

        {/* PROYECTO 1 */}
        <a
          href="#"
          className="group grid md:grid-cols-2 items-center gap-10"
        >
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <img
              src="/mockups/project1.webp"
              className="w-full h-[520px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
          </div>

          <div>
            <h3 className="text-5xl font-bold mb-4 group-hover:tracking-wide transition-all">
              Proyecto Destacado
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-lg max-w-md">
              Desarrollo end-to-end con un enfoque en rendimiento, animaciones fluidas y experiencia visual profesional.
            </p>
          </div>
        </a>

        {/* PROYECTO 2 */}
        <a
          href="https://github.com/cayeyemito/pokedex"
          className="group grid md:grid-cols-2 items-center gap-10 md:flex-row-reverse"
        >
          <div className="relative overflow-hidden rounded-xl shadow-xl order-2 md:order-1">
            <img
              src="images/proyecto-pokedex.png"
              className="w-full h-[520px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-5xl font-bold mb-4 group-hover:tracking-wide transition-all">
              Pokedex
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-lg max-w-md">
              Interfaz responsive, micro-interacciones y un diseño limpio y profesional.
            </p>
          </div>
        </a>
      </section>
      {/* HARD SKILLS — moderno y técnico */}
      <section
        id="skills"
        className="px-10 py-32 space-y-20 bg-neutral-50 dark:bg-neutral-950"
      >
        <h2 className="text-6xl font-bold">
          Hard <span className="text-neutral-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Skill block */}
          {[
            { title: "Frontend", items: ["React", "Next.js", "Tailwind", "TypeScript", "GSAP"] },
            { title: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL"] },
            { title: "DevOps", items: ["Azure", "Docker", "CI/CD", "Linux"] },
          ].map((skillGroup, idx) => (
            <div
              key={idx}
              className="
                group p-8 border border-neutral-300 dark:border-neutral-700 
                rounded-xl transition relative overflow-hidden
                hover:border-black dark:hover:border-white
              "
            >
              {/* Glow */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-20 
                bg-gradient-to-br from-white to-black 
                transition duration-300
              " />

              <h3 className="text-3xl font-bold mb-6">{skillGroup.title}</h3>

              <ul className="space-y-3">
                {skillGroup.items.map((item, i) => (
                  <li
                    key={i}
                    className="
                      flex justify-between items-center
                      text-neutral-700 dark:text-neutral-300
                    "
                  >
                    {item}

                    {/* Mini progress bar visual */}
                    <div className="w-10 h-[3px] bg-neutral-300 dark:bg-neutral-600 group-hover:bg-black dark:group-hover:bg-white transition"></div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* SOFT SKILLS — editorial, moderno */}
      <section className="px-10 py-32 bg-white dark:bg-black">
        <h2 className="text-6xl font-bold mb-16">
          Soft <span className="text-neutral-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-20">

          <div className="space-y-12">
            {[
              {
                title: "Comunicación",
                desc: "Capacidad para transmitir ideas complejas de forma clara y efectiva a equipos técnicos y no técnicos.",
              },
              {
                title: "Pensamiento crítico",
                desc: "Analizo problemas reales evaluando múltiples soluciones, optimizando tiempo y recursos.",
              },
            ].map((soft, i) => (
              <div key={i} className="group">
                <h3 className="text-4xl font-semibold group-hover:tracking-wide transition">
                  {soft.title}
                </h3>
                <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-md leading-relaxed">
                  {soft.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Trabajo en equipo",
                desc: "Hábitos colaborativos fuertes, acostumbrado a metodologías ágiles y feedback constructivo.",
              },
              {
                title: "Aprendizaje rápido",
                desc: "Adopto nuevas tecnologías de forma ágil, manteniendo siempre un alto estándar de calidad.",
              },
            ].map((soft, i) => (
              <div key={i} className="group">
                <h3 className="text-4xl font-semibold group-hover:tracking-wide transition">
                  {soft.title}
                </h3>
                <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-md leading-relaxed">
                  {soft.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* TIMELINE PROFESIONAL — con hover premium */}
      <Timeline />

      {/* CONTACTO — Funcional con EmailJS */}
      <Contacto />
    </main>
  );
}
