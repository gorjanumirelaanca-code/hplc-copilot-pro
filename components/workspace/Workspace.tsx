"use client";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import StatusBar from "./StatusBar";
import MainPanel from "./MainPanel";

export default function Workspace() {
  return (
    <div className="h-screen flex flex-col bg-slate-100">

      <TopBar />

      <div className="flex flex-1 overflow-hidden">

        <Sidebar />

        <MainPanel />

      </div>

      <StatusBar />

    </div>
  );
}