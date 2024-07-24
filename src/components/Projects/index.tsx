import dynamic from 'next/dynamic';
import ProjectCardSkeleton from './Card/Skeleton';
import { sql } from '@vercel/postgres';

export default async function Projects() {
  const { rows: projects } =
    await sql`SELECT id, name, description, tags, date, url, image FROM projects ORDER BY date DESC`;

  const projectsArr = projects.map((project) => {
    return {
      name: project.name,
      description: project.description,
      tags: project.tags,
      date: project.date,
      url: project.url,
      image: project.image,
    };
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
