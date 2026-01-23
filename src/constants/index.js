import gym from "../assets/proyecto-gym.webp";
import todo from "../assets/todo.webp";
import budin from "../assets/budin.webp";
import orilla from "../assets/orilla.webp";

export const PROJECTS = [
  {
    id: 1,
    title: "Gym Manager App",
    description:
      "Sitio Web para la gestión de rutinas, en donde se pueden crear rutinas con ejercicios y editarlas o borrarlas.",
    frontend: ["React", "Material UI", "Axios", "React Router"],
    backend: ["Python", "FastAPI", "SQLModel/SQLAlchemy", "Pydantic"],
    db: ["PostgreSQL"],
    link: "https://github.com/matias-05/proyecto-gym",
    image: gym,
  },
  {
    id: 2,
    title: "To Do App",
    description:
      "Sitio Web para la gestión de tareas, que permite crearlas, asignarlas a personas, marcarlas como completadas o borrarlas.",
    frontend: ["Vaadin Flow"],
    backend: ["Java", "Spring Boot", "Maven"],
    db: ["PostgreSQL"],
    link: "https://github.com/matias-05/to-do-app",
    image: todo,
  },
  {
    id: 3,
    title: "Rincón Del Budín",
    description: "Proyecto e-commerce para la venta de budines",
    frontend: ["React", "React Router", "Tailwind"],
    db: ["Firebase"],
    link: "https://github.com/matias-05/proyecto-budin",
    linkPag: "https://rincon-del-budin.vercel.app/",
    image: budin,
  },
  {
    id: 4,
    title: "Orilla Mates",
    description:
      "Proyecto e-commerce para la venta de mates, termos, bombillas, etc.",
    frontend: ["React", "React Router", "Tailwind"],
    db: ["Firebase"],
    link: "https://github.com/matias-05/orilla-mates",
    linkPag: "https://orilla-mates.vercel.app/",
    image: orilla,
  },
];
