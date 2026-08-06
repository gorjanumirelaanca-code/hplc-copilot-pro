"use client";

import {
  CompoundProperties,
  MethodConditions,
} from "@/lib/ai/retention";

import { generateRecommendations } from "@/lib/ai/recommendations";

interface Props {

  compound: CompoundProperties;

  method: MethodConditions;

}

export default function AIRecommendationPanel({

  compound,

  method,

}: Props) {

  const recommendations = generateRecommendations(

    compound,

    method

  );

  const priorityColor = {

    High: "bg-red-100 text-red-700 border-red-300",

    Medium: "bg-yellow-100 text-yellow-700 border-yellow-300",

    Low: "bg-green-100 text-green-700 border-green-300",

  };

  return (

    <div className="bg-white rounded-xl shadow border border-slate-200 p-6">

      <h2 className="text-2xl font-bold mb-6">

        AI Method Recommendations

      </h2>

      <div className="space-y-4">

        {recommendations.map((item, index) => (

          <div

            key={index}

            className={`border rounded-lg p-4 ${priorityColor[item.priority]}`}

          >

            <div className="flex justify-between items-center mb-2">

              <h3 className="font-bold">

                {item.title}

              </h3>

              <span className="text-xs font-semibold">

                {item.priority}

              </span>

            </div>

            <p className="text-sm">

              {item.reason}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}