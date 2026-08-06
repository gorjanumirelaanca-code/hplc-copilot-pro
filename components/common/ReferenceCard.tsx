type ReferenceCardProps = {
  references: string[];
};

export default function ReferenceCard({
  references,
}: ReferenceCardProps) {
  return (
    <div className="bg-white rounded-xl border shadow-md p-8">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        📚 References
      </h2>

      <ul className="space-y-3">

        {references.map((reference, index) => (

          <li
            key={index}
            className="border-b pb-3 last:border-b-0 text-gray-700"
          >
            {reference}
          </li>

        ))}

      </ul>

    </div>
  );
}