"use client";

import { Search, Bell, UserCircle2 } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">

      <div className="flex items-center gap-4">

        <h2 className="text-xl font-bold text-slate-800">
          Laboratory Workspace
        </h2>

      </div>

      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search compounds, methods..."
            className="pl-10 pr-4 py-2 w-80 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <button className="relative p-2 rounded-lg hover:bg-slate-100">

          <Bell size={22} />

          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle2
            size={34}
            className="text-slate-700"
          />

          <div>

            <p className="font-semibold">
              Mirela Gorjanu
            </p>

            <p className="text-xs text-slate-500">
              Practical Pharma Science™
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}