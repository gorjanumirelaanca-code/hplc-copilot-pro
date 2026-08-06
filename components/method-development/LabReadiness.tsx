"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { runMethodEngineV3 } from "@/lib/ai";

export default function LabReadiness() {

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


  const checks = [

    {
      name: "Compound characterization",
      pass: !!molecule.name
    },

    {
      name: "Column recommendation",
      pass: !!ai.result.engine.column.column
    },

    {
      name: "Mobile phase recommendation",
      pass: !!ai.result.pH.buffer
    },

    {
      name: "System suitability",
      pass: ai.result.system.pass
    },

    {
      name: "AI confidence",
      pass: ai.confidence >= 80
    }

  ];


  const completed =
    checks.filter(item => item.pass).length;


  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Laboratory Readiness

      </h2>


      <div className="text-5xl font-bold text-blue-600">

        {completed}/{checks.length}

      </div>


      <p className="mt-2 text-slate-600">

        Method development readiness checks completed

      </p>


      <div className="mt-6 space-y-3">

        {checks.map((item,index)=>(

          <div

            key={index}

            className="flex justify-between rounded-lg border p-4"

          >

            <span>

              {item.name}

            </span>


            <strong className={item.pass ? "text-green-600" : "text-red-600"}>

              {item.pass ? "PASS" : "CHECK"}

            </strong>


          </div>

        ))}

      </div>


      <div className="mt-6 rounded-lg bg-blue-50 p-4">

        AI Confidence: {ai.confidence}%

      </div>


    </div>

  );

}