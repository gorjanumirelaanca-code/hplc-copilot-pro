"use client";

import { calculateResolution } from "@/lib/ai/resolution";
import { predictRetention } from "@/lib/ai/retention";

interface Props {
  organic: number;
  flow: number;
  temperature: number;
}

export default function ResolutionCard({
  organic,
  flow,
  temperature,
}: Props) {

  const peak1 = predictRetention(
    {
      molecularWeight: 180,
      logP: 2.5,
      pKa: 4.2,
      tpsa: 42,
      hBondDonors: 1,
      hBondAcceptors: 3,
    },
    {
      organic,
      flow,
      temperature,
      pH: 3.0,
    }
  );

  const peak2 = predictRetention(
    {
      molecularWeight: 220,
      logP: 3.2,
      pKa: 4.8,
      tpsa: 36,
      hBondDonors: 0,
      hBondAcceptors: 2,
    },
    {
      organic: Math.max(5, organic - 5),
      flow,
      temperature,
      pH: 3.0,
    }
  );

  const plates = 8000;

  const resolution = calculateResolution({
    k1: peak1.k,
    k2: peak2.k,
    plates,
  });

  return (
    <div className="bg-white rounded-xl shadow border border-slate-200 p-6">

      <h2 className="text-2xl font-bold mb-6">
        Separation Metrics
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>k₁</span>
          <strong>{peak1.k.toFixed(2)}</strong>
        </div>

        <div className="flex justify-between">
          <span>k₂</span>
          <strong>{peak2.k.toFixed(2)}</strong>
        </div>

        <div className="flex justify-between">
          <span>Selectivity (α)</span>
          <strong>{resolution.alpha}</strong>
        </div>

        <div className="flex justify-between">
          <span>Resolution (Rs)</span>
          <strong>{resolution.rs}</strong>
        </div>

        <div className="flex justify-between">
          <span>Theoretical Plates (N)</span>
          <strong>{plates.toLocaleString()}</strong>
        </div>

      </div>

    </div>
  );
}