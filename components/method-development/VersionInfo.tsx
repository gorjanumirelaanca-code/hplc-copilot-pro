"use client";

export default function VersionInfo() {

  return (

    <div className="rounded-xl border shadow bg-slate-900 text-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        HPLC Copilot Pro

      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Version</span>
          <strong>1.0.0</strong>
        </div>

        <div className="flex justify-between">
          <span>Build</span>
          <strong>August 2026</strong>
        </div>

        <div className="flex justify-between">
          <span>Engine</span>
          <strong>Practical Pharma Science™ AI</strong>
        </div>

        <div className="flex justify-between">
          <span>Status</span>
          <strong>Development</strong>
        </div>

        <div className="flex justify-between">
          <span>Author</span>
          <strong>Mirela Gorjanu</strong>
        </div>

      </div>

    </div>

  );

}