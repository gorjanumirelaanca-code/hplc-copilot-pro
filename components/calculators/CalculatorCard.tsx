import Link from "next/link";

type CalculatorCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export default function CalculatorCard({
  title,
  description,
  href,
  icon,
}: CalculatorCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-xl border shadow-md hover:shadow-xl transition-all duration-200 p-6"
    >
      <div className="text-4xl mb-4">
        {icon}
      </div>

      <h2 className="text-xl font-bold text-slate-800">
        {title}
      </h2>

      <p className="mt-3 text-gray-600">
        {description}
      </p>
    </Link>
  );
}