export default function BlogPostLoading() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="h-10 w-32 bg-gray-200 rounded-md mb-6 animate-pulse"></div>

        <div className="space-y-6">
          <div className="h-12 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>

          <div className="flex space-x-4">
            <div className="h-6 bg-gray-200 rounded-md w-32 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-md w-40 animate-pulse"></div>
          </div>

          <div className="w-full h-80 bg-gray-200 rounded-lg animate-pulse"></div>

          <div className="space-y-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-6 bg-gray-200 rounded-md w-full animate-pulse"
              ></div>
            ))}
          </div>

          <div className="h-40 bg-gray-200 rounded-md w-full animate-pulse"></div>

          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-6 bg-gray-200 rounded-md w-full animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
