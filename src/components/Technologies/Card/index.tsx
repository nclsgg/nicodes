import { technologiesInfo } from '@/utils/technologies';

interface TechnologyCardProps {
  name: string;
}

export default function TechnologyCard({ name }: TechnologyCardProps) {
  const { color, icon, url } = technologiesInfo[name];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 w-fit"
    >
      <div
        className={`flex flex-col ${color} p-3 items-center rounded-lg h-32 w-44 justify-center gap-3`}
      >
        <div className="text-white text-3xl">{icon}</div>
        <span className="text-white text-lg text-center font-bold">{name}</span>
      </div>
    </a>
  );
}
