"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { recommendMobilePhase } from "@/lib/ai";

export default function MethodConditions() {

  const { molecule } = useLabStore();

  const {
    organic,
    flow,
    temperature,
    pH
  } = useMethodStore();


  const mobile = recommendMobilePhase({

    molecularWeight: Number(molecule.molecularWeight) || 250,

    logP: Number(molecule.xlogP) || 2,

    pKa: 4.5,

    tpsa: Number(molecule.tpsa) || 40,

    hBondDonors: Number(molecule.hBondDonors) || 1,

    hBondAcceptors: Number(molecule.hBondAcceptors) || 2

  });


  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        AI Method Conditions

      </h2>


      <div className="space-y-3">


        <div className="flex justify-between">

          <span>Organic Solvent</span>

          <strong>{mobile.organic}</strong>

        </div>


        <div className="flex justify-between">

          <span>Buffer</span>

          <strong>{mobile.buffer}</strong>

        </div>


        <div className="flex justify-between">

          <span>pH</span>

          <strong>{pH || mobile.pH}</strong>

        </div>


        <div className="flex justify-between">

          <span>Flow Rate</span>

          <strong>{flow} mL/min</strong>

        </div>


        <div className="flex justify-between">

          <span>Temperature</span>

          <strong>{temperature} °C</strong>

        </div>


        <div className="flex justify-between">

          <span>Organic %</span>

          <strong>{organic}%</strong>

        </div>


        <div className="flex justify-between">

          <span>Detection</span>

          <strong>{mobile.wavelength} nm</strong>

        </div>


      </div>


    </div>

  );

}