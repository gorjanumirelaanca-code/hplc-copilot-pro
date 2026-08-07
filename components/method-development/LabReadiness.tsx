"use client";


export default function LabReadiness({ ai }: any) {


  const engine = ai?.engine ?? {};

  const mobilePhase = engine.mobilePhase ?? {};

  const system = ai?.system ?? {};



  const checks = [

    {

      name: "Column recommendation",

      pass: !!engine.column?.column

    },


    {

      name: "Mobile phase",

      pass: !!mobilePhase.organic

    },


    {

      name: "System suitability",

      pass: !!system.pass

    }

  ];



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="font-bold text-xl mb-4">

        Lab Readiness

      </h2>



      {checks.map((c)=>(

        <div key={c.name} className="mb-2">

          {c.pass ? "✅" : "❌"} {c.name}

        </div>

      ))}


    </div>

  );

}