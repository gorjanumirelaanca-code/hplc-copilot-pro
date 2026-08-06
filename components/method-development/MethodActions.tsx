"use client";

import { useState } from "react";

export default function MethodActions() {

  const [message, setMessage] = useState("");

  const actions = [

    {
      name: "Optimize Method",
      icon: "⚙️"
    },

    {
      name: "Run Simulation",
      icon: "🧪"
    },

    {
      name: "Compare Methods",
      icon: "📊"
    },

    {
      name: "Save Method",
      icon: "💾"
    },

    {
      name: "Generate Report",
      icon: "📄"
    }

  ];


  function execute(action:string) {

    setMessage(`${action} executed`);

  }


  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        AI Method Actions

      </h2>


      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">


        {actions.map((action)=>(

          <button

            key={action.name}

            onClick={() => execute(action.name)}

            className="rounded-lg bg-slate-900 hover:bg-blue-700 text-white p-4 font-semibold"

          >

            <div className="text-2xl mb-2">

              {action.icon}

            </div>

            {action.name}

          </button>

        ))}


      </div>


      {message && (

        <div className="mt-5 rounded-lg bg-blue-50 p-4">

          {message}

        </div>

      )}


    </div>

  );

}