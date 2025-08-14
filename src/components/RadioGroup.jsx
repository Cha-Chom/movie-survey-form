export default function RadioGroup({ label, options, value, onChange, error }) {
    return (
      <div>
        <p>{label}</p>
        {options.map((opt, index) => (
          <label key={index}>
            <input
              type="radio"
              name="movie"
              value={opt.title}
              checked={value === opt.title}
              onChange={onChange}
            />
            {opt.title} ({opt.year}) - {opt.director}
          </label>
        ))}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  }
  