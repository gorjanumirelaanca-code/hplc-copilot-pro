"use client";

import { useState } from "react";


interface Molecule {

  name?: string;

  molecularWeight?: number;

  logP?: number;

  pKa?: number;

  tpsa?: number;

  hBondDonors?: number;

  hBondAcceptors?: number;

  smiles?: string;

  iupacName?: string;

  formula?: string;

}



export default function MoleculeSearch() {


  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);

  const [molecule, setMolecule] = useState<Molecule | null>(null);



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

          query,

        }),

      });



      const data = await response.json();


      console.log("PUBCHEM RESPONSE:", data);



      const p = data?.properties ?? data;



      const result: Molecule = {


        name:

          p.Title ??

          p.title ??

          p.name ??

          query,



        molecularWeight:

          Number(

            p.MolecularWeight ??

            p.molecularWeight ??

            p.molecular_weight ??

            0

          ),



        logP:

          Number(

            p.XLogP ??

            p.xlogp ??

            p.logP ??

            p.logp ??

            0

          ),



        pKa:

          Number(

            p.PKa ??

            p.pKa ??

            0

          ),



        tpsa:

          Number(

            p.TPSA ??

            p.tpsa ??

            0

          ),



        hBondDonors:

          Number(

            p.HBondDonorCount ??

            p.hBondDonors ??

            p.hBondDonorCount ??

            0

          ),



        hBondAcceptors:

          Number(

            p.HBondAcceptorCount ??

            p.hBondAcceptors ??

            p.hBondAcceptorCount ??

            0

          ),



        smiles:

          p.CanonicalSMILES ??

          p.canonicalSMILES ??

          p.smiles ??

          "",



        iupacName:

          p.IUPACName ??

          p.iupacName ??

          "",



        formula:

          p.MolecularFormula ??

          p.molecularFormula ??

          p.formula ??

          "",


      };



      setMolecule(result);



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


          onChange={(e) => setQuery(e.target.value)}


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

            Formula: {molecule.formula || "-"}

          </p>



          <p>

            Molecular Weight: {molecule.molecularWeight}

          </p>



          <p>

            logP: {molecule.logP}

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



          {molecule.smiles && (

            <p className="mt-3 text-xs break-all">

              SMILES: {molecule.smiles}

            </p>

          )}



          {molecule.iupacName && (

            <p className="mt-2 text-xs">

              IUPAC: {molecule.iupacName}

            </p>

          )}



        </div>


      )}



    </div>

  );

}