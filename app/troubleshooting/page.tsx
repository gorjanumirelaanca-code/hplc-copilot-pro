"use client";

import { useState } from "react";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";

export default function TroubleshootingPage() {

  const [problem, setProblem] = useState("");

  return (

    <Layout>

      <main className="max-w-7xl mx-auto p-8">

        <PageHeader
          title="⚠ AI Troubleshooting Expert"
          subtitle="Diagnose HPLC problems using AI-assisted workflows."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="bg-white rounded-xl shadow-md border p-8">

            <h2 className="text-2xl font-bold mb-6">
              Select Problem
            </h2>

            <select
              className="w-full border rounded-lg p-3"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
            >
              <option value="">
                Choose a problem...
              </option>

              <option>
                Peak Tailing
              </option>

              <option>
                Peak Fronting
              </option>

              <option>
                Low Resolution
              </option>

              <option>
                High Backpressure
              </option>

              <option>
                Retention Time Shift
              </option>

              <option>
                Ghost Peaks
              </option>

              <option>
                Split Peaks
              </option>

              <option>
                Broad Peaks
              </option>

              <option>
                Baseline Noise
              </option>

              <option>
                Baseline Drift
              </option>

            </select>

          </div>

          {/* RIGHT */}

          <div className="lg:col-span-2 bg-white rounded-xl shadow-md border p-8">

            <h2 className="text-2xl font-bold mb-6">
              AI Diagnosis
            </h2>

            {!problem && (

              <div className="text-gray-500">

                Select a chromatographic problem to begin.

              </div>

            )}

            {problem && (

              <div className="space-y-6">

                <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded">

                  <h3 className="font-bold text-lg">

                    Problem

                  </h3>

                  <p className="mt-2">

                    {problem}

                  </p>

                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded">

                  <h3 className="font-bold text-lg">

                    Possible Causes

                  </h3>

                  <ul className="list-disc pl-6 mt-3 space-y-2">

                    <li>Column deterioration</li>

                    <li>Incorrect mobile phase pH</li>

                    <li>Sample solvent mismatch</li>

                    <li>Injection overload</li>

                    <li>System contamination</li>

                  </ul>

                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-5 rounded">

                  <h3 className="font-bold text-lg">

                    Recommended Actions

                  </h3>

                  <ul className="list-disc pl-6 mt-3 space-y-2">

                    <li>Check mobile phase preparation</li>

                    <li>Inspect guard column</li>

                    <li>Flush analytical column</li>

                    <li>Reduce injection volume</li>

                    <li>Verify sample diluent compatibility</li>

                  </ul>

                </div>

              </div>

            )}

          </div>

        </div>

      </main>

    </Layout>

  );

}