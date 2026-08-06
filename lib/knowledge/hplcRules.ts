export const HPLCRules = {

  columns: {

    C18: {
      bestFor: [
        "Hydrophobic compounds",
        "General pharmaceutical analysis",
        "Reverse phase methods"
      ],
      limitations: [
        "Very polar compounds may elute too early."
      ]
    },

    HILIC: {
      bestFor: [
        "Very polar compounds",
        "Highly ionized analytes",
        "Sugars",
        "Amino acids"
      ],
      limitations: [
        "Longer equilibration times."
      ]
    },

    Phenyl: {
      bestFor: [
        "Aromatic compounds",
        "π-π interactions"
      ]
    }

  },

  pH: {

    acidic:
      "Operate 2–3 pH units below pKa to suppress ionization.",

    basic:
      "Operate 2–3 pH units above pKa when appropriate and column chemistry allows.",

    neutral:
      "Operate near neutral pH for stable neutral compounds."

  },

  organicModifier: {

    lowLogP:
      "30–40% ACN",

    mediumLogP:
      "40–60% ACN",

    highLogP:
      "60–80% ACN"

  },

  troubleshooting: {

    tailing:
      "Check pH, silanol interactions, injection solvent, column contamination.",

    fronting:
      "Reduce injection volume or use a weaker sample solvent.",

    poorRetention:
      "Decrease organic %, lower pH (for weak acids), or consider HILIC.",

    highBackpressure:
      "Inspect frits, guard column, tubing, and mobile phase filtration."

  }

};