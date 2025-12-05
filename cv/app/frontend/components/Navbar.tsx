"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const links = [
    { name: "Inicio", href: "#" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      ref={navRef}
      className="
        fixed top-0 left-0 w-full z-[999]
        backdrop-blur-xl
        bg-white/40 dark:bg-black/40 
        border-b border-black/10 dark:border-white/10 
        px-10 py-5 flex justify-between items-center
      "
    >
      {/* LOGO */}
      <div className="font-bold tracking-widest text-xl dark:text-white">
        PORTFOLIO<span className="text-neutral-500">.</span>
      </div>

      {/* LINKS */}
      <div className="flex items-center gap-8">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="
              relative group text-sm font-medium 
              dark:text-white text-black tracking-wide
            "
          >
            {link.name}

            {/* Línea hover */}
            <span
              className="
                absolute left-0 -bottom-1 w-0 h-[2px] bg-black dark:bg-white 
                group-hover:w-full transition-all duration-300
              "
            />
          </a>
        ))}

        <ThemeToggle />
      </div>
    </nav>
  );
}
