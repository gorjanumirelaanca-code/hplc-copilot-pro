"use client";


export default function MethodReport({ ai }: any) {

  const engine = ai?.engine ?? {};

  const column = engine.column ?? {};

  const prediction = engine.prediction ?? {};

  const mobilePhase = engine.mobilePhase ?? {};



  return (

    <div className="rounded-xl border bg-white shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Method Report
      </h2>


      <p>
        <b>Recommended Column:</b>
        <br />
        {column.column ?? "-"}
      </p>


      <p>
        <b>Mobile Phase:</b>
        <br />
        {mobilePhase.organic ?? "-"}
      </p>


      <p>
        <b>Retention:</b>{" "}
        {prediction.retentionTime ?? "-"} min
      </p>


      <p>
        <b>Score:</b>{" "}
        {engine.score ?? 0}/100
      </p>


    </div>

  );

}