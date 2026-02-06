import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("sobremi");

  const navLinks = [
    { name: "Sobre mi", href: "#sobremi" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-slate-950/20 backdrop-blur-md">
      <a
        href="#"
        className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent hover:scale-105 transition-transform"
      >
        Matías Fernández
      </a>

      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);

          return (
            <a
              key={link.name}
              href={link.href}
              className={`relative group px-1 py-1 transition-colors duration-300 font-medium tracking-wide
                ${isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"}
              `}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-cyan-400 transition-all duration-300 ease-out
                ${isActive ? "w-full shadow-[0_0_10px_cyan]" : "w-0 group-hover:w-full"}
              `}
              ></span>
            </a>
          );
        })}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none md:hidden z-50 group"
        aria-label="Menu"
      >
        <span
          className={`block absolute h-0.5 w-7 bg-current transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 text-cyan-400" : "-translate-y-2 text-slate-200 group-hover:text-cyan-400"}`}
        ></span>
        <span
          className={`block absolute h-0.5 w-7 bg-current transform transition duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100 text-slate-200 group-hover:text-cyan-400"}`}
        ></span>
        <span
          className={`block absolute h-0.5 w-7 bg-current transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 text-cyan-400" : "translate-y-2 text-slate-200 group-hover:text-cyan-400"}`}
        ></span>
      </button>

      <div
        className={`
        fixed top-0 right-0 h-screen w-64 bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 shadow-2xl flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden
      `}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium transition-all duration-300 relative
                ${isActive ? "text-cyan-400 scale-110" : "text-slate-300 hover:text-white"}
              `}
            >
              {link.name}
              {isActive && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-400 rounded-full shadow-glow"></span>
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
