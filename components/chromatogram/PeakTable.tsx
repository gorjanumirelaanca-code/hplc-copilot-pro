"use client";

import { Peak } from "@/lib/ai/gaussian";

interface Props {
  peaks: Peak[];
}

export default function PeakTable({ peaks }: Props) {

  return (

    <div className="bg-white rounded-xl shadow border border-slate-200 p-6">

      <h2 className="text-2xl font-bold mb-6">

        Predicted Peak Table

      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-3">
              Peak
            </th>

            <th className="text-center">
              RT (min)
            </th>

            <th className="text-center">
              Width
            </th>

            <th className="text-center">
              Height
            </th>

          </tr>

        </thead>

        <tbody>

          {peaks.map((peak, index) => (

            <tr
              key={index}
              className="border-b hover:bg-slate-50"
            >

              <td className="py-3">

                Peak {index + 1}

              </td>

              <td className="text-center">

                {peak.retentionTime.toFixed(2)}

              </td>

              <td className="text-center">

                {peak.width.toFixed(2)}

              </td>

              <td className="text-center">

                {peak.height}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}