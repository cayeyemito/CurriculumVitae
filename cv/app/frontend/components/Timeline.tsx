"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiencia = [
  {
    titulo: "Programador BackEnd Junior",
    empresa: "EY (Ernst & Young)",
    periodo: "oct. 2024 – Actualidad",
    ubicacion: "Barcelona, España",
    skills: ["Azure", "DevOps", "Automatización"],
  },
  {
    titulo: "DevOps Engineer",
    empresa: "Itequia",
    periodo: "mar. 2021 – jun. 2022",
    ubicacion: "Barcelona, España",
    skills: ["C++", "Java"],
  },
  {
    titulo: "Analista de datos",
    empresa: "Little Suite",
    periodo: "feb. 2019 – ago. 2020",
    ubicacion: "Barcelona, España",
    skills: ["SQL", "ETL"],
  },
];

const educacion = [
  {
    titulo: "DAW — Desarrollo de Aplicaciones Web",
    centro: "IFP Innovación en Formación Profesional",
    periodo: "2024 – 2026",
    skills: ["Node.js", "JavaScript"],
  },
  {
    titulo: "DAM — Desarrollo de Aplicaciones Multiplataforma",
    centro: "Institut Joan d’Austria",
    periodo: "2018 – 2021",
  },
];

export default function Timeline() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="experiencia"
      ref={ref}
      className="px-10 py-32 bg-black text-white dark:bg-black"
    >
      <h2 className="text-5xl font-bold mb-14">Experiencia</h2>

      <div className="border-l border-neutral-700 pl-10 space-y-14">
        {experiencia.map((item, i) => (
          <div key={i} className="relative group">
            <div className="absolute -left-4 top-2 w-3 h-3 bg-white rounded-full"></div>

            <div className="p-6 rounded-lg border border-transparent 
                  group-hover:border-white group-hover:bg-neutral-900 transition">
              <h3 className="text-2xl font-semibold">{item.titulo}</h3>
              <p className="opacity-80">{item.empresa}</p>
              <p className="opacity-50 text-sm mt-1">{item.periodo}</p>
              <p className="opacity-50 text-sm">{item.ubicacion}</p>

              <div className="flex gap-2 mt-4 flex-wrap">
                {item.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-neutral-500 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Educación */}
      <h2 className="text-5xl font-bold mt-24 mb-14">Educación</h2>

      <div className="border-l border-neutral-700 pl-10 space-y-14">
        {educacion.map((item, i) => (
          <div key={i} className="relative group">
            <div className="absolute -left-4 top-2 w-3 h-3 bg-white rounded-full"></div>

            <div className="p-6 rounded-lg border border-transparent 
                  group-hover:border-white group-hover:bg-neutral-900 transition">
              <h3 className="text-2xl font-semibold">{item.titulo}</h3>
              <p className="opacity-80">{item.centro}</p>
              <p className="opacity-50 text-sm mt-1">{item.periodo}</p>

              <div className="flex gap-2 mt-4 flex-wrap">
                {item.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-neutral-500 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
