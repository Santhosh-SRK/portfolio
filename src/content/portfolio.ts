import type { Experience, Project, Skill } from '../types/portfolio.types';

export const profile = {
  name: 'Santhosh',
  shortName: 'Santhosh',
  role: 'Frontend Engineer',
  summary:
    'Frontend Engineer with 4.9 years of experience shipping production-grade React and Angular applications across IoT, analytics, and enterprise products.',
  focus:
    'Delivered measurable improvements in page-load speed, state architecture, UI consistency, and real-time dashboard performance while working closely with backend and product teams.',
  currentLearning:
    'Recently started exploring Vue.js to broaden my component-driven frontend skill set alongside my React and Angular experience.',
  location: 'Bengaluru, India',
  email: 'devsanthosh008@gmail.com',
  phone: '+91-6361863809',
  githubUrl: 'https://github.com/Santhosh-SRK',
  linkedInUrl: 'https://linkedin.com/in/santhosh-ramachandra/',
  portfolioUrl: 'https://santhosh-srk.github.io/portfolio/',
  resumePath: '/resume.pdf',
  highlights: [
    { label: 'Experience', value: '4.9 Years' },
    { label: 'Page Load Improvement', value: '40%' },
    { label: 'Users Served', value: '10K+' },
  ],
};

export const skills: Skill[] = [
  { name: 'React', level: 92, category: 'Frontend' },
  { name: 'Angular', level: 88, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 92, category: 'Frontend' },
  { name: 'HTML, CSS, SCSS', level: 90, category: 'Frontend' },
  { name: 'MUI / Angular Material', level: 88, category: 'Frontend' },
  { name: 'RxJS / NgRx', level: 82, category: 'Frontend' },
  { name: 'REST APIs', level: 82, category: 'Backend' },
  { name: 'Node.js', level: 68, category: 'Backend' },
  { name: 'Storybook', level: 78, category: 'Tools' },
  { name: 'Vitest / RTL', level: 76, category: 'Tools' },
  { name: 'Git / GitHub', level: 88, category: 'Tools' },
  { name: 'Vite / Build Tooling', level: 82, category: 'Tools' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'IoT Monitoring Dashboard',
    description:
      'Production dashboard for live sensor streams with scalable Zustand state, reusable MUI components, and performance tuning for real-time updates.',
    techStack: ['React', 'TypeScript', 'Zustand', 'MUI', 'REST API'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    githubUrl: 'https://github.com/Santhosh-SRK/portfolio',
    liveUrl: 'https://santhosh-srk.github.io/portfolio/',
    category: 'React',
    featured: true,
  },
  {
    id: '2',
    title: 'Text Analytics Platform',
    description:
      'Analytics product interface focused on code splitting, Redux Toolkit architecture, and real-time charting to speed up analyst decision-making.',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Recharts', 'Webpack'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    githubUrl: 'https://github.com/Santhosh-SRK',
    liveUrl: '',
    category: 'React',
    featured: true,
  },
  {
    id: '3',
    title: 'Healthcare and Ticketing Interfaces',
    description:
      'Responsive React and Angular interfaces for product modules used by 10,000+ end users, with strong focus on accessibility and reusable UI patterns.',
    techStack: ['React', 'Angular', 'TypeScript', 'REST API', 'Component Library'],
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',
    githubUrl: 'https://github.com/Santhosh-SRK',
    liveUrl: '',
    category: 'Angular',
    featured: true,
  },
  {
    id: '4',
    title: 'Personal Finance Dashboard',
    description:
      'Responsive expense dashboard concept with salary planning, yearly savings goal tracking, Recharts visualizations, and Zustand-powered state for clean, scalable data flow.',
    techStack: ['React', 'TypeScript', 'Zustand', 'Recharts', 'Responsive UI'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    githubUrl: 'https://github.com/Santhosh-SRK',
    liveUrl: '',
    category: 'React',
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Software Engineer - UI Developer',
    company: 'iPumpNet',
    duration: 'Dec 2025 - Present',
    description: [
      'Architected global and modular Zustand state for live sensor streams across 15+ dashboard components.',
      'Built a reusable MUI component library adopted across 3 product modules, reducing sprint build time by around 35%.',
      'Optimized re-render cycles and lazy loading to sustain smooth real-time dashboards while reducing initial bundle size by 28%.',
    ],
    current: true,
  },
  {
    id: '2',
    role: 'Web Developer',
    company: 'Textual Analytics Solution',
    duration: 'Jan 2024 - Dec 2025',
    description: [
      'Reduced page load time by 40% through code splitting, lazy loading, and bundle analysis.',
      'Rebuilt Redux Toolkit state architecture, cutting boilerplate and improving onboarding speed for new engineers.',
      'Integrated real-time dashboards over WebSocket feeds and improved analyst time-to-insight by 30%.',
    ],
    current: false,
  },
  {
    id: '3',
    role: 'Associate Software Engineer',
    company: 'Starmark Software',
    duration: 'Jan 2021 - Sep 2023',
    description: [
      'Delivered responsive React and Angular UIs for ticketing and healthcare products serving 10,000+ end users.',
      'Owned frontend and C# REST API integration, reducing API mismatch defects by 45% over 18 months.',
      'Built a reusable component library that reduced UI inconsistency tickets by 50% after launch.',
    ],
    current: false,
  },
];
