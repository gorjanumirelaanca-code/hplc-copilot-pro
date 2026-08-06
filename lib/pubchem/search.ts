import { parsePubChem } from "./parser";

export async function searchCompound(
  compound: string
) {

  const properties = [

    "Title",
    "MolecularFormula",
    "MolecularWeight",
    "ExactMass",
    "XLogP",
    "TPSA",
    "HBondDonorCount",
    "HBondAcceptorCount",
    "RotatableBondCount",
    "HeavyAtomCount",
    "Charge",
    "IUPACName",
    "CanonicalSMILES",
    "InChIKey"

  ].join(",");

  const url =
    `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(
      compound
    )}/property/${properties}/JSON`;

  const response = await fetch(url, {

    headers: {

      Accept: "application/json"

    },

    cache: "no-store"

  });

  if (!response.ok) {

    throw new Error(

      `PubChem returned ${response.status}`

    );

  }

  const json = await response.json();

  return parsePubChem(json);

}