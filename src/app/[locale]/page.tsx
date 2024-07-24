import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Separator from '@/components/Separator';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('separator');

  return (
    <main className="flex flex-col gap-10 md:gap-14">
      <Resume />
      <Separator name={t('projects')} />
      <Projects />
      <Separator name={t('contact')} />
      <ContactMe />
      <Separator name={t('aboutMe')} />
      <AboutMe />
    </main>
  );
}
