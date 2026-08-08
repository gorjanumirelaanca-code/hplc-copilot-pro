"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { runMethodEngine } from "@/lib/ai/methodEngine";

export default function MethodSummary() {

  const { molecule } = useLabStore();


  const result = runMethodEngine(
    molecule,
    {
      organic: 50,
      flow: 1,
      pH: 6.5
    }
  );


  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">
        AI Method Development Report
      </h2>


      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Column Recommendation</span>
          <strong>
            {result.column.column}
          </strong>
        </div>


        <div className="flex justify-between">
          <span>Mobile Phase</span>
          <strong>
            {result.mobilePhase.organic} /
            {result.mobilePhase.buffer}
          </strong>
        </div>


        <div className="flex justify-between">
          <span>Predicted Retention</span>
          <strong>
            {result.prediction.retentionTime} min
          </strong>
        </div>


        <div className="flex justify-between">
          <span>Method Score</span>
          <strong>
            {result.score}/100
          </strong>
        </div>

      </div>

    </div>

  );

}