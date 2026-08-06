"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { predictRetention } from "@/lib/ai";


export default function ChromatogramAnalysis() {


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



  const peaks = [

    {
      name: "API",
      rt: prediction.retentionTime
    },

    {
      name: "Impurity A",
      rt: prediction.retentionTime + 1.2
    },

    {
      name: "Impurity B",
      rt: prediction.retentionTime + 2.5
    }

  ];



  return (

    <div className="rounded-xl border shadow bg-white p-6">


      <h2 className="text-2xl font-bold mb-5">

        Chromatogram Analysis

      </h2>



      <div className="space-y-4">


        {peaks.map((peak,index)=>(

          <div

            key={index}

            className="rounded-lg border p-4"

          >

            <div className="flex justify-between">

              <strong>

                {peak.name}

              </strong>


              <strong>

                {peak.rt.toFixed(2)} min

              </strong>


            </div>


            <div className="mt-3 h-3 bg-slate-200 rounded-full">


              <div

                className="h-3 bg-blue-600 rounded-full"

                style={{

                  width:`${

                    Math.min(

                      peak.rt * 10,

                      95

                    )

                  }%`

                }}

              />


            </div>


          </div>


        ))}


      </div>



      <div className="mt-6 grid grid-cols-3 gap-4">


        <div className="bg-blue-50 rounded-lg p-4">

          <span className="text-sm">

            Resolution

          </span>

          <strong className="block text-xl">

            {prediction.resolution}

          </strong>

        </div>



        <div className="bg-blue-50 rounded-lg p-4">

          <span className="text-sm">

            Tailing

          </span>

          <strong className="block text-xl">

            {prediction.tailing}

          </strong>

        </div>



        <div className="bg-blue-50 rounded-lg p-4">

          <span className="text-sm">

            k'

          </span>

          <strong className="block text-xl">

            {prediction.capacityFactor}

          </strong>

        </div>


      </div>


    </div>

  );

}