"use client";

import {
  BrainCircuit,
  Database,
  CheckCircle2,
  Activity,
  Cpu
} from "lucide-react";

export default function AIStatus() {

  const services = [
    {
      name: "PubChem",
      status: "Online",
      color: "text-green-600",
      icon: Database
    },
    {
      name: "Method Engine",
      status: "Ready",
      color: "text-green-600",
      icon: BrainCircuit
    },
    {
      name: "Knowledge Base",
      status: "Loaded",
      color: "text-green-600",
      icon: CheckCircle2
    },
    {
      name: "Chromatogram Engine",
      status: "Ready",
      color: "text-green-600",
      icon: Activity
    },
    {
      name: "AI Copilot",
      status: "Online",
      color: "text-green-600",
      icon: Cpu
    }
  ];

  return (

    <div className="bg-white rounded-xl shadow border border-slate-200 p-6">

      <h2 className="text-2xl font-bold mb-6">

        AI System Status

      </h2>

      <div className="space-y-4">

        {services.map((service) => {

          const Icon = service.icon;

          return (

            <div
              key={service.name}
              className="flex justify-between items-center border-b pb-3 last:border-0"
            >

              <div className="flex items-center gap-3">

                <Icon
                  size={22}
                  className="text-blue-600"
                />

                <span className="font-medium">

                  {service.name}

                </span>

              </div>

              <span className={`font-semibold ${service.color}`}>

                {service.status}

              </span>

            </div>

          );

        })}

      </div>

    </div>

  );

}