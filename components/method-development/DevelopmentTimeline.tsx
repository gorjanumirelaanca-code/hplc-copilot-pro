DevelopmentTimeline.tsx"use client";

export default function DevelopmentTimeline() {

  const steps = [

    "Compound Search",

    "Physicochemical Assessment",

    "Column Selection",

    "Mobile Phase Optimization",

    "Gradient Optimization",

    "Retention Prediction",

    "System Suitability",

    "Experimental Verification",

    "Method Optimization",

    "Validation"

  ];

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Development Workflow

      </h2>

      <div className="space-y-4">

        {steps.map((step, index) => (

          <div
            key={index}
            className="flex items-center gap-4"
          >

            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

              {index + 1}

            </div>

            <div className="flex-1 rounded-lg bg-slate-50 p-3">

              {step}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}