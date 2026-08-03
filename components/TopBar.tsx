export default function TopBar() {
  return (
    <header className="bg-white shadow-md rounded-xl p-4 mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          HPLC Copilot Pro
        </h1>
        <p className="text-gray-500">
          Practical Pharma Science™
        </p>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 w-64"
        />

        <button className="text-2xl">🔔</button>

        <div className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
          M
        </div>
      </div>
    </header>
  );
}