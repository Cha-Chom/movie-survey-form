export default function TextField({ label, value, onChange, error, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1 text-amber-400">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 rounded-md bg-neutral-900 text-white focus:outline-none focus:ring-2 
          ${error ? "border-red-500 focus:ring-red-300" : "border-neutral-700 focus:ring-amber-300"} border`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
