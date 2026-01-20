export default function Formcontacto() {
  return (
    <form 
      action="https://formspree.io/f/xlgrblnq" 
      method="POST" 
      className="bg-slate-900 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-800 text-left space-y-6 shadow-2xl w-full"
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            

            <div className="space-y-2">
                <label className="text-xs md:text-sm font-semibold text-cyan-500 uppercase tracking-wider">
                    Nombre
                </label>
                <input 
                    type="text" 
                    name="name" 
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm md:text-base"
                    placeholder="Tu nombre"
                />
            </div>

            <div className="space-y-2">
                <label className="text-xs md:text-sm font-semibold text-cyan-500 uppercase tracking-wider">
                    Email
                </label>
                <input 
                    type="email" 
                    name="email" 
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors text-sm md:text-base"
                    placeholder="tu@email.com"
                />
            </div>
        </div>

        <div className="space-y-2">
            <label className="text-xs md:text-sm font-semibold text-cyan-500 uppercase tracking-wider">
                Mensaje
            </label>
            <textarea 
                name="message" 
                rows="5" 
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none text-sm md:text-base"
                placeholder="¿En qué puedo ayudarte?"
            ></textarea>
        </div>


        <button 
            type="submit"
            className="w-full py-3 md:py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/20 transition-all active:scale-[0.98] text-sm md:text-base"
        >
            Enviar Mensaje
        </button>
    </form>
  );
}