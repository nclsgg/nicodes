interface SeparatorProps {
  name?: string
}

export default function Separator({
  name = '',
}: SeparatorProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center my-4 w-2/3 md:w-full">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">{name}</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    </div>
  )
}