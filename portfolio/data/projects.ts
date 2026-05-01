import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Project One",
    description: "A brief description of your first project",
    longDescription: "Detailed description of what this project does, the problem it solved, and the impact it had.",
    technologies: ["React", "TypeScript", "Node.js"],
    link: "#",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "Project Two",
    description: "A brief description of your second project",
    longDescription: "Detailed description of what this project does, the problem it solved, and the impact it had.",
    technologies: ["Next.js", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "3",
    title: "Project Three",
    description: "A brief description of your third project",
    longDescription: "Detailed description of what this project does, the problem it solved, and the impact it had.",
    technologies: ["Python", "FastAPI", "Docker"],
    link: "#",
    github: "https://github.com",
  },
];
