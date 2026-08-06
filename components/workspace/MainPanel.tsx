"use client";

import Link from "next/link";

import {
  FlaskConical,
  Activity,
  SlidersHorizontal,
  Wrench,
  BookOpen,
  Bot,
  ArrowRight
} from "lucide-react";

import DashboardCards from "./DashboardCards";
import ProjectPanel from "./ProjectPanel";
import RecentActivity from "./RecentActivity";
import AIStatus from "./AIStatus";
import QuickActions from "./QuickActions";

import { getDashboardStats } from "@/lib/dashboard/stats";

export default function MainPanel() {

  const stats = getDashboardStats();

  const modules = [

    {
      title: "AI Method Development",
      description: "Generate intelligent HPLC methods from molecular properties.",
      icon: FlaskConical,
      color: "bg-blue-600",
      href: "/method-development"
    },

    {
      title: "Chromatogram Studio",
      description: "Predict chromatograms and visualize peak separations.",
      icon: Activity,
      color: "bg-green-600",
      href: "/chromatogram-studio"
    },

    {
      title: "Method Optimizer",
      description: "Optimize pH, gradient, flow and temperature.",
      icon: SlidersHorizontal,
      color: "bg-purple-600",
      href: "/method-optimizer"
    },

    {
      title: "Troubleshooting",
      description: "Diagnose chromatographic problems using AI.",
      icon: Wrench,
      color: "bg-red-600",
      href: "/troubleshooting"
    },

    {
      title: "Knowledge Center",
      description: "Practical Pharma Science™ scientific library.",
      icon: BookOpen,
      color: "bg-orange-600",
      href: "/knowledge"
    },

    {
      title: "AI Laboratory Assistant",
      description: "Discuss your work with your AI scientific copilot.",
      icon: Bot,
      color: "bg-slate-700",
      href: "/assistant"
    }

  ];

  return (

    <main className="flex-1 overflow-auto bg-slate-100 p-8">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-800">

          HPLC Copilot Pro

        </h1>

        <p className="text-slate-500 mt-2">

          AI-Powered Pharmaceutical Analytical Laboratory

        </p>

      </div>

      {/* Dashboard */}

      <DashboardCards

        projects={stats.projects}

        methods={stats.methods}

        compounds={stats.compounds}

        chromatograms={stats.chromatograms}

      />

      {/* Workspace */}

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 mt-8">

        {/* LEFT */}

        <div className="space-y-6">

          <ProjectPanel />

          <QuickActions />

          <RecentActivity />

          <AIStatus />

        </div>

        {/* RIGHT */}

        <div className="xl:col-span-3">

          <h2 className="text-2xl font-bold mb-6">

            Laboratory Modules

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {modules.map((module) => {

              const Icon = module.icon;

              return (

                <Link

                  key={module.title}

                  href={module.href}

                  className="bg-white rounded-xl shadow border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200"

                >

                  <div className={`${module.color} p-5`}>

                    <Icon

                      size={42}

                      className="text-white"

                    />

                  </div>

                  <div className="p-6">

                    <h2 className="text-xl font-bold mb-3">

                      {module.title}

                    </h2>

                    <p className="text-slate-600 mb-6">

                      {module.description}

                    </p>

                    <div className="flex items-center text-blue-600 font-semibold">

                      Open Module

                      <ArrowRight

                        className="ml-2"

                        size={18}

                      />

                    </div>

                  </div>

                </Link>

              );

            })}

          </div>

        </div>

      </div>

    </main>

  );

}