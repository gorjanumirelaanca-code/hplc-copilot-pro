export * from "./methodEngine";

export * from "./methodEngineV2";

export * from "./methodEngineV3";

export * from "./retention";

export {
  predictRetention as predictRetentionPredictor
} from "./retentionPredictor";

export * from "./gradientOptimizer";

export * from "./recommendations";

export * from "./mobilePhase";

export * from "./mobilePhaseOptimizer";

export * from "./methodScorer";

export * from "./scientificRules";

export * from "./troubleshooter";

export * from "./aiAdvisor";


// ==============================
// Compatibility helpers
// ==============================


export function recommendPH(

  molecule: any = {}

) {


  const pKa = Number(molecule.pKa ?? 6);



  let pH = 6.5;



  if (pKa < 5) {

    pH = 3;

  }



  if (pKa > 9) {

    pH = 8;

  }



  return {


    pH,


    buffer:

      pH < 5

        ? "Phosphate buffer"

        : "Ammonium acetate buffer",


    ionicStrength:

      0.01,


    concentration:

      "10 mM",


    rationale:

      "Buffer selected based on analyte ionization behavior.",


    explanation:

      pH < 5

        ? "Acidic buffer selected to control ionization of weak acids and improve chromatographic retention."

        : "Near-neutral buffer selected to maintain analyte stability and reproducible retention."

  };

}



export function recommendBuffer(

  molecule: any = {}

) {


  return recommendPH(molecule);

}



export function recommendColumn(

  molecule: any = {}

) {


  const logP = Number(molecule.logP ?? 2);



  return {


    column:

      logP > 3

        ? "C18 Reversed Phase"

        : "Phenyl-Hexyl Column",


    particle:

      "5 µm",


    dimensions:

      "150 × 4.6 mm",


    rationale:

      "Column selected based on analyte hydrophobicity.",


    explanation:

      "Stationary phase selected to balance retention, selectivity, and peak shape."

  };

}