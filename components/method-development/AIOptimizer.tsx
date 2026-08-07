"use client";


interface AIOptimizerProps {

  ai?: any;

}



export default function AIOptimizer({

  ai = {}

}: AIOptimizerProps) {


  const engine = ai?.engine ?? {};

  const prediction = engine.prediction ?? {};

  const system = ai?.system ?? {};



  const recommendations = [

    {

      title: "Retention",

      value:

        prediction.capacityFactor < 2

          ? "Decrease organic phase to increase retention."

          : "Retention is acceptable."

    },

    {

      title: "Resolution",

      value:

        prediction.resolution < 1.5

          ? "Improve selectivity or optimize gradient."

          : "Resolution is acceptable."

    },

    {

      title: "Pressure",

      value:

        system.pressure > 400

          ? "Reduce flow or inspect system restriction."

          : "Pressure within expected range."

    }

  ];



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-xl font-bold mb-4">

        AI Optimizer

      </h2>



      <div className="text-3xl font-bold text-blue-600 mb-4">

        {engine.score ?? 0}/100

      </div>



      <div className="space-y-3">

        {recommendations.map((item,index)=>(

          <div key={index} className="border rounded p-3">

            <strong>{item.title}</strong>

            <p className="text-sm">

              {item.value}

            </p>

          </div>

        ))}

      </div>


    </div>

  );

}