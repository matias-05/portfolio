import Cardproyectos from "../components/Cardproyectos";

export default function Proyectos() {
  return (
    <section id="proyectos" className="min-h-screen py-20 px-6 md:px-8 max-w-6xl mx-auto flex flex-col justify-center relative pb-32">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b border-slate-800 pb-4 text-white text-center md:text-left">
            Proyectos Destacados 
        </h2>
        
        <Cardproyectos />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
            <a href="#contacto" className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <span className="text-[10px] uppercase tracking-[3px] text-slate-400">Contáctame</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent animate-pulse"></div>
            </a>
        </div>

    </section>
  );
}