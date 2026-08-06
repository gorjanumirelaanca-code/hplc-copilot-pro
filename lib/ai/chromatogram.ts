import { Peak } from "./gaussian";
import {
  Molecule,
  Method,
  predictRetention,
} from "./retention";

export interface ChromatogramInput {
  molecule: Molecule;
  method: Method;
}

export function buildChromatogram(
  input: ChromatogramInput
): Peak[] {

  const prediction = predictRetention(
    input.molecule,
    input.method
  );

  const rt = prediction.retentionTime;

  return [
    {
      retentionTime: Number((rt * 0.55).toFixed(2)),
      width: 0.14,
      height: 35,
    },
    {
      retentionTime: Number(rt.toFixed(2)),
      width: 0.18,
      height: 100,
    },
    {
      retentionTime: Number((rt * 1.45).toFixed(2)),
      width: 0.22,
      height: 55,
    },
  ];
}