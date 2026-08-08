"use client";

interface Molecule {
  name?: string;
  formula?: string;
  molecularWeight?: number;

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

  return (
    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">
        Molecular Structure Viewer
      </h2>


      {molecule ? (

        <div className="space-y-4">


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

            <div className="mt-6">

              <h3 className="font-semibold mb-2">
                SMILES
              </h3>


              <div className="rounded-lg bg-gray-100 p-3 text-sm break-all">

                {smiles}

              </div>


            </div>

          )}



          {molecule.iupacName && (

            <div className="mt-4">

              <h3 className="font-semibold mb-2">
                IUPAC Name
              </h3>


              <p className="text-sm">
                {molecule.iupacName}
              </p>


            </div>

          )}



          <div className="mt-6 rounded-lg bg-blue-50 p-4 text-sm">

            Structure rendering placeholder.

            <br />

            Next upgrade:
            RDKit.js / PubChem SVG 2D structure visualization.

          </div>



        </div>


      ) : (

        <div className="text-gray-500">

          Search for a molecule to display structure information.

        </div>

      )}



    </div>
  );
}