"use client";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";

export default function QCPage() {

  return (

    <Layout>

      <main className="max-w-[1900px] mx-auto p-8">

        <PageHeader
          title="QC Laboratory AI"
          subtitle="Quality Control Laboratory Decision Support"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">

              System Suitability

            </h2>

            <p>

              AI evaluation of chromatographic system performance.

            </p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">

              OOS Investigation

            </h2>

            <p>

              Guided out-of-specification investigation workflow.

            </p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">

              Troubleshooting

            </h2>

            <p>

              Diagnose pressure, retention, baseline and peak shape problems.

            </p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">

              AI Reports

            </h2>

            <p>

              Generate laboratory-ready reports and recommendations.

            </p>

          </div>

        </div>

      </main>

    </Layout>

  );

}