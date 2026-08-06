"use client";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";

export default function SimulatorPage() {

  return (

    <Layout>

      <main className="max-w-[1900px] mx-auto p-8">

        <PageHeader
          title="HPLC Method Simulator"
          subtitle="Interactive AI Simulation Engine"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-2xl font-bold mb-4">

              Compound

            </h2>

            <p className="text-slate-600">

              Select a compound from PubChem to begin the simulation.

            </p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-2xl font-bold mb-4">

              Method Parameters

            </h2>

            <p className="text-slate-600">

              Modify column, pH, gradient, temperature and flow rate.

            </p>

          </div>

          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-2xl font-bold mb-4">

              AI Prediction

            </h2>

            <p className="text-slate-600">

              Live prediction of retention, resolution, pressure and peak quality.

            </p>

          </div>

        </div>

      </main>

    </Layout>

  );

}