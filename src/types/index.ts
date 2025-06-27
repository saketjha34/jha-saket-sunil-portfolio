export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  category: string;
  github?: string;
  demo?: string;
};

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  achievements: string[];
}

export interface TechCategory {
  name: string;
  items: string[];
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}