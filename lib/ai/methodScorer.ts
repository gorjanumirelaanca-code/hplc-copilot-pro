import { Molecule, Method } from "./retentionPredictor";

export function calculateMethodScore(

  molecule: Molecule,

  method: Method

): number {

  let score = 100;

  if (molecule.logP < 0.5)
    score -= 10;

  if (molecule.logP > 5)
    score -= 6;

  if (molecule.tpsa > 120)
    score -= 6;

  if (molecule.hBondDonors > 3)
    score -= 4;

  if (molecule.hBondAcceptors > 8)
    score -= 3;

  if (method.organic < 10)
    score -= 4;

  if (method.organic > 90)
    score -= 6;

  if (method.flow > 1.2)
    score -= 4;

  if (method.temperature > 45)
    score -= 3;

  if (method.pH < 2)
    score -= 2;

  if (method.pH > 9)
    score -= 2;

  if (score < 0)
    score = 0;

  return Math.round(score);

}