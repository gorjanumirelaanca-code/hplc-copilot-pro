import { Molecule } from "./retentionPredictor";

export interface PHRecommendation {

  pH: number;

  buffer: string;

  ionicStrength: string;

  explanation: string;

}

export function recommendPH(

  molecule: Molecule

): PHRecommendation {

  if (molecule.pKa <= 0) {

    return {

      pH: 3.0,

      buffer: "0.1% Formic Acid",

      ionicStrength: "10 mM",

      explanation:
        "Unknown pKa. Acidic conditions provide a robust starting point."

    };

  }

  if (molecule.pKa < 4) {

    return {

      pH: 2.8,

      buffer: "0.1% Formic Acid",

      ionicStrength: "10 mM",

      explanation:
        "Operate at least one pH unit below the pKa to suppress ionization."

    };

  }

  if (molecule.pKa < 8) {

    return {

      pH: 4.5,

      buffer: "10 mM Ammonium Formate",

      ionicStrength: "10 mM",

      explanation:
        "Intermediate pKa. Mild acidic conditions provide good robustness."

    };

  }

  return {

    pH: 9.0,

    buffer: "10 mM Ammonium Bicarbonate",

    ionicStrength: "10 mM",

    explanation:
      "Operate above the pKa to control ionization of basic analytes."

  };

}