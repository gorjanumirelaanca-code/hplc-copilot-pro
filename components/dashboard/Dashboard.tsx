import StatCard from "./StatCard";
import QuickAction from "./QuickAction";
import RecentProjects from "./RecentProjects";

export default function Dashboard() {
  return (
    <main className="p-8 bg-slate-100 min-h-screen">

      <h1 className="text-4xl font-bold text-slate-800 mb-8">
        🧪 HPLC Copilot Pro
      </h1>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        <StatCard
          title="Methods"
          value="124"
          color="bg-blue-600"
        />

        <StatCard
          title="Chromatograms"
          value="2,846"
          color="bg-green-600"
        />

        <StatCard
          title="SST Pass Rate"
          value="98.7%"
          color="bg-purple-600"
        />

        <StatCard
          title="AI Status"
          value="Coming Soon"
          color="bg-orange-500"
        />

      </div>

      {/* Quick Actions */}

      <h2 className="text-2xl font-bold text-slate-800 mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 mb-10">

        <QuickAction
          title="Calculators"
          icon="🧮"
        />

        <QuickAction
          title="Method Development"
          icon="🧪"
        />

        <QuickAction
          title="Simulator"
          icon="📈"
        />

        <QuickAction
          title="Troubleshooting"
          icon="⚠️"
        />

        <QuickAction
          title="Knowledge Base"
          icon="📚"
        />

        <QuickAction
          title="Reports"
          icon="📄"
        />

      </div>

      {/* Recent Projects */}

      <RecentProjects />

    </main>
  );
}