import { useState } from "react";
import SurveyForm from "./components/SurveyForm";
import Summary from "./components/Summary";

export default function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleRestart = () => {
    setSubmittedData(null);
  };

  return (
    <div>
      <h1>แบบสำรวจความคิดเห็นภาพยนตร์</h1>
      {submittedData ? (
        <Summary data={submittedData} onRestart={handleRestart} />
      ) : (
        <SurveyForm onSubmit={setSubmittedData} />
      )}
    </div>
  );
}

