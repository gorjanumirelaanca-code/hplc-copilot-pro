type Props = {
  retention: number;
  pressure: number;
  resolution: number;
  tailing: number;
  confidence: number;
};

export default function PredictionCard({
  retention,
  pressure,
  resolution,
  tailing,
  confidence,
}: Props) {

  return (

    <div className="bg-white rounded-xl border shadow-md p-8">

      <h2 className="text-2xl font-bold mb-8">

        🔬 AI Prediction

      </h2>

      <div className="space-y-4">

        <Row
          label="Predicted Retention (k')"
          value={retention.toFixed(2)}
        />

        <Row
          label="Predicted Resolution"
          value={resolution.toFixed(2)}
        />

        <Row
          label="Estimated Pressure"
          value={`${pressure} bar`}
        />

        <Row
          label="Predicted Tailing"
          value={tailing.toFixed(2)}
        />

        <Row
          label="Confidence"
          value={`${confidence}%`}
        />

      </div>

    </div>

  );

}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {

  return (

    <div className="flex justify-between border-b pb-3">

      <span>{label}</span>

      <strong>{value}</strong>

    </div>

  );

}