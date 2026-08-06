type ResultCardProps = {
  title: string;
  value: string;
  status: "PASS" | "WARNING" | "FAIL";
  interpretation: string;
  recommendation: string;
};

export default function ResultCard({
  title,
  value,
  status,
  interpretation,
  recommendation,
}: ResultCardProps) {
  const colors = {
    PASS: {
      bg: "bg-green-50",
      border: "border-green-500",
      text: "text-green-700",
    },
    WARNING: {
      bg: "bg-yellow-50",
      border: "border-yellow-500",
      text: "text-yellow-700",
    },
    FAIL: {
      bg: "bg-red-50",
      border: "border-red-500",
      text: "text-red-700",
    },
  };

  const style = colors[status];

  return (
    <div className={`mt-8 rounded-xl border-2 ${style.bg} ${style.border} p-8`}>

      <div className="flex justify-between items-start">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="text-5xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`px-5 py-2 rounded-lg font-bold ${style.bg} ${style.text}`}
        >
          {status}
        </div>

      </div>

      <hr className="my-6" />

      <div>

        <h3 className="font-bold text-lg mb-2">
          Interpretation
        </h3>

        <p className="text-gray-700">
          {interpretation}
        </p>

      </div>

      <div className="mt-6">

        <h3 className="font-bold text-lg mb-2">
          Recommendation
        </h3>

        <p className="text-gray-700">
          {recommendation}
        </p>

      </div>

    </div>
  );
}