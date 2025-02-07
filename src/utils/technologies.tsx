import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGnometerminal,
  SiGo,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiScrapy,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandOauth } from 'react-icons/tb';

interface ITechnologiesInfo {
  [key: string]: {
    name: string;
    icon: JSX.Element;
    color: string;
    url: string;
    type: string;
  };
}

export const technologies: string[] = [
  // Tecnologias Frontend
  'React',
  'Styled Components',
  'Redux',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind',

  // Tecnologias Backend
  'Node.js',
  'Express',
  'NestJS',
  'Golang',
  'Python',

  // Bancos de Dados
  'MongoDB',
  'PostgreSQL',

  // Demais
  'Git',
  'Docker',
  'OAuth2',
  'JWT',
  'CLI',
  'Web Scraping',
];

export const technologiesInfo: ITechnologiesInfo = {
  React: {
    name: 'React',
    icon: <SiReact />,
    color: 'bg-blue-700', // Escurecido para melhor contraste
    url: 'https://reactjs.org',
    type: 'frontend',
  },
  'Styled Components': {
    name: 'Styled Components',
    icon: <SiStyledcomponents />,
    color: 'bg-pink-700', // Escurecido para melhor contraste
    url: 'https://styled-components.com',
    type: 'frontend',
  },
  Redux: {
    name: 'Redux',
    icon: <SiRedux />,
    color: 'bg-purple-700', // Escurecido para melhor contraste
    url: 'https://redux.js.org',
    type: 'frontend',
  },
  'Next.js': {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    color: 'bg-gray-800', // Escurecido para melhor contraste
    url: 'https://nextjs.org',
    type: 'frontend',
  },
  TypeScript: {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'bg-blue-700', // Escurecido para melhor contraste
    url: 'https://www.typescriptlang.org',
    type: 'frontend',
  },
  JavaScript: {
    name: 'JavaScript',
    icon: <SiJavascript />,
    color: 'bg-yellow-700', // Escurecido para melhor contraste
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
    type: 'frontend',
  },
  Tailwind: {
    name: 'Tailwind',
    icon: <SiTailwindcss />,
    color: 'bg-blue-600', // Escurecido para melhor contraste
    url: 'https://tailwindcss.com',
    type: 'frontend',
  },
  'Node.js': {
    name: 'Node.js',
    icon: <SiNodedotjs />,
    color: 'bg-green-600', // Escurecido para melhor contraste
    url: 'https://nodejs.org',
    type: 'backend',
  },
  Express: {
    name: 'Express',
    icon: <SiExpress />,
    color: 'bg-black', // Mantido como preto
    url: 'https://expressjs.com',
    type: 'backend',
  },
  NestJS: {
    name: 'NestJS',
    icon: <SiNestjs />,
    color: 'bg-red-700', // Escurecido para melhor contraste
    url: 'https://nestjs.com',
    type: 'backend',
  },
  Golang: {
    name: 'Golang',
    icon: <SiGo />,
    color: 'bg-blue-700', // Escurecido para melhor contraste
    url: 'https://golang.org',
    type: 'backend',
  },
  Python: {
    name: 'Python',
    icon: <SiPython />,
    color: 'bg-yellow-700', // Escurecido para melhor contraste
    url: 'https://www.python.org',
    type: 'backend',
  },
  MongoDB: {
    name: 'MongoDB',
    icon: <SiMongodb />,
    color: 'bg-green-700', // Escurecido para melhor contraste
    url: 'https://www.mongodb.com',
    type: 'database',
  },
  PostgreSQL: {
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
    color: 'bg-orange-600', // Escurecido para melhor contraste
    url: 'https://www.postgresql.org',
    type: 'database',
  },
  Git: {
    name: 'Git',
    icon: <SiGit />,
    color: 'bg-red-600', // Escurecido para melhor contraste
    url: 'https://git-scm.com',
    type: 'others',
  },
  Docker: {
    name: 'Docker',
    icon: <SiDocker />,
    color: 'bg-blue-700', // Escurecido para melhor contraste
    url: 'https://www.docker.com',
    type: 'others',
  },
  OAuth2: {
    name: 'OAuth2',
    icon: <TbBrandOauth />,
    color: 'bg-gray-800', // Escurecido para melhor contraste
    url: 'https://oauth.net/2/',
    type: 'others',
  },
  JWT: {
    name: 'JWT',
    icon: <SiJsonwebtokens />,
    color: 'bg-gray-800', // Escurecido para melhor contraste
    url: 'https://jwt.io',
    type: 'others',
  },
  CLI: {
    name: 'CLI',
    icon: <SiGnometerminal />,
    color: 'bg-gray-800', // Escurecido para melhor contraste
    url: '#',
    type: 'others',
  },
  'Web Scraping': {
    name: 'Web Scraping',
    icon: <SiScrapy />,
    color: 'bg-orange-600', // Escurecido para melhor contraste
    url: '#',
    type: 'others',
  },
};

export function getTechnologiesByType(type: string | null) {
  if (!type) {
    return Object.values(technologiesInfo);
  }
  return Object.values(technologiesInfo).filter((tech) => tech.type === type);
}
