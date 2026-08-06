"use client";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";

export default function LCMSPage() {

  return (

    <Layout>

      <main className="max-w-[1800px] mx-auto p-8">

        <PageHeader
          title="LC-MS Method Development"
          subtitle="AI-Powered Bioanalytical & Pharmaceutical LC-MS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">
              Compound
            </h2>

            <p>Select compound from PubChem.</p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">
              Ionization
            </h2>

            <p>ESI+, ESI−, APCI or APPI prediction.</p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">
              MS Parameters
            </h2>

            <p>Collision energy, precursor ions, product ions.</p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-xl font-bold mb-4">
              AI Optimization
            </h2>

            <p>Automatic LC-MS method optimization.</p>

          </div>

        </div>

      </main>

    </Layout>

  );

}