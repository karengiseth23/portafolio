export interface Project {
  id: number;
  title: string;
  company: string;

  description: string;
  image: string;
  alt: string;

  category: string;
  technologies: string[];

  role?: string;
  challenge?: string;
  solution?: string;
  results?: string[];

  url?: string;
  github?: string;
  featured?: boolean;
}