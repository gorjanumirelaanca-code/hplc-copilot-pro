"use client";

import {
  FolderOpen,
  FlaskConical,
  Calendar,
  Database
} from "lucide-react";

import { useLabStore } from "@/lib/store/useLabStore";

export default function ProjectPanel() {

  const { molecule } = useLabStore();

  return (

    <div className="bg-white rounded-xl shadow border border-slate-200 p-6">

      <div className="flex items-center gap-3 mb-6">

        <FolderOpen
          className="text-blue-600"
          size={28}
        />

        <h2 className="text-2xl font-bold">

          Active Laboratory Project

        </h2>

      </div>

      <div className="space-y-5">

        <div className="flex justify-between">

          <span className="text-slate-500">

            Project

          </span>

          <span className="font-semibold">

            Untitled Project

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">

            Compound

          </span>

          <span className="font-semibold">

            {molecule.name || "--"}

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">

            Formula

          </span>

          <span className="font-semibold">

            {molecule.formula || "--"}

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">

            Molecular Weight

          </span>

          <span className="font-semibold">

            {molecule.molecularWeight || "--"}

          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">

            PubChem CID

          </span>

          <span className="font-semibold">

            {molecule.cid ?? "--"}

          </span>

        </div>

        <hr />

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-slate-50 rounded-lg p-4">

            <FlaskConical
              className="text-blue-600 mb-2"
              size={24}
            />

            <p className="text-sm text-slate-500">

              Method

            </p>

            <p className="font-bold">

              Pending

            </p>

          </div>

          <div className="bg-slate-50 rounded-lg p-4">

            <Database
              className="text-green-600 mb-2"
              size={24}
            />

            <p className="text-sm text-slate-500">

              PubChem

            </p>

            <p className="font-bold">

              Connected

            </p>

          </div>

        </div>

        <div className="mt-4 flex items-center gap-2 text-slate-500">

          <Calendar size={18} />

          Session started today

        </div>

      </div>

    </div>

  );

}