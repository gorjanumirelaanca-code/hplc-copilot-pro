"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { runMethodEngineV3 } from "@/lib/ai";

export default function LiveMethodPrediction() {

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

      <h2 className="text-2xl font-bold mb-6">

        Live AI Prediction

      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="flex justify-between">

          <span>Retention Time</span>

          <strong>

            {ai.result.engine.prediction.retentionTime} min

          </strong>

        </div>

        <div className="flex justify-between">

          <span>Resolution</span>

          <strong>

            {ai.result.system.resolution}

          </strong>

        </div>

        <div className="flex justify-between">

          <span>Capacity Factor</span>

          <strong>

            {ai.result.engine.prediction.capacityFactor}

          </strong>

        </div>

        <div className="flex justify-between">

          <span>Selectivity</span>

          <strong>

            {ai.result.engine.prediction.selectivity}

          </strong>

        </div>

        <div className="flex justify-between">

          <span>Peak Width</span>

          <strong>

            {ai.result.engine.prediction.peakWidth} min

          </strong>

        </div>

        <div className="flex justify-between">

          <span>Pressure</span>

          <strong>

            {ai.result.system.pressure} bar

          </strong>

        </div>

        <div className="flex justify-between">

          <span>Confidence</span>

          <strong>

            {ai.confidence}%

          </strong>

        </div>

        <div className="flex justify-between">

          <span>Status</span>

          <strong className={ai.laboratoryReady ? "text-green-600" : "text-orange-600"}>

            {ai.laboratoryReady ? "READY" : "OPTIMIZE"}

          </strong>

        </div>

      </div>

      <div className="mt-6 rounded-lg bg-blue-50 p-4">

        {ai.summary}

      </div>

    </div>

  );

}