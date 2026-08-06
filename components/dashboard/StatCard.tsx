type Props = {
  title: string;
  value: string;
  color: string;
};

export default function StatCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div className="bg-white rounded-xl border shadow-md p-6">

      <div className="text-gray-500">
        {title}
      </div>

      <div
        className={`text-4xl font-bold mt-4 ${color}`}
      >
        {value}
      </div>

    </div>
  );
}