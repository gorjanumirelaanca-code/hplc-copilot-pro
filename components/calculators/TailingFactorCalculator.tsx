"use client";

import { useState } from "react";

export default function TailingFactorCalculator() {
  const [w005, setW005] = useState("");
  const [f, setF] = useState("");
  const [result, setResult] = useState<number | null>(null);

  function calculate() {
    const width = parseFloat(w005);
    const front = parseFloat(f);

    if (
      isNaN(width) ||
      isNaN(front) ||
      width <= 0 ||
      front <= 0
    ) {
      alert("Please enter valid values.");
      return;
    }

    const tf = width / (2 * front);
    setResult(tf);
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border p-8 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Tailing Factor (Tf)
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          className="border rounded-lg p-3"
          placeholder="Peak Width at 5% Height (W0.05)"
          value={w005}
          onChange={(e) => setW005(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Front Half Width (F)"
          value={f}
          onChange={(e) => setF(e.target.value)}
        />

      </div>

      <button
        onClick={calculate}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Calculate Tailing Factor
      </button>

      {result !== null && (
        <div className="mt-8 bg-slate-100 rounded-xl p-6">

          <h3 className="text-xl font-bold">
            Tailing Factor
          </h3>

          <p className="text-4xl font-bold mt-3">
            {result.toFixed(2)}
          </p>

          <p className="mt-4 font-semibold">
            {result <= 2
              ? "🟢 Acceptable peak symmetry"
              : "🟠 Excessive peak tailing"}
          </p>

        </div>
      )}

    </div>
  );
}