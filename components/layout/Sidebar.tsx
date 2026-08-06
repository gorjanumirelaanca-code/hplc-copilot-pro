"use client";

import Link from "next/link";

const menu = [
  { href: "/", label: "📊 Dashboard" },
  { href: "/laboratory", label: "🧪 Laboratory Workspace" },
  { href: "/assistant", label: "🤖 AI Assistant" },
  { href: "/knowledge", label: "📚 Knowledge Center" },
  { href: "/method-development", label: "🧪 AI Method Development" },
  { href: "/method-optimizer", label: "🧠 Method Optimizer" },
  { href: "/method-comparison", label: "⚖ Method Comparison" },
  { href: "/chromatogram-studio", label: "📈 Chromatogram Studio" },
  { href: "/troubleshooting", label: "⚠ AI Troubleshooting" },
  { href: "/calculators", label: "🧮 Scientific Calculators" },
  { href: "/projects", label: "📁 Projects" },
  { href: "/reports", label: "📄 Reports" },
  { href: "/settings", label: "⚙ Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white p-6 shadow-xl">

      <h1 className="text-3xl font-bold mb-2">
        🧪 HPLC Copilot Pro
      </h1>

      <p className="text-slate-400 text-sm mb-8">
        Practical Pharma Science™
      </p>

      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-4 py-3 hover:bg-slate-700 transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>

    </aside>
  );
}