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
  };
}

export const technologiesInfo: ITechnologiesInfo = {
  React: {
    name: 'React',
    icon: <SiReact />,
    color: 'bg-blue-500',
    url: 'https://reactjs.org',
  },
  'Styled Components': {
    name: 'Styled Components',
    icon: <SiStyledcomponents />,
    color: 'bg-pink-500',
    url: 'https://styled-components.com',
  },
  Redux: {
    name: 'Redux',
    icon: <SiRedux />,
    color: 'bg-purple-500',
    url: 'https://redux.js.org',
  },
  'Next.js': {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    color: 'bg-gray-900',
    url: 'https://nextjs.org',
  },
  TypeScript: {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'bg-blue-700',
    url: 'https://www.typescriptlang.org',
  },
  JavaScript: {
    name: 'JavaScript',
    icon: <SiJavascript />,
    color: 'bg-yellow-400',
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
  },
  Tailwind: {
    name: 'Tailwind',
    icon: <SiTailwindcss />,
    color: 'bg-blue-400',
    url: 'https://tailwindcss.com',
  },
  'Node.js': {
    name: 'Node.js',
    icon: <SiNodedotjs />,
    color: 'bg-green-500',
    url: 'https://nodejs.org',
  },
  Express: {
    name: 'Express',
    icon: <SiExpress />,
    color: 'bg-black',
    url: 'https://expressjs.com',
  },
  NestJS: {
    name: 'NestJS',
    icon: <SiNestjs />,
    color: 'bg-red-500',
    url: 'https://nestjs.com',
  },
  Golang: {
    name: 'Golang',
    icon: <SiGo />,
    color: 'bg-blue-400',
    url: 'https://golang.org',
  },
  Python: {
    name: 'Python',
    icon: <SiPython />,
    color: 'bg-yellow-500',
    url: 'https://www.python.org',
  },
  MongoDB: {
    name: 'MongoDB',
    icon: <SiMongodb />,
    color: 'bg-green-500',
    url: 'https://www.mongodb.com',
  },
  PostgreSQL: {
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
    color: 'bg-orange-500',
    url: 'https://www.postgresql.org',
  },
  Git: {
    name: 'Git',
    icon: <SiGit />,
    color: 'bg-red-500',
    url: 'https://git-scm.com',
  },
  Docker: {
    name: 'Docker',
    icon: <SiDocker />,
    color: 'bg-blue-500',
    url: 'https://www.docker.com',
  },
  OAuth2: {
    name: 'OAuth2',
    icon: <TbBrandOauth />,
    color: 'bg-gray-900',
    url: 'https://oauth.net/2/',
  },
  JWT: {
    name: 'JWT',
    icon: <SiJsonwebtokens />,
    color: 'bg-gray-900',
    url: 'https://jwt.io',
  },
  CLI: {
    name: 'CLI',
    icon: <SiGnometerminal />,
    color: 'bg-gray-900',
    url: '#',
  },
  'Web Scraping': {
    name: 'Web Scraping',
    icon: <SiScrapy />,
    color: 'bg-orange-500',
    url: '#',
  },
};
