"use client";


export default function DevelopmentTimeline() {


  const steps = [

    {
      title: "1. Molecule Assessment",
      description:
        "Evaluate molecular properties including polarity, pKa, logP, and chromatographic behavior."
    },

    {
      title: "2. Column Selection",
      description:
        "Recommend appropriate stationary phase chemistry based on analyte characteristics."
    },

    {
      title: "3. Mobile Phase Optimization",
      description:
        "Optimize organic modifier, buffer system, pH, and chromatographic conditions."
    },

    {
      title: "4. Method Optimization",
      description:
        "Improve retention, resolution, peak shape, and system suitability."
    },

    {
      title: "5. Final Method Report",
      description:
        "Generate structured HPLC method development documentation."
    }

  ];



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-xl font-bold mb-6">

        Method Development Timeline

      </h2>



      <div className="space-y-4">


        {steps.map((step,index)=>(


          <div

            key={index}

            className="border-l-4 border-blue-600 pl-4"

          >

            <h3 className="font-bold">

              {step.title}

            </h3>


            <p className="text-slate-600 text-sm">

              {step.description}

            </p>


          </div>


        ))}


      </div>


    </div>

  );

}