"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { predictRetention } from "@/lib/ai";

export default function RunPrediction() {

  const { molecule } = useLabStore();

  const {
    organic,
    flow,
    temperature,
    pH
  } = useMethodStore();


  const prediction = predictRetention(

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
        AI Run Prediction
      </h2>


      <div className="grid grid-cols-1 gap-3">


        <div className="flex justify-between">
          <span>Retention Time</span>
          <strong>
            {prediction.retentionTime} min
          </strong>
        </div>


        <div className="flex justify-between">
          <span>Capacity Factor (k')</span>
          <strong>
            {prediction.capacityFactor}
          </strong>
        </div>


        <div className="flex justify-between">
          <span>Resolution</span>
          <strong>
            {prediction.resolution}
          </strong>
        </div>


        <div className="flex justify-between">
          <span>Selectivity</span>
          <strong>
            {prediction.selectivity}
          </strong>
        </div>


        <div className="flex justify-between">
          <span>Peak Width</span>
          <strong>
            {prediction.peakWidth} min
          </strong>
        </div>


        <div className="flex justify-between">
          <span>Estimated Pressure</span>
          <strong>
            {prediction.pressure} bar
          </strong>
        </div>


      </div>


    </div>

  );

}