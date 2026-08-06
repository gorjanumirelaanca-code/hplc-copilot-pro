export interface MolecularProfile {

  molecularWeight: number;

  logP?: number;

  pKa?: number;

  acidic?: boolean;

  basic?: boolean;

  neutral?: boolean;

  polarity?: "Low" | "Medium" | "High";

  recommendedColumn: string;

  recommendedMode: string;

  recommendedPH: string;

  recommendedOrganic: string;

  recommendedDetection: string;

}

export function analyzeMolecule(data:any): MolecularProfile {

  const mw =
    Number(data.molecularWeight);

  const logP =
    Number(data.logP ?? 0);

  const pKa =
    Number(data.pKa ?? 0);

  let polarity:
    "Low" | "Medium" | "High" =
    "Medium";

  if(logP > 3){

    polarity = "Low";

  }

  if(logP < 1){

    polarity = "High";

  }

  let column = "C18";

  if(logP < 1){

    column = "HILIC";

  }

  let mode =
    "Reverse Phase";

  if(column==="HILIC"){

    mode="HILIC";

  }

  let ph = "3.0";

  if(pKa>8){

    ph="10";

  }

  return {

    molecularWeight:mw,

    logP,

    pKa,

    acidic:pKa<7,

    basic:pKa>7,

    neutral:pKa===0,

    polarity,

    recommendedColumn:column,

    recommendedMode:mode,

    recommendedPH:ph,

    recommendedOrganic:
      "40–60% ACN",

    recommendedDetection:
      "UV 220 nm"

  };

}