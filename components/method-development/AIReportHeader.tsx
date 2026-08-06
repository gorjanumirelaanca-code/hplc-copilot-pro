"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { runMethodEngineV3 } from "@/lib/ai";

export default function AIReportHeader() {

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

    <div className="rounded-2xl shadow-lg bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white p-8">

      <h1 className="text-3xl font-bold">
        HPLC Copilot Pro™
      </h1>

      <p className="mt-2 text-blue-200">
        AI Pharmaceutical Method Development Platform
      </p>


      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">


        <div>
          <p className="text-blue-300 text-sm">
            Compound
          </p>
          <strong>
            {molecule.name || "Not selected"}
          </strong>
        </div>


        <div>
          <p className="text-blue-300 text-sm">
            Molecular Weight
          </p>
          <strong>
            {molecule.molecularWeight || "-"}
          </strong>
        </div>


        <div>
          <p className="text-blue-300 text-sm">
            Predicted RT
          </p>
          <strong>
            {ai.result.engine.prediction.retentionTime} min
          </strong>
        </div>


        <div>
          <p className="text-blue-300 text-sm">
            AI Confidence
          </p>
          <strong>
            {ai.confidence}%
          </strong>
        </div>


        <div>
          <p className="text-blue-300 text-sm">
            Status
          </p>
          <strong>
            {ai.laboratoryReady ? "READY" : "OPTIMIZE"}
          </strong>
        </div>


      </div>

    </div>

  );

}