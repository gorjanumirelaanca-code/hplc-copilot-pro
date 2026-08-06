import Layout from "@/components/layout/Layout";

import ResolutionCalculator from "@/components/calculators/ResolutionCalculator";
import CapacityFactorCalculator from "@/components/calculators/CapacityFactorCalculator";
import SelectivityCalculator from "@/components/calculators/SelectivityCalculator";
import PlateNumberCalculator from "@/components/calculators/PlateNumberCalculator";
import TailingFactorCalculator from "@/components/calculators/TailingFactorCalculator";

export default function CalculatorsPage() {
  return (
    <Layout>
      <main className="p-8 bg-slate-100 min-h-screen">

        <h1 className="text-4xl font-bold text-slate-800 mb-2">
          🧮 HPLC Calculators
        </h1>

        <p className="text-gray-600 mb-8">
          Practical chromatography calculators for pharmaceutical scientists
        </p>

        <div className="space-y-10">

          <ResolutionCalculator />

          <CapacityFactorCalculator />

          <SelectivityCalculator />

          <PlateNumberCalculator />

          <TailingFactorCalculator />

        </div>

      </main>
    </Layout>
  );
}