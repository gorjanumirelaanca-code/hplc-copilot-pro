type Props = {
  result: any;
};

export default function MethodSummary({ result }: Props) {
  if (!result) return null;

  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        AI Method Summary
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        <div>
          <div className="text-blue-200 text-sm">
            Column
          </div>

          <div className="font-bold mt-2">
            {result.column}
          </div>
        </div>

        <div>
          <div className="text-blue-200 text-sm">
            Flow
          </div>

          <div className="font-bold mt-2">
            {result.flowRate}
          </div>
        </div>

        <div>
          <div className="text-blue-200 text-sm">
            pH
          </div>

          <div className="font-bold mt-2">
            {result.pH}
          </div>
        </div>

        <div>
          <div className="text-blue-200 text-sm">
            Temperature
          </div>

          <div className="font-bold mt-2">
            {result.temperature}
          </div>
        </div>

      </div>

    </div>
  );
}