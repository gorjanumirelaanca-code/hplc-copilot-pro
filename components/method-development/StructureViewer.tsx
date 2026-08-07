"use client";


interface Molecule {

  name?: string;

  smiles?: string;

  molecularWeight?: number;

  formula?: string;

  iupacName?: string;

}



interface StructureViewerProps {

  molecule?: Molecule;

}



export default function StructureViewer({

  molecule

}: StructureViewerProps) {


  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-xl font-bold mb-4">

        Molecular Structure Viewer

      </h2>



      {molecule ? (


        <div className="space-y-3">


          <p className="font-semibold">

            {molecule.name || "Unknown compound"}

          </p>



          {molecule.formula && (

            <p className="text-sm">

              Formula: {molecule.formula}

            </p>

          )}



          {molecule.molecularWeight && (

            <p className="text-sm">

              Molecular Weight: {molecule.molecularWeight}

            </p>

          )}



          {molecule.smiles && (

            <div>


              <p className="text-sm font-semibold">

                SMILES

              </p>


              <p className="text-xs break-all bg-slate-100 rounded p-3">

                {molecule.smiles}

              </p>


            </div>

          )}



          {molecule.iupacName && (

            <div>


              <p className="text-sm font-semibold">

                IUPAC Name

              </p>


              <p className="text-xs">

                {molecule.iupacName}

              </p>


            </div>

          )}



        </div>


      ) : (


        <p className="text-slate-500">

          Search for a molecule to display structure information.

        </p>


      )}


    </div>

  );

}