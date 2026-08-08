"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { runMethodEngine } from "@/lib/ai/methodEngine";


export default function AIReportHeader() {

  const { molecule } = useLabStore();


  const engine = runMethodEngine(
    molecule,
    {
      organic: 50,
      flow: 1,
      pH: 6.5
    }
  );


  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-2xl font-bold mb-4">

        AI Method Development Report

      </h2>


      <div className="grid gap-3 text-sm">


        <p>

          <strong>
            Column Recommendation:
          </strong>

          <br />

          {engine.column.column}

        </p>



        <p>

          <strong>
            Mobile Phase:
          </strong>

          <br />

          {engine.mobilePhase.organic}
          {" / "}
          {engine.mobilePhase.buffer}

        </p>



        <p>

          <strong>
            Predicted Retention:
          </strong>

          <br />

          {engine.prediction.retentionTime}
          {" min"}

        </p>



        <p>

          <strong>
            Method Score:
          </strong>

          <br />

          {engine.score}/100

        </p>


      </div>


    </div>

  );

}