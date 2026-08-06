"use client";

export default function DashboardFooter() {

  return (

    <footer className="rounded-xl bg-slate-900 text-white p-8">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

        <div>

          <h2 className="text-2xl font-bold">

            HPLC Copilot Pro

          </h2>

          <p className="mt-2 text-slate-300">

            Practical Pharma Science™ AI Platform

          </p>

        </div>

        <div className="text-center">

          <div className="text-lg font-semibold">

            Version 1.0

          </div>

          <div className="text-slate-400">

            © 2026 Mirela Gorjanu

          </div>

        </div>

      </div>

    </footer>

  );

}