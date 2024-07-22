import { FaReact } from "react-icons/fa"
import { SiExpress, SiGo, SiJavascript, SiMongodb, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiTailwindcss, SiTypescript } from "react-icons/si"
import Nicolas from "../../public/nicolas.png"
import TechTag from "./TechTag"
import Image from "next/image"

export default function Resume() {
  const techs = [
    {
      name: "React",
      color: "bg-blue-500",
      icon: <FaReact />,
      url: "https://reactjs.org"
    },
    {
      name: "Next.js",
      color: "bg-gray-900",
      icon: <SiNextdotjs />,
      url: "https://nextjs.org"
    },
    {
      name: "TypeScript",
      color: "bg-blue-700",
      icon: <SiTypescript />,
      url: "https://www.typescriptlang.org",
    },
    {
      name: "JavaScript",
      color: "bg-yellow-400",
      icon: <SiJavascript />,
      url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    {
      name: "Tailwind",
      color: "bg-blue-400",
      icon: <SiTailwindcss />,
      url: "https://tailwindcss.com",
    },
    {
      name: "Node.js",
      color: "bg-green-500",
      icon: <SiNodedotjs />,
      url: "https://nodejs.org",
    },
    {
      name: "Express",
      color: "bg-black",
      icon: <SiExpress />,
      url: "https://expressjs.com",
    },
    {
      name: "NestJS",
      color: "bg-red-500",
      icon: <SiNestjs />,
      url: "https://nestjs.com",
    },
    {
      name: "Golang",
      color: "bg-blue-400",
      icon: <SiGo />,
      url: "https://golang.org",
    },
    {
      name: "Python",
      color: "bg-yellow-500",
      icon: <SiPython />,
      url: "https://www.python.org",
    },
    {
      name: "MongoDB",
      color: "bg-green-500",
      icon: <SiMongodb />,
      url: "https://www.mongodb.com",
    },
    {
      name: "PostgreSQL",
      color: "bg-orange-500",
      icon: <SiPostgresql />,
      url: "https://www.postgresql.org",
    }
  ]

  const infiniteScrollTechTags = [...techs, ...techs]

  return (
    <div className="flex flex-col-reverse gap-5 md:flex-row justify-between items-center">
      <section className="profile flex flex-col gap-5 w-2/3">
        <section className="flex flex-col">
          <h2 className="subtitle">Nicolas Gomes Guadagno</h2>
          <h1 className="title text-ncls-purple font-bold">Full Stack Developer</h1>
        </section>
        <section className="technologies flex relative mb-4 overflow-x-hidden">
          <div className="flex gap-5 animate-scroll hover:animation-paused">
            {infiniteScrollTechTags.map((tech, index) => (
            <div key={index} className="technologies__item flex-shring-0">
              <TechTag key={index} name={tech.name} color={tech.color} icon={tech.icon} url={tech.url} />
            </div>
            ))}
          </div>
        </section>
        <section className="resume flex gap-5">
          <p>Domínio pleno em tecnologias como ReactJS, NextJS e NodeJS. Aperfeiçoando habilidades em Python</p>
          <p>Experiência em aplicações em produção e contato direto com o cliente.</p>
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