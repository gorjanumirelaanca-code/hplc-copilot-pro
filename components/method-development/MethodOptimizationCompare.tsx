"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { predictRetention } from "@/lib/ai";


export default function MethodOptimizationCompare() {


  const { molecule } = useLabStore();


  const {
    organic,
    flow,
    temperature,
    pH
  } = useMethodStore();



  const current = predictRetention(

    {
      molecularWeight: Number(molecule.molecularWeight) || 250,
      logP: Number(molecule.xlogP) || 2,
      pKa: 4.5,
      tpsa: Number(molecule.tpsa) || 40,
      hBondDonors: Number(molecule.hBondDonors) || 1,
      hBondAcceptors: Number(molecule.hBondAcceptors) || 2
    },

    {
      organic,
      flow,
      temperature,
      pH
    }

  );



  const optimized = predictRetention(

    {
      molecularWeight: Number(molecule.molecularWeight) || 250,
      logP: Number(molecule.xlogP) || 2,
      pKa: 4.5,
      tpsa: Number(molecule.tpsa) || 40,
      hBondDonors: Number(molecule.hBondDonors) || 1,
      hBondAcceptors: Number(molecule.hBondAcceptors) || 2
    },

    {
      organic: Math.max(10, organic - 15),
      flow: 0.8,
      temperature: temperature + 5,
      pH
    }

  );


  return (

    <div className="rounded-xl border shadow bg-white p-6">


      <h2 className="text-2xl font-bold mb-6">

        AI Method Optimization

      </h2>



      <div className="grid md:grid-cols-2 gap-6">


        <div className="rounded-xl bg-slate-50 p-5">

          <h3 className="font-bold text-lg">

            Current Method

          </h3>


          <div className="mt-4 space-y-2">

            <p>
              RT: {current.retentionTime} min
            </p>

            <p>
              Resolution: {current.resolution}
            </p>

            <p>
              Tailing: {current.tailing}
            </p>

            <p>
              Pressure: {current.pressure} bar
            </p>

          </div>

        </div>



        <div className="rounded-xl bg-green-50 p-5">

          <h3 className="font-bold text-lg">

            AI Optimized Method

          </h3>


          <div className="mt-4 space-y-2">

            <p>
              RT: {optimized.retentionTime} min
            </p>

            <p>
              Resolution: {optimized.resolution}
            </p>

            <p>
              Tailing: {optimized.tailing}
            </p>

            <p>
              Pressure: {optimized.pressure} bar
            </p>

          </div>


        </div>


      </div>


      <div className="mt-6 rounded-lg bg-blue-50 p-4">

        AI compares chromatographic performance and recommends improved conditions.

      </div>


    </div>

  );

}