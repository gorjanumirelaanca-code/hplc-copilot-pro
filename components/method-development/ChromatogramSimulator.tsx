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




  const points = chromatogram.peaks.map((peak) => {

    const x =
      (peak.retentionTime / chromatogram.runtime) * 500;


    const height =
      peak.intensity * 1.8;


    return {

      x,

      y: 220 - height,

      peak

    };

  });



  const path = points

    .map((p, index) =>

      `${index === 0 ? "M" : "L"} ${p.x} ${p.y}`

    )

    .join(" ");




  return (

    <div className="rounded-xl border shadow bg-white p-6">


      <h2 className="text-2xl font-bold mb-5">

        AI Chromatogram Simulator

      </h2>




      <div className="border rounded-lg bg-slate-50 p-3">


        <svg

          width="100%"

          height="260"

          viewBox="0 0 520 260"

        >


          <line

            x1="20"

            y1="220"

            x2="500"

            y2="220"

            stroke="black"

          />


          <line

            x1="20"

            y1="20"

            x2="20"

            y2="220"

            stroke="black"

          />



          <path

            d={path}

            fill="none"

            stroke="blue"

            strokeWidth="3"

          />



          {points.map((p,index)=>(


            <g key={index}>


              <circle

                cx={p.x}

                cy={p.y}

                r="5"

                fill="blue"

              />


              <text

                x={p.x - 15}

                y={p.y - 10}

                fontSize="12"

              >

                {p.peak.name}

              </text>


            </g>


          ))}



          <text

            x="230"

            y="250"

            fontSize="12"

          >

            Retention Time (min)

          </text>



          <text

            x="5"

            y="30"

            fontSize="12"

          >

            Intensity

          </text>


        </svg>


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