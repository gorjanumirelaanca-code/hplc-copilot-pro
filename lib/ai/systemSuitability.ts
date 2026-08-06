import { Molecule, Method } from "./retentionPredictor";

export interface SystemSuitability {

  retentionTime: number;

  capacityFactor: number;

  resolution: number;

  tailingFactor: number;

  theoreticalPlates: number;

  pressure: number;

  pass: boolean;

  comments: string[];

}

export function predictSystemSuitability(

  molecule: Molecule,

  method: Method

): SystemSuitability {

  const retentionTime =
    Math.max(
      0.6,
      1.2 +
      molecule.logP * 2 +
      (100 - method.organic) * 0.05
    );

  const capacityFactor =
    (retentionTime - 0.5) / 0.5;

  const resolution =
    1.6 +
    molecule.logP * 0.45;

  const tailingFactor =
    1 +
    molecule.hBondDonors * 0.04 +
    molecule.hBondAcceptors * 0.02;

  const theoreticalPlates =
    Math.round(
      8000 +
      molecule.molecularWeight * 6
    );

  const pressure =
    Math.round(
      110 +
      method.flow * 90 +
      method.organic * 2.2
    );

  const comments: string[] = [];

  if (tailingFactor > 2)
    comments.push("Peak tailing exceeds recommended limit.");

  if (resolution < 2)
    comments.push("Resolution below target.");

  if (theoreticalPlates < 5000)
    comments.push("Column efficiency is low.");

  if (pressure > 400)
    comments.push("Predicted pressure is high.");

  if (comments.length === 0)
    comments.push("Predicted system suitability is acceptable.");

  return {

    retentionTime:
      Number(retentionTime.toFixed(2)),

    capacityFactor:
      Number(capacityFactor.toFixed(2)),

    resolution:
      Number(resolution.toFixed(2)),

    tailingFactor:
      Number(tailingFactor.toFixed(2)),

    theoreticalPlates,

    pressure,

    pass:
      tailingFactor <= 2 &&
      resolution >= 2 &&
      theoreticalPlates >= 5000,

    comments

  };

}