"use client";


import { predictRetention } from "@/lib/ai/retention";


interface SystemSuitabilityProps {

  molecule?: any;

  organic?: number;

  flow?: number;

  temperature?: number;

}



export default function SystemSuitability({

  molecule = {},

  organic = 50,

  flow = 1,

  temperature = 30

}: SystemSuitabilityProps) {


  const prediction = predictRetention(

    molecule,

    {

      organic,

      flow,

      temperature

    }

  );



  const pass =

    prediction.resolution >= 1.5 &&

    prediction.tailing <= 2;



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-xl font-bold mb-4">

        System Suitability

      </h2>



      <div className="space-y-2 text-sm">


        <p>

          Resolution:

          {" "}

          {prediction.resolution}

        </p>



        <p>

          Tailing Factor:

          {" "}

          {prediction.tailing}

        </p>



        <p>

          Capacity Factor:

          {" "}

          {prediction.capacityFactor}

        </p>



        <p>

          Status:

          {" "}

          {pass ? "PASS ✅" : "FAIL ⚠️"}

        </p>


      </div>


    </div>

  );

}