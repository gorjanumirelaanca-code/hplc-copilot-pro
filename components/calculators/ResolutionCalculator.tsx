"use client";

import { useState } from "react";
import ResultCard from "./ResultCard";

export default function ResolutionCalculator() {
  const [tr1, setTr1] = useState("");
  const [tr2, setTr2] = useState("");
  const [w1, setW1] = useState("");
  const [w2, setW2] = useState("");

  const [result, setResult] = useState<number | null>(null);

  function calculate() {
    const t1 = parseFloat(tr1);
    const t2 = parseFloat(tr2);
    const width1 = parseFloat(w1);
    const width2 = parseFloat(w2);

    if (
      isNaN(t1) ||
      isNaN(t2) ||
      isNaN(width1) ||
      isNaN(width2) ||
      width1 <= 0 ||
      width2 <= 0
    ) {
      alert("Please enter valid values.");
      return;
    }

    const rs = (2 * (t2 - t1)) / (width1 + width2);

    setResult(rs);
  }

  const status =
    result === null
      ? null
      : result >= 2
      ? {
          title: "PASS",
          color: "bg-green-100 border-green-500",
          text: "text-green-700",
          message: "Baseline separation achieved.",
        }
      : result >= 1.5
      ? {
          title: "WARNING",
          color: "bg-yellow-100 border-yellow-500",
          text: "text-yellow-700",
          message: "Partial baseline separation.",
        }
      : {
          title: "FAIL",
          color: "bg-red-100 border-red-500",
          text: "text-red-700",
          message: "Peaks are not adequately resolved.",
        };

  return (
    <div className="bg-white rounded-xl border shadow-lg p-8">

      <h2 className="text-3xl font-bold mb-2">
        Resolution Calculator
      </h2>

      <p className="text-gray-500 mb-8">
        Calculate chromatographic resolution (Rs)
      </p>

      <div className="grid grid-cols-2 gap-5">

        <input
          className="border rounded-lg p-3"
          placeholder="Peak 1 Retention Time"
          value={tr1}
          onChange={(e) => setTr1(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Peak 2 Retention Time"
          value={tr2}
          onChange={(e) => setTr2(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Peak Width 1"
          value={w1}
          onChange={(e) => setW1(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Peak Width 2"
          value={w2}
          onChange={(e) => setW2(e.target.value)}
        />

      </div>

      <button
        onClick={calculate}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
      >
        Calculate Resolution
      </button>

      {result !== null && status && (

  <ResultCard
    title="Resolution (Rs)"
    value={result.toFixed(2)}
    status={status.title as "PASS" | "WARNING" | "FAIL"}
    interpretation={status.message}
    recommendation={
      status.title === "PASS"
        ? "Current chromatographic separation is acceptable."
        : status.title === "WARNING"
        ? "Consider optimizing selectivity or efficiency."
        : "Adjust mobile phase, stationary phase, or gradient conditions to improve separation."
    }
  />

)}
    </div>
  );
}