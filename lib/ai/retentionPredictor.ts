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

export interface Prediction {
  retentionTime: number;
  capacityFactor: number;
  resolution: number;
  tailing: number;
  plates: number;
  pressure: number;
  selectivity: number;
  peakWidth: number;
  solventStrength: number;
}

export function predictRetention(
  molecule: Molecule,
  method: Method
): Prediction {

  const solventStrength = method.organic / 100;

  const hydrophobicity =
    Math.max(molecule.logP, 0.1);

  const ionization =
    1 /
    (1 + Math.pow(10, method.pH - molecule.pKa));

  let rt =
    1.2 +
    hydrophobicity * 2.4 +
    (1 - solventStrength) * 6 +
    molecule.tpsa * 0.01 -
    method.flow * 0.9 -
    (method.temperature - 30) * 0.04 +
    ionization;

  if (rt < 0.5) rt = 0.5;

  const k =
    (rt - 0.5) / 0.5;

  const rs =
    1.5 +
    hydrophobicity * 0.45 +
    (1 - solventStrength);

  const tailing =
    1 +
    molecule.hBondDonors * 0.04 +
    molecule.hBondAcceptors * 0.02;

  const plates =
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

  const peakWidth =
    Number((rt / 18).toFixed(2));

  const selectivity =
    Number((1 + hydrophobicity * 0.25).toFixed(2));

  return {

    retentionTime:
      Number(rt.toFixed(2)),

    capacityFactor:
      Number(k.toFixed(2)),

    resolution:
      Number(rs.toFixed(2)),

    tailing:
      Number(tailing.toFixed(2)),

    plates,

    pressure,

    selectivity,

    peakWidth,

    solventStrength:
      Number(solventStrength.toFixed(2))

  };

}