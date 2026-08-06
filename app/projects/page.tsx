"use client";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";

export default function ProjectsPage() {
  return (
    <Layout>

      <main className="max-w-7xl mx-auto p-8">

        <PageHeader
          title="📁 Project Workspace"
          subtitle="Manage analytical development projects from start to finish."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl border shadow-md p-8">

            <h2 className="text-2xl font-bold mb-6">
              Active Projects
            </h2>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold mb-6"
            >
              ➕ New Project
            </button>

            <div className="space-y-4">

              <div className="border rounded-lg p-4 hover:bg-slate-50 cursor-pointer">

                <h3 className="font-bold">
                  Ibuprofen Assay
                </h3>

                <p className="text-gray-500 mt-2">
                  AI Method Development
                </p>

              </div>

              <div className="border rounded-lg p-4 hover:bg-slate-50 cursor-pointer">

                <h3 className="font-bold">
                  Related Substances
                </h3>

                <p className="text-gray-500 mt-2">
                  Validation Stage
                </p>

              </div>

            </div>

          </div>

          <div className="lg:col-span-2 bg-white rounded-xl border shadow-md p-8">

            <h2 className="text-2xl font-bold mb-8">
              Project Overview
            </h2>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-blue-50 rounded-lg p-5">

                <div className="text-gray-500">
                  Method Development
                </div>

                <div className="text-2xl mt-2">
                  ✅ Complete
                </div>

              </div>

              <div className="bg-green-50 rounded-lg p-5">

                <div className="text-gray-500">
                  Chromatogram
                </div>

                <div className="text-2xl mt-2">
                  ✅ Simulated
                </div>

              </div>

              <div className="bg-yellow-50 rounded-lg p-5">

                <div className="text-gray-500">
                  Validation
                </div>

                <div className="text-2xl mt-2">
                  ⏳ Pending
                </div>

              </div>

              <div className="bg-purple-50 rounded-lg p-5">

                <div className="text-gray-500">
                  Final Report
                </div>

                <div className="text-2xl mt-2">
                  📄 Ready
                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </Layout>
  );
}