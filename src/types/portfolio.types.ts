export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'React' | 'Angular';
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Tools' | 'Backend';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  current: boolean;
}
