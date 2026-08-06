import { Molecule } from "./retentionPredictor";

export interface MobilePhaseRecommendation {

  aqueous: string;

  organic: string;

  buffer: string;

  pH: number;

  startOrganic: number;

  endOrganic: number;

  gradientTime: number;

  flow: number;

  temperature: number;

  wavelength: number;

}

export function recommendMobilePhase(

  molecule: Molecule

): MobilePhaseRecommendation {

  if (molecule.logP < 0.5) {

    return {

      aqueous: "10 mM Ammonium Formate",

      organic: "Acetonitrile",

      buffer: "Ammonium Formate",

      pH: 6.8,

      startOrganic: 5,

      endOrganic: 45,

      gradientTime: 12,

      flow: 0.40,

      temperature: 35,

      wavelength: 210

    };

  }

  if (molecule.logP < 2) {

    return {

      aqueous: "0.1% Formic Acid",

      organic: "Acetonitrile",

      buffer: "Formic Acid",

      pH: 3.0,

      startOrganic: 20,

      endOrganic: 90,

      gradientTime: 10,

      flow: 1.00,

      temperature: 30,

      wavelength: 254

    };

  }

  if (molecule.logP < 4) {

    return {

      aqueous: "10 mM Ammonium Acetate",

      organic: "Methanol",

      buffer: "Ammonium Acetate",

      pH: 5.5,

      startOrganic: 30,

      endOrganic: 95,

      gradientTime: 15,

      flow: 1.00,

      temperature: 35,

      wavelength: 254

    };

  }

  return {

    aqueous: "0.1% Formic Acid",

    organic: "Acetonitrile",

    buffer: "Formic Acid",

    pH: 2.8,

    startOrganic: 40,

    endOrganic: 98,

    gradientTime: 18,

    flow: 1.20,

    temperature: 40,

    wavelength: 280

  };

}