import profileImg from "../assets/perfil.jpeg";
import Botones from "../components/Botones";

export default function Sobremi() {
  return (
    <section
      id="sobremi"
      className="min-h-screen flex items-center justify-center py-25 px-6 md:px-8 max-w-6xl mx-auto relative"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 w-full">
        <div className="relative group w-56 h-56 md:w-80 md:h-80 flex-shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
            <img
              src={profileImg}
              alt="Mati - Full Stack Dev"
              className="w-full h-full object-cover object-bottom hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>

        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white border-b border-slate-800 pb-2 inline-block">
            Sobre mí
          </h2>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            ¡Hola! Soy <span className="text-cyan-400 font-medium">Mati</span>,
            un desarrollador
            <span className="text-white font-semibold"> Full Stack </span> con
            base en Paraná, Entre Ríos, Argentina. Me encanta el desarrollo de
            soluciones tecnológicas para satisfacer las necesidades de los
            usuarios.
          </p>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
              <div className="hidden md:block mt-1 bg-cyan-500/10 p-2 rounded-lg">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              </div>
              <p className="text-slate-300">
                <span className="font-bold text-white">Educación:</span>{" "}
                Actualmente estoy finalizando mis estudios en la Universidad
                Tecnológica Nacional (UTN) como Técnico Superior en Programación
                y cuento con un curso de Desarrollo Front End React en la
                plataforma de CoderHouse.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
              <div className="hidden md:block mt-1 bg-cyan-500/10 p-2 rounded-lg">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              </div>
              <p className="text-slate-300">
                <span className="font-bold text-white">
                  Tecnologías Principales:
                </span>{" "}
                React, Java, C#, Html, Css, JavaScript, PostgreSql, MongoDB.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start w-full">
            <Botones />
          </div>
        </div>
      </div>

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
