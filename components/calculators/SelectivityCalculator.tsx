"use client";

import { useState } from "react";

export default function SelectivityCalculator() {
  const [k1, setK1] = useState("");
  const [k2, setK2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  function calculate() {
    const first = parseFloat(k1);
    const second = parseFloat(k2);

    if (
      isNaN(first) ||
      isNaN(second) ||
      first <= 0 ||
      second <= first
    ) {
      alert("k'2 must be greater than k'1.");
      return;
    }

    setResult(second / first);
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border p-8 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Selectivity (α)
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          className="border rounded-lg p-3"
          placeholder="k'1"
          value={k1}
          onChange={(e) => setK1(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="k'2"
          value={k2}
          onChange={(e) => setK2(e.target.value)}
        />

      </div>

      <button
        onClick={calculate}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Calculate Selectivity
      </button>

      {result !== null && (
        <div className="mt-8 bg-slate-100 rounded-xl p-6">

          <h3 className="text-xl font-bold">
            Selectivity
          </h3>

          <p className="text-4xl font-bold mt-3">
            α = {result.toFixed(2)}
          </p>

          <p className="mt-4 font-semibold">
            {result > 1
              ? "🟢 Separation possible"
              : "🔴 No separation"}
          </p>

        </div>
      )}

    </div>
  );
}