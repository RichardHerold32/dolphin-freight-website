export default function PageShimmer() {
  return (
    <div className="animate-pulse">
      {/* Hero shimmer */}
      <div className="h-[70vh] w-full bg-gray-200" />

      {/* Content shimmer */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <div className="h-8 w-1/3 bg-gray-200 rounded" />
        <div className="h-4 w-2/3 bg-gray-200 rounded" />

        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-40 bg-gray-200 rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
