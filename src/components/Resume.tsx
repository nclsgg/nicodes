import Nicolas from '../../public/nicolas.png';
import TechTag from './TechTag';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Resume() {
  const t = useTranslations('resume');
  const techs = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind',
    'Node.js',
    'Express',
    'NestJS',
    'Golang',
    'Python',
    'PostgreSQL',
    'MongoDB',
  ];

  const infiniteScrollTechTags = [...techs, ...techs];

  return (
    <div className="flex flex-col-reverse gap-5 items-center md:flex-row md:justify-between md:items-start">
      <section className="profile flex flex-col gap-5 w-2/3">
        <section className="flex flex-col">
          <h2 className="subtitle">Nicolas Gomes Guadagno</h2>
          <h1 className="title text-ncls-purple font-bold">
            Full Stack Developer
          </h1>
        </section>
        <section className="technologies flex relative mb-4 overflow-x-hidden rounded-full">
          <div className="flex gap-5 animate-scroll hover:animation-paused">
            {infiniteScrollTechTags.map((tech, index) => (
              <div key={index} className="technologies__item flex-shring-0">
                <TechTag key={index} name={tech} />
              </div>
            ))}
          </div>
        </section>
        <section className="resume flex flex-col gap-5 md:flex-row">
          <p>{t('hardSkills')}</p>
          <p>{t('softSkills')}</p>
        </section>
      </section>
      <section>
        <div className="w-48">
          <Image
            src={Nicolas}
            alt="Nicolas Gomes Guadagno"
            className="rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
