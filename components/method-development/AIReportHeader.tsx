"use client";


interface AIReportHeaderProps {

  ai?: any;

}



export default function AIReportHeader({

  ai = {}

}: AIReportHeaderProps) {


  const engine = ai.engine ?? {};

  const column = engine.column ?? {};

  const mobilePhase = engine.mobilePhase ?? {};

  const prediction = engine.prediction ?? {};



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-2xl font-bold mb-4">

        AI Method Development Report

      </h2>



      <div className="grid gap-3 text-sm">


        <p>

          <strong>Column Recommendation:</strong>

          <br />

          {column.column ?? "Not available"}

        </p>



        <p>

          <strong>Mobile Phase:</strong>

          <br />

          {mobilePhase.organic ?? "-"} /

          {" "}

          {mobilePhase.buffer ?? "-"}

        </p>



        <p>

          <strong>Predicted Retention:</strong>

          <br />

          {prediction.retentionTime ?? "-"} min

        </p>



        <p>

          <strong>Method Score:</strong>

          <br />

          {engine.score ?? 0}/100

        </p>


      </div>


    </div>

  );

}