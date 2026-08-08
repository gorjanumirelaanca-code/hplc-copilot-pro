"use client";

import { useLabStore } from "@/lib/store/useLabStore";


export default function MobilePhaseRecommendation() {


  const { molecule } = useLabStore();



  const logP =
    Number(molecule.xlogP) || 2;



  const recommendation =

    logP > 2

      ? {

          organic: "Acetonitrile",

          percentage: "60%",

          mode: "High organic strength for hydrophobic compounds",

        }

      : {

          organic: "Methanol",

          percentage: "40%",

          mode: "Moderate organic strength for polar compounds",

        };




  return (

    <div className="rounded-xl border shadow bg-white p-6">


      <h2 className="text-2xl font-bold mb-5">

        AI Mobile Phase Recommendation

      </h2>




      <div className="space-y-3">


        <div className="flex justify-between">

          <span>Organic Solvent</span>

          <strong>

            {recommendation.organic}

          </strong>

        </div>



        <div className="flex justify-between">

          <span>Organic %</span>

          <strong>

            {recommendation.percentage}

          </strong>

        </div>



        <div className="flex justify-between">

          <span>Strategy</span>

          <strong className="text-right">

            {recommendation.mode}

          </strong>

        </div>


      </div>




      <div className="mt-5 rounded-lg bg-blue-50 p-4">

        Mobile phase selected based on predicted analyte hydrophobicity (logP).

      </div>


    </div>

  );

}