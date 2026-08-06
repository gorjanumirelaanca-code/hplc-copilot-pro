"use client";

import { useState } from "react";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";

export default function MethodOptimizerPage() {

  const [resolution, setResolution] = useState("1.2");
  const [flowRate, setFlowRate] = useState("1.0");
  const [gradientTime, setGradientTime] = useState("10");
  const [organic, setOrganic] = useState("40");

  const rs = parseFloat(resolution);

  const recommendations: string[] = [];

  if (rs < 1.5) {
    recommendations.push(
      "Increase gradient time to improve separation."
    );

    recommendations.push(
      "Reduce flow rate by 10–20%."
    );

    recommendations.push(
      "Decrease starting % organic solvent."
    );
  }

  if (rs >= 1.5) {
    recommendations.push(
      "Current resolution is acceptable."
    );

    recommendations.push(
      "Proceed to robustness evaluation."
    );
  }

  return (

    <Layout>

      <main className="max-w-7xl mx-auto p-8">

        <PageHeader
          title="🧠 AI Method Optimizer"
          subtitle="Evaluate and optimize chromatographic methods."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl border shadow-md p-8">

            <h2 className="text-2xl font-bold mb-6">
              Current Method
            </h2>

            <div className="space-y-4">

              <input
                className="w-full border rounded-lg p-3"
                placeholder="Resolution"
                value={resolution}
                onChange={(e) =>
                  setResolution(e.target.value)
                }
              />

              <input
                className="w-full border rounded-lg p-3"
                placeholder="Flow Rate"
                value={flowRate}
                onChange={(e) =>
                  setFlowRate(e.target.value)
                }
              />

              <input
                className="w-full border rounded-lg p-3"
                placeholder="Gradient Time"
                value={gradientTime}
                onChange={(e) =>
                  setGradientTime(e.target.value)
                }
              />

              <input
                className="w-full border rounded-lg p-3"
                placeholder="Starting %B"
                value={organic}
                onChange={(e) =>
                  setOrganic(e.target.value)
                }
              />

            </div>

          </div>

          <div className="lg:col-span-2 bg-white rounded-xl border shadow-md p-8">

            <h2 className="text-2xl font-bold mb-6">
              AI Optimization Recommendations
            </h2>

            <div className="space-y-4">

              {recommendations.map((item, index) => (

                <div
                  key={index}
                  className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-5"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </main>

    </Layout>

  );

}