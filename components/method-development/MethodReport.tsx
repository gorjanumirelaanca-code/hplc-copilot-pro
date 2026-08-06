"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { runMethodEngineV3 } from "@/lib/ai";

export default function MethodReport() {

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

    <div className="rounded-xl border shadow-xl bg-white p-8">

      <h1 className="text-3xl font-bold mb-6">

        AI Method Development Report

      </h1>

      <div className="grid grid-cols-2 gap-6">

        <div>

          <div className="font-semibold">Compound</div>

          <div>{molecule.name}</div>

        </div>

        <div>

          <div className="font-semibold">Formula</div>

          <div>{molecule.formula}</div>

        </div>

        <div>

          <div className="font-semibold">Recommended Column</div>

          <div>{ai.result.engine.column.column}</div>

        </div>

        <div>

          <div className="font-semibold">Recommended Buffer</div>

          <div>{ai.result.pH.buffer}</div>

        </div>

        <div>

          <div className="font-semibold">Recommended pH</div>

          <div>{ai.result.pH.pH}</div>

        </div>

        <div>

          <div className="font-semibold">Gradient</div>

          <div>

            {ai.result.gradient.startB}% → {ai.result.gradient.endB}%

          </div>

        </div>

        <div>

          <div className="font-semibold">Predicted Retention</div>

          <div>

            {ai.result.engine.prediction.retentionTime} min

          </div>

        </div>

        <div>

          <div className="font-semibold">Method Score</div>

          <div>{ai.result.engine.score}/100</div>

        </div>

      </div>

      <div className="mt-8 rounded-lg bg-green-50 border border-green-200 p-5">

        <h2 className="font-bold mb-2">

          AI Summary

        </h2>

        <p>

          {ai.summary}

        </p>

      </div>

    </div>

  );

}