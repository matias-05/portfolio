import { PROJECTS } from "../constants";

export default function Cardproyectos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {PROJECTS.map((project) => (
        <div
          key={project.id}
          className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl flex flex-col"
        >
          <div className="relative h-48 md:h-40 overflow-hidden flex-shrink-1">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-4 text-xs leading-relaxed line-clamp-2">
              {project.description}
            </p>

            <div className="space-y-3 mb-5 flex-1">
              {project.frontend && project.frontend.length > 0 && (
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-cyan-500 font-bold">
                    Frontend
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.frontend.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] text-slate-300 bg-slate-800/50 px-2 py-0.5 rounded border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.backend && project.backend.length > 0 && (
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-purple-400 font-bold">
                    Backend
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.backend.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] text-slate-300 bg-slate-800/50 px-2 py-0.5 rounded border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.db && project.db.length > 0 && (
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold">
                    Database
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.db.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] text-slate-300 bg-slate-800/50 px-2 py-0.5 rounded border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg transition-colors ${
                  project.linkPag ? "flex-1" : "w-full"
                }`}
              >
                GitHub
              </a>

              {project.linkPag && (
                <a
                  href={project.linkPag}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Ver Web
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
