"use client";

import { useState } from "react";
import { useLabStore } from "@/lib/store/useLabStore";

interface Molecule {
  name: string;
  cid?: number | null;
  formula?: string;
  molecularWeight?: number;
  exactMass?: number;
  xlogP?: number;
  tpsa?: number;
  hBondDonors?: number;
  hBondAcceptors?: number;
  rotatableBonds?: number;
  heavyAtoms?: number;
  formalCharge?: number;
  iupacName?: string;
  canonicalSmiles?: string;
  inchiKey?: string;
}


export default function MoleculeSearch() {

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [molecule, setMolecule] = useState<Molecule | null>(null);

  const setStoreMolecule = useLabStore(
    (state) => state.setMolecule
  );


  async function searchMolecule() {

    if (!query.trim()) return;

    setLoading(true);

    try {

      const response = await fetch("/api/pubchem", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          compound: query,
        }),

      });


      const data = await response.json();


      const result: Molecule = {

        name: data.name ?? query,

        cid: data.cid ?? null,

        formula: data.formula ?? "",

        molecularWeight:
          Number(data.molecularWeight ?? 0),

        exactMass:
          Number(data.exactMass ?? 0),

        xlogP:
          Number(data.xlogP ?? 0),

        tpsa:
          Number(data.tpsa ?? 0),

        hBondDonors:
          Number(data.hBondDonors ?? 0),

        hBondAcceptors:
          Number(data.hBondAcceptors ?? 0),

        rotatableBonds:
          Number(data.rotatableBonds ?? 0),

        heavyAtoms:
          Number(data.heavyAtoms ?? 0),

        formalCharge:
          Number(data.formalCharge ?? 0),

        iupacName:
          data.iupacName ?? "",

        canonicalSmiles:
          data.canonicalSmiles ?? "",

        inchiKey:
          data.inchiKey ?? "",

      };


      setMolecule(result);

      setStoreMolecule(result);


    } catch(error) {

      console.error(
        "PubChem search error",
        error
      );

    } finally {

      setLoading(false);

    }

  }


  return (

    <div className="rounded-xl border bg-white shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Molecule Search
      </h2>


      <div className="flex gap-3">

        <input

          className="flex-1 border rounded-lg p-3"

          value={query}

          placeholder="Enter compound name"

          onChange={(e)=>setQuery(e.target.value)}

        />


        <button

          onClick={searchMolecule}

          className="bg-blue-600 text-white px-6 rounded-lg"

        >

          {loading ? "Searching..." : "Search"}

        </button>


      </div>


      {molecule && (

        <div className="mt-6 rounded-lg bg-slate-50 p-5">

          <h3 className="font-bold text-lg">
            {molecule.name}
          </h3>

          <p>
            Formula: {molecule.formula}
          </p>

          <p>
            Molecular Weight: {molecule.molecularWeight}
          </p>

          <p>
            logP: {molecule.xlogP}
          </p>

          <p>
            TPSA: {molecule.tpsa}
          </p>

          <p>
            H Bond Donors: {molecule.hBondDonors}
          </p>

          <p>
            H Bond Acceptors: {molecule.hBondAcceptors}
          </p>

        </div>

      )}

    </div>

  );

}