"use client";

import Image from "next/image";


interface Molecule {

  name?: string;

  formula?: string;

  molecularWeight?: number;

  cid?: number | null;

  smiles?: string;

  canonicalSmiles?: string;

  iupacName?: string;

}



interface StructureViewerProps {

  molecule?: Molecule;

}



export default function StructureViewer({

  molecule,

}: StructureViewerProps) {


  const smiles =

    molecule?.smiles ||

    molecule?.canonicalSmiles ||

    "";



  const structureImage =

    molecule?.cid

      ? `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${molecule.cid}/PNG`

      : "";



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-2xl font-bold mb-5">

        Molecular Structure Viewer

      </h2>



      {molecule ? (


        <div className="space-y-5">


          {structureImage && (

            <div className="flex justify-center rounded-lg bg-gray-50 p-4">


              <Image

                src={structureImage}

                alt={`${molecule.name || "Molecule"} structure`}

                width={300}

                height={300}

                unoptimized

              />


            </div>

          )}



          <div className="flex justify-between">

            <span className="font-medium">

              Compound

            </span>


            <strong>

              {molecule.name || "Unknown compound"}

            </strong>


          </div>




          {molecule.formula && (

            <div className="flex justify-between">

              <span>

                Formula

              </span>


              <strong>

                {molecule.formula}

              </strong>


            </div>

          )}




          {molecule.molecularWeight && (

            <div className="flex justify-between">

              <span>

                Molecular Weight

              </span>


              <strong>

                {molecule.molecularWeight}

              </strong>


            </div>

          )}




          {smiles && (

            <div>

              <h3 className="font-semibold mb-2">

                SMILES

              </h3>


              <div className="rounded-lg bg-gray-100 p-3 text-sm break-all">

                {smiles}

              </div>

            </div>

          )}




          {molecule.iupacName && (

            <div>

              <h3 className="font-semibold mb-2">

                IUPAC Name

              </h3>


              <p className="text-sm">

                {molecule.iupacName}

              </p>


            </div>

          )}



          {!structureImage && (

            <div className="rounded-lg bg-blue-50 p-4 text-sm">

              Structure image unavailable.

              PubChem CID is required.

            </div>

          )}



        </div>


      ) : (


        <div className="text-gray-500">

          Search for a molecule to display structure information.

        </div>


      )}



    </div>

  );

}