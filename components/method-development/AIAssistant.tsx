"use client";

import { useState } from "react";

export default function AIAssistant() {

  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState("");

  function askAI() {

    if (!question.trim()) return;

    const q = question.toLowerCase();

    if (q.includes("tail"))
      setAnswer(
        "Peak tailing is commonly caused by secondary interactions, incorrect pH, column contamination or overloading."
      );

    else if (q.includes("retention"))
      setAnswer(
        "Retention can be adjusted by changing % organic, pH, stationary phase or gradient slope."
      );

    else if (q.includes("resolution"))
      setAnswer(
        "Increase resolution by reducing gradient slope, increasing column efficiency or changing selectivity."
      );

    else if (q.includes("pressure"))
      setAnswer(
        "High pressure usually indicates blockage, viscous mobile phase or excessive flow rate."
      );

    else

      setAnswer(
        "AI recommendation: review column chemistry, pH, mobile phase composition and gradient profile."
      );

  }

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        AI HPLC Assistant

      </h2>

      <input

        className="w-full border rounded-lg p-3"

        placeholder="Ask anything about HPLC..."

        value={question}

        onChange={(e)=>setQuestion(e.target.value)}

      />

      <button

        onClick={askAI}

        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3"

      >

        Ask AI

      </button>

      {answer && (

        <div className="mt-6 rounded-lg bg-blue-50 p-4">

          {answer}

        </div>

      )}

    </div>

  );

}