"use client";

export default function FutureFeatures() {

  const features = [

    "LC-MS/MS Method Development",

    "GC Method Development",

    "UPLC Optimization",

    "Impurity Method Development",

    "Forced Degradation Studies",

    "DoE Experimental Design",

    "QbD Method Development",

    "ICH Q2(R2) Validation",

    "AI Chromatogram Interpretation",

    "AI Peak Purity Analysis",

    "AI Troubleshooting Assistant",

    "PDF Report Generator",

    "Excel Export",

    "Cloud Project Storage",

    "Laboratory Notebook"

  ];

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Future Roadmap

      </h2>

      <div className="grid grid-cols-1 gap-2">

        {features.map((feature,index)=>(

          <div
            key={index}
            className="rounded-lg bg-blue-50 p-3"
          >

            🚀 {feature}

          </div>

        ))}

      </div>

    </div>

  );

}