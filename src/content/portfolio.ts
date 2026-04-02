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
    title: 'Budget Tracker Dashboard',
    description:
      'Responsive personal finance dashboard with salary planning, savings goals, Recharts analytics, and Zustand-based state designed for scalable product UI.',
    techStack: ['React', 'TypeScript', 'Zustand', 'Recharts', 'MUI'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    githubUrl: 'https://github.com/Santhosh-SRK/budget-tracker-dashboard',
    liveUrl: 'https://santhosh-srk.github.io/budget-tracker-dashboard/',
    category: 'React',
    featured: true,
  },
  {
    id: '2',
    title: 'Bug Buddy',
    description:
      'Developer networking concept inspired by swipe-based matching. Currently in project planning while I continue exploring Node.js, Express, and MongoDB for the backend direction.',
    techStack: ['React', 'Node.js (Exploring)', 'Express', 'MongoDB', 'Planning'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
    githubUrl: 'https://github.com/Santhosh-SRK',
    liveUrl: '',
    category: 'Full Stack',
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
