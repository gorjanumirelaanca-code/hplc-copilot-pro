type SectionCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function SectionCard({
  title,
  children,
}: SectionCardProps) {
  return (
    <div className="bg-white rounded-xl border shadow-md p-8">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        {title}
      </h2>

      {children}

    </div>
  );
