
import { Project, Skill, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Legacy Tech Platform',
    description: 'Developed scalable and responsive web applications using React.js and Next.js with a focus on Server-Side Rendering (SSR) for improved SEO and page speed.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    tags: ['Next.js', 'SSR', 'Tailwind CSS', 'Astro.js'],
    link: '#',
  },
  {
    id: '2',
    title: 'Linkitsoft Client Projects',
    description: 'Converted complex Figma designs into pixel-perfect, responsive React components for production-level products and diverse client-based projects.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2340&auto=format&fit=crop',
    tags: ['React.js', 'Figma', 'Optimization', 'Responsive'],
    link: '#',
  },
  {
    id: '3',
    title: 'Modular API Integration',
    description: 'Systematic integration of RESTful APIs and development of reusable, modular UI components to optimize frontend performance across large-scale applications.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
    tags: ['Zustand', 'REST API', 'JavaScript', 'Performance'],
    link: '#',
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React.js / Next.js', icon: '⚛️', category: 'Frontend' },
  { name: 'JavaScript (ES6+)', icon: '📜', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
  { name: 'Material UI / Shadcn', icon: '🏗️', category: 'Frontend' },
  // Backend / Architecture
  { name: 'SSR / SSG', icon: '⚡', category: 'Backend' },
  { name: 'SEO Optimization', icon: '🔍', category: 'Backend' },
  { name: 'Zustand / Redux', icon: '📦', category: 'Backend' },
  // Design
  { name: 'Figma to UI', icon: '🖋️', category: 'Design' },
  { name: 'UI/UX Collaboration', icon: '🤝', category: 'Design' },
  // Tools
  { name: 'Git / GitHub', icon: '🐙', category: 'Tools' },
  { name: 'VS Code / Cursor AI', icon: '💻', category: 'Tools' },
];

export const EXPERIENCE = [
  {
    company: 'Legacy Tech',
    role: 'React.js Developer',
    period: 'Jul 2025 – Present',
    location: 'Karachi',
  },
  {
    company: 'Linkitsoft',
    role: 'Frontend Developer',
    period: 'Jan 2025 – Jun 2025',
    location: 'Karachi',
  }
];

export const EDUCATION = {
  degree: 'BS Computer Science (In Progress)',
  institute: 'FUUAST, Karachi',
  period: 'Feb 2023 – Present',
  graduation: 'Expected 2027'
};

export const CERTIFICATIONS = [
  'Frontend Development – Linkitsoft',
  'MERN Stack Development – SMIT'
];
