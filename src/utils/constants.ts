// Application constants

export const SITE_CONFIG = {
  name: 'Rakshit Bisht',
  title: 'Full Stack Developer',
  email: 'rakshitbisht7@gmail.com',
  phone: '+91 7579202216',
  location: 'Ranikhet, India',
  github: 'https://github.com/rakshitbisht7',
  linkedin: 'https://linkedin.com/in/rakshit-bisht-9b386a255',
} as const;

export const SKILLS = {
  frontend: [
    { name: 'React.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'REST APIs', level: 85 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Docker', level: 65 },
    { name: 'Webpack', level: 70 },
    { name: 'npm/yarn', level: 85 },
  ],
} as const;

export const PROJECTS = [
  {
    id: 1,
    title: 'Game Hub',
    description: 'Developed an interactive website to search and explore various games, with a clean user interface using React.js. Integrated search functionality to filter games based on user preferences.',
    tags: ['React', 'TypeScript', 'CSS', 'API Integration'],
    category: 'web',
    demoUrl: 'https://game-hub-six-coral.vercel.app/',
    githubUrl: 'https://github.com/rakshitbisht7/game-hub',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyfGVufDF8fHx8MTczMTY1OTQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'LUXE E-Commerce Site',
    description: 'Built a full-featured e-commerce platform with product browsing, shopping cart, and checkout functionality. Implemented responsive design and smooth user experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'fullstack',
    demoUrl: 'https://github.com/rakshitbisht7',
    githubUrl: 'https://github.com/rakshitbisht7',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9wcGluZyUyMGJvdXRpcXVlfGVufDF8fHx8MTczMTY1OTUyMnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Created a modern, responsive portfolio website showcasing projects and skills. Features smooth animations, contact form with backend integration, and admin dashboard.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    category: 'web',
    demoUrl: 'https://github.com/rakshitbisht7',
    githubUrl: 'https://github.com/rakshitbisht7',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBkZXNpZ258ZW58MXx8fHwxNzMxNjU5NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
] as const;

export const PROJECT_FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Web Apps', value: 'web' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Mobile', value: 'mobile' },
] as const;
