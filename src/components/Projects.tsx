import dynamic from "next/dynamic";
import ProjectsSliders from "./ProjectsSlider";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

export default function Projects() {
  const DynamicProjectsSlider = dynamic(() => import('./ProjectsSlider'), { 
    loading: () => <><ProjectCardSkeleton/></>,
    ssr: false
  })

  const projectsArr = [
    {
      name: 'API em Go',
      description: 'Uma API em Go com CRUD de emails para consumo',
      tags: ["Golang", "MongoDB", "Docker"],
      url: '#',
      image: 'https://i.ibb.co/9s2Ct63/GoAPI.png'
    },
    {
      name: 'Serviço de Autenticação - Boilerplate',
      description: 'Cansado de criar um serviço de autenticação sempre que começa um novo projeto? Esse boilerplate foi feito para isso.',
      tags: ["NestJS", "OAuth2", "PostgreSQL", "JWT"],
      url: 'https://github.com/nclsgg/ncls-auth-service',
      image: 'https://i.ibb.co/L0fP6pX/Oauth-Nestjs.png'
    },
    {
      name: 'Twitter Video Downloader',
      description: 'Sabe quando você baixar algum video do twitter de forma rápida e não sabe como? Eu desenvolvi uma ferramenta em CLI para isso.',
      tags: ["Python", "CLI", "Web Scraping"],
      url: 'https://github.com/nclsgg/download-video-social-media',
      image: 'https://i.ibb.co/P6t4qK2/pythonxdownloader.png'
    },
  ]
  
  return (
    <div className="flex justify-center">
      <DynamicProjectsSlider projects={projectsArr} />
    </div>
  )
}