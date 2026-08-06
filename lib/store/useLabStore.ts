import { create } from "zustand";

export interface Molecule {

  name: string;
  cid: number | null;

  formula: string;

  molecularWeight: number;
  exactMass: number;

  xlogP: number;

  tpsa: number;

  hBondDonors: number;
  hBondAcceptors: number;

  rotatableBonds: number;

  heavyAtoms: number;

  formalCharge: number;

  iupacName: string;canonicalSmiles: string;inchiKey: string;

}

interface LabStore {

  molecule: Molecule;

  setMolecule: (molecule: Partial<Molecule>) => void;

  clearMolecule: () => void;

}

const empty: Molecule = {

  name: "",

  cid: null,

  formula: "",

  molecularWeight: 0,

  exactMass: 0,

  xlogP: 0,

  tpsa: 0,

  hBondDonors: 0,

  hBondAcceptors: 0,

  rotatableBonds: 0,

  heavyAtoms: 0,

  formalCharge: 0,

  iupacName: "",

canonicalSmiles: "",

inchiKey: ""

};

export const useLabStore = create<LabStore>((set) => ({

  molecule: empty,

  setMolecule: (data) =>

    set((state) => ({

      molecule: {

        ...state.molecule,

        ...data

      }

    })),

  clearMolecule: () =>

    set({

      molecule: empty

    })

}));