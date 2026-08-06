export default function Experiencia() {
  const experiencias = [
    {
      id: 1,
      rol: "Desarrollador Full Stack",
      empresa: "Capasso Tech",
      fecha: "Julio 2026 - Agosto 2026 (2 meses)",
      descripcion:
        "Desarrollo y mantenimiento del sistema “Vialto”, orientado a la gestión de empresas de transporte y logística. El frontend está desarrollado con React, mientras que el backend está construido en NestJS y empleando Prisma como ORM. Mis principales aportes incluyen la implementación de reglas de negocio complejas (como el cálculo proporcional de pagos a transportistas) y validaciones en el módulo de combustible. Además, trabajé en la normalización de filtros de búsqueda y el desarrollo de accesos dinámicos multitenant, mejorando la robustez y consistencia general del sistema.",
      tecnologias: ["TypeScript", "React", "NestJS", "Prisma ORM"],
    },
  ];

  return (
    <section
      id="experiencia"
      className="pt-20 pb-32 px-6 md:px-8 max-w-4xl mx-auto flex flex-col justify-center relative min-h-screen"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b border-slate-800 pb-4 text-white text-center md:text-left">
        Experiencia Profesional
      </h2>

      <div className="relative border-l border-slate-800 ml-3 md:ml-0 md:pl-10 pl-8 space-y-12">
        {experiencias.map((exp) => (
          <div key={exp.id} className="relative group">
            <span className="absolute -left-[41px] md:-left-[49px] top-1 h-4 w-4 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_cyan] transition-all duration-300"></span>

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-1 md:gap-4">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {exp.rol}
              </h3>
              <span className="text-sm font-medium text-slate-500 md:text-right shrink-0">
                {exp.fecha}
              </span>
            </div>

            <p className="text-cyan-500 text-sm font-semibold mb-4 tracking-wide uppercase">
              {exp.empresa}
            </p>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4">
              {exp.descripcion}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {exp.tecnologias.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-slate-800/50 text-cyan-400 rounded-full border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Botón minimalista para continuar a proyectos */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <a
          href="#proyectos"
          className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
        >
          <span className="text-[10px] uppercase tracking-[3px] text-slate-400">
            Mira mis proyectos
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse"></div>
        </a>
      </div>
    </section>
  );
}
