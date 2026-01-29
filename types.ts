
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
  category: 'Languages' | 'Framework/Libraries' | 'State Management' | 'Architecture' | 'Tools' | 'Design';
}

export interface NavItem {
  label: string;
  href: string;
}
