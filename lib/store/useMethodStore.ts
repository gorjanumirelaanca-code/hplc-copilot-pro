"use client";

import { create } from "zustand";

interface MethodState {
  organic: number;
  flow: number;
  temperature: number;
  pH: number;
  column: string;

  setOrganic: (value: number) => void;
  setFlow: (value: number) => void;
  setTemperature: (value: number) => void;
  setPH: (value: number) => void;
  setColumn: (value: string) => void;
}

export const useMethodStore = create<MethodState>((set) => ({
  organic: 50,
  flow: 1.0,
  temperature: 30,
  pH: 3.0,
  column: "C18",

  setOrganic: (organic) => set({ organic }),
  setFlow: (flow) => set({ flow }),
  setTemperature: (temperature) => set({ temperature }),
  setPH: (pH) => set({ pH }),
  setColumn: (column) => set({ column }),
}));