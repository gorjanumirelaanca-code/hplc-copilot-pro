"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { calculateMethodScore } from "@/lib/ai";

export default function MethodScore() {

  const { molecule } = useLabStore();

  const {
    organic,
    flow,
    temperature,
    pH
  } = useMethodStore();

  const score = calculateMethodScore(

    {
      molecularWeight: Number(molecule.molecularWeight) || 250,
      logP: Number(molecule.xlogP) || 2,
      pKa: 4.5,
      tpsa: Number(molecule.tpsa) || 40,
      hBondDonors: Number(molecule.hBondDonors) || 1,
      hBondAcceptors: Number(molecule.hBondAcceptors) || 2
    },

    {
      organic,
      flow,
      temperature,
      pH
    }

  );

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        AI Method Score

      </h2>

      <div className="text-6xl font-bold text-blue-600">

        {score}

      </div>

      <div className="mt-4 text-slate-600">

        Method robustness prediction score /100

      </div>

      <div className="mt-6 h-4 rounded-full bg-slate-200">

        <div

          className="h-4 rounded-full bg-blue-600"

          style={{
            width: `${score}%`
          }}

        />

      </div>

      <div className="mt-5 font-semibold">

        {score >= 90 && "Excellent starting method"}

        {score >= 80 && score < 90 && "Good starting method"}

        {score >= 70 && score < 80 && "Optimization recommended"}

        {score < 70 && "Major optimization required"}

      </div>

    </div>

  );

}