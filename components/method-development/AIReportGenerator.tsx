"use client";


export default function AIReportGenerator({ ai }: any) {


  const engine = ai?.engine ?? {};

  const prediction = engine.prediction ?? {};

  const column = engine.column ?? {};

  const mobilePhase = engine.mobilePhase ?? {};

  const system = ai?.system ?? {};

  const gradient = ai?.gradient ?? {};



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-xl font-bold mb-4">

        AI Method Report

      </h2>


      <div className="space-y-3 text-sm">


        <p>

          <b>Column Recommendation:</b><br/>

          {column.column ?? "-"}

        </p>



        <p>

          <b>Mobile Phase:</b><br/>

          {mobilePhase.organic ?? "-"} /

          {" "}

          {mobilePhase.buffer ?? "-"}

        </p>



        <p>

          <b>pH:</b>{" "}

          {mobilePhase.pH ?? "-"}

        </p>



        <p>

          <b>Gradient:</b>{" "}

          {gradient.startB ?? "-"}%

          {" → "}

          {gradient.endB ?? "-"}%

        </p>



        <p>

          <b>Retention:</b>{" "}

          {prediction.retentionTime ?? "-"} min

        </p>



        <p>

          <b>Resolution:</b>{" "}

          {system.resolution ?? "-"}

        </p>



        <p>

          <b>Tailing:</b>{" "}

          {system.tailingFactor ?? "-"}

        </p>



        <p>

          <b>Score:</b>{" "}

          {engine.score ?? 0}/100

        </p>


      </div>


    </div>

  );

}