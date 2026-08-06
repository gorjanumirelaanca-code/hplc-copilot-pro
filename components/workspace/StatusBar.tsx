"use client";

import {
  CheckCircle2,
  Database,
  BrainCircuit,
  Activity
} from "lucide-react";

export default function StatusBar() {
  return (
    <footer className="h-10 bg-slate-900 text-white flex items-center justify-between px-6 text-sm">

      <div className="flex items-center gap-8">

        <div className="flex items-center gap-2 text-green-400">

          <Database size={16} />

          <span>PubChem Connected</span>

        </div>

        <div className="flex items-center gap-2 text-green-400">

          <BrainCircuit size={16} />

          <span>AI Engine Ready</span>

        </div>

        <div className="flex items-center gap-2 text-green-400">

          <Activity size={16} />

          <span>Simulator Ready</span>

        </div>

      </div>

      <div className="flex items-center gap-2 text-green-400">

        <CheckCircle2 size={16} />

        <span>System Ready</span>

      </div>

    </footer>
  );
}