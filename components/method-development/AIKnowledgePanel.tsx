"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { runMethodEngineV3 } from "@/lib/ai";

export default function AIKnowledgePanel() {

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


  const insights = [

    {
      title: "Column Strategy",
      text:
        `Use ${ai.result.engine.column.column} because it matches predicted analyte properties.`
    },

    {
      title: "pH Strategy",
      text:
        `Operate around pH ${ai.result.pH.pH} using ${ai.result.pH.buffer}.`
    },

    {
      title: "Gradient Strategy",
      text:
        `${ai.result.gradient.startB}% to ${ai.result.gradient.endB}% organic over ${ai.result.gradient.time} minutes.`
    },

    {
      title: "Chromatography Prediction",
      text:
        `RT ${ai.result.engine.prediction.retentionTime} min with resolution ${ai.result.system.resolution}.`
    },

    {
      title: "Readiness",
      text:
        ai.laboratoryReady
          ? "Method appears suitable for laboratory evaluation."
          : "Additional optimization recommended before laboratory testing."
    }

  ];


  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        AI Knowledge Engine

      </h2>


      <div className="space-y-4">

        {insights.map((item,index)=>(

          <div

            key={index}

            className="rounded-lg bg-slate-50 border p-4"

          >

            <h3 className="font-bold">

              {item.title}

            </h3>

            <p className="mt-2 text-slate-700">

              {item.text}

            </p>

          </div>

        ))}

      </div>


    </div>

  );

}