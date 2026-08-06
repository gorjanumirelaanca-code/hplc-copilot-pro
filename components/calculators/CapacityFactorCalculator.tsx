"use client";

import { useState } from "react";

export default function CapacityFactorCalculator() {
  const [tR, setTR] = useState("");
  const [t0, setT0] = useState("");
  const [result, setResult] = useState<number | null>(null);

  function calculate() {
    const retention = parseFloat(tR);
    const deadTime = parseFloat(t0);

    if (
      isNaN(retention) ||
      isNaN(deadTime) ||
      deadTime <= 0 ||
      retention <= deadTime
    ) {
      alert("Please enter valid values. Retention time must be greater than dead time.");
      return;
    }

    const k = (retention - deadTime) / deadTime;
    setResult(k);
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Capacity Factor (k')
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          className="border rounded-lg p-3"
          placeholder="Retention Time (tR)"
          value={tR}
          onChange={(e) => setTR(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Dead Time (t₀)"
          value={t0}
          onChange={(e) => setT0(e.target.value)}
        />

      </div>

      <button
        onClick={calculate}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Calculate Capacity Factor
      </button>

      {result !== null && (
        <div className="mt-8 bg-slate-100 rounded-xl p-6">

          <h3 className="text-xl font-bold">
            Capacity Factor (k')
          </h3>

          <p className="text-4xl font-bold mt-3">
            {result.toFixed(2)}
          </p>

          <p className="mt-4 font-semibold">
            {result >= 2 && result <= 10
              ? "🟢 Ideal retention"
              : result < 2
              ? "🟠 Retention too low"
              : "🟠 Retention too high"}
          </p>

        </div>
      )}
    </div>
  );
}