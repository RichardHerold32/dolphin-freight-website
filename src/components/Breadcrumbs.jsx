import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  // Don't show breadcrumbs on home page
  if (paths.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <ol className="flex items-center flex-wrap gap-2 text-sm text-gray-600">

          {/* Home */}
          <li>
            <Link to="/" className="hover:text-gray-900 transition">
              Home
            </Link>
          </li>

          {paths.map((path, index) => {
            const to = "/" + paths.slice(0, index + 1).join("/");
            const isLast = index === paths.length - 1;

            return (
              <li key={to} className="flex items-center gap-2">
                <span className="text-gray-400">/</span>

                {isLast ? (
                  <span className="text-gray-900 font-medium capitalize">
                    {decodeURIComponent(path.replace("-", " "))}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="hover:text-gray-900 transition capitalize"
                  >
                    {decodeURIComponent(path.replace("-", " "))}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
