"use client";

import { useState } from "react";

export default function ChromatogramControls() {

  const [organic, setOrganic] = useState(50);

  const [flow, setFlow] = useState(1.0);

  const [temperature, setTemperature] = useState(30);


  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Chromatogram Optimization Controls

      </h2>


      <div className="space-y-6">


        <div>

          <div className="flex justify-between">

            <span>
              Organic %
            </span>

            <strong>
              {organic}%
            </strong>

          </div>


          <input

            type="range"

            min="5"

            max="95"

            value={organic}

            onChange={(e)=>
              setOrganic(Number(e.target.value))
            }

            className="w-full"

          />

        </div>



        <div>

          <div className="flex justify-between">

            <span>
              Flow Rate
            </span>

            <strong>
              {flow} mL/min
            </strong>

          </div>


          <input

            type="range"

            min="0.2"

            max="2"

            step="0.1"

            value={flow}

            onChange={(e)=>
              setFlow(Number(e.target.value))
            }

            className="w-full"

          />

        </div>



        <div>

          <div className="flex justify-between">

            <span>
              Temperature
            </span>

            <strong>
              {temperature} °C
            </strong>

          </div>


          <input

            type="range"

            min="20"

            max="60"

            value={temperature}

            onChange={(e)=>
              setTemperature(Number(e.target.value))
            }

            className="w-full"

          />

        </div>


      </div>


      <div className="mt-6 rounded-lg bg-blue-50 p-4">

        AI updates retention, resolution, and peak shape when conditions change.

      </div>


    </div>

  );

}
