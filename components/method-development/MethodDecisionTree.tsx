"use client";

import { useState } from "react";

export default function MethodDecisionTree() {

  const [step, setStep] = useState(0);


  const diagnostics = [

    {
      problem: "Peak tailing",
      causes:
        "Secondary interactions, wrong pH, sample overload, column contamination.",
      action:
        "Adjust pH, reduce injection load, clean column, evaluate column chemistry."
    },

    {
      problem: "Low retention",
      causes:
        "Organic content too high or weak stationary phase interaction.",
      action:
        "Reduce organic percentage or change column chemistry."
    },

    {
      problem: "Poor resolution",
      causes:
        "Insufficient selectivity or inappropriate gradient.",
      action:
        "Optimize pH, column type, temperature, and gradient slope."
    },

    {
      problem: "High pressure",
      causes:
        "Blocked frit, dirty column, tubing restriction, viscous mobile phase.",
      action:
        "Check flow path and flush system."
    },

    {
      problem: "Baseline noise",
      causes:
        "Poor solvent quality, detector settings, bubbles, contamination.",
      action:
        "Degas solvents and verify detector/system condition."
    }

  ];


  function nextStep() {

    setStep((current) =>

      current === diagnostics.length - 1

        ? 0

        : current + 1

    );

  }


  const item = diagnostics[step];


  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        AI Troubleshooting Decision Tree

      </h2>


      <div className="rounded-lg bg-blue-50 p-5">

        <h3 className="text-xl font-bold">

          {item.problem}

        </h3>


        <div className="mt-4">

          <strong>

            Possible Causes

          </strong>

          <p>

            {item.causes}

          </p>

        </div>


        <div className="mt-4">

          <strong>

            Recommended Action

          </strong>

          <p>

            {item.action}

          </p>

        </div>


      </div>


      <button

        onClick={nextStep}

        className="mt-5 w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold"

      >

        Next Diagnostic

      </button>


    </div>

  );

}