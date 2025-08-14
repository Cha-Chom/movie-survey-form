export default function Summary({ data, onRestart }) {
  return (
    <div className="bg-neutral-800 shadow-lg rounded-lg p-6 max-w-lg mx-auto border border-neutral-700 text-white">
      <h2 className="text-xl font-bold mb-4 text-amber-400">Summary of submitted information:</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>E-mail:</strong> {data.email}</p>
      <p><strong>Selected movies:</strong> {data.selectedMovie}</p>
      <p><strong>Comment:</strong> {data.comment || "-"}</p>
      <button
        onClick={onRestart}
        className="cursor-pointer mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
      >
        Start a new survey
      </button>
    </div>
  );
}
