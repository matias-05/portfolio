import gym from "../assets/proyecto-gym.png";
import todo from "../assets/todo.png";
import budin from "../assets/budin.png";

export const PROJECTS = [
  {
    id: 1,
    title: "Gym Manager App",
    description: "Sitio Web para la gestión de rutinas, en donde se pueden crear rutinas con ejercicios y editarlas o borrarlas.",
    frontend: ["React", "Material UI", "Axios", "React Router"],
    backend: ["Python", "FastAPI", "SQLModel/SQLAlchemy", "Pydantic"],
    db: ["PostgreSQL"],
    link: "https://github.com/matias-05/proyecto-gym",
    image: gym, 
  },
  {
    id: 2,
    title: "To Do App",
    description: "Sitio Web para la gestión de tareas, que permite crearlas, asignarlas a personas, marcarlas como completadas o borrarlas.",
    frontend: ["Vaadin Flow"],
    backend: ["Java", "Spring Boot", "Maven"],
    db: ["PostgreSQL"],
    link: "https://github.com/matias-05/to-do-app",
    image: todo, 
  },
  {
    id: 2,
    title: "Rincón Del Budín",
    description: "Proyecto e-commerce para la venta de budines",
    frontend: ["React, React Router, Tailwind"],
    db: ["Firebase"],
    link: "https://github.com/matias-05/proyecto-budin",
    image: budin, 
  },

];