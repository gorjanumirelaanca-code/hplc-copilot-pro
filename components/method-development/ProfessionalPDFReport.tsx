"use client";


interface ProfessionalPDFReportProps {

  ai?: any;

}



export default function ProfessionalPDFReport({

  ai = {}

}: ProfessionalPDFReportProps) {


  const engine = ai?.engine ?? {};

  const prediction = engine.prediction ?? {};

  const column = engine.column ?? {};

  const mobilePhase = engine.mobilePhase ?? {};

  const system = ai?.system ?? {};



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-xl font-bold mb-4">

        Professional PDF Report

      </h2>



      <div className="space-y-3 text-sm">


        <p>

          <strong>Column:</strong>

          <br />

          {column.column ?? "-"}

        </p>



        <p>

          <strong>Mobile Phase:</strong>

          <br />

          {mobilePhase.organic ?? "-"} /

          {" "}

          {mobilePhase.buffer ?? "-"}

        </p>



        <p>

          <strong>pH:</strong>

          {" "}

          {mobilePhase.pH ?? "-"}

        </p>



        <p>

          <strong>Retention Time:</strong>

          {" "}

          {prediction.retentionTime ?? "-"} min

        </p>



        <p>

          <strong>Resolution:</strong>

          {" "}

          {system.resolution ?? prediction.resolution ?? "-"}

        </p>



        <p>

          <strong>Method Score:</strong>

          {" "}

          {engine.score ?? 0}/100

        </p>


      </div>


      <button

        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"

        onClick={() => window.print()}

      >

        Export / Print Report

      </button>


    </div>

  );

}