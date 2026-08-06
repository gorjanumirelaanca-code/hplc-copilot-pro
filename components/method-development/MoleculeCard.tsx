"use client";

import { useLabStore } from "@/lib/store/useLabStore";

export default function MoleculeCard() {

  const { molecule } = useLabStore();


  const properties = [

    {
      label: "Compound",
      value: molecule.name || "-"
    },

    {
      label: "Formula",
      value: molecule.formula || "-"
    },

    {
      label: "Molecular Weight",
      value: molecule.molecularWeight
        ? Number(molecule.molecularWeight).toFixed(2)
        : "-"
    },

    {
      label: "Exact Mass",
      value: molecule.exactMass
        ? Number(molecule.exactMass).toFixed(4)
        : "-"
    },

    {
      label: "XLogP",
      value: molecule.xlogP || "-"
    },

    {
      label: "TPSA",
      value: molecule.tpsa
        ? `${molecule.tpsa} Å²`
        : "-"
    },

    {
      label: "H-Bond Donors",
      value: molecule.hBondDonors ?? "-"
    },

    {
      label: "H-Bond Acceptors",
      value: molecule.hBondAcceptors ?? "-"
    },

    {
      label: "Rotatable Bonds",
      value: molecule.rotatableBonds ?? "-"
    }

  ];


  return (

    <div className="rounded-xl border shadow bg-white p-6">


      <h2 className="text-2xl font-bold mb-5">

        Molecule Properties

      </h2>


      <div className="space-y-3">


        {properties.map((item,index)=>(

          <div

            key={index}

            className="flex justify-between border-b pb-2"

          >

            <span className="text-slate-500">

              {item.label}

            </span>


            <strong>

              {item.value}

            </strong>


          </div>

        ))}


      </div>


    </div>

  );

}