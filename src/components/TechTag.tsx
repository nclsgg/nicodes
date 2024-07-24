import { technologiesInfo } from '@/utils/technologies';

interface TechTagProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export default function TechTag({ name, size = 'sm' }: TechTagProps) {
  const { color, icon, url } = technologiesInfo[name];
  return (
    <>
      {url === '#' ? (
        <div
          className={`flex items-center gap-2 ${color} px-2 py-1 rounded-full text-white`}
        >
          {icon}
          <span className={`text-${size} drop-shadow-text`}>{name}</span>
        </div>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 w-full"
        >
          <div
            className={`flex w-full items-center gap-2 ${color} px-2 py-1 rounded-full text-white`}
          >
            <div className="drop-shadow-text">
              {icon}
            </div>
            <span className={`text-${size} drop-shadow-text`}>{name}</span>
          </div>
        </a>
      )}
    </>
  );
}
