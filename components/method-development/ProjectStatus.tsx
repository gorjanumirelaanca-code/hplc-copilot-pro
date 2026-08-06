"use client";

export default function ProjectStatus() {

  return (

    <div className="rounded-xl border shadow bg-gradient-to-r from-emerald-600 to-green-700 text-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Project Status

      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>PubChem Integration</span>
          <strong>✓ Complete</strong>
        </div>

        <div className="flex justify-between">
          <span>AI Method Generator</span>
          <strong>✓ Complete</strong>
        </div>

        <div className="flex justify-between">
          <span>Column Selection</span>
          <strong>✓ Complete</strong>
        </div>

        <div className="flex justify-between">
          <span>Mobile Phase AI</span>
          <strong>✓ Complete</strong>
        </div>

        <div className="flex justify-between">
          <span>Gradient Prediction</span>
          <strong>✓ Complete</strong>
        </div>

        <div className="flex justify-between">
          <span>Retention Prediction</span>
          <strong>✓ Complete</strong>
        </div>

        <div className="flex justify-between">
          <span>Dashboard</span>
          <strong>✓ Complete</strong>
        </div>

        <div className="flex justify-between">
          <span>Overall Progress</span>
          <strong>95%</strong>
        </div>

      </div>

    </div>

  );

}