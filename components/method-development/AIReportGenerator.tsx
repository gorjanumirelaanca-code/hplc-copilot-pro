"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { runMethodEngineV3 } from "@/lib/ai";


export default function AIReportGenerator() {


  const { molecule } = useLabStore();


  const {
    organic,
    flow,
    temperature,
    pH
  } = useMethodStore();



  function generateReport() {


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


    const report = `

HPLC COPILOT PRO
AI METHOD DEVELOPMENT REPORT

Compound:
${molecule.name}

Molecular Weight:
${molecule.molecularWeight}

Column Recommendation:
${ai.result.engine.column.column}

Mobile Phase:
${ai.result.pH.buffer}

pH:
${ai.result.pH.pH}

Gradient:
${ai.result.gradient.startB}% → ${ai.result.gradient.endB}%

Predicted Retention:
${ai.result.engine.prediction.retentionTime} min

Resolution:
${ai.result.system.resolution}

Tailing:
${ai.result.system.tailingFactor}

Method Score:
${ai.result.engine.score}/100

AI Summary:
${ai.summary}

    `;


    const blob = new Blob(

      [report],

      {
        type:"text/plain"
      }

    );


    const url = URL.createObjectURL(blob);


    const link = document.createElement("a");

    link.href = url;

    link.download =
      "HPLC_Copilot_AI_Method_Report.txt";


    link.click();


  }



  return (

    <div className="rounded-xl border shadow bg-white p-6">


      <h2 className="text-2xl font-bold mb-5">

        AI Report Generator

      </h2>


      <p className="text-slate-600 mb-5">

        Generate a complete AI method development report.

      </p>


      <button

        onClick={generateReport}

        className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold"

      >

        📄 Generate AI Report

      </button>


    </div>

  );

}