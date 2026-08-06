"use client";

export default function MethodComparison() {

  const rows = [

    ["Column","C18","Phenyl","C8"],

    ["Organic","ACN","MeOH","ACN"],

    ["Buffer","0.1% FA","10 mM Phosphate","10 mM Formate"],

    ["Flow","1.0","1.0","0.8"],

    ["Temperature","30°C","35°C","40°C"],

    ["Predicted RT","5.6 min","6.8 min","4.3 min"],

    ["Score","96","91","88"]

  ];

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        AI Method Comparison

      </h2>

      <table className="w-full border-collapse">

        <thead>

          <tr className="bg-slate-100">

            <th className="border p-2 text-left">Parameter</th>
            <th className="border p-2">Method A</th>
            <th className="border p-2">Method B</th>
            <th className="border p-2">Method C</th>

          </tr>

        </thead>

        <tbody>

          {rows.map((row,index)=>(

            <tr key={index}>

              <td className="border p-2 font-semibold">{row[0]}</td>
              <td className="border p-2 text-center">{row[1]}</td>
              <td className="border p-2 text-center">{row[2]}</td>
              <td className="border p-2 text-center">{row[3]}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}