"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { runMethodEngineV3 } from "@/lib/ai";

export default function AIConfidence() {

  const { molecule } = useLabStore();

  const {
    organic,
    flow,
    temperature,
    pH
  } = useMethodStore();


  const ai = runMethodEngineV3(

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

        AI Confidence

      </h2>


      <div className="text-6xl font-bold text-blue-600">

        {ai.confidence}%

      </div>


      <div className="mt-5 h-4 rounded-full bg-slate-200">

        <div

          className="h-4 rounded-full bg-blue-600"

          style={{
            width: `${ai.confidence}%`
          }}

        />

      </div>


      <div className="mt-6 space-y-3">


        <div className="flex justify-between">

          <span>Method Score</span>

          <strong>

            {ai.result.engine.score}/100

          </strong>

        </div>


        <div className="flex justify-between">

          <span>System Suitability</span>

          <strong>

            {ai.result.system.pass ? "PASS" : "CHECK"}

          </strong>

        </div>


        <div className="flex justify-between">

          <span>Lab Status</span>

          <strong>

            {ai.laboratoryReady ? "READY" : "OPTIMIZE"}

          </strong>

        </div>


      </div>


    </div>

  );

}