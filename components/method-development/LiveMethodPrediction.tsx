"use client";


export default function LiveMethodPrediction({ ai }: any) {


  const engine = ai?.engine ?? {};

  const prediction = engine.prediction ?? {};

  const system = ai?.system ?? {};



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="font-bold text-xl mb-4">

        Live Method Prediction

      </h2>



      <p>

        Retention Time: {prediction.retentionTime ?? "-"} min

      </p>



      <p>

        Resolution: {system.resolution ?? "-"}

      </p>



      <p>

        Capacity Factor: {prediction.capacityFactor ?? "-"}

      </p>



      <p>

        Selectivity: {prediction.selectivity ?? "-"}

      </p>



      <p>

        Peak Width: {prediction.peakWidth ?? "-"} min

      </p>



      <p>

        Pressure: {system.pressure ?? "-"} bar

      </p>


    </div>

  );

}