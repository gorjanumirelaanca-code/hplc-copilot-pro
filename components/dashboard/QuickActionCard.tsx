import Link from "next/link";

type Props = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

export default function QuickActionCard({
  title,
  description,
  icon,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-xl border shadow-md hover:shadow-xl transition p-6"
    >
      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-gray-600">
        {description}
      </p>
    </Link>
  );
}