export interface Molecule {

  molecularWeight: number;

  logP: number;

  pKa: number;

  tpsa: number;

  hBondDonors: number;

  hBondAcceptors: number;

}

export interface Method {

  organic: number;

  flow: number;

  temperature: number;

  pH: number;

}

export interface RetentionPrediction {

  retentionScore: number;

  retentionTime: number;

  k: number;

  ionizedFraction: number;

}

export function predictRetention(

  molecule: Molecule,

  method: Method

): RetentionPrediction {

  // Organic solvent strength (0–1)
  const solventStrength =
    Math.max(0.05, (100 - method.organic) / 100);

  // Temperature correction
  const temperatureCorrection =
    1 - (method.temperature - 30) * 0.003;

  // Henderson–Hasselbalch approximation
  const ionizedFraction =
    1 /
    (
      1 +
      Math.pow(
        10,
        method.pH - molecule.pKa
      )
    );

  // Hydrophobic contribution
  const hydrophobic =
    molecule.logP *
    solventStrength;

  // Polar penalty
  const polarPenalty =
    molecule.tpsa * 0.010;

  // Hydrogen bonding contribution
  const hydrogenBonding =
    (
      molecule.hBondDonors +
      molecule.hBondAcceptors
    ) * 0.08;

  // Molecular size contribution
  const sizeContribution =
    molecule.molecularWeight / 300;

  const score =

    hydrophobic *

    ionizedFraction *

    temperatureCorrection +

    sizeContribution -

    polarPenalty -

    hydrogenBonding;

  const k = Math.max(

    0.5,

    score * 2.2

  );

  const retentionTime =

    1 +

    k / Math.max(method.flow, 0.1);

  return {

    retentionScore:
      Number(score.toFixed(2)),

    retentionTime:
      Number(retentionTime.toFixed(2)),

    k:
      Number(k.toFixed(2)),

    ionizedFraction:
      Number(ionizedFraction.toFixed(3))

  };

}