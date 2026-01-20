import Formcontacto from "../components/Formcontacto";

export default function Contacto() {
  return (
    <section id="contacto" className="min-h-screen py-12 md:py-20 px-6 md:px-8 max-w-4xl mx-auto text-center flex flex-col justify-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Hablamos?
        </h2>
        
        <p className="text-slate-400 mb-8 md:mb-10 text-base md:text-lg max-w-2xl mx-auto">
            Actualmente estoy buscando nuevas oportunidades. Si tienes alguna pregunta o solo quieres saludar, ¡mi bandeja de entrada está abierta!
        </p>
        
        <Formcontacto />
    </section>
  );
}