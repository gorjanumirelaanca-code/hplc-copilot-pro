"use client";

export default function QuickActions() {

  const actions = [

    "🧪 New Method",

    "🔍 Search PubChem",

    "📊 Compare Methods",

    "📄 Export PDF",

    "📈 Chromatogram Studio",

    "⚙️ Method Optimizer",

    "🧬 LC-MS Module",

    "📚 Knowledge Base"

  ];

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Quick Actions

      </h2>

      <div className="grid grid-cols-2 gap-3">

        {actions.map((action,index)=>(

          <button

            key={index}

            className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3"

          >

            {action}

          </button>

        ))}

      </div>

    </div>

  );

}