export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email" | "researchgate";
  url: string;
  label: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}
