"use client";

import { useRouter } from "next/navigation";

export default function StartPage() {

  const router = useRouter();


  const tools = [

    {
      title: "AI Method Development",
      description:
        "Design HPLC methods using compound properties, AI predictions, and optimization.",
      icon: "🧪",
      path: "/method-development"
    },

    {
      title: "HPLC Troubleshooting",
      description:
        "Diagnose retention, peak shape, resolution, pressure and baseline problems.",
      icon: "🔬",
      path: "/assistant"
    },

    {
      title: "Method Validation",
      description:
        "Plan validation parameters and assess analytical readiness.",
      icon: "✅",
      path: "/validation"
    },

    {
      title: "LC-MS Workflow",
      description:
        "Bioanalytical and pharmaceutical LC-MS development tools.",
      icon: "⚡",
      path: "/lcms"
    }

  ];


  return (

    <div className="space-y-8">


      <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-blue-900 text-white p-10">

        <h1 className="text-4xl font-bold">

          HPLC Copilot Pro™

        </h1>

        <p className="mt-3 text-lg text-blue-200">

          AI-powered pharmaceutical chromatography platform

        </p>


      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">


        {tools.map((tool)=>(

          <button

            key={tool.title}

            onClick={() => router.push(tool.path)}

            className="rounded-xl border shadow bg-white p-6 text-left hover:shadow-xl transition"

          >

            <div className="text-4xl mb-4">

              {tool.icon}

            </div>


            <h2 className="text-xl font-bold">

              {tool.title}

            </h2>


            <p className="mt-3 text-slate-600">

              {tool.description}

            </p>


          </button>

        ))}


      </div>


    </div>

  );

}