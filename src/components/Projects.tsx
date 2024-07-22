import dynamic from "next/dynamic";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import { sql } from "@vercel/postgres";


export default async function Projects() {
  const { rows } = await sql`SELECT id, name, description, tags, date, url, image FROM projects ORDER BY date DESC`
  
  const projectsArr = rows.map((project) => {
    return {
      name: project.name,
      description: project.description,
      tags: project.tags,
      date: project.date,
      url: project.url,
      image: project.image
    }
  })

  const DynamicProjectsSlider = dynamic(() => import('./ProjectsSlider'), { 
    loading: () => <><ProjectCardSkeleton/></>,
    ssr: false
  })

  return (
    <div className="flex justify-center">
      <DynamicProjectsSlider projects={projectsArr} />
    </div>
  )
}