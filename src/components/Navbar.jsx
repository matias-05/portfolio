import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Sobre mi", href: "#sobremi" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full p-6 flex justify-between items-center backdrop-blur-md z-50 bg-slate-950/20">

      <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
        Matías Fernández
      </span>


      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-cyan-400 transition text-slate-200">
            {link.name}
          </a>
        ))}
      </div>


      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none md:hidden z-50"
        aria-label="Menu"
      >

        <span className={`block absolute h-0.5 w-8 bg-cyan-400 rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? 'rotate-45' : '-translate-y-2.5'
        }`}></span>
        

        <span className={`block absolute h-0.5 w-8 bg-cyan-400 rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
        }`}></span>
        

        <span className={`block absolute h-0.5 w-8 bg-cyan-400 rounded-full transition-all duration-300 ease-in-out ${
          isOpen ? '-rotate-45' : 'translate-y-2.5'
        }`}></span>
      </button>


      <div className={`
        fixed top-20 right-6 w-48 bg-slate-900/95 backdrop-blur-lg border border-slate-800 rounded-2xl py-6 flex flex-col items-center space-y-6 transition-all duration-300 ease-in-out z-40
        ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-5 pointer-events-none"} md:hidden
      `}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="text-lg text-slate-200 hover:text-cyan-400 transition"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}