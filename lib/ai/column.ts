export type ColumnType =
  | "C18"
  | "C8"
  | "Phenyl"
  | "CN"
  | "HILIC";

export interface ColumnProperties {

  type: ColumnType;

  hydrophobicity: number;

  aromaticity: number;

  polarity: number;

}

const columns: Record<ColumnType, ColumnProperties> = {

  C18: {
    type: "C18",
    hydrophobicity: 1.00,
    aromaticity: 0.20,
    polarity: 0.10,
  },

  C8: {
    type: "C8",
    hydrophobicity: 0.75,
    aromaticity: 0.15,
    polarity: 0.15,
  },

  Phenyl: {
    type: "Phenyl",
    hydrophobicity: 0.55,
    aromaticity: 1.00,
    polarity: 0.20,
  },

  CN: {
    type: "CN",
    hydrophobicity: 0.35,
    aromaticity: 0.10,
    polarity: 0.60,
  },

  HILIC: {
    type: "HILIC",
    hydrophobicity: 0.10,
    aromaticity: 0.10,
    polarity: 1.00,
  }

};

export function getColumnProperties(
  type: ColumnType
) {
  return columns[type];
}