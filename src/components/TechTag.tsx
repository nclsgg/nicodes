interface TechTagProps {
  name: string,
  size?: 'sm' | 'md' | 'lg',
  color: string,
  icon: React.ReactNode
  url: string,
}

export default function TechTag({
  name,
  size = 'sm',
  color,
  icon,
  url
}: TechTagProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
      <div className={`flex items-center gap-2 ${color} px-2 py-1 rounded-full text-white`}>
        {icon}
        <span className={`text-${size}`}>{name}</span>
      </div>
    </a>
  )
}