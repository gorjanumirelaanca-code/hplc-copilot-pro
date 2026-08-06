"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { recommendGradient } from "@/lib/ai";

export default function GradientRecommendation() {

  const { molecule } = useLabStore();

  const gradient = recommendGradient({

    molecularWeight: Number(molecule.molecularWeight) || 250,

    logP: Number(molecule.xlogP) || 2,

    pKa: 4.5,

    tpsa: Number(molecule.tpsa) || 40,

    hBondDonors: Number(molecule.hBondDonors) || 1,

    hBondAcceptors: Number(molecule.hBondAcceptors) || 2

  });

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        AI Gradient Recommendation

      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Initial %B</span>
          <strong>{gradient.startB}%</strong>
        </div>

        <div className="flex justify-between">
          <span>Final %B</span>
          <strong>{gradient.endB}%</strong>
        </div>

        <div className="flex justify-between">
          <span>Gradient Time</span>
          <strong>{gradient.time} min</strong>
        </div>

        <div className="flex justify-between">
          <span>Curve</span>
          <strong>{gradient.curve}</strong>
        </div>

        <div className="flex justify-between">
          <span>Re-equilibration</span>
          <strong>{gradient.reequilibration} min</strong>
        </div>

        <div className="flex justify-between">
          <span>Equilibration</span>
          <strong>{gradient.equilibration} min</strong>
        </div>

      </div>

    </div>

  );

}