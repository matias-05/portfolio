import { useState } from "react";

export default function Formcontacto() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("enviando");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://portfolio-backend-18uo.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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
        disabled={status === "enviando"}
        className="w-full py-3 md:py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
      >
        {status === "enviando" ? "Enviando..." : "Enviar Mensaje"}
      </button>

      <div className="text-center h-4">
        {status === "success" && (
          <p className="text-emerald-400 text-sm font-medium animate-fade-in">
            ¡Mensaje enviado con éxito!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm font-medium animate-fade-in">
            Error al enviar. Intenta de nuevo más tarde.
          </p>
        )}
      </div>
    </form>
  );
}
