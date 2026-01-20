import Navabar from "./components/Navbar";
import Sobremi from "./sections/Sobremi";
import Proyectos from "./sections/Proyectos";
import Contacto from "./sections/Contacto";


function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-cyan-950">
      <Navabar />
      <Sobremi />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;