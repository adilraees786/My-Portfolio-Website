
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Design' | 'Tools';
}

export interface NavItem {
  label: string;
  href: string;
}
