"use client";

export default function MethodExport() {

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Export & Share

      </h2>

      <div className="grid grid-cols-2 gap-4">

        <button className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3">
          📄 PDF
        </button>

        <button className="rounded-lg bg-green-600 hover:bg-green-700 text-white py-3">
          📊 Excel
        </button>

        <button className="rounded-lg bg-purple-600 hover:bg-purple-700 text-white py-3">
          🖨 Print
        </button>

        <button className="rounded-lg bg-slate-700 hover:bg-slate-800 text-white py-3">
          💾 Save
        </button>

      </div>

    </div>

  );

}