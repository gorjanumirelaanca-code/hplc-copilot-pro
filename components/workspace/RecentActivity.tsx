"use client";

import {
  Clock3,
  FlaskConical,
  Search,
  Bot
} from "lucide-react";

const activities = [
  {
    icon: Search,
    title: "PubChem Lookup",
    description: "No compound searched yet."
  },
  {
    icon: FlaskConical,
    title: "Method Development",
    description: "No methods generated."
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description: "No AI conversations."
  }
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow border border-slate-200 p-6">

      <div className="flex items-center gap-3 mb-6">

        <Clock3
          size={26}
          className="text-blue-600"
        />

        <h2 className="text-2xl font-bold">
          Recent Activity
        </h2>

      </div>

      <div className="space-y-5">

        {activities.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="flex gap-4 items-start"
            >

              <Icon
                size={22}
                className="text-slate-500 mt-1"
              />

              <div>

                <h3 className="font-semibold">

                  {item.title}

                </h3>

                <p className="text-slate-500 text-sm">

                  {item.description}

                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}