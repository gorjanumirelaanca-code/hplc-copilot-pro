export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-blue-900">
          🧪 HPLC Copilot Pro
        </h1>

        <p className="text-gray-600 mt-2 text-xl">
          Welcome back, Mirela!
        </p>

        <div className="grid grid-cols-4 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="font-bold">Methods</h2>
            <p className="text-5xl mt-4">24</p>
          </div>

          <div className="bg-green-600 text-white rounded-xl shadow-lg p-6">
            <h2 className="font-bold">System Suitability</h2>
            <p className="text-5xl mt-4">98%</p>
          </div>

          <div className="bg-red-600 text-white rounded-xl shadow-lg p-6">
            <h2 className="font-bold">Alerts</h2>
            <p className="text-5xl mt-4">3</p>
          </div>

          <div className="bg-orange-600 text-white rounded-xl shadow-lg p-6">
            <h2 className="font-bold">Reports</h2>
            <p className="text-5xl mt-4">8</p>
          </div>

        </div>

      </div>
    </main>
  );
}