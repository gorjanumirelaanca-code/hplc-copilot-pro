type Props = {
  flowRate: number;
};

export default function AIInterpretationCard({
  flowRate,
}: Props) {
  const pressure = Math.round(flowRate * 180);

  let interpretation = "";

  if (flowRate < 0.8) {
    interpretation =
      "Lower flow rate increases analyte interaction with the stationary phase. Retention times increase, pressure decreases, and resolution generally improves at the expense of longer run times.";
  } else if (flowRate <= 1.2) {
    interpretation =
      "Flow rate is within the typical operating range for a 4.6 mm I.D. analytical HPLC column. This provides a good balance between resolution, analysis time, and backpressure.";
  } else {
    interpretation =
      "Higher flow rates shorten retention times and increase throughput, but may reduce chromatographic resolution while increasing system backpressure.";
  }

  return (
    <div className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white rounded-xl shadow-xl p-8">

      <h2 className="text-2xl font-bold mb-6">
        🤖 AI Interpretation
      </h2>

      <div className="space-y-5">

        <div>

          <div className="text-blue-200 text-sm">
            Current Flow Rate
          </div>

          <div className="text-3xl font-bold mt-2">
            {flowRate.toFixed(2)} mL/min
          </div>

        </div>

        <div>

          <div className="text-blue-200 text-sm">
            Estimated Pressure
          </div>

          <div className="text-3xl font-bold mt-2">
            {pressure} bar
          </div>

        </div>

        <div className="bg-white/10 rounded-lg p-5">

          <p className="leading-8">
            {interpretation}
          </p>

        </div>

      </div>

    </div>
  );
}