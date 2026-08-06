export interface MolecularProperties {

  molecularWeight: number;

  logP: number;

  pKa: number;

  tpsa: number;

  hBondDonors: number;

  hBondAcceptors: number;

}

export function calculateRetentionScore(

  p: MolecularProperties

) {

  let score = 0;

  score += p.logP * 3;

  score -= p.tpsa * 0.02;

  score -= p.hBondDonors * 0.5;

  score -= p.hBondAcceptors * 0.2;

  score += p.molecularWeight / 250;

  return Number(score.toFixed(2));

}