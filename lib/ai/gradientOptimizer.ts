import { Molecule } from "./retentionPredictor";

export interface GradientProgram {

  startB: number;

  endB: number;

  time: number;

  reequilibration: number;

  curve: string;

  equilibration: number;

}

export function recommendGradient(

  molecule: Molecule

): GradientProgram {

  if (molecule.logP < 0.5) {

    return {

      startB: 5,

      endB: 45,

      time: 12,

      reequilibration: 3,

      curve: "Linear",

      equilibration: 5

    };

  }

  if (molecule.logP < 2) {

    return {

      startB: 20,

      endB: 90,

      time: 10,

      reequilibration: 3,

      curve: "Linear",

      equilibration: 5

    };

  }

  if (molecule.logP < 4) {

    return {

      startB: 30,

      endB: 95,

      time: 15,

      reequilibration: 4,

      curve: "Concave",

      equilibration: 6

    };

  }

  return {

    startB: 40,

    endB: 98,

    time: 20,

    reequilibration: 5,

    curve: "Convex",

    equilibration: 8

  };

}