"use client";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";

export default function PharmaAIPage() {

  return (

    <Layout>

      <main className="max-w-[1900px] mx-auto p-8">

        <PageHeader
          title="Pharma AI Suite"
          subtitle="AI Platform for Pharmaceutical Development & Quality"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">
              HPLC AI
            </h2>

            <p>
              AI-assisted HPLC method development and optimization.
            </p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">
              LC-MS AI
            </h2>

            <p>
              Bioanalytical and pharmaceutical LC-MS development.
            </p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">
              Validation AI
            </h2>

            <p>
              ICH Q2(R2) method validation guidance and reporting.
            </p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">
              QC AI
            </h2>

            <p>
              AI troubleshooting and laboratory decision support.
            </p>

          </div>

        </div>

      </main>

    </Layout>

  );

}