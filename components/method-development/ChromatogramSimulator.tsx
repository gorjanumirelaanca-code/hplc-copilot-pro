"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { predictRetention } from "@/lib/ai";
import { simulateChromatogram } from "@/lib/ai/chromatogramSimulator";


function gaussian(
  x: number,
  center: number,
  height: number,
  width: number
) {

  return (

    height *

    Math.exp(

      -Math.pow(x - center, 2) /

      (2 * Math.pow(width, 2))

    )

  );

}



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

      molecularWeight:
        Number(molecule.molecularWeight) || 250,

      logP:
        Number(molecule.xlogP) || 2,

      pKa: 4.5,

      tpsa:
        Number(molecule.tpsa) || 40,

      hBondDonors:
        Number(molecule.hBondDonors) || 1,

      hBondAcceptors:
        Number(molecule.hBondAcceptors) || 2

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




  const runtime = chromatogram.runtime;


  const points: string[] = [];



  for (

    let time = 0;

    time <= runtime;

    time += 0.05

  ) {


    let intensity = 2;



    chromatogram.peaks.forEach((peak) => {


      intensity += gaussian(

        time,

        peak.retentionTime,

        peak.intensity,

        peak.width * 3

      );


    });



    const x =

      30 +

      (time / runtime) * 470;



    const y =

      220 -

      Math.min(intensity, 100) * 1.8;



    points.push(

      `${x},${y}`

    );


  }





  const path =

    "M " + points.join(" L ");





  return (

    <div className="rounded-xl border shadow bg-white p-6">


      <h2 className="text-2xl font-bold mb-5">

        AI Chromatogram Simulator

      </h2>




      <div className="border rounded-lg bg-slate-50 p-3">


        <svg

          width="100%"

          height="280"

          viewBox="0 0 520 260"

        >



          <line

            x1="30"

            y1="220"

            x2="500"

            y2="220"

            stroke="black"

          />


          <line

            x1="30"

            y1="20"

            x2="30"

            y2="220"

            stroke="black"

          />




          <path

            d={path}

            fill="none"

            stroke="blue"

            strokeWidth="2"

          />




          {chromatogram.peaks.map(

            (peak,index)=>(


              <text

                key={index}

                x={

                  30 +

                  (peak.retentionTime / runtime) *

                  470

                }

                y="35"

                fontSize="12"

              >

                {peak.name}

              </text>


            )

          )}




          <text

            x="200"

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

            {runtime.toFixed(1)} min

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