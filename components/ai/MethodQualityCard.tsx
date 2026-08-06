type Props = {
  score: {
    overall: number;
    column: number;
    mobilePhase: number;
    gradient: number;
    flowRate: number;
    temperature: number;
    robustness: number;
    validation: number;
  };
};

export default function MethodQualityCard({
  score,
}: Props) {
  const rows = [
    ["Column Selection", score.column],
    ["Mobile Phase", score.mobilePhase],
    ["Gradient", score.gradient],
    ["Flow Rate", score.flowRate],
    ["Temperature", score.temperature],
    ["Robustness", score.robustness],
    ["Validation", score.validation],
  ];

  return (
    <div className="bg-white rounded-xl border shadow-md p-8">

      <h2 className="text-2xl font-bold mb-6">
        ⭐ AI Method Quality Score
      </h2>

      <div className="text-center mb-8">

        <div className="text-6xl font-bold text-green-600">
          {score.overall}
        </div>

        <div className="text-gray-500">
          /100
        </div>

        <div className="mt-4 text-xl font-semibold text-green-700">
          Excellent
        </div>

      </div>

      <div className="space-y-4">

        {rows.map(([name, value]) => (

          <div
            key={String(name)}
            className="flex justify-between border-b pb-2"
          >
            <span>{name}</span>

            <strong>{value}/10</strong>

          </div>

        ))}

      </div>

    </div>
  );
}