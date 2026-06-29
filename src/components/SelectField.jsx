export default function SelectField({ label, options, error, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <select
        {...props}
        className={`w-full border rounded-xl px-4 py-3 bg-white text-sm focus:outline-none focus:ring-4 transition-all ${
          error
            ? "border-red-400 focus:ring-red-100 focus:border-red-500"
            : "border-gray-200 focus:ring-blue-100 focus:border-blue-600"
        }`}
      >
        <option value="">Select option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500 mt-1.5 font-medium">{error}</p>}
    </div>
  );
}
