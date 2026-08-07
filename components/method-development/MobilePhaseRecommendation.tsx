"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { recommendPH } from "@/lib/ai";

export default function BufferRecommendation() {

  const { molecule } = useLabStore();

  const buffer = recommendPH({

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

        AI Buffer Recommendation

      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">

          <span>Buffer</span>

          <strong>{buffer.buffer}</strong>

        </div>

        <div className="flex justify-between">

          <span>pH</span>

          <strong>{buffer.pH}</strong>

        </div>

        <div className="flex justify-between">

          <span>Ionic Strength</span>

          <strong>{buffer.ionicStrength}</strong>

        </div>

      </div>

      <div className="mt-5 rounded-lg bg-blue-50 p-4">

        {buffer.explanation}

      </div>

    </div>

  );

}
