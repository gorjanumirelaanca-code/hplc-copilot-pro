"use client";

export default function ReleaseNotes() {

  const notes = [

    "✓ PubChem compound lookup",

    "✓ Structure visualization",

    "✓ AI column recommendation",

    "✓ AI mobile phase recommendation",

    "✓ AI buffer recommendation",

    "✓ AI gradient recommendation",

    "✓ AI retention prediction",

    "✓ AI optimizer",

    "✓ AI knowledge engine",

    "✓ System suitability prediction",

    "✓ Method dashboard",

    "✓ Method comparison",

    "✓ Experimental planner",

    "✓ Validation tracker",

    "✓ Export framework"

  ];

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Version 1.0 Features

      </h2>

      <div className="space-y-2">

        {notes.map((note,index)=>(

          <div
            key={index}
            className="rounded-lg bg-slate-50 p-3"
          >

            {note}

          </div>

        ))}

      </div>

    </div>

  );

}