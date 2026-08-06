"use client";

import {
  Database,
  BrainCircuit,
  FolderKanban,
  BarChart3,
  Activity,
  CheckCircle2
} from "lucide-react";

interface DashboardCardsProps {
  projects: number;
  methods: number;
  compounds: number;
  chromatograms: number;
}

export default function DashboardCards({
  projects,
  methods,
  compounds,
  chromatograms,
}: DashboardCardsProps) {
  const cards = [
    {
      title: "PubChem",
      value: "Connected",
      icon: Database,
      iconColor: "text-blue-600",
      valueColor: "text-green-600",
    },
    {
      title: "AI Engine",
      value: "Ready",
      icon: BrainCircuit,
      iconColor: "text-purple-600",
      valueColor: "text-green-600",
    },
    {
      title: "Projects",
      value: projects,
      icon: FolderKanban,
      iconColor: "text-orange-600",
      valueColor: "text-slate-800",
    },
    {
      title: "Methods",
      value: methods,
      icon: BarChart3,
      iconColor: "text-green-600",
      valueColor: "text-slate-800",
    },
    {
      title: "Compounds",
      value: compounds,
      icon: Activity,
      iconColor: "text-indigo-600",
      valueColor: "text-slate-800",
    },
    {
      title: "Chromatograms",
      value: chromatograms,
      icon: CheckCircle2,
      iconColor: "text-red-600",
      valueColor: "text-slate-800",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <div
            key={card.title}
            className="bg-white rounded-xl shadow border border-slate-200 p-6 hover:shadow-lg transition"
          >

            <div className="flex justify-between items-start">

              <div>

                <p className="text-slate-500 text-sm">
                  {card.title}
                </p>

                <h2 className={`text-3xl font-bold mt-2 ${card.valueColor}`}>
                  {card.value}
                </h2>

              </div>

              <Icon
                size={34}
                className={card.iconColor}
              />

            </div>

          </div>

        );

      })}

    </div>
  );
}