import { technologies } from '@/utils/technologies';
import TechnologyCard from './Card';

export default function Technologies() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full items-center justify-items-center grid grid-cols-[repeat(auto-fit,_minmax(176px,_1fr))] gap-5">
        {technologies.map((tech, index) => (
          <TechnologyCard key={index} name={tech} />
        ))}
      </div>
    </div>
  );
}
