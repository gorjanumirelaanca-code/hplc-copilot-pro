"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { runMethodEngineV3 } from "@/lib/ai";

export default function AIOptimizer() {

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


  const suggestions = [

    {
      title: "Retention",
      value:
        ai.result.engine.prediction.capacityFactor < 2
          ? "Decrease organic phase to increase retention."
          : "Retention is acceptable."
    },

    {
      title: "Resolution",
      value:
        ai.result.system.resolution < 2
          ? "Change pH, column chemistry, or gradient slope."
          : "Resolution target achieved."
    },

    {
      title: "Peak Shape",
      value:
        ai.result.system.tailingFactor > 2
          ? "Investigate secondary interactions and sample loading."
          : "Peak symmetry acceptable."
    },

    {
      title: "Pressure",
      value:
        ai.result.system.pressure > 400
          ? "Reduce flow or inspect system restriction."
          : "Pressure within expected range."
    }

  ];


  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        AI Optimization Engine

      </h2>


      <div className="space-y-4">

        {suggestions.map((item,index)=>(

          <div

            key={index}

            className="rounded-lg border bg-blue-50 p-4"

          >

            <h3 className="font-bold">

              {item.title}

            </h3>

            <p className="mt-2">

              {item.value}

            </p>

          </div>

        ))}

      </div>


    </div>

  );

}