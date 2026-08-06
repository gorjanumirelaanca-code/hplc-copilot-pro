import { PubChemCompound } from "./types";

export function parsePubChem(
  json: any
): PubChemCompound {

  const p = json.PropertyTable.Properties[0];

  return {

    cid: p.CID,

    name: p.Title ?? "",

    formula: p.MolecularFormula ?? "",

    molecularWeight:
      Number(p.MolecularWeight ?? 0),

    exactMass:
      Number(p.ExactMass ?? 0),

    xlogP:
      Number(p.XLogP ?? 0),

    tpsa:
      Number(p.TPSA ?? 0),

    hBondDonors:
      Number(p.HBondDonorCount ?? 0),

    hBondAcceptors:
      Number(p.HBondAcceptorCount ?? 0),

    rotatableBonds:
      Number(p.RotatableBondCount ?? 0),

    heavyAtoms:
      Number(p.HeavyAtomCount ?? 0),

    formalCharge:
      Number(p.Charge ?? 0),

    iupacName:
      p.IUPACName ?? "",

    canonicalSmiles:
      p.CanonicalSMILES ?? "",

    inchiKey:
      p.InChIKey ?? ""

  };

}