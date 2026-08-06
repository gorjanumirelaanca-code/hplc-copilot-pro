"use client";

import Link from "next/link";

import {
  Search,
  FlaskConical,
  Activity,
  Wrench,
  Bot,
  BookOpen
} from "lucide-react";

export default function QuickActions() {

  const actions = [

    {
      title: "Search Compound",
      icon: Search,
      href: "/method-development",
      color: "bg-blue-600"
    },

    {
      title: "Generate Method",
      icon: FlaskConical,
      href: "/method-development",
      color: "bg-green-600"
    },

    {
      title: "Simulate Chromatogram",
      icon: Activity,
      href: "/chromatogram-studio",
      color: "bg-purple-600"
    },

    {
      title: "Troubleshoot Method",
      icon: Wrench,
      href: "/troubleshooting",
      color: "bg-red-600"
    },

    {
      title: "Ask AI",
      icon: Bot,
      href: "/assistant",
      color: "bg-slate-700"
    },

    {
      title: "Knowledge Center",
      icon: BookOpen,
      href: "/knowledge",
      color: "bg-orange-600"
    }

  ];

  return (

    <div className="bg-white rounded-xl shadow border border-slate-200 p-6">

      <h2 className="text-2xl font-bold mb-6">

        Quick Actions

      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <Link

              key={action.title}

              href={action.href}

              className={`${action.color} rounded-xl p-5 text-white hover:opacity-90 transition`}

            >

              <Icon
                size={30}
                className="mb-3"
              />

              <p className="font-semibold">

                {action.title}

              </p>

            </Link>

          );

        })}

      </div>

    </div>

  );

}