import dynamic from 'next/dynamic';
import ProjectCardSkeleton from './Card/Skeleton';
import { useLocale } from 'next-intl';
import { projectsEN, projectsPT } from '@/utils/projects';

export default async function Projects() {
  const locale = useLocale();

  const projects = locale === 'en' ? projectsEN : projectsPT;

  projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const DynamicProjectsSlider = dynamic(() => import('./Slider'), {
    loading: () => (
      <>
        <ProjectCardSkeleton />
      </>
    ),
    ssr: false,
  });

  return (
    <div className="flex justify-center">
      <DynamicProjectsSlider projects={projects} />
    </div>
  );
}
