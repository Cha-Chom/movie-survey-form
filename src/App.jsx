import { useState } from "react";
import SurveyForm from "./components/SurveyForm";
import Summary from "./components/Summary";

export default function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleRestart = () => {
    setSubmittedData(null);
  };

  return (
    <div className="min-h-screen bg-neutral-900 py-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-8 text-amber-400">
      Favorite Movie Survey
      </h1>
      {submittedData ? (
        <Summary data={submittedData} onRestart={handleRestart} />
      ) : (
        <SurveyForm onSubmit={setSubmittedData} />
      )}
    </div>
  );
}
