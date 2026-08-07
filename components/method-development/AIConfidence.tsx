"use client";


interface AIConfidenceProps {

  confidence?: number;

}



export default function AIConfidence({

  confidence = 0

}: AIConfidenceProps) {



  return (

    <div className="rounded-xl border bg-white shadow p-5">


      <h3 className="font-bold text-lg mb-3">

        AI Confidence

      </h3>



      <div className="text-3xl font-bold text-blue-600">

        {confidence}%

      </div>



      <p className="text-sm text-gray-600 mt-2">

        Confidence level of the AI method recommendation.

      </p>


    </div>

  );

}