"use client";

interface ChromatogramComparisonProps {

current?: any;

optimized?: any;

}


export default function ChromatogramComparison({

current = {},

optimized = {}

}: ChromatogramComparisonProps) {


return (

<div className="rounded-xl border bg-white shadow p-6">


  <h2 className="text-2xl font-bold mb-5">

    AI Method Comparison

  </h2>



  <div className="grid md:grid-cols-2 gap-5">


    <div className="border rounded-lg p-4">


      <h3 className="font-semibold mb-3">

        Original Method

      </h3>


      <p>

        Organic:

        {" "}

        <strong>

          {current.organic ?? "-"}%

        </strong>

      </p>


      <p>

        Retention:

        {" "}

        <strong>

          {current.retentionTime ?? "-"} min

        </strong>

      </p>


      <p>

        Resolution:

        {" "}

        <strong>

          {current.resolution ?? "-"}

        </strong>

      </p>


    </div>




    <div className="border rounded-lg p-4 bg-blue-50">


      <h3 className="font-semibold mb-3">

        AI Optimized Method

      </h3>


      <p>

        Organic:

        {" "}

        <strong>

          {optimized.organic ?? "-"}%

        </strong>

      </p>


      <p>

        Retention:

        {" "}

        <strong>

          {optimized.retentionTime ?? "-"} min

        </strong>

      </p>


      <p>

        Resolution:

        {" "}

        <strong>

          {optimized.resolution ?? "-"}

        </strong>

      </p>


    </div>


  </div>



  <div className="mt-5 rounded-lg bg-green-50 p-4">


    <h3 className="font-semibold">

      Improvement Summary

    </h3>


    <p className="text-sm mt-2">

      AI optimization compares current and improved method performance.

    </p>


  </div>


</div>

);

}