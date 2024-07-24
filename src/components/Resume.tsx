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
    'Node.js',
    'Golang',
    'Python',
  ];

  return (
    <div className="flex flex-col-reverse gap-5 items-center lg:flex-row lg:justify-between lg:items-start">
      <section className="profile flex flex-col gap-5 w-full lg:w-3/4">
        <section className="flex flex-col text-center lg:text-left">
          <h2 className="subtitle">Nicolas Gomes Guadagno</h2>
          <h1 className="title text-ncls-purple font-bold">
            Full Stack Developer
          </h1>
        </section>
        <section className="w-full inline-flex flex-nowrap">
          <ul x-ref="technologies" className="grid grid-cols-2 sm:grid-cols-3 xl:flex gap-5 w-full">
            {techs.map((tech, index) => (
              <li key={index} className="technologies__item flex flex-shrink-0">
                <TechTag key={index} name={tech} />
              </li>
            ))}
          </ul>
        </section>
        <section className="resume flex flex-col gap-5 xl:flex-row">
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
