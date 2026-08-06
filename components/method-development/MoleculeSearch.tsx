"use client";

import { useState } from "react";
import { useLabStore } from "@/lib/store/useLabStore";

export default function MoleculeSearch() {

  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);

  const { setMolecule } = useLabStore();


  async function searchCompound() {

    if (!query.trim()) return;

    setLoading(true);

    try {

      const response = await fetch(

        `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${query}/property/MolecularWeight,XLogP,TPSA,HBondDonorCount,HBondAcceptorCount,CanonicalSMILES,IUPACName,ExactMass,RotatableBondCount/JSON`

      );


      const data = await response.json();


      const p = data.PropertyTable.Properties[0];


      setMolecule({

        name: query,

        molecularWeight: Number(p.MolecularWeight),

        xlogP: Number(p.XLogP),

        tpsa: Number(p.TPSA),

        hBondDonors: Number(p.HBondDonorCount),

        hBondAcceptors: Number(p.HBondAcceptorCount),

        smiles: p.CanonicalSMILES,

        iupacName: p.IUPACName,

        exactMass: Number(p.ExactMass),

        rotatableBonds: Number(p.RotatableBondCount),

        cid: p.CID

      });


    } catch (error) {

      console.error(error);

    }


    setLoading(false);

  }


  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Compound Search

      </h2>


      <div className="flex gap-3">

        <input

          className="flex-1 border rounded-lg p-3"

          placeholder="Enter compound name (e.g. Caffeine)"

          value={query}

          onChange={(e)=>setQuery(e.target.value)}

        />


        <button

          onClick={searchCompound}

          className="rounded-lg bg-blue-600 text-white px-6"

        >

          {loading ? "Searching..." : "Search PubChem"}

        </button>

      </div>

    </div>

  );

}