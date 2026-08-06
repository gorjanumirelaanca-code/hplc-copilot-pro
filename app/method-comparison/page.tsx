"use client";

import { useState } from "react";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";

export default function MethodComparisonPage() {

  const [methodA] = useState({
    column: "C18",
    flow: "1.0",
    pH: "3.0",
    runtime: "10"
  });

  const [methodB] = useState({
    column: "Phenyl",
    flow: "0.8",
    pH: "2.7",
    runtime: "15"
  });

  return (

    <Layout>

      <main className="max-w-7xl mx-auto p-8">

        <PageHeader
          title="⚖ AI Method Comparison"
          subtitle="Compare chromatographic methods side-by-side."
        />

        <div className="bg-white rounded-xl border shadow-md p-8 overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-4">
                  Parameter
                </th>

                <th className="text-left">
                  Method A
                </th>

                <th className="text-left">
                  Method B
                </th>

              </tr>

            </thead>

            <tbody>

              <Row
                title="Column"
                a={methodA.column}
                b={methodB.column}
              />

              <Row
                title="Flow Rate"
                a={`${methodA.flow} mL/min`}
                b={`${methodB.flow} mL/min`}
              />

              <Row
                title="pH"
                a={methodA.pH}
                b={methodB.pH}
              />

              <Row
                title="Runtime"
                a={`${methodA.runtime} min`}
                b={`${methodB.runtime} min`}
              />

            </tbody>

          </table>

        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-xl p-8 mt-8">

          <h2 className="text-2xl font-bold mb-4">

            🤖 AI Recommendation

          </h2>

          <p className="leading-8">

            Method B is predicted to provide improved selectivity
            for aromatic compounds due to Phenyl stationary phase
            interactions. Method A offers shorter analysis time
            and may be preferred for routine QC assays.

          </p>

        </div>

      </main>

    </Layout>

  );

}

function Row({
  title,
  a,
  b,
}: {
  title: string;
  a: string;
  b: string;
}) {

  return (

    <tr className="border-b">

      <td className="py-4 font-semibold">

        {title}

      </td>

      <td>{a}</td>

      <td>{b}</td>

    </tr>

  );

}