"use client";


interface MethodScoreProps {

  score?: number;

  prediction?: {

    retentionTime?: number;

    resolution?: number;

    tailingFactor?: number;

  };

}



export default function MethodScore({

  score = 0,

  prediction = {}

}: MethodScoreProps) {



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-xl font-bold mb-4">

        Method Score

      </h2>



      <div className="text-4xl font-bold text-blue-600">

        {score}

      </div>



      <p className="text-sm text-slate-600 mt-2">

        Overall HPLC method quality score

      </p>



      <div className="mt-4 space-y-2 text-sm">


        <p>

          Retention Time: {prediction.retentionTime ?? "-"} min

        </p>


        <p>

          Resolution: {prediction.resolution ?? "-"}

        </p>


        <p>

          Tailing Factor: {prediction.tailingFactor ?? "-"}

        </p>


      </div>


    </div>

  );

}