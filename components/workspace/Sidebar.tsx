"use client";

import Link from "next/link";
import {
  FlaskConical,
  Beaker,
  Activity,
  Wrench,
  BookOpen,
  Bot,
  FolderOpen
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col">

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-2xl font-bold">
          HPLC Copilot Pro
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Practical Pharma Science™
        </p>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        <Link
          href="/laboratory"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <FlaskConical size={20} />
          Laboratory
        </Link>

        <Link
          href="/method-development"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <Beaker size={20} />
          Method Development
        </Link>

        <Link
          href="/chromatogram-studio"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <Activity size={20} />
          Chromatogram
        </Link>

        <Link
          href="/troubleshooting"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <Wrench size={20} />
          Troubleshooting
        </Link>

        <Link
          href="/knowledge"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <BookOpen size={20} />
          Knowledge Base
        </Link>

        <Link
          href="/assistant"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <Bot size={20} />
          AI Assistant
        </Link>

      </nav>

      <div className="border-t border-slate-700 p-5">

        <div className="flex items-center gap-3">

          <FolderOpen size={20} />

          <div>

            <p className="font-semibold">
              Current Project
            </p>

            <p className="text-sm text-slate-400">
              Untitled Project
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}