"use client";

import { useState } from "react";
import { troubleshoot } from "@/lib/ai/troubleshooter";
import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";

export default function HPLCAssistant() {

  const { molecule } = useLabStore();

  const {
    organic,
    flow,
    temperature,
    pH
  } = useMethodStore();

  const [question, setQuestion] = useState("");

  const [result, setResult] = useState<any>(null);

  function askAI() {

    if (!question.trim()) return;

    const answer = troubleshoot(

      question,

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

    setResult(answer);

  }

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        AI HPLC Troubleshooting Assistant

      </h2>

      <input

        className="w-full border rounded-lg p-3"

        placeholder="Example: Why is my peak tailing?"

        value={question}

        onChange={(e) => setQuestion(e.target.value)}

      />

      <button

        onClick={askAI}

        className="mt-4 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3"

      >

        Ask AI

      </button>

      {result && (

        <div className="mt-6 space-y-5">

          <div>

            <h3 className="text-xl font-bold">

              {result.issue}

            </h3>

          </div>

          <div>

            <h4 className="font-semibold mb-2">

              Possible Causes

            </h4>

            <ul className="list-disc ml-6">

              {result.possibleCauses.map((item: string, index: number) => (

                <li key={index}>{item}</li>

              ))}

            </ul>

          </div>

          <div>

            <h4 className="font-semibold mb-2">

              Recommendations

            </h4>

            <ul className="list-disc ml-6">

              {result.recommendations.map((item: string, index: number) => (

                <li key={index}>{item}</li>

              ))}

            </ul>

          </div>

        </div>

      )}

    </div>

  );

}