export interface MoleculeProfile {
  polarity: string;
  ionization: string;
  retention: string;
  recommendedColumn: string;
  recommendedPH: string;
  recommendedOrganic: string;
  expectedUV: string;
}

export function analyzeMolecule(
  pKa: number,
  logP: number
): MoleculeProfile {

  let polarity = "Moderate";

  if (logP > 3)
    polarity = "Hydrophobic";

  if (logP < 1)
    polarity = "Polar";

  let ionization = "Neutral";

  if (pKa < 4)
    ionization = "Acidic";

  else if (pKa > 8)
    ionization = "Basic";

  return {

    polarity,

    ionization,

    retention:
      logP > 3
        ? "High"
        : logP > 1
        ? "Moderate"
        : "Low",

    recommendedColumn:
      "C18",

    recommendedPH:
      ionization === "Acidic"
        ? "2.5–3.0"
        : ionization === "Basic"
        ? "3.0–4.0"
        : "3–6",

    recommendedOrganic:
      "Acetonitrile",

    expectedUV:
      "220–254 nm",

  };

}