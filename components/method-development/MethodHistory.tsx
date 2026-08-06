MethodHistory.tsx"use client";

export default function MethodHistory() {

  const history = [

    {
      date: "Today",
      compound: "Current Compound",
      status: "Generated"
    },

    {
      date: "Yesterday",
      compound: "Ibuprofen",
      status: "Optimized"
    },

    {
      date: "Last Week",
      compound: "Paracetamol",
      status: "Validated"
    }

  ];

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Recent Methods

      </h2>

      <div className="space-y-3">

        {history.map((item, index) => (

          <div
            key={index}
            className="rounded-lg border p-4 flex justify-between items-center"
          >

            <div>

              <div className="font-semibold">
                {item.compound}
              </div>

              <div className="text-sm text-slate-500">
                {item.date}
              </div>

            </div>

            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">

              {item.status}

            </span>

          </div>

        ))}

      </div>

    </div>

  );

}