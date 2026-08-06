import { Molecule } from "./retentionPredictor";

export interface ColumnRecommendation {

  column: string;

  particle: string;

  length: number;

  id: number;

  poreSize: number;

  confidence: number;

  reason: string;

}

export function recommendColumn(

  molecule: Molecule

): ColumnRecommendation {

  if (molecule.logP < 0.5) {

    return {

      column: "HILIC",

      particle: "1.7 µm",

      length: 100,

      id: 2.1,

      poreSize: 120,

      confidence: 98,

      reason:
        "Highly polar compound. HILIC provides significantly better retention."

    };

  }

  if (molecule.logP < 2) {

    return {

      column: "C18",

      particle: "2.6 µm",

      length: 150,

      id: 4.6,

      poreSize: 100,

      confidence: 97,

      reason:
        "Balanced polarity. Standard C18 provides robust selectivity."

    };

  }

  if (molecule.logP < 4) {

    return {

      column: "Phenyl-Hexyl",

      particle: "2.6 µm",

      length: 150,

      id: 4.6,

      poreSize: 100,

      confidence: 95,

      reason:
        "Aromatic interactions may improve selectivity."

    };

  }

  return {

    column: "C18",

    particle: "3.0 µm",

    length: 250,

    id: 4.6,

    poreSize: 100,

    confidence: 94,

    reason:
      "Highly hydrophobic compound requiring increased retention."

  };

}