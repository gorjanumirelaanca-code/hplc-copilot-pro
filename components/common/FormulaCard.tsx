type FormulaCardProps = {
  title: string;
  formula: string;
  description: string;
};

export default function FormulaCard({
  title,
  formula,
  description,
}: FormulaCardProps) {
  return (
    <div className="bg-white rounded-xl border shadow-md p-8">

      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        {title}
      </h2>

      <div className="bg-slate-100 rounded-lg p-6 text-center">

        <div className="text-3xl font-mono font-bold">
          {formula}
        </div>

      </div>

      <p className="mt-5 text-gray-600 leading-7">
        {description}
      </p>

    </div>
  );
}