export default function Botones() {
  return (
    <div className="flex gap-3 pt-6 w-full justify-center md:justify-start">
      

      <a 
        href="https://www.linkedin.com/in/mat%C3%ADas-fernandez/" 
        target="_blank" 
        rel="noopener noreferrer"

        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-cyan-900/20 text-sm md:text-base whitespace-nowrap"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        LinkedIn
      </a>
      <a 
        href="/cv-mati.pdf" 
        download="CV_Mati.pdf"
        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all active:scale-95 text-sm md:text-base whitespace-nowrap"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        Descargar CV
      </a>
      
    </div>
  );
}