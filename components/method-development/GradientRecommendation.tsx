"use client";


interface GradientRecommendationProps {

  gradient?: any;

}



export default function GradientRecommendation({

  gradient = {}

}: GradientRecommendationProps) {



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-xl font-bold mb-4">

        Gradient Recommendation

      </h2>



      <div className="space-y-2 text-sm">


        <p>

          Organic Start:{" "}

          {gradient.organicStart ?? "-"}

          %

        </p>



        <p>

          Organic End:{" "}

          {gradient.organicEnd ?? "-"}

          %

        </p>



        <p>

          Flow Rate:{" "}

          {gradient.flow ?? "-"}

          {" "}mL/min

        </p>



        <p>

          Temperature:{" "}

          {gradient.temperature ?? "-"}

          °C

        </p>



        <p className="text-slate-600 mt-3">

          {gradient.recommendation ??

            "Gradient optimization recommendation will appear here."}

        </p>


      </div>


    </div>

  );

}