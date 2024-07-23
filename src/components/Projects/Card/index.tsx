import Image from "next/image";
import TechTag from "../../TechTag";

interface ProjectCardProps {
  name: string,
  description: string,
  tags: string[],
  url: string,
  image: string,
}

export default function ProjectCard({
  name,
  description,
  tags,
  url,
  image,
}: ProjectCardProps) {
  return (
    <div className="px-3 py-5">
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col w-full">
        <div className="flex flex-col w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <div className="relative rounded-t-lg">
            <Image src={image} alt={name} width={800} height={800} className="transition-opacity duration-300 hover:opacity-75 rounded-t-lg" />
          </div>
          <section className="bg-dark-white dark:bg-light-black p-2 h-full rounded-b-lg">
            <p>{name}</p>
            <p className="text-gray-500 dark:text-gray-400">{description}</p>
            <div className="flex gap-3 flex-wrap mt-5">
              {tags.map((tag, index) => (
                <div key={index} className="w-fit">
                  <TechTag key={index} name={tag} size="xs" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </a>
    </div>
  )
}