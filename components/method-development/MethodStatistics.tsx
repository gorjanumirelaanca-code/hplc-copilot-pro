"use client";

import { useLabStore } from "@/lib/store/useLabStore";

export default function MethodStatistics() {

  const { molecule } = useLabStore();

  const mw = molecule.molecularWeight || 0;
  const logP = molecule.xlogP || 0;
  const tpsa = molecule.tpsa || 0;

  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Compound Statistics

      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Molecular Weight</span>
          <strong>{mw.toFixed(2)}</strong>
        </div>

        <div className="flex justify-between">
          <span>LogP</span>
          <strong>{logP}</strong>
        </div>

        <div className="flex justify-between">
          <span>TPSA</span>
          <strong>{tpsa}</strong>
        </div>

        <div className="flex justify-between">
          <span>Hydrogen Bond Donors</span>
          <strong>{molecule.hBondDonors}</strong>
        </div>

        <div className="flex justify-between">
          <span>Hydrogen Bond Acceptors</span>
          <strong>{molecule.hBondAcceptors}</strong>
        </div>

        <div className="flex justify-between">
          <span>Rotatable Bonds</span>
          <strong>{molecule.rotatableBonds}</strong>
        </div>

        <div className="flex justify-between">
          <span>Heavy Atoms</span>
          <strong>{molecule.heavyAtoms}</strong>
        </div>

      </div>

    </div>

  );

}