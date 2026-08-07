"use client";


export default function MethodSummary({ ai }: any) {

  const engine = ai?.engine ?? {};

  const column = engine.column ?? {};

  const prediction = engine.prediction ?? {};



  return (

    <div className="rounded-xl border bg-white shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Method Summary
      </h2>


      <p>
        Column:
        {" "}
        {column.column ?? "-"}
      </p>


      <p>
        Retention Time:
        {" "}
        {prediction.retentionTime ?? "-"} min
      </p>


      <p>
        Resolution:
        {" "}
        {prediction.resolution ?? "-"}
      </p>


    </div>

  );

}