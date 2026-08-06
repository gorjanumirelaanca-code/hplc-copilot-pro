import CalculatorSidebar from "@/components/navigation/CalculatorSidebar";

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <CalculatorSidebar />

      <div className="flex-1 p-8">
        {children}
      </div>

    </div>
  );
}