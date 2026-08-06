"use client";

import { useState } from "react";

export default function PlateNumberCalculator() {
  const [tr, setTR] = useState("");
  const [width, setWidth] = useState("");
  const [result, setResult] = useState<number | null>(null);

  function calculate() {
    const retention = parseFloat(tr);
    const peakWidth = parseFloat(width);

    if (
      isNaN(retention) ||
      isNaN(peakWidth) ||
      peakWidth <= 0
    ) {
      alert("Please enter valid values.");
      return;
    }

    const plates = 16 * Math.pow(retention / peakWidth, 2);
    setResult(plates);
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border p-8 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Plate Number (N)
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          className="border rounded-lg p-3"
          placeholder="Retention Time (tR)"
          value={tr}
          onChange={(e) => setTR(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Peak Width at Base (W)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />

      </div>

      <button
        onClick={calculate}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Calculate Plate Number
      </button>

      {result !== null && (
        <div className="mt-8 bg-slate-100 rounded-xl p-6">

          <h3 className="text-xl font-bold">
            Theoretical Plates (N)
          </h3>

          <p className="text-4xl font-bold mt-3">
            {Math.round(result).toLocaleString()}
          </p>

          <p className="mt-4 font-semibold">
            {result >= 2000
              ? "🟢 Good column efficiency"
              : "🟠 Low column efficiency"}
          </p>

        </div>
      )}

    </div>
  );
}