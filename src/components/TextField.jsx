export default function TextField({ label, value, onChange, error, type = "text" }) {
    return (
      <div>
        <label>{label}: </label>
        <input type={type} value={value} onChange={onChange} />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  }
  