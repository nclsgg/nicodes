export default function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col w-2/3 md:w-full animate-pulse">
      <div className="flex flex-col w-full md:w-1/2 animate-pulse">
        <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <section className="bg-dark-white dark:bg-light-black p-2 h-fit">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="flex gap-5 mt-5">
            <div className="flex gap-2 items-center bg-gray-300 dark:bg-gray-700 rounded-md px-2 py-1 w-32 h-10"></div>
            <div className="flex gap-2 items-center bg-gray-300 dark:bg-gray-700 rounded-md px-2 py-1 w-32 h-10"></div>
          </div>
          <div className="flex gap-3 flex-wrap mt-5">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="w-20 h-8 bg-gray-300 dark:bg-gray-700 rounded"
              ></div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
