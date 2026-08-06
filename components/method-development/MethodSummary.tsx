"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { runMethodEngineV3 } from "@/lib/ai";

export default function MethodSummary() {

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
        AI Method Summary
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


        <div className="rounded-lg bg-slate-50 p-4">

          <span className="text-sm text-slate-500">
            Column
          </span>

          <div className="font-bold">
            {ai.result.engine.column.column}
          </div>

        </div>


        <div className="rounded-lg bg-slate-50 p-4">

          <span className="text-sm text-slate-500">
            Buffer
          </span>

          <div className="font-bold">
            {ai.result.pH.buffer}
          </div>

        </div>


        <div className="rounded-lg bg-slate-50 p-4">

          <span className="text-sm text-slate-500">
            pH
          </span>

          <div className="font-bold">
            {ai.result.pH.pH}
          </div>

        </div>


        <div className="rounded-lg bg-slate-50 p-4">

          <span className="text-sm text-slate-500">
            Gradient
          </span>

          <div className="font-bold">

            {ai.result.gradient.startB}%
            →
            {ai.result.gradient.endB}%

          </div>

        </div>


      </div>


      <div className="mt-5 rounded-lg bg-blue-50 p-4">

        <strong>
          AI Recommendation:
        </strong>

        <p className="mt-2">

          {ai.summary}

        </p>

      </div>


    </div>

  );

}