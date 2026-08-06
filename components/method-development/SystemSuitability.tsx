"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { predictSystemSuitability } from "@/lib/ai";

export default function SystemSuitability() {

  const { molecule } = useLabStore();

  const {
    organic,
    flow,
    temperature,
    pH
  } = useMethodStore();

  const system = predictSystemSuitability(

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

        AI System Suitability

      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Retention Time</span>
          <strong>{system.retentionTime} min</strong>
        </div>

        <div className="flex justify-between">
          <span>Capacity Factor</span>
          <strong>{system.capacityFactor}</strong>
        </div>

        <div className="flex justify-between">
          <span>Resolution</span>
          <strong>{system.resolution}</strong>
        </div>

        <div className="flex justify-between">
          <span>Tailing Factor</span>
          <strong>{system.tailingFactor}</strong>
        </div>

        <div className="flex justify-between">
          <span>Theoretical Plates</span>
          <strong>{system.theoreticalPlates}</strong>
        </div>

        <div className="flex justify-between">
          <span>Pressure</span>
          <strong>{system.pressure} bar</strong>
        </div>

        <div className="flex justify-between">
          <span>Status</span>
          <strong className={system.pass ? "text-green-600" : "text-red-600"}>
            {system.pass ? "PASS" : "FAIL"}
          </strong>
        </div>

      </div>

      <div className="mt-6 rounded-lg bg-slate-50 p-4">

        <h3 className="font-semibold mb-2">

          AI Comments

        </h3>

        <ul className="list-disc ml-5 space-y-1">

          {system.comments.map((comment, index) => (

            <li key={index}>{comment}</li>

          ))}

        </ul>

      </div>

    </div>

  );

}