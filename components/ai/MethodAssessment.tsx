type Props = {
  score: number;
};

export default function MethodAssessment({
  score,
}: Props) {

  let color = "bg-red-500";
  let label = "Needs Optimization";

  if (score >= 90) {
    color = "bg-green-600";
    label = "Excellent";
  } else if (score >= 75) {
    color = "bg-blue-600";
    label = "Good";
  } else if (score >= 60) {
    color = "bg-yellow-500";
    label = "Acceptable";
  }

  return (

    <div className="bg-white rounded-xl shadow-md border p-8">

      <h2 className="text-2xl font-bold mb-8">
        📊 AI Method Assessment
      </h2>

      <div className="flex items-center gap-6">

        <div
          className={`w-28 h-28 rounded-full ${color} text-white flex items-center justify-center text-4xl font-bold`}
        >
          {score}
        </div>

        <div>

          <div className="text-2xl font-bold">
            {label}
          </div>

          <p className="text-gray-500 mt-2">

            Overall AI assessment of the predicted
            chromatographic method.

          </p>

        </div>

      </div>

    </div>

  );

}