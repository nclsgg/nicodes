import dynamic from 'next/dynamic';
import ProjectCardSkeleton from './Card/Skeleton';
import prisma from '@/prisma';
import { useLocale } from 'next-intl';

export default async function Projects() {
  const locale = useLocale();

  const projects =
    locale === 'en'
      ? await prisma.projectsEN.findMany()
      : await prisma.projectsPT.findMany();

  // console.log(projects);

  const projectsArr = projects.map((project) => {
    return {
      name: project.name,
      description: project.description,
      tags: project.tags.split(','),
      date: project.date,
      url: project.url,
      image: project.image,
    };
  });

  projectsArr.sort((a, b) => {
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
      <DynamicProjectsSlider projects={projectsArr} />
    </div>
  );
}
