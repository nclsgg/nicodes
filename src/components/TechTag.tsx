import { technologiesInfo } from '@/utils/technologies';

interface TechTagProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export default function TechTag({ name, size = 'sm' }: TechTagProps) {
  const { color, icon } = technologiesInfo[name];
  return (
    <div
      className={`flex w-full items-center gap-2 ${color} bg-opacity-70 px-2 py-1 rounded-full text-white`}
    >
      <div className="">{icon}</div>
      <span className={`text-${size}`}>{name}</span>
    </div>
  );
}
