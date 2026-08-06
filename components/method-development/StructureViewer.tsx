"use client";

import { useLabStore } from "@/lib/store/useLabStore";

export default function StructureViewer() {

  const { molecule } = useLabStore();


  const structureUrl = molecule.cid

    ? `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${molecule.cid}/PNG`

    : "";


  return (

    <div className="rounded-xl border shadow bg-white p-6">


      <h2 className="text-2xl font-bold mb-5">

        2D Chemical Structure

      </h2>


      <div className="flex justify-center items-center min-h-[280px]">


        {structureUrl ? (

          <img

            src={structureUrl}

            alt="Chemical structure"

            className="max-h-[260px] object-contain"

          />

        ) : (

          <div className="text-slate-500">

            No structure available. Search a compound first.

          </div>

        )}


      </div>


      {molecule.smiles && (

        <div className="mt-5 rounded-lg bg-slate-50 p-4">

          <div className="text-sm text-slate-500 mb-2">

            SMILES

          </div>

          <div className="text-sm break-all">

            {molecule.smiles}

          </div>

        </div>

      )}


    </div>

  );

}