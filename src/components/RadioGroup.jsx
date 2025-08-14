export default function RadioGroup({ label, options, value, onChange, error }) {
  return (
    <div className="mb-4">
      <p className="font-medium mb-2 text-amber-400">{label}</p>
      <div className="grid grid-cols-2 gap-4">
        {options.map((opt, index) => (
          <label
            key={index}
            className={`cursor-pointer rounded-lg border overflow-hidden transition
              ${value === opt.title ? "border-amber-400 ring-2 ring-amber-400" : "border-neutral-700"}
              hover:border-amber-400`}
          >
            <img src={opt.poster} alt={opt.title} className="object-cover " />
            <div className="p-3">
              <p className="text-lg font-semibold text-white">{opt.title}</p>
              <p className="text-sm text-gray-400">{opt.year} • {opt.director}</p>
              <input
                type="radio"
                name="movie"
                value={opt.title}
                checked={value === opt.title}
                onChange={onChange}
                className="hidden"
              />
            </div>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
