export interface PubChemCompound {

  cid: number;

  name: string;

  formula: string;

  molecularWeight: number;

  exactMass: number;

  xlogP: number;

  tpsa: number;

  hBondDonors: number;

  hBondAcceptors: number;

  rotatableBonds: number;

  heavyAtoms: number;

  formalCharge: number;

  iupacName: string;

  canonicalSmiles: string;

  inchiKey: string;

}