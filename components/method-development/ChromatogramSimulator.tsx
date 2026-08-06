"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { predictRetention } from "@/lib/ai";
import { simulateChromatogram } from "@/lib/ai/chromatogramSimulator";


export default function ChromatogramSimulator() {


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



  const chromatogram = simulateChromatogram(

    [

      prediction.retentionTime,

      prediction.retentionTime + 1.2,

      prediction.retentionTime + 2.4

    ],

    prediction.resolution,

    prediction.tailing

  );



  return (

    <div className="rounded-xl border shadow bg-white p-6">


      <h2 className="text-2xl font-bold mb-5">

        AI Chromatogram Simulator

      </h2>


      <div className="relative h-64 border-b border-l bg-slate-50 overflow-hidden">


        {chromatogram.peaks.map((peak,index)=>(


          <div

            key={index}

            className="absolute bottom-0"

            style={{

              left:`${(peak.retentionTime / chromatogram.runtime) * 90}%`

            }}

          >

            <div

              className="bg-blue-600 w-1"

              style={{

                height:`${peak.intensity * 2}px`

              }}

            />


            <span className="text-xs">

              {peak.name}

            </span>


          </div>


        ))}


      </div>


      <div className="mt-5 space-y-2">


        <div className="flex justify-between">

          <span>Runtime</span>

          <strong>

            {chromatogram.runtime.toFixed(1)} min

          </strong>

        </div>


        <div className="flex justify-between">

          <span>Predicted Resolution</span>

          <strong>

            {prediction.resolution}

          </strong>

        </div>


        <div className="flex justify-between">

          <span>Tailing Factor</span>

          <strong>

            {prediction.tailing}

          </strong>

        </div>


      </div>


    </div>

  );

}