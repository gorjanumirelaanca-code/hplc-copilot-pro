export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
        🧪 HPLC Copilot Pro
      </h1>

      <nav className="space-y-4">
        <button className="w-full text-left p-3 rounded-lg bg-blue-700 hover:bg-blue-600">
          📊 Dashboard
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-700">
          🤖 AI Assistant
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-700">
          🧪 Method Development
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-700">
          📈 Chromatograms
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-700">
          ⚠ Troubleshooting
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-700">
          📄 Reports
        </button>

        <button className="w-full text-left p-3 rounded-lg hover:bg-slate-700">
          ⚙ Settings
        </button>
      </nav>
    </aside>
  );
}