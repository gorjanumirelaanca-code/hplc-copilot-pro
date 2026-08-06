"use client";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";

export default function ValidationPage() {

  return (

    <Layout>

      <main className="max-w-[1900px] mx-auto p-8">

        <PageHeader
          title="Method Validation AI"
          subtitle="ICH Q2(R2) Validation Workspace"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">

              Linearity

            </h2>

            <p>Regression, R² and calibration analysis.</p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">

              Accuracy

            </h2>

            <p>Recovery calculations and acceptance criteria.</p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">

              Precision

            </h2>

            <p>Repeatability and intermediate precision.</p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">

              Robustness

            </h2>

            <p>Evaluate method robustness using AI guidance.</p>

          </div>

        </div>

      </main>

    </Layout>

  );

}