export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-blue-900 text-white p-4 shadow-lg">
        <h1 className="text-3xl font-bold">
          🧪 HPLC Copilot Pro
        </h1>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
}