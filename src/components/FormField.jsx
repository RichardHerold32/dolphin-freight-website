export default function FormField({ label, error, variant = "default", ...props }) {
  const styles = variant === "compact"
    ? "px-3 py-2 rounded-lg"
    : "px-4 py-3 rounded-xl";

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <input
        {...props}
        className={`w-full border text-sm focus:outline-none focus:ring-4 transition-all ${styles} ${
          error
            ? "border-red-400 focus:ring-red-100 focus:border-red-500"
            : "border-gray-200 focus:ring-blue-100 focus:border-blue-600"
        }`}
      />
      {error && <p className="text-xs text-red-500 mt-1.5 font-medium">{error}</p>}
    </div>
  );
}
