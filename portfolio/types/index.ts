export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  link?: string;
  github?: string;
  video?: string;
  website?: string;
  linkedin?: string;
  image?: string;
  featured?: boolean;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email" | "researchgate" | "medium";
  url: string;
  label: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}
