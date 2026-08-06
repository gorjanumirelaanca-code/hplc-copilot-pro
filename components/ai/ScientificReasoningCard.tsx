type Props = {
  summary: string;
  reasoning: string[];
  confidence: number;
};

export default function ScientificReasoningCard({
  summary,
  reasoning,
  confidence,
}: Props) {
  return (
    <div className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white rounded-xl shadow-xl p-8">

      <h2 className="text-2xl font-bold mb-4">
        🧠 AI Scientific Reasoning
      </h2>

      <p className="text-lg mb-6">
        {summary}
      </p>

      <div className="space-y-3">

        {reasoning.map((item, index) => (

          <div
            key={index}
            className="bg-white/10 rounded-lg p-4"
          >
            • {item}
          </div>

        ))}

      </div>

      <div className="mt-8 pt-6 border-t border-white/20">

        <div className="text-blue-100">
          Confidence
        </div>

        <div className="text-3xl font-bold mt-2">
          {confidence}%
        </div>

      </div>

    </div>
  );
}