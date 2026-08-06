"use client";

export default function ExperimentalPlanner() {

  const experiments = [

    {
      step: "1",
      action: "Run C18 scouting gradient (5–95% ACN)"
    },

    {
      step: "2",
      action: "Evaluate pH 3, 5 and 7"
    },

    {
      step: "3",
      action: "Compare ACN vs MeOH"
    },

    {
      step: "4",
      action: "Optimize flow rate"
    },

    {
      step: "5",
      action: "Optimize column temperature"
    },

    {
      step: "6",
      action: "Confirm system suitability"
    },

    {
      step: "7",
      action: "Perform robustness study"
    },

    {
      step: "8",
      action: "Proceed to validation"
    }

  ];

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Experimental Plan

      </h2>

      <div className="space-y-3">

        {experiments.map((exp) => (

          <div
            key={exp.step}
            className="flex gap-4 rounded-lg bg-slate-50 p-4"
          >

            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

              {exp.step}

            </div>

            <div>

              {exp.action}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}