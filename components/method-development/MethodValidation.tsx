"use client";

export default function MethodValidation() {

  const checks = [

    ["Specificity","✓ Ready"],

    ["Linearity","✓ Pending Experimental Data"],

    ["Accuracy","✓ Pending Experimental Data"],

    ["Precision","✓ Pending Experimental Data"],

    ["LOD / LOQ","✓ Calculated Later"],

    ["Robustness","✓ AI Predicted"],

    ["System Suitability","✓ Predicted"],

    ["Validation Status","Development Stage"]

  ];

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Method Validation Status

      </h2>

      <div className="space-y-3">

        {checks.map((item,index)=>(

          <div
            key={index}
            className="flex justify-between rounded-lg border p-3"
          >

            <span>{item[0]}</span>

            <strong>{item[1]}</strong>

          </div>

        ))}

      </div>

    </div>

  );

}