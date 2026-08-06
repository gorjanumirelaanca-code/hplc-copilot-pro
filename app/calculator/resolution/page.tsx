import Link from "next/link";

import ResolutionCalculator from "@/components/calculators/ResolutionCalculator";
import PageHeader from "@/components/common/PageHeader";

export default function ResolutionPage() {
  return (
    <main className="max-w-7xl mx-auto">

      <div className="mb-6">
        <Link
          href="/calculators"
          className="text-blue-600 hover:underline"
        >
          ← Back to Calculator Dashboard
        </Link>
      </div>

      <PageHeader
        title="Resolution Calculator (Rs)"
        subtitle="Calculate chromatographic resolution between two adjacent peaks."
      />

      <ResolutionCalculator />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

        <div className="bg-white rounded-xl shadow-md border p-8">

          <h2 className="text-2xl font-bold mb-5">
            Formula
          </h2>

          <div className="bg-slate-100 rounded-lg p-6 text-center text-2xl font-mono">

            Rs =

            <div className="mt-4">
              2(tR₂ − tR₁)
            </div>

            <hr className="my-3"/>

            <div>
              W₁ + W₂
            </div>

          </div>

        </div>

        <div className="bg-white rounded-xl shadow-md border p-8">

          <h2 className="text-2xl font-bold mb-5">
            Interpretation
          </h2>

          <table className="w-full">

            <tbody>

              <tr className="border-b">
                <td className="py-3 font-bold">&lt; 1.5</td>
                <td>Peak overlap likely</td>
              </tr>

              <tr className="border-b">
                <td className="py-3 font-bold">1.5–2.0</td>
                <td>Partial baseline separation</td>
              </tr>

              <tr>
                <td className="py-3 font-bold">≥ 2.0</td>
                <td>Baseline separation</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      <div className="bg-white rounded-xl shadow-md border p-8 mt-8">

        <h2 className="text-2xl font-bold mb-5">
          Practical Optimization
        </h2>

        <ul className="space-y-3">

          <li>✔ Reduce flow rate if efficiency is limiting.</li>

          <li>✔ Increase column length.</li>

          <li>✔ Use smaller particle size.</li>

          <li>✔ Optimize mobile phase composition.</li>

          <li>✔ Adjust pH for ionizable compounds.</li>

          <li>✔ Change stationary phase chemistry if selectivity is poor.</li>

        </ul>

      </div>

      <div className="bg-white rounded-xl shadow-md border p-8 mt-8">

        <h2 className="text-2xl font-bold mb-5">
          Regulatory References
        </h2>

        <ul className="space-y-2">

          <li>USP &lt;621&gt; Chromatography</li>

          <li>European Pharmacopoeia 2.2.46</li>

          <li>ICH Q2(R2) – Analytical Procedure Validation</li>

        </ul>

      </div>

    </main>
  );
}