type RecommendationCardProps = {
  title: string;
  recommendations: string[];
};

export default function RecommendationCard({
  title,
  recommendations,
}: RecommendationCardProps) {
  return (
    <div className="bg-white rounded-xl border shadow-md p-8">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        💡 {title}
      </h2>

      <div className="space-y-4">

        {recommendations.map((item, index) => (

          <div
            key={index}
            className="flex gap-3 items-start p-4 rounded-lg bg-slate-50"
          >
            <div className="text-green-600 font-bold">
              ✓
            </div>

            <div className="text-gray-700">
              {item}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}