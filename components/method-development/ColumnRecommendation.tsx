"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { runMethodEngine } from "@/lib/ai/methodEngine";

export default function ColumnRecommendation() {

  const { molecule } = useLabStore();


  const result = runMethodEngine(
    molecule,
    {
      organic: 50,
      pH: 6.5,
      flow: 1
    }
  );


  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">
        AI Column Recommendation
      </h2>


      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Column</span>
          <strong>
            {result.column.column}
          </strong>
        </div>


        <div className="flex justify-between">
          <span>Particle</span>
          <strong>
            {result.column.particle}
          </strong>
        </div>


        <div className="flex justify-between">
          <span>Dimensions</span>
          <strong>
            {result.column.dimensions}
          </strong>
        </div>


      </div>


    </div>

  );

}