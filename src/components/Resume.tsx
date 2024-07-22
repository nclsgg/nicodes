import { FaReact } from "react-icons/fa"
import { SiExpress, SiGo, SiJavascript, SiMongodb, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiTailwindcss, SiTypescript } from "react-icons/si"
import Nicolas from "../../public/nicolas.png"
import TechTag from "./TechTag"
import Image from "next/image"

export default function Resume() {
  const techs = ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "Node.js", "Express", "NestJS", "Golang", "Python", "PostgreSQL", "MongoDB"]

  const infiniteScrollTechTags = [...techs, ...techs]

  return (
    <div className="flex flex-col-reverse gap-5 items-center md:flex-row md:justify-between md:items-start">
      <section className="profile flex flex-col gap-5 w-2/3">
        <section className="flex flex-col">
          <h2 className="subtitle">Nicolas Gomes Guadagno</h2>
          <h1 className="title text-ncls-purple font-bold">Full Stack Developer</h1>
        </section>
        <section className="technologies flex relative mb-4 overflow-x-hidden rounded-full">
          <div className="flex gap-5 animate-scroll hover:animation-paused">
            {infiniteScrollTechTags.map((tech, index) => (
            <div key={index} className="technologies__item flex-shring-0">
              <TechTag key={index} name={tech}/>
            </div>
            ))}
          </div>
        </section>
        <section className="resume flex flex-col gap-5 md:flex-row">
          <p>Mais de 4 anos de experiência em desenvolvimento de websites, APIs, serviços e scripts, com as tecnologias mais utilizadas do mercado, incluindo React, Golang e NodeJS. Destaco-me pela excelente comunicação e capacidade de aprendizado rápido, sempre buscando inovar e otimizar soluções.</p>
          <p>Experiência em aplicações em produção com grande fluxo de requisições e consumo de dados e contato direto com o cliente.</p>
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
  )
}