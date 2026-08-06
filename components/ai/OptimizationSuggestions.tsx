type Props = {
  suggestions: string[];
};

export default function OptimizationSuggestions({
  suggestions,
}: Props) {

  return (

    <div className="bg-white rounded-xl border shadow-md p-8">

      <h2 className="text-2xl font-bold mb-6">
        🚀 Optimization Suggestions
      </h2>

      <div className="space-y-4">

        {suggestions.map((item, index) => (

          <div
            key={index}
            className="bg-green-50 border-l-4 border-green-600 rounded-lg p-4"
          >
            {item}
          </div>

        ))}

      </div>

    </div>

  );

}