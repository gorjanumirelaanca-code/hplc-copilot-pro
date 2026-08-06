export async function searchCompound(
  compound: string
) {

  const properties = [
    "MolecularFormula",
    "MolecularWeight",
    "XLogP",
    "TPSA",
    "HBondDonorCount",
    "HBondAcceptorCount",
    "RotatableBondCount",
    "HeavyAtomCount",
    "Complexity",
    "CanonicalSMILES",
    "IsomericSMILES"
  ].join(",");

  const url =
    `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(compound)}/property/${properties}/JSON`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("PubChem lookup failed");
  }

  const json = await response.json();

  const p =
    json.PropertyTable.Properties[0];

  return {

    cid: p.CID,

    name: compound,

    formula:
      p.MolecularFormula,

    molecularWeight:
      p.MolecularWeight,

    logP:
      p.XLogP,

    tpsa:
      p.TPSA,

    hBondDonors:
      p.HBondDonorCount,

    hBondAcceptors:
      p.HBondAcceptorCount,

    rotatableBonds:
      p.RotatableBondCount,

    heavyAtoms:
      p.HeavyAtomCount,

    complexity:
      p.Complexity,

    smiles:
      p.CanonicalSMILES,

    isomericSmiles:
      p.IsomericSMILES

  };

}