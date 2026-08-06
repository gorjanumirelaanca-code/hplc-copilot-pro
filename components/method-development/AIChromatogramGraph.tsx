"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { predictRetention } from "@/lib/ai";
import {
  generateGaussianPeak,
  combinePeaks
} from "@/lib/ai/gaussianPeak";


export default function AIChromatogramGraph() {


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



  const peaks = combinePeaks([

    generateGaussianPeak(
      prediction.retentionTime,
      100,
      prediction.peakWidth,
      prediction.tailing
    ),

    generateGaussianPeak(
      prediction.retentionTime + 1.2,
      75,
      prediction.peakWidth,
      prediction.tailing
    ),

    generateGaussianPeak(
      prediction.retentionTime + 2.5,
      60,
      prediction.peakWidth,
      prediction.tailing
    )

  ]);



  const maxY = Math.max(
    ...peaks.map(p => p.y)
  );


  const points = peaks.map(point =>

    `${

      (point.x / (prediction.retentionTime + 5)) * 100

    },${

      100 - (point.y / maxY) * 90

    }`

  ).join(" ");



  return (

    <div className="rounded-xl border shadow bg-white p-6">


      <h2 className="text-2xl font-bold mb-5">

        AI Gaussian Chromatogram Simulator

      </h2>



      <svg

        viewBox="0 0 100 100"

        className="w-full h-72 bg-slate-50 border"

      >

        <polyline

          points={points}

          fill="none"

          stroke="currentColor"

          strokeWidth="0.8"

          className="text-blue-600"

        />


      </svg>



      <div className="mt-5 grid grid-cols-3 gap-4 text-sm">


        <div>

          <span className="text-slate-500">

            Retention

          </span>

          <strong className="block">

            {prediction.retentionTime} min

          </strong>

        </div>


        <div>

          <span className="text-slate-500">

            Resolution

          </span>

          <strong className="block">

            {prediction.resolution}

          </strong>

        </div>


        <div>

          <span className="text-slate-500">

            Tailing

          </span>

          <strong className="block">

            {prediction.tailing}

          </strong>

        </div>


      </div>


    </div>

  );

}