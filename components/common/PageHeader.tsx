type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border p-8 mb-8">

      <h1 className="text-4xl font-bold text-slate-800">
        {title}
      </h1>

      <p className="text-gray-600 mt-2">
        {subtitle}
      </p>

    </div>
  );
}