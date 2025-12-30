import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gray-900 mb-4">404</h1>

        <h2 className="text-2xl font-semibold mb-3">
          Page not found
        </h2>

        <p className="text-gray-600 mb-8">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Link
          to="/"
          className="
            inline-flex items-center
            px-6 py-3
            border border-gray-900
            text-gray-900
            font-semibold
            rounded-lg
            hover:bg-gray-900
            hover:text-white
            transition
          "
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
