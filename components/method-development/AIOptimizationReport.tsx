"use client";

interface AIOptimizationReportProps {

optimization?: any;

}


export default function AIOptimizationReport({

optimization = {}

}: AIOptimizationReportProps) {


const score =
  optimization.score ?? 0;


const issues =
  optimization.issues ?? [];


const recommendations =
  optimization.recommendations ?? [];


const improvement =
  optimization.expectedImprovement ?? {};



return (

<div className="rounded-xl border bg-white shadow p-6">


  <h2 className="text-2xl font-bold mb-5">

    AI Optimization Report

  </h2>



  <div className="mb-5">


    <p className="text-sm text-gray-600">

      Optimization Score

    </p>


    <div className="text-4xl font-bold text-blue-600">

      {score}/100

    </div>


  </div>





  <div className="mb-5">


    <h3 className="font-semibold mb-2">

      Issues

    </h3>



    {issues.length > 0 ? (

      <ul className="space-y-2 text-sm">

        {issues.map(

          (item:string,index:number)=>(

            <li key={index}>

              ⚠ {item}

            </li>

          )

        )}

      </ul>


    ) : (

      <p className="text-sm text-gray-500">

        No major optimization issues detected.

      </p>

    )}


  </div>





  <div className="mb-5">


    <h3 className="font-semibold mb-2">

      Recommendations

    </h3>



    {recommendations.length > 0 ? (

      <ul className="space-y-2 text-sm">

        {recommendations.map(

          (item:string,index:number)=>(

            <li key={index}>

              ✓ {item}

            </li>

          )

        )}

      </ul>


    ) : (

      <p className="text-sm text-gray-500">

        Method optimization not required.

      </p>

    )}


  </div>





  <div className="rounded-lg bg-blue-50 p-4">


    <h3 className="font-semibold mb-2">

      Expected Improvement

    </h3>



    <p className="text-sm">

      Retention:

      {" "}

      {improvement.retentionTime ?? "-"}

    </p>



    <p className="text-sm">

      Resolution:

      {" "}

      {improvement.resolution ?? "-"}

    </p>


  </div>



</div>

);

}