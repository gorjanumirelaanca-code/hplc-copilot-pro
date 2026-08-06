type QuickActionProps = {
  title: string;
  icon: string;
};

export default function QuickAction({
  title,
  icon,
}: QuickActionProps) {
  return (
    <button className="bg-white border rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 w-full text-left">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>
    </button>
  );
}