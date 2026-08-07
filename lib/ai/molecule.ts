export interface MoleculeProperties {

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



export function analyzeMolecule(

  molecule: MoleculeProperties

) {


  return {


    ...molecule,


    polarity:

      (molecule.tpsa ?? 0) > 60

      ? "High polarity"

      : "Moderate polarity",


    ionization:

      molecule.pKa

      ? `pKa ${molecule.pKa}`

      : "Unknown"


  };


}